import React, { useCallback } from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { GestureDetector, Gesture } from 'react-native-gesture-handler';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  runOnJS,
} from 'react-native-reanimated';

const { height } = Dimensions.get('window');

const SNAP_POINTS = {
  MIN: height * 0.25,  // 25% - collapsed
  MID: height * 0.50,  // 50% - medium
  MAX: height * 0.85,  // 85% - expanded
};

interface DraggableBottomSheetProps {
  children: React.ReactNode;
  onHeightChange?: (height: number) => void;
}

export default function DraggableBottomSheet({ children, onHeightChange }: DraggableBottomSheetProps) {
  const translateY = useSharedValue(0);
  const context = useSharedValue({ y: 0 });
  const currentHeight = useSharedValue(SNAP_POINTS.MID);

  const notifyHeightChange = useCallback((newHeight: number) => {
    onHeightChange?.(newHeight);
  }, [onHeightChange]);

  const snapToNearest = (velocity: number) => {
    'worklet';
    const currentPosition = height - currentHeight.value + translateY.value;

    let targetSnapPoint = SNAP_POINTS.MID;

    if (velocity < -500) {
      // Fast upward swipe - expand
      targetSnapPoint = SNAP_POINTS.MAX;
    } else if (velocity > 500) {
      // Fast downward swipe - collapse
      targetSnapPoint = SNAP_POINTS.MIN;
    } else {
      // Snap to nearest based on current position
      const distances = [
        { point: SNAP_POINTS.MIN, distance: Math.abs(currentPosition - (height - SNAP_POINTS.MIN)) },
        { point: SNAP_POINTS.MID, distance: Math.abs(currentPosition - (height - SNAP_POINTS.MID)) },
        { point: SNAP_POINTS.MAX, distance: Math.abs(currentPosition - (height - SNAP_POINTS.MAX)) },
      ];

      distances.sort((a, b) => a.distance - b.distance);
      targetSnapPoint = distances[0].point;
    }

    const targetTranslateY = height - targetSnapPoint - (height - currentHeight.value);
    translateY.value = withSpring(targetTranslateY, {
      damping: 20,
      stiffness: 150,
    });

    currentHeight.value = targetSnapPoint;
    runOnJS(notifyHeightChange)(targetSnapPoint);
  };

  const panGesture = Gesture.Pan()
    .onStart(() => {
      context.value = { y: translateY.value };
    })
    .onUpdate((event) => {
      const newTranslateY = context.value.y + event.translationY;

      // Limit the drag range
      const maxDrag = height - SNAP_POINTS.MAX - (height - currentHeight.value);
      const minDrag = height - SNAP_POINTS.MIN - (height - currentHeight.value);

      translateY.value = Math.max(maxDrag, Math.min(minDrag, newTranslateY));
    })
    .onEnd((event) => {
      snapToNearest(event.velocityY);
    });

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateY: translateY.value }],
  }));

  return (
    <Animated.View style={[styles.container, animatedStyle]}>
      <GestureDetector gesture={panGesture}>
        <View style={styles.handleContainer}>
          <View style={styles.handle} />
        </View>
      </GestureDetector>
      {children}
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: SNAP_POINTS.MID,
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    elevation: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -4 },
    shadowOpacity: 0.2,
    shadowRadius: 16,
  },
  handleContainer: {
    paddingVertical: 12,
    alignItems: 'center',
  },
  handle: {
    width: 40,
    height: 5,
    backgroundColor: '#D1D5DB',
    borderRadius: 3,
  },
});

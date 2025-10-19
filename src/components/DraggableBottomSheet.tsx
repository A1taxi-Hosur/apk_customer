import React from 'react';
import { View, StyleSheet, Dimensions, ScrollView } from 'react-native';
import { GestureDetector, Gesture } from 'react-native-gesture-handler';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';

const { height: SCREEN_HEIGHT } = Dimensions.get('window');

const MIN_HEIGHT = SCREEN_HEIGHT * 0.3;  // 30% collapsed
const MAX_HEIGHT = SCREEN_HEIGHT * 0.85; // 85% expanded

interface DraggableBottomSheetProps {
  children: React.ReactNode;
}

export default function DraggableBottomSheet({ children }: DraggableBottomSheetProps) {
  const translateY = useSharedValue(0);
  const context = useSharedValue({ y: 0 });

  const gesture = Gesture.Pan()
    .onStart(() => {
      context.value = { y: translateY.value };
    })
    .onUpdate((event) => {
      const newTranslateY = context.value.y + event.translationY;
      const maxDrag = MAX_HEIGHT - MIN_HEIGHT;
      translateY.value = Math.max(0, Math.min(maxDrag, newTranslateY));
    })
    .onEnd((event) => {
      const shouldExpand = translateY.value < (MAX_HEIGHT - MIN_HEIGHT) / 2;

      if (event.velocityY < -500) {
        translateY.value = withSpring(0, { damping: 20, stiffness: 150 });
      } else if (event.velocityY > 500) {
        translateY.value = withSpring(MAX_HEIGHT - MIN_HEIGHT, { damping: 20, stiffness: 150 });
      } else if (shouldExpand) {
        translateY.value = withSpring(0, { damping: 20, stiffness: 150 });
      } else {
        translateY.value = withSpring(MAX_HEIGHT - MIN_HEIGHT, { damping: 20, stiffness: 150 });
      }
    });

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: translateY.value }],
    };
  });

  return (
    <Animated.View style={[styles.container, animatedStyle]}>
      <GestureDetector gesture={gesture}>
        <View style={styles.handleContainer}>
          <View style={styles.handle} />
        </View>
      </GestureDetector>
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollViewContent}
        showsVerticalScrollIndicator={false}
        bounces={true}
      >
        {children}
      </ScrollView>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: MAX_HEIGHT,
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
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
  },
  handle: {
    width: 40,
    height: 5,
    backgroundColor: '#D1D5DB',
    borderRadius: 3,
  },
  scrollView: {
    flex: 1,
  },
  scrollViewContent: {
    paddingBottom: 40,
  },
});

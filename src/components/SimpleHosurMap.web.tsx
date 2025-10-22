import React, { useEffect, useRef } from 'react';
import { StyleSheet, View } from 'react-native';

interface SimpleHosurMapProps {
  userLocation: { latitude: number; longitude: number } | null;
  pickupLocation?: { latitude: number; longitude: number } | null;
  destinationLocation?: { latitude: number; longitude: number } | null;
  onRegionChangeComplete?: (coords: { latitude: number; longitude: number }) => void;
  onDestinationDragEnd?: (coords: { latitude: number; longitude: number }) => void;
  showCenteredPin?: boolean;
}

const HOSUR_CENTER = {
  lat: 12.7402,
  lng: 77.8240,
};

export default function SimpleHosurMap({
  userLocation,
  pickupLocation,
  destinationLocation,
  onRegionChangeComplete,
  onDestinationDragEnd,
  showCenteredPin = false,
}: SimpleHosurMapProps) {
  const mapRef = useRef<any>(null);
  const directionsServiceRef = useRef<any>(null);
  const directionsRendererRef = useRef<any>(null);
  const userMarkerRef = useRef<any>(null);
  const pickupMarkerRef = useRef<any>(null);
  const destinationMarkerRef = useRef<any>(null);

  useEffect(() => {
    const initMap = () => {
      if (!window.google) {
        console.error('Google Maps API not loaded');
        return;
      }

      const mapElement = document.getElementById('hosur-map');
      if (!mapElement) return;

      mapRef.current = new window.google.maps.Map(mapElement, {
        center: HOSUR_CENTER,
        zoom: 13,
        mapTypeControl: false,
        fullscreenControl: false,
      });

      directionsServiceRef.current = new window.google.maps.DirectionsService();
      directionsRendererRef.current = new window.google.maps.DirectionsRenderer({
        map: mapRef.current,
        suppressMarkers: true,
        polylineOptions: {
          strokeColor: '#1F2937',
          strokeWeight: 5,
          strokeOpacity: 1.0,
        },
      });
    };

    if (window.google) {
      initMap();
    } else {
      const script = document.createElement('script');
      script.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY}&libraries=places`;
      script.async = true;
      script.defer = true;
      script.onload = initMap;
      document.head.appendChild(script);
    }
  }, []);

  useEffect(() => {
    if (!mapRef.current || !window.google) return;

    if (userMarkerRef.current) {
      userMarkerRef.current.setMap(null);
    }

    if (userLocation) {
      userMarkerRef.current = new window.google.maps.Marker({
        position: { lat: userLocation.latitude, lng: userLocation.longitude },
        map: mapRef.current,
        title: 'Your Location',
        icon: {
          path: window.google.maps.SymbolPath.CIRCLE,
          scale: 8,
          fillColor: '#3B82F6',
          fillOpacity: 1,
          strokeColor: '#FFFFFF',
          strokeWeight: 2,
        },
      });

      mapRef.current.panTo({ lat: userLocation.latitude, lng: userLocation.longitude });
      mapRef.current.setZoom(14);
    }
  }, [userLocation]);

  useEffect(() => {
    if (!mapRef.current || !window.google) return;

    if (pickupMarkerRef.current) {
      pickupMarkerRef.current.setMap(null);
    }

    // Show pickup marker whenever pickup location exists
    if (pickupLocation) {
      pickupMarkerRef.current = new window.google.maps.Marker({
        position: { lat: pickupLocation.latitude, lng: pickupLocation.longitude },
        map: mapRef.current,
        title: 'Pickup Location',
        draggable: true,
        label: {
          text: '📍',
          fontSize: '24px',
        },
        icon: {
          path: window.google.maps.SymbolPath.CIRCLE,
          scale: 20,
          fillColor: '#10B981',
          fillOpacity: 1,
          strokeColor: '#FFFFFF',
          strokeWeight: 3,
        },
      });

      // Add drag end listener
      if (onRegionChangeComplete) {
        window.google.maps.event.addListener(pickupMarkerRef.current, 'dragend', (event: any) => {
          const newPosition = event.latLng;
          console.log('📍 [WEB] Pickup marker dragged to:', newPosition.lat(), newPosition.lng());
          onRegionChangeComplete({
            latitude: newPosition.lat(),
            longitude: newPosition.lng(),
          });
        });
      }
    }
  }, [pickupLocation, destinationLocation]);

  useEffect(() => {
    if (!mapRef.current || !window.google) return;

    if (destinationMarkerRef.current) {
      destinationMarkerRef.current.setMap(null);
    }

    if (destinationLocation) {
      destinationMarkerRef.current = new window.google.maps.Marker({
        position: { lat: destinationLocation.latitude, lng: destinationLocation.longitude },
        map: mapRef.current,
        title: 'Destination',
        draggable: true,
        label: {
          text: '🎯',
          fontSize: '24px',
        },
        icon: {
          path: window.google.maps.SymbolPath.CIRCLE,
          scale: 20,
          fillColor: '#EF4444',
          fillOpacity: 1,
          strokeColor: '#FFFFFF',
          strokeWeight: 3,
        },
      });

      // Add drag end listener
      if (onDestinationDragEnd) {
        window.google.maps.event.addListener(destinationMarkerRef.current, 'dragend', (event: any) => {
          const newPosition = event.latLng;
          console.log('🎯 [WEB] Destination marker dragged to:', newPosition.lat(), newPosition.lng());
          onDestinationDragEnd({
            latitude: newPosition.lat(),
            longitude: newPosition.lng(),
          });
        });
      }
    }
  }, [destinationLocation]);

  useEffect(() => {
    if (!mapRef.current || !window.google || !directionsServiceRef.current || !directionsRendererRef.current) return;

    if (pickupLocation && destinationLocation) {
      const request = {
        origin: { lat: pickupLocation.latitude, lng: pickupLocation.longitude },
        destination: { lat: destinationLocation.latitude, lng: destinationLocation.longitude },
        travelMode: window.google.maps.TravelMode.DRIVING,
      };

      directionsServiceRef.current.route(request, (result: any, status: any) => {
        if (status === 'OK') {
          directionsRendererRef.current.setDirections(result);

          // Auto-fit map to show entire route with padding (Uber-style)
          const bounds = new window.google.maps.LatLngBounds();
          bounds.extend({ lat: pickupLocation.latitude, lng: pickupLocation.longitude });
          bounds.extend({ lat: destinationLocation.latitude, lng: destinationLocation.longitude });

          mapRef.current.fitBounds(bounds, {
            top: 120,
            right: 80,
            bottom: 400,
            left: 80,
          });

          console.log('✅ [WEB] Route successfully drawn from pickup to destination');
        } else {
          console.error('❌ [WEB] Directions request failed:', status);
          console.error('❌ [WEB] Failed route details:', {
            pickup: pickupLocation,
            destination: destinationLocation,
          });
        }
      });
    } else {
      directionsRendererRef.current.setDirections({ routes: [] });
    }
  }, [pickupLocation, destinationLocation]);

  return (
    <View style={styles.container}>
      <div id="hosur-map" style={{ width: '100%', height: '100%' }} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

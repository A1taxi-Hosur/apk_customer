import React, { useEffect, useRef } from 'react';
import { StyleSheet, View } from 'react-native';

interface SimpleHosurMapProps {
  userLocation: { latitude: number; longitude: number } | null;
  pickupLocation?: { latitude: number; longitude: number } | null;
  destinationLocation?: { latitude: number; longitude: number } | null;
}

const HOSUR_CENTER = {
  lat: 12.7402,
  lng: 77.8240,
};

export default function SimpleHosurMap({
  userLocation,
  pickupLocation,
  destinationLocation,
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
          strokeWeight: 4,
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

    if (pickupLocation) {
      pickupMarkerRef.current = new window.google.maps.Marker({
        position: { lat: pickupLocation.latitude, lng: pickupLocation.longitude },
        map: mapRef.current,
        title: 'Pickup',
        icon: {
          path: window.google.maps.SymbolPath.CIRCLE,
          scale: 10,
          fillColor: '#10B981',
          fillOpacity: 1,
          strokeColor: '#FFFFFF',
          strokeWeight: 2,
        },
      });
    }
  }, [pickupLocation]);

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
        icon: {
          path: window.google.maps.SymbolPath.CIRCLE,
          scale: 10,
          fillColor: '#EF4444',
          fillOpacity: 1,
          strokeColor: '#FFFFFF',
          strokeWeight: 2,
        },
      });
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
          console.log('🗺️ Route drawn successfully');
        } else {
          console.error('🗺️ Directions request failed:', status);
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

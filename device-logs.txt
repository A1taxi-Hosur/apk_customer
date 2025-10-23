
C:\Users\Dell\Desktop\platform-tools-latest-windows (1)\platform-tools>adb logcat -v time | findstr "ReactNativeJS"
10-23 17:48:38.419 I/ReactNativeJS(18100): Γ£à [BILL] PDF shared successfully (mobile)
10-23 17:48:38.464 I/ReactNativeJS(18100): ≡ƒöä [DRIVER-SERVICE] Polling interval triggered
10-23 17:48:38.483 I/ReactNativeJS(18100): '≡ƒù║∩╕Å [DRIVER-SERVICE] Fetching available drivers via edge function:', { location: { lat: 12.74861, lng: 77.8299867 },
10-23 17:48:38.483 I/ReactNativeJS(18100):   radius: '10km',
10-23 17:48:38.483 I/ReactNativeJS(18100):   vehicleType: 'all',
10-23 17:48:38.483 I/ReactNativeJS(18100):   timestamp: '2025-10-23T12:18:38.465Z' }
10-23 17:48:38.485 I/ReactNativeJS(18100): '≡ƒîÉ [DRIVER-SERVICE] Constructed Edge Function URL:', 'https://whubaypabojomdyfqxcf.supabase.co/functions/v1/get-drivers-with-locations?lat=12.74861&lng=77.8299867&radius=10'
10-23 17:48:38.539 I/ReactNativeJS(18100): '≡ƒôì [GPS] Live location update:', { lat: '12.748664', lng: '77.829975', accuracy: '6.06m' }
10-23 17:48:38.558 W/ReactNativeJS(18100): ≡ƒÅá [HOME] ===== RENDERING HOME SCREEN =====
10-23 17:48:38.558 W/ReactNativeJS(18100): '≡ƒÅá [HOME] currentLocation:', '{"altitude":774.3999633789062,"heading":0,"altitudeAccuracy":7.457854747772217,"latitude":12.7486637,"speed":0.07189670205116272,"longitude":77.8299752,"accuracy":6.056000232696533}'
10-23 17:48:38.559 W/ReactNativeJS(18100): '≡ƒÅá [HOME] pickupCoords:', '{"latitude":12.7486447,"longitude":77.8299961}'
10-23 17:48:38.559 W/ReactNativeJS(18100): '≡ƒÅá [HOME] destinationCoords:', 'null'
10-23 17:48:38.559 W/ReactNativeJS(18100): '≡ƒÅá [HOME] pickupLocation text:', 'PRXJ+F32, Brindavan Nagar, Plot 87, NGGO\'s Colony, Anand Nagar, Hosur, Tamil Nadu 635109, India'
10-23 17:48:38.559 W/ReactNativeJS(18100): '≡ƒÅá [HOME] availableDrivers count:', 0
10-23 17:48:38.559 W/ReactNativeJS(18100): '≡ƒÅá [HOME] showDriversOnMap:', true
10-23 17:48:38.560 I/ReactNativeJS(18100): '≡ƒÅá≡ƒÅá≡ƒÅá [HOME-V2] ABOUT TO RENDER SimpleHosurMap with props:', { hasUserLocation: true,
10-23 17:48:38.560 I/ReactNativeJS(18100):   hasPickup: true,
10-23 17:48:38.560 I/ReactNativeJS(18100):   hasDestination: false,
10-23 17:48:38.560 I/ReactNativeJS(18100):   showDriversOnMap: true,
10-23 17:48:38.560 I/ReactNativeJS(18100):   timestamp: '2025-10-23T12:18:38.559Z' }
10-23 17:48:38.566 I/ReactNativeJS(18100): ≡ƒº¬≡ƒº¬≡ƒº¬ TEST MAP RENDERING NOW
10-23 17:48:38.568 I/ReactNativeJS(18100): '≡ƒº¬ Props received:', [ 'userLocation',
10-23 17:48:38.568 I/ReactNativeJS(18100):   'pickupLocation',
10-23 17:48:38.568 I/ReactNativeJS(18100):   'destinationLocation',
10-23 17:48:38.568 I/ReactNativeJS(18100):   'onRegionChangeComplete',
10-23 17:48:38.568 I/ReactNativeJS(18100):   'onDestinationDragEnd',
10-23 17:48:38.568 I/ReactNativeJS(18100):   'showCenteredPin',
10-23 17:48:38.568 I/ReactNativeJS(18100):   'availableDrivers',
10-23 17:48:38.568 I/ReactNativeJS(18100):   'showDrivers' ]
10-23 17:48:38.657 I/ReactNativeJS(18100): ≡ƒÜù [HOME] ===== STARTING IMMEDIATE DRIVER DISPLAY =====
10-23 17:48:38.657 I/ReactNativeJS(18100): ≡ƒÜù [HOME] Current location available, showing drivers immediately
10-23 17:48:38.657 I/ReactNativeJS(18100): '≡ƒÜù [HOME] Location details:', { latitude: 12.7486637,
10-23 17:48:38.657 I/ReactNativeJS(18100):   longitude: 77.8299752,
10-23 17:48:38.657 I/ReactNativeJS(18100):   accuracy: 6.056000232696533 }
10-23 17:48:38.657 I/ReactNativeJS(18100): ≡ƒÜù [HOME] Showing ALL vehicle types (no filter applied)
10-23 17:48:38.658 I/ReactNativeJS(18100): '≡ƒÜù [HOME] Should show drivers on map:', true
10-23 17:48:38.659 I/ReactNativeJS(18100): '≡ƒöä [HOME] Starting driver location polling with:', { currentLocation: { latitude: 12.7486637, longitude: 77.8299752 },
10-23 17:48:38.659 I/ReactNativeJS(18100):   vehicleType: 'sedan',
10-23 17:48:38.659 I/ReactNativeJS(18100):   radius: 10 }
10-23 17:48:38.659 I/ReactNativeJS(18100): ≡ƒ¢æ [HOME] Stopping driver location polling
10-23 17:48:38.660 I/ReactNativeJS(18100): ≡ƒ¢æ [DRIVER-SERVICE] Stopped driver location polling
10-23 17:48:38.660 I/ReactNativeJS(18100): '≡ƒöä [DRIVER-SERVICE] Starting driver location polling every', 10, 'seconds'
10-23 17:48:38.663 I/ReactNativeJS(18100): '≡ƒöä [DRIVER-SERVICE] Polling parameters:', { customerLocation: { lat: 12.7486637, lng: 77.8299752 },
10-23 17:48:38.663 I/ReactNativeJS(18100):   vehicleType: 'all',
10-23 17:48:38.663 I/ReactNativeJS(18100):   interval: '10000ms' }
10-23 17:48:38.665 I/ReactNativeJS(18100): '≡ƒù║∩╕Å [DRIVER-SERVICE] Fetching available drivers via edge function:', { location: { lat: 12.7486637, lng: 77.8299752 },
10-23 17:48:38.665 I/ReactNativeJS(18100):   radius: '10km',
10-23 17:48:38.665 I/ReactNativeJS(18100):   vehicleType: 'all',
10-23 17:48:38.665 I/ReactNativeJS(18100):   timestamp: '2025-10-23T12:18:38.664Z' }
10-23 17:48:38.670 I/ReactNativeJS(18100): '≡ƒîÉ [DRIVER-SERVICE] Constructed Edge Function URL:', 'https://whubaypabojomdyfqxcf.supabase.co/functions/v1/get-drivers-with-locations?lat=12.7486637&lng=77.8299752&radius=10'
10-23 17:48:39.431 W/ReactNativeJS(18100): 'ΓÜá∩╕Å [DRIVER-SERVICE] Edge function failed, using direct database access:', 'Edge function failed: 500 - {"code":"WORKER_ERROR","message":"Function exited due to an error (please check logs)"}'
10-23 17:48:39.431 I/ReactNativeJS(18100): ≡ƒöì [DRIVER-SERVICE] ===== USING DIRECT DATABASE ACCESS =====
10-23 17:48:39.431 I/ReactNativeJS(18100): '≡ƒöì [DRIVER-SERVICE] Parameters:', { customerLocation: { lat: 12.74861, lng: 77.8299867 },
10-23 17:48:39.431 I/ReactNativeJS(18100):   radius: '10km',
10-23 17:48:39.431 I/ReactNativeJS(18100):   vehicleType: 'all' }
10-23 17:48:39.432 I/ReactNativeJS(18100): ≡ƒôè [DRIVER-SERVICE] Step 1: Fetching online verified drivers...
10-23 17:48:39.438 W/ReactNativeJS(18100): 'ΓÜá∩╕Å [DRIVER-SERVICE] Edge function failed, using direct database access:', 'Edge function failed: 500 - {"code":"WORKER_ERROR","message":"Function exited due to an error (please check logs)"}'
10-23 17:48:39.438 I/ReactNativeJS(18100): ≡ƒöì [DRIVER-SERVICE] ===== USING DIRECT DATABASE ACCESS =====
10-23 17:48:39.438 I/ReactNativeJS(18100): '≡ƒöì [DRIVER-SERVICE] Parameters:', { customerLocation: { lat: 12.7486637, lng: 77.8299752 },
10-23 17:48:39.438 I/ReactNativeJS(18100):   radius: '10km',
10-23 17:48:39.438 I/ReactNativeJS(18100):   vehicleType: 'all' }
10-23 17:48:39.438 I/ReactNativeJS(18100): ≡ƒôè [DRIVER-SERVICE] Step 1: Fetching online verified drivers...
10-23 17:48:39.742 I/ReactNativeJS(18100): '≡ƒôè [DRIVER-SERVICE] Found drivers:', { total: 21,
10-23 17:48:39.742 I/ReactNativeJS(18100):   details:
10-23 17:48:39.742 I/ReactNativeJS(18100):    [ { id: '22480cc3-665c-407e-ad8a-8eafde67706b',
10-23 17:48:39.742 I/ReactNativeJS(18100):        user_id: '16011178-decf-4de3-beae-94ca46ce9258',
10-23 17:48:39.742 I/ReactNativeJS(18100):        name: undefined,
10-23 17:48:39.742 I/ReactNativeJS(18100):        vehicle_type: 'hatchback',
10-23 17:48:39.742 I/ReactNativeJS(18100):        status: 'online',
10-23 17:48:39.742 I/ReactNativeJS(18100):        verified: true },
10-23 17:48:39.742 I/ReactNativeJS(18100):      { id: '76b66a88-dff9-4965-9e36-8a92023f155d',
10-23 17:48:39.742 I/ReactNativeJS(18100):        user_id: 'ae53a792-6aed-4186-823d-61c34c6defe2',
10-23 17:48:39.742 I/ReactNativeJS(18100):        name: undefined,
10-23 17:48:39.742 I/ReactNativeJS(18100):        vehicle_type: 'sedan',
10-23 17:48:39.742 I/ReactNativeJS(18100):        status: 'online',
10-23 17:48:39.742 I/ReactNativeJS(18100):        verified: true },
10-23 17:48:39.742 I/ReactNativeJS(18100):      { id: '6f55e87b-6558-48df-af8c-d69190918b32',
10-23 17:48:39.742 I/ReactNativeJS(18100):        user_id: 'e6145579-4f5a-439f-b929-fa478580c049',
10-23 17:48:39.742 I/ReactNativeJS(18100):        name: undefined,
10-23 17:48:39.742 I/ReactNativeJS(18100):        vehicle_type: 'hatchback',
10-23 17:48:39.742 I/ReactNativeJS(18100):        status: 'online',
10-23 17:48:39.742 I/ReactNativeJS(18100):        verified: true },
10-23 17:48:39.742 I/ReactNativeJS(18100):      { id: '97a4ba58-9431-48e5-ac8f-3472b8357179',
10-23 17:48:39.742 I/ReactNativeJS(18100):        user_id: '5d6651c8-2e3f-44e7-b4a1-0056c1d5315b',
10-23 17:48:39.742 I/ReactNativeJS(18100):        name: undefined,
10-23 17:48:39.742 I/ReactNativeJS(18100):        vehicle_type: 'sedan_ac',
10-23 17:48:39.742 I/ReactNativeJS(18100):        status: 'online',
10-23 17:48:39.742 I/ReactNativeJS(18100):        verified: true },
10-23 17:48:39.742 I/ReactNativeJS(18100):      { id: 'c568b21d-0975-4388-a9fb-cc00013b6d4f',
10-23 17:48:39.742 I/ReactNativeJS(18100):        user_id: '6150ee57-77e5-45f7-b6c7-a586f22f2af8',
10-23 17:48:39.742 I/ReactNativeJS(18100):        name: undefined,
10-23 17:48:39.742 I/ReactNativeJS(18100):        vehicle_type: 'sedan',
10-23 17:48:39.742 I/ReactNativeJS(18100):        status: 'online',
10-23 17:48:39.742 I/ReactNativeJS(18100):        verified: true },
10-23 17:48:39.742 I/ReactNativeJS(18100):      { id: '7055c2f9-99fa-4d96-bc6c-079b5cda6f56',
10-23 17:48:39.742 I/ReactNativeJS(18100):        user_id: 'dc475d27-6167-4695-a014-dcb8d160b4c6',
10-23 17:48:39.742 I/ReactNativeJS(18100):        name: undefined,
10-23 17:48:39.742 I/ReactNativeJS(18100):        vehicle_type: 'hatchback',
10-23 17:48:39.742 I/ReactNativeJS(18100):        status: 'online',
10-23 17:48:39.742 I/ReactNativeJS(18100):        verified: true },
10-23 17:48:39.742 I/ReactNativeJS(18100):      { id: '770e8400-e29b-41d4-a716-446655440001',
10-23 17:48:39.742 I/ReactNativeJS(18100):        user_id: '550e8400-e29b-41d4-a716-446655440001',
10-23 17:48:39.742 I/ReactNativeJS(18100):        name: undefined,
10-23 17:48:39.742 I/ReactNativeJS(18100):        vehicle_type: 'hatchback',
10-23 17:48:39.742 I/ReactNativeJS(18100):        status: 'online',
10-23 17:48:39.742 I/ReactNativeJS(18100):        verified: true },
10-23 17:48:39.742 I/ReactNativeJS(18100):      { id: '770e8400-e29b-41d4-a716-446655440002',
10-23 17:48:39.742 I/ReactNativeJS(18100):        user_id: '550e8400-e29b-41d4-a716-446655440002',
10-23 17:48:39.742 I/ReactNativeJS(18100):        name: undefined,
10-23 17:48:39.742 I/ReactNativeJS(18100):        vehicle_type: 'sedan',
10-23 17:48:39.742 I/ReactNativeJS(18100):        status: 'online',
10-23 17:48:39.742 I/ReactNativeJS(18100):        verified: true },
10-23 17:48:39.742 I/ReactNativeJS(18100):      { id: '43d81d7d-e647-46cf-8599-11f63996b03e',
10-23 17:48:39.742 I/ReactNativeJS(18100):        user_id: '6c03a657-c3e4-466e-b49c-324c2d051ce9',
10-23 17:48:39.742 I/ReactNativeJS(18100):        name: undefined,
10-23 17:48:39.742 I/ReactNativeJS(18100):        vehicle_type: 'sedan_ac',
10-23 17:48:39.742 I/ReactNativeJS(18100):        status: 'online',
10-23 17:48:39.742 I/ReactNativeJS(18100):        verified: true },
10-23 17:48:39.742 I/ReactNativeJS(18100):      { id: '770e8400-e29b-41d4-a716-446655440003',
10-23 17:48:39.742 I/ReactNativeJS(18100):        user_id: '550e8400-e29b-41d4-a716-446655440003',
10-23 17:48:39.742 I/ReactNativeJS(18100):        name: undefined,
10-23 17:48:39.742 I/ReactNativeJS(18100):        vehicle_type: 'suv',
10-23 17:48:39.742 I/ReactNativeJS(18100):        status: 'online',
10-23 17:48:39.742 I/ReactNativeJS(18100):        verified: true },
10-23 17:48:39.742 I/ReactNativeJS(18100):      { id: '770e8400-e29b-41d4-a716-446655440004',
10-23 17:48:39.742 I/ReactNativeJS(18100):        user_id: '550e8400-e29b-41d4-a716-446655440004',
10-23 17:48:39.742 I/ReactNativeJS(18100):        name: undefined,
10-23 17:48:39.742 I/ReactNativeJS(18100):        vehicle_type: 'sedan',
10-23 17:48:39.742 I/ReactNativeJS(18100):        status: 'online',
10-23 17:48:39.742 I/ReactNativeJS(18100):        verified: true },
10-23 17:48:39.742 I/ReactNativeJS(18100):      { id: '770e8400-e29b-41d4-a716-446655440005',
10-23 17:48:39.742 I/ReactNativeJS(18100):        user_id: '550e8400-e29b-41d4-a716-446655440005',
10-23 17:48:39.742 I/ReactNativeJS(18100):        name: undefined,
10-23 17:48:39.742 I/ReactNativeJS(18100):        vehicle_type: 'hatchback',
10-23 17:48:39.742 I/ReactNativeJS(18100):        status: 'online',
10-23 17:48:39.742 I/ReactNativeJS(18100):        verified: true },
10-23 17:48:39.742 I/ReactNativeJS(18100):      { id: '489b94a7-777b-4e11-ba5c-17e0a3173737',
10-23 17:48:39.742 I/ReactNativeJS(18100):        user_id: '892d8e0d-7ca5-4dd8-9979-539f394538f2',
10-23 17:48:39.742 I/ReactNativeJS(18100):        name: undefined,
10-23 17:48:39.742 I/ReactNativeJS(18100):        vehicle_type: 'hatchback',
10-23 17:48:39.742 I/ReactNativeJS(18100):        status: 'online',
10-23 17:48:39.742 I/ReactNativeJS(18100):        verified: true },
10-23 17:48:39.742 I/ReactNativeJS(18100):      { id: 'd7b4a339-2ba5-45ed-a2ec-238548a8eab6',
10-23 17:48:39.742 I/ReactNativeJS(18100):        user_id: 'cb735787-e96d-4d1d-9975-c112e75dfabd',
10-23 17:48:39.742 I/ReactNativeJS(18100):        name: undefined,
10-23 17:48:39.742 I/ReactNativeJS(18100):        vehicle_type: 'hatchback_ac',
10-23 17:48:39.742 I/ReactNativeJS(18100):        status: 'online',
10-23 17:48:39.742 I/ReactNativeJS(18100):        verified: true },
10-23 17:48:39.742 I/ReactNativeJS(18100):      { id: '38ee94d8-ac2d-450e-8084-0bef654546d7',
10-23 17:48:39.742 I/ReactNativeJS(18100):        user_id: 'fdd94862-18e4-49d4-b6c0-8b9f73c8ff8c',
10-23 17:48:39.742 I/ReactNativeJS(18100):        name: undefined,
10-23 17:48:39.742 I/ReactNativeJS(18100):        vehicle_type: 'sedan',
10-23 17:48:39.742 I/ReactNativeJS(18100):        status: 'online',
10-23 17:48:39.742 I/ReactNativeJS(18100):        verified: true },
10-23 17:48:39.742 I/ReactNativeJS(18100):      { id: 'b4613ecf-44b5-49ba-8613-f8993b6db1d6',
10-23 17:48:39.742 I/ReactNativeJS(18100):        user_id: '539b06c9-4e24-49a4-b307-3fb3f9dc39da',
10-23 17:48:39.742 I/ReactNativeJS(18100):        name: undefined,
10-23 17:48:39.742 I/ReactNativeJS(18100):        vehicle_type: 'sedan',
10-23 17:48:39.742 I/ReactNativeJS(18100):        status: 'online',
10-23 17:48:39.742 I/ReactNativeJS(18100):        verified: true },
10-23 17:48:39.742 I/ReactNativeJS(18100):      { id: '631f4ab4-c643-45a8-addd-541595b0fe86',
10-23 17:48:39.742 I/ReactNativeJS(18100):        user_id: 'b12c8a48-05b3-475a-b042-4810aee4e918',
10-23 17:48:39.742 I/ReactNativeJS(18100):        name: undefined,
10-23 17:48:39.742 I/ReactNativeJS(18100):        vehicle_type: 'suv',
10-23 17:48:39.742 I/ReactNativeJS(18100):        status: 'online',
10-23 17:48:39.742 I/ReactNativeJS(18100):        verified: true },
10-23 17:48:39.742 I/ReactNativeJS(18100):      { id: '0330d75a-67b0-4b12-b9b7-22a241af9c57',
10-23 17:48:39.742 I/ReactNativeJS(18100):        user_id: 'f5e495f1-75a4-4ce1-bb60-4adfc348b8fc',
10-23 17:48:39.742 I/ReactNativeJS(18100):        name: undefined,
10-23 17:48:39.742 I/ReactNativeJS(18100):        vehicle_type: 'sedan',
10-23 17:48:39.742 I/ReactNativeJS(18100):        status: 'online',
10-23 17:48:39.742 I/ReactNativeJS(18100):        verified: true },
10-23 17:48:39.742 I/ReactNativeJS(18100):      { id: '707e2d38-7346-4a2e-bddb-e1157475f786',
10-23 17:48:39.742 I/ReactNativeJS(18100):        user_id: 'ed59084b-f517-4da3-814c-a314cdd8b4c6',
10-23 17:48:39.742 I/ReactNativeJS(18100):        name: undefined,
10-23 17:48:39.742 I/ReactNativeJS(18100):        vehicle_type: 'sedan',
10-23 17:48:39.742 I/ReactNativeJS(18100):        status: 'online',
10-23 17:48:39.742 I/ReactNativeJS(18100):        verified: true },
10-23 17:48:39.742 I/ReactNativeJS(18100):      { id: 'eb91d7e5-e2f2-4021-a8c8-3739a3d4cae4',
10-23 17:48:39.742 I/ReactNativeJS(18100):        user_id: '1c4ac410-54d8-4b5e-960b-3afcbebd115d',
10-23 17:48:39.742 I/ReactNativeJS(18100):        name: undefined,
10-23 17:48:39.742 I/ReactNativeJS(18100):        vehicle_type: 'sedan',
10-23 17:48:39.742 I/ReactNativeJS(18100):        status: 'online',
10-23 17:48:39.742 I/ReactNativeJS(18100):        verified: true },
10-23 17:48:39.742 I/ReactNativeJS(18100):      { id: '058f85df-35b3-4027-81a1-bd52a0df8e4a',
10-23 17:48:39.742 I/ReactNativeJS(18100):        user_id: '411ee301-8ffc-4874-86e9-37716951bc4d',
10-23 17:48:39.742 I/ReactNativeJS(18100):        name: undefined,
10-23 17:48:39.742 I/ReactNativeJS(18100):        vehicle_type: 'suv_ac',
10-23 17:48:39.742 I/ReactNativeJS(18100):        status: 'online',
10-23 17:48:39.742 I/ReactNativeJS(18100):        verified: true } ] }
10-23 17:48:39.742 I/ReactNativeJS(18100): '≡ƒôì [DRIVER-SERVICE] Step 2: Getting locations for user IDs:', [ '16011178-decf-4de3-beae-94ca46ce9258',
10-23 17:48:39.742 I/ReactNativeJS(18100):   'ae53a792-6aed-4186-823d-61c34c6defe2',
10-23 17:48:39.742 I/ReactNativeJS(18100):   'e6145579-4f5a-439f-b929-fa478580c049',
10-23 17:48:39.742 I/ReactNativeJS(18100):   '5d6651c8-2e3f-44e7-b4a1-0056c1d5315b',
10-23 17:48:39.742 I/ReactNativeJS(18100):   '6150ee57-77e5-45f7-b6c7-a586f22f2af8',
10-23 17:48:39.742 I/ReactNativeJS(18100):   'dc475d27-6167-4695-a014-dcb8d160b4c6',
10-23 17:48:39.742 I/ReactNativeJS(18100):   '550e8400-e29b-41d4-a716-446655440001',
10-23 17:48:39.742 I/ReactNativeJS(18100):   '550e8400-e29b-41d4-a716-446655440002',
10-23 17:48:39.742 I/ReactNativeJS(18100):   '6c03a657-c3e4-466e-b49c-324c2d051ce9',
10-23 17:48:39.742 I/ReactNativeJS(18100):   '550e8400-e29b-41d4-a716-446655440003',
10-23 17:48:39.742 I/ReactNativeJS(18100):   '550e8400-e29b-41d4-a716-446655440004',
10-23 17:48:39.742 I/ReactNativeJS(18100):   '550e8400-e29b-41d4-a716-446655440005',
10-23 17:48:39.742 I/ReactNativeJS(18100):   '892d8e0d-7ca5-4dd8-9979-539f394538f2',
10-23 17:48:39.742 I/ReactNativeJS(18100):   'cb735787-e96d-4d1d-9975-c112e75dfabd',
10-23 17:48:39.742 I/ReactNativeJS(18100):   'fdd94862-18e4-49d4-b6c0-8b9f73c8ff8c',
10-23 17:48:39.742 I/ReactNativeJS(18100):   '539b06c9-4e24-49a4-b307-3fb3f9dc39da',
10-23 17:48:39.742 I/ReactNativeJS(18100):   'b12c8a48-05b3-475a-b042-4810aee4e918',
10-23 17:48:39.742 I/ReactNativeJS(18100):   'f5e495f1-75a4-4ce1-bb60-4adfc348b8fc',
10-23 17:48:39.742 I/ReactNativeJS(18100):   'ed59084b-f517-4da3-814c-a314cdd8b4c6',
10-23 17:48:39.742 I/ReactNativeJS(18100):   '1c4ac410-54d8-4b5e-960b-3afcbebd115d',
10-23 17:48:39.742 I/ReactNativeJS(18100):   '411ee301-8ffc-4874-86e9-37716951bc4d' ]
10-23 17:48:39.754 I/ReactNativeJS(18100): '≡ƒôè [DRIVER-SERVICE] Found drivers:', { total: 21,
10-23 17:48:39.754 I/ReactNativeJS(18100):   details:
10-23 17:48:39.754 I/ReactNativeJS(18100):    [ { id: '22480cc3-665c-407e-ad8a-8eafde67706b',
10-23 17:48:39.754 I/ReactNativeJS(18100):        user_id: '16011178-decf-4de3-beae-94ca46ce9258',
10-23 17:48:39.754 I/ReactNativeJS(18100):        name: undefined,
10-23 17:48:39.754 I/ReactNativeJS(18100):        vehicle_type: 'hatchback',
10-23 17:48:39.754 I/ReactNativeJS(18100):        status: 'online',
10-23 17:48:39.754 I/ReactNativeJS(18100):        verified: true },
10-23 17:48:39.754 I/ReactNativeJS(18100):      { id: '76b66a88-dff9-4965-9e36-8a92023f155d',
10-23 17:48:39.754 I/ReactNativeJS(18100):        user_id: 'ae53a792-6aed-4186-823d-61c34c6defe2',
10-23 17:48:39.754 I/ReactNativeJS(18100):        name: undefined,
10-23 17:48:39.754 I/ReactNativeJS(18100):        vehicle_type: 'sedan',
10-23 17:48:39.754 I/ReactNativeJS(18100):        status: 'online',
10-23 17:48:39.754 I/ReactNativeJS(18100):        verified: true },
10-23 17:48:39.754 I/ReactNativeJS(18100):      { id: '6f55e87b-6558-48df-af8c-d69190918b32',
10-23 17:48:39.754 I/ReactNativeJS(18100):        user_id: 'e6145579-4f5a-439f-b929-fa478580c049',
10-23 17:48:39.754 I/ReactNativeJS(18100):        name: undefined,
10-23 17:48:39.754 I/ReactNativeJS(18100):        vehicle_type: 'hatchback',
10-23 17:48:39.754 I/ReactNativeJS(18100):        status: 'online',
10-23 17:48:39.754 I/ReactNativeJS(18100):        verified: true },
10-23 17:48:39.754 I/ReactNativeJS(18100):      { id: '97a4ba58-9431-48e5-ac8f-3472b8357179',
10-23 17:48:39.754 I/ReactNativeJS(18100):        user_id: '5d6651c8-2e3f-44e7-b4a1-0056c1d5315b',
10-23 17:48:39.754 I/ReactNativeJS(18100):        name: undefined,
10-23 17:48:39.754 I/ReactNativeJS(18100):        vehicle_type: 'sedan_ac',
10-23 17:48:39.754 I/ReactNativeJS(18100):        status: 'online',
10-23 17:48:39.754 I/ReactNativeJS(18100):        verified: true },
10-23 17:48:39.754 I/ReactNativeJS(18100):      { id: 'c568b21d-0975-4388-a9fb-cc00013b6d4f',
10-23 17:48:39.754 I/ReactNativeJS(18100):        user_id: '6150ee57-77e5-45f7-b6c7-a586f22f2af8',
10-23 17:48:39.754 I/ReactNativeJS(18100):        name: undefined,
10-23 17:48:39.754 I/ReactNativeJS(18100):        vehicle_type: 'sedan',
10-23 17:48:39.754 I/ReactNativeJS(18100):        status: 'online',
10-23 17:48:39.754 I/ReactNativeJS(18100):        verified: true },
10-23 17:48:39.754 I/ReactNativeJS(18100):      { id: '7055c2f9-99fa-4d96-bc6c-079b5cda6f56',
10-23 17:48:39.754 I/ReactNativeJS(18100):        user_id: 'dc475d27-6167-4695-a014-dcb8d160b4c6',
10-23 17:48:39.754 I/ReactNativeJS(18100):        name: undefined,
10-23 17:48:39.754 I/ReactNativeJS(18100):        vehicle_type: 'hatchback',
10-23 17:48:39.754 I/ReactNativeJS(18100):        status: 'online',
10-23 17:48:39.754 I/ReactNativeJS(18100):        verified: true },
10-23 17:48:39.754 I/ReactNativeJS(18100):      { id: '770e8400-e29b-41d4-a716-446655440001',
10-23 17:48:39.754 I/ReactNativeJS(18100):        user_id: '550e8400-e29b-41d4-a716-446655440001',
10-23 17:48:39.754 I/ReactNativeJS(18100):        name: undefined,
10-23 17:48:39.754 I/ReactNativeJS(18100):        vehicle_type: 'hatchback',
10-23 17:48:39.754 I/ReactNativeJS(18100):        status: 'online',
10-23 17:48:39.754 I/ReactNativeJS(18100):        verified: true },
10-23 17:48:39.754 I/ReactNativeJS(18100):      { id: '770e8400-e29b-41d4-a716-446655440002',
10-23 17:48:39.754 I/ReactNativeJS(18100):        user_id: '550e8400-e29b-41d4-a716-446655440002',
10-23 17:48:39.754 I/ReactNativeJS(18100):        name: undefined,
10-23 17:48:39.754 I/ReactNativeJS(18100):        vehicle_type: 'sedan',
10-23 17:48:39.754 I/ReactNativeJS(18100):        status: 'online',
10-23 17:48:39.754 I/ReactNativeJS(18100):        verified: true },
10-23 17:48:39.754 I/ReactNativeJS(18100):      { id: '43d81d7d-e647-46cf-8599-11f63996b03e',
10-23 17:48:39.754 I/ReactNativeJS(18100):        user_id: '6c03a657-c3e4-466e-b49c-324c2d051ce9',
10-23 17:48:39.754 I/ReactNativeJS(18100):        name: undefined,
10-23 17:48:39.754 I/ReactNativeJS(18100):        vehicle_type: 'sedan_ac',
10-23 17:48:39.754 I/ReactNativeJS(18100):        status: 'online',
10-23 17:48:39.754 I/ReactNativeJS(18100):        verified: true },
10-23 17:48:39.754 I/ReactNativeJS(18100):      { id: '770e8400-e29b-41d4-a716-446655440003',
10-23 17:48:39.754 I/ReactNativeJS(18100):        user_id: '550e8400-e29b-41d4-a716-446655440003',
10-23 17:48:39.754 I/ReactNativeJS(18100):        name: undefined,
10-23 17:48:39.754 I/ReactNativeJS(18100):        vehicle_type: 'suv',
10-23 17:48:39.754 I/ReactNativeJS(18100):        status: 'online',
10-23 17:48:39.754 I/ReactNativeJS(18100):        verified: true },
10-23 17:48:39.754 I/ReactNativeJS(18100):      { id: '770e8400-e29b-41d4-a716-446655440004',
10-23 17:48:39.754 I/ReactNativeJS(18100):        user_id: '550e8400-e29b-41d4-a716-446655440004',
10-23 17:48:39.754 I/ReactNativeJS(18100):        name: undefined,
10-23 17:48:39.754 I/ReactNativeJS(18100):        vehicle_type: 'sedan',
10-23 17:48:39.754 I/ReactNativeJS(18100):        status: 'online',
10-23 17:48:39.754 I/ReactNativeJS(18100):        verified: true },
10-23 17:48:39.754 I/ReactNativeJS(18100):      { id: '770e8400-e29b-41d4-a716-446655440005',
10-23 17:48:39.754 I/ReactNativeJS(18100):        user_id: '550e8400-e29b-41d4-a716-446655440005',
10-23 17:48:39.754 I/ReactNativeJS(18100):        name: undefined,
10-23 17:48:39.754 I/ReactNativeJS(18100):        vehicle_type: 'hatchback',
10-23 17:48:39.754 I/ReactNativeJS(18100):        status: 'online',
10-23 17:48:39.754 I/ReactNativeJS(18100):        verified: true },
10-23 17:48:39.754 I/ReactNativeJS(18100):      { id: '489b94a7-777b-4e11-ba5c-17e0a3173737',
10-23 17:48:39.754 I/ReactNativeJS(18100):        user_id: '892d8e0d-7ca5-4dd8-9979-539f394538f2',
10-23 17:48:39.754 I/ReactNativeJS(18100):        name: undefined,
10-23 17:48:39.754 I/ReactNativeJS(18100):        vehicle_type: 'hatchback',
10-23 17:48:39.754 I/ReactNativeJS(18100):        status: 'online',
10-23 17:48:39.754 I/ReactNativeJS(18100):        verified: true },
10-23 17:48:39.754 I/ReactNativeJS(18100):      { id: 'd7b4a339-2ba5-45ed-a2ec-238548a8eab6',
10-23 17:48:39.754 I/ReactNativeJS(18100):        user_id: 'cb735787-e96d-4d1d-9975-c112e75dfabd',
10-23 17:48:39.754 I/ReactNativeJS(18100):        name: undefined,
10-23 17:48:39.754 I/ReactNativeJS(18100):        vehicle_type: 'hatchback_ac',
10-23 17:48:39.754 I/ReactNativeJS(18100):        status: 'online',
10-23 17:48:39.754 I/ReactNativeJS(18100):        verified: true },
10-23 17:48:39.754 I/ReactNativeJS(18100):      { id: '38ee94d8-ac2d-450e-8084-0bef654546d7',
10-23 17:48:39.754 I/ReactNativeJS(18100):        user_id: 'fdd94862-18e4-49d4-b6c0-8b9f73c8ff8c',
10-23 17:48:39.754 I/ReactNativeJS(18100):        name: undefined,
10-23 17:48:39.754 I/ReactNativeJS(18100):        vehicle_type: 'sedan',
10-23 17:48:39.754 I/ReactNativeJS(18100):        status: 'online',
10-23 17:48:39.754 I/ReactNativeJS(18100):        verified: true },
10-23 17:48:39.754 I/ReactNativeJS(18100):      { id: 'b4613ecf-44b5-49ba-8613-f8993b6db1d6',
10-23 17:48:39.754 I/ReactNativeJS(18100):        user_id: '539b06c9-4e24-49a4-b307-3fb3f9dc39da',
10-23 17:48:39.754 I/ReactNativeJS(18100):        name: undefined,
10-23 17:48:39.754 I/ReactNativeJS(18100):        vehicle_type: 'sedan',
10-23 17:48:39.754 I/ReactNativeJS(18100):        status: 'online',
10-23 17:48:39.754 I/ReactNativeJS(18100):        verified: true },
10-23 17:48:39.754 I/ReactNativeJS(18100):      { id: '631f4ab4-c643-45a8-addd-541595b0fe86',
10-23 17:48:39.754 I/ReactNativeJS(18100):        user_id: 'b12c8a48-05b3-475a-b042-4810aee4e918',
10-23 17:48:39.754 I/ReactNativeJS(18100):        name: undefined,
10-23 17:48:39.754 I/ReactNativeJS(18100):        vehicle_type: 'suv',
10-23 17:48:39.754 I/ReactNativeJS(18100):        status: 'online',
10-23 17:48:39.754 I/ReactNativeJS(18100):        verified: true },
10-23 17:48:39.754 I/ReactNativeJS(18100):      { id: '0330d75a-67b0-4b12-b9b7-22a241af9c57',
10-23 17:48:39.754 I/ReactNativeJS(18100):        user_id: 'f5e495f1-75a4-4ce1-bb60-4adfc348b8fc',
10-23 17:48:39.754 I/ReactNativeJS(18100):        name: undefined,
10-23 17:48:39.754 I/ReactNativeJS(18100):        vehicle_type: 'sedan',
10-23 17:48:39.754 I/ReactNativeJS(18100):        status: 'online',
10-23 17:48:39.754 I/ReactNativeJS(18100):        verified: true },
10-23 17:48:39.754 I/ReactNativeJS(18100):      { id: '707e2d38-7346-4a2e-bddb-e1157475f786',
10-23 17:48:39.754 I/ReactNativeJS(18100):        user_id: 'ed59084b-f517-4da3-814c-a314cdd8b4c6',
10-23 17:48:39.754 I/ReactNativeJS(18100):        name: undefined,
10-23 17:48:39.754 I/ReactNativeJS(18100):        vehicle_type: 'sedan',
10-23 17:48:39.754 I/ReactNativeJS(18100):        status: 'online',
10-23 17:48:39.754 I/ReactNativeJS(18100):        verified: true },
10-23 17:48:39.754 I/ReactNativeJS(18100):      { id: 'eb91d7e5-e2f2-4021-a8c8-3739a3d4cae4',
10-23 17:48:39.754 I/ReactNativeJS(18100):        user_id: '1c4ac410-54d8-4b5e-960b-3afcbebd115d',
10-23 17:48:39.754 I/ReactNativeJS(18100):        name: undefined,
10-23 17:48:39.754 I/ReactNativeJS(18100):        vehicle_type: 'sedan',
10-23 17:48:39.754 I/ReactNativeJS(18100):        status: 'online',
10-23 17:48:39.754 I/ReactNativeJS(18100):        verified: true },
10-23 17:48:39.754 I/ReactNativeJS(18100):      { id: '058f85df-35b3-4027-81a1-bd52a0df8e4a',
10-23 17:48:39.754 I/ReactNativeJS(18100):        user_id: '411ee301-8ffc-4874-86e9-37716951bc4d',
10-23 17:48:39.754 I/ReactNativeJS(18100):        name: undefined,
10-23 17:48:39.754 I/ReactNativeJS(18100):        vehicle_type: 'suv_ac',
10-23 17:48:39.754 I/ReactNativeJS(18100):        status: 'online',
10-23 17:48:39.754 I/ReactNativeJS(18100):        verified: true } ] }
10-23 17:48:39.754 I/ReactNativeJS(18100): '≡ƒôì [DRIVER-SERVICE] Step 2: Getting locations for user IDs:', [ '16011178-decf-4de3-beae-94ca46ce9258',
10-23 17:48:39.754 I/ReactNativeJS(18100):   'ae53a792-6aed-4186-823d-61c34c6defe2',
10-23 17:48:39.754 I/ReactNativeJS(18100):   'e6145579-4f5a-439f-b929-fa478580c049',
10-23 17:48:39.754 I/ReactNativeJS(18100):   '5d6651c8-2e3f-44e7-b4a1-0056c1d5315b',
10-23 17:48:39.754 I/ReactNativeJS(18100):   '6150ee57-77e5-45f7-b6c7-a586f22f2af8',
10-23 17:48:39.754 I/ReactNativeJS(18100):   'dc475d27-6167-4695-a014-dcb8d160b4c6',
10-23 17:48:39.754 I/ReactNativeJS(18100):   '550e8400-e29b-41d4-a716-446655440001',
10-23 17:48:39.754 I/ReactNativeJS(18100):   '550e8400-e29b-41d4-a716-446655440002',
10-23 17:48:39.754 I/ReactNativeJS(18100):   '6c03a657-c3e4-466e-b49c-324c2d051ce9',
10-23 17:48:39.754 I/ReactNativeJS(18100):   '550e8400-e29b-41d4-a716-446655440003',
10-23 17:48:39.754 I/ReactNativeJS(18100):   '550e8400-e29b-41d4-a716-446655440004',
10-23 17:48:39.754 I/ReactNativeJS(18100):   '550e8400-e29b-41d4-a716-446655440005',
10-23 17:48:39.754 I/ReactNativeJS(18100):   '892d8e0d-7ca5-4dd8-9979-539f394538f2',
10-23 17:48:39.754 I/ReactNativeJS(18100):   'cb735787-e96d-4d1d-9975-c112e75dfabd',
10-23 17:48:39.754 I/ReactNativeJS(18100):   'fdd94862-18e4-49d4-b6c0-8b9f73c8ff8c',
10-23 17:48:39.754 I/ReactNativeJS(18100):   '539b06c9-4e24-49a4-b307-3fb3f9dc39da',
10-23 17:48:39.754 I/ReactNativeJS(18100):   'b12c8a48-05b3-475a-b042-4810aee4e918',
10-23 17:48:39.754 I/ReactNativeJS(18100):   'f5e495f1-75a4-4ce1-bb60-4adfc348b8fc',
10-23 17:48:39.754 I/ReactNativeJS(18100):   'ed59084b-f517-4da3-814c-a314cdd8b4c6',
10-23 17:48:39.754 I/ReactNativeJS(18100):   '1c4ac410-54d8-4b5e-960b-3afcbebd115d',
10-23 17:48:39.754 I/ReactNativeJS(18100):   '411ee301-8ffc-4874-86e9-37716951bc4d' ]
10-23 17:48:40.054 I/ReactNativeJS(18100): '≡ƒôì [DRIVER-SERVICE] Found locations:', { total: 1,
10-23 17:48:40.054 I/ReactNativeJS(18100):   details:
10-23 17:48:40.054 I/ReactNativeJS(18100):    [ { user_id: '1c4ac410-54d8-4b5e-960b-3afcbebd115d',
10-23 17:48:40.054 I/ReactNativeJS(18100):        coordinates: { lat: 12.7486983, lng: 77.829988 },
10-23 17:48:40.054 I/ReactNativeJS(18100):        updated_at: '2025-10-23T12:18:30.580202+00:00',
10-23 17:48:40.054 I/ReactNativeJS(18100):        age_minutes: 0 } ] }
10-23 17:48:40.054 I/ReactNativeJS(18100): ≡ƒöì [DRIVER-SERVICE] Step 3: Processing drivers with distance calculation...
10-23 17:48:40.055 I/ReactNativeJS(18100): '≡ƒöì [DRIVER-SERVICE] Customer coordinates for distance calc:', { lat: 12.7486637,
10-23 17:48:40.055 I/ReactNativeJS(18100):   lng: 77.8299752,
10-23 17:48:40.055 I/ReactNativeJS(18100):   type: 'number',
10-23 17:48:40.055 I/ReactNativeJS(18100):   isValid: true }
10-23 17:48:40.055 I/ReactNativeJS(18100): Γ¥î [DRIVER-SERVICE] Driver 22480cc3-665c-407e-ad8a-8eafde67706b (undefined) skipped: no recent location
10-23 17:48:40.055 I/ReactNativeJS(18100): Γ¥î [DRIVER-SERVICE] Driver 76b66a88-dff9-4965-9e36-8a92023f155d (undefined) skipped: no recent location
10-23 17:48:40.055 I/ReactNativeJS(18100): Γ¥î [DRIVER-SERVICE] Driver 6f55e87b-6558-48df-af8c-d69190918b32 (undefined) skipped: no recent location
10-23 17:48:40.055 I/ReactNativeJS(18100): Γ¥î [DRIVER-SERVICE] Driver 97a4ba58-9431-48e5-ac8f-3472b8357179 (undefined) skipped: no recent location
10-23 17:48:40.055 I/ReactNativeJS(18100): Γ¥î [DRIVER-SERVICE] Driver c568b21d-0975-4388-a9fb-cc00013b6d4f (undefined) skipped: no recent location
10-23 17:48:40.055 I/ReactNativeJS(18100): Γ¥î [DRIVER-SERVICE] Driver 7055c2f9-99fa-4d96-bc6c-079b5cda6f56 (undefined) skipped: no recent location
10-23 17:48:40.055 I/ReactNativeJS(18100): Γ¥î [DRIVER-SERVICE] Driver 770e8400-e29b-41d4-a716-446655440001 (undefined) skipped: no recent location
10-23 17:48:40.055 I/ReactNativeJS(18100): Γ¥î [DRIVER-SERVICE] Driver 770e8400-e29b-41d4-a716-446655440002 (undefined) skipped: no recent location
10-23 17:48:40.055 I/ReactNativeJS(18100): Γ¥î [DRIVER-SERVICE] Driver 43d81d7d-e647-46cf-8599-11f63996b03e (undefined) skipped: no recent location
10-23 17:48:40.055 I/ReactNativeJS(18100): Γ¥î [DRIVER-SERVICE] Driver 770e8400-e29b-41d4-a716-446655440003 (undefined) skipped: no recent location
10-23 17:48:40.055 I/ReactNativeJS(18100): Γ¥î [DRIVER-SERVICE] Driver 770e8400-e29b-41d4-a716-446655440004 (undefined) skipped: no recent location
10-23 17:48:40.055 I/ReactNativeJS(18100): Γ¥î [DRIVER-SERVICE] Driver 770e8400-e29b-41d4-a716-446655440005 (undefined) skipped: no recent location
10-23 17:48:40.055 I/ReactNativeJS(18100): Γ¥î [DRIVER-SERVICE] Driver 489b94a7-777b-4e11-ba5c-17e0a3173737 (undefined) skipped: no recent location
10-23 17:48:40.055 I/ReactNativeJS(18100): Γ¥î [DRIVER-SERVICE] Driver d7b4a339-2ba5-45ed-a2ec-238548a8eab6 (undefined) skipped: no recent location
10-23 17:48:40.055 I/ReactNativeJS(18100): Γ¥î [DRIVER-SERVICE] Driver 38ee94d8-ac2d-450e-8084-0bef654546d7 (undefined) skipped: no recent location
10-23 17:48:40.055 I/ReactNativeJS(18100): Γ¥î [DRIVER-SERVICE] Driver b4613ecf-44b5-49ba-8613-f8993b6db1d6 (undefined) skipped: no recent location
10-23 17:48:40.055 I/ReactNativeJS(18100): Γ¥î [DRIVER-SERVICE] Driver 631f4ab4-c643-45a8-addd-541595b0fe86 (undefined) skipped: no recent location
10-23 17:48:40.055 I/ReactNativeJS(18100): Γ¥î [DRIVER-SERVICE] Driver 0330d75a-67b0-4b12-b9b7-22a241af9c57 (undefined) skipped: no recent location
10-23 17:48:40.055 I/ReactNativeJS(18100): Γ¥î [DRIVER-SERVICE] Driver 707e2d38-7346-4a2e-bddb-e1157475f786 (undefined) skipped: no recent location
10-23 17:48:40.057 I/ReactNativeJS(18100): ≡ƒÜù [DRIVER-SERVICE] Driver eb91d7e5-e2f2-4021-a8c8-3739a3d4cae4 (undefined) vehicle type: sedan
10-23 17:48:40.057 I/ReactNativeJS(18100): ≡ƒôÉ [DISTANCE-SERVICE] ===== DISTANCE CALCULATION DEBUG =====
10-23 17:48:40.058 I/ReactNativeJS(18100): '≡ƒôÉ [DISTANCE-SERVICE] Raw inputs:', { lat1: 12.7486637,
10-23 17:48:40.058 I/ReactNativeJS(18100):   lon1: 77.8299752,
10-23 17:48:40.058 I/ReactNativeJS(18100):   lat2: 12.7486983,
10-23 17:48:40.058 I/ReactNativeJS(18100):   lon2: 77.829988 }
10-23 17:48:40.058 I/ReactNativeJS(18100): '≡ƒôÉ [DISTANCE-SERVICE] Converted inputs:', { latitude1: 12.7486637,
10-23 17:48:40.058 I/ReactNativeJS(18100):   longitude1: 77.8299752,
10-23 17:48:40.058 I/ReactNativeJS(18100):   latitude2: 12.7486983,
10-23 17:48:40.058 I/ReactNativeJS(18100):   longitude2: 77.829988 }
10-23 17:48:40.058 I/ReactNativeJS(18100): '≡ƒôÉ [DISTANCE-SERVICE] Coordinate differences:', { lat_diff: 0.00003459999999932961,
10-23 17:48:40.058 I/ReactNativeJS(18100):   lng_diff: 0.000012799999993262645,
10-23 17:48:40.058 I/ReactNativeJS(18100):   very_close: true,
10-23 17:48:40.058 I/ReactNativeJS(18100):   essentially_same: true }
10-23 17:48:40.058 I/ReactNativeJS(18100): ≡ƒôÉ [DISTANCE-SERVICE] Coordinates are essentially the same, returning 0km
10-23 17:48:40.058 I/ReactNativeJS(18100): '≡ƒôÅ [DRIVER-SERVICE] Distance for driver eb91d7e5-e2f2-4021-a8c8-3739a3d4cae4 (undefined):', { distance_km: '0.0000',
10-23 17:48:40.058 I/ReactNativeJS(18100):   within_radius: true,
10-23 17:48:40.058 I/ReactNativeJS(18100):   radius_limit: '10km',
10-23 17:48:40.058 I/ReactNativeJS(18100):   driver_coords: { lat: 12.7486983, lng: 77.829988 },
10-23 17:48:40.058 I/ReactNativeJS(18100):   customer_coords: { lat: 12.7486637, lng: 77.8299752 } }
10-23 17:48:40.058 I/ReactNativeJS(18100): Γ£à [DRIVER-SERVICE] Driver eb91d7e5-e2f2-4021-a8c8-3739a3d4cae4 (undefined) INCLUDED: 0.0000km
10-23 17:48:40.058 I/ReactNativeJS(18100): Γ¥î [DRIVER-SERVICE] Driver 058f85df-35b3-4027-81a1-bd52a0df8e4a (undefined) skipped: no recent location
10-23 17:48:40.058 I/ReactNativeJS(18100): ≡ƒôè [DRIVER-SERVICE] ===== DIRECT DATABASE ACCESS RESULT =====
10-23 17:48:40.059 I/ReactNativeJS(18100): '≡ƒôè [DRIVER-SERVICE] Final summary:', { total_drivers_processed: 21,
10-23 17:48:40.059 I/ReactNativeJS(18100):   available_drivers_found: 1,
10-23 17:48:40.059 I/ReactNativeJS(18100):   customer_location: { lat: 12.7486637, lng: 77.8299752 },
10-23 17:48:40.059 I/ReactNativeJS(18100):   radius_km: 10,
10-23 17:48:40.059 I/ReactNativeJS(18100):   vehicle_type_filter: 'all (no filter applied)' }
10-23 17:48:40.059 I/ReactNativeJS(18100): '≡ƒöä [DRIVER-SERVICE] Initial fetch completed:', 1, 'drivers'
10-23 17:48:40.059 I/ReactNativeJS(18100): '≡ƒôì [HOME] Received driver locations update:', 1, 'drivers'
10-23 17:48:40.059 W/ReactNativeJS(18100): ≡ƒÅá [HOME] ===== RENDERING HOME SCREEN =====
10-23 17:48:40.060 W/ReactNativeJS(18100): '≡ƒÅá [HOME] currentLocation:', '{"altitude":774.3999633789062,"heading":0,"altitudeAccuracy":7.457854747772217,"latitude":12.7486637,"speed":0.07189670205116272,"longitude":77.8299752,"accuracy":6.056000232696533}'
10-23 17:48:40.060 W/ReactNativeJS(18100): '≡ƒÅá [HOME] pickupCoords:', '{"latitude":12.7486447,"longitude":77.8299961}'
10-23 17:48:40.060 W/ReactNativeJS(18100): '≡ƒÅá [HOME] destinationCoords:', 'null'
10-23 17:48:40.060 W/ReactNativeJS(18100): '≡ƒÅá [HOME] pickupLocation text:', 'PRXJ+F32, Brindavan Nagar, Plot 87, NGGO\'s Colony, Anand Nagar, Hosur, Tamil Nadu 635109, India'
10-23 17:48:40.060 W/ReactNativeJS(18100): '≡ƒÅá [HOME] availableDrivers count:', 1
10-23 17:48:40.060 W/ReactNativeJS(18100): '≡ƒÅá [HOME] showDriversOnMap:', true
10-23 17:48:40.060 I/ReactNativeJS(18100): '≡ƒÅá≡ƒÅá≡ƒÅá [HOME-V2] ABOUT TO RENDER SimpleHosurMap with props:', { hasUserLocation: true,
10-23 17:48:40.060 I/ReactNativeJS(18100):   hasPickup: true,
10-23 17:48:40.060 I/ReactNativeJS(18100):   hasDestination: false,
10-23 17:48:40.060 I/ReactNativeJS(18100):   showDriversOnMap: true,
10-23 17:48:40.060 I/ReactNativeJS(18100):   timestamp: '2025-10-23T12:18:40.060Z' }
10-23 17:48:40.060 I/ReactNativeJS(18100): ≡ƒº¬≡ƒº¬≡ƒº¬ TEST MAP RENDERING NOW
10-23 17:48:40.060 I/ReactNativeJS(18100): '≡ƒº¬ Props received:', [ 'userLocation',
10-23 17:48:40.060 I/ReactNativeJS(18100):   'pickupLocation',
10-23 17:48:40.060 I/ReactNativeJS(18100):   'destinationLocation',
10-23 17:48:40.060 I/ReactNativeJS(18100):   'onRegionChangeComplete',
10-23 17:48:40.060 I/ReactNativeJS(18100):   'onDestinationDragEnd',
10-23 17:48:40.060 I/ReactNativeJS(18100):   'showCenteredPin',
10-23 17:48:40.060 I/ReactNativeJS(18100):   'availableDrivers',
10-23 17:48:40.060 I/ReactNativeJS(18100):   'showDrivers' ]
10-23 17:48:40.068 I/ReactNativeJS(18100): ≡ƒôè [HOME] ===== AVAILABLE DRIVERS STATE CHANGED =====
10-23 17:48:40.069 I/ReactNativeJS(18100): '≡ƒôè [HOME] availableDrivers state update:', { count: 1,
10-23 17:48:40.069 I/ReactNativeJS(18100):   showDriversOnMap: true,
10-23 17:48:40.069 I/ReactNativeJS(18100):   driversPassedToMap: 1,
10-23 17:48:40.069 I/ReactNativeJS(18100):   drivers:
10-23 17:48:40.069 I/ReactNativeJS(18100):    [ { id: 'eb91d7e5-e2f2-4021-a8c8-3739a3d4cae4',
10-23 17:48:40.069 I/ReactNativeJS(18100):        vehicle_type: 'sedan',
10-23 17:48:40.069 I/ReactNativeJS(18100):        distance: '0.00km',
10-23 17:48:40.069 I/ReactNativeJS(18100):        coordinates: { lat: 12.7486983, lng: 77.829988 },
10-23 17:48:40.069 I/ReactNativeJS(18100):        heading: 314.27,
10-23 17:48:40.069 I/ReactNativeJS(18100):        rating: 5 } ] }
10-23 17:48:40.069 I/ReactNativeJS(18100): ≡ƒù║∩╕Å [HOME] ===== DRIVERS BEING PASSED TO MAP =====
10-23 17:48:40.069 I/ReactNativeJS(18100): '≡ƒù║∩╕Å [HOME] Map will receive', 1, 'drivers:'
10-23 17:48:40.069 I/ReactNativeJS(18100): '≡ƒù║∩╕Å [HOME] Driver 1 for map:', { driver_id: 'eb91d7e5-e2f2-4021-a8c8-3739a3d4cae4',
10-23 17:48:40.069 I/ReactNativeJS(18100):   user_id: '1c4ac410-54d8-4b5e-960b-3afcbebd115d',
10-23 17:48:40.069 I/ReactNativeJS(18100):   vehicle_type: 'sedan',
10-23 17:48:40.069 I/ReactNativeJS(18100):   coordinates: { lat: 12.7486983, lng: 77.829988 },
10-23 17:48:40.069 I/ReactNativeJS(18100):   distance: '0.0000km',
10-23 17:48:40.069 I/ReactNativeJS(18100):   rating: 5,
10-23 17:48:40.069 I/ReactNativeJS(18100):   heading: 314.27,
10-23 17:48:40.069 I/ReactNativeJS(18100):   updated_at: '2025-10-23T12:18:30.580202+00:00' }
10-23 17:48:40.070 I/ReactNativeJS(18100): '≡ƒôì [DRIVER-SERVICE] Found locations:', { total: 1,
10-23 17:48:40.070 I/ReactNativeJS(18100):   details:
10-23 17:48:40.070 I/ReactNativeJS(18100):    [ { user_id: '1c4ac410-54d8-4b5e-960b-3afcbebd115d',
10-23 17:48:40.070 I/ReactNativeJS(18100):        coordinates: { lat: 12.7486983, lng: 77.829988 },
10-23 17:48:40.070 I/ReactNativeJS(18100):        updated_at: '2025-10-23T12:18:30.580202+00:00',
10-23 17:48:40.070 I/ReactNativeJS(18100):        age_minutes: 0 } ] }
10-23 17:48:40.070 I/ReactNativeJS(18100): ≡ƒöì [DRIVER-SERVICE] Step 3: Processing drivers with distance calculation...
10-23 17:48:40.070 I/ReactNativeJS(18100): '≡ƒöì [DRIVER-SERVICE] Customer coordinates for distance calc:', { lat: 12.74861, lng: 77.8299867, type: 'number', isValid: true }
10-23 17:48:40.070 I/ReactNativeJS(18100): Γ¥î [DRIVER-SERVICE] Driver 22480cc3-665c-407e-ad8a-8eafde67706b (undefined) skipped: no recent location
10-23 17:48:40.070 I/ReactNativeJS(18100): Γ¥î [DRIVER-SERVICE] Driver 76b66a88-dff9-4965-9e36-8a92023f155d (undefined) skipped: no recent location
10-23 17:48:40.070 I/ReactNativeJS(18100): Γ¥î [DRIVER-SERVICE] Driver 6f55e87b-6558-48df-af8c-d69190918b32 (undefined) skipped: no recent location
10-23 17:48:40.070 I/ReactNativeJS(18100): Γ¥î [DRIVER-SERVICE] Driver 97a4ba58-9431-48e5-ac8f-3472b8357179 (undefined) skipped: no recent location
10-23 17:48:40.070 I/ReactNativeJS(18100): Γ¥î [DRIVER-SERVICE] Driver c568b21d-0975-4388-a9fb-cc00013b6d4f (undefined) skipped: no recent location
10-23 17:48:40.070 I/ReactNativeJS(18100): Γ¥î [DRIVER-SERVICE] Driver 7055c2f9-99fa-4d96-bc6c-079b5cda6f56 (undefined) skipped: no recent location
10-23 17:48:40.070 I/ReactNativeJS(18100): Γ¥î [DRIVER-SERVICE] Driver 770e8400-e29b-41d4-a716-446655440001 (undefined) skipped: no recent location
10-23 17:48:40.070 I/ReactNativeJS(18100): Γ¥î [DRIVER-SERVICE] Driver 770e8400-e29b-41d4-a716-446655440002 (undefined) skipped: no recent location
10-23 17:48:40.070 I/ReactNativeJS(18100): Γ¥î [DRIVER-SERVICE] Driver 43d81d7d-e647-46cf-8599-11f63996b03e (undefined) skipped: no recent location
10-23 17:48:40.070 I/ReactNativeJS(18100): Γ¥î [DRIVER-SERVICE] Driver 770e8400-e29b-41d4-a716-446655440003 (undefined) skipped: no recent location
10-23 17:48:40.070 I/ReactNativeJS(18100): Γ¥î [DRIVER-SERVICE] Driver 770e8400-e29b-41d4-a716-446655440004 (undefined) skipped: no recent location
10-23 17:48:40.070 I/ReactNativeJS(18100): Γ¥î [DRIVER-SERVICE] Driver 770e8400-e29b-41d4-a716-446655440005 (undefined) skipped: no recent location
10-23 17:48:40.070 I/ReactNativeJS(18100): Γ¥î [DRIVER-SERVICE] Driver 489b94a7-777b-4e11-ba5c-17e0a3173737 (undefined) skipped: no recent location
10-23 17:48:40.070 I/ReactNativeJS(18100): Γ¥î [DRIVER-SERVICE] Driver d7b4a339-2ba5-45ed-a2ec-238548a8eab6 (undefined) skipped: no recent location
10-23 17:48:40.070 I/ReactNativeJS(18100): Γ¥î [DRIVER-SERVICE] Driver 38ee94d8-ac2d-450e-8084-0bef654546d7 (undefined) skipped: no recent location
10-23 17:48:40.070 I/ReactNativeJS(18100): Γ¥î [DRIVER-SERVICE] Driver b4613ecf-44b5-49ba-8613-f8993b6db1d6 (undefined) skipped: no recent location
10-23 17:48:40.070 I/ReactNativeJS(18100): Γ¥î [DRIVER-SERVICE] Driver 631f4ab4-c643-45a8-addd-541595b0fe86 (undefined) skipped: no recent location
10-23 17:48:40.070 I/ReactNativeJS(18100): Γ¥î [DRIVER-SERVICE] Driver 0330d75a-67b0-4b12-b9b7-22a241af9c57 (undefined) skipped: no recent location
10-23 17:48:40.070 I/ReactNativeJS(18100): Γ¥î [DRIVER-SERVICE] Driver 707e2d38-7346-4a2e-bddb-e1157475f786 (undefined) skipped: no recent location
10-23 17:48:40.070 I/ReactNativeJS(18100): ≡ƒÜù [DRIVER-SERVICE] Driver eb91d7e5-e2f2-4021-a8c8-3739a3d4cae4 (undefined) vehicle type: sedan
10-23 17:48:40.071 I/ReactNativeJS(18100): ≡ƒôÉ [DISTANCE-SERVICE] ===== DISTANCE CALCULATION DEBUG =====
10-23 17:48:40.071 I/ReactNativeJS(18100): '≡ƒôÉ [DISTANCE-SERVICE] Raw inputs:', { lat1: 12.74861,
10-23 17:48:40.071 I/ReactNativeJS(18100):   lon1: 77.8299867,
10-23 17:48:40.071 I/ReactNativeJS(18100):   lat2: 12.7486983,
10-23 17:48:40.071 I/ReactNativeJS(18100):   lon2: 77.829988 }
10-23 17:48:40.071 I/ReactNativeJS(18100): '≡ƒôÉ [DISTANCE-SERVICE] Converted inputs:', { latitude1: 12.74861,
10-23 17:48:40.071 I/ReactNativeJS(18100):   longitude1: 77.8299867,
10-23 17:48:40.071 I/ReactNativeJS(18100):   latitude2: 12.7486983,
10-23 17:48:40.071 I/ReactNativeJS(18100):   longitude2: 77.829988 }
10-23 17:48:40.071 I/ReactNativeJS(18100): '≡ƒôÉ [DISTANCE-SERVICE] Coordinate differences:', { lat_diff: 0.00008829999999981908,
10-23 17:48:40.071 I/ReactNativeJS(18100):   lng_diff: 0.0000012999999938756446,
10-23 17:48:40.071 I/ReactNativeJS(18100):   very_close: true,
10-23 17:48:40.071 I/ReactNativeJS(18100):   essentially_same: true }
10-23 17:48:40.071 I/ReactNativeJS(18100): ≡ƒôÉ [DISTANCE-SERVICE] Coordinates are essentially the same, returning 0km
10-23 17:48:40.071 I/ReactNativeJS(18100): '≡ƒôÅ [DRIVER-SERVICE] Distance for driver eb91d7e5-e2f2-4021-a8c8-3739a3d4cae4 (undefined):', { distance_km: '0.0000',
10-23 17:48:40.071 I/ReactNativeJS(18100):   within_radius: true,
10-23 17:48:40.071 I/ReactNativeJS(18100):   radius_limit: '10km',
10-23 17:48:40.071 I/ReactNativeJS(18100):   driver_coords: { lat: 12.7486983, lng: 77.829988 },
10-23 17:48:40.071 I/ReactNativeJS(18100):   customer_coords: { lat: 12.74861, lng: 77.8299867 } }
10-23 17:48:40.071 I/ReactNativeJS(18100): Γ£à [DRIVER-SERVICE] Driver eb91d7e5-e2f2-4021-a8c8-3739a3d4cae4 (undefined) INCLUDED: 0.0000km
10-23 17:48:40.071 I/ReactNativeJS(18100): Γ¥î [DRIVER-SERVICE] Driver 058f85df-35b3-4027-81a1-bd52a0df8e4a (undefined) skipped: no recent location
10-23 17:48:40.071 I/ReactNativeJS(18100): ≡ƒôè [DRIVER-SERVICE] ===== DIRECT DATABASE ACCESS RESULT =====
10-23 17:48:40.071 I/ReactNativeJS(18100): '≡ƒôè [DRIVER-SERVICE] Final summary:', { total_drivers_processed: 21,
10-23 17:48:40.071 I/ReactNativeJS(18100):   available_drivers_found: 1,
10-23 17:48:40.071 I/ReactNativeJS(18100):   customer_location: { lat: 12.74861, lng: 77.8299867 },
10-23 17:48:40.071 I/ReactNativeJS(18100):   radius_km: 10,
10-23 17:48:40.071 I/ReactNativeJS(18100):   vehicle_type_filter: 'all (no filter applied)' }
10-23 17:48:40.071 I/ReactNativeJS(18100): '≡ƒöä [DRIVER-SERVICE] Polling update:', 1, 'drivers'
10-23 17:48:40.071 I/ReactNativeJS(18100): '≡ƒôì [HOME] Received driver locations update:', 1, 'drivers'
10-23 17:48:40.074 W/ReactNativeJS(18100): ≡ƒÅá [HOME] ===== RENDERING HOME SCREEN =====
10-23 17:48:40.075 W/ReactNativeJS(18100): '≡ƒÅá [HOME] currentLocation:', '{"altitude":774.3999633789062,"heading":0,"altitudeAccuracy":7.457854747772217,"latitude":12.7486637,"speed":0.07189670205116272,"longitude":77.8299752,"accuracy":6.056000232696533}'
10-23 17:48:40.075 W/ReactNativeJS(18100): '≡ƒÅá [HOME] pickupCoords:', '{"latitude":12.7486447,"longitude":77.8299961}'
10-23 17:48:40.075 W/ReactNativeJS(18100): '≡ƒÅá [HOME] destinationCoords:', 'null'
10-23 17:48:40.075 W/ReactNativeJS(18100): '≡ƒÅá [HOME] pickupLocation text:', 'PRXJ+F32, Brindavan Nagar, Plot 87, NGGO\'s Colony, Anand Nagar, Hosur, Tamil Nadu 635109, India'
10-23 17:48:40.075 W/ReactNativeJS(18100): '≡ƒÅá [HOME] availableDrivers count:', 1
10-23 17:48:40.075 W/ReactNativeJS(18100): '≡ƒÅá [HOME] showDriversOnMap:', true
10-23 17:48:40.075 I/ReactNativeJS(18100): '≡ƒÅá≡ƒÅá≡ƒÅá [HOME-V2] ABOUT TO RENDER SimpleHosurMap with props:', { hasUserLocation: true,
10-23 17:48:40.075 I/ReactNativeJS(18100):   hasPickup: true,
10-23 17:48:40.075 I/ReactNativeJS(18100):   hasDestination: false,
10-23 17:48:40.075 I/ReactNativeJS(18100):   showDriversOnMap: true,
10-23 17:48:40.075 I/ReactNativeJS(18100):   timestamp: '2025-10-23T12:18:40.075Z' }
10-23 17:48:40.075 I/ReactNativeJS(18100): ≡ƒº¬≡ƒº¬≡ƒº¬ TEST MAP RENDERING NOW
10-23 17:48:40.075 I/ReactNativeJS(18100): '≡ƒº¬ Props received:', [ 'userLocation',
10-23 17:48:40.075 I/ReactNativeJS(18100):   'pickupLocation',
10-23 17:48:40.075 I/ReactNativeJS(18100):   'destinationLocation',
10-23 17:48:40.075 I/ReactNativeJS(18100):   'onRegionChangeComplete',
10-23 17:48:40.075 I/ReactNativeJS(18100):   'onDestinationDragEnd',
10-23 17:48:40.075 I/ReactNativeJS(18100):   'showCenteredPin',
10-23 17:48:40.075 I/ReactNativeJS(18100):   'availableDrivers',
10-23 17:48:40.075 I/ReactNativeJS(18100):   'showDrivers' ]
10-23 17:48:40.082 I/ReactNativeJS(18100): ≡ƒôè [HOME] ===== AVAILABLE DRIVERS STATE CHANGED =====
10-23 17:48:40.083 I/ReactNativeJS(18100): '≡ƒôè [HOME] availableDrivers state update:', { count: 1,
10-23 17:48:40.083 I/ReactNativeJS(18100):   showDriversOnMap: true,
10-23 17:48:40.083 I/ReactNativeJS(18100):   driversPassedToMap: 1,
10-23 17:48:40.083 I/ReactNativeJS(18100):   drivers:
10-23 17:48:40.083 I/ReactNativeJS(18100):    [ { id: 'eb91d7e5-e2f2-4021-a8c8-3739a3d4cae4',
10-23 17:48:40.083 I/ReactNativeJS(18100):        vehicle_type: 'sedan',
10-23 17:48:40.083 I/ReactNativeJS(18100):        distance: '0.00km',
10-23 17:48:40.083 I/ReactNativeJS(18100):        coordinates: { lat: 12.7486983, lng: 77.829988 },
10-23 17:48:40.083 I/ReactNativeJS(18100):        heading: 314.27,
10-23 17:48:40.083 I/ReactNativeJS(18100):        rating: 5 } ] }
10-23 17:48:40.083 I/ReactNativeJS(18100): ≡ƒù║∩╕Å [HOME] ===== DRIVERS BEING PASSED TO MAP =====
10-23 17:48:40.083 I/ReactNativeJS(18100): '≡ƒù║∩╕Å [HOME] Map will receive', 1, 'drivers:'
10-23 17:48:40.083 I/ReactNativeJS(18100): '≡ƒù║∩╕Å [HOME] Driver 1 for map:', { driver_id: 'eb91d7e5-e2f2-4021-a8c8-3739a3d4cae4',
10-23 17:48:40.083 I/ReactNativeJS(18100):   user_id: '1c4ac410-54d8-4b5e-960b-3afcbebd115d',
10-23 17:48:40.083 I/ReactNativeJS(18100):   vehicle_type: 'sedan',
10-23 17:48:40.083 I/ReactNativeJS(18100):   coordinates: { lat: 12.7486983, lng: 77.829988 },
10-23 17:48:40.083 I/ReactNativeJS(18100):   distance: '0.0000km',
10-23 17:48:40.083 I/ReactNativeJS(18100):   rating: 5,
10-23 17:48:40.083 I/ReactNativeJS(18100):   heading: 314.27,
10-23 17:48:40.083 I/ReactNativeJS(18100):   updated_at: '2025-10-23T12:18:30.580202+00:00' }
10-23 17:48:40.145 I/ReactNativeJS(18100): '≡ƒôì [GPS] Live location update:', { lat: '12.748630', lng: '77.829969', accuracy: '4.52m' }
10-23 17:48:40.146 W/ReactNativeJS(18100): ≡ƒÅá [HOME] ===== RENDERING HOME SCREEN =====
10-23 17:48:40.146 I/ReactNativeJS(  419): '≡ƒôì 5-second location watch update:', { altitude: 774.3999633789062,
10-23 17:48:40.146 I/ReactNativeJS(  419):   heading: 0,
10-23 17:48:40.146 I/ReactNativeJS(  419):   altitudeAccuracy: 12.201140403747559,
10-23 17:48:40.146 I/ReactNativeJS(  419):   latitude: 12.7486296,
10-23 17:48:40.146 I/ReactNativeJS(  419):   speed: 0.07180365920066833,
10-23 17:48:40.146 I/ReactNativeJS(  419):   longitude: 77.8299689,
10-23 17:48:40.146 I/ReactNativeJS(  419):   accuracy: 4.517000198364258 }
10-23 17:48:40.146 W/ReactNativeJS(18100): '≡ƒÅá [HOME] currentLocation:', '{"altitude":774.3999633789062,"heading":0,"altitudeAccuracy":12.201140403747559,"latitude":12.7486296,"speed":0.07180365920066833,"longitude":77.8299689,"accuracy":4.517000198364258}'
10-23 17:48:40.146 W/ReactNativeJS(18100): '≡ƒÅá [HOME] pickupCoords:', '{"latitude":12.7486447,"longitude":77.8299961}'
10-23 17:48:40.146 W/ReactNativeJS(18100): '≡ƒÅá [HOME] destinationCoords:', 'null'
10-23 17:48:40.146 W/ReactNativeJS(18100): '≡ƒÅá [HOME] pickupLocation text:', 'PRXJ+F32, Brindavan Nagar, Plot 87, NGGO\'s Colony, Anand Nagar, Hosur, Tamil Nadu 635109, India'
10-23 17:48:40.146 W/ReactNativeJS(18100): '≡ƒÅá [HOME] availableDrivers count:', 1
10-23 17:48:40.146 W/ReactNativeJS(18100): '≡ƒÅá [HOME] showDriversOnMap:', true
10-23 17:48:40.146 I/ReactNativeJS(18100): '≡ƒÅá≡ƒÅá≡ƒÅá [HOME-V2] ABOUT TO RENDER SimpleHosurMap with props:', { hasUserLocation: true,
10-23 17:48:40.146 I/ReactNativeJS(18100):   hasPickup: true,
10-23 17:48:40.146 I/ReactNativeJS(18100):   hasDestination: false,
10-23 17:48:40.146 I/ReactNativeJS(18100):   showDriversOnMap: true,
10-23 17:48:40.146 I/ReactNativeJS(18100):   timestamp: '2025-10-23T12:18:40.146Z' }
10-23 17:48:40.146 I/ReactNativeJS(18100): ≡ƒº¬≡ƒº¬≡ƒº¬ TEST MAP RENDERING NOW
10-23 17:48:40.146 I/ReactNativeJS(18100): '≡ƒº¬ Props received:', [ 'userLocation',
10-23 17:48:40.146 I/ReactNativeJS(18100):   'pickupLocation',
10-23 17:48:40.146 I/ReactNativeJS(18100):   'destinationLocation',
10-23 17:48:40.146 I/ReactNativeJS(18100):   'onRegionChangeComplete',
10-23 17:48:40.146 I/ReactNativeJS(18100):   'onDestinationDragEnd',
10-23 17:48:40.146 I/ReactNativeJS(18100):   'showCenteredPin',
10-23 17:48:40.146 I/ReactNativeJS(18100):   'availableDrivers',
10-23 17:48:40.146 I/ReactNativeJS(18100):   'showDrivers' ]
10-23 17:48:40.154 I/ReactNativeJS(  419): '≡ƒÄ»≡ƒÄ»≡ƒÄ» TripCompletionModal RENDER - visible:', false
10-23 17:48:40.154 I/ReactNativeJS(18100): ≡ƒÜù [HOME] ===== STARTING IMMEDIATE DRIVER DISPLAY =====
10-23 17:48:40.154 I/ReactNativeJS(18100): ≡ƒÜù [HOME] Current location available, showing drivers immediately
10-23 17:48:40.154 I/ReactNativeJS(18100): '≡ƒÜù [HOME] Location details:', { latitude: 12.7486296,
10-23 17:48:40.154 I/ReactNativeJS(18100):   longitude: 77.8299689,
10-23 17:48:40.154 I/ReactNativeJS(18100):   accuracy: 4.517000198364258 }
10-23 17:48:40.154 I/ReactNativeJS(18100): ≡ƒÜù [HOME] Showing ALL vehicle types (no filter applied)
10-23 17:48:40.154 I/ReactNativeJS(18100): '≡ƒÜù [HOME] Should show drivers on map:', true
10-23 17:48:40.154 I/ReactNativeJS(  419): '≡ƒÄ»≡ƒÄ»≡ƒÄ» tripData:', '{\n  "distance": 0,\n  "duration": 0,\n  "fareBreakdown": {\n    "booking_type": "regular",\n    "vehicle_type": "sedan",\n    "base_fare": 0,\n    "distance_fare": 0,\n    "time_fare": 0,\n    "surge_charges": 0,\n    "deadhead_charges": 0,\n    "platform_fee": 0,\n    "gst_on_charges": 0,\n    "gst_on_platform_fee": 0,\n    "extra_km_charges": 0,\n    "driver_allowance": 0,\n    "total_fare": 0,\n    "details": {\n      "actual_distance_km": 0,\n      "actual_duration_minutes": 0,\n      "per_km_rate": 0\n    }\n  },\n  "pickup_address": "",\n  "destination_address": "",\n  "booking_type": "regular",\n  "rental_hours": null\n}'
10-23 17:48:40.154 I/ReactNativeJS(18100): '≡ƒöä [HOME] Starting driver location polling with:', { currentLocation: { latitude: 12.7486296, longitude: 77.8299689 },
10-23 17:48:40.154 I/ReactNativeJS(18100):   vehicleType: 'sedan',
10-23 17:48:40.154 I/ReactNativeJS(18100):   radius: 10 }
10-23 17:48:40.155 I/ReactNativeJS(18100): ≡ƒ¢æ [HOME] Stopping driver location polling
10-23 17:48:40.155 I/ReactNativeJS(  419): Γ¥î Not visible - returning null
10-23 17:48:40.155 I/ReactNativeJS(18100): ≡ƒ¢æ [DRIVER-SERVICE] Stopped driver location polling
10-23 17:48:40.155 I/ReactNativeJS(18100): '≡ƒöä [DRIVER-SERVICE] Starting driver location polling every', 10, 'seconds'
10-23 17:48:40.155 I/ReactNativeJS(18100): '≡ƒöä [DRIVER-SERVICE] Polling parameters:', { customerLocation: { lat: 12.7486296, lng: 77.8299689 },
10-23 17:48:40.155 I/ReactNativeJS(18100):   vehicleType: 'all',
10-23 17:48:40.155 I/ReactNativeJS(18100):   interval: '10000ms' }
10-23 17:48:40.155 I/ReactNativeJS(18100): '≡ƒù║∩╕Å [DRIVER-SERVICE] Fetching available drivers via edge function:', { location: { lat: 12.7486296, lng: 77.8299689 },
10-23 17:48:40.155 I/ReactNativeJS(18100):   radius: '10km',
10-23 17:48:40.155 I/ReactNativeJS(18100):   vehicleType: 'all',
10-23 17:48:40.155 I/ReactNativeJS(18100):   timestamp: '2025-10-23T12:18:40.155Z' }
10-23 17:48:40.155 I/ReactNativeJS(18100): '≡ƒîÉ [DRIVER-SERVICE] Constructed Edge Function URL:', 'https://whubaypabojomdyfqxcf.supabase.co/functions/v1/get-drivers-with-locations?lat=12.7486296&lng=77.8299689&radius=10'
10-23 17:48:40.169 I/ReactNativeJS(  419): '≡ƒôì Background location update:', [ { timestamp: 1761221920119,
10-23 17:48:40.169 I/ReactNativeJS(  419):     mocked: false,
10-23 17:48:40.169 I/ReactNativeJS(  419):     coords:
10-23 17:48:40.169 I/ReactNativeJS(  419):      { altitude: 774.3999633789062,
10-23 17:48:40.169 I/ReactNativeJS(  419):        heading: 0,
10-23 17:48:40.169 I/ReactNativeJS(  419):        altitudeAccuracy: 12.201140403747559,
10-23 17:48:40.169 I/ReactNativeJS(  419):        latitude: 12.7486296,
10-23 17:48:40.169 I/ReactNativeJS(  419):        speed: 0.07180365920066833,
10-23 17:48:40.169 I/ReactNativeJS(  419):        longitude: 77.8299689,
10-23 17:48:40.169 I/ReactNativeJS(  419):        accuracy: 4.517000198364258 } } ]
10-23 17:48:40.184 I/ReactNativeJS(  419): ≡ƒôñ Background location update via RPC...
10-23 17:48:40.184 E/ReactNativeJS(  419): Γ¥î Supabase credentials not configured
10-23 17:48:40.545 W/ReactNativeJS(18100): 'ΓÜá∩╕Å [DRIVER-SERVICE] Edge function failed, using direct database access:', 'Edge function failed: 500 - {"code":"WORKER_ERROR","message":"Function exited due to an error (please check logs)"}'
10-23 17:48:40.545 I/ReactNativeJS(18100): ≡ƒöì [DRIVER-SERVICE] ===== USING DIRECT DATABASE ACCESS =====
10-23 17:48:40.545 I/ReactNativeJS(18100): '≡ƒöì [DRIVER-SERVICE] Parameters:', { customerLocation: { lat: 12.7486296, lng: 77.8299689 },
10-23 17:48:40.545 I/ReactNativeJS(18100):   radius: '10km',
10-23 17:48:40.545 I/ReactNativeJS(18100):   vehicleType: 'all' }
10-23 17:48:40.545 I/ReactNativeJS(18100): ≡ƒôè [DRIVER-SERVICE] Step 1: Fetching online verified drivers...
10-23 17:48:40.573 I/ReactNativeJS(  419): === SENDING LOCATION TO EDGE FUNCTION ===
10-23 17:48:40.573 I/ReactNativeJS(  419): 'Driver User ID:', '1c4ac410-54d8-4b5e-960b-3afcbebd115d'
10-23 17:48:40.574 I/ReactNativeJS(  419): 'Location:', { latitude: 12.7486296,
10-23 17:48:40.574 I/ReactNativeJS(  419):   longitude: 77.8299689,
10-23 17:48:40.574 I/ReactNativeJS(  419):   accuracy: 4.517000198364258 }
10-23 17:48:40.574 I/ReactNativeJS(  419): ≡ƒôñ Updating location via RPC...
10-23 17:48:40.808 I/ReactNativeJS(18100): '≡ƒöì AuthNavigator - checking auth state:', { user: true,
10-23 17:48:40.808 I/ReactNativeJS(18100):   loading: false,
10-23 17:48:40.808 I/ReactNativeJS(18100):   segments: '(tabs)',
10-23 17:48:40.808 I/ReactNativeJS(18100):   userEmail: '918608374935@a1taxi.app',
10-23 17:48:40.808 I/ReactNativeJS(18100):   userRole: 'customer' }
10-23 17:48:40.808 I/ReactNativeJS(18100): Γ£à User authenticated and on correct screen
10-23 17:48:40.815 I/ReactNativeJS(18100): '≡ƒôè [DRIVER-SERVICE] Found drivers:', { total: 21,
10-23 17:48:40.815 I/ReactNativeJS(18100):   details:
10-23 17:48:40.815 I/ReactNativeJS(18100):    [ { id: '22480cc3-665c-407e-ad8a-8eafde67706b',
10-23 17:48:40.815 I/ReactNativeJS(18100):        user_id: '16011178-decf-4de3-beae-94ca46ce9258',
10-23 17:48:40.815 I/ReactNativeJS(18100):        name: undefined,
10-23 17:48:40.815 I/ReactNativeJS(18100):        vehicle_type: 'hatchback',
10-23 17:48:40.815 I/ReactNativeJS(18100):        status: 'online',
10-23 17:48:40.815 I/ReactNativeJS(18100):        verified: true },
10-23 17:48:40.815 I/ReactNativeJS(18100):      { id: '76b66a88-dff9-4965-9e36-8a92023f155d',
10-23 17:48:40.815 I/ReactNativeJS(18100):        user_id: 'ae53a792-6aed-4186-823d-61c34c6defe2',
10-23 17:48:40.815 I/ReactNativeJS(18100):        name: undefined,
10-23 17:48:40.815 I/ReactNativeJS(18100):        vehicle_type: 'sedan',
10-23 17:48:40.815 I/ReactNativeJS(18100):        status: 'online',
10-23 17:48:40.815 I/ReactNativeJS(18100):        verified: true },
10-23 17:48:40.815 I/ReactNativeJS(18100):      { id: '6f55e87b-6558-48df-af8c-d69190918b32',
10-23 17:48:40.815 I/ReactNativeJS(18100):        user_id: 'e6145579-4f5a-439f-b929-fa478580c049',
10-23 17:48:40.815 I/ReactNativeJS(18100):        name: undefined,
10-23 17:48:40.815 I/ReactNativeJS(18100):        vehicle_type: 'hatchback',
10-23 17:48:40.815 I/ReactNativeJS(18100):        status: 'online',
10-23 17:48:40.815 I/ReactNativeJS(18100):        verified: true },
10-23 17:48:40.815 I/ReactNativeJS(18100):      { id: '97a4ba58-9431-48e5-ac8f-3472b8357179',
10-23 17:48:40.815 I/ReactNativeJS(18100):        user_id: '5d6651c8-2e3f-44e7-b4a1-0056c1d5315b',
10-23 17:48:40.815 I/ReactNativeJS(18100):        name: undefined,
10-23 17:48:40.815 I/ReactNativeJS(18100):        vehicle_type: 'sedan_ac',
10-23 17:48:40.815 I/ReactNativeJS(18100):        status: 'online',
10-23 17:48:40.815 I/ReactNativeJS(18100):        verified: true },
10-23 17:48:40.815 I/ReactNativeJS(18100):      { id: 'c568b21d-0975-4388-a9fb-cc00013b6d4f',
10-23 17:48:40.815 I/ReactNativeJS(18100):        user_id: '6150ee57-77e5-45f7-b6c7-a586f22f2af8',
10-23 17:48:40.815 I/ReactNativeJS(18100):        name: undefined,
10-23 17:48:40.815 I/ReactNativeJS(18100):        vehicle_type: 'sedan',
10-23 17:48:40.815 I/ReactNativeJS(18100):        status: 'online',
10-23 17:48:40.815 I/ReactNativeJS(18100):        verified: true },
10-23 17:48:40.815 I/ReactNativeJS(18100):      { id: '7055c2f9-99fa-4d96-bc6c-079b5cda6f56',
10-23 17:48:40.815 I/ReactNativeJS(18100):        user_id: 'dc475d27-6167-4695-a014-dcb8d160b4c6',
10-23 17:48:40.815 I/ReactNativeJS(18100):        name: undefined,
10-23 17:48:40.815 I/ReactNativeJS(18100):        vehicle_type: 'hatchback',
10-23 17:48:40.815 I/ReactNativeJS(18100):        status: 'online',
10-23 17:48:40.815 I/ReactNativeJS(18100):        verified: true },
10-23 17:48:40.815 I/ReactNativeJS(18100):      { id: '770e8400-e29b-41d4-a716-446655440001',
10-23 17:48:40.815 I/ReactNativeJS(18100):        user_id: '550e8400-e29b-41d4-a716-446655440001',
10-23 17:48:40.815 I/ReactNativeJS(18100):        name: undefined,
10-23 17:48:40.815 I/ReactNativeJS(18100):        vehicle_type: 'hatchback',
10-23 17:48:40.815 I/ReactNativeJS(18100):        status: 'online',
10-23 17:48:40.815 I/ReactNativeJS(18100):        verified: true },
10-23 17:48:40.815 I/ReactNativeJS(18100):      { id: '770e8400-e29b-41d4-a716-446655440002',
10-23 17:48:40.815 I/ReactNativeJS(18100):        user_id: '550e8400-e29b-41d4-a716-446655440002',
10-23 17:48:40.815 I/ReactNativeJS(18100):        name: undefined,
10-23 17:48:40.815 I/ReactNativeJS(18100):        vehicle_type: 'sedan',
10-23 17:48:40.815 I/ReactNativeJS(18100):        status: 'online',
10-23 17:48:40.815 I/ReactNativeJS(18100):        verified: true },
10-23 17:48:40.815 I/ReactNativeJS(18100):      { id: '43d81d7d-e647-46cf-8599-11f63996b03e',
10-23 17:48:40.815 I/ReactNativeJS(18100):        user_id: '6c03a657-c3e4-466e-b49c-324c2d051ce9',
10-23 17:48:40.815 I/ReactNativeJS(18100):        name: undefined,
10-23 17:48:40.815 I/ReactNativeJS(18100):        vehicle_type: 'sedan_ac',
10-23 17:48:40.815 I/ReactNativeJS(18100):        status: 'online',
10-23 17:48:40.815 I/ReactNativeJS(18100):        verified: true },
10-23 17:48:40.815 I/ReactNativeJS(18100):      { id: '770e8400-e29b-41d4-a716-446655440003',
10-23 17:48:40.815 I/ReactNativeJS(18100):        user_id: '550e8400-e29b-41d4-a716-446655440003',
10-23 17:48:40.815 I/ReactNativeJS(18100):        name: undefined,
10-23 17:48:40.815 I/ReactNativeJS(18100):        vehicle_type: 'suv',
10-23 17:48:40.815 I/ReactNativeJS(18100):        status: 'online',
10-23 17:48:40.815 I/ReactNativeJS(18100):        verified: true },
10-23 17:48:40.815 I/ReactNativeJS(18100):      { id: '770e8400-e29b-41d4-a716-446655440004',
10-23 17:48:40.815 I/ReactNativeJS(18100):        user_id: '550e8400-e29b-41d4-a716-446655440004',
10-23 17:48:40.815 I/ReactNativeJS(18100):        name: undefined,
10-23 17:48:40.815 I/ReactNativeJS(18100):        vehicle_type: 'sedan',
10-23 17:48:40.815 I/ReactNativeJS(18100):        status: 'online',
10-23 17:48:40.815 I/ReactNativeJS(18100):        verified: true },
10-23 17:48:40.815 I/ReactNativeJS(18100):      { id: '770e8400-e29b-41d4-a716-446655440005',
10-23 17:48:40.815 I/ReactNativeJS(18100):        user_id: '550e8400-e29b-41d4-a716-446655440005',
10-23 17:48:40.815 I/ReactNativeJS(18100):        name: undefined,
10-23 17:48:40.815 I/ReactNativeJS(18100):        vehicle_type: 'hatchback',
10-23 17:48:40.815 I/ReactNativeJS(18100):        status: 'online',
10-23 17:48:40.815 I/ReactNativeJS(18100):        verified: true },
10-23 17:48:40.815 I/ReactNativeJS(18100):      { id: '489b94a7-777b-4e11-ba5c-17e0a3173737',
10-23 17:48:40.815 I/ReactNativeJS(18100):        user_id: '892d8e0d-7ca5-4dd8-9979-539f394538f2',
10-23 17:48:40.815 I/ReactNativeJS(18100):        name: undefined,
10-23 17:48:40.815 I/ReactNativeJS(18100):        vehicle_type: 'hatchback',
10-23 17:48:40.815 I/ReactNativeJS(18100):        status: 'online',
10-23 17:48:40.815 I/ReactNativeJS(18100):        verified: true },
10-23 17:48:40.815 I/ReactNativeJS(18100):      { id: 'd7b4a339-2ba5-45ed-a2ec-238548a8eab6',
10-23 17:48:40.815 I/ReactNativeJS(18100):        user_id: 'cb735787-e96d-4d1d-9975-c112e75dfabd',
10-23 17:48:40.815 I/ReactNativeJS(18100):        name: undefined,
10-23 17:48:40.815 I/ReactNativeJS(18100):        vehicle_type: 'hatchback_ac',
10-23 17:48:40.815 I/ReactNativeJS(18100):        status: 'online',
10-23 17:48:40.815 I/ReactNativeJS(18100):        verified: true },
10-23 17:48:40.815 I/ReactNativeJS(18100):      { id: '38ee94d8-ac2d-450e-8084-0bef654546d7',
10-23 17:48:40.815 I/ReactNativeJS(18100):        user_id: 'fdd94862-18e4-49d4-b6c0-8b9f73c8ff8c',
10-23 17:48:40.815 I/ReactNativeJS(18100):        name: undefined,
10-23 17:48:40.815 I/ReactNativeJS(18100):        vehicle_type: 'sedan',
10-23 17:48:40.815 I/ReactNativeJS(18100):        status: 'online',
10-23 17:48:40.815 I/ReactNativeJS(18100):        verified: true },
10-23 17:48:40.815 I/ReactNativeJS(18100):      { id: 'b4613ecf-44b5-49ba-8613-f8993b6db1d6',
10-23 17:48:40.815 I/ReactNativeJS(18100):        user_id: '539b06c9-4e24-49a4-b307-3fb3f9dc39da',
10-23 17:48:40.815 I/ReactNativeJS(18100):        name: undefined,
10-23 17:48:40.815 I/ReactNativeJS(18100):        vehicle_type: 'sedan',
10-23 17:48:40.815 I/ReactNativeJS(18100):        status: 'online',
10-23 17:48:40.815 I/ReactNativeJS(18100):        verified: true },
10-23 17:48:40.815 I/ReactNativeJS(18100):      { id: '631f4ab4-c643-45a8-addd-541595b0fe86',
10-23 17:48:40.815 I/ReactNativeJS(18100):        user_id: 'b12c8a48-05b3-475a-b042-4810aee4e918',
10-23 17:48:40.815 I/ReactNativeJS(18100):        name: undefined,
10-23 17:48:40.815 I/ReactNativeJS(18100):        vehicle_type: 'suv',
10-23 17:48:40.815 I/ReactNativeJS(18100):        status: 'online',
10-23 17:48:40.815 I/ReactNativeJS(18100):        verified: true },
10-23 17:48:40.815 I/ReactNativeJS(18100):      { id: '0330d75a-67b0-4b12-b9b7-22a241af9c57',
10-23 17:48:40.815 I/ReactNativeJS(18100):        user_id: 'f5e495f1-75a4-4ce1-bb60-4adfc348b8fc',
10-23 17:48:40.815 I/ReactNativeJS(18100):        name: undefined,
10-23 17:48:40.815 I/ReactNativeJS(18100):        vehicle_type: 'sedan',
10-23 17:48:40.815 I/ReactNativeJS(18100):        status: 'online',
10-23 17:48:40.815 I/ReactNativeJS(18100):        verified: true },
10-23 17:48:40.815 I/ReactNativeJS(18100):      { id: '707e2d38-7346-4a2e-bddb-e1157475f786',
10-23 17:48:40.815 I/ReactNativeJS(18100):        user_id: 'ed59084b-f517-4da3-814c-a314cdd8b4c6',
10-23 17:48:40.816 I/ReactNativeJS(18100):        name: undefined,
10-23 17:48:40.816 I/ReactNativeJS(18100):        vehicle_type: 'sedan',
10-23 17:48:40.816 I/ReactNativeJS(18100):        status: 'online',
10-23 17:48:40.816 I/ReactNativeJS(18100):        verified: true },
10-23 17:48:40.816 I/ReactNativeJS(18100):      { id: 'eb91d7e5-e2f2-4021-a8c8-3739a3d4cae4',
10-23 17:48:40.816 I/ReactNativeJS(18100):        user_id: '1c4ac410-54d8-4b5e-960b-3afcbebd115d',
10-23 17:48:40.816 I/ReactNativeJS(18100):        name: undefined,
10-23 17:48:40.816 I/ReactNativeJS(18100):        vehicle_type: 'sedan',
10-23 17:48:40.816 I/ReactNativeJS(18100):        status: 'online',
10-23 17:48:40.816 I/ReactNativeJS(18100):        verified: true },
10-23 17:48:40.816 I/ReactNativeJS(18100):      { id: '058f85df-35b3-4027-81a1-bd52a0df8e4a',
10-23 17:48:40.816 I/ReactNativeJS(18100):        user_id: '411ee301-8ffc-4874-86e9-37716951bc4d',
10-23 17:48:40.816 I/ReactNativeJS(18100):        name: undefined,
10-23 17:48:40.816 I/ReactNativeJS(18100):        vehicle_type: 'suv_ac',
10-23 17:48:40.816 I/ReactNativeJS(18100):        status: 'online',
10-23 17:48:40.816 I/ReactNativeJS(18100):        verified: true } ] }
10-23 17:48:40.816 I/ReactNativeJS(  419): 'Γ£à Location', 'updated', 'successfully via RPC'
10-23 17:48:40.816 I/ReactNativeJS(18100): '≡ƒôì [DRIVER-SERVICE] Step 2: Getting locations for user IDs:', [ '16011178-decf-4de3-beae-94ca46ce9258',
10-23 17:48:40.816 I/ReactNativeJS(18100):   'ae53a792-6aed-4186-823d-61c34c6defe2',
10-23 17:48:40.816 I/ReactNativeJS(18100):   'e6145579-4f5a-439f-b929-fa478580c049',
10-23 17:48:40.816 I/ReactNativeJS(18100):   '5d6651c8-2e3f-44e7-b4a1-0056c1d5315b',
10-23 17:48:40.816 I/ReactNativeJS(18100):   '6150ee57-77e5-45f7-b6c7-a586f22f2af8',
10-23 17:48:40.816 I/ReactNativeJS(18100):   'dc475d27-6167-4695-a014-dcb8d160b4c6',
10-23 17:48:40.816 I/ReactNativeJS(18100):   '550e8400-e29b-41d4-a716-446655440001',
10-23 17:48:40.816 I/ReactNativeJS(18100):   '550e8400-e29b-41d4-a716-446655440002',
10-23 17:48:40.816 I/ReactNativeJS(18100):   '6c03a657-c3e4-466e-b49c-324c2d051ce9',
10-23 17:48:40.816 I/ReactNativeJS(18100):   '550e8400-e29b-41d4-a716-446655440003',
10-23 17:48:40.816 I/ReactNativeJS(18100):   '550e8400-e29b-41d4-a716-446655440004',
10-23 17:48:40.816 I/ReactNativeJS(18100):   '550e8400-e29b-41d4-a716-446655440005',
10-23 17:48:40.816 I/ReactNativeJS(18100):   '892d8e0d-7ca5-4dd8-9979-539f394538f2',
10-23 17:48:40.816 I/ReactNativeJS(18100):   'cb735787-e96d-4d1d-9975-c112e75dfabd',
10-23 17:48:40.816 I/ReactNativeJS(18100):   'fdd94862-18e4-49d4-b6c0-8b9f73c8ff8c',
10-23 17:48:40.816 I/ReactNativeJS(18100):   '539b06c9-4e24-49a4-b307-3fb3f9dc39da',
10-23 17:48:40.816 I/ReactNativeJS(18100):   'b12c8a48-05b3-475a-b042-4810aee4e918',
10-23 17:48:40.816 I/ReactNativeJS(18100):   'f5e495f1-75a4-4ce1-bb60-4adfc348b8fc',
10-23 17:48:40.816 I/ReactNativeJS(18100):   'ed59084b-f517-4da3-814c-a314cdd8b4c6',
10-23 17:48:40.816 I/ReactNativeJS(18100):   '1c4ac410-54d8-4b5e-960b-3afcbebd115d',
10-23 17:48:40.816 I/ReactNativeJS(18100):   '411ee301-8ffc-4874-86e9-37716951bc4d' ]
10-23 17:48:41.054 I/ReactNativeJS(18100): '≡ƒôì [DRIVER-SERVICE] Found locations:', { total: 1,
10-23 17:48:41.054 I/ReactNativeJS(18100):   details:
10-23 17:48:41.054 I/ReactNativeJS(18100):    [ { user_id: '1c4ac410-54d8-4b5e-960b-3afcbebd115d',
10-23 17:48:41.054 I/ReactNativeJS(18100):        coordinates: { lat: 12.7486296, lng: 77.8299689 },
10-23 17:48:41.054 I/ReactNativeJS(18100):        updated_at: '2025-10-23T12:18:41.271673+00:00',
10-23 17:48:41.054 I/ReactNativeJS(18100):        age_minutes: 0 } ] }
10-23 17:48:41.054 I/ReactNativeJS(18100): ≡ƒöì [DRIVER-SERVICE] Step 3: Processing drivers with distance calculation...
10-23 17:48:41.054 I/ReactNativeJS(18100): '≡ƒöì [DRIVER-SERVICE] Customer coordinates for distance calc:', { lat: 12.7486296,
10-23 17:48:41.054 I/ReactNativeJS(18100):   lng: 77.8299689,
10-23 17:48:41.054 I/ReactNativeJS(18100):   type: 'number',
10-23 17:48:41.054 I/ReactNativeJS(18100):   isValid: true }
10-23 17:48:41.055 I/ReactNativeJS(18100): Γ¥î [DRIVER-SERVICE] Driver 22480cc3-665c-407e-ad8a-8eafde67706b (undefined) skipped: no recent location
10-23 17:48:41.055 I/ReactNativeJS(18100): Γ¥î [DRIVER-SERVICE] Driver 76b66a88-dff9-4965-9e36-8a92023f155d (undefined) skipped: no recent location
10-23 17:48:41.055 I/ReactNativeJS(18100): Γ¥î [DRIVER-SERVICE] Driver 6f55e87b-6558-48df-af8c-d69190918b32 (undefined) skipped: no recent location
10-23 17:48:41.055 I/ReactNativeJS(18100): Γ¥î [DRIVER-SERVICE] Driver 97a4ba58-9431-48e5-ac8f-3472b8357179 (undefined) skipped: no recent location
10-23 17:48:41.055 I/ReactNativeJS(18100): Γ¥î [DRIVER-SERVICE] Driver c568b21d-0975-4388-a9fb-cc00013b6d4f (undefined) skipped: no recent location
10-23 17:48:41.055 I/ReactNativeJS(18100): Γ¥î [DRIVER-SERVICE] Driver 7055c2f9-99fa-4d96-bc6c-079b5cda6f56 (undefined) skipped: no recent location
10-23 17:48:41.055 I/ReactNativeJS(18100): Γ¥î [DRIVER-SERVICE] Driver 770e8400-e29b-41d4-a716-446655440001 (undefined) skipped: no recent location
10-23 17:48:41.055 I/ReactNativeJS(18100): Γ¥î [DRIVER-SERVICE] Driver 770e8400-e29b-41d4-a716-446655440002 (undefined) skipped: no recent location
10-23 17:48:41.055 I/ReactNativeJS(18100): Γ¥î [DRIVER-SERVICE] Driver 43d81d7d-e647-46cf-8599-11f63996b03e (undefined) skipped: no recent location
10-23 17:48:41.055 I/ReactNativeJS(18100): Γ¥î [DRIVER-SERVICE] Driver 770e8400-e29b-41d4-a716-446655440003 (undefined) skipped: no recent location
10-23 17:48:41.055 I/ReactNativeJS(18100): Γ¥î [DRIVER-SERVICE] Driver 770e8400-e29b-41d4-a716-446655440004 (undefined) skipped: no recent location
10-23 17:48:41.055 I/ReactNativeJS(18100): Γ¥î [DRIVER-SERVICE] Driver 770e8400-e29b-41d4-a716-446655440005 (undefined) skipped: no recent location
10-23 17:48:41.055 I/ReactNativeJS(18100): Γ¥î [DRIVER-SERVICE] Driver 489b94a7-777b-4e11-ba5c-17e0a3173737 (undefined) skipped: no recent location
10-23 17:48:41.055 I/ReactNativeJS(18100): Γ¥î [DRIVER-SERVICE] Driver d7b4a339-2ba5-45ed-a2ec-238548a8eab6 (undefined) skipped: no recent location
10-23 17:48:41.055 I/ReactNativeJS(18100): Γ¥î [DRIVER-SERVICE] Driver 38ee94d8-ac2d-450e-8084-0bef654546d7 (undefined) skipped: no recent location
10-23 17:48:41.055 I/ReactNativeJS(18100): Γ¥î [DRIVER-SERVICE] Driver b4613ecf-44b5-49ba-8613-f8993b6db1d6 (undefined) skipped: no recent location
10-23 17:48:41.055 I/ReactNativeJS(18100): Γ¥î [DRIVER-SERVICE] Driver 631f4ab4-c643-45a8-addd-541595b0fe86 (undefined) skipped: no recent location
10-23 17:48:41.055 I/ReactNativeJS(18100): Γ¥î [DRIVER-SERVICE] Driver 0330d75a-67b0-4b12-b9b7-22a241af9c57 (undefined) skipped: no recent location
10-23 17:48:41.055 I/ReactNativeJS(18100): Γ¥î [DRIVER-SERVICE] Driver 707e2d38-7346-4a2e-bddb-e1157475f786 (undefined) skipped: no recent location
10-23 17:48:41.055 I/ReactNativeJS(18100): ≡ƒÜù [DRIVER-SERVICE] Driver eb91d7e5-e2f2-4021-a8c8-3739a3d4cae4 (undefined) vehicle type: sedan
10-23 17:48:41.055 I/ReactNativeJS(18100): ≡ƒôÉ [DISTANCE-SERVICE] ===== DISTANCE CALCULATION DEBUG =====
10-23 17:48:41.055 I/ReactNativeJS(18100): '≡ƒôÉ [DISTANCE-SERVICE] Raw inputs:', { lat1: 12.7486296,
10-23 17:48:41.055 I/ReactNativeJS(18100):   lon1: 77.8299689,
10-23 17:48:41.055 I/ReactNativeJS(18100):   lat2: 12.7486296,
10-23 17:48:41.055 I/ReactNativeJS(18100):   lon2: 77.8299689 }
10-23 17:48:41.055 I/ReactNativeJS(18100): '≡ƒôÉ [DISTANCE-SERVICE] Converted inputs:', { latitude1: 12.7486296,
10-23 17:48:41.055 I/ReactNativeJS(18100):   longitude1: 77.8299689,
10-23 17:48:41.055 I/ReactNativeJS(18100):   latitude2: 12.7486296,
10-23 17:48:41.055 I/ReactNativeJS(18100):   longitude2: 77.8299689 }
10-23 17:48:41.055 I/ReactNativeJS(18100): '≡ƒôÉ [DISTANCE-SERVICE] Coordinate differences:', { lat_diff: 0,
10-23 17:48:41.055 I/ReactNativeJS(18100):   lng_diff: 0,
10-23 17:48:41.055 I/ReactNativeJS(18100):   very_close: true,
10-23 17:48:41.055 I/ReactNativeJS(18100):   essentially_same: true }
10-23 17:48:41.055 I/ReactNativeJS(18100): ≡ƒôÉ [DISTANCE-SERVICE] Coordinates are essentially the same, returning 0km
10-23 17:48:41.056 I/ReactNativeJS(18100): '≡ƒôÅ [DRIVER-SERVICE] Distance for driver eb91d7e5-e2f2-4021-a8c8-3739a3d4cae4 (undefined):', { distance_km: '0.0000',
10-23 17:48:41.056 I/ReactNativeJS(18100):   within_radius: true,
10-23 17:48:41.056 I/ReactNativeJS(18100):   radius_limit: '10km',
10-23 17:48:41.056 I/ReactNativeJS(18100):   driver_coords: { lat: 12.7486296, lng: 77.8299689 },
10-23 17:48:41.056 I/ReactNativeJS(18100):   customer_coords: { lat: 12.7486296, lng: 77.8299689 } }
10-23 17:48:41.056 I/ReactNativeJS(18100): Γ£à [DRIVER-SERVICE] Driver eb91d7e5-e2f2-4021-a8c8-3739a3d4cae4 (undefined) INCLUDED: 0.0000km
10-23 17:48:41.056 I/ReactNativeJS(18100): Γ¥î [DRIVER-SERVICE] Driver 058f85df-35b3-4027-81a1-bd52a0df8e4a (undefined) skipped: no recent location
10-23 17:48:41.056 I/ReactNativeJS(18100): ≡ƒôè [DRIVER-SERVICE] ===== DIRECT DATABASE ACCESS RESULT =====
10-23 17:48:41.056 I/ReactNativeJS(18100): '≡ƒôè [DRIVER-SERVICE] Final summary:', { total_drivers_processed: 21,
10-23 17:48:41.056 I/ReactNativeJS(18100):   available_drivers_found: 1,
10-23 17:48:41.056 I/ReactNativeJS(18100):   customer_location: { lat: 12.7486296, lng: 77.8299689 },
10-23 17:48:41.056 I/ReactNativeJS(18100):   radius_km: 10,
10-23 17:48:41.056 I/ReactNativeJS(18100):   vehicle_type_filter: 'all (no filter applied)' }
10-23 17:48:41.056 I/ReactNativeJS(18100): '≡ƒöä [DRIVER-SERVICE] Initial fetch completed:', 1, 'drivers'
10-23 17:48:41.056 I/ReactNativeJS(18100): '≡ƒôì [HOME] Received driver locations update:', 1, 'drivers'
10-23 17:48:41.056 W/ReactNativeJS(18100): ≡ƒÅá [HOME] ===== RENDERING HOME SCREEN =====
10-23 17:48:41.057 W/ReactNativeJS(18100): '≡ƒÅá [HOME] currentLocation:', '{"altitude":774.3999633789062,"heading":0,"altitudeAccuracy":12.201140403747559,"latitude":12.7486296,"speed":0.07180365920066833,"longitude":77.8299689,"accuracy":4.517000198364258}'
10-23 17:48:41.057 W/ReactNativeJS(18100): '≡ƒÅá [HOME] pickupCoords:', '{"latitude":12.7486447,"longitude":77.8299961}'
10-23 17:48:41.057 W/ReactNativeJS(18100): '≡ƒÅá [HOME] destinationCoords:', 'null'
10-23 17:48:41.057 W/ReactNativeJS(18100): '≡ƒÅá [HOME] pickupLocation text:', 'PRXJ+F32, Brindavan Nagar, Plot 87, NGGO\'s Colony, Anand Nagar, Hosur, Tamil Nadu 635109, India'
10-23 17:48:41.057 W/ReactNativeJS(18100): '≡ƒÅá [HOME] availableDrivers count:', 1
10-23 17:48:41.057 W/ReactNativeJS(18100): '≡ƒÅá [HOME] showDriversOnMap:', true
10-23 17:48:41.057 I/ReactNativeJS(18100): '≡ƒÅá≡ƒÅá≡ƒÅá [HOME-V2] ABOUT TO RENDER SimpleHosurMap with props:', { hasUserLocation: true,
10-23 17:48:41.057 I/ReactNativeJS(18100):   hasPickup: true,
10-23 17:48:41.057 I/ReactNativeJS(18100):   hasDestination: false,
10-23 17:48:41.057 I/ReactNativeJS(18100):   showDriversOnMap: true,
10-23 17:48:41.057 I/ReactNativeJS(18100):   timestamp: '2025-10-23T12:18:41.057Z' }
10-23 17:48:41.061 I/ReactNativeJS(18100): ≡ƒº¬≡ƒº¬≡ƒº¬ TEST MAP RENDERING NOW
10-23 17:48:41.062 I/ReactNativeJS(18100): '≡ƒº¬ Props received:', [ 'userLocation',
10-23 17:48:41.062 I/ReactNativeJS(18100):   'pickupLocation',
10-23 17:48:41.062 I/ReactNativeJS(18100):   'destinationLocation',
10-23 17:48:41.062 I/ReactNativeJS(18100):   'onRegionChangeComplete',
10-23 17:48:41.062 I/ReactNativeJS(18100):   'onDestinationDragEnd',
10-23 17:48:41.062 I/ReactNativeJS(18100):   'showCenteredPin',
10-23 17:48:41.062 I/ReactNativeJS(18100):   'availableDrivers',
10-23 17:48:41.062 I/ReactNativeJS(18100):   'showDrivers' ]
10-23 17:48:41.071 I/ReactNativeJS(18100): ≡ƒôè [HOME] ===== AVAILABLE DRIVERS STATE CHANGED =====
10-23 17:48:41.071 I/ReactNativeJS(18100): '≡ƒôè [HOME] availableDrivers state update:', { count: 1,
10-23 17:48:41.071 I/ReactNativeJS(18100):   showDriversOnMap: true,
10-23 17:48:41.071 I/ReactNativeJS(18100):   driversPassedToMap: 1,
10-23 17:48:41.071 I/ReactNativeJS(18100):   drivers:
10-23 17:48:41.071 I/ReactNativeJS(18100):    [ { id: 'eb91d7e5-e2f2-4021-a8c8-3739a3d4cae4',
10-23 17:48:41.071 I/ReactNativeJS(18100):        vehicle_type: 'sedan',
10-23 17:48:41.071 I/ReactNativeJS(18100):        distance: '0.00km',
10-23 17:48:41.071 I/ReactNativeJS(18100):        coordinates: { lat: 12.7486296, lng: 77.8299689 },
10-23 17:48:41.071 I/ReactNativeJS(18100):        heading: null,
10-23 17:48:41.071 I/ReactNativeJS(18100):        rating: 5 } ] }
10-23 17:48:41.071 I/ReactNativeJS(18100): ≡ƒù║∩╕Å [HOME] ===== DRIVERS BEING PASSED TO MAP =====
10-23 17:48:41.071 I/ReactNativeJS(18100): '≡ƒù║∩╕Å [HOME] Map will receive', 1, 'drivers:'
10-23 17:48:41.072 I/ReactNativeJS(18100): '≡ƒù║∩╕Å [HOME] Driver 1 for map:', { driver_id: 'eb91d7e5-e2f2-4021-a8c8-3739a3d4cae4',
10-23 17:48:41.072 I/ReactNativeJS(18100):   user_id: '1c4ac410-54d8-4b5e-960b-3afcbebd115d',
10-23 17:48:41.072 I/ReactNativeJS(18100):   vehicle_type: 'sedan',
10-23 17:48:41.072 I/ReactNativeJS(18100):   coordinates: { lat: 12.7486296, lng: 77.8299689 },
10-23 17:48:41.072 I/ReactNativeJS(18100):   distance: '0.0000km',
10-23 17:48:41.072 I/ReactNativeJS(18100):   rating: 5,
10-23 17:48:41.072 I/ReactNativeJS(18100):   heading: null,
10-23 17:48:41.072 I/ReactNativeJS(18100):   updated_at: '2025-10-23T12:18:41.271673+00:00' }
10-23 17:48:43.397 I/ReactNativeJS(18100): '≡ƒöì AuthNavigator - checking auth state:', { user: true,
10-23 17:48:43.397 I/ReactNativeJS(18100):   loading: false,
10-23 17:48:43.397 I/ReactNativeJS(18100):   segments: '(tabs)/profile',
10-23 17:48:43.397 I/ReactNativeJS(18100):   userEmail: '918608374935@a1taxi.app',
10-23 17:48:43.397 I/ReactNativeJS(18100):   userRole: 'customer' }
10-23 17:48:43.397 I/ReactNativeJS(18100): Γ£à User authenticated and on correct screen
10-23 17:48:43.975 I/ReactNativeJS(18100): ≡ƒÜ¬ Sign out button pressed
10-23 17:48:44.625 I/ReactNativeJS(18100): ≡ƒÜ¬ User confirmed sign out
10-23 17:48:44.625 I/ReactNativeJS(18100): ≡ƒÜ¬ Calling signOut function...
10-23 17:48:44.625 I/ReactNativeJS(18100): ≡ƒÜ¬ Starting sign out process...
10-23 17:48:45.187 W/ReactNativeJS(18100): '≡ƒÄ» [TRIP_NOTIFICATION] Component render, notifications count:', 50
10-23 17:48:45.191 W/ReactNativeJS(18100): '≡ƒÄ» [TRIP_NOTIFICATION] Notifications:', '[{"id":"c0930979-b31c-4f63-b636-2d97a731c792","type":"ride_completed","status":"read"},{"id":"2012b652-4fe3-4c41-9df3-bc9d3186a24a","type":"ride_status_changed","status":"unread"},{"id":"61a74f93-5643-46ef-8ebb-56d7ed81f675","type":"ride_status_changed","status":"unread"},{"id":"e75df879-8cb8-4dee-8100-8dd61f99b26e","type":"ride_status_changed","status":"unread"},{"id":"55a746c6-9b8c-44e6-b80c-2beac586c467","type":"ride_status_changed","status":"unread"},{"id":"7c3cc3c7-e9b6-4cf8-91bb-1bb827ff7808","type":"ride_status_changed","status":"unread"},{"id":"8012a1d6-41e9-4ff2-a75b-8fee9a93ca8e","type":"ride_status_changed","status":"unread"},{"id":"d29bae80-10e7-4d05-99d5-8dc43f61d814","type":"ride_status_changed","status":"read"},{"id":"d7d8686d-95ee-4ce0-97da-ed89564b014b","type":"ride_status_changed","status":"read"},{"id":"755a6269-1daf-4327-ab71-f65e3700bf1a","type":"ride_status_changed","status":"read"},{"id":"500d07b9-07ca-40df-9d4a-3efcf677a117","type":"ride_status_changed","status":"read"},{"id":"df4552cd-e9bc-4e40-a8a0-1270b37737db","type":"booking_completed","status":"read"},{"id":"acb2b80a-267e-4b98-acd0-397461aee537","type":"booking_completed","status":"read"},{"id":"60dbc0b5-662a-48af-b01a-55212f6ac6ea","type":"booking_completed","status":"read"},{"id":"0f408121-1188-4550-9f50-919dcc8a4ed1","type":"booking_completed","status":"read"},{"id":"23052592-9d19-442c-b40f-12b90c3da756","type":"booking_completed","status":"read"},{"id":"c9ff3014-54e3-4b30-9f22-eceee292796b","type":"ride_status_changed","status":"read"},{"id":"879d4bbd-20ad-4253-a1c6-ae7535e7c211","type":"ride_status_changed","status":"read"},{"id":"286129cf-19e6-41fd-b52f-d17334d0d0f9","type":"ride_status_changed","status":"read"},{"id":"b55ac709-48d5-4db2-8246-e23f9bd317ec","type":"ride_completed","status":"read"},{"id":"92abe95d-e47d-48fa-8159-b119f5802710","type":"ride_status_changed","status":"read"},{"id":"73ad244d-a00b-42a9-83e9-97932b9db2d2","type":"ride_status_changed","status":"read"},{"id":"971613ac-8d86-4ab6-8fe5-49c528ca56ee","type":"ride_status_changed","status":"read"},{"id":"49f0f7f9-03d6-4211-b47d-0e7738f190fa","type":"ride_completed","status":"read"},{"id":"6a87c30d-c48d-458c-9b94-32dd5e75ac05","type":"ride_status_changed","status":"read"},{"id":"aee0b7a7-9cb2-4f6b-b53f-fa47642319d0","type":"ride_status_changed","status":"read"},{"id":"6c1d61c3-6cbd-4310-adfe-6d36bc611939","type":"ride_status_changed","status":"read"},{"id":"9d9ab6e7-0357-4305-9ba8-e91c0bb29897","type":"ride_status_changed","status":"read"},{"id":"d952183c-69a7-47dc-a848-d11bc2fff300","type":"ride_cancelled","status":"read"},{"id":"a01d13a8-c95b-4bf1-b0e1-8b2a8e9aaa6b","type":"ride_status_changed","status":"read"},{"id":"5a385bc8-147d-4ac2-834c-305ed9db9a05","type":"ride_completed","status":"read"},{"id":"b9365ade-a3a4-4036-b42f-606b88d5fac9","type":"ride_status_changed","status":"read"},{"id":"b6a2c6b6-bdb4-40ce-a092-25f6dd4ba953","type":"ride_status_changed","status":"read"},{"id":"d850bf94-823f-497a-b292-075abf5b5a59","type":"ride_status_changed","status":"read"},{"id":"5d8275c0-6692-44b3-a4ff-4eabba59873e","type":"ride_status_changed","status":"read"},{"id":"5cfa0487-5d05-42e8-8e92-11a287b3ded0","type":"ride_completed","status":"read"},{"id":"679ed79c-eb21-4609-a2b9-a1d304d4d4ad","type":"ride_status_changed","status":"read"},{"id":"53bb9116-5f1d-445c-94e0-f2e3d9fa3ffe","type":"ride_status_changed","status":"read"},{"id":"4196d3c8-e6dd-4a11-8d40-6771aa06de07","type":"ride_status_changed","status":"read"},{"id":"8d21f749-083a-46d1-9f7e-f7dc5c36ef05","type":"ride_status_changed","status":"read"},{"id":"0a371105-3196-4055-97ad-b230dba42df5","type":"ride_completed","status":"read"},{"id":"9f010555-c90c-447e-83ae-919809ba8350","type":"ride_status_changed","status":"read"},{"id":"84dd0357-20ec-4317-b7bd-7b31515219fb","type":"ride_status_changed","status":"read"},{"id":"caaa4644-cefa-47e6-8c92-60415a52ef4b","type":"ride_status_changed","status":"read"},{"id":"c6e2da1c-f900-47c8-b289-a88c2
10-23 17:48:45.191 I/ReactNativeJS(18100): '≡ƒöì [TRIP_NOTIFICATION] Component render - visible:', false, 'notification:', false
10-23 17:48:45.192 W/ReactNativeJS(18100): ≡ƒÅá [HOME] ===== RENDERING HOME SCREEN =====
10-23 17:48:45.192 W/ReactNativeJS(18100): '≡ƒÅá [HOME] currentLocation:', '{"altitude":774.3999633789062,"heading":0,"altitudeAccuracy":12.201140403747559,"latitude":12.7486296,"speed":0.07180365920066833,"longitude":77.8299689,"accuracy":4.517000198364258}'
10-23 17:48:45.192 W/ReactNativeJS(18100): '≡ƒÅá [HOME] pickupCoords:', '{"latitude":12.7486447,"longitude":77.8299961}'
10-23 17:48:45.192 W/ReactNativeJS(18100): '≡ƒÅá [HOME] destinationCoords:', 'null'
10-23 17:48:45.192 W/ReactNativeJS(18100): '≡ƒÅá [HOME] pickupLocation text:', 'PRXJ+F32, Brindavan Nagar, Plot 87, NGGO\'s Colony, Anand Nagar, Hosur, Tamil Nadu 635109, India'
10-23 17:48:45.192 W/ReactNativeJS(18100): '≡ƒÅá [HOME] availableDrivers count:', 1
10-23 17:48:45.192 W/ReactNativeJS(18100): '≡ƒÅá [HOME] showDriversOnMap:', true
10-23 17:48:45.192 I/ReactNativeJS(18100): '≡ƒÅá≡ƒÅá≡ƒÅá [HOME-V2] ABOUT TO RENDER SimpleHosurMap with props:', { hasUserLocation: true,
10-23 17:48:45.192 I/ReactNativeJS(18100):   hasPickup: true,
10-23 17:48:45.192 I/ReactNativeJS(18100):   hasDestination: false,
10-23 17:48:45.192 I/ReactNativeJS(18100):   showDriversOnMap: true,
10-23 17:48:45.192 I/ReactNativeJS(18100):   timestamp: '2025-10-23T12:18:45.192Z' }
10-23 17:48:45.193 I/ReactNativeJS(18100): ≡ƒº¬≡ƒº¬≡ƒº¬ TEST MAP RENDERING NOW
10-23 17:48:45.193 I/ReactNativeJS(18100): '≡ƒº¬ Props received:', [ 'userLocation',
10-23 17:48:45.193 I/ReactNativeJS(18100):   'pickupLocation',
10-23 17:48:45.193 I/ReactNativeJS(18100):   'destinationLocation',
10-23 17:48:45.193 I/ReactNativeJS(18100):   'onRegionChangeComplete',
10-23 17:48:45.193 I/ReactNativeJS(18100):   'onDestinationDragEnd',
10-23 17:48:45.193 I/ReactNativeJS(18100):   'showCenteredPin',
10-23 17:48:45.193 I/ReactNativeJS(18100):   'availableDrivers',
10-23 17:48:45.193 I/ReactNativeJS(18100):   'showDrivers' ]
10-23 17:48:45.278 W/ReactNativeJS(18100): '≡ƒÄ» [TRIP_NOTIFICATION] Component render, notifications count:', 50
10-23 17:48:45.279 W/ReactNativeJS(18100): '≡ƒÄ» [TRIP_NOTIFICATION] Notifications:', '[{"id":"c0930979-b31c-4f63-b636-2d97a731c792","type":"ride_completed","status":"read"},{"id":"2012b652-4fe3-4c41-9df3-bc9d3186a24a","type":"ride_status_changed","status":"unread"},{"id":"61a74f93-5643-46ef-8ebb-56d7ed81f675","type":"ride_status_changed","status":"unread"},{"id":"e75df879-8cb8-4dee-8100-8dd61f99b26e","type":"ride_status_changed","status":"unread"},{"id":"55a746c6-9b8c-44e6-b80c-2beac586c467","type":"ride_status_changed","status":"unread"},{"id":"7c3cc3c7-e9b6-4cf8-91bb-1bb827ff7808","type":"ride_status_changed","status":"unread"},{"id":"8012a1d6-41e9-4ff2-a75b-8fee9a93ca8e","type":"ride_status_changed","status":"unread"},{"id":"d29bae80-10e7-4d05-99d5-8dc43f61d814","type":"ride_status_changed","status":"read"},{"id":"d7d8686d-95ee-4ce0-97da-ed89564b014b","type":"ride_status_changed","status":"read"},{"id":"755a6269-1daf-4327-ab71-f65e3700bf1a","type":"ride_status_changed","status":"read"},{"id":"500d07b9-07ca-40df-9d4a-3efcf677a117","type":"ride_status_changed","status":"read"},{"id":"df4552cd-e9bc-4e40-a8a0-1270b37737db","type":"booking_completed","status":"read"},{"id":"acb2b80a-267e-4b98-acd0-397461aee537","type":"booking_completed","status":"read"},{"id":"60dbc0b5-662a-48af-b01a-55212f6ac6ea","type":"booking_completed","status":"read"},{"id":"0f408121-1188-4550-9f50-919dcc8a4ed1","type":"booking_completed","status":"read"},{"id":"23052592-9d19-442c-b40f-12b90c3da756","type":"booking_completed","status":"read"},{"id":"c9ff3014-54e3-4b30-9f22-eceee292796b","type":"ride_status_changed","status":"read"},{"id":"879d4bbd-20ad-4253-a1c6-ae7535e7c211","type":"ride_status_changed","status":"read"},{"id":"286129cf-19e6-41fd-b52f-d17334d0d0f9","type":"ride_status_changed","status":"read"},{"id":"b55ac709-48d5-4db2-8246-e23f9bd317ec","type":"ride_completed","status":"read"},{"id":"92abe95d-e47d-48fa-8159-b119f5802710","type":"ride_status_changed","status":"read"},{"id":"73ad244d-a00b-42a9-83e9-97932b9db2d2","type":"ride_status_changed","status":"read"},{"id":"971613ac-8d86-4ab6-8fe5-49c528ca56ee","type":"ride_status_changed","status":"read"},{"id":"49f0f7f9-03d6-4211-b47d-0e7738f190fa","type":"ride_completed","status":"read"},{"id":"6a87c30d-c48d-458c-9b94-32dd5e75ac05","type":"ride_status_changed","status":"read"},{"id":"aee0b7a7-9cb2-4f6b-b53f-fa47642319d0","type":"ride_status_changed","status":"read"},{"id":"6c1d61c3-6cbd-4310-adfe-6d36bc611939","type":"ride_status_changed","status":"read"},{"id":"9d9ab6e7-0357-4305-9ba8-e91c0bb29897","type":"ride_status_changed","status":"read"},{"id":"d952183c-69a7-47dc-a848-d11bc2fff300","type":"ride_cancelled","status":"read"},{"id":"a01d13a8-c95b-4bf1-b0e1-8b2a8e9aaa6b","type":"ride_status_changed","status":"read"},{"id":"5a385bc8-147d-4ac2-834c-305ed9db9a05","type":"ride_completed","status":"read"},{"id":"b9365ade-a3a4-4036-b42f-606b88d5fac9","type":"ride_status_changed","status":"read"},{"id":"b6a2c6b6-bdb4-40ce-a092-25f6dd4ba953","type":"ride_status_changed","status":"read"},{"id":"d850bf94-823f-497a-b292-075abf5b5a59","type":"ride_status_changed","status":"read"},{"id":"5d8275c0-6692-44b3-a4ff-4eabba59873e","type":"ride_status_changed","status":"read"},{"id":"5cfa0487-5d05-42e8-8e92-11a287b3ded0","type":"ride_completed","status":"read"},{"id":"679ed79c-eb21-4609-a2b9-a1d304d4d4ad","type":"ride_status_changed","status":"read"},{"id":"53bb9116-5f1d-445c-94e0-f2e3d9fa3ffe","type":"ride_status_changed","status":"read"},{"id":"4196d3c8-e6dd-4a11-8d40-6771aa06de07","type":"ride_status_changed","status":"read"},{"id":"8d21f749-083a-46d1-9f7e-f7dc5c36ef05","type":"ride_status_changed","status":"read"},{"id":"0a371105-3196-4055-97ad-b230dba42df5","type":"ride_completed","status":"read"},{"id":"9f010555-c90c-447e-83ae-919809ba8350","type":"ride_status_changed","status":"read"},{"id":"84dd0357-20ec-4317-b7bd-7b31515219fb","type":"ride_status_changed","status":"read"},{"id":"caaa4644-cefa-47e6-8c92-60415a52ef4b","type":"ride_status_changed","status":"read"},{"id":"c6e2da1c-f900-47c8-b289-a88c2
10-23 17:48:45.279 I/ReactNativeJS(18100): '≡ƒöì [TRIP_NOTIFICATION] Component render - visible:', false, 'notification:', false
10-23 17:48:45.279 W/ReactNativeJS(18100): ≡ƒÅá [HOME] ===== RENDERING HOME SCREEN =====
10-23 17:48:45.279 W/ReactNativeJS(18100): '≡ƒÅá [HOME] currentLocation:', '{"altitude":774.3999633789062,"heading":0,"altitudeAccuracy":12.201140403747559,"latitude":12.7486296,"speed":0.07180365920066833,"longitude":77.8299689,"accuracy":4.517000198364258}'
10-23 17:48:45.279 W/ReactNativeJS(18100): '≡ƒÅá [HOME] pickupCoords:', '{"latitude":12.7486447,"longitude":77.8299961}'
10-23 17:48:45.279 W/ReactNativeJS(18100): '≡ƒÅá [HOME] destinationCoords:', 'null'
10-23 17:48:45.279 W/ReactNativeJS(18100): '≡ƒÅá [HOME] pickupLocation text:', 'PRXJ+F32, Brindavan Nagar, Plot 87, NGGO\'s Colony, Anand Nagar, Hosur, Tamil Nadu 635109, India'
10-23 17:48:45.279 W/ReactNativeJS(18100): '≡ƒÅá [HOME] availableDrivers count:', 1
10-23 17:48:45.279 W/ReactNativeJS(18100): '≡ƒÅá [HOME] showDriversOnMap:', true
10-23 17:48:45.279 I/ReactNativeJS(18100): '≡ƒÅá≡ƒÅá≡ƒÅá [HOME-V2] ABOUT TO RENDER SimpleHosurMap with props:', { hasUserLocation: true,
10-23 17:48:45.279 I/ReactNativeJS(18100):   hasPickup: true,
10-23 17:48:45.279 I/ReactNativeJS(18100):   hasDestination: false,
10-23 17:48:45.279 I/ReactNativeJS(18100):   showDriversOnMap: true,
10-23 17:48:45.279 I/ReactNativeJS(18100):   timestamp: '2025-10-23T12:18:45.279Z' }
10-23 17:48:45.280 I/ReactNativeJS(18100): ≡ƒº¬≡ƒº¬≡ƒº¬ TEST MAP RENDERING NOW
10-23 17:48:45.280 I/ReactNativeJS(18100): '≡ƒº¬ Props received:', [ 'userLocation',
10-23 17:48:45.280 I/ReactNativeJS(18100):   'pickupLocation',
10-23 17:48:45.280 I/ReactNativeJS(18100):   'destinationLocation',
10-23 17:48:45.280 I/ReactNativeJS(18100):   'onRegionChangeComplete',
10-23 17:48:45.280 I/ReactNativeJS(18100):   'onDestinationDragEnd',
10-23 17:48:45.280 I/ReactNativeJS(18100):   'showCenteredPin',
10-23 17:48:45.280 I/ReactNativeJS(18100):   'availableDrivers',
10-23 17:48:45.280 I/ReactNativeJS(18100):   'showDrivers' ]
10-23 17:48:45.331 I/ReactNativeJS(18100): '≡ƒöì AuthNavigator - checking auth state:', { user: false,
10-23 17:48:45.331 I/ReactNativeJS(18100):   loading: false,
10-23 17:48:45.331 I/ReactNativeJS(18100):   segments: '(tabs)/profile',
10-23 17:48:45.331 I/ReactNativeJS(18100):   userEmail: undefined,
10-23 17:48:45.331 I/ReactNativeJS(18100):   userRole: undefined }
10-23 17:48:45.331 I/ReactNativeJS(18100): ≡ƒöä Redirecting to login - user not authenticated
10-23 17:48:45.349 I/ReactNativeJS(18100): ≡ƒ¢æ [HOME] Stopping driver location polling
10-23 17:48:45.350 I/ReactNativeJS(18100): ≡ƒ¢æ [DRIVER-SERVICE] Stopped driver location polling
10-23 17:48:45.356 I/ReactNativeJS(18100): Γ£à Sign out completed, redirecting to login...
10-23 17:48:45.356 I/ReactNativeJS(18100): Γ£à Sign out completed
10-23 17:48:45.356 I/ReactNativeJS(18100): '≡ƒöì AuthNavigator - checking auth state:', { user: false,
10-23 17:48:45.356 I/ReactNativeJS(18100):   loading: false,
10-23 17:48:45.356 I/ReactNativeJS(18100):   segments: 'auth/login',
10-23 17:48:45.356 I/ReactNativeJS(18100):   userEmail: undefined,
10-23 17:48:45.356 I/ReactNativeJS(18100):   userRole: undefined }
10-23 17:48:50.761 I/ReactNativeJS(18100): ≡ƒÜÇ ===== HANDLE SEND OTP CLICKED =====
10-23 17:48:50.762 I/ReactNativeJS(18100): '≡ƒô▒ Formatted phone:', '+918608374935'
10-23 17:48:50.762 I/ReactNativeJS(18100): ΓÅ│ Setting loading true...
10-23 17:48:50.762 I/ReactNativeJS(18100): ≡ƒô₧ Calling sendOTP...
10-23 17:48:50.762 I/ReactNativeJS(18100): ≡ƒô▒ ===== SEND OTP STARTING =====
10-23 17:48:50.762 I/ReactNativeJS(18100): '≡ƒô▒ Phone Number:', '+918608374935'
10-23 17:48:50.762 I/ReactNativeJS(18100): '≡ƒô▒ Name:', 'Bb'
10-23 17:48:50.762 I/ReactNativeJS(18100): '≡ƒô▒ Supabase URL:', 'https://whubaypabojomdyfqxcf.supabase.co'
10-23 17:48:50.762 I/ReactNativeJS(18100): '≡ƒô▒ Anon Key exists:', true
10-23 17:48:50.762 I/ReactNativeJS(18100): '≡ƒô▒ Request URL:', 'https://whubaypabojomdyfqxcf.supabase.co/functions/v1/send-otp'
10-23 17:48:50.762 I/ReactNativeJS(18100): ≡ƒô▒ Making fetch request...
10-23 17:48:52.376 I/ReactNativeJS(18100): '≡ƒô▒ Response status:', 200
10-23 17:48:52.377 I/ReactNativeJS(18100): '≡ƒô▒ Response ok:', true
10-23 17:48:52.378 I/ReactNativeJS(18100): '≡ƒô▒ Response data:', '{\n  "success": true,\n  "message": "OTP generated successfully",\n  "devOtp": "439290",\n  "smsSent": false,\n  "smsError": "Authenticate"\n}'
10-23 17:48:52.378 I/ReactNativeJS(18100): ≡ƒô▒ Γ£à OTP sent successfully!
10-23 17:48:52.379 I/ReactNativeJS(18100): '≡ƒô▒ Dev OTP:', '439290'
10-23 17:48:52.379 I/ReactNativeJS(18100): '≡ƒô▒ SMS Sent:', false
10-23 17:48:52.379 I/ReactNativeJS(18100): '≡ƒô▒ SMS Error:', 'Authenticate'
10-23 17:48:52.379 I/ReactNativeJS(18100): ≡ƒô▒ ===== SEND OTP COMPLETE =====
10-23 17:48:52.380 I/ReactNativeJS(18100): '≡ƒô₧ sendOTP returned:', { error: null,
10-23 17:48:52.380 I/ReactNativeJS(18100):   otp: '439290',
10-23 17:48:52.380 I/ReactNativeJS(18100):   smsSent: false,
10-23 17:48:52.380 I/ReactNativeJS(18100):   smsError: 'Authenticate' }
10-23 17:48:52.380 I/ReactNativeJS(18100): Γ£à No error in result
10-23 17:48:52.380 I/ReactNativeJS(18100): '≡ƒô▒ OTP received:', '439290'
10-23 17:48:52.380 I/ReactNativeJS(18100): '≡ƒô▒ SMS sent status:', false
10-23 17:48:52.380 I/ReactNativeJS(18100): '≡ƒô▒ SMS error:', 'Authenticate'
10-23 17:48:52.392 I/ReactNativeJS(18100): '≡ƒÆ¼ Showing alert with message:', 'Your OTP code is: 439290\n\nΓÜá∩╕Å SMS failed: Authenticate\nPlease use the code above.'
10-23 17:48:52.392 I/ReactNativeJS(18100): ≡ƒº¡ Will navigate to verify-otp after alert
10-23 17:48:52.392 I/ReactNativeJS(18100): ≡ƒÆ¼ Alert displayed
10-23 17:48:52.392 I/ReactNativeJS(18100): ≡ƒÜÇ ===== HANDLE SEND OTP END =====
10-23 17:48:55.480 I/ReactNativeJS(18100): ≡ƒº¡ Alert dismissed, navigating to verify-otp...
10-23 17:48:55.481 I/ReactNativeJS(18100): '≡ƒº¡ Target params:', { phoneNumber: '+918608374935', name: 'Bb' }
10-23 17:48:55.505 I/ReactNativeJS(18100): ≡ƒº¡ Navigation triggered
10-23 17:48:55.506 I/ReactNativeJS(18100): '≡ƒöì AuthNavigator - checking auth state:', { user: false,
10-23 17:48:55.506 I/ReactNativeJS(18100):   loading: false,
10-23 17:48:55.506 I/ReactNativeJS(18100):   segments: 'auth/verify-otp',
10-23 17:48:55.506 I/ReactNativeJS(18100):   userEmail: undefined,
10-23 17:48:55.506 I/ReactNativeJS(18100):   userRole: undefined }
10-23 17:48:55.506 I/ReactNativeJS(18100): ≡ƒöÉ User on verify-otp screen, skipping navigation
10-23 17:49:02.035 I/ReactNativeJS(  419): ≡ƒôì Background fetch triggered for location update
10-23 17:49:02.492 I/ReactNativeJS(  419): ≡ƒôñ Background location update via RPC...
10-23 17:49:02.492 E/ReactNativeJS(  419): Γ¥î Supabase credentials not configured
10-23 17:49:02.493 I/ReactNativeJS(  419): Γ£à Background location update successful
10-23 17:49:02.936 I/ReactNativeJS(18100): '≡ƒôª Full response data:', '{\n  "success": true,\n  "customerId": "1",\n  "userId": "e95a4f14-8958-49e9-8ede-d81b82a7ba12",\n  "session": {\n    "access_token": "eyJhbGciOiJIUzI1NiIsImtpZCI6IngvRXB5YUxCdnJGSXNwTE0iLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3dodWJheXBhYm9qb21keWZxeGNmLnN1cGFiYXNlLmNvL2F1dGgvdjEiLCJzdWIiOiJlOTVhNGYxNC04OTU4LTQ5ZTktOGVkZS1kODFiODJhN2JhMTIiLCJhdWQiOiJhdXRoZW50aWNhdGVkIiwiZXhwIjoxNzYxMjI1NTQzLCJpYXQiOjE3NjEyMjE5NDMsImVtYWlsIjoiOTE4NjA4Mzc0OTM1QGExdGF4aS5hcHAiLCJwaG9uZSI6IiIsImFwcF9tZXRhZGF0YSI6eyJwcm92aWRlciI6ImVtYWlsIiwicHJvdmlkZXJzIjpbImVtYWlsIl19LCJ1c2VyX21ldGFkYXRhIjp7ImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJmdWxsX25hbWUiOiJSaWNjbyIsInBob25lX251bWJlciI6Iis5MTg2MDgzNzQ5MzUifSwicm9sZSI6ImF1dGhlbnRpY2F0ZWQiLCJhYWwiOiJhYWwxIiwiYW1yIjpbeyJtZXRob2QiOiJvdHAiLCJ0aW1lc3RhbXAiOjE3NjEyMjE5NDN9XSwic2Vzc2lvbl9pZCI6ImY5MDJiNmI3LWI1ZDYtNDBhOS1hYWM2LTExZjcyYTI2YmViZSIsImlzX2Fub255bW91cyI6ZmFsc2V9.H8elJeb96dem2YaV5ViQhLSx1c1miJugG7t32F1YHGs",\n    "refresh_token": "fuvouebumh2v",\n    "expires_in": 3600,\n    "expires_at": 1761225543,\n    "token_type": "bearer",\n    "user": {\n      "id": "e95a4f14-8958-49e9-8ede-d81b82a7ba12",\n      "aud": "authenticated",\n      "role": "authenticated",\n      "email": "918608374935@a1taxi.app",\n      "email_confirmed_at": "2025-10-10T18:50:59.835507Z",\n      "phone": "",\n      "confirmed_at": "2025-10-10T18:50:59.835507Z",\n      "recovery_sent_at": "2025-10-23T12:19:03.003564Z",\n      "last_sign_in_at": "2025-10-23T12:19:03.223924958Z",\n      "app_metadata": {\n        "provider": "email",\n        "providers": [\n          "email"\n        ]\n      },\n      "user_metadata": {\n        "email_verified": true,\n        "full_name": "Ricco",\n        "phone_number": "+918608374935"\n      },\n      "identities": [\n        {\n          "identity_id": "43785572-7543-40c4-8eef-853beacc688b",\n          "id": "e95a4f14-8958-49e9-8ede-d81b82a7ba12",\n          "user_id": "e95a4f14-8958-49e9-8ede-d81b82a7ba12",\n          "identity_data": {\n            "email": "918608374935@a1taxi.app",\n            "email_verified": false,\n            "phone_verified": false,\n            "sub": "e95a4f14-8958-49e9-8ede-d81b82a7ba12"\n          },\n          "provider": "email",\n          "last_sign_in_at": "2025-10-10T18:50:59.818589Z",\n          "created_at": "2025-10-10T18:50:59.818651Z",\n          "updated_at": "2025-10-10T18:50:59.818651Z",\n          "email": "918608374935@a1taxi.app"\n        }\n      ],\n      "created_at": "2025-10-10T18:50:59.778879Z",\n      "updated_at": "2025-10-23T12:19:03.248622Z",\n      "is_anonymous": false\n    }\n  },\n  "user": {\n    "id": "e95a4f14-8958-49e9-8ede-d81b82a7ba12",\n    "email": "918608374935@a1taxi.app",\n    "phone": "",\n    "user_metadata": {\n      "email_verified": true,\n      "full_name": "Ricco",\n      "phone_number": "+918608374935"\n    }\n  }\n}'
10-23 17:49:02.937 I/ReactNativeJS(18100): 'Γ£à OTP verified, user ID (UUID):', 'e95a4f14-8958-49e9-8ede-d81b82a7ba12'
10-23 17:49:02.937 I/ReactNativeJS(18100): 'Γ£à Customer ID (integer):', '1'
10-23 17:49:02.937 I/ReactNativeJS(18100): 'Γ£à Session received:', '{\n  "access_token": "eyJhbGciOiJIUzI1NiIsImtpZCI6IngvRXB5YUxCdnJGSXNwTE0iLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3dodWJheXBhYm9qb21keWZxeGNmLnN1cGFiYXNlLmNvL2F1dGgvdjEiLCJzdWIiOiJlOTVhNGYxNC04OTU4LTQ5ZTktOGVkZS1kODFiODJhN2JhMTIiLCJhdWQiOiJhdXRoZW50aWNhdGVkIiwiZXhwIjoxNzYxMjI1NTQzLCJpYXQiOjE3NjEyMjE5NDMsImVtYWlsIjoiOTE4NjA4Mzc0OTM1QGExdGF4aS5hcHAiLCJwaG9uZSI6IiIsImFwcF9tZXRhZGF0YSI6eyJwcm92aWRlciI6ImVtYWlsIiwicHJvdmlkZXJzIjpbImVtYWlsIl19LCJ1c2VyX21ldGFkYXRhIjp7ImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJmdWxsX25hbWUiOiJSaWNjbyIsInBob25lX251bWJlciI6Iis5MTg2MDgzNzQ5MzUifSwicm9sZSI6ImF1dGhlbnRpY2F0ZWQiLCJhYWwiOiJhYWwxIiwiYW1yIjpbeyJtZXRob2QiOiJvdHAiLCJ0aW1lc3RhbXAiOjE3NjEyMjE5NDN9XSwic2Vzc2lvbl9pZCI6ImY5MDJiNmI3LWI1ZDYtNDBhOS1hYWM2LTExZjcyYTI2YmViZSIsImlzX2Fub255bW91cyI6ZmFsc2V9.H8elJeb96dem2YaV5ViQhLSx1c1miJugG7t32F1YHGs",\n  "refresh_token": "fuvouebumh2v",\n  "expires_in": 3600,\n  "expires_at": 1761225543,\n  "token_type": "bearer",\n  "user": {\n    "id": "e95a4f14-8958-49e9-8ede-d81b82a7ba12",\n    "aud": "authenticated",\n    "role": "authenticated",\n    "email": "918608374935@a1taxi.app",\n    "email_confirmed_at": "2025-10-10T18:50:59.835507Z",\n    "phone": "",\n    "confirmed_at": "2025-10-10T18:50:59.835507Z",\n    "recovery_sent_at": "2025-10-23T12:19:03.003564Z",\n    "last_sign_in_at": "2025-10-23T12:19:03.223924958Z",\n    "app_metadata": {\n      "provider": "email",\n      "providers": [\n        "email"\n      ]\n    },\n    "user_metadata": {\n      "email_verified": true,\n      "full_name": "Ricco",\n      "phone_number": "+918608374935"\n    },\n    "identities": [\n      {\n        "identity_id": "43785572-7543-40c4-8eef-853beacc688b",\n        "id": "e95a4f14-8958-49e9-8ede-d81b82a7ba12",\n        "user_id": "e95a4f14-8958-49e9-8ede-d81b82a7ba12",\n        "identity_data": {\n          "email": "918608374935@a1taxi.app",\n          "email_verified": false,\n          "phone_verified": false,\n          "sub": "e95a4f14-8958-49e9-8ede-d81b82a7ba12"\n        },\n        "provider": "email",\n        "last_sign_in_at": "2025-10-10T18:50:59.818589Z",\n        "created_at": "2025-10-10T18:50:59.818651Z",\n        "updated_at": "2025-10-10T18:50:59.818651Z",\n        "email": "918608374935@a1taxi.app"\n      }\n    ],\n    "created_at": "2025-10-10T18:50:59.778879Z",\n    "updated_at": "2025-10-23T12:19:03.248622Z",\n    "is_anonymous": false\n  }\n}'
10-23 17:49:02.937 I/ReactNativeJS(18100): ≡ƒöÉ Setting Supabase session...
10-23 17:49:03.304 I/ReactNativeJS(18100): 'Γ£à Supabase session set successfully:', { userId: 'e95a4f14-8958-49e9-8ede-d81b82a7ba12',
10-23 17:49:03.304 I/ReactNativeJS(18100):   email: '918608374935@a1taxi.app',
10-23 17:49:03.304 I/ReactNativeJS(18100):   expiresAt: '2025-10-23T13:19:03.000Z' }
10-23 17:49:03.305 I/ReactNativeJS(18100): '≡ƒöì AuthNavigator - checking auth state:', { user: true,
10-23 17:49:03.305 I/ReactNativeJS(18100):   loading: false,
10-23 17:49:03.305 I/ReactNativeJS(18100):   segments: 'auth/verify-otp',
10-23 17:49:03.305 I/ReactNativeJS(18100):   userEmail: '918608374935@a1taxi.app',
10-23 17:49:03.305 I/ReactNativeJS(18100):   userRole: 'customer' }
10-23 17:49:03.305 I/ReactNativeJS(18100): ≡ƒöÉ User on verify-otp screen, skipping navigation
10-23 17:49:03.313 I/ReactNativeJS(18100): Γ£à AsyncStorage data saved
10-23 17:49:03.314 I/ReactNativeJS(18100): 'Γ£à Setting authenticated user in context with UUID:', 'e95a4f14-8958-49e9-8ede-d81b82a7ba12'
10-23 17:49:03.314 I/ReactNativeJS(18100): 'Γ£à Setting authenticated user in context:', { id: 'e95a4f14-8958-49e9-8ede-d81b82a7ba12',
10-23 17:49:03.314 I/ReactNativeJS(18100):   email: '918608374935@a1taxi.app',
10-23 17:49:03.314 I/ReactNativeJS(18100):   full_name: 'Ricco',
10-23 17:49:03.314 I/ReactNativeJS(18100):   phone_number: '+918608374935',
10-23 17:49:03.314 I/ReactNativeJS(18100):   role: 'customer',
10-23 17:49:03.314 I/ReactNativeJS(18100):   customer_id: 'e95a4f14-8958-49e9-8ede-d81b82a7ba12' }
10-23 17:49:03.326 I/ReactNativeJS(18100): Γ£à Customer data saved, navigating to home...
10-23 17:49:03.327 I/ReactNativeJS(18100): '≡ƒöì AuthNavigator - checking auth state:', { user: true,
10-23 17:49:03.327 I/ReactNativeJS(18100):   loading: false,
10-23 17:49:03.327 I/ReactNativeJS(18100):   segments: 'auth/verify-otp',
10-23 17:49:03.327 I/ReactNativeJS(18100):   userEmail: '918608374935@a1taxi.app',
10-23 17:49:03.327 I/ReactNativeJS(18100):   userRole: 'customer' }
10-23 17:49:03.327 I/ReactNativeJS(18100): ≡ƒöÉ User on verify-otp screen, skipping navigation
10-23 17:49:03.449 W/ReactNativeJS(18100): '≡ƒÄ» [TRIP_NOTIFICATION] Component render, notifications count:', 0
10-23 17:49:03.449 W/ReactNativeJS(18100): '≡ƒÄ» [TRIP_NOTIFICATION] Notifications:', '[]'
10-23 17:49:03.449 I/ReactNativeJS(18100): '≡ƒöì [TRIP_NOTIFICATION] Component render - visible:', false, 'notification:', false
10-23 17:49:03.467 I/ReactNativeJS(18100): '≡ƒÄ» [useRideNotifications] useEffect triggered, user ID:', 'e95a4f14-8958-49e9-8ede-d81b82a7ba12'
10-23 17:49:03.467 I/ReactNativeJS(18100): ≡ƒöì [NOTIFICATIONS] ===== FETCHING NOTIFICATIONS =====
10-23 17:49:03.467 I/ReactNativeJS(18100): '≡ƒöì [NOTIFICATIONS] User ID:', 'e95a4f14-8958-49e9-8ede-d81b82a7ba12'
10-23 17:49:03.467 I/ReactNativeJS(18100): '≡ƒöì [NOTIFICATIONS] Timestamp:', '2025-10-23T12:19:03.467Z'
10-23 17:49:03.470 I/ReactNativeJS(18100): ≡ƒöö [BANNER_DEBUG] ===== NOTIFICATION BANNER EFFECT =====
10-23 17:49:03.470 I/ReactNativeJS(18100): '≡ƒöö [BANNER_DEBUG] Banner summary:', { totalNotifications: 0,
10-23 17:49:03.470 I/ReactNativeJS(18100):   currentlyVisible: false,
10-23 17:49:03.470 I/ReactNativeJS(18100):   currentNotification: undefined,
10-23 17:49:03.470 I/ReactNativeJS(18100):   shownNotificationsCount: 0,
10-23 17:49:03.470 I/ReactNativeJS(18100):   tripCompletedNotifications: 0,
10-23 17:49:03.470 I/ReactNativeJS(18100):   unreadTripCompleted: 0 }
10-23 17:49:03.470 I/ReactNativeJS(18100): ≡ƒô▒ [BANNER_DEBUG] ===== BANNER DISPLAY DECISION =====
10-23 17:49:03.470 I/ReactNativeJS(18100): '≡ƒÄ» [useRideNotifications] useEffect triggered, user ID:', 'e95a4f14-8958-49e9-8ede-d81b82a7ba12'
10-23 17:49:03.470 I/ReactNativeJS(18100): ≡ƒöì [NOTIFICATIONS] ===== FETCHING NOTIFICATIONS =====
10-23 17:49:03.470 I/ReactNativeJS(18100): '≡ƒöì [NOTIFICATIONS] User ID:', 'e95a4f14-8958-49e9-8ede-d81b82a7ba12'
10-23 17:49:03.470 I/ReactNativeJS(18100): '≡ƒöì [NOTIFICATIONS] Timestamp:', '2025-10-23T12:19:03.470Z'
10-23 17:49:03.471 W/ReactNativeJS(18100): ≡ƒÄ» [TRIP_NOTIFICATION] ===== useEffect TRIGGERED - CHECKING FOR COMPLETION NOTIFICATIONS =====
10-23 17:49:03.471 W/ReactNativeJS(18100): '≡ƒÄ» [TRIP_NOTIFICATION] Notifications array length:', 0
10-23 17:49:03.471 W/ReactNativeJS(18100): '≡ƒÄ» [TRIP_NOTIFICATION] Total notifications received:', 0
10-23 17:49:03.471 W/ReactNativeJS(18100): '≡ƒÄ» [TRIP_NOTIFICATION] Notification types:', '[]'
10-23 17:49:03.471 W/ReactNativeJS(18100): '≡ƒÄ» [TRIP_NOTIFICATION] ride_completed count:', 0
10-23 17:49:03.471 W/ReactNativeJS(18100): '≡ƒÄ» [TRIP_NOTIFICATION] Unread ride_completed:', 0
10-23 17:49:03.471 W/ReactNativeJS(18100): '≡ƒÄ» [TRIP_NOTIFICATION] Already shown count:', 0
10-23 17:49:03.471 W/ReactNativeJS(18100): '≡ƒÄ» [TRIP_NOTIFICATION] Currently visible:', false
10-23 17:49:03.471 W/ReactNativeJS(18100): '≡ƒÄ» [TRIP_NOTIFICATION] Filtered completion notifications:', 0
10-23 17:49:03.471 I/ReactNativeJS(18100): '≡ƒÄ» [useRideNotifications] useEffect triggered, user ID:', 'e95a4f14-8958-49e9-8ede-d81b82a7ba12'
10-23 17:49:03.471 I/ReactNativeJS(18100): ≡ƒöì [NOTIFICATIONS] ===== FETCHING NOTIFICATIONS =====
10-23 17:49:03.471 I/ReactNativeJS(18100): '≡ƒöì [NOTIFICATIONS] User ID:', 'e95a4f14-8958-49e9-8ede-d81b82a7ba12'
10-23 17:49:03.472 I/ReactNativeJS(18100): '≡ƒöì [NOTIFICATIONS] Timestamp:', '2025-10-23T12:19:03.471Z'
10-23 17:49:03.472 I/ReactNativeJS(18100): ≡ƒô▒ Requesting location permission on app start for all platforms...
10-23 17:49:03.473 I/ReactNativeJS(18100): '≡ƒô▒ Current platform:', 'android'
10-23 17:49:03.473 I/ReactNativeJS(18100): '≡ƒöì Requesting location permission for platform:', 'android'
10-23 17:49:03.473 I/ReactNativeJS(18100): ≡ƒô▒ Requesting Android location permissions...
10-23 17:49:03.477 I/ReactNativeJS(18100): ≡ƒôè Loading all vehicle configs from fare_matrix table for booking_type=regular
10-23 17:49:03.478 I/ReactNativeJS(18100): ≡ƒù║∩╕Å Fetching active zones from database...
10-23 17:49:03.479 I/ReactNativeJS(18100): ≡ƒôè [HOME] ===== AVAILABLE DRIVERS STATE CHANGED =====
10-23 17:49:03.479 I/ReactNativeJS(18100): '≡ƒôè [HOME] availableDrivers state update:', { count: 0,
10-23 17:49:03.479 I/ReactNativeJS(18100):   showDriversOnMap: true,
10-23 17:49:03.479 I/ReactNativeJS(18100):   driversPassedToMap: 0,
10-23 17:49:03.479 I/ReactNativeJS(18100):   drivers: [] }
10-23 17:49:03.479 I/ReactNativeJS(18100): ≡ƒù║∩╕Å [HOME] No drivers to pass to map (availableDrivers is empty)
10-23 17:49:03.487 I/ReactNativeJS(18100): '≡ƒöì AuthNavigator - checking auth state:', { user: true,
10-23 17:49:03.487 I/ReactNativeJS(18100):   loading: false,
10-23 17:49:03.487 I/ReactNativeJS(18100):   segments: '(tabs)',
10-23 17:49:03.487 I/ReactNativeJS(18100):   userEmail: '918608374935@a1taxi.app',
10-23 17:49:03.487 I/ReactNativeJS(18100):   userRole: 'customer' }
10-23 17:49:03.487 I/ReactNativeJS(18100): Γ£à User authenticated and on correct screen
10-23 17:49:03.487 E/ReactNativeJS(18100): 'Error initializing notifications:', { [Error: Make sure to complete the guide at https://docs.expo.dev/push-notifications/fcm-credentials/ : Default FirebaseApp is not initialized in this process com.a1taxi.a1taxicustomer. Make sure to call FirebaseApp.initializeApp(Context) first.] code: 'E_REGISTRATION_FAILED' }
10-23 17:49:03.496 I/ReactNativeJS(18100): '≡ƒô▒ Fine location permission result:', 'granted'
10-23 17:49:03.496 I/ReactNativeJS(18100): Γ£à Android fine location permission granted
10-23 17:49:03.496 I/ReactNativeJS(18100): Γ£à Location permission granted on mount
10-23 17:49:03.496 I/ReactNativeJS(18100): ≡ƒôì [HOME] Starting location fetch...
10-23 17:49:03.496 I/ReactNativeJS(18100): ≡ƒöì Enhanced Location Service: Getting current location with address...
10-23 17:49:03.496 I/ReactNativeJS(18100): '≡ƒöì Platform:', 'android'
10-23 17:49:03.496 I/ReactNativeJS(18100): ≡ƒôì Enhanced Location Service: Starting location detection...
10-23 17:49:03.496 I/ReactNativeJS(18100): '≡ƒîì Platform:', 'android'
10-23 17:49:03.498 I/ReactNativeJS(18100): Γ£à Enhanced Location Service: Permission granted, attempting detection...
10-23 17:49:03.498 I/ReactNativeJS(18100): ≡ƒÄ» Enhanced Location Service: Attempting high accuracy GPS...
10-23 17:49:03.498 I/ReactNativeJS(18100): ≡ƒô▒ Using Expo Location for high accuracy...
10-23 17:49:03.547 I/ReactNativeJS(18100): 'Γ£à Enhanced Location Service: High accuracy location obtained:', { lat: 12.7486283, lng: 77.8299733, accuracy: '2m' }
10-23 17:49:03.547 I/ReactNativeJS(18100): '≡ƒôì Enhanced Location Service: Got location:', { latitude: 12.7486283, longitude: 77.8299733, accuracy: 2 }
10-23 17:49:03.547 I/ReactNativeJS(18100): ≡ƒù║∩╕Å Enhanced Location Service: Starting reverse geocoding...
10-23 17:49:03.548 I/ReactNativeJS(18100): '≡ƒù║∩╕Å Reverse geocoding coordinates:', { latitude: 12.7486283, longitude: 77.8299733 }
10-23 17:49:03.548 I/ReactNativeJS(18100): '≡ƒÅá Reverse geocoding:', { lat: 12.7486283, lng: 77.8299733 }
10-23 17:49:03.548 I/ReactNativeJS(18100): '≡ƒîÉ Making proxy request to:', 'https://whubaypabojomdyfqxcf.supabase.co/functions/v1/places-proxy/geocode?latlng=12.7486283%2C77.8299733'
10-23 17:49:03.900 I/ReactNativeJS(18100): ≡ƒöì [NOTIFICATIONS] ===== DATABASE QUERY RESULT =====
10-23 17:49:03.901 I/ReactNativeJS(18100): '≡ƒöì [NOTIFICATIONS] Query result:', { hasError: false,
10-23 17:49:03.901 I/ReactNativeJS(18100):   errorMessage: undefined,
10-23 17:49:03.901 I/ReactNativeJS(18100):   errorCode: undefined,
10-23 17:49:03.901 I/ReactNativeJS(18100):   errorDetails: undefined,
10-23 17:49:03.901 I/ReactNativeJS(18100):   dataCount: 50,
10-23 17:49:03.901 I/ReactNativeJS(18100):   tripCompletedCount: 0,
10-23 17:49:03.901 I/ReactNativeJS(18100):   unreadTripCompletedCount: 0,
10-23 17:49:03.901 I/ReactNativeJS(18100):   allTypes:
10-23 17:49:03.901 I/ReactNativeJS(18100):    [ 'ride_completed',
10-23 17:49:03.901 I/ReactNativeJS(18100):      'ride_status_changed',
10-23 17:49:03.901 I/ReactNativeJS(18100):      'booking_completed',
10-23 17:49:03.901 I/ReactNativeJS(18100):      'ride_cancelled' ],
10-23 17:49:03.901 I/ReactNativeJS(18100):   recentNotifications:
10-23 17:49:03.901 I/ReactNativeJS(18100):    [ { id: 'c0930979-b31c-4f63-b636-2d97a731c792',
10-23 17:49:03.901 I/ReactNativeJS(18100):        type: 'ride_completed',
10-23 17:49:03.901 I/ReactNativeJS(18100):        status: 'read',
10-23 17:49:03.901 I/ReactNativeJS(18100):        title: 'Trip Completed',
10-23 17:49:03.901 I/ReactNativeJS(18100):        created_at: '2025-10-23T11:04:46.92906+00:00',
10-23 17:49:03.901 I/ReactNativeJS(18100):        age_seconds: 4457 },
10-23 17:49:03.901 I/ReactNativeJS(18100):      { id: '2012b652-4fe3-4c41-9df3-bc9d3186a24a',
10-23 17:49:03.901 I/ReactNativeJS(18100):        type: 'ride_status_changed',
10-23 17:49:03.901 I/ReactNativeJS(18100):        status: 'read',
10-23 17:49:03.901 I/ReactNativeJS(18100):        title: 'Ride Status Updated',
10-23 17:49:03.901 I/ReactNativeJS(18100):        created_at: '2025-10-23T11:04:46.92906+00:00',
10-23 17:49:03.901 I/ReactNativeJS(18100):        age_seconds: 4457 },
10-23 17:49:03.901 I/ReactNativeJS(18100):      { id: '61a74f93-5643-46ef-8ebb-56d7ed81f675',
10-23 17:49:03.901 I/ReactNativeJS(18100):        type: 'ride_status_changed',
10-23 17:49:03.901 I/ReactNativeJS(18100):        status: 'read',
10-23 17:49:03.901 I/ReactNativeJS(18100):        title: 'Ride Status Updated',
10-23 17:49:03.901 I/ReactNativeJS(18100):        created_at: '2025-10-23T10:43:16.126619+00:00',
10-23 17:49:03.901 I/ReactNativeJS(18100):        age_seconds: 5748 },
10-23 17:49:03.901 I/ReactNativeJS(18100):      { id: 'e75df879-8cb8-4dee-8100-8dd61f99b26e',
10-23 17:49:03.901 I/ReactNativeJS(18100):        type: 'ride_status_changed',
10-23 17:49:03.901 I/ReactNativeJS(18100):        status: 'read',
10-23 17:49:03.901 I/ReactNativeJS(18100):        title: 'Ride Status Updated',
10-23 17:49:03.901 I/ReactNativeJS(18100):        created_at: '2025-10-23T10:42:44.627741+00:00',
10-23 17:49:03.901 I/ReactNativeJS(18100):        age_seconds: 5779 },
10-23 17:49:03.901 I/ReactNativeJS(18100):      { id: '55a746c6-9b8c-44e6-b80c-2beac586c467',
10-23 17:49:03.901 I/ReactNativeJS(18100):        type: 'ride_status_changed',
10-23 17:49:03.901 I/ReactNativeJS(18100):        status: 'read',
10-23 17:49:03.901 I/ReactNativeJS(18100):        title: 'Ride Status Updated',
10-23 17:49:03.901 I/ReactNativeJS(18100):        created_at: '2025-10-23T10:40:18.79365+00:00',
10-23 17:49:03.901 I/ReactNativeJS(18100):        age_seconds: 5925 } ] }
10-23 17:49:03.901 I/ReactNativeJS(18100): Γ£à [NOTIFICATIONS] ===== SETTING NOTIFICATIONS IN STATE =====
10-23 17:49:03.903 I/ReactNativeJS(18100): 'Γ£à [NOTIFICATIONS] Notifications to set:', { total: 50,
10-23 17:49:03.903 I/ReactNativeJS(18100):   tripCompleted: 0,
10-23 17:49:03.903 I/ReactNativeJS(18100):   unreadTripCompleted: 0,
10-23 17:49:03.903 I/ReactNativeJS(18100):   allNotificationIds:
10-23 17:49:03.903 I/ReactNativeJS(18100):    [ 'c0930979-b31c-4f63-b636-2d97a731c792',
10-23 17:49:03.903 I/ReactNativeJS(18100):      '2012b652-4fe3-4c41-9df3-bc9d3186a24a',
10-23 17:49:03.903 I/ReactNativeJS(18100):      '61a74f93-5643-46ef-8ebb-56d7ed81f675',
10-23 17:49:03.903 I/ReactNativeJS(18100):      'e75df879-8cb8-4dee-8100-8dd61f99b26e',
10-23 17:49:03.903 I/ReactNativeJS(18100):      '55a746c6-9b8c-44e6-b80c-2beac586c467',
10-23 17:49:03.903 I/ReactNativeJS(18100):      '7c3cc3c7-e9b6-4cf8-91bb-1bb827ff7808',
10-23 17:49:03.903 I/ReactNativeJS(18100):      '8012a1d6-41e9-4ff2-a75b-8fee9a93ca8e',
10-23 17:49:03.903 I/ReactNativeJS(18100):      'd29bae80-10e7-4d05-99d5-8dc43f61d814',
10-23 17:49:03.903 I/ReactNativeJS(18100):      'd7d8686d-95ee-4ce0-97da-ed89564b014b',
10-23 17:49:03.903 I/ReactNativeJS(18100):      '755a6269-1daf-4327-ab71-f65e3700bf1a',
10-23 17:49:03.903 I/ReactNativeJS(18100):      '500d07b9-07ca-40df-9d4a-3efcf677a117',
10-23 17:49:03.903 I/ReactNativeJS(18100):      'df4552cd-e9bc-4e40-a8a0-1270b37737db',
10-23 17:49:03.903 I/ReactNativeJS(18100):      'acb2b80a-267e-4b98-acd0-397461aee537',
10-23 17:49:03.903 I/ReactNativeJS(18100):      '60dbc0b5-662a-48af-b01a-55212f6ac6ea',
10-23 17:49:03.903 I/ReactNativeJS(18100):      '0f408121-1188-4550-9f50-919dcc8a4ed1',
10-23 17:49:03.903 I/ReactNativeJS(18100):      '23052592-9d19-442c-b40f-12b90c3da756',
10-23 17:49:03.903 I/ReactNativeJS(18100):      'c9ff3014-54e3-4b30-9f22-eceee292796b',
10-23 17:49:03.903 I/ReactNativeJS(18100):      '879d4bbd-20ad-4253-a1c6-ae7535e7c211',
10-23 17:49:03.903 I/ReactNativeJS(18100):      '286129cf-19e6-41fd-b52f-d17334d0d0f9',
10-23 17:49:03.903 I/ReactNativeJS(18100):      'b55ac709-48d5-4db2-8246-e23f9bd317ec',
10-23 17:49:03.903 I/ReactNativeJS(18100):      '92abe95d-e47d-48fa-8159-b119f5802710',
10-23 17:49:03.903 I/ReactNativeJS(18100):      '73ad244d-a00b-42a9-83e9-97932b9db2d2',
10-23 17:49:03.903 I/ReactNativeJS(18100):      '971613ac-8d86-4ab6-8fe5-49c528ca56ee',
10-23 17:49:03.903 I/ReactNativeJS(18100):      '49f0f7f9-03d6-4211-b47d-0e7738f190fa',
10-23 17:49:03.903 I/ReactNativeJS(18100):      '6a87c30d-c48d-458c-9b94-32dd5e75ac05',
10-23 17:49:03.903 I/ReactNativeJS(18100):      'aee0b7a7-9cb2-4f6b-b53f-fa47642319d0',
10-23 17:49:03.903 I/ReactNativeJS(18100):      '6c1d61c3-6cbd-4310-adfe-6d36bc611939',
10-23 17:49:03.903 I/ReactNativeJS(18100):      '9d9ab6e7-0357-4305-9ba8-e91c0bb29897',
10-23 17:49:03.903 I/ReactNativeJS(18100):      'd952183c-69a7-47dc-a848-d11bc2fff300',
10-23 17:49:03.903 I/ReactNativeJS(18100):      'a01d13a8-c95b-4bf1-b0e1-8b2a8e9aaa6b',
10-23 17:49:03.903 I/ReactNativeJS(18100):      '5a385bc8-147d-4ac2-834c-305ed9db9a05',
10-23 17:49:03.903 I/ReactNativeJS(18100):      'b9365ade-a3a4-4036-b42f-606b88d5fac9',
10-23 17:49:03.903 I/ReactNativeJS(18100):      'b6a2c6b6-bdb4-40ce-a092-25f6dd4ba953',
10-23 17:49:03.903 I/ReactNativeJS(18100):      'd850bf94-823f-497a-b292-075abf5b5a59',
10-23 17:49:03.903 I/ReactNativeJS(18100):      '5d8275c0-6692-44b3-a4ff-4eabba59873e',
10-23 17:49:03.903 I/ReactNativeJS(18100):      '5cfa0487-5d05-42e8-8e92-11a287b3ded0',
10-23 17:49:03.903 I/ReactNativeJS(18100):      '679ed79c-eb21-4609-a2b9-a1d304d4d4ad',
10-23 17:49:03.903 I/ReactNativeJS(18100):      '53bb9116-5f1d-445c-94e0-f2e3d9fa3ffe',
10-23 17:49:03.903 I/ReactNativeJS(18100):      '4196d3c8-e6dd-4a11-8d40-6771aa06de07',
10-23 17:49:03.903 I/ReactNativeJS(18100):      '8d21f749-083a-46d1-9f7e-f7dc5c36ef05',
10-23 17:49:03.903 I/ReactNativeJS(18100):      '0a371105-3196-4055-97ad-b230dba42df5',
10-23 17:49:03.903 I/ReactNativeJS(18100):      '9f010555-c90c-447e-83ae-919809ba8350',
10-23 17:49:03.903 I/ReactNativeJS(18100):      '84dd0357-20ec-4317-b7bd-7b31515219fb',
10-23 17:49:03.903 I/ReactNativeJS(18100):      'caaa4644-cefa-47e6-8c92-60415a52ef4b',
10-23 17:49:03.903 I/ReactNativeJS(18100):      'c6e2da1c-f900-47c8-b289-a88c28451f89',
10-23 17:49:03.903 I/ReactNativeJS(18100):      'c1a54517-80eb-451d-8fbb-26492459f1c4',
10-23 17:49:03.903 I/ReactNativeJS(18100):      'd3a69945-ed73-4db9-84db-77b1013c8fe2',
10-23 17:49:03.903 I/ReactNativeJS(18100):      '8de5daf3-1c41-4bc6-8e2c-c3873b443cbb',
10-23 17:49:03.903 I/ReactNativeJS(18100):      '93b3c278-21c8-4094-a13b-ae25cea5afa8',
10-23 17:49:03.903 I/ReactNativeJS(18100):      '057c85ff-f0f5-4a15-9e89-de6dc65465a2' ],
10-23 17:49:03.903 I/ReactNativeJS(18100):   tripCompletedNotificationIds: [],
10-23 17:49:03.903 I/ReactNativeJS(18100):   unreadTripCompletedNotificationIds: [] }
10-23 17:49:03.904 W/ReactNativeJS(18100): '≡ƒÄ» [TRIP_NOTIFICATION] Component render, notifications count:', 50
10-23 17:49:03.905 W/ReactNativeJS(18100): '≡ƒÄ» [TRIP_NOTIFICATION] Notifications:', '[{"id":"c0930979-b31c-4f63-b636-2d97a731c792","type":"ride_completed","status":"read"},{"id":"2012b652-4fe3-4c41-9df3-bc9d3186a24a","type":"ride_status_changed","status":"read"},{"id":"61a74f93-5643-46ef-8ebb-56d7ed81f675","type":"ride_status_changed","status":"read"},{"id":"e75df879-8cb8-4dee-8100-8dd61f99b26e","type":"ride_status_changed","status":"read"},{"id":"55a746c6-9b8c-44e6-b80c-2beac586c467","type":"ride_status_changed","status":"read"},{"id":"7c3cc3c7-e9b6-4cf8-91bb-1bb827ff7808","type":"ride_status_changed","status":"read"},{"id":"8012a1d6-41e9-4ff2-a75b-8fee9a93ca8e","type":"ride_status_changed","status":"read"},{"id":"d29bae80-10e7-4d05-99d5-8dc43f61d814","type":"ride_status_changed","status":"read"},{"id":"d7d8686d-95ee-4ce0-97da-ed89564b014b","type":"ride_status_changed","status":"read"},{"id":"755a6269-1daf-4327-ab71-f65e3700bf1a","type":"ride_status_changed","status":"read"},{"id":"500d07b9-07ca-40df-9d4a-3efcf677a117","type":"ride_status_changed","status":"read"},{"id":"df4552cd-e9bc-4e40-a8a0-1270b37737db","type":"booking_completed","status":"read"},{"id":"acb2b80a-267e-4b98-acd0-397461aee537","type":"booking_completed","status":"read"},{"id":"60dbc0b5-662a-48af-b01a-55212f6ac6ea","type":"booking_completed","status":"read"},{"id":"0f408121-1188-4550-9f50-919dcc8a4ed1","type":"booking_completed","status":"read"},{"id":"23052592-9d19-442c-b40f-12b90c3da756","type":"booking_completed","status":"read"},{"id":"c9ff3014-54e3-4b30-9f22-eceee292796b","type":"ride_status_changed","status":"read"},{"id":"879d4bbd-20ad-4253-a1c6-ae7535e7c211","type":"ride_status_changed","status":"read"},{"id":"286129cf-19e6-41fd-b52f-d17334d0d0f9","type":"ride_status_changed","status":"read"},{"id":"b55ac709-48d5-4db2-8246-e23f9bd317ec","type":"ride_completed","status":"read"},{"id":"92abe95d-e47d-48fa-8159-b119f5802710","type":"ride_status_changed","status":"read"},{"id":"73ad244d-a00b-42a9-83e9-97932b9db2d2","type":"ride_status_changed","status":"read"},{"id":"971613ac-8d86-4ab6-8fe5-49c528ca56ee","type":"ride_status_changed","status":"read"},{"id":"49f0f7f9-03d6-4211-b47d-0e7738f190fa","type":"ride_completed","status":"read"},{"id":"6a87c30d-c48d-458c-9b94-32dd5e75ac05","type":"ride_status_changed","status":"read"},{"id":"aee0b7a7-9cb2-4f6b-b53f-fa47642319d0","type":"ride_status_changed","status":"read"},{"id":"6c1d61c3-6cbd-4310-adfe-6d36bc611939","type":"ride_status_changed","status":"read"},{"id":"9d9ab6e7-0357-4305-9ba8-e91c0bb29897","type":"ride_status_changed","status":"read"},{"id":"d952183c-69a7-47dc-a848-d11bc2fff300","type":"ride_cancelled","status":"read"},{"id":"a01d13a8-c95b-4bf1-b0e1-8b2a8e9aaa6b","type":"ride_status_changed","status":"read"},{"id":"5a385bc8-147d-4ac2-834c-305ed9db9a05","type":"ride_completed","status":"read"},{"id":"b9365ade-a3a4-4036-b42f-606b88d5fac9","type":"ride_status_changed","status":"read"},{"id":"b6a2c6b6-bdb4-40ce-a092-25f6dd4ba953","type":"ride_status_changed","status":"read"},{"id":"d850bf94-823f-497a-b292-075abf5b5a59","type":"ride_status_changed","status":"read"},{"id":"5d8275c0-6692-44b3-a4ff-4eabba59873e","type":"ride_status_changed","status":"read"},{"id":"5cfa0487-5d05-42e8-8e92-11a287b3ded0","type":"ride_completed","status":"read"},{"id":"679ed79c-eb21-4609-a2b9-a1d304d4d4ad","type":"ride_status_changed","status":"read"},{"id":"53bb9116-5f1d-445c-94e0-f2e3d9fa3ffe","type":"ride_status_changed","status":"read"},{"id":"4196d3c8-e6dd-4a11-8d40-6771aa06de07","type":"ride_status_changed","status":"read"},{"id":"8d21f749-083a-46d1-9f7e-f7dc5c36ef05","type":"ride_status_changed","status":"read"},{"id":"0a371105-3196-4055-97ad-b230dba42df5","type":"ride_completed","status":"read"},{"id":"9f010555-c90c-447e-83ae-919809ba8350","type":"ride_status_changed","status":"read"},{"id":"84dd0357-20ec-4317-b7bd-7b31515219fb","type":"ride_status_changed","status":"read"},{"id":"caaa4644-cefa-47e6-8c92-60415a52ef4b","type":"ride_status_changed","status":"read"},{"id":"c6e2da1c-f900-47c8-b289-a88c28451f89","ty
10-23 17:49:03.905 I/ReactNativeJS(18100): '≡ƒöì [TRIP_NOTIFICATION] Component render - visible:', false, 'notification:', false
10-23 17:49:03.905 W/ReactNativeJS(18100): ≡ƒÄ» [TRIP_NOTIFICATION] ===== useEffect TRIGGERED - CHECKING FOR COMPLETION NOTIFICATIONS =====
10-23 17:49:03.906 W/ReactNativeJS(18100): '≡ƒÄ» [TRIP_NOTIFICATION] Notifications array length:', 50
10-23 17:49:03.906 W/ReactNativeJS(18100): '≡ƒÄ» [TRIP_NOTIFICATION] Total notifications received:', 50
10-23 17:49:03.906 W/ReactNativeJS(18100): '≡ƒÄ» [TRIP_NOTIFICATION] Notification types:', '["ride_completed","ride_status_changed","ride_status_changed","ride_status_changed","ride_status_changed","ride_status_changed","ride_status_changed","ride_status_changed","ride_status_changed","ride_status_changed","ride_status_changed","booking_completed","booking_completed","booking_completed","booking_completed","booking_completed","ride_status_changed","ride_status_changed","ride_status_changed","ride_completed","ride_status_changed","ride_status_changed","ride_status_changed","ride_completed","ride_status_changed","ride_status_changed","ride_status_changed","ride_status_changed","ride_cancelled","ride_status_changed","ride_completed","ride_status_changed","ride_status_changed","ride_status_changed","ride_status_changed","ride_completed","ride_status_changed","ride_status_changed","ride_status_changed","ride_status_changed","ride_completed","ride_status_changed","ride_status_changed","ride_status_changed","ride_status_changed","ride_status_changed","ride_completed","ride_status_changed","ride_status_changed","ride_status_changed"]'
10-23 17:49:03.906 W/ReactNativeJS(18100): '≡ƒÄ» [TRIP_NOTIFICATION] ride_completed count:', 7
10-23 17:49:03.906 W/ReactNativeJS(18100): '≡ƒÄ» [TRIP_NOTIFICATION] Unread ride_completed:', 0
10-23 17:49:03.906 W/ReactNativeJS(18100): '≡ƒÄ» [TRIP_NOTIFICATION] Already shown count:', 0
10-23 17:49:03.906 W/ReactNativeJS(18100): '≡ƒÄ» [TRIP_NOTIFICATION] Currently visible:', false
10-23 17:49:03.906 W/ReactNativeJS(18100): '≡ƒÄ» [TRIP_NOTIFICATION] Filtered completion notifications:', 0
10-23 17:49:03.906 W/ReactNativeJS(18100): '≡ƒÄ» [TRIP_NOTIFICATION] Component render, notifications count:', 50
10-23 17:49:03.907 W/ReactNativeJS(18100): '≡ƒÄ» [TRIP_NOTIFICATION] Notifications:', '[{"id":"c0930979-b31c-4f63-b636-2d97a731c792","type":"ride_completed","status":"read"},{"id":"2012b652-4fe3-4c41-9df3-bc9d3186a24a","type":"ride_status_changed","status":"read"},{"id":"61a74f93-5643-46ef-8ebb-56d7ed81f675","type":"ride_status_changed","status":"read"},{"id":"e75df879-8cb8-4dee-8100-8dd61f99b26e","type":"ride_status_changed","status":"read"},{"id":"55a746c6-9b8c-44e6-b80c-2beac586c467","type":"ride_status_changed","status":"read"},{"id":"7c3cc3c7-e9b6-4cf8-91bb-1bb827ff7808","type":"ride_status_changed","status":"read"},{"id":"8012a1d6-41e9-4ff2-a75b-8fee9a93ca8e","type":"ride_status_changed","status":"read"},{"id":"d29bae80-10e7-4d05-99d5-8dc43f61d814","type":"ride_status_changed","status":"read"},{"id":"d7d8686d-95ee-4ce0-97da-ed89564b014b","type":"ride_status_changed","status":"read"},{"id":"755a6269-1daf-4327-ab71-f65e3700bf1a","type":"ride_status_changed","status":"read"},{"id":"500d07b9-07ca-40df-9d4a-3efcf677a117","type":"ride_status_changed","status":"read"},{"id":"df4552cd-e9bc-4e40-a8a0-1270b37737db","type":"booking_completed","status":"read"},{"id":"acb2b80a-267e-4b98-acd0-397461aee537","type":"booking_completed","status":"read"},{"id":"60dbc0b5-662a-48af-b01a-55212f6ac6ea","type":"booking_completed","status":"read"},{"id":"0f408121-1188-4550-9f50-919dcc8a4ed1","type":"booking_completed","status":"read"},{"id":"23052592-9d19-442c-b40f-12b90c3da756","type":"booking_completed","status":"read"},{"id":"c9ff3014-54e3-4b30-9f22-eceee292796b","type":"ride_status_changed","status":"read"},{"id":"879d4bbd-20ad-4253-a1c6-ae7535e7c211","type":"ride_status_changed","status":"read"},{"id":"286129cf-19e6-41fd-b52f-d17334d0d0f9","type":"ride_status_changed","status":"read"},{"id":"b55ac709-48d5-4db2-8246-e23f9bd317ec","type":"ride_completed","status":"read"},{"id":"92abe95d-e47d-48fa-8159-b119f5802710","type":"ride_status_changed","status":"read"},{"id":"73ad244d-a00b-42a9-83e9-97932b9db2d2","type":"ride_status_changed","status":"read"},{"id":"971613ac-8d86-4ab6-8fe5-49c528ca56ee","type":"ride_status_changed","status":"read"},{"id":"49f0f7f9-03d6-4211-b47d-0e7738f190fa","type":"ride_completed","status":"read"},{"id":"6a87c30d-c48d-458c-9b94-32dd5e75ac05","type":"ride_status_changed","status":"read"},{"id":"aee0b7a7-9cb2-4f6b-b53f-fa47642319d0","type":"ride_status_changed","status":"read"},{"id":"6c1d61c3-6cbd-4310-adfe-6d36bc611939","type":"ride_status_changed","status":"read"},{"id":"9d9ab6e7-0357-4305-9ba8-e91c0bb29897","type":"ride_status_changed","status":"read"},{"id":"d952183c-69a7-47dc-a848-d11bc2fff300","type":"ride_cancelled","status":"read"},{"id":"a01d13a8-c95b-4bf1-b0e1-8b2a8e9aaa6b","type":"ride_status_changed","status":"read"},{"id":"5a385bc8-147d-4ac2-834c-305ed9db9a05","type":"ride_completed","status":"read"},{"id":"b9365ade-a3a4-4036-b42f-606b88d5fac9","type":"ride_status_changed","status":"read"},{"id":"b6a2c6b6-bdb4-40ce-a092-25f6dd4ba953","type":"ride_status_changed","status":"read"},{"id":"d850bf94-823f-497a-b292-075abf5b5a59","type":"ride_status_changed","status":"read"},{"id":"5d8275c0-6692-44b3-a4ff-4eabba59873e","type":"ride_status_changed","status":"read"},{"id":"5cfa0487-5d05-42e8-8e92-11a287b3ded0","type":"ride_completed","status":"read"},{"id":"679ed79c-eb21-4609-a2b9-a1d304d4d4ad","type":"ride_status_changed","status":"read"},{"id":"53bb9116-5f1d-445c-94e0-f2e3d9fa3ffe","type":"ride_status_changed","status":"read"},{"id":"4196d3c8-e6dd-4a11-8d40-6771aa06de07","type":"ride_status_changed","status":"read"},{"id":"8d21f749-083a-46d1-9f7e-f7dc5c36ef05","type":"ride_status_changed","status":"read"},{"id":"0a371105-3196-4055-97ad-b230dba42df5","type":"ride_completed","status":"read"},{"id":"9f010555-c90c-447e-83ae-919809ba8350","type":"ride_status_changed","status":"read"},{"id":"84dd0357-20ec-4317-b7bd-7b31515219fb","type":"ride_status_changed","status":"read"},{"id":"caaa4644-cefa-47e6-8c92-60415a52ef4b","type":"ride_status_changed","status":"read"},{"id":"c6e2da1c-f900-47c8-b289-a88c28451f89","ty
10-23 17:49:03.908 I/ReactNativeJS(18100): '≡ƒöì [TRIP_NOTIFICATION] Component render - visible:', false, 'notification:', false
10-23 17:49:03.908 I/ReactNativeJS(18100): Γ£à [NOTIFICATIONS] ===== CHECKING FOR IMMEDIATE TRIP COMPLETION =====
10-23 17:49:03.908 I/ReactNativeJS(18100): Γ¥î [NOTIFICATIONS] No immediate trip completion notifications found
10-23 17:49:03.909 I/ReactNativeJS(18100): 'Γ¥î [NOTIFICATIONS] Available notification types:', [ 'ride_completed',
10-23 17:49:03.909 I/ReactNativeJS(18100):   'ride_status_changed',
10-23 17:49:03.909 I/ReactNativeJS(18100):   'ride_status_changed',
10-23 17:49:03.909 I/ReactNativeJS(18100):   'ride_status_changed',
10-23 17:49:03.909 I/ReactNativeJS(18100):   'ride_status_changed',
10-23 17:49:03.909 I/ReactNativeJS(18100):   'ride_status_changed',
10-23 17:49:03.909 I/ReactNativeJS(18100):   'ride_status_changed',
10-23 17:49:03.909 I/ReactNativeJS(18100):   'ride_status_changed',
10-23 17:49:03.909 I/ReactNativeJS(18100):   'ride_status_changed',
10-23 17:49:03.909 I/ReactNativeJS(18100):   'ride_status_changed',
10-23 17:49:03.909 I/ReactNativeJS(18100):   'ride_status_changed',
10-23 17:49:03.909 I/ReactNativeJS(18100):   'booking_completed',
10-23 17:49:03.909 I/ReactNativeJS(18100):   'booking_completed',
10-23 17:49:03.909 I/ReactNativeJS(18100):   'booking_completed',
10-23 17:49:03.909 I/ReactNativeJS(18100):   'booking_completed',
10-23 17:49:03.909 I/ReactNativeJS(18100):   'booking_completed',
10-23 17:49:03.909 I/ReactNativeJS(18100):   'ride_status_changed',
10-23 17:49:03.909 I/ReactNativeJS(18100):   'ride_status_changed',
10-23 17:49:03.909 I/ReactNativeJS(18100):   'ride_status_changed',
10-23 17:49:03.909 I/ReactNativeJS(18100):   'ride_completed',
10-23 17:49:03.909 I/ReactNativeJS(18100):   'ride_status_changed',
10-23 17:49:03.909 I/ReactNativeJS(18100):   'ride_status_changed',
10-23 17:49:03.909 I/ReactNativeJS(18100):   'ride_status_changed',
10-23 17:49:03.909 I/ReactNativeJS(18100):   'ride_completed',
10-23 17:49:03.909 I/ReactNativeJS(18100):   'ride_status_changed',
10-23 17:49:03.909 I/ReactNativeJS(18100):   'ride_status_changed',
10-23 17:49:03.909 I/ReactNativeJS(18100):   'ride_status_changed',
10-23 17:49:03.909 I/ReactNativeJS(18100):   'ride_status_changed',
10-23 17:49:03.909 I/ReactNativeJS(18100):   'ride_cancelled',
10-23 17:49:03.909 I/ReactNativeJS(18100):   'ride_status_changed',
10-23 17:49:03.909 I/ReactNativeJS(18100):   'ride_completed',
10-23 17:49:03.909 I/ReactNativeJS(18100):   'ride_status_changed',
10-23 17:49:03.909 I/ReactNativeJS(18100):   'ride_status_changed',
10-23 17:49:03.909 I/ReactNativeJS(18100):   'ride_status_changed',
10-23 17:49:03.909 I/ReactNativeJS(18100):   'ride_status_changed',
10-23 17:49:03.909 I/ReactNativeJS(18100):   'ride_completed',
10-23 17:49:03.909 I/ReactNativeJS(18100):   'ride_status_changed',
10-23 17:49:03.909 I/ReactNativeJS(18100):   'ride_status_changed',
10-23 17:49:03.909 I/ReactNativeJS(18100):   'ride_status_changed',
10-23 17:49:03.909 I/ReactNativeJS(18100):   'ride_status_changed',
10-23 17:49:03.909 I/ReactNativeJS(18100):   'ride_completed',
10-23 17:49:03.909 I/ReactNativeJS(18100):   'ride_status_changed',
10-23 17:49:03.909 I/ReactNativeJS(18100):   'ride_status_changed',
10-23 17:49:03.909 I/ReactNativeJS(18100):   'ride_status_changed',
10-23 17:49:03.909 I/ReactNativeJS(18100):   'ride_status_changed',
10-23 17:49:03.909 I/ReactNativeJS(18100):   'ride_status_changed',
10-23 17:49:03.909 I/ReactNativeJS(18100):   'ride_completed',
10-23 17:49:03.909 I/ReactNativeJS(18100):   'ride_status_changed',
10-23 17:49:03.909 I/ReactNativeJS(18100):   'ride_status_changed',
10-23 17:49:03.909 I/ReactNativeJS(18100):   'ride_status_changed' ]
10-23 17:49:03.909 I/ReactNativeJS(18100): 'Γ¥î [NOTIFICATIONS] Trip completed notifications (all statuses):', []
10-23 17:49:03.910 W/ReactNativeJS(18100): '≡ƒÄ» [TRIP_NOTIFICATION] Component render, notifications count:', 50
10-23 17:49:03.911 W/ReactNativeJS(18100): '≡ƒÄ» [TRIP_NOTIFICATION] Notifications:', '[{"id":"c0930979-b31c-4f63-b636-2d97a731c792","type":"ride_completed","status":"read"},{"id":"2012b652-4fe3-4c41-9df3-bc9d3186a24a","type":"ride_status_changed","status":"read"},{"id":"61a74f93-5643-46ef-8ebb-56d7ed81f675","type":"ride_status_changed","status":"read"},{"id":"e75df879-8cb8-4dee-8100-8dd61f99b26e","type":"ride_status_changed","status":"read"},{"id":"55a746c6-9b8c-44e6-b80c-2beac586c467","type":"ride_status_changed","status":"read"},{"id":"7c3cc3c7-e9b6-4cf8-91bb-1bb827ff7808","type":"ride_status_changed","status":"read"},{"id":"8012a1d6-41e9-4ff2-a75b-8fee9a93ca8e","type":"ride_status_changed","status":"read"},{"id":"d29bae80-10e7-4d05-99d5-8dc43f61d814","type":"ride_status_changed","status":"read"},{"id":"d7d8686d-95ee-4ce0-97da-ed89564b014b","type":"ride_status_changed","status":"read"},{"id":"755a6269-1daf-4327-ab71-f65e3700bf1a","type":"ride_status_changed","status":"read"},{"id":"500d07b9-07ca-40df-9d4a-3efcf677a117","type":"ride_status_changed","status":"read"},{"id":"df4552cd-e9bc-4e40-a8a0-1270b37737db","type":"booking_completed","status":"read"},{"id":"acb2b80a-267e-4b98-acd0-397461aee537","type":"booking_completed","status":"read"},{"id":"60dbc0b5-662a-48af-b01a-55212f6ac6ea","type":"booking_completed","status":"read"},{"id":"0f408121-1188-4550-9f50-919dcc8a4ed1","type":"booking_completed","status":"read"},{"id":"23052592-9d19-442c-b40f-12b90c3da756","type":"booking_completed","status":"read"},{"id":"c9ff3014-54e3-4b30-9f22-eceee292796b","type":"ride_status_changed","status":"read"},{"id":"879d4bbd-20ad-4253-a1c6-ae7535e7c211","type":"ride_status_changed","status":"read"},{"id":"286129cf-19e6-41fd-b52f-d17334d0d0f9","type":"ride_status_changed","status":"read"},{"id":"b55ac709-48d5-4db2-8246-e23f9bd317ec","type":"ride_completed","status":"read"},{"id":"92abe95d-e47d-48fa-8159-b119f5802710","type":"ride_status_changed","status":"read"},{"id":"73ad244d-a00b-42a9-83e9-97932b9db2d2","type":"ride_status_changed","status":"read"},{"id":"971613ac-8d86-4ab6-8fe5-49c528ca56ee","type":"ride_status_changed","status":"read"},{"id":"49f0f7f9-03d6-4211-b47d-0e7738f190fa","type":"ride_completed","status":"read"},{"id":"6a87c30d-c48d-458c-9b94-32dd5e75ac05","type":"ride_status_changed","status":"read"},{"id":"aee0b7a7-9cb2-4f6b-b53f-fa47642319d0","type":"ride_status_changed","status":"read"},{"id":"6c1d61c3-6cbd-4310-adfe-6d36bc611939","type":"ride_status_changed","status":"read"},{"id":"9d9ab6e7-0357-4305-9ba8-e91c0bb29897","type":"ride_status_changed","status":"read"},{"id":"d952183c-69a7-47dc-a848-d11bc2fff300","type":"ride_cancelled","status":"read"},{"id":"a01d13a8-c95b-4bf1-b0e1-8b2a8e9aaa6b","type":"ride_status_changed","status":"read"},{"id":"5a385bc8-147d-4ac2-834c-305ed9db9a05","type":"ride_completed","status":"read"},{"id":"b9365ade-a3a4-4036-b42f-606b88d5fac9","type":"ride_status_changed","status":"read"},{"id":"b6a2c6b6-bdb4-40ce-a092-25f6dd4ba953","type":"ride_status_changed","status":"read"},{"id":"d850bf94-823f-497a-b292-075abf5b5a59","type":"ride_status_changed","status":"read"},{"id":"5d8275c0-6692-44b3-a4ff-4eabba59873e","type":"ride_status_changed","status":"read"},{"id":"5cfa0487-5d05-42e8-8e92-11a287b3ded0","type":"ride_completed","status":"read"},{"id":"679ed79c-eb21-4609-a2b9-a1d304d4d4ad","type":"ride_status_changed","status":"read"},{"id":"53bb9116-5f1d-445c-94e0-f2e3d9fa3ffe","type":"ride_status_changed","status":"read"},{"id":"4196d3c8-e6dd-4a11-8d40-6771aa06de07","type":"ride_status_changed","status":"read"},{"id":"8d21f749-083a-46d1-9f7e-f7dc5c36ef05","type":"ride_status_changed","status":"read"},{"id":"0a371105-3196-4055-97ad-b230dba42df5","type":"ride_completed","status":"read"},{"id":"9f010555-c90c-447e-83ae-919809ba8350","type":"ride_status_changed","status":"read"},{"id":"84dd0357-20ec-4317-b7bd-7b31515219fb","type":"ride_status_changed","status":"read"},{"id":"caaa4644-cefa-47e6-8c92-60415a52ef4b","type":"ride_status_changed","status":"read"},{"id":"c6e2da1c-f900-47c8-b289-a88c28451f89","ty
10-23 17:49:03.911 I/ReactNativeJS(18100): '≡ƒöì [TRIP_NOTIFICATION] Component render - visible:', false, 'notification:', false
10-23 17:49:03.912 I/ReactNativeJS(18100): ≡ƒöì [NOTIFICATIONS] ===== DATABASE QUERY RESULT =====
10-23 17:49:03.913 I/ReactNativeJS(18100): '≡ƒöì [NOTIFICATIONS] Query result:', { hasError: false,
10-23 17:49:03.913 I/ReactNativeJS(18100):   errorMessage: undefined,
10-23 17:49:03.913 I/ReactNativeJS(18100):   errorCode: undefined,
10-23 17:49:03.913 I/ReactNativeJS(18100):   errorDetails: undefined,
10-23 17:49:03.913 I/ReactNativeJS(18100):   dataCount: 50,
10-23 17:49:03.913 I/ReactNativeJS(18100):   tripCompletedCount: 0,
10-23 17:49:03.913 I/ReactNativeJS(18100):   unreadTripCompletedCount: 0,
10-23 17:49:03.913 I/ReactNativeJS(18100):   allTypes:
10-23 17:49:03.913 I/ReactNativeJS(18100):    [ 'ride_completed',
10-23 17:49:03.913 I/ReactNativeJS(18100):      'ride_status_changed',
10-23 17:49:03.913 I/ReactNativeJS(18100):      'booking_completed',
10-23 17:49:03.913 I/ReactNativeJS(18100):      'ride_cancelled' ],
10-23 17:49:03.913 I/ReactNativeJS(18100):   recentNotifications:
10-23 17:49:03.913 I/ReactNativeJS(18100):    [ { id: 'c0930979-b31c-4f63-b636-2d97a731c792',
10-23 17:49:03.913 I/ReactNativeJS(18100):        type: 'ride_completed',
10-23 17:49:03.913 I/ReactNativeJS(18100):        status: 'read',
10-23 17:49:03.913 I/ReactNativeJS(18100):        title: 'Trip Completed',
10-23 17:49:03.913 I/ReactNativeJS(18100):        created_at: '2025-10-23T11:04:46.92906+00:00',
10-23 17:49:03.913 I/ReactNativeJS(18100):        age_seconds: 4457 },
10-23 17:49:03.913 I/ReactNativeJS(18100):      { id: '2012b652-4fe3-4c41-9df3-bc9d3186a24a',
10-23 17:49:03.913 I/ReactNativeJS(18100):        type: 'ride_status_changed',
10-23 17:49:03.913 I/ReactNativeJS(18100):        status: 'read',
10-23 17:49:03.913 I/ReactNativeJS(18100):        title: 'Ride Status Updated',
10-23 17:49:03.913 I/ReactNativeJS(18100):        created_at: '2025-10-23T11:04:46.92906+00:00',
10-23 17:49:03.913 I/ReactNativeJS(18100):        age_seconds: 4457 },
10-23 17:49:03.913 I/ReactNativeJS(18100):      { id: '61a74f93-5643-46ef-8ebb-56d7ed81f675',
10-23 17:49:03.913 I/ReactNativeJS(18100):        type: 'ride_status_changed',
10-23 17:49:03.913 I/ReactNativeJS(18100):        status: 'read',
10-23 17:49:03.913 I/ReactNativeJS(18100):        title: 'Ride Status Updated',
10-23 17:49:03.913 I/ReactNativeJS(18100):        created_at: '2025-10-23T10:43:16.126619+00:00',
10-23 17:49:03.913 I/ReactNativeJS(18100):        age_seconds: 5748 },
10-23 17:49:03.913 I/ReactNativeJS(18100):      { id: 'e75df879-8cb8-4dee-8100-8dd61f99b26e',
10-23 17:49:03.913 I/ReactNativeJS(18100):        type: 'ride_status_changed',
10-23 17:49:03.913 I/ReactNativeJS(18100):        status: 'read',
10-23 17:49:03.913 I/ReactNativeJS(18100):        title: 'Ride Status Updated',
10-23 17:49:03.913 I/ReactNativeJS(18100):        created_at: '2025-10-23T10:42:44.627741+00:00',
10-23 17:49:03.913 I/ReactNativeJS(18100):        age_seconds: 5779 },
10-23 17:49:03.913 I/ReactNativeJS(18100):      { id: '55a746c6-9b8c-44e6-b80c-2beac586c467',
10-23 17:49:03.913 I/ReactNativeJS(18100):        type: 'ride_status_changed',
10-23 17:49:03.913 I/ReactNativeJS(18100):        status: 'read',
10-23 17:49:03.913 I/ReactNativeJS(18100):        title: 'Ride Status Updated',
10-23 17:49:03.913 I/ReactNativeJS(18100):        created_at: '2025-10-23T10:40:18.79365+00:00',
10-23 17:49:03.913 I/ReactNativeJS(18100):        age_seconds: 5925 } ] }
10-23 17:49:03.913 I/ReactNativeJS(18100): Γ£à [NOTIFICATIONS] ===== SETTING NOTIFICATIONS IN STATE =====
10-23 17:49:03.914 I/ReactNativeJS(18100): 'Γ£à [NOTIFICATIONS] Notifications to set:', { total: 50,
10-23 17:49:03.914 I/ReactNativeJS(18100):   tripCompleted: 0,
10-23 17:49:03.914 I/ReactNativeJS(18100):   unreadTripCompleted: 0,
10-23 17:49:03.914 I/ReactNativeJS(18100):   allNotificationIds:
10-23 17:49:03.914 I/ReactNativeJS(18100):    [ 'c0930979-b31c-4f63-b636-2d97a731c792',
10-23 17:49:03.914 I/ReactNativeJS(18100):      '2012b652-4fe3-4c41-9df3-bc9d3186a24a',
10-23 17:49:03.914 I/ReactNativeJS(18100):      '61a74f93-5643-46ef-8ebb-56d7ed81f675',
10-23 17:49:03.914 I/ReactNativeJS(18100):      'e75df879-8cb8-4dee-8100-8dd61f99b26e',
10-23 17:49:03.914 I/ReactNativeJS(18100):      '55a746c6-9b8c-44e6-b80c-2beac586c467',
10-23 17:49:03.914 I/ReactNativeJS(18100):      '7c3cc3c7-e9b6-4cf8-91bb-1bb827ff7808',
10-23 17:49:03.914 I/ReactNativeJS(18100):      '8012a1d6-41e9-4ff2-a75b-8fee9a93ca8e',
10-23 17:49:03.914 I/ReactNativeJS(18100):      'd29bae80-10e7-4d05-99d5-8dc43f61d814',
10-23 17:49:03.914 I/ReactNativeJS(18100):      'd7d8686d-95ee-4ce0-97da-ed89564b014b',
10-23 17:49:03.914 I/ReactNativeJS(18100):      '755a6269-1daf-4327-ab71-f65e3700bf1a',
10-23 17:49:03.914 I/ReactNativeJS(18100):      '500d07b9-07ca-40df-9d4a-3efcf677a117',
10-23 17:49:03.914 I/ReactNativeJS(18100):      'df4552cd-e9bc-4e40-a8a0-1270b37737db',
10-23 17:49:03.914 I/ReactNativeJS(18100):      'acb2b80a-267e-4b98-acd0-397461aee537',
10-23 17:49:03.914 I/ReactNativeJS(18100):      '60dbc0b5-662a-48af-b01a-55212f6ac6ea',
10-23 17:49:03.914 I/ReactNativeJS(18100):      '0f408121-1188-4550-9f50-919dcc8a4ed1',
10-23 17:49:03.914 I/ReactNativeJS(18100):      '23052592-9d19-442c-b40f-12b90c3da756',
10-23 17:49:03.914 I/ReactNativeJS(18100):      'c9ff3014-54e3-4b30-9f22-eceee292796b',
10-23 17:49:03.914 I/ReactNativeJS(18100):      '879d4bbd-20ad-4253-a1c6-ae7535e7c211',
10-23 17:49:03.914 I/ReactNativeJS(18100):      '286129cf-19e6-41fd-b52f-d17334d0d0f9',
10-23 17:49:03.914 I/ReactNativeJS(18100):      'b55ac709-48d5-4db2-8246-e23f9bd317ec',
10-23 17:49:03.914 I/ReactNativeJS(18100):      '92abe95d-e47d-48fa-8159-b119f5802710',
10-23 17:49:03.914 I/ReactNativeJS(18100):      '73ad244d-a00b-42a9-83e9-97932b9db2d2',
10-23 17:49:03.914 I/ReactNativeJS(18100):      '971613ac-8d86-4ab6-8fe5-49c528ca56ee',
10-23 17:49:03.914 I/ReactNativeJS(18100):      '49f0f7f9-03d6-4211-b47d-0e7738f190fa',
10-23 17:49:03.914 I/ReactNativeJS(18100):      '6a87c30d-c48d-458c-9b94-32dd5e75ac05',
10-23 17:49:03.914 I/ReactNativeJS(18100):      'aee0b7a7-9cb2-4f6b-b53f-fa47642319d0',
10-23 17:49:03.914 I/ReactNativeJS(18100):      '6c1d61c3-6cbd-4310-adfe-6d36bc611939',
10-23 17:49:03.914 I/ReactNativeJS(18100):      '9d9ab6e7-0357-4305-9ba8-e91c0bb29897',
10-23 17:49:03.914 I/ReactNativeJS(18100):      'd952183c-69a7-47dc-a848-d11bc2fff300',
10-23 17:49:03.914 I/ReactNativeJS(18100):      'a01d13a8-c95b-4bf1-b0e1-8b2a8e9aaa6b',
10-23 17:49:03.914 I/ReactNativeJS(18100):      '5a385bc8-147d-4ac2-834c-305ed9db9a05',
10-23 17:49:03.914 I/ReactNativeJS(18100):      'b9365ade-a3a4-4036-b42f-606b88d5fac9',
10-23 17:49:03.914 I/ReactNativeJS(18100):      'b6a2c6b6-bdb4-40ce-a092-25f6dd4ba953',
10-23 17:49:03.914 I/ReactNativeJS(18100):      'd850bf94-823f-497a-b292-075abf5b5a59',
10-23 17:49:03.914 I/ReactNativeJS(18100):      '5d8275c0-6692-44b3-a4ff-4eabba59873e',
10-23 17:49:03.914 I/ReactNativeJS(18100):      '5cfa0487-5d05-42e8-8e92-11a287b3ded0',
10-23 17:49:03.914 I/ReactNativeJS(18100):      '679ed79c-eb21-4609-a2b9-a1d304d4d4ad',
10-23 17:49:03.914 I/ReactNativeJS(18100):      '53bb9116-5f1d-445c-94e0-f2e3d9fa3ffe',
10-23 17:49:03.914 I/ReactNativeJS(18100):      '4196d3c8-e6dd-4a11-8d40-6771aa06de07',
10-23 17:49:03.914 I/ReactNativeJS(18100):      '8d21f749-083a-46d1-9f7e-f7dc5c36ef05',
10-23 17:49:03.914 I/ReactNativeJS(18100):      '0a371105-3196-4055-97ad-b230dba42df5',
10-23 17:49:03.914 I/ReactNativeJS(18100):      '9f010555-c90c-447e-83ae-919809ba8350',
10-23 17:49:03.914 I/ReactNativeJS(18100):      '84dd0357-20ec-4317-b7bd-7b31515219fb',
10-23 17:49:03.914 I/ReactNativeJS(18100):      'caaa4644-cefa-47e6-8c92-60415a52ef4b',
10-23 17:49:03.914 I/ReactNativeJS(18100):      'c6e2da1c-f900-47c8-b289-a88c28451f89',
10-23 17:49:03.914 I/ReactNativeJS(18100):      'c1a54517-80eb-451d-8fbb-26492459f1c4',
10-23 17:49:03.914 I/ReactNativeJS(18100):      'd3a69945-ed73-4db9-84db-77b1013c8fe2',
10-23 17:49:03.914 I/ReactNativeJS(18100):      '8de5daf3-1c41-4bc6-8e2c-c3873b443cbb',
10-23 17:49:03.914 I/ReactNativeJS(18100):      '93b3c278-21c8-4094-a13b-ae25cea5afa8',
10-23 17:49:03.914 I/ReactNativeJS(18100):      '057c85ff-f0f5-4a15-9e89-de6dc65465a2' ],
10-23 17:49:03.914 I/ReactNativeJS(18100):   tripCompletedNotificationIds: [],
10-23 17:49:03.914 I/ReactNativeJS(18100):   unreadTripCompletedNotificationIds: [] }
10-23 17:49:03.916 I/ReactNativeJS(18100): Γ£à [NOTIFICATIONS] ===== CHECKING FOR IMMEDIATE TRIP COMPLETION =====
10-23 17:49:03.916 I/ReactNativeJS(18100): Γ¥î [NOTIFICATIONS] No immediate trip completion notifications found
10-23 17:49:03.917 I/ReactNativeJS(18100): 'Γ¥î [NOTIFICATIONS] Available notification types:', [ 'ride_completed',
10-23 17:49:03.917 I/ReactNativeJS(18100):   'ride_status_changed',
10-23 17:49:03.917 I/ReactNativeJS(18100):   'ride_status_changed',
10-23 17:49:03.917 I/ReactNativeJS(18100):   'ride_status_changed',
10-23 17:49:03.917 I/ReactNativeJS(18100):   'ride_status_changed',
10-23 17:49:03.917 I/ReactNativeJS(18100):   'ride_status_changed',
10-23 17:49:03.917 I/ReactNativeJS(18100):   'ride_status_changed',
10-23 17:49:03.917 I/ReactNativeJS(18100):   'ride_status_changed',
10-23 17:49:03.917 I/ReactNativeJS(18100):   'ride_status_changed',
10-23 17:49:03.917 I/ReactNativeJS(18100):   'ride_status_changed',
10-23 17:49:03.917 I/ReactNativeJS(18100):   'ride_status_changed',
10-23 17:49:03.917 I/ReactNativeJS(18100):   'booking_completed',
10-23 17:49:03.917 I/ReactNativeJS(18100):   'booking_completed',
10-23 17:49:03.917 I/ReactNativeJS(18100):   'booking_completed',
10-23 17:49:03.917 I/ReactNativeJS(18100):   'booking_completed',
10-23 17:49:03.917 I/ReactNativeJS(18100):   'booking_completed',
10-23 17:49:03.917 I/ReactNativeJS(18100):   'ride_status_changed',
10-23 17:49:03.917 I/ReactNativeJS(18100):   'ride_status_changed',
10-23 17:49:03.917 I/ReactNativeJS(18100):   'ride_status_changed',
10-23 17:49:03.917 I/ReactNativeJS(18100):   'ride_completed',
10-23 17:49:03.917 I/ReactNativeJS(18100):   'ride_status_changed',
10-23 17:49:03.917 I/ReactNativeJS(18100):   'ride_status_changed',
10-23 17:49:03.917 I/ReactNativeJS(18100):   'ride_status_changed',
10-23 17:49:03.917 I/ReactNativeJS(18100):   'ride_completed',
10-23 17:49:03.917 I/ReactNativeJS(18100):   'ride_status_changed',
10-23 17:49:03.917 I/ReactNativeJS(18100):   'ride_status_changed',
10-23 17:49:03.917 I/ReactNativeJS(18100):   'ride_status_changed',
10-23 17:49:03.917 I/ReactNativeJS(18100):   'ride_status_changed',
10-23 17:49:03.917 I/ReactNativeJS(18100):   'ride_cancelled',
10-23 17:49:03.917 I/ReactNativeJS(18100):   'ride_status_changed',
10-23 17:49:03.917 I/ReactNativeJS(18100):   'ride_completed',
10-23 17:49:03.917 I/ReactNativeJS(18100):   'ride_status_changed',
10-23 17:49:03.917 I/ReactNativeJS(18100):   'ride_status_changed',
10-23 17:49:03.917 I/ReactNativeJS(18100):   'ride_status_changed',
10-23 17:49:03.917 I/ReactNativeJS(18100):   'ride_status_changed',
10-23 17:49:03.917 I/ReactNativeJS(18100):   'ride_completed',
10-23 17:49:03.917 I/ReactNativeJS(18100):   'ride_status_changed',
10-23 17:49:03.917 I/ReactNativeJS(18100):   'ride_status_changed',
10-23 17:49:03.917 I/ReactNativeJS(18100):   'ride_status_changed',
10-23 17:49:03.917 I/ReactNativeJS(18100):   'ride_status_changed',
10-23 17:49:03.917 I/ReactNativeJS(18100):   'ride_completed',
10-23 17:49:03.917 I/ReactNativeJS(18100):   'ride_status_changed',
10-23 17:49:03.917 I/ReactNativeJS(18100):   'ride_status_changed',
10-23 17:49:03.917 I/ReactNativeJS(18100):   'ride_status_changed',
10-23 17:49:03.917 I/ReactNativeJS(18100):   'ride_status_changed',
10-23 17:49:03.917 I/ReactNativeJS(18100):   'ride_status_changed',
10-23 17:49:03.917 I/ReactNativeJS(18100):   'ride_completed',
10-23 17:49:03.917 I/ReactNativeJS(18100):   'ride_status_changed',
10-23 17:49:03.917 I/ReactNativeJS(18100):   'ride_status_changed',
10-23 17:49:03.917 I/ReactNativeJS(18100):   'ride_status_changed' ]
10-23 17:49:03.917 I/ReactNativeJS(18100): 'Γ¥î [NOTIFICATIONS] Trip completed notifications (all statuses):', []
10-23 17:49:03.920 I/ReactNativeJS(18100): ≡ƒöö [BANNER_DEBUG] ===== NOTIFICATION BANNER EFFECT =====
10-23 17:49:03.920 I/ReactNativeJS(18100): '≡ƒöö [BANNER_DEBUG] Banner summary:', { totalNotifications: 50,
10-23 17:49:03.920 I/ReactNativeJS(18100):   currentlyVisible: false,
10-23 17:49:03.920 I/ReactNativeJS(18100):   currentNotification: undefined,
10-23 17:49:03.920 I/ReactNativeJS(18100):   shownNotificationsCount: 0,
10-23 17:49:03.920 I/ReactNativeJS(18100):   tripCompletedNotifications: 0,
10-23 17:49:03.920 I/ReactNativeJS(18100):   unreadTripCompleted: 0 }
10-23 17:49:03.921 I/ReactNativeJS(18100): ≡ƒô▒ [BANNER_DEBUG] ===== BANNER DISPLAY DECISION =====
10-23 17:49:03.922 I/ReactNativeJS(18100): 'Γ£à Fetched zones from database:', { count: 2,
10-23 17:49:03.922 I/ReactNativeJS(18100):   zones:
10-23 17:49:03.922 I/ReactNativeJS(18100):    [ { name: 'Inner Ring', city: 'Hosur', radius: 5.88 },
10-23 17:49:03.922 I/ReactNativeJS(18100):      { name: 'Outer Ring', city: 'Hosur', radius: 13 } ] }
10-23 17:49:03.923 I/ReactNativeJS(18100): 'Γ£à Loaded active zones:', 2
10-23 17:49:03.924 I/ReactNativeJS(18100): 'Γ£à Loaded', 6, 'fare configs from fare_matrix table:', [ { vehicle_type: 'hatchback', base_fare: 145, per_km_rate: 25 },
10-23 17:49:03.924 I/ReactNativeJS(18100):   { vehicle_type: 'hatchback_ac', base_fare: 167, per_km_rate: 27 },
10-23 17:49:03.924 I/ReactNativeJS(18100):   { vehicle_type: 'sedan', base_fare: 145, per_km_rate: 25 },
10-23 17:49:03.924 I/ReactNativeJS(18100):   { vehicle_type: 'sedan_ac', base_fare: 160, per_km_rate: 25 },
10-23 17:49:03.924 I/ReactNativeJS(18100):   { vehicle_type: 'suv', base_fare: 400, per_km_rate: 30 },
10-23 17:49:03.924 I/ReactNativeJS(18100):   { vehicle_type: 'suv_ac', base_fare: 1500, per_km_rate: 35 } ]
10-23 17:49:04.381 I/ReactNativeJS(18100): ≡ƒöì [NOTIFICATIONS] ===== DATABASE QUERY RESULT =====
10-23 17:49:04.383 I/ReactNativeJS(18100): '≡ƒöì [NOTIFICATIONS] Query result:', { hasError: false,
10-23 17:49:04.383 I/ReactNativeJS(18100):   errorMessage: undefined,
10-23 17:49:04.383 I/ReactNativeJS(18100):   errorCode: undefined,
10-23 17:49:04.383 I/ReactNativeJS(18100):   errorDetails: undefined,
10-23 17:49:04.383 I/ReactNativeJS(18100):   dataCount: 50,
10-23 17:49:04.383 I/ReactNativeJS(18100):   tripCompletedCount: 0,
10-23 17:49:04.383 I/ReactNativeJS(18100):   unreadTripCompletedCount: 0,
10-23 17:49:04.383 I/ReactNativeJS(18100):   allTypes:
10-23 17:49:04.383 I/ReactNativeJS(18100):    [ 'ride_completed',
10-23 17:49:04.383 I/ReactNativeJS(18100):      'ride_status_changed',
10-23 17:49:04.383 I/ReactNativeJS(18100):      'booking_completed',
10-23 17:49:04.383 I/ReactNativeJS(18100):      'ride_cancelled' ],
10-23 17:49:04.383 I/ReactNativeJS(18100):   recentNotifications:
10-23 17:49:04.383 I/ReactNativeJS(18100):    [ { id: 'c0930979-b31c-4f63-b636-2d97a731c792',
10-23 17:49:04.383 I/ReactNativeJS(18100):        type: 'ride_completed',
10-23 17:49:04.383 I/ReactNativeJS(18100):        status: 'read',
10-23 17:49:04.383 I/ReactNativeJS(18100):        title: 'Trip Completed',
10-23 17:49:04.383 I/ReactNativeJS(18100):        created_at: '2025-10-23T11:04:46.92906+00:00',
10-23 17:49:04.383 I/ReactNativeJS(18100):        age_seconds: 4457 },
10-23 17:49:04.383 I/ReactNativeJS(18100):      { id: '2012b652-4fe3-4c41-9df3-bc9d3186a24a',
10-23 17:49:04.383 I/ReactNativeJS(18100):        type: 'ride_status_changed',
10-23 17:49:04.383 I/ReactNativeJS(18100):        status: 'read',
10-23 17:49:04.383 I/ReactNativeJS(18100):        title: 'Ride Status Updated',
10-23 17:49:04.383 I/ReactNativeJS(18100):        created_at: '2025-10-23T11:04:46.92906+00:00',
10-23 17:49:04.383 I/ReactNativeJS(18100):        age_seconds: 4457 },
10-23 17:49:04.383 I/ReactNativeJS(18100):      { id: '61a74f93-5643-46ef-8ebb-56d7ed81f675',
10-23 17:49:04.383 I/ReactNativeJS(18100):        type: 'ride_status_changed',
10-23 17:49:04.383 I/ReactNativeJS(18100):        status: 'read',
10-23 17:49:04.383 I/ReactNativeJS(18100):        title: 'Ride Status Updated',
10-23 17:49:04.383 I/ReactNativeJS(18100):        created_at: '2025-10-23T10:43:16.126619+00:00',
10-23 17:49:04.383 I/ReactNativeJS(18100):        age_seconds: 5748 },
10-23 17:49:04.383 I/ReactNativeJS(18100):      { id: 'e75df879-8cb8-4dee-8100-8dd61f99b26e',
10-23 17:49:04.383 I/ReactNativeJS(18100):        type: 'ride_status_changed',
10-23 17:49:04.383 I/ReactNativeJS(18100):        status: 'read',
10-23 17:49:04.383 I/ReactNativeJS(18100):        title: 'Ride Status Updated',
10-23 17:49:04.383 I/ReactNativeJS(18100):        created_at: '2025-10-23T10:42:44.627741+00:00',
10-23 17:49:04.383 I/ReactNativeJS(18100):        age_seconds: 5780 },
10-23 17:49:04.383 I/ReactNativeJS(18100):      { id: '55a746c6-9b8c-44e6-b80c-2beac586c467',
10-23 17:49:04.383 I/ReactNativeJS(18100):        type: 'ride_status_changed',
10-23 17:49:04.383 I/ReactNativeJS(18100):        status: 'read',
10-23 17:49:04.383 I/ReactNativeJS(18100):        title: 'Ride Status Updated',
10-23 17:49:04.383 I/ReactNativeJS(18100):        created_at: '2025-10-23T10:40:18.79365+00:00',
10-23 17:49:04.383 I/ReactNativeJS(18100):        age_seconds: 5926 } ] }
10-23 17:49:04.383 I/ReactNativeJS(18100): Γ£à [NOTIFICATIONS] ===== SETTING NOTIFICATIONS IN STATE =====
10-23 17:49:04.385 I/ReactNativeJS(18100): 'Γ£à [NOTIFICATIONS] Notifications to set:', { total: 50,
10-23 17:49:04.385 I/ReactNativeJS(18100):   tripCompleted: 0,
10-23 17:49:04.385 I/ReactNativeJS(18100):   unreadTripCompleted: 0,
10-23 17:49:04.385 I/ReactNativeJS(18100):   allNotificationIds:
10-23 17:49:04.385 I/ReactNativeJS(18100):    [ 'c0930979-b31c-4f63-b636-2d97a731c792',
10-23 17:49:04.385 I/ReactNativeJS(18100):      '2012b652-4fe3-4c41-9df3-bc9d3186a24a',
10-23 17:49:04.385 I/ReactNativeJS(18100):      '61a74f93-5643-46ef-8ebb-56d7ed81f675',
10-23 17:49:04.385 I/ReactNativeJS(18100):      'e75df879-8cb8-4dee-8100-8dd61f99b26e',
10-23 17:49:04.385 I/ReactNativeJS(18100):      '55a746c6-9b8c-44e6-b80c-2beac586c467',
10-23 17:49:04.385 I/ReactNativeJS(18100):      '7c3cc3c7-e9b6-4cf8-91bb-1bb827ff7808',
10-23 17:49:04.385 I/ReactNativeJS(18100):      '8012a1d6-41e9-4ff2-a75b-8fee9a93ca8e',
10-23 17:49:04.385 I/ReactNativeJS(18100):      'd29bae80-10e7-4d05-99d5-8dc43f61d814',
10-23 17:49:04.385 I/ReactNativeJS(18100):      'd7d8686d-95ee-4ce0-97da-ed89564b014b',
10-23 17:49:04.385 I/ReactNativeJS(18100):      '755a6269-1daf-4327-ab71-f65e3700bf1a',
10-23 17:49:04.385 I/ReactNativeJS(18100):      '500d07b9-07ca-40df-9d4a-3efcf677a117',
10-23 17:49:04.385 I/ReactNativeJS(18100):      'df4552cd-e9bc-4e40-a8a0-1270b37737db',
10-23 17:49:04.385 I/ReactNativeJS(18100):      'acb2b80a-267e-4b98-acd0-397461aee537',
10-23 17:49:04.385 I/ReactNativeJS(18100):      '60dbc0b5-662a-48af-b01a-55212f6ac6ea',
10-23 17:49:04.385 I/ReactNativeJS(18100):      '0f408121-1188-4550-9f50-919dcc8a4ed1',
10-23 17:49:04.385 I/ReactNativeJS(18100):      '23052592-9d19-442c-b40f-12b90c3da756',
10-23 17:49:04.385 I/ReactNativeJS(18100):      'c9ff3014-54e3-4b30-9f22-eceee292796b',
10-23 17:49:04.385 I/ReactNativeJS(18100):      '879d4bbd-20ad-4253-a1c6-ae7535e7c211',
10-23 17:49:04.385 I/ReactNativeJS(18100):      '286129cf-19e6-41fd-b52f-d17334d0d0f9',
10-23 17:49:04.385 I/ReactNativeJS(18100):      'b55ac709-48d5-4db2-8246-e23f9bd317ec',
10-23 17:49:04.385 I/ReactNativeJS(18100):      '92abe95d-e47d-48fa-8159-b119f5802710',
10-23 17:49:04.385 I/ReactNativeJS(18100):      '73ad244d-a00b-42a9-83e9-97932b9db2d2',
10-23 17:49:04.385 I/ReactNativeJS(18100):      '971613ac-8d86-4ab6-8fe5-49c528ca56ee',
10-23 17:49:04.385 I/ReactNativeJS(18100):      '49f0f7f9-03d6-4211-b47d-0e7738f190fa',
10-23 17:49:04.385 I/ReactNativeJS(18100):      '6a87c30d-c48d-458c-9b94-32dd5e75ac05',
10-23 17:49:04.385 I/ReactNativeJS(18100):      'aee0b7a7-9cb2-4f6b-b53f-fa47642319d0',
10-23 17:49:04.385 I/ReactNativeJS(18100):      '6c1d61c3-6cbd-4310-adfe-6d36bc611939',
10-23 17:49:04.385 I/ReactNativeJS(18100):      '9d9ab6e7-0357-4305-9ba8-e91c0bb29897',
10-23 17:49:04.385 I/ReactNativeJS(18100):      'd952183c-69a7-47dc-a848-d11bc2fff300',
10-23 17:49:04.385 I/ReactNativeJS(18100):      'a01d13a8-c95b-4bf1-b0e1-8b2a8e9aaa6b',
10-23 17:49:04.385 I/ReactNativeJS(18100):      '5a385bc8-147d-4ac2-834c-305ed9db9a05',
10-23 17:49:04.385 I/ReactNativeJS(18100):      'b9365ade-a3a4-4036-b42f-606b88d5fac9',
10-23 17:49:04.385 I/ReactNativeJS(18100):      'b6a2c6b6-bdb4-40ce-a092-25f6dd4ba953',
10-23 17:49:04.385 I/ReactNativeJS(18100):      'd850bf94-823f-497a-b292-075abf5b5a59',
10-23 17:49:04.385 I/ReactNativeJS(18100):      '5d8275c0-6692-44b3-a4ff-4eabba59873e',
10-23 17:49:04.385 I/ReactNativeJS(18100):      '5cfa0487-5d05-42e8-8e92-11a287b3ded0',
10-23 17:49:04.385 I/ReactNativeJS(18100):      '679ed79c-eb21-4609-a2b9-a1d304d4d4ad',
10-23 17:49:04.385 I/ReactNativeJS(18100):      '53bb9116-5f1d-445c-94e0-f2e3d9fa3ffe',
10-23 17:49:04.385 I/ReactNativeJS(18100):      '4196d3c8-e6dd-4a11-8d40-6771aa06de07',
10-23 17:49:04.385 I/ReactNativeJS(18100):      '8d21f749-083a-46d1-9f7e-f7dc5c36ef05',
10-23 17:49:04.385 I/ReactNativeJS(18100):      '0a371105-3196-4055-97ad-b230dba42df5',
10-23 17:49:04.385 I/ReactNativeJS(18100):      '9f010555-c90c-447e-83ae-919809ba8350',
10-23 17:49:04.385 I/ReactNativeJS(18100):      '84dd0357-20ec-4317-b7bd-7b31515219fb',
10-23 17:49:04.385 I/ReactNativeJS(18100):      'caaa4644-cefa-47e6-8c92-60415a52ef4b',
10-23 17:49:04.385 I/ReactNativeJS(18100):      'c6e2da1c-f900-47c8-b289-a88c28451f89',
10-23 17:49:04.385 I/ReactNativeJS(18100):      'c1a54517-80eb-451d-8fbb-26492459f1c4',
10-23 17:49:04.385 I/ReactNativeJS(18100):      'd3a69945-ed73-4db9-84db-77b1013c8fe2',
10-23 17:49:04.385 I/ReactNativeJS(18100):      '8de5daf3-1c41-4bc6-8e2c-c3873b443cbb',
10-23 17:49:04.385 I/ReactNativeJS(18100):      '93b3c278-21c8-4094-a13b-ae25cea5afa8',
10-23 17:49:04.385 I/ReactNativeJS(18100):      '057c85ff-f0f5-4a15-9e89-de6dc65465a2' ],
10-23 17:49:04.385 I/ReactNativeJS(18100):   tripCompletedNotificationIds: [],
10-23 17:49:04.385 I/ReactNativeJS(18100):   unreadTripCompletedNotificationIds: [] }
10-23 17:49:04.387 I/ReactNativeJS(18100): Γ£à [NOTIFICATIONS] ===== CHECKING FOR IMMEDIATE TRIP COMPLETION =====
10-23 17:49:04.387 I/ReactNativeJS(18100): Γ¥î [NOTIFICATIONS] No immediate trip completion notifications found
10-23 17:49:04.388 I/ReactNativeJS(18100): 'Γ¥î [NOTIFICATIONS] Available notification types:', [ 'ride_completed',
10-23 17:49:04.388 I/ReactNativeJS(18100):   'ride_status_changed',
10-23 17:49:04.388 I/ReactNativeJS(18100):   'ride_status_changed',
10-23 17:49:04.388 I/ReactNativeJS(18100):   'ride_status_changed',
10-23 17:49:04.388 I/ReactNativeJS(18100):   'ride_status_changed',
10-23 17:49:04.388 I/ReactNativeJS(18100):   'ride_status_changed',
10-23 17:49:04.388 I/ReactNativeJS(18100):   'ride_status_changed',
10-23 17:49:04.388 I/ReactNativeJS(18100):   'ride_status_changed',
10-23 17:49:04.388 I/ReactNativeJS(18100):   'ride_status_changed',
10-23 17:49:04.388 I/ReactNativeJS(18100):   'ride_status_changed',
10-23 17:49:04.388 I/ReactNativeJS(18100):   'ride_status_changed',
10-23 17:49:04.388 I/ReactNativeJS(18100):   'booking_completed',
10-23 17:49:04.388 I/ReactNativeJS(18100):   'booking_completed',
10-23 17:49:04.388 I/ReactNativeJS(18100):   'booking_completed',
10-23 17:49:04.388 I/ReactNativeJS(18100):   'booking_completed',
10-23 17:49:04.388 I/ReactNativeJS(18100):   'booking_completed',
10-23 17:49:04.388 I/ReactNativeJS(18100):   'ride_status_changed',
10-23 17:49:04.388 I/ReactNativeJS(18100):   'ride_status_changed',
10-23 17:49:04.388 I/ReactNativeJS(18100):   'ride_status_changed',
10-23 17:49:04.388 I/ReactNativeJS(18100):   'ride_completed',
10-23 17:49:04.388 I/ReactNativeJS(18100):   'ride_status_changed',
10-23 17:49:04.388 I/ReactNativeJS(18100):   'ride_status_changed',
10-23 17:49:04.388 I/ReactNativeJS(18100):   'ride_status_changed',
10-23 17:49:04.388 I/ReactNativeJS(18100):   'ride_completed',
10-23 17:49:04.388 I/ReactNativeJS(18100):   'ride_status_changed',
10-23 17:49:04.388 I/ReactNativeJS(18100):   'ride_status_changed',
10-23 17:49:04.388 I/ReactNativeJS(18100):   'ride_status_changed',
10-23 17:49:04.388 I/ReactNativeJS(18100):   'ride_status_changed',
10-23 17:49:04.388 I/ReactNativeJS(18100):   'ride_cancelled',
10-23 17:49:04.388 I/ReactNativeJS(18100):   'ride_status_changed',
10-23 17:49:04.388 I/ReactNativeJS(18100):   'ride_completed',
10-23 17:49:04.388 I/ReactNativeJS(18100):   'ride_status_changed',
10-23 17:49:04.388 I/ReactNativeJS(18100):   'ride_status_changed',
10-23 17:49:04.388 I/ReactNativeJS(18100):   'ride_status_changed',
10-23 17:49:04.388 I/ReactNativeJS(18100):   'ride_status_changed',
10-23 17:49:04.388 I/ReactNativeJS(18100):   'ride_completed',
10-23 17:49:04.388 I/ReactNativeJS(18100):   'ride_status_changed',
10-23 17:49:04.388 I/ReactNativeJS(18100):   'ride_status_changed',
10-23 17:49:04.388 I/ReactNativeJS(18100):   'ride_status_changed',
10-23 17:49:04.388 I/ReactNativeJS(18100):   'ride_status_changed',
10-23 17:49:04.388 I/ReactNativeJS(18100):   'ride_completed',
10-23 17:49:04.388 I/ReactNativeJS(18100):   'ride_status_changed',
10-23 17:49:04.388 I/ReactNativeJS(18100):   'ride_status_changed',
10-23 17:49:04.388 I/ReactNativeJS(18100):   'ride_status_changed',
10-23 17:49:04.388 I/ReactNativeJS(18100):   'ride_status_changed',
10-23 17:49:04.388 I/ReactNativeJS(18100):   'ride_status_changed',
10-23 17:49:04.388 I/ReactNativeJS(18100):   'ride_completed',
10-23 17:49:04.388 I/ReactNativeJS(18100):   'ride_status_changed',
10-23 17:49:04.388 I/ReactNativeJS(18100):   'ride_status_changed',
10-23 17:49:04.388 I/ReactNativeJS(18100):   'ride_status_changed' ]
10-23 17:49:04.389 I/ReactNativeJS(18100): 'Γ¥î [NOTIFICATIONS] Trip completed notifications (all statuses):', []
10-23 17:49:04.449 I/ReactNativeJS(18100): 'Γ£à Proxy response received:', 'OK'
10-23 17:49:04.450 I/ReactNativeJS(18100): 'Γ£à Geocoded address:', 'PRXJ+F32, Brindavan Nagar, Plot 87, NGGO\'s Colony, Anand Nagar, Hosur, Tamil Nadu 635109, India'
10-23 17:49:04.450 I/ReactNativeJS(18100): 'Γ£à Geocoded address:', 'PRXJ+F32, Brindavan Nagar, Plot 87, NGGO\'s Colony, Anand Nagar, Hosur, Tamil Nadu 635109, India'
10-23 17:49:04.450 I/ReactNativeJS(18100): '≡ƒÅá Enhanced Location Service: Got address:', 'PRXJ+F32, Brindavan Nagar, Plot 87, NGGO\'s Colony, Anand Nagar, Hosur, Tamil Nadu 635109, India'
10-23 17:49:04.451 I/ReactNativeJS(18100): 'Γ£à [HOME] Location obtained:', { lat: 12.7486283,
10-23 17:49:04.451 I/ReactNativeJS(18100):   lng: 77.8299733,
10-23 17:49:04.451 I/ReactNativeJS(18100):   address: 'PRXJ+F32, Brindavan Nagar, Plot 87, NGGO\'s Colony, Anand Nagar, Hosur, Tamil Nadu 635109, India' }
10-23 17:49:04.453 I/ReactNativeJS(18100): ≡ƒÜù [HOME] ===== STARTING IMMEDIATE DRIVER DISPLAY =====
10-23 17:49:04.453 I/ReactNativeJS(18100): ≡ƒÜù [HOME] Current location available, showing drivers immediately
10-23 17:49:04.453 I/ReactNativeJS(18100): '≡ƒÜù [HOME] Location details:', { latitude: 12.7486283, longitude: 77.8299733, accuracy: 2 }
10-23 17:49:04.453 I/ReactNativeJS(18100): ≡ƒÜù [HOME] Showing ALL vehicle types (no filter applied)
10-23 17:49:04.454 I/ReactNativeJS(18100): '≡ƒÜù [HOME] Should show drivers on map:', true
10-23 17:49:04.454 I/ReactNativeJS(18100): '≡ƒöä [HOME] Starting driver location polling with:', { currentLocation: { latitude: 12.7486283, longitude: 77.8299733 },
10-23 17:49:04.454 I/ReactNativeJS(18100):   vehicleType: 'sedan',
10-23 17:49:04.454 I/ReactNativeJS(18100):   radius: 10 }
10-23 17:49:04.454 I/ReactNativeJS(18100): ≡ƒ¢æ [HOME] Stopping driver location polling
10-23 17:49:04.454 I/ReactNativeJS(18100): '≡ƒöä [DRIVER-SERVICE] Starting driver location polling every', 10, 'seconds'
10-23 17:49:04.454 I/ReactNativeJS(18100): '≡ƒöä [DRIVER-SERVICE] Polling parameters:', { customerLocation: { lat: 12.7486283, lng: 77.8299733 },
10-23 17:49:04.454 I/ReactNativeJS(18100):   vehicleType: 'all',
10-23 17:49:04.454 I/ReactNativeJS(18100):   interval: '10000ms' }
10-23 17:49:04.454 I/ReactNativeJS(18100): '≡ƒù║∩╕Å [DRIVER-SERVICE] Fetching available drivers via edge function:', { location: { lat: 12.7486283, lng: 77.8299733 },
10-23 17:49:04.454 I/ReactNativeJS(18100):   radius: '10km',
10-23 17:49:04.454 I/ReactNativeJS(18100):   vehicleType: 'all',
10-23 17:49:04.454 I/ReactNativeJS(18100):   timestamp: '2025-10-23T12:19:04.454Z' }
10-23 17:49:04.455 I/ReactNativeJS(18100): '≡ƒîÉ [DRIVER-SERVICE] Constructed Edge Function URL:', 'https://whubaypabojomdyfqxcf.supabase.co/functions/v1/get-drivers-with-locations?lat=12.7486283&lng=77.8299733&radius=10'
10-23 17:49:04.459 I/ReactNativeJS(18100): ≡ƒÜù [HOME] ===== SHOWING DRIVERS AGAIN =====
10-23 17:49:04.459 I/ReactNativeJS(18100): ≡ƒÜù [HOME] Not both locations selected, showing drivers on map
10-23 17:49:04.459 I/ReactNativeJS(18100): '≡ƒÜù [HOME] Pickup coords:', true, 'Destination coords:', false
10-23 17:49:04.459 I/ReactNativeJS(18100): '≡ƒöä [HOME] Starting driver location polling with:', { currentLocation: { latitude: 12.7486283, longitude: 77.8299733 },
10-23 17:49:04.459 I/ReactNativeJS(18100):   vehicleType: 'sedan',
10-23 17:49:04.459 I/ReactNativeJS(18100):   radius: 10 }
10-23 17:49:04.459 I/ReactNativeJS(18100): ≡ƒ¢æ [HOME] Stopping driver location polling
10-23 17:49:04.459 I/ReactNativeJS(18100): ≡ƒ¢æ [DRIVER-SERVICE] Stopped driver location polling
10-23 17:49:04.459 I/ReactNativeJS(18100): '≡ƒöä [DRIVER-SERVICE] Starting driver location polling every', 10, 'seconds'
10-23 17:49:04.460 I/ReactNativeJS(18100): '≡ƒöä [DRIVER-SERVICE] Polling parameters:', { customerLocation: { lat: 12.7486283, lng: 77.8299733 },
10-23 17:49:04.460 I/ReactNativeJS(18100):   vehicleType: 'all',
10-23 17:49:04.460 I/ReactNativeJS(18100):   interval: '10000ms' }
10-23 17:49:04.460 I/ReactNativeJS(18100): '≡ƒù║∩╕Å [DRIVER-SERVICE] Fetching available drivers via edge function:', { location: { lat: 12.7486283, lng: 77.8299733 },
10-23 17:49:04.460 I/ReactNativeJS(18100):   radius: '10km',
10-23 17:49:04.460 I/ReactNativeJS(18100):   vehicleType: 'all',
10-23 17:49:04.460 I/ReactNativeJS(18100):   timestamp: '2025-10-23T12:19:04.460Z' }
10-23 17:49:04.460 I/ReactNativeJS(18100): '≡ƒîÉ [DRIVER-SERVICE] Constructed Edge Function URL:', 'https://whubaypabojomdyfqxcf.supabase.co/functions/v1/get-drivers-with-locations?lat=12.7486283&lng=77.8299733&radius=10'
10-23 17:49:04.462 I/ReactNativeJS(18100): Γ£à [HOME] Location state updated successfully
10-23 17:49:04.463 W/ReactNativeJS(18100): ≡ƒÅá [HOME] ===== RENDERING HOME SCREEN =====
10-23 17:49:04.463 W/ReactNativeJS(18100): '≡ƒÅá [HOME] currentLocation:', '{"latitude":12.7486283,"longitude":77.8299733,"altitude":771.7999877929688,"accuracy":2,"altitudeAccuracy":null,"heading":null,"speed":null}'
10-23 17:49:04.463 W/ReactNativeJS(18100): '≡ƒÅá [HOME] pickupCoords:', '{"latitude":12.7486283,"longitude":77.8299733}'
10-23 17:49:04.463 W/ReactNativeJS(18100): '≡ƒÅá [HOME] destinationCoords:', 'null'
10-23 17:49:04.463 W/ReactNativeJS(18100): '≡ƒÅá [HOME] pickupLocation text:', 'PRXJ+F32, Brindavan Nagar, Plot 87, NGGO\'s Colony, Anand Nagar, Hosur, Tamil Nadu 635109, India'
10-23 17:49:04.463 W/ReactNativeJS(18100): '≡ƒÅá [HOME] availableDrivers count:', 0
10-23 17:49:04.463 W/ReactNativeJS(18100): '≡ƒÅá [HOME] showDriversOnMap:', true
10-23 17:49:04.463 I/ReactNativeJS(18100): '≡ƒÅá≡ƒÅá≡ƒÅá [HOME-V2] ABOUT TO RENDER SimpleHosurMap with props:', { hasUserLocation: true,
10-23 17:49:04.463 I/ReactNativeJS(18100):   hasPickup: true,
10-23 17:49:04.463 I/ReactNativeJS(18100):   hasDestination: false,
10-23 17:49:04.463 I/ReactNativeJS(18100):   showDriversOnMap: true,
10-23 17:49:04.463 I/ReactNativeJS(18100):   timestamp: '2025-10-23T12:19:04.463Z' }
10-23 17:49:04.463 I/ReactNativeJS(18100): ≡ƒº¬≡ƒº¬≡ƒº¬ TEST MAP RENDERING NOW
10-23 17:49:04.464 I/ReactNativeJS(18100): '≡ƒº¬ Props received:', [ 'userLocation',
10-23 17:49:04.464 I/ReactNativeJS(18100):   'pickupLocation',
10-23 17:49:04.464 I/ReactNativeJS(18100):   'destinationLocation',
10-23 17:49:04.464 I/ReactNativeJS(18100):   'onRegionChangeComplete',
10-23 17:49:04.464 I/ReactNativeJS(18100):   'onDestinationDragEnd',
10-23 17:49:04.464 I/ReactNativeJS(18100):   'showCenteredPin',
10-23 17:49:04.464 I/ReactNativeJS(18100):   'availableDrivers',
10-23 17:49:04.464 I/ReactNativeJS(18100):   'showDrivers' ]
10-23 17:49:04.479 I/ReactNativeJS(18100): ≡ƒôì [HOME] Location loading state set to false
10-23 17:49:04.527 I/ReactNativeJS(18100): ≡ƒôì [GPS] Starting live GPS tracking (Uber-style)...
10-23 17:49:04.531 W/ReactNativeJS(18100): ≡ƒÅá [HOME] ===== RENDERING HOME SCREEN =====
10-23 17:49:04.532 W/ReactNativeJS(18100): '≡ƒÅá [HOME] currentLocation:', '{"latitude":12.7486283,"longitude":77.8299733,"altitude":771.7999877929688,"accuracy":2,"altitudeAccuracy":null,"heading":null,"speed":null}'
10-23 17:49:04.532 W/ReactNativeJS(18100): '≡ƒÅá [HOME] pickupCoords:', '{"latitude":12.7486283,"longitude":77.8299733}'
10-23 17:49:04.532 W/ReactNativeJS(18100): '≡ƒÅá [HOME] destinationCoords:', 'null'
10-23 17:49:04.532 W/ReactNativeJS(18100): '≡ƒÅá [HOME] pickupLocation text:', 'PRXJ+F32, Brindavan Nagar, Plot 87, NGGO\'s Colony, Anand Nagar, Hosur, Tamil Nadu 635109, India'
10-23 17:49:04.532 W/ReactNativeJS(18100): '≡ƒÅá [HOME] availableDrivers count:', 0
10-23 17:49:04.532 W/ReactNativeJS(18100): '≡ƒÅá [HOME] showDriversOnMap:', true
10-23 17:49:04.532 I/ReactNativeJS(18100): '≡ƒÅá≡ƒÅá≡ƒÅá [HOME-V2] ABOUT TO RENDER SimpleHosurMap with props:', { hasUserLocation: true,
10-23 17:49:04.532 I/ReactNativeJS(18100):   hasPickup: true,
10-23 17:49:04.532 I/ReactNativeJS(18100):   hasDestination: false,
10-23 17:49:04.532 I/ReactNativeJS(18100):   showDriversOnMap: true,
10-23 17:49:04.532 I/ReactNativeJS(18100):   timestamp: '2025-10-23T12:19:04.532Z' }
10-23 17:49:04.532 I/ReactNativeJS(18100): ≡ƒº¬≡ƒº¬≡ƒº¬ TEST MAP RENDERING NOW
10-23 17:49:04.532 I/ReactNativeJS(18100): '≡ƒº¬ Props received:', [ 'userLocation',
10-23 17:49:04.532 I/ReactNativeJS(18100):   'pickupLocation',
10-23 17:49:04.532 I/ReactNativeJS(18100):   'destinationLocation',
10-23 17:49:04.532 I/ReactNativeJS(18100):   'onRegionChangeComplete',
10-23 17:49:04.532 I/ReactNativeJS(18100):   'onDestinationDragEnd',
10-23 17:49:04.532 I/ReactNativeJS(18100):   'showCenteredPin',
10-23 17:49:04.532 I/ReactNativeJS(18100):   'availableDrivers',
10-23 17:49:04.532 I/ReactNativeJS(18100):   'showDrivers' ]
10-23 17:49:04.541 I/ReactNativeJS(18100): Γ£à [GPS] Live GPS tracking started successfully
10-23 17:49:04.548 I/ReactNativeJS(18100): '≡ƒôì [GPS] Live location update:', { lat: '12.748628', lng: '77.829973', accuracy: '2.03m' }
10-23 17:49:04.549 W/ReactNativeJS(18100): ≡ƒÅá [HOME] ===== RENDERING HOME SCREEN =====
10-23 17:49:04.549 W/ReactNativeJS(18100): '≡ƒÅá [HOME] currentLocation:', '{"altitude":771.7999877929688,"heading":0,"altitudeAccuracy":1.3601199388504028,"latitude":12.7486283,"speed":6.911815319374692e-17,"longitude":77.8299733,"accuracy":2.0250000953674316}'
10-23 17:49:04.549 W/ReactNativeJS(18100): '≡ƒÅá [HOME] pickupCoords:', '{"latitude":12.7486283,"longitude":77.8299733}'
10-23 17:49:04.549 W/ReactNativeJS(18100): '≡ƒÅá [HOME] destinationCoords:', 'null'
10-23 17:49:04.549 W/ReactNativeJS(18100): '≡ƒÅá [HOME] pickupLocation text:', 'PRXJ+F32, Brindavan Nagar, Plot 87, NGGO\'s Colony, Anand Nagar, Hosur, Tamil Nadu 635109, India'
10-23 17:49:04.549 W/ReactNativeJS(18100): '≡ƒÅá [HOME] availableDrivers count:', 0
10-23 17:49:04.549 W/ReactNativeJS(18100): '≡ƒÅá [HOME] showDriversOnMap:', true
10-23 17:49:04.550 I/ReactNativeJS(18100): '≡ƒÅá≡ƒÅá≡ƒÅá [HOME-V2] ABOUT TO RENDER SimpleHosurMap with props:', { hasUserLocation: true,
10-23 17:49:04.550 I/ReactNativeJS(18100):   hasPickup: true,
10-23 17:49:04.550 I/ReactNativeJS(18100):   hasDestination: false,
10-23 17:49:04.550 I/ReactNativeJS(18100):   showDriversOnMap: true,
10-23 17:49:04.550 I/ReactNativeJS(18100):   timestamp: '2025-10-23T12:19:04.549Z' }
10-23 17:49:04.550 I/ReactNativeJS(18100): ≡ƒº¬≡ƒº¬≡ƒº¬ TEST MAP RENDERING NOW
10-23 17:49:04.550 I/ReactNativeJS(18100): '≡ƒº¬ Props received:', [ 'userLocation',
10-23 17:49:04.550 I/ReactNativeJS(18100):   'pickupLocation',
10-23 17:49:04.550 I/ReactNativeJS(18100):   'destinationLocation',
10-23 17:49:04.550 I/ReactNativeJS(18100):   'onRegionChangeComplete',
10-23 17:49:04.550 I/ReactNativeJS(18100):   'onDestinationDragEnd',
10-23 17:49:04.550 I/ReactNativeJS(18100):   'showCenteredPin',
10-23 17:49:04.550 I/ReactNativeJS(18100):   'availableDrivers',
10-23 17:49:04.550 I/ReactNativeJS(18100):   'showDrivers' ]
10-23 17:49:04.559 I/ReactNativeJS(18100): ≡ƒÜù [HOME] ===== STARTING IMMEDIATE DRIVER DISPLAY =====
10-23 17:49:04.559 I/ReactNativeJS(18100): ≡ƒÜù [HOME] Current location available, showing drivers immediately
10-23 17:49:04.559 I/ReactNativeJS(18100): '≡ƒÜù [HOME] Location details:', { latitude: 12.7486283,
10-23 17:49:04.559 I/ReactNativeJS(18100):   longitude: 77.8299733,
10-23 17:49:04.559 I/ReactNativeJS(18100):   accuracy: 2.0250000953674316 }
10-23 17:49:04.559 I/ReactNativeJS(18100): ≡ƒÜù [HOME] Showing ALL vehicle types (no filter applied)
10-23 17:49:04.559 I/ReactNativeJS(18100): '≡ƒÜù [HOME] Should show drivers on map:', true
10-23 17:49:04.559 I/ReactNativeJS(18100): '≡ƒöä [HOME] Starting driver location polling with:', { currentLocation: { latitude: 12.7486283, longitude: 77.8299733 },
10-23 17:49:04.559 I/ReactNativeJS(18100):   vehicleType: 'sedan',
10-23 17:49:04.559 I/ReactNativeJS(18100):   radius: 10 }
10-23 17:49:04.559 I/ReactNativeJS(18100): ≡ƒ¢æ [HOME] Stopping driver location polling
10-23 17:49:04.559 I/ReactNativeJS(18100): ≡ƒ¢æ [DRIVER-SERVICE] Stopped driver location polling
10-23 17:49:04.559 I/ReactNativeJS(18100): '≡ƒöä [DRIVER-SERVICE] Starting driver location polling every', 10, 'seconds'
10-23 17:49:04.560 I/ReactNativeJS(18100): '≡ƒöä [DRIVER-SERVICE] Polling parameters:', { customerLocation: { lat: 12.7486283, lng: 77.8299733 },
10-23 17:49:04.560 I/ReactNativeJS(18100):   vehicleType: 'all',
10-23 17:49:04.560 I/ReactNativeJS(18100):   interval: '10000ms' }
10-23 17:49:04.560 I/ReactNativeJS(18100): '≡ƒù║∩╕Å [DRIVER-SERVICE] Fetching available drivers via edge function:', { location: { lat: 12.7486283, lng: 77.8299733 },
10-23 17:49:04.560 I/ReactNativeJS(18100):   radius: '10km',
10-23 17:49:04.560 I/ReactNativeJS(18100):   vehicleType: 'all',
10-23 17:49:04.560 I/ReactNativeJS(18100):   timestamp: '2025-10-23T12:19:04.560Z' }
10-23 17:49:04.560 I/ReactNativeJS(18100): '≡ƒîÉ [DRIVER-SERVICE] Constructed Edge Function URL:', 'https://whubaypabojomdyfqxcf.supabase.co/functions/v1/get-drivers-with-locations?lat=12.7486283&lng=77.8299733&radius=10'
10-23 17:49:04.818 W/ReactNativeJS(18100): 'ΓÜá∩╕Å [DRIVER-SERVICE] Edge function failed, using direct database access:', 'Edge function failed: 500 - {"code":"WORKER_ERROR","message":"Function exited due to an error (please check logs)"}'
10-23 17:49:04.818 I/ReactNativeJS(18100): ≡ƒöì [DRIVER-SERVICE] ===== USING DIRECT DATABASE ACCESS =====
10-23 17:49:04.819 I/ReactNativeJS(18100): '≡ƒöì [DRIVER-SERVICE] Parameters:', { customerLocation: { lat: 12.7486283, lng: 77.8299733 },
10-23 17:49:04.819 I/ReactNativeJS(18100):   radius: '10km',
10-23 17:49:04.819 I/ReactNativeJS(18100):   vehicleType: 'all' }
10-23 17:49:04.819 I/ReactNativeJS(18100): ≡ƒôè [DRIVER-SERVICE] Step 1: Fetching online verified drivers...
10-23 17:49:04.878 W/ReactNativeJS(18100): 'ΓÜá∩╕Å [DRIVER-SERVICE] Edge function failed, using direct database access:', 'Edge function failed: 500 - {"code":"WORKER_ERROR","message":"Function exited due to an error (please check logs)"}'
10-23 17:49:04.878 I/ReactNativeJS(18100): ≡ƒöì [DRIVER-SERVICE] ===== USING DIRECT DATABASE ACCESS =====
10-23 17:49:04.879 I/ReactNativeJS(18100): '≡ƒöì [DRIVER-SERVICE] Parameters:', { customerLocation: { lat: 12.7486283, lng: 77.8299733 },
10-23 17:49:04.879 I/ReactNativeJS(18100):   radius: '10km',
10-23 17:49:04.879 I/ReactNativeJS(18100):   vehicleType: 'all' }
10-23 17:49:04.879 I/ReactNativeJS(18100): ≡ƒôè [DRIVER-SERVICE] Step 1: Fetching online verified drivers...
10-23 17:49:04.956 W/ReactNativeJS(18100): 'ΓÜá∩╕Å [DRIVER-SERVICE] Edge function failed, using direct database access:', 'Edge function failed: 500 - {"code":"WORKER_ERROR","message":"Function exited due to an error (please check logs)"}'
10-23 17:49:04.956 I/ReactNativeJS(18100): ≡ƒöì [DRIVER-SERVICE] ===== USING DIRECT DATABASE ACCESS =====
10-23 17:49:04.956 I/ReactNativeJS(18100): '≡ƒöì [DRIVER-SERVICE] Parameters:', { customerLocation: { lat: 12.7486283, lng: 77.8299733 },
10-23 17:49:04.956 I/ReactNativeJS(18100):   radius: '10km',
10-23 17:49:04.956 I/ReactNativeJS(18100):   vehicleType: 'all' }
10-23 17:49:04.956 I/ReactNativeJS(18100): ≡ƒôè [DRIVER-SERVICE] Step 1: Fetching online verified drivers...
10-23 17:49:05.092 I/ReactNativeJS(18100): '≡ƒôè [DRIVER-SERVICE] Found drivers:', { total: 21,
10-23 17:49:05.092 I/ReactNativeJS(18100):   details:
10-23 17:49:05.092 I/ReactNativeJS(18100):    [ { id: '22480cc3-665c-407e-ad8a-8eafde67706b',
10-23 17:49:05.092 I/ReactNativeJS(18100):        user_id: '16011178-decf-4de3-beae-94ca46ce9258',
10-23 17:49:05.092 I/ReactNativeJS(18100):        name: undefined,
10-23 17:49:05.092 I/ReactNativeJS(18100):        vehicle_type: 'hatchback',
10-23 17:49:05.092 I/ReactNativeJS(18100):        status: 'online',
10-23 17:49:05.092 I/ReactNativeJS(18100):        verified: true },
10-23 17:49:05.092 I/ReactNativeJS(18100):      { id: '76b66a88-dff9-4965-9e36-8a92023f155d',
10-23 17:49:05.092 I/ReactNativeJS(18100):        user_id: 'ae53a792-6aed-4186-823d-61c34c6defe2',
10-23 17:49:05.092 I/ReactNativeJS(18100):        name: undefined,
10-23 17:49:05.092 I/ReactNativeJS(18100):        vehicle_type: 'sedan',
10-23 17:49:05.092 I/ReactNativeJS(18100):        status: 'online',
10-23 17:49:05.092 I/ReactNativeJS(18100):        verified: true },
10-23 17:49:05.092 I/ReactNativeJS(18100):      { id: '6f55e87b-6558-48df-af8c-d69190918b32',
10-23 17:49:05.092 I/ReactNativeJS(18100):        user_id: 'e6145579-4f5a-439f-b929-fa478580c049',
10-23 17:49:05.092 I/ReactNativeJS(18100):        name: undefined,
10-23 17:49:05.092 I/ReactNativeJS(18100):        vehicle_type: 'hatchback',
10-23 17:49:05.092 I/ReactNativeJS(18100):        status: 'online',
10-23 17:49:05.092 I/ReactNativeJS(18100):        verified: true },
10-23 17:49:05.092 I/ReactNativeJS(18100):      { id: '97a4ba58-9431-48e5-ac8f-3472b8357179',
10-23 17:49:05.092 I/ReactNativeJS(18100):        user_id: '5d6651c8-2e3f-44e7-b4a1-0056c1d5315b',
10-23 17:49:05.092 I/ReactNativeJS(18100):        name: undefined,
10-23 17:49:05.092 I/ReactNativeJS(18100):        vehicle_type: 'sedan_ac',
10-23 17:49:05.092 I/ReactNativeJS(18100):        status: 'online',
10-23 17:49:05.092 I/ReactNativeJS(18100):        verified: true },
10-23 17:49:05.092 I/ReactNativeJS(18100):      { id: 'c568b21d-0975-4388-a9fb-cc00013b6d4f',
10-23 17:49:05.092 I/ReactNativeJS(18100):        user_id: '6150ee57-77e5-45f7-b6c7-a586f22f2af8',
10-23 17:49:05.092 I/ReactNativeJS(18100):        name: undefined,
10-23 17:49:05.092 I/ReactNativeJS(18100):        vehicle_type: 'sedan',
10-23 17:49:05.092 I/ReactNativeJS(18100):        status: 'online',
10-23 17:49:05.092 I/ReactNativeJS(18100):        verified: true },
10-23 17:49:05.092 I/ReactNativeJS(18100):      { id: '7055c2f9-99fa-4d96-bc6c-079b5cda6f56',
10-23 17:49:05.092 I/ReactNativeJS(18100):        user_id: 'dc475d27-6167-4695-a014-dcb8d160b4c6',
10-23 17:49:05.092 I/ReactNativeJS(18100):        name: undefined,
10-23 17:49:05.092 I/ReactNativeJS(18100):        vehicle_type: 'hatchback',
10-23 17:49:05.092 I/ReactNativeJS(18100):        status: 'online',
10-23 17:49:05.092 I/ReactNativeJS(18100):        verified: true },
10-23 17:49:05.092 I/ReactNativeJS(18100):      { id: '770e8400-e29b-41d4-a716-446655440001',
10-23 17:49:05.092 I/ReactNativeJS(18100):        user_id: '550e8400-e29b-41d4-a716-446655440001',
10-23 17:49:05.092 I/ReactNativeJS(18100):        name: undefined,
10-23 17:49:05.092 I/ReactNativeJS(18100):        vehicle_type: 'hatchback',
10-23 17:49:05.092 I/ReactNativeJS(18100):        status: 'online',
10-23 17:49:05.092 I/ReactNativeJS(18100):        verified: true },
10-23 17:49:05.092 I/ReactNativeJS(18100):      { id: '770e8400-e29b-41d4-a716-446655440002',
10-23 17:49:05.092 I/ReactNativeJS(18100):        user_id: '550e8400-e29b-41d4-a716-446655440002',
10-23 17:49:05.092 I/ReactNativeJS(18100):        name: undefined,
10-23 17:49:05.092 I/ReactNativeJS(18100):        vehicle_type: 'sedan',
10-23 17:49:05.092 I/ReactNativeJS(18100):        status: 'online',
10-23 17:49:05.092 I/ReactNativeJS(18100):        verified: true },
10-23 17:49:05.092 I/ReactNativeJS(18100):      { id: '43d81d7d-e647-46cf-8599-11f63996b03e',
10-23 17:49:05.092 I/ReactNativeJS(18100):        user_id: '6c03a657-c3e4-466e-b49c-324c2d051ce9',
10-23 17:49:05.092 I/ReactNativeJS(18100):        name: undefined,
10-23 17:49:05.092 I/ReactNativeJS(18100):        vehicle_type: 'sedan_ac',
10-23 17:49:05.092 I/ReactNativeJS(18100):        status: 'online',
10-23 17:49:05.092 I/ReactNativeJS(18100):        verified: true },
10-23 17:49:05.092 I/ReactNativeJS(18100):      { id: '770e8400-e29b-41d4-a716-446655440003',
10-23 17:49:05.092 I/ReactNativeJS(18100):        user_id: '550e8400-e29b-41d4-a716-446655440003',
10-23 17:49:05.092 I/ReactNativeJS(18100):        name: undefined,
10-23 17:49:05.092 I/ReactNativeJS(18100):        vehicle_type: 'suv',
10-23 17:49:05.092 I/ReactNativeJS(18100):        status: 'online',
10-23 17:49:05.092 I/ReactNativeJS(18100):        verified: true },
10-23 17:49:05.092 I/ReactNativeJS(18100):      { id: '770e8400-e29b-41d4-a716-446655440004',
10-23 17:49:05.092 I/ReactNativeJS(18100):        user_id: '550e8400-e29b-41d4-a716-446655440004',
10-23 17:49:05.092 I/ReactNativeJS(18100):        name: undefined,
10-23 17:49:05.092 I/ReactNativeJS(18100):        vehicle_type: 'sedan',
10-23 17:49:05.092 I/ReactNativeJS(18100):        status: 'online',
10-23 17:49:05.092 I/ReactNativeJS(18100):        verified: true },
10-23 17:49:05.092 I/ReactNativeJS(18100):      { id: '770e8400-e29b-41d4-a716-446655440005',
10-23 17:49:05.092 I/ReactNativeJS(18100):        user_id: '550e8400-e29b-41d4-a716-446655440005',
10-23 17:49:05.092 I/ReactNativeJS(18100):        name: undefined,
10-23 17:49:05.092 I/ReactNativeJS(18100):        vehicle_type: 'hatchback',
10-23 17:49:05.092 I/ReactNativeJS(18100):        status: 'online',
10-23 17:49:05.092 I/ReactNativeJS(18100):        verified: true },
10-23 17:49:05.092 I/ReactNativeJS(18100):      { id: '489b94a7-777b-4e11-ba5c-17e0a3173737',
10-23 17:49:05.092 I/ReactNativeJS(18100):        user_id: '892d8e0d-7ca5-4dd8-9979-539f394538f2',
10-23 17:49:05.092 I/ReactNativeJS(18100):        name: undefined,
10-23 17:49:05.092 I/ReactNativeJS(18100):        vehicle_type: 'hatchback',
10-23 17:49:05.092 I/ReactNativeJS(18100):        status: 'online',
10-23 17:49:05.092 I/ReactNativeJS(18100):        verified: true },
10-23 17:49:05.092 I/ReactNativeJS(18100):      { id: 'd7b4a339-2ba5-45ed-a2ec-238548a8eab6',
10-23 17:49:05.092 I/ReactNativeJS(18100):        user_id: 'cb735787-e96d-4d1d-9975-c112e75dfabd',
10-23 17:49:05.092 I/ReactNativeJS(18100):        name: undefined,
10-23 17:49:05.092 I/ReactNativeJS(18100):        vehicle_type: 'hatchback_ac',
10-23 17:49:05.092 I/ReactNativeJS(18100):        status: 'online',
10-23 17:49:05.092 I/ReactNativeJS(18100):        verified: true },
10-23 17:49:05.092 I/ReactNativeJS(18100):      { id: '38ee94d8-ac2d-450e-8084-0bef654546d7',
10-23 17:49:05.092 I/ReactNativeJS(18100):        user_id: 'fdd94862-18e4-49d4-b6c0-8b9f73c8ff8c',
10-23 17:49:05.092 I/ReactNativeJS(18100):        name: undefined,
10-23 17:49:05.092 I/ReactNativeJS(18100):        vehicle_type: 'sedan',
10-23 17:49:05.092 I/ReactNativeJS(18100):        status: 'online',
10-23 17:49:05.092 I/ReactNativeJS(18100):        verified: true },
10-23 17:49:05.092 I/ReactNativeJS(18100):      { id: 'b4613ecf-44b5-49ba-8613-f8993b6db1d6',
10-23 17:49:05.092 I/ReactNativeJS(18100):        user_id: '539b06c9-4e24-49a4-b307-3fb3f9dc39da',
10-23 17:49:05.092 I/ReactNativeJS(18100):        name: undefined,
10-23 17:49:05.092 I/ReactNativeJS(18100):        vehicle_type: 'sedan',
10-23 17:49:05.092 I/ReactNativeJS(18100):        status: 'online',
10-23 17:49:05.092 I/ReactNativeJS(18100):        verified: true },
10-23 17:49:05.092 I/ReactNativeJS(18100):      { id: '631f4ab4-c643-45a8-addd-541595b0fe86',
10-23 17:49:05.092 I/ReactNativeJS(18100):        user_id: 'b12c8a48-05b3-475a-b042-4810aee4e918',
10-23 17:49:05.092 I/ReactNativeJS(18100):        name: undefined,
10-23 17:49:05.092 I/ReactNativeJS(18100):        vehicle_type: 'suv',
10-23 17:49:05.092 I/ReactNativeJS(18100):        status: 'online',
10-23 17:49:05.092 I/ReactNativeJS(18100):        verified: true },
10-23 17:49:05.092 I/ReactNativeJS(18100):      { id: '0330d75a-67b0-4b12-b9b7-22a241af9c57',
10-23 17:49:05.092 I/ReactNativeJS(18100):        user_id: 'f5e495f1-75a4-4ce1-bb60-4adfc348b8fc',
10-23 17:49:05.092 I/ReactNativeJS(18100):        name: undefined,
10-23 17:49:05.092 I/ReactNativeJS(18100):        vehicle_type: 'sedan',
10-23 17:49:05.092 I/ReactNativeJS(18100):        status: 'online',
10-23 17:49:05.092 I/ReactNativeJS(18100):        verified: true },
10-23 17:49:05.092 I/ReactNativeJS(18100):      { id: '707e2d38-7346-4a2e-bddb-e1157475f786',
10-23 17:49:05.092 I/ReactNativeJS(18100):        user_id: 'ed59084b-f517-4da3-814c-a314cdd8b4c6',
10-23 17:49:05.092 I/ReactNativeJS(18100):        name: undefined,
10-23 17:49:05.092 I/ReactNativeJS(18100):        vehicle_type: 'sedan',
10-23 17:49:05.092 I/ReactNativeJS(18100):        status: 'online',
10-23 17:49:05.092 I/ReactNativeJS(18100):        verified: true },
10-23 17:49:05.092 I/ReactNativeJS(18100):      { id: 'eb91d7e5-e2f2-4021-a8c8-3739a3d4cae4',
10-23 17:49:05.092 I/ReactNativeJS(18100):        user_id: '1c4ac410-54d8-4b5e-960b-3afcbebd115d',
10-23 17:49:05.092 I/ReactNativeJS(18100):        name: undefined,
10-23 17:49:05.092 I/ReactNativeJS(18100):        vehicle_type: 'sedan',
10-23 17:49:05.092 I/ReactNativeJS(18100):        status: 'online',
10-23 17:49:05.092 I/ReactNativeJS(18100):        verified: true },
10-23 17:49:05.092 I/ReactNativeJS(18100):      { id: '058f85df-35b3-4027-81a1-bd52a0df8e4a',
10-23 17:49:05.092 I/ReactNativeJS(18100):        user_id: '411ee301-8ffc-4874-86e9-37716951bc4d',
10-23 17:49:05.092 I/ReactNativeJS(18100):        name: undefined,
10-23 17:49:05.092 I/ReactNativeJS(18100):        vehicle_type: 'suv_ac',
10-23 17:49:05.092 I/ReactNativeJS(18100):        status: 'online',
10-23 17:49:05.092 I/ReactNativeJS(18100):        verified: true } ] }
10-23 17:49:05.093 I/ReactNativeJS(18100): '≡ƒôì [DRIVER-SERVICE] Step 2: Getting locations for user IDs:', [ '16011178-decf-4de3-beae-94ca46ce9258',
10-23 17:49:05.093 I/ReactNativeJS(18100):   'ae53a792-6aed-4186-823d-61c34c6defe2',
10-23 17:49:05.093 I/ReactNativeJS(18100):   'e6145579-4f5a-439f-b929-fa478580c049',
10-23 17:49:05.093 I/ReactNativeJS(18100):   '5d6651c8-2e3f-44e7-b4a1-0056c1d5315b',
10-23 17:49:05.093 I/ReactNativeJS(18100):   '6150ee57-77e5-45f7-b6c7-a586f22f2af8',
10-23 17:49:05.093 I/ReactNativeJS(18100):   'dc475d27-6167-4695-a014-dcb8d160b4c6',
10-23 17:49:05.093 I/ReactNativeJS(18100):   '550e8400-e29b-41d4-a716-446655440001',
10-23 17:49:05.093 I/ReactNativeJS(18100):   '550e8400-e29b-41d4-a716-446655440002',
10-23 17:49:05.093 I/ReactNativeJS(18100):   '6c03a657-c3e4-466e-b49c-324c2d051ce9',
10-23 17:49:05.093 I/ReactNativeJS(18100):   '550e8400-e29b-41d4-a716-446655440003',
10-23 17:49:05.093 I/ReactNativeJS(18100):   '550e8400-e29b-41d4-a716-446655440004',
10-23 17:49:05.093 I/ReactNativeJS(18100):   '550e8400-e29b-41d4-a716-446655440005',
10-23 17:49:05.093 I/ReactNativeJS(18100):   '892d8e0d-7ca5-4dd8-9979-539f394538f2',
10-23 17:49:05.093 I/ReactNativeJS(18100):   'cb735787-e96d-4d1d-9975-c112e75dfabd',
10-23 17:49:05.093 I/ReactNativeJS(18100):   'fdd94862-18e4-49d4-b6c0-8b9f73c8ff8c',
10-23 17:49:05.093 I/ReactNativeJS(18100):   '539b06c9-4e24-49a4-b307-3fb3f9dc39da',
10-23 17:49:05.093 I/ReactNativeJS(18100):   'b12c8a48-05b3-475a-b042-4810aee4e918',
10-23 17:49:05.093 I/ReactNativeJS(18100):   'f5e495f1-75a4-4ce1-bb60-4adfc348b8fc',
10-23 17:49:05.093 I/ReactNativeJS(18100):   'ed59084b-f517-4da3-814c-a314cdd8b4c6',
10-23 17:49:05.093 I/ReactNativeJS(18100):   '1c4ac410-54d8-4b5e-960b-3afcbebd115d',
10-23 17:49:05.093 I/ReactNativeJS(18100):   '411ee301-8ffc-4874-86e9-37716951bc4d' ]
10-23 17:49:05.138 I/ReactNativeJS(18100): '≡ƒôè [DRIVER-SERVICE] Found drivers:', { total: 21,
10-23 17:49:05.138 I/ReactNativeJS(18100):   details:
10-23 17:49:05.138 I/ReactNativeJS(18100):    [ { id: '22480cc3-665c-407e-ad8a-8eafde67706b',
10-23 17:49:05.138 I/ReactNativeJS(18100):        user_id: '16011178-decf-4de3-beae-94ca46ce9258',
10-23 17:49:05.138 I/ReactNativeJS(18100):        name: undefined,
10-23 17:49:05.138 I/ReactNativeJS(18100):        vehicle_type: 'hatchback',
10-23 17:49:05.138 I/ReactNativeJS(18100):        status: 'online',
10-23 17:49:05.138 I/ReactNativeJS(18100):        verified: true },
10-23 17:49:05.138 I/ReactNativeJS(18100):      { id: '76b66a88-dff9-4965-9e36-8a92023f155d',
10-23 17:49:05.138 I/ReactNativeJS(18100):        user_id: 'ae53a792-6aed-4186-823d-61c34c6defe2',
10-23 17:49:05.138 I/ReactNativeJS(18100):        name: undefined,
10-23 17:49:05.138 I/ReactNativeJS(18100):        vehicle_type: 'sedan',
10-23 17:49:05.138 I/ReactNativeJS(18100):        status: 'online',
10-23 17:49:05.138 I/ReactNativeJS(18100):        verified: true },
10-23 17:49:05.138 I/ReactNativeJS(18100):      { id: '6f55e87b-6558-48df-af8c-d69190918b32',
10-23 17:49:05.138 I/ReactNativeJS(18100):        user_id: 'e6145579-4f5a-439f-b929-fa478580c049',
10-23 17:49:05.138 I/ReactNativeJS(18100):        name: undefined,
10-23 17:49:05.138 I/ReactNativeJS(18100):        vehicle_type: 'hatchback',
10-23 17:49:05.138 I/ReactNativeJS(18100):        status: 'online',
10-23 17:49:05.138 I/ReactNativeJS(18100):        verified: true },
10-23 17:49:05.138 I/ReactNativeJS(18100):      { id: '97a4ba58-9431-48e5-ac8f-3472b8357179',
10-23 17:49:05.138 I/ReactNativeJS(18100):        user_id: '5d6651c8-2e3f-44e7-b4a1-0056c1d5315b',
10-23 17:49:05.138 I/ReactNativeJS(18100):        name: undefined,
10-23 17:49:05.138 I/ReactNativeJS(18100):        vehicle_type: 'sedan_ac',
10-23 17:49:05.138 I/ReactNativeJS(18100):        status: 'online',
10-23 17:49:05.138 I/ReactNativeJS(18100):        verified: true },
10-23 17:49:05.138 I/ReactNativeJS(18100):      { id: 'c568b21d-0975-4388-a9fb-cc00013b6d4f',
10-23 17:49:05.138 I/ReactNativeJS(18100):        user_id: '6150ee57-77e5-45f7-b6c7-a586f22f2af8',
10-23 17:49:05.138 I/ReactNativeJS(18100):        name: undefined,
10-23 17:49:05.138 I/ReactNativeJS(18100):        vehicle_type: 'sedan',
10-23 17:49:05.138 I/ReactNativeJS(18100):        status: 'online',
10-23 17:49:05.138 I/ReactNativeJS(18100):        verified: true },
10-23 17:49:05.138 I/ReactNativeJS(18100):      { id: '7055c2f9-99fa-4d96-bc6c-079b5cda6f56',
10-23 17:49:05.138 I/ReactNativeJS(18100):        user_id: 'dc475d27-6167-4695-a014-dcb8d160b4c6',
10-23 17:49:05.138 I/ReactNativeJS(18100):        name: undefined,
10-23 17:49:05.138 I/ReactNativeJS(18100):        vehicle_type: 'hatchback',
10-23 17:49:05.138 I/ReactNativeJS(18100):        status: 'online',
10-23 17:49:05.138 I/ReactNativeJS(18100):        verified: true },
10-23 17:49:05.138 I/ReactNativeJS(18100):      { id: '770e8400-e29b-41d4-a716-446655440001',
10-23 17:49:05.138 I/ReactNativeJS(18100):        user_id: '550e8400-e29b-41d4-a716-446655440001',
10-23 17:49:05.138 I/ReactNativeJS(18100):        name: undefined,
10-23 17:49:05.138 I/ReactNativeJS(18100):        vehicle_type: 'hatchback',
10-23 17:49:05.138 I/ReactNativeJS(18100):        status: 'online',
10-23 17:49:05.138 I/ReactNativeJS(18100):        verified: true },
10-23 17:49:05.138 I/ReactNativeJS(18100):      { id: '770e8400-e29b-41d4-a716-446655440002',
10-23 17:49:05.138 I/ReactNativeJS(18100):        user_id: '550e8400-e29b-41d4-a716-446655440002',
10-23 17:49:05.138 I/ReactNativeJS(18100):        name: undefined,
10-23 17:49:05.138 I/ReactNativeJS(18100):        vehicle_type: 'sedan',
10-23 17:49:05.138 I/ReactNativeJS(18100):        status: 'online',
10-23 17:49:05.138 I/ReactNativeJS(18100):        verified: true },
10-23 17:49:05.138 I/ReactNativeJS(18100):      { id: '43d81d7d-e647-46cf-8599-11f63996b03e',
10-23 17:49:05.138 I/ReactNativeJS(18100):        user_id: '6c03a657-c3e4-466e-b49c-324c2d051ce9',
10-23 17:49:05.138 I/ReactNativeJS(18100):        name: undefined,
10-23 17:49:05.138 I/ReactNativeJS(18100):        vehicle_type: 'sedan_ac',
10-23 17:49:05.138 I/ReactNativeJS(18100):        status: 'online',
10-23 17:49:05.138 I/ReactNativeJS(18100):        verified: true },
10-23 17:49:05.138 I/ReactNativeJS(18100):      { id: '770e8400-e29b-41d4-a716-446655440003',
10-23 17:49:05.138 I/ReactNativeJS(18100):        user_id: '550e8400-e29b-41d4-a716-446655440003',
10-23 17:49:05.138 I/ReactNativeJS(18100):        name: undefined,
10-23 17:49:05.138 I/ReactNativeJS(18100):        vehicle_type: 'suv',
10-23 17:49:05.138 I/ReactNativeJS(18100):        status: 'online',
10-23 17:49:05.138 I/ReactNativeJS(18100):        verified: true },
10-23 17:49:05.138 I/ReactNativeJS(18100):      { id: '770e8400-e29b-41d4-a716-446655440004',
10-23 17:49:05.138 I/ReactNativeJS(18100):        user_id: '550e8400-e29b-41d4-a716-446655440004',
10-23 17:49:05.138 I/ReactNativeJS(18100):        name: undefined,
10-23 17:49:05.138 I/ReactNativeJS(18100):        vehicle_type: 'sedan',
10-23 17:49:05.138 I/ReactNativeJS(18100):        status: 'online',
10-23 17:49:05.138 I/ReactNativeJS(18100):        verified: true },
10-23 17:49:05.138 I/ReactNativeJS(18100):      { id: '770e8400-e29b-41d4-a716-446655440005',
10-23 17:49:05.138 I/ReactNativeJS(18100):        user_id: '550e8400-e29b-41d4-a716-446655440005',
10-23 17:49:05.138 I/ReactNativeJS(18100):        name: undefined,
10-23 17:49:05.138 I/ReactNativeJS(18100):        vehicle_type: 'hatchback',
10-23 17:49:05.138 I/ReactNativeJS(18100):        status: 'online',
10-23 17:49:05.138 I/ReactNativeJS(18100):        verified: true },
10-23 17:49:05.138 I/ReactNativeJS(18100):      { id: '489b94a7-777b-4e11-ba5c-17e0a3173737',
10-23 17:49:05.138 I/ReactNativeJS(18100):        user_id: '892d8e0d-7ca5-4dd8-9979-539f394538f2',
10-23 17:49:05.138 I/ReactNativeJS(18100):        name: undefined,
10-23 17:49:05.138 I/ReactNativeJS(18100):        vehicle_type: 'hatchback',
10-23 17:49:05.138 I/ReactNativeJS(18100):        status: 'online',
10-23 17:49:05.138 I/ReactNativeJS(18100):        verified: true },
10-23 17:49:05.138 I/ReactNativeJS(18100):      { id: 'd7b4a339-2ba5-45ed-a2ec-238548a8eab6',
10-23 17:49:05.138 I/ReactNativeJS(18100):        user_id: 'cb735787-e96d-4d1d-9975-c112e75dfabd',
10-23 17:49:05.138 I/ReactNativeJS(18100):        name: undefined,
10-23 17:49:05.138 I/ReactNativeJS(18100):        vehicle_type: 'hatchback_ac',
10-23 17:49:05.138 I/ReactNativeJS(18100):        status: 'online',
10-23 17:49:05.138 I/ReactNativeJS(18100):        verified: true },
10-23 17:49:05.138 I/ReactNativeJS(18100):      { id: '38ee94d8-ac2d-450e-8084-0bef654546d7',
10-23 17:49:05.138 I/ReactNativeJS(18100):        user_id: 'fdd94862-18e4-49d4-b6c0-8b9f73c8ff8c',
10-23 17:49:05.138 I/ReactNativeJS(18100):        name: undefined,
10-23 17:49:05.138 I/ReactNativeJS(18100):        vehicle_type: 'sedan',
10-23 17:49:05.138 I/ReactNativeJS(18100):        status: 'online',
10-23 17:49:05.138 I/ReactNativeJS(18100):        verified: true },
10-23 17:49:05.138 I/ReactNativeJS(18100):      { id: 'b4613ecf-44b5-49ba-8613-f8993b6db1d6',
10-23 17:49:05.138 I/ReactNativeJS(18100):        user_id: '539b06c9-4e24-49a4-b307-3fb3f9dc39da',
10-23 17:49:05.138 I/ReactNativeJS(18100):        name: undefined,
10-23 17:49:05.138 I/ReactNativeJS(18100):        vehicle_type: 'sedan',
10-23 17:49:05.138 I/ReactNativeJS(18100):        status: 'online',
10-23 17:49:05.138 I/ReactNativeJS(18100):        verified: true },
10-23 17:49:05.138 I/ReactNativeJS(18100):      { id: '631f4ab4-c643-45a8-addd-541595b0fe86',
10-23 17:49:05.138 I/ReactNativeJS(18100):        user_id: 'b12c8a48-05b3-475a-b042-4810aee4e918',
10-23 17:49:05.138 I/ReactNativeJS(18100):        name: undefined,
10-23 17:49:05.138 I/ReactNativeJS(18100):        vehicle_type: 'suv',
10-23 17:49:05.138 I/ReactNativeJS(18100):        status: 'online',
10-23 17:49:05.138 I/ReactNativeJS(18100):        verified: true },
10-23 17:49:05.138 I/ReactNativeJS(18100):      { id: '0330d75a-67b0-4b12-b9b7-22a241af9c57',
10-23 17:49:05.138 I/ReactNativeJS(18100):        user_id: 'f5e495f1-75a4-4ce1-bb60-4adfc348b8fc',
10-23 17:49:05.138 I/ReactNativeJS(18100):        name: undefined,
10-23 17:49:05.138 I/ReactNativeJS(18100):        vehicle_type: 'sedan',
10-23 17:49:05.138 I/ReactNativeJS(18100):        status: 'online',
10-23 17:49:05.138 I/ReactNativeJS(18100):        verified: true },
10-23 17:49:05.138 I/ReactNativeJS(18100):      { id: '707e2d38-7346-4a2e-bddb-e1157475f786',
10-23 17:49:05.138 I/ReactNativeJS(18100):        user_id: 'ed59084b-f517-4da3-814c-a314cdd8b4c6',
10-23 17:49:05.138 I/ReactNativeJS(18100):        name: undefined,
10-23 17:49:05.138 I/ReactNativeJS(18100):        vehicle_type: 'sedan',
10-23 17:49:05.138 I/ReactNativeJS(18100):        status: 'online',
10-23 17:49:05.138 I/ReactNativeJS(18100):        verified: true },
10-23 17:49:05.138 I/ReactNativeJS(18100):      { id: 'eb91d7e5-e2f2-4021-a8c8-3739a3d4cae4',
10-23 17:49:05.138 I/ReactNativeJS(18100):        user_id: '1c4ac410-54d8-4b5e-960b-3afcbebd115d',
10-23 17:49:05.138 I/ReactNativeJS(18100):        name: undefined,
10-23 17:49:05.138 I/ReactNativeJS(18100):        vehicle_type: 'sedan',
10-23 17:49:05.138 I/ReactNativeJS(18100):        status: 'online',
10-23 17:49:05.138 I/ReactNativeJS(18100):        verified: true },
10-23 17:49:05.138 I/ReactNativeJS(18100):      { id: '058f85df-35b3-4027-81a1-bd52a0df8e4a',
10-23 17:49:05.138 I/ReactNativeJS(18100):        user_id: '411ee301-8ffc-4874-86e9-37716951bc4d',
10-23 17:49:05.138 I/ReactNativeJS(18100):        name: undefined,
10-23 17:49:05.138 I/ReactNativeJS(18100):        vehicle_type: 'suv_ac',
10-23 17:49:05.138 I/ReactNativeJS(18100):        status: 'online',
10-23 17:49:05.138 I/ReactNativeJS(18100):        verified: true } ] }
10-23 17:49:05.139 I/ReactNativeJS(18100): '≡ƒôì [DRIVER-SERVICE] Step 2: Getting locations for user IDs:', [ '16011178-decf-4de3-beae-94ca46ce9258',
10-23 17:49:05.139 I/ReactNativeJS(18100):   'ae53a792-6aed-4186-823d-61c34c6defe2',
10-23 17:49:05.139 I/ReactNativeJS(18100):   'e6145579-4f5a-439f-b929-fa478580c049',
10-23 17:49:05.139 I/ReactNativeJS(18100):   '5d6651c8-2e3f-44e7-b4a1-0056c1d5315b',
10-23 17:49:05.139 I/ReactNativeJS(18100):   '6150ee57-77e5-45f7-b6c7-a586f22f2af8',
10-23 17:49:05.139 I/ReactNativeJS(18100):   'dc475d27-6167-4695-a014-dcb8d160b4c6',
10-23 17:49:05.139 I/ReactNativeJS(18100):   '550e8400-e29b-41d4-a716-446655440001',
10-23 17:49:05.139 I/ReactNativeJS(18100):   '550e8400-e29b-41d4-a716-446655440002',
10-23 17:49:05.139 I/ReactNativeJS(18100):   '6c03a657-c3e4-466e-b49c-324c2d051ce9',
10-23 17:49:05.139 I/ReactNativeJS(18100):   '550e8400-e29b-41d4-a716-446655440003',
10-23 17:49:05.139 I/ReactNativeJS(18100):   '550e8400-e29b-41d4-a716-446655440004',
10-23 17:49:05.139 I/ReactNativeJS(18100):   '550e8400-e29b-41d4-a716-446655440005',
10-23 17:49:05.139 I/ReactNativeJS(18100):   '892d8e0d-7ca5-4dd8-9979-539f394538f2',
10-23 17:49:05.139 I/ReactNativeJS(18100):   'cb735787-e96d-4d1d-9975-c112e75dfabd',
10-23 17:49:05.139 I/ReactNativeJS(18100):   'fdd94862-18e4-49d4-b6c0-8b9f73c8ff8c',
10-23 17:49:05.139 I/ReactNativeJS(18100):   '539b06c9-4e24-49a4-b307-3fb3f9dc39da',
10-23 17:49:05.139 I/ReactNativeJS(18100):   'b12c8a48-05b3-475a-b042-4810aee4e918',
10-23 17:49:05.139 I/ReactNativeJS(18100):   'f5e495f1-75a4-4ce1-bb60-4adfc348b8fc',
10-23 17:49:05.139 I/ReactNativeJS(18100):   'ed59084b-f517-4da3-814c-a314cdd8b4c6',
10-23 17:49:05.139 I/ReactNativeJS(18100):   '1c4ac410-54d8-4b5e-960b-3afcbebd115d',
10-23 17:49:05.139 I/ReactNativeJS(18100):   '411ee301-8ffc-4874-86e9-37716951bc4d' ]
10-23 17:49:05.504 I/ReactNativeJS(18100): '≡ƒôè [DRIVER-SERVICE] Found drivers:', { total: 21,
10-23 17:49:05.504 I/ReactNativeJS(18100):   details:
10-23 17:49:05.504 I/ReactNativeJS(18100):    [ { id: '22480cc3-665c-407e-ad8a-8eafde67706b',
10-23 17:49:05.504 I/ReactNativeJS(18100):        user_id: '16011178-decf-4de3-beae-94ca46ce9258',
10-23 17:49:05.504 I/ReactNativeJS(18100):        name: undefined,
10-23 17:49:05.504 I/ReactNativeJS(18100):        vehicle_type: 'hatchback',
10-23 17:49:05.504 I/ReactNativeJS(18100):        status: 'online',
10-23 17:49:05.504 I/ReactNativeJS(18100):        verified: true },
10-23 17:49:05.504 I/ReactNativeJS(18100):      { id: '76b66a88-dff9-4965-9e36-8a92023f155d',
10-23 17:49:05.504 I/ReactNativeJS(18100):        user_id: 'ae53a792-6aed-4186-823d-61c34c6defe2',
10-23 17:49:05.504 I/ReactNativeJS(18100):        name: undefined,
10-23 17:49:05.504 I/ReactNativeJS(18100):        vehicle_type: 'sedan',
10-23 17:49:05.504 I/ReactNativeJS(18100):        status: 'online',
10-23 17:49:05.504 I/ReactNativeJS(18100):        verified: true },
10-23 17:49:05.504 I/ReactNativeJS(18100):      { id: '6f55e87b-6558-48df-af8c-d69190918b32',
10-23 17:49:05.504 I/ReactNativeJS(18100):        user_id: 'e6145579-4f5a-439f-b929-fa478580c049',
10-23 17:49:05.504 I/ReactNativeJS(18100):        name: undefined,
10-23 17:49:05.504 I/ReactNativeJS(18100):        vehicle_type: 'hatchback',
10-23 17:49:05.504 I/ReactNativeJS(18100):        status: 'online',
10-23 17:49:05.504 I/ReactNativeJS(18100):        verified: true },
10-23 17:49:05.504 I/ReactNativeJS(18100):      { id: '97a4ba58-9431-48e5-ac8f-3472b8357179',
10-23 17:49:05.504 I/ReactNativeJS(18100):        user_id: '5d6651c8-2e3f-44e7-b4a1-0056c1d5315b',
10-23 17:49:05.504 I/ReactNativeJS(18100):        name: undefined,
10-23 17:49:05.504 I/ReactNativeJS(18100):        vehicle_type: 'sedan_ac',
10-23 17:49:05.504 I/ReactNativeJS(18100):        status: 'online',
10-23 17:49:05.504 I/ReactNativeJS(18100):        verified: true },
10-23 17:49:05.504 I/ReactNativeJS(18100):      { id: 'c568b21d-0975-4388-a9fb-cc00013b6d4f',
10-23 17:49:05.504 I/ReactNativeJS(18100):        user_id: '6150ee57-77e5-45f7-b6c7-a586f22f2af8',
10-23 17:49:05.504 I/ReactNativeJS(18100):        name: undefined,
10-23 17:49:05.504 I/ReactNativeJS(18100):        vehicle_type: 'sedan',
10-23 17:49:05.504 I/ReactNativeJS(18100):        status: 'online',
10-23 17:49:05.504 I/ReactNativeJS(18100):        verified: true },
10-23 17:49:05.504 I/ReactNativeJS(18100):      { id: '7055c2f9-99fa-4d96-bc6c-079b5cda6f56',
10-23 17:49:05.504 I/ReactNativeJS(18100):        user_id: 'dc475d27-6167-4695-a014-dcb8d160b4c6',
10-23 17:49:05.504 I/ReactNativeJS(18100):        name: undefined,
10-23 17:49:05.504 I/ReactNativeJS(18100):        vehicle_type: 'hatchback',
10-23 17:49:05.504 I/ReactNativeJS(18100):        status: 'online',
10-23 17:49:05.504 I/ReactNativeJS(18100):        verified: true },
10-23 17:49:05.504 I/ReactNativeJS(18100):      { id: '770e8400-e29b-41d4-a716-446655440001',
10-23 17:49:05.504 I/ReactNativeJS(18100):        user_id: '550e8400-e29b-41d4-a716-446655440001',
10-23 17:49:05.504 I/ReactNativeJS(18100):        name: undefined,
10-23 17:49:05.504 I/ReactNativeJS(18100):        vehicle_type: 'hatchback',
10-23 17:49:05.504 I/ReactNativeJS(18100):        status: 'online',
10-23 17:49:05.504 I/ReactNativeJS(18100):        verified: true },
10-23 17:49:05.504 I/ReactNativeJS(18100):      { id: '770e8400-e29b-41d4-a716-446655440002',
10-23 17:49:05.504 I/ReactNativeJS(18100):        user_id: '550e8400-e29b-41d4-a716-446655440002',
10-23 17:49:05.504 I/ReactNativeJS(18100):        name: undefined,
10-23 17:49:05.504 I/ReactNativeJS(18100):        vehicle_type: 'sedan',
10-23 17:49:05.504 I/ReactNativeJS(18100):        status: 'online',
10-23 17:49:05.504 I/ReactNativeJS(18100):        verified: true },
10-23 17:49:05.504 I/ReactNativeJS(18100):      { id: '43d81d7d-e647-46cf-8599-11f63996b03e',
10-23 17:49:05.504 I/ReactNativeJS(18100):        user_id: '6c03a657-c3e4-466e-b49c-324c2d051ce9',
10-23 17:49:05.504 I/ReactNativeJS(18100):        name: undefined,
10-23 17:49:05.504 I/ReactNativeJS(18100):        vehicle_type: 'sedan_ac',
10-23 17:49:05.504 I/ReactNativeJS(18100):        status: 'online',
10-23 17:49:05.504 I/ReactNativeJS(18100):        verified: true },
10-23 17:49:05.504 I/ReactNativeJS(18100):      { id: '770e8400-e29b-41d4-a716-446655440003',
10-23 17:49:05.504 I/ReactNativeJS(18100):        user_id: '550e8400-e29b-41d4-a716-446655440003',
10-23 17:49:05.504 I/ReactNativeJS(18100):        name: undefined,
10-23 17:49:05.504 I/ReactNativeJS(18100):        vehicle_type: 'suv',
10-23 17:49:05.504 I/ReactNativeJS(18100):        status: 'online',
10-23 17:49:05.504 I/ReactNativeJS(18100):        verified: true },
10-23 17:49:05.504 I/ReactNativeJS(18100):      { id: '770e8400-e29b-41d4-a716-446655440004',
10-23 17:49:05.504 I/ReactNativeJS(18100):        user_id: '550e8400-e29b-41d4-a716-446655440004',
10-23 17:49:05.504 I/ReactNativeJS(18100):        name: undefined,
10-23 17:49:05.504 I/ReactNativeJS(18100):        vehicle_type: 'sedan',
10-23 17:49:05.504 I/ReactNativeJS(18100):        status: 'online',
10-23 17:49:05.504 I/ReactNativeJS(18100):        verified: true },
10-23 17:49:05.504 I/ReactNativeJS(18100):      { id: '770e8400-e29b-41d4-a716-446655440005',
10-23 17:49:05.504 I/ReactNativeJS(18100):        user_id: '550e8400-e29b-41d4-a716-446655440005',
10-23 17:49:05.504 I/ReactNativeJS(18100):        name: undefined,
10-23 17:49:05.504 I/ReactNativeJS(18100):        vehicle_type: 'hatchback',
10-23 17:49:05.504 I/ReactNativeJS(18100):        status: 'online',
10-23 17:49:05.504 I/ReactNativeJS(18100):        verified: true },
10-23 17:49:05.504 I/ReactNativeJS(18100):      { id: '489b94a7-777b-4e11-ba5c-17e0a3173737',
10-23 17:49:05.504 I/ReactNativeJS(18100):        user_id: '892d8e0d-7ca5-4dd8-9979-539f394538f2',
10-23 17:49:05.504 I/ReactNativeJS(18100):        name: undefined,
10-23 17:49:05.504 I/ReactNativeJS(18100):        vehicle_type: 'hatchback',
10-23 17:49:05.504 I/ReactNativeJS(18100):        status: 'online',
10-23 17:49:05.504 I/ReactNativeJS(18100):        verified: true },
10-23 17:49:05.504 I/ReactNativeJS(18100):      { id: 'd7b4a339-2ba5-45ed-a2ec-238548a8eab6',
10-23 17:49:05.504 I/ReactNativeJS(18100):        user_id: 'cb735787-e96d-4d1d-9975-c112e75dfabd',
10-23 17:49:05.504 I/ReactNativeJS(18100):        name: undefined,
10-23 17:49:05.504 I/ReactNativeJS(18100):        vehicle_type: 'hatchback_ac',
10-23 17:49:05.504 I/ReactNativeJS(18100):        status: 'online',
10-23 17:49:05.504 I/ReactNativeJS(18100):        verified: true },
10-23 17:49:05.504 I/ReactNativeJS(18100):      { id: '38ee94d8-ac2d-450e-8084-0bef654546d7',
10-23 17:49:05.504 I/ReactNativeJS(18100):        user_id: 'fdd94862-18e4-49d4-b6c0-8b9f73c8ff8c',
10-23 17:49:05.504 I/ReactNativeJS(18100):        name: undefined,
10-23 17:49:05.504 I/ReactNativeJS(18100):        vehicle_type: 'sedan',
10-23 17:49:05.504 I/ReactNativeJS(18100):        status: 'online',
10-23 17:49:05.504 I/ReactNativeJS(18100):        verified: true },
10-23 17:49:05.504 I/ReactNativeJS(18100):      { id: 'b4613ecf-44b5-49ba-8613-f8993b6db1d6',
10-23 17:49:05.504 I/ReactNativeJS(18100):        user_id: '539b06c9-4e24-49a4-b307-3fb3f9dc39da',
10-23 17:49:05.504 I/ReactNativeJS(18100):        name: undefined,
10-23 17:49:05.504 I/ReactNativeJS(18100):        vehicle_type: 'sedan',
10-23 17:49:05.504 I/ReactNativeJS(18100):        status: 'online',
10-23 17:49:05.504 I/ReactNativeJS(18100):        verified: true },
10-23 17:49:05.504 I/ReactNativeJS(18100):      { id: '631f4ab4-c643-45a8-addd-541595b0fe86',
10-23 17:49:05.504 I/ReactNativeJS(18100):        user_id: 'b12c8a48-05b3-475a-b042-4810aee4e918',
10-23 17:49:05.504 I/ReactNativeJS(18100):        name: undefined,
10-23 17:49:05.504 I/ReactNativeJS(18100):        vehicle_type: 'suv',
10-23 17:49:05.504 I/ReactNativeJS(18100):        status: 'online',
10-23 17:49:05.504 I/ReactNativeJS(18100):        verified: true },
10-23 17:49:05.504 I/ReactNativeJS(18100):      { id: '0330d75a-67b0-4b12-b9b7-22a241af9c57',
10-23 17:49:05.504 I/ReactNativeJS(18100):        user_id: 'f5e495f1-75a4-4ce1-bb60-4adfc348b8fc',
10-23 17:49:05.504 I/ReactNativeJS(18100):        name: undefined,
10-23 17:49:05.504 I/ReactNativeJS(18100):        vehicle_type: 'sedan',
10-23 17:49:05.504 I/ReactNativeJS(18100):        status: 'online',
10-23 17:49:05.504 I/ReactNativeJS(18100):        verified: true },
10-23 17:49:05.504 I/ReactNativeJS(18100):      { id: '707e2d38-7346-4a2e-bddb-e1157475f786',
10-23 17:49:05.504 I/ReactNativeJS(18100):        user_id: 'ed59084b-f517-4da3-814c-a314cdd8b4c6',
10-23 17:49:05.504 I/ReactNativeJS(18100):        name: undefined,
10-23 17:49:05.504 I/ReactNativeJS(18100):        vehicle_type: 'sedan',
10-23 17:49:05.504 I/ReactNativeJS(18100):        status: 'online',
10-23 17:49:05.504 I/ReactNativeJS(18100):        verified: true },
10-23 17:49:05.504 I/ReactNativeJS(18100):      { id: 'eb91d7e5-e2f2-4021-a8c8-3739a3d4cae4',
10-23 17:49:05.504 I/ReactNativeJS(18100):        user_id: '1c4ac410-54d8-4b5e-960b-3afcbebd115d',
10-23 17:49:05.504 I/ReactNativeJS(18100):        name: undefined,
10-23 17:49:05.504 I/ReactNativeJS(18100):        vehicle_type: 'sedan',
10-23 17:49:05.504 I/ReactNativeJS(18100):        status: 'online',
10-23 17:49:05.504 I/ReactNativeJS(18100):        verified: true },
10-23 17:49:05.504 I/ReactNativeJS(18100):      { id: '058f85df-35b3-4027-81a1-bd52a0df8e4a',
10-23 17:49:05.504 I/ReactNativeJS(18100):        user_id: '411ee301-8ffc-4874-86e9-37716951bc4d',
10-23 17:49:05.504 I/ReactNativeJS(18100):        name: undefined,
10-23 17:49:05.504 I/ReactNativeJS(18100):        vehicle_type: 'suv_ac',
10-23 17:49:05.504 I/ReactNativeJS(18100):        status: 'online',
10-23 17:49:05.504 I/ReactNativeJS(18100):        verified: true } ] }
10-23 17:49:05.504 I/ReactNativeJS(18100): '≡ƒôì [DRIVER-SERVICE] Step 2: Getting locations for user IDs:', [ '16011178-decf-4de3-beae-94ca46ce9258',
10-23 17:49:05.504 I/ReactNativeJS(18100):   'ae53a792-6aed-4186-823d-61c34c6defe2',
10-23 17:49:05.504 I/ReactNativeJS(18100):   'e6145579-4f5a-439f-b929-fa478580c049',
10-23 17:49:05.504 I/ReactNativeJS(18100):   '5d6651c8-2e3f-44e7-b4a1-0056c1d5315b',
10-23 17:49:05.504 I/ReactNativeJS(18100):   '6150ee57-77e5-45f7-b6c7-a586f22f2af8',
10-23 17:49:05.504 I/ReactNativeJS(18100):   'dc475d27-6167-4695-a014-dcb8d160b4c6',
10-23 17:49:05.504 I/ReactNativeJS(18100):   '550e8400-e29b-41d4-a716-446655440001',
10-23 17:49:05.504 I/ReactNativeJS(18100):   '550e8400-e29b-41d4-a716-446655440002',
10-23 17:49:05.504 I/ReactNativeJS(18100):   '6c03a657-c3e4-466e-b49c-324c2d051ce9',
10-23 17:49:05.504 I/ReactNativeJS(18100):   '550e8400-e29b-41d4-a716-446655440003',
10-23 17:49:05.504 I/ReactNativeJS(18100):   '550e8400-e29b-41d4-a716-446655440004',
10-23 17:49:05.504 I/ReactNativeJS(18100):   '550e8400-e29b-41d4-a716-446655440005',
10-23 17:49:05.504 I/ReactNativeJS(18100):   '892d8e0d-7ca5-4dd8-9979-539f394538f2',
10-23 17:49:05.504 I/ReactNativeJS(18100):   'cb735787-e96d-4d1d-9975-c112e75dfabd',
10-23 17:49:05.504 I/ReactNativeJS(18100):   'fdd94862-18e4-49d4-b6c0-8b9f73c8ff8c',
10-23 17:49:05.504 I/ReactNativeJS(18100):   '539b06c9-4e24-49a4-b307-3fb3f9dc39da',
10-23 17:49:05.504 I/ReactNativeJS(18100):   'b12c8a48-05b3-475a-b042-4810aee4e918',
10-23 17:49:05.504 I/ReactNativeJS(18100):   'f5e495f1-75a4-4ce1-bb60-4adfc348b8fc',
10-23 17:49:05.504 I/ReactNativeJS(18100):   'ed59084b-f517-4da3-814c-a314cdd8b4c6',
10-23 17:49:05.504 I/ReactNativeJS(18100):   '1c4ac410-54d8-4b5e-960b-3afcbebd115d',
10-23 17:49:05.504 I/ReactNativeJS(18100):   '411ee301-8ffc-4874-86e9-37716951bc4d' ]
10-23 17:49:05.515 I/ReactNativeJS(18100): '≡ƒôì [DRIVER-SERVICE] Found locations:', { total: 1,
10-23 17:49:05.515 I/ReactNativeJS(18100):   details:
10-23 17:49:05.515 I/ReactNativeJS(18100):    [ { user_id: '1c4ac410-54d8-4b5e-960b-3afcbebd115d',
10-23 17:49:05.515 I/ReactNativeJS(18100):        coordinates: { lat: 12.7486296, lng: 77.8299689 },
10-23 17:49:05.515 I/ReactNativeJS(18100):        updated_at: '2025-10-23T12:18:41.271673+00:00',
10-23 17:49:05.515 I/ReactNativeJS(18100):        age_minutes: 0 } ] }
10-23 17:49:05.515 I/ReactNativeJS(18100): ≡ƒöì [DRIVER-SERVICE] Step 3: Processing drivers with distance calculation...
10-23 17:49:05.516 I/ReactNativeJS(18100): '≡ƒöì [DRIVER-SERVICE] Customer coordinates for distance calc:', { lat: 12.7486283,
10-23 17:49:05.516 I/ReactNativeJS(18100):   lng: 77.8299733,
10-23 17:49:05.516 I/ReactNativeJS(18100):   type: 'number',
10-23 17:49:05.516 I/ReactNativeJS(18100):   isValid: true }
10-23 17:49:05.516 I/ReactNativeJS(18100): Γ¥î [DRIVER-SERVICE] Driver 22480cc3-665c-407e-ad8a-8eafde67706b (undefined) skipped: no recent location
10-23 17:49:05.516 I/ReactNativeJS(18100): Γ¥î [DRIVER-SERVICE] Driver 76b66a88-dff9-4965-9e36-8a92023f155d (undefined) skipped: no recent location
10-23 17:49:05.516 I/ReactNativeJS(18100): Γ¥î [DRIVER-SERVICE] Driver 6f55e87b-6558-48df-af8c-d69190918b32 (undefined) skipped: no recent location
10-23 17:49:05.516 I/ReactNativeJS(18100): Γ¥î [DRIVER-SERVICE] Driver 97a4ba58-9431-48e5-ac8f-3472b8357179 (undefined) skipped: no recent location
10-23 17:49:05.516 I/ReactNativeJS(18100): Γ¥î [DRIVER-SERVICE] Driver c568b21d-0975-4388-a9fb-cc00013b6d4f (undefined) skipped: no recent location
10-23 17:49:05.516 I/ReactNativeJS(18100): Γ¥î [DRIVER-SERVICE] Driver 7055c2f9-99fa-4d96-bc6c-079b5cda6f56 (undefined) skipped: no recent location
10-23 17:49:05.516 I/ReactNativeJS(18100): Γ¥î [DRIVER-SERVICE] Driver 770e8400-e29b-41d4-a716-446655440001 (undefined) skipped: no recent location
10-23 17:49:05.516 I/ReactNativeJS(18100): Γ¥î [DRIVER-SERVICE] Driver 770e8400-e29b-41d4-a716-446655440002 (undefined) skipped: no recent location
10-23 17:49:05.516 I/ReactNativeJS(18100): Γ¥î [DRIVER-SERVICE] Driver 43d81d7d-e647-46cf-8599-11f63996b03e (undefined) skipped: no recent location
10-23 17:49:05.516 I/ReactNativeJS(18100): Γ¥î [DRIVER-SERVICE] Driver 770e8400-e29b-41d4-a716-446655440003 (undefined) skipped: no recent location
10-23 17:49:05.516 I/ReactNativeJS(18100): Γ¥î [DRIVER-SERVICE] Driver 770e8400-e29b-41d4-a716-446655440004 (undefined) skipped: no recent location
10-23 17:49:05.516 I/ReactNativeJS(18100): Γ¥î [DRIVER-SERVICE] Driver 770e8400-e29b-41d4-a716-446655440005 (undefined) skipped: no recent location
10-23 17:49:05.516 I/ReactNativeJS(18100): Γ¥î [DRIVER-SERVICE] Driver 489b94a7-777b-4e11-ba5c-17e0a3173737 (undefined) skipped: no recent location
10-23 17:49:05.516 I/ReactNativeJS(18100): Γ¥î [DRIVER-SERVICE] Driver d7b4a339-2ba5-45ed-a2ec-238548a8eab6 (undefined) skipped: no recent location
10-23 17:49:05.516 I/ReactNativeJS(18100): Γ¥î [DRIVER-SERVICE] Driver 38ee94d8-ac2d-450e-8084-0bef654546d7 (undefined) skipped: no recent location
10-23 17:49:05.516 I/ReactNativeJS(18100): Γ¥î [DRIVER-SERVICE] Driver b4613ecf-44b5-49ba-8613-f8993b6db1d6 (undefined) skipped: no recent location
10-23 17:49:05.516 I/ReactNativeJS(18100): Γ¥î [DRIVER-SERVICE] Driver 631f4ab4-c643-45a8-addd-541595b0fe86 (undefined) skipped: no recent location
10-23 17:49:05.516 I/ReactNativeJS(18100): Γ¥î [DRIVER-SERVICE] Driver 0330d75a-67b0-4b12-b9b7-22a241af9c57 (undefined) skipped: no recent location
10-23 17:49:05.516 I/ReactNativeJS(18100): Γ¥î [DRIVER-SERVICE] Driver 707e2d38-7346-4a2e-bddb-e1157475f786 (undefined) skipped: no recent location
10-23 17:49:05.516 I/ReactNativeJS(18100): ≡ƒÜù [DRIVER-SERVICE] Driver eb91d7e5-e2f2-4021-a8c8-3739a3d4cae4 (undefined) vehicle type: sedan
10-23 17:49:05.516 I/ReactNativeJS(18100): ≡ƒôÉ [DISTANCE-SERVICE] ===== DISTANCE CALCULATION DEBUG =====
10-23 17:49:05.516 I/ReactNativeJS(18100): '≡ƒôÉ [DISTANCE-SERVICE] Raw inputs:', { lat1: 12.7486283,
10-23 17:49:05.516 I/ReactNativeJS(18100):   lon1: 77.8299733,
10-23 17:49:05.516 I/ReactNativeJS(18100):   lat2: 12.7486296,
10-23 17:49:05.516 I/ReactNativeJS(18100):   lon2: 77.8299689 }
10-23 17:49:05.516 I/ReactNativeJS(18100): '≡ƒôÉ [DISTANCE-SERVICE] Converted inputs:', { latitude1: 12.7486283,
10-23 17:49:05.516 I/ReactNativeJS(18100):   longitude1: 77.8299733,
10-23 17:49:05.516 I/ReactNativeJS(18100):   latitude2: 12.7486296,
10-23 17:49:05.516 I/ReactNativeJS(18100):   longitude2: 77.8299689 }
10-23 17:49:05.516 I/ReactNativeJS(18100): '≡ƒôÉ [DISTANCE-SERVICE] Coordinate differences:', { lat_diff: 0.000001299999999204715,
10-23 17:49:05.516 I/ReactNativeJS(18100):   lng_diff: 0.0000044000000087862645,
10-23 17:49:05.516 I/ReactNativeJS(18100):   very_close: true,
10-23 17:49:05.516 I/ReactNativeJS(18100):   essentially_same: true }
10-23 17:49:05.516 I/ReactNativeJS(18100): ≡ƒôÉ [DISTANCE-SERVICE] Coordinates are essentially the same, returning 0km
10-23 17:49:05.517 I/ReactNativeJS(18100): '≡ƒôÅ [DRIVER-SERVICE] Distance for driver eb91d7e5-e2f2-4021-a8c8-3739a3d4cae4 (undefined):', { distance_km: '0.0000',
10-23 17:49:05.517 I/ReactNativeJS(18100):   within_radius: true,
10-23 17:49:05.517 I/ReactNativeJS(18100):   radius_limit: '10km',
10-23 17:49:05.517 I/ReactNativeJS(18100):   driver_coords: { lat: 12.7486296, lng: 77.8299689 },
10-23 17:49:05.517 I/ReactNativeJS(18100):   customer_coords: { lat: 12.7486283, lng: 77.8299733 } }
10-23 17:49:05.517 I/ReactNativeJS(18100): Γ£à [DRIVER-SERVICE] Driver eb91d7e5-e2f2-4021-a8c8-3739a3d4cae4 (undefined) INCLUDED: 0.0000km
10-23 17:49:05.517 I/ReactNativeJS(18100): Γ¥î [DRIVER-SERVICE] Driver 058f85df-35b3-4027-81a1-bd52a0df8e4a (undefined) skipped: no recent location
10-23 17:49:05.517 I/ReactNativeJS(18100): ≡ƒôè [DRIVER-SERVICE] ===== DIRECT DATABASE ACCESS RESULT =====
10-23 17:49:05.517 I/ReactNativeJS(18100): '≡ƒôè [DRIVER-SERVICE] Final summary:', { total_drivers_processed: 21,
10-23 17:49:05.517 I/ReactNativeJS(18100):   available_drivers_found: 1,
10-23 17:49:05.517 I/ReactNativeJS(18100):   customer_location: { lat: 12.7486283, lng: 77.8299733 },
10-23 17:49:05.517 I/ReactNativeJS(18100):   radius_km: 10,
10-23 17:49:05.517 I/ReactNativeJS(18100):   vehicle_type_filter: 'all (no filter applied)' }
10-23 17:49:05.517 I/ReactNativeJS(18100): '≡ƒöä [DRIVER-SERVICE] Initial fetch completed:', 1, 'drivers'
10-23 17:49:05.517 I/ReactNativeJS(18100): '≡ƒôì [HOME] Received driver locations update:', 1, 'drivers'
10-23 17:49:05.518 W/ReactNativeJS(18100): ≡ƒÅá [HOME] ===== RENDERING HOME SCREEN =====
10-23 17:49:05.518 W/ReactNativeJS(18100): '≡ƒÅá [HOME] currentLocation:', '{"altitude":771.7999877929688,"heading":0,"altitudeAccuracy":1.3601199388504028,"latitude":12.7486283,"speed":6.911815319374692e-17,"longitude":77.8299733,"accuracy":2.0250000953674316}'
10-23 17:49:05.518 W/ReactNativeJS(18100): '≡ƒÅá [HOME] pickupCoords:', '{"latitude":12.7486283,"longitude":77.8299733}'
10-23 17:49:05.518 W/ReactNativeJS(18100): '≡ƒÅá [HOME] destinationCoords:', 'null'
10-23 17:49:05.518 W/ReactNativeJS(18100): '≡ƒÅá [HOME] pickupLocation text:', 'PRXJ+F32, Brindavan Nagar, Plot 87, NGGO\'s Colony, Anand Nagar, Hosur, Tamil Nadu 635109, India'
10-23 17:49:05.518 W/ReactNativeJS(18100): '≡ƒÅá [HOME] availableDrivers count:', 1
10-23 17:49:05.518 W/ReactNativeJS(18100): '≡ƒÅá [HOME] showDriversOnMap:', true
10-23 17:49:05.518 I/ReactNativeJS(18100): '≡ƒÅá≡ƒÅá≡ƒÅá [HOME-V2] ABOUT TO RENDER SimpleHosurMap with props:', { hasUserLocation: true,
10-23 17:49:05.518 I/ReactNativeJS(18100):   hasPickup: true,
10-23 17:49:05.518 I/ReactNativeJS(18100):   hasDestination: false,
10-23 17:49:05.518 I/ReactNativeJS(18100):   showDriversOnMap: true,
10-23 17:49:05.518 I/ReactNativeJS(18100):   timestamp: '2025-10-23T12:19:05.518Z' }
10-23 17:49:05.518 I/ReactNativeJS(18100): ≡ƒº¬≡ƒº¬≡ƒº¬ TEST MAP RENDERING NOW
10-23 17:49:05.518 I/ReactNativeJS(18100): '≡ƒº¬ Props received:', [ 'userLocation',
10-23 17:49:05.518 I/ReactNativeJS(18100):   'pickupLocation',
10-23 17:49:05.518 I/ReactNativeJS(18100):   'destinationLocation',
10-23 17:49:05.518 I/ReactNativeJS(18100):   'onRegionChangeComplete',
10-23 17:49:05.518 I/ReactNativeJS(18100):   'onDestinationDragEnd',
10-23 17:49:05.518 I/ReactNativeJS(18100):   'showCenteredPin',
10-23 17:49:05.518 I/ReactNativeJS(18100):   'availableDrivers',
10-23 17:49:05.518 I/ReactNativeJS(18100):   'showDrivers' ]
10-23 17:49:05.529 I/ReactNativeJS(18100): '≡ƒôì [DRIVER-SERVICE] Found locations:', { total: 1,
10-23 17:49:05.529 I/ReactNativeJS(18100):   details:
10-23 17:49:05.529 I/ReactNativeJS(18100):    [ { user_id: '1c4ac410-54d8-4b5e-960b-3afcbebd115d',
10-23 17:49:05.529 I/ReactNativeJS(18100):        coordinates: { lat: 12.7486296, lng: 77.8299689 },
10-23 17:49:05.529 I/ReactNativeJS(18100):        updated_at: '2025-10-23T12:18:41.271673+00:00',
10-23 17:49:05.529 I/ReactNativeJS(18100):        age_minutes: 0 } ] }
10-23 17:49:05.529 I/ReactNativeJS(18100): ≡ƒöì [DRIVER-SERVICE] Step 3: Processing drivers with distance calculation...
10-23 17:49:05.529 I/ReactNativeJS(18100): '≡ƒöì [DRIVER-SERVICE] Customer coordinates for distance calc:', { lat: 12.7486283,
10-23 17:49:05.529 I/ReactNativeJS(18100):   lng: 77.8299733,
10-23 17:49:05.529 I/ReactNativeJS(18100):   type: 'number',
10-23 17:49:05.529 I/ReactNativeJS(18100):   isValid: true }
10-23 17:49:05.529 I/ReactNativeJS(18100): Γ¥î [DRIVER-SERVICE] Driver 22480cc3-665c-407e-ad8a-8eafde67706b (undefined) skipped: no recent location
10-23 17:49:05.529 I/ReactNativeJS(18100): Γ¥î [DRIVER-SERVICE] Driver 76b66a88-dff9-4965-9e36-8a92023f155d (undefined) skipped: no recent location
10-23 17:49:05.529 I/ReactNativeJS(18100): Γ¥î [DRIVER-SERVICE] Driver 6f55e87b-6558-48df-af8c-d69190918b32 (undefined) skipped: no recent location
10-23 17:49:05.529 I/ReactNativeJS(18100): Γ¥î [DRIVER-SERVICE] Driver 97a4ba58-9431-48e5-ac8f-3472b8357179 (undefined) skipped: no recent location
10-23 17:49:05.529 I/ReactNativeJS(18100): Γ¥î [DRIVER-SERVICE] Driver c568b21d-0975-4388-a9fb-cc00013b6d4f (undefined) skipped: no recent location
10-23 17:49:05.529 I/ReactNativeJS(18100): Γ¥î [DRIVER-SERVICE] Driver 7055c2f9-99fa-4d96-bc6c-079b5cda6f56 (undefined) skipped: no recent location
10-23 17:49:05.529 I/ReactNativeJS(18100): Γ¥î [DRIVER-SERVICE] Driver 770e8400-e29b-41d4-a716-446655440001 (undefined) skipped: no recent location
10-23 17:49:05.529 I/ReactNativeJS(18100): Γ¥î [DRIVER-SERVICE] Driver 770e8400-e29b-41d4-a716-446655440002 (undefined) skipped: no recent location
10-23 17:49:05.529 I/ReactNativeJS(18100): Γ¥î [DRIVER-SERVICE] Driver 43d81d7d-e647-46cf-8599-11f63996b03e (undefined) skipped: no recent location
10-23 17:49:05.529 I/ReactNativeJS(18100): Γ¥î [DRIVER-SERVICE] Driver 770e8400-e29b-41d4-a716-446655440003 (undefined) skipped: no recent location
10-23 17:49:05.529 I/ReactNativeJS(18100): Γ¥î [DRIVER-SERVICE] Driver 770e8400-e29b-41d4-a716-446655440004 (undefined) skipped: no recent location
10-23 17:49:05.529 I/ReactNativeJS(18100): Γ¥î [DRIVER-SERVICE] Driver 770e8400-e29b-41d4-a716-446655440005 (undefined) skipped: no recent location
10-23 17:49:05.529 I/ReactNativeJS(18100): Γ¥î [DRIVER-SERVICE] Driver 489b94a7-777b-4e11-ba5c-17e0a3173737 (undefined) skipped: no recent location
10-23 17:49:05.529 I/ReactNativeJS(18100): Γ¥î [DRIVER-SERVICE] Driver d7b4a339-2ba5-45ed-a2ec-238548a8eab6 (undefined) skipped: no recent location
10-23 17:49:05.529 I/ReactNativeJS(18100): Γ¥î [DRIVER-SERVICE] Driver 38ee94d8-ac2d-450e-8084-0bef654546d7 (undefined) skipped: no recent location
10-23 17:49:05.529 I/ReactNativeJS(18100): Γ¥î [DRIVER-SERVICE] Driver b4613ecf-44b5-49ba-8613-f8993b6db1d6 (undefined) skipped: no recent location
10-23 17:49:05.529 I/ReactNativeJS(18100): Γ¥î [DRIVER-SERVICE] Driver 631f4ab4-c643-45a8-addd-541595b0fe86 (undefined) skipped: no recent location
10-23 17:49:05.529 I/ReactNativeJS(18100): Γ¥î [DRIVER-SERVICE] Driver 0330d75a-67b0-4b12-b9b7-22a241af9c57 (undefined) skipped: no recent location
10-23 17:49:05.529 I/ReactNativeJS(18100): Γ¥î [DRIVER-SERVICE] Driver 707e2d38-7346-4a2e-bddb-e1157475f786 (undefined) skipped: no recent location
10-23 17:49:05.529 I/ReactNativeJS(18100): ≡ƒÜù [DRIVER-SERVICE] Driver eb91d7e5-e2f2-4021-a8c8-3739a3d4cae4 (undefined) vehicle type: sedan
10-23 17:49:05.529 I/ReactNativeJS(18100): ≡ƒôÉ [DISTANCE-SERVICE] ===== DISTANCE CALCULATION DEBUG =====
10-23 17:49:05.529 I/ReactNativeJS(18100): '≡ƒôÉ [DISTANCE-SERVICE] Raw inputs:', { lat1: 12.7486283,
10-23 17:49:05.529 I/ReactNativeJS(18100):   lon1: 77.8299733,
10-23 17:49:05.529 I/ReactNativeJS(18100):   lat2: 12.7486296,
10-23 17:49:05.529 I/ReactNativeJS(18100):   lon2: 77.8299689 }
10-23 17:49:05.529 I/ReactNativeJS(18100): '≡ƒôÉ [DISTANCE-SERVICE] Converted inputs:', { latitude1: 12.7486283,
10-23 17:49:05.529 I/ReactNativeJS(18100):   longitude1: 77.8299733,
10-23 17:49:05.529 I/ReactNativeJS(18100):   latitude2: 12.7486296,
10-23 17:49:05.529 I/ReactNativeJS(18100):   longitude2: 77.8299689 }
10-23 17:49:05.530 I/ReactNativeJS(18100): '≡ƒôÉ [DISTANCE-SERVICE] Coordinate differences:', { lat_diff: 0.000001299999999204715,
10-23 17:49:05.530 I/ReactNativeJS(18100):   lng_diff: 0.0000044000000087862645,
10-23 17:49:05.530 I/ReactNativeJS(18100):   very_close: true,
10-23 17:49:05.530 I/ReactNativeJS(18100):   essentially_same: true }
10-23 17:49:05.530 I/ReactNativeJS(18100): ≡ƒôÉ [DISTANCE-SERVICE] Coordinates are essentially the same, returning 0km
10-23 17:49:05.530 I/ReactNativeJS(18100): '≡ƒôÅ [DRIVER-SERVICE] Distance for driver eb91d7e5-e2f2-4021-a8c8-3739a3d4cae4 (undefined):', { distance_km: '0.0000',
10-23 17:49:05.530 I/ReactNativeJS(18100):   within_radius: true,
10-23 17:49:05.530 I/ReactNativeJS(18100):   radius_limit: '10km',
10-23 17:49:05.530 I/ReactNativeJS(18100):   driver_coords: { lat: 12.7486296, lng: 77.8299689 },
10-23 17:49:05.530 I/ReactNativeJS(18100):   customer_coords: { lat: 12.7486283, lng: 77.8299733 } }
10-23 17:49:05.530 I/ReactNativeJS(18100): Γ£à [DRIVER-SERVICE] Driver eb91d7e5-e2f2-4021-a8c8-3739a3d4cae4 (undefined) INCLUDED: 0.0000km
10-23 17:49:05.530 I/ReactNativeJS(18100): Γ¥î [DRIVER-SERVICE] Driver 058f85df-35b3-4027-81a1-bd52a0df8e4a (undefined) skipped: no recent location
10-23 17:49:05.530 I/ReactNativeJS(18100): ≡ƒôè [DRIVER-SERVICE] ===== DIRECT DATABASE ACCESS RESULT =====
10-23 17:49:05.530 I/ReactNativeJS(18100): '≡ƒôè [DRIVER-SERVICE] Final summary:', { total_drivers_processed: 21,
10-23 17:49:05.530 I/ReactNativeJS(18100):   available_drivers_found: 1,
10-23 17:49:05.530 I/ReactNativeJS(18100):   customer_location: { lat: 12.7486283, lng: 77.8299733 },
10-23 17:49:05.530 I/ReactNativeJS(18100):   radius_km: 10,
10-23 17:49:05.530 I/ReactNativeJS(18100):   vehicle_type_filter: 'all (no filter applied)' }
10-23 17:49:05.530 I/ReactNativeJS(18100): '≡ƒöä [DRIVER-SERVICE] Initial fetch completed:', 1, 'drivers'
10-23 17:49:05.530 I/ReactNativeJS(18100): '≡ƒôì [HOME] Received driver locations update:', 1, 'drivers'
10-23 17:49:05.530 I/ReactNativeJS(18100): ≡ƒôè [HOME] ===== AVAILABLE DRIVERS STATE CHANGED =====
10-23 17:49:05.531 I/ReactNativeJS(18100): '≡ƒôè [HOME] availableDrivers state update:', { count: 1,
10-23 17:49:05.531 I/ReactNativeJS(18100):   showDriversOnMap: true,
10-23 17:49:05.531 I/ReactNativeJS(18100):   driversPassedToMap: 1,
10-23 17:49:05.531 I/ReactNativeJS(18100):   drivers:
10-23 17:49:05.531 I/ReactNativeJS(18100):    [ { id: 'eb91d7e5-e2f2-4021-a8c8-3739a3d4cae4',
10-23 17:49:05.531 I/ReactNativeJS(18100):        vehicle_type: 'sedan',
10-23 17:49:05.531 I/ReactNativeJS(18100):        distance: '0.00km',
10-23 17:49:05.531 I/ReactNativeJS(18100):        coordinates: { lat: 12.7486296, lng: 77.8299689 },
10-23 17:49:05.531 I/ReactNativeJS(18100):        heading: null,
10-23 17:49:05.531 I/ReactNativeJS(18100):        rating: 5 } ] }
10-23 17:49:05.531 I/ReactNativeJS(18100): ≡ƒù║∩╕Å [HOME] ===== DRIVERS BEING PASSED TO MAP =====
10-23 17:49:05.531 I/ReactNativeJS(18100): '≡ƒù║∩╕Å [HOME] Map will receive', 1, 'drivers:'
10-23 17:49:05.531 I/ReactNativeJS(18100): '≡ƒù║∩╕Å [HOME] Driver 1 for map:', { driver_id: 'eb91d7e5-e2f2-4021-a8c8-3739a3d4cae4',
10-23 17:49:05.531 I/ReactNativeJS(18100):   user_id: '1c4ac410-54d8-4b5e-960b-3afcbebd115d',
10-23 17:49:05.531 I/ReactNativeJS(18100):   vehicle_type: 'sedan',
10-23 17:49:05.531 I/ReactNativeJS(18100):   coordinates: { lat: 12.7486296, lng: 77.8299689 },
10-23 17:49:05.531 I/ReactNativeJS(18100):   distance: '0.0000km',
10-23 17:49:05.531 I/ReactNativeJS(18100):   rating: 5,
10-23 17:49:05.531 I/ReactNativeJS(18100):   heading: null,
10-23 17:49:05.531 I/ReactNativeJS(18100):   updated_at: '2025-10-23T12:18:41.271673+00:00' }
10-23 17:49:05.531 W/ReactNativeJS(18100): ≡ƒÅá [HOME] ===== RENDERING HOME SCREEN =====
10-23 17:49:05.531 W/ReactNativeJS(18100): '≡ƒÅá [HOME] currentLocation:', '{"altitude":771.7999877929688,"heading":0,"altitudeAccuracy":1.3601199388504028,"latitude":12.7486283,"speed":6.911815319374692e-17,"longitude":77.8299733,"accuracy":2.0250000953674316}'
10-23 17:49:05.531 W/ReactNativeJS(18100): '≡ƒÅá [HOME] pickupCoords:', '{"latitude":12.7486283,"longitude":77.8299733}'
10-23 17:49:05.531 W/ReactNativeJS(18100): '≡ƒÅá [HOME] destinationCoords:', 'null'
10-23 17:49:05.531 W/ReactNativeJS(18100): '≡ƒÅá [HOME] pickupLocation text:', 'PRXJ+F32, Brindavan Nagar, Plot 87, NGGO\'s Colony, Anand Nagar, Hosur, Tamil Nadu 635109, India'
10-23 17:49:05.532 W/ReactNativeJS(18100): '≡ƒÅá [HOME] availableDrivers count:', 1
10-23 17:49:05.532 W/ReactNativeJS(18100): '≡ƒÅá [HOME] showDriversOnMap:', true
10-23 17:49:05.532 I/ReactNativeJS(18100): '≡ƒÅá≡ƒÅá≡ƒÅá [HOME-V2] ABOUT TO RENDER SimpleHosurMap with props:', { hasUserLocation: true,
10-23 17:49:05.532 I/ReactNativeJS(18100):   hasPickup: true,
10-23 17:49:05.532 I/ReactNativeJS(18100):   hasDestination: false,
10-23 17:49:05.532 I/ReactNativeJS(18100):   showDriversOnMap: true,
10-23 17:49:05.532 I/ReactNativeJS(18100):   timestamp: '2025-10-23T12:19:05.532Z' }
10-23 17:49:05.532 I/ReactNativeJS(18100): ≡ƒº¬≡ƒº¬≡ƒº¬ TEST MAP RENDERING NOW
10-23 17:49:05.532 I/ReactNativeJS(18100): '≡ƒº¬ Props received:', [ 'userLocation',
10-23 17:49:05.532 I/ReactNativeJS(18100):   'pickupLocation',
10-23 17:49:05.532 I/ReactNativeJS(18100):   'destinationLocation',
10-23 17:49:05.532 I/ReactNativeJS(18100):   'onRegionChangeComplete',
10-23 17:49:05.532 I/ReactNativeJS(18100):   'onDestinationDragEnd',
10-23 17:49:05.532 I/ReactNativeJS(18100):   'showCenteredPin',
10-23 17:49:05.532 I/ReactNativeJS(18100):   'availableDrivers',
10-23 17:49:05.532 I/ReactNativeJS(18100):   'showDrivers' ]
10-23 17:49:05.538 I/ReactNativeJS(18100): ≡ƒôè [HOME] ===== AVAILABLE DRIVERS STATE CHANGED =====
10-23 17:49:05.538 I/ReactNativeJS(18100): '≡ƒôè [HOME] availableDrivers state update:', { count: 1,
10-23 17:49:05.538 I/ReactNativeJS(18100):   showDriversOnMap: true,
10-23 17:49:05.538 I/ReactNativeJS(18100):   driversPassedToMap: 1,
10-23 17:49:05.538 I/ReactNativeJS(18100):   drivers:
10-23 17:49:05.538 I/ReactNativeJS(18100):    [ { id: 'eb91d7e5-e2f2-4021-a8c8-3739a3d4cae4',
10-23 17:49:05.538 I/ReactNativeJS(18100):        vehicle_type: 'sedan',
10-23 17:49:05.538 I/ReactNativeJS(18100):        distance: '0.00km',
10-23 17:49:05.538 I/ReactNativeJS(18100):        coordinates: { lat: 12.7486296, lng: 77.8299689 },
10-23 17:49:05.538 I/ReactNativeJS(18100):        heading: null,
10-23 17:49:05.538 I/ReactNativeJS(18100):        rating: 5 } ] }
10-23 17:49:05.538 I/ReactNativeJS(18100): ≡ƒù║∩╕Å [HOME] ===== DRIVERS BEING PASSED TO MAP =====
10-23 17:49:05.538 I/ReactNativeJS(18100): '≡ƒù║∩╕Å [HOME] Map will receive', 1, 'drivers:'
10-23 17:49:05.539 I/ReactNativeJS(18100): '≡ƒù║∩╕Å [HOME] Driver 1 for map:', { driver_id: 'eb91d7e5-e2f2-4021-a8c8-3739a3d4cae4',
10-23 17:49:05.539 I/ReactNativeJS(18100):   user_id: '1c4ac410-54d8-4b5e-960b-3afcbebd115d',
10-23 17:49:05.539 I/ReactNativeJS(18100):   vehicle_type: 'sedan',
10-23 17:49:05.539 I/ReactNativeJS(18100):   coordinates: { lat: 12.7486296, lng: 77.8299689 },
10-23 17:49:05.539 I/ReactNativeJS(18100):   distance: '0.0000km',
10-23 17:49:05.539 I/ReactNativeJS(18100):   rating: 5,
10-23 17:49:05.539 I/ReactNativeJS(18100):   heading: null,
10-23 17:49:05.539 I/ReactNativeJS(18100):   updated_at: '2025-10-23T12:18:41.271673+00:00' }
10-23 17:49:05.821 I/ReactNativeJS(18100): '≡ƒôì [DRIVER-SERVICE] Found locations:', { total: 1,
10-23 17:49:05.821 I/ReactNativeJS(18100):   details:
10-23 17:49:05.821 I/ReactNativeJS(18100):    [ { user_id: '1c4ac410-54d8-4b5e-960b-3afcbebd115d',
10-23 17:49:05.821 I/ReactNativeJS(18100):        coordinates: { lat: 12.7486296, lng: 77.8299689 },
10-23 17:49:05.821 I/ReactNativeJS(18100):        updated_at: '2025-10-23T12:18:41.271673+00:00',
10-23 17:49:05.821 I/ReactNativeJS(18100):        age_minutes: 0 } ] }
10-23 17:49:05.821 I/ReactNativeJS(18100): ≡ƒöì [DRIVER-SERVICE] Step 3: Processing drivers with distance calculation...
10-23 17:49:05.822 I/ReactNativeJS(18100): '≡ƒöì [DRIVER-SERVICE] Customer coordinates for distance calc:', { lat: 12.7486283,
10-23 17:49:05.822 I/ReactNativeJS(18100):   lng: 77.8299733,
10-23 17:49:05.822 I/ReactNativeJS(18100):   type: 'number',
10-23 17:49:05.822 I/ReactNativeJS(18100):   isValid: true }
10-23 17:49:05.822 I/ReactNativeJS(18100): Γ¥î [DRIVER-SERVICE] Driver 22480cc3-665c-407e-ad8a-8eafde67706b (undefined) skipped: no recent location
10-23 17:49:05.822 I/ReactNativeJS(18100): Γ¥î [DRIVER-SERVICE] Driver 76b66a88-dff9-4965-9e36-8a92023f155d (undefined) skipped: no recent location
10-23 17:49:05.822 I/ReactNativeJS(18100): Γ¥î [DRIVER-SERVICE] Driver 6f55e87b-6558-48df-af8c-d69190918b32 (undefined) skipped: no recent location
10-23 17:49:05.822 I/ReactNativeJS(18100): Γ¥î [DRIVER-SERVICE] Driver 97a4ba58-9431-48e5-ac8f-3472b8357179 (undefined) skipped: no recent location
10-23 17:49:05.822 I/ReactNativeJS(18100): Γ¥î [DRIVER-SERVICE] Driver c568b21d-0975-4388-a9fb-cc00013b6d4f (undefined) skipped: no recent location
10-23 17:49:05.822 I/ReactNativeJS(18100): Γ¥î [DRIVER-SERVICE] Driver 7055c2f9-99fa-4d96-bc6c-079b5cda6f56 (undefined) skipped: no recent location
10-23 17:49:05.822 I/ReactNativeJS(18100): Γ¥î [DRIVER-SERVICE] Driver 770e8400-e29b-41d4-a716-446655440001 (undefined) skipped: no recent location
10-23 17:49:05.822 I/ReactNativeJS(18100): Γ¥î [DRIVER-SERVICE] Driver 770e8400-e29b-41d4-a716-446655440002 (undefined) skipped: no recent location
10-23 17:49:05.822 I/ReactNativeJS(18100): Γ¥î [DRIVER-SERVICE] Driver 43d81d7d-e647-46cf-8599-11f63996b03e (undefined) skipped: no recent location
10-23 17:49:05.822 I/ReactNativeJS(18100): Γ¥î [DRIVER-SERVICE] Driver 770e8400-e29b-41d4-a716-446655440003 (undefined) skipped: no recent location
10-23 17:49:05.822 I/ReactNativeJS(18100): Γ¥î [DRIVER-SERVICE] Driver 770e8400-e29b-41d4-a716-446655440004 (undefined) skipped: no recent location
10-23 17:49:05.822 I/ReactNativeJS(18100): Γ¥î [DRIVER-SERVICE] Driver 770e8400-e29b-41d4-a716-446655440005 (undefined) skipped: no recent location
10-23 17:49:05.822 I/ReactNativeJS(18100): Γ¥î [DRIVER-SERVICE] Driver 489b94a7-777b-4e11-ba5c-17e0a3173737 (undefined) skipped: no recent location
10-23 17:49:05.822 I/ReactNativeJS(18100): Γ¥î [DRIVER-SERVICE] Driver d7b4a339-2ba5-45ed-a2ec-238548a8eab6 (undefined) skipped: no recent location
10-23 17:49:05.822 I/ReactNativeJS(18100): Γ¥î [DRIVER-SERVICE] Driver 38ee94d8-ac2d-450e-8084-0bef654546d7 (undefined) skipped: no recent location
10-23 17:49:05.822 I/ReactNativeJS(18100): Γ¥î [DRIVER-SERVICE] Driver b4613ecf-44b5-49ba-8613-f8993b6db1d6 (undefined) skipped: no recent location
10-23 17:49:05.822 I/ReactNativeJS(18100): Γ¥î [DRIVER-SERVICE] Driver 631f4ab4-c643-45a8-addd-541595b0fe86 (undefined) skipped: no recent location
10-23 17:49:05.822 I/ReactNativeJS(18100): Γ¥î [DRIVER-SERVICE] Driver 0330d75a-67b0-4b12-b9b7-22a241af9c57 (undefined) skipped: no recent location
10-23 17:49:05.822 I/ReactNativeJS(18100): Γ¥î [DRIVER-SERVICE] Driver 707e2d38-7346-4a2e-bddb-e1157475f786 (undefined) skipped: no recent location
10-23 17:49:05.822 I/ReactNativeJS(18100): ≡ƒÜù [DRIVER-SERVICE] Driver eb91d7e5-e2f2-4021-a8c8-3739a3d4cae4 (undefined) vehicle type: sedan
10-23 17:49:05.822 I/ReactNativeJS(18100): ≡ƒôÉ [DISTANCE-SERVICE] ===== DISTANCE CALCULATION DEBUG =====
10-23 17:49:05.822 I/ReactNativeJS(18100): '≡ƒôÉ [DISTANCE-SERVICE] Raw inputs:', { lat1: 12.7486283,
10-23 17:49:05.822 I/ReactNativeJS(18100):   lon1: 77.8299733,
10-23 17:49:05.822 I/ReactNativeJS(18100):   lat2: 12.7486296,
10-23 17:49:05.822 I/ReactNativeJS(18100):   lon2: 77.8299689 }
10-23 17:49:05.823 I/ReactNativeJS(18100): '≡ƒôÉ [DISTANCE-SERVICE] Converted inputs:', { latitude1: 12.7486283,
10-23 17:49:05.823 I/ReactNativeJS(18100):   longitude1: 77.8299733,
10-23 17:49:05.823 I/ReactNativeJS(18100):   latitude2: 12.7486296,
10-23 17:49:05.823 I/ReactNativeJS(18100):   longitude2: 77.8299689 }
10-23 17:49:05.823 I/ReactNativeJS(18100): '≡ƒôÉ [DISTANCE-SERVICE] Coordinate differences:', { lat_diff: 0.000001299999999204715,
10-23 17:49:05.823 I/ReactNativeJS(18100):   lng_diff: 0.0000044000000087862645,
10-23 17:49:05.823 I/ReactNativeJS(18100):   very_close: true,
10-23 17:49:05.823 I/ReactNativeJS(18100):   essentially_same: true }
10-23 17:49:05.823 I/ReactNativeJS(18100): ≡ƒôÉ [DISTANCE-SERVICE] Coordinates are essentially the same, returning 0km
10-23 17:49:05.823 I/ReactNativeJS(18100): '≡ƒôÅ [DRIVER-SERVICE] Distance for driver eb91d7e5-e2f2-4021-a8c8-3739a3d4cae4 (undefined):', { distance_km: '0.0000',
10-23 17:49:05.823 I/ReactNativeJS(18100):   within_radius: true,
10-23 17:49:05.823 I/ReactNativeJS(18100):   radius_limit: '10km',
10-23 17:49:05.823 I/ReactNativeJS(18100):   driver_coords: { lat: 12.7486296, lng: 77.8299689 },
10-23 17:49:05.823 I/ReactNativeJS(18100):   customer_coords: { lat: 12.7486283, lng: 77.8299733 } }
10-23 17:49:05.823 I/ReactNativeJS(18100): Γ£à [DRIVER-SERVICE] Driver eb91d7e5-e2f2-4021-a8c8-3739a3d4cae4 (undefined) INCLUDED: 0.0000km
10-23 17:49:05.823 I/ReactNativeJS(18100): Γ¥î [DRIVER-SERVICE] Driver 058f85df-35b3-4027-81a1-bd52a0df8e4a (undefined) skipped: no recent location
10-23 17:49:05.823 I/ReactNativeJS(18100): ≡ƒôè [DRIVER-SERVICE] ===== DIRECT DATABASE ACCESS RESULT =====
10-23 17:49:05.823 I/ReactNativeJS(18100): '≡ƒôè [DRIVER-SERVICE] Final summary:', { total_drivers_processed: 21,
10-23 17:49:05.823 I/ReactNativeJS(18100):   available_drivers_found: 1,
10-23 17:49:05.823 I/ReactNativeJS(18100):   customer_location: { lat: 12.7486283, lng: 77.8299733 },
10-23 17:49:05.823 I/ReactNativeJS(18100):   radius_km: 10,
10-23 17:49:05.823 I/ReactNativeJS(18100):   vehicle_type_filter: 'all (no filter applied)' }
10-23 17:49:05.824 I/ReactNativeJS(18100): '≡ƒöä [DRIVER-SERVICE] Initial fetch completed:', 1, 'drivers'
10-23 17:49:05.824 I/ReactNativeJS(18100): '≡ƒôì [HOME] Received driver locations update:', 1, 'drivers'
10-23 17:49:05.825 W/ReactNativeJS(18100): ≡ƒÅá [HOME] ===== RENDERING HOME SCREEN =====
10-23 17:49:05.825 W/ReactNativeJS(18100): '≡ƒÅá [HOME] currentLocation:', '{"altitude":771.7999877929688,"heading":0,"altitudeAccuracy":1.3601199388504028,"latitude":12.7486283,"speed":6.911815319374692e-17,"longitude":77.8299733,"accuracy":2.0250000953674316}'
10-23 17:49:05.825 W/ReactNativeJS(18100): '≡ƒÅá [HOME] pickupCoords:', '{"latitude":12.7486283,"longitude":77.8299733}'
10-23 17:49:05.825 W/ReactNativeJS(18100): '≡ƒÅá [HOME] destinationCoords:', 'null'
10-23 17:49:05.825 W/ReactNativeJS(18100): '≡ƒÅá [HOME] pickupLocation text:', 'PRXJ+F32, Brindavan Nagar, Plot 87, NGGO\'s Colony, Anand Nagar, Hosur, Tamil Nadu 635109, India'
10-23 17:49:05.825 W/ReactNativeJS(18100): '≡ƒÅá [HOME] availableDrivers count:', 1
10-23 17:49:05.825 W/ReactNativeJS(18100): '≡ƒÅá [HOME] showDriversOnMap:', true
10-23 17:49:05.826 I/ReactNativeJS(18100): '≡ƒÅá≡ƒÅá≡ƒÅá [HOME-V2] ABOUT TO RENDER SimpleHosurMap with props:', { hasUserLocation: true,
10-23 17:49:05.826 I/ReactNativeJS(18100):   hasPickup: true,
10-23 17:49:05.826 I/ReactNativeJS(18100):   hasDestination: false,
10-23 17:49:05.826 I/ReactNativeJS(18100):   showDriversOnMap: true,
10-23 17:49:05.826 I/ReactNativeJS(18100):   timestamp: '2025-10-23T12:19:05.825Z' }
10-23 17:49:05.826 I/ReactNativeJS(18100): ≡ƒº¬≡ƒº¬≡ƒº¬ TEST MAP RENDERING NOW
10-23 17:49:05.827 I/ReactNativeJS(18100): '≡ƒº¬ Props received:', [ 'userLocation',
10-23 17:49:05.827 I/ReactNativeJS(18100):   'pickupLocation',
10-23 17:49:05.827 I/ReactNativeJS(18100):   'destinationLocation',
10-23 17:49:05.827 I/ReactNativeJS(18100):   'onRegionChangeComplete',
10-23 17:49:05.827 I/ReactNativeJS(18100):   'onDestinationDragEnd',
10-23 17:49:05.827 I/ReactNativeJS(18100):   'showCenteredPin',
10-23 17:49:05.827 I/ReactNativeJS(18100):   'availableDrivers',
10-23 17:49:05.827 I/ReactNativeJS(18100):   'showDrivers' ]
10-23 17:49:05.839 I/ReactNativeJS(18100): ≡ƒôè [HOME] ===== AVAILABLE DRIVERS STATE CHANGED =====
10-23 17:49:05.839 I/ReactNativeJS(18100): '≡ƒôè [HOME] availableDrivers state update:', { count: 1,
10-23 17:49:05.839 I/ReactNativeJS(18100):   showDriversOnMap: true,
10-23 17:49:05.839 I/ReactNativeJS(18100):   driversPassedToMap: 1,
10-23 17:49:05.839 I/ReactNativeJS(18100):   drivers:
10-23 17:49:05.839 I/ReactNativeJS(18100):    [ { id: 'eb91d7e5-e2f2-4021-a8c8-3739a3d4cae4',
10-23 17:49:05.839 I/ReactNativeJS(18100):        vehicle_type: 'sedan',
10-23 17:49:05.839 I/ReactNativeJS(18100):        distance: '0.00km',
10-23 17:49:05.839 I/ReactNativeJS(18100):        coordinates: { lat: 12.7486296, lng: 77.8299689 },
10-23 17:49:05.839 I/ReactNativeJS(18100):        heading: null,
10-23 17:49:05.839 I/ReactNativeJS(18100):        rating: 5 } ] }
10-23 17:49:05.839 I/ReactNativeJS(18100): ≡ƒù║∩╕Å [HOME] ===== DRIVERS BEING PASSED TO MAP =====
10-23 17:49:05.839 I/ReactNativeJS(18100): '≡ƒù║∩╕Å [HOME] Map will receive', 1, 'drivers:'
10-23 17:49:05.839 I/ReactNativeJS(18100): '≡ƒù║∩╕Å [HOME] Driver 1 for map:', { driver_id: 'eb91d7e5-e2f2-4021-a8c8-3739a3d4cae4',
10-23 17:49:05.839 I/ReactNativeJS(18100):   user_id: '1c4ac410-54d8-4b5e-960b-3afcbebd115d',
10-23 17:49:05.839 I/ReactNativeJS(18100):   vehicle_type: 'sedan',
10-23 17:49:05.839 I/ReactNativeJS(18100):   coordinates: { lat: 12.7486296, lng: 77.8299689 },
10-23 17:49:05.839 I/ReactNativeJS(18100):   distance: '0.0000km',
10-23 17:49:05.839 I/ReactNativeJS(18100):   rating: 5,
10-23 17:49:05.839 I/ReactNativeJS(18100):   heading: null,
10-23 17:49:05.839 I/ReactNativeJS(18100):   updated_at: '2025-10-23T12:18:41.271673+00:00' }
10-23 17:49:08.121 W/ReactNativeJS(18100): ≡ƒÅá [HOME] ===== RENDERING HOME SCREEN =====
10-23 17:49:08.121 W/ReactNativeJS(18100): '≡ƒÅá [HOME] currentLocation:', '{"altitude":771.7999877929688,"heading":0,"altitudeAccuracy":1.3601199388504028,"latitude":12.7486283,"speed":6.911815319374692e-17,"longitude":77.8299733,"accuracy":2.0250000953674316}'
10-23 17:49:08.121 W/ReactNativeJS(18100): '≡ƒÅá [HOME] pickupCoords:', '{"latitude":12.7486283,"longitude":77.8299733}'
10-23 17:49:08.121 W/ReactNativeJS(18100): '≡ƒÅá [HOME] destinationCoords:', 'null'
10-23 17:49:08.122 W/ReactNativeJS(18100): '≡ƒÅá [HOME] pickupLocation text:', 'PRXJ+F32, Brindavan Nagar, Plot 87, NGGO\'s Colony, Anand Nagar, Hosur, Tamil Nadu 635109, India'
10-23 17:49:08.122 W/ReactNativeJS(18100): '≡ƒÅá [HOME] availableDrivers count:', 1
10-23 17:49:08.122 W/ReactNativeJS(18100): '≡ƒÅá [HOME] showDriversOnMap:', true
10-23 17:49:08.122 I/ReactNativeJS(18100): '≡ƒÅá≡ƒÅá≡ƒÅá [HOME-V2] ABOUT TO RENDER SimpleHosurMap with props:', { hasUserLocation: true,
10-23 17:49:08.122 I/ReactNativeJS(18100):   hasPickup: true,
10-23 17:49:08.122 I/ReactNativeJS(18100):   hasDestination: false,
10-23 17:49:08.122 I/ReactNativeJS(18100):   showDriversOnMap: true,
10-23 17:49:08.122 I/ReactNativeJS(18100):   timestamp: '2025-10-23T12:19:08.122Z' }
10-23 17:49:08.122 I/ReactNativeJS(18100): ≡ƒº¬≡ƒº¬≡ƒº¬ TEST MAP RENDERING NOW
10-23 17:49:08.123 I/ReactNativeJS(18100): '≡ƒº¬ Props received:', [ 'userLocation',
10-23 17:49:08.123 I/ReactNativeJS(18100):   'pickupLocation',
10-23 17:49:08.123 I/ReactNativeJS(18100):   'destinationLocation',
10-23 17:49:08.123 I/ReactNativeJS(18100):   'onRegionChangeComplete',
10-23 17:49:08.123 I/ReactNativeJS(18100):   'onDestinationDragEnd',
10-23 17:49:08.123 I/ReactNativeJS(18100):   'showCenteredPin',
10-23 17:49:08.123 I/ReactNativeJS(18100):   'availableDrivers',
10-23 17:49:08.123 I/ReactNativeJS(18100):   'showDrivers' ]
10-23 17:49:11.633 I/ReactNativeJS(18100): '≡ƒöì Searching for places:', 'Bagalur '
10-23 17:49:12.066 I/ReactNativeJS(18100): '≡ƒôì Places API response:', 'OK', 5
10-23 17:49:14.190 I/ReactNativeJS(18100): '≡ƒôì Location selected:', { description: 'Bagalur, Tamil Nadu, India',
10-23 17:49:14.190 I/ReactNativeJS(18100):   coordinates: { latitude: 12.8303987, longitude: 77.86623689999999 },
10-23 17:49:14.190 I/ReactNativeJS(18100):   type: 'search' }
10-23 17:49:14.214 I/ReactNativeJS(18100): '≡ƒÆ╛ Saved location to recent searches:', 'Bagalur, Tamil Nadu, India'
10-23 17:49:14.214 I/ReactNativeJS(18100): Γ£à Calling onLocationSelect with valid coordinates
10-23 17:49:14.214 I/ReactNativeJS(18100): ≡ƒöì Destination location selected, validating zone...
10-23 17:49:14.214 I/ReactNativeJS(18100): '≡ƒöì Selected destination:', { location: 'Bagalur, Tamil Nadu, India',
10-23 17:49:14.214 I/ReactNativeJS(18100):   coords: { latitude: 12.8303987, longitude: 77.86623689999999 } }
10-23 17:49:14.214 I/ReactNativeJS(18100): '≡ƒöì Active zones for validation:', 2
10-23 17:49:14.214 I/ReactNativeJS(18100): ≡ƒöì [ZONE-VALIDATION] Starting destination zone validation
10-23 17:49:14.214 I/ReactNativeJS(18100): '≡ƒöì [ZONE-VALIDATION] Location:', 'Bagalur, Tamil Nadu, India'
10-23 17:49:14.214 I/ReactNativeJS(18100): '≡ƒöì [ZONE-VALIDATION] Coordinates:', { latitude: 12.8303987, longitude: 77.86623689999999 }
10-23 17:49:14.214 I/ReactNativeJS(18100): '≡ƒöì [ZONE-VALIDATION] Active zones available:', 2
10-23 17:49:14.214 I/ReactNativeJS(18100): '≡ƒöì [ZONE-VALIDATION] Zone names:', [ 'Inner Ring', 'Outer Ring' ]
10-23 17:49:14.215 I/ReactNativeJS(18100): '≡ƒöì [ZONE-VALIDATION] Full zone data:', '[\n  {\n    "id": "90c1bc5f-7a2d-4585-a2ef-0a85e05e138a",\n    "name": "Inner Ring",\n    "city": "Hosur",\n    "state": "Tamil Nadu",\n    "coordinates": {\n      "type": "circle",\n      "center": {\n        "lat": 12.733564125720461,\n        "lng": 77.82145902191407\n      },\n      "radius": 5882.595479495581\n    },\n    "center_latitude": 12.73356413,\n    "center_longitude": 77.82145902,\n    "radius_km": 5.88,\n    "base_fare": 50,\n    "per_km_rate": 12,\n    "surge_multiplier": 1,\n    "is_active": true,\n    "created_at": "2025-10-22T12:45:47.862374+00:00",\n    "updated_at": "2025-10-22T12:45:47.862374+00:00"\n  },\n  {\n    "id": "8d504fe8-e310-459f-b6d9-29ec5b42ecfc",\n    "name": "Outer Ring",\n    "city": "Hosur",\n    "state": "Tamil Nadu",\n    "coordinates": {\n      "type": "circle",\n      "center": {\n        "lat": 12.736626222356561,\n        "lng": 77.82943489347866\n      },\n      "radius": 13004.829888314574\n    },\n    "center_latitude": 12.73662622,\n    "center_longitude": 77.82943489,\n    "radius_km": 13,\n    "base_fare": 50,\n    "per_km_rate": 12,\n    "surge_multiplier": 1,\n    "is_active": true,\n    "created_at": "2025-10-22T12:04:26.098131+00:00",\n    "updated_at": "2025-10-22T12:04:26.098131+00:00"\n  }\n]'
10-23 17:49:14.215 I/ReactNativeJS(18100): '≡ƒöì Checking if point is in service area:', { coordinates: { latitude: 12.8303987, longitude: 77.86623689999999 },
10-23 17:49:14.215 I/ReactNativeJS(18100):   zonesCount: 2,
10-23 17:49:14.215 I/ReactNativeJS(18100):   zones:
10-23 17:49:14.215 I/ReactNativeJS(18100):    [ { name: 'Inner Ring',
10-23 17:49:14.215 I/ReactNativeJS(18100):        type: 'circle',
10-23 17:49:14.215 I/ReactNativeJS(18100):        radius_km: 5.88,
10-23 17:49:14.215 I/ReactNativeJS(18100):        center_lat: 12.73356413,
10-23 17:49:14.215 I/ReactNativeJS(18100):        center_lng: 77.82145902 },
10-23 17:49:14.215 I/ReactNativeJS(18100):      { name: 'Outer Ring',
10-23 17:49:14.215 I/ReactNativeJS(18100):        type: 'circle',
10-23 17:49:14.215 I/ReactNativeJS(18100):        radius_km: 13,
10-23 17:49:14.215 I/ReactNativeJS(18100):        center_lat: 12.73662622,
10-23 17:49:14.215 I/ReactNativeJS(18100):        center_lng: 77.82943489 } ] }
10-23 17:49:14.215 I/ReactNativeJS(18100): ≡ƒöì Using circle-based zone validation
10-23 17:49:14.215 I/ReactNativeJS(18100): '≡ƒöì Raw Outer Ring data:', { center_latitude: 12.73662622,
10-23 17:49:14.215 I/ReactNativeJS(18100):   center_latitude_type: 'number',
10-23 17:49:14.215 I/ReactNativeJS(18100):   center_longitude: 77.82943489,
10-23 17:49:14.215 I/ReactNativeJS(18100):   center_longitude_type: 'number',
10-23 17:49:14.215 I/ReactNativeJS(18100):   radius_km: 13,
10-23 17:49:14.215 I/ReactNativeJS(18100):   radius_km_type: 'number' }
10-23 17:49:14.215 I/ReactNativeJS(18100): '≡ƒöì Parsed values:', { centerLat: 12.73662622,
10-23 17:49:14.215 I/ReactNativeJS(18100):   centerLng: 77.82943489,
10-23 17:49:14.215 I/ReactNativeJS(18100):   radiusKm: 13,
10-23 17:49:14.215 I/ReactNativeJS(18100):   allValid: true }
10-23 17:49:14.215 I/ReactNativeJS(18100): '≡ƒöì Circle zone check:', { point: { latitude: 12.8303987, longitude: 77.86623689999999 },
10-23 17:49:14.215 I/ReactNativeJS(18100):   center: { latitude: 12.73662622, longitude: 77.82943489 },
10-23 17:49:14.215 I/ReactNativeJS(18100):   radiusKm: '13km',
10-23 17:49:14.215 I/ReactNativeJS(18100):   calculatedDistance: '11.16km',
10-23 17:49:14.215 I/ReactNativeJS(18100):   difference: '-1.84km',
10-23 17:49:14.215 I/ReactNativeJS(18100):   isInside: 'Γ£à INSIDE' }
10-23 17:49:14.215 I/ReactNativeJS(18100): ≡ƒöì Point is INSIDE Outer Ring (13km radius)
10-23 17:49:14.215 I/ReactNativeJS(18100): Γ£à [ZONE-VALIDATION] Destination location is within active zones
10-23 17:49:14.216 W/ReactNativeJS(18100): ≡ƒÅá [HOME] ===== RENDERING HOME SCREEN =====
10-23 17:49:14.216 W/ReactNativeJS(18100): '≡ƒÅá [HOME] currentLocation:', '{"altitude":771.7999877929688,"heading":0,"altitudeAccuracy":1.3601199388504028,"latitude":12.7486283,"speed":6.911815319374692e-17,"longitude":77.8299733,"accuracy":2.0250000953674316}'
10-23 17:49:14.216 W/ReactNativeJS(18100): '≡ƒÅá [HOME] pickupCoords:', '{"latitude":12.7486283,"longitude":77.8299733}'
10-23 17:49:14.216 W/ReactNativeJS(18100): '≡ƒÅá [HOME] destinationCoords:', 'null'
10-23 17:49:14.216 W/ReactNativeJS(18100): '≡ƒÅá [HOME] pickupLocation text:', 'PRXJ+F32, Brindavan Nagar, Plot 87, NGGO\'s Colony, Anand Nagar, Hosur, Tamil Nadu 635109, India'
10-23 17:49:14.216 W/ReactNativeJS(18100): '≡ƒÅá [HOME] availableDrivers count:', 1
10-23 17:49:14.217 W/ReactNativeJS(18100): '≡ƒÅá [HOME] showDriversOnMap:', true
10-23 17:49:14.217 I/ReactNativeJS(18100): '≡ƒÅá≡ƒÅá≡ƒÅá [HOME-V2] ABOUT TO RENDER SimpleHosurMap with props:', { hasUserLocation: true,
10-23 17:49:14.217 I/ReactNativeJS(18100):   hasPickup: true,
10-23 17:49:14.217 I/ReactNativeJS(18100):   hasDestination: false,
10-23 17:49:14.217 I/ReactNativeJS(18100):   showDriversOnMap: true,
10-23 17:49:14.217 I/ReactNativeJS(18100):   timestamp: '2025-10-23T12:19:14.217Z' }
10-23 17:49:14.217 I/ReactNativeJS(18100): ≡ƒº¬≡ƒº¬≡ƒº¬ TEST MAP RENDERING NOW
10-23 17:49:14.217 I/ReactNativeJS(18100): '≡ƒº¬ Props received:', [ 'userLocation',
10-23 17:49:14.217 I/ReactNativeJS(18100):   'pickupLocation',
10-23 17:49:14.217 I/ReactNativeJS(18100):   'destinationLocation',
10-23 17:49:14.217 I/ReactNativeJS(18100):   'onRegionChangeComplete',
10-23 17:49:14.217 I/ReactNativeJS(18100):   'onDestinationDragEnd',
10-23 17:49:14.217 I/ReactNativeJS(18100):   'showCenteredPin',
10-23 17:49:14.217 I/ReactNativeJS(18100):   'availableDrivers',
10-23 17:49:14.217 I/ReactNativeJS(18100):   'showDrivers' ]
10-23 17:49:14.232 W/ReactNativeJS(18100): ≡ƒÅá [HOME] ===== RENDERING HOME SCREEN =====
10-23 17:49:14.232 W/ReactNativeJS(18100): '≡ƒÅá [HOME] currentLocation:', '{"altitude":771.7999877929688,"heading":0,"altitudeAccuracy":1.3601199388504028,"latitude":12.7486283,"speed":6.911815319374692e-17,"longitude":77.8299733,"accuracy":2.0250000953674316}'
10-23 17:49:14.232 W/ReactNativeJS(18100): '≡ƒÅá [HOME] pickupCoords:', '{"latitude":12.7486283,"longitude":77.8299733}'
10-23 17:49:14.232 W/ReactNativeJS(18100): '≡ƒÅá [HOME] destinationCoords:', '{"latitude":12.8303987,"longitude":77.86623689999999}'
10-23 17:49:14.232 W/ReactNativeJS(18100): '≡ƒÅá [HOME] pickupLocation text:', 'PRXJ+F32, Brindavan Nagar, Plot 87, NGGO\'s Colony, Anand Nagar, Hosur, Tamil Nadu 635109, India'
10-23 17:49:14.232 W/ReactNativeJS(18100): '≡ƒÅá [HOME] availableDrivers count:', 1
10-23 17:49:14.232 W/ReactNativeJS(18100): '≡ƒÅá [HOME] showDriversOnMap:', true
10-23 17:49:14.232 I/ReactNativeJS(18100): '≡ƒÅá≡ƒÅá≡ƒÅá [HOME-V2] ABOUT TO RENDER SimpleHosurMap with props:', { hasUserLocation: true,
10-23 17:49:14.232 I/ReactNativeJS(18100):   hasPickup: true,
10-23 17:49:14.232 I/ReactNativeJS(18100):   hasDestination: true,
10-23 17:49:14.232 I/ReactNativeJS(18100):   showDriversOnMap: true,
10-23 17:49:14.232 I/ReactNativeJS(18100):   timestamp: '2025-10-23T12:19:14.232Z' }
10-23 17:49:14.233 I/ReactNativeJS(18100): '≡ƒÆ░ [UI] Displaying fare for hatchback:', { fare: 0,
10-23 17:49:14.233 I/ReactNativeJS(18100):   isSelected: false,
10-23 17:49:14.233 I/ReactNativeJS(18100):   showingCalculated: false,
10-23 17:49:14.233 I/ReactNativeJS(18100):   source: 'minimum_fare' }
10-23 17:49:14.244 I/ReactNativeJS(18100): '≡ƒÆ░ [UI] Displaying fare for hatchback_ac:', { fare: 0,
10-23 17:49:14.244 I/ReactNativeJS(18100):   isSelected: false,
10-23 17:49:14.244 I/ReactNativeJS(18100):   showingCalculated: false,
10-23 17:49:14.244 I/ReactNativeJS(18100):   source: 'minimum_fare' }
10-23 17:49:14.247 I/ReactNativeJS(18100): '≡ƒÆ░ [UI] Displaying fare for sedan:', { fare: 0,
10-23 17:49:14.247 I/ReactNativeJS(18100):   isSelected: true,
10-23 17:49:14.247 I/ReactNativeJS(18100):   showingCalculated: false,
10-23 17:49:14.247 I/ReactNativeJS(18100):   source: 'minimum_fare' }
10-23 17:49:14.249 I/ReactNativeJS(18100): '≡ƒÆ░ [UI] Displaying fare for sedan_ac:', { fare: 0,
10-23 17:49:14.249 I/ReactNativeJS(18100):   isSelected: false,
10-23 17:49:14.249 I/ReactNativeJS(18100):   showingCalculated: false,
10-23 17:49:14.249 I/ReactNativeJS(18100):   source: 'minimum_fare' }
10-23 17:49:14.251 I/ReactNativeJS(18100): '≡ƒÆ░ [UI] Displaying fare for suv:', { fare: 90,
10-23 17:49:14.251 I/ReactNativeJS(18100):   isSelected: false,
10-23 17:49:14.251 I/ReactNativeJS(18100):   showingCalculated: true,
10-23 17:49:14.251 I/ReactNativeJS(18100):   source: 'calculated' }
10-23 17:49:14.253 I/ReactNativeJS(18100): '≡ƒÆ░ [UI] Displaying fare for suv_ac:', { fare: 0,
10-23 17:49:14.253 I/ReactNativeJS(18100):   isSelected: false,
10-23 17:49:14.253 I/ReactNativeJS(18100):   showingCalculated: false,
10-23 17:49:14.253 I/ReactNativeJS(18100):   source: 'minimum_fare' }
10-23 17:49:14.255 I/ReactNativeJS(18100): ≡ƒº¬≡ƒº¬≡ƒº¬ TEST MAP RENDERING NOW
10-23 17:49:14.256 I/ReactNativeJS(18100): '≡ƒº¬ Props received:', [ 'userLocation',
10-23 17:49:14.256 I/ReactNativeJS(18100):   'pickupLocation',
10-23 17:49:14.256 I/ReactNativeJS(18100):   'destinationLocation',
10-23 17:49:14.256 I/ReactNativeJS(18100):   'onRegionChangeComplete',
10-23 17:49:14.256 I/ReactNativeJS(18100):   'onDestinationDragEnd',
10-23 17:49:14.256 I/ReactNativeJS(18100):   'showCenteredPin',
10-23 17:49:14.256 I/ReactNativeJS(18100):   'availableDrivers',
10-23 17:49:14.256 I/ReactNativeJS(18100):   'showDrivers' ]
10-23 17:49:14.281 I/ReactNativeJS(18100): ≡ƒù║∩╕Å [HOME] ===== HIDING DRIVERS FOR ROUTE DISPLAY =====
10-23 17:49:14.282 I/ReactNativeJS(18100): ≡ƒù║∩╕Å [HOME] Both pickup and destination selected, hiding drivers to show route
10-23 17:49:14.282 I/ReactNativeJS(18100): ≡ƒ¢æ [HOME] Stopping driver location polling
10-23 17:49:14.282 I/ReactNativeJS(18100): ≡ƒ¢æ [DRIVER-SERVICE] Stopped driver location polling
10-23 17:49:14.282 I/ReactNativeJS(18100): ≡ƒöä [HOME] Triggering fare calculation due to location/vehicle change
10-23 17:49:14.282 I/ReactNativeJS(18100): ≡ƒÆ░ [HOME] ===== STARTING FARE CALCULATION WITH DEADHEAD =====
10-23 17:49:14.282 I/ReactNativeJS(18100): '≡ƒÆ░ [HOME] Calculating fare for Bagalur trip:', { pickup: 'PRXJ+F32, Brindavan Nagar, Plot 87, NGGO\'s Colony, Anand Nagar, Hosur, Tamil Nadu 635109, India',
10-23 17:49:14.282 I/ReactNativeJS(18100):   destination: 'Bagalur, Tamil Nadu, India',
10-23 17:49:14.282 I/ReactNativeJS(18100):   pickupCoords: { latitude: 12.7486283, longitude: 77.8299733 },
10-23 17:49:14.282 I/ReactNativeJS(18100):   destinationCoords: { latitude: 12.8303987, longitude: 77.86623689999999 },
10-23 17:49:14.282 I/ReactNativeJS(18100):   selectedVehicle: 'sedan',
10-23 17:49:14.282 I/ReactNativeJS(18100):   timestamp: '2025-10-23T12:19:14.282Z',
10-23 17:49:14.282 I/ReactNativeJS(18100):   shouldHaveDeadhead: true }
10-23 17:49:14.282 I/ReactNativeJS(18100): ≡ƒÆ░ [HOME] Calling fareCalculator.calculateFare...
10-23 17:49:14.282 I/ReactNativeJS(18100): '≡ƒÆ░ [FARE-CALC] Input parameters:', { vehicleType: 'sedan',
10-23 17:49:14.282 I/ReactNativeJS(18100):   pickup: { latitude: 12.7486283, longitude: 77.8299733 },
10-23 17:49:14.282 I/ReactNativeJS(18100):   destination: { latitude: 12.8303987, longitude: 77.86623689999999 },
10-23 17:49:14.282 I/ReactNativeJS(18100):   timestamp: '2025-10-23T12:19:14.282Z',
10-23 17:49:14.282 I/ReactNativeJS(18100):   supabaseUrl: 'SET',
10-23 17:49:14.282 I/ReactNativeJS(18100):   supabaseKey: 'SET' }
10-23 17:49:14.282 I/ReactNativeJS(18100): ≡ƒÄ» [FARE-CALC] Using edge function for deadhead calculation...
10-23 17:49:14.282 I/ReactNativeJS(18100): '≡ƒöì [FARE-CALC] Environment validation:', { supabaseUrl: 'SET',
10-23 17:49:14.282 I/ReactNativeJS(18100):   supabaseKey: 'SET',
10-23 17:49:14.282 I/ReactNativeJS(18100):   urlValid: true,
10-23 17:49:14.282 I/ReactNativeJS(18100):   keyValid: true }
10-23 17:49:14.282 I/ReactNativeJS(18100): '≡ƒÄ» [FARE-CALC] Edge function URL:', 'https://whubaypabojomdyfqxcf.supabase.co/functions/v1/fare-calculation'
10-23 17:49:14.282 I/ReactNativeJS(18100): ≡ƒôí [FARE-CALC] Making request to edge function...
10-23 17:49:14.283 I/ReactNativeJS(18100): '≡ƒôí [FARE-CALC] Request body:', { pickup_latitude: 12.7486283,
10-23 17:49:14.283 I/ReactNativeJS(18100):   pickup_longitude: 77.8299733,
10-23 17:49:14.283 I/ReactNativeJS(18100):   destination_latitude: 12.8303987,
10-23 17:49:14.283 I/ReactNativeJS(18100):   destination_longitude: 77.86623689999999,
10-23 17:49:14.283 I/ReactNativeJS(18100):   vehicle_type: 'sedan',
10-23 17:49:14.283 I/ReactNativeJS(18100):   booking_type: 'regular' }
10-23 17:49:14.283 W/ReactNativeJS(18100): ≡ƒÅá [HOME] ===== RENDERING HOME SCREEN =====
10-23 17:49:14.284 W/ReactNativeJS(18100): '≡ƒÅá [HOME] currentLocation:', '{"altitude":771.7999877929688,"heading":0,"altitudeAccuracy":1.3601199388504028,"latitude":12.7486283,"speed":6.911815319374692e-17,"longitude":77.8299733,"accuracy":2.0250000953674316}'
10-23 17:49:14.284 W/ReactNativeJS(18100): '≡ƒÅá [HOME] pickupCoords:', '{"latitude":12.7486283,"longitude":77.8299733}'
10-23 17:49:14.284 W/ReactNativeJS(18100): '≡ƒÅá [HOME] destinationCoords:', '{"latitude":12.8303987,"longitude":77.86623689999999}'
10-23 17:49:14.284 W/ReactNativeJS(18100): '≡ƒÅá [HOME] pickupLocation text:', 'PRXJ+F32, Brindavan Nagar, Plot 87, NGGO\'s Colony, Anand Nagar, Hosur, Tamil Nadu 635109, India'
10-23 17:49:14.284 W/ReactNativeJS(18100): '≡ƒÅá [HOME] availableDrivers count:', 1
10-23 17:49:14.284 W/ReactNativeJS(18100): '≡ƒÅá [HOME] showDriversOnMap:', false
10-23 17:49:14.284 I/ReactNativeJS(18100): '≡ƒÅá≡ƒÅá≡ƒÅá [HOME-V2] ABOUT TO RENDER SimpleHosurMap with props:', { hasUserLocation: true,
10-23 17:49:14.284 I/ReactNativeJS(18100):   hasPickup: true,
10-23 17:49:14.284 I/ReactNativeJS(18100):   hasDestination: true,
10-23 17:49:14.284 I/ReactNativeJS(18100):   showDriversOnMap: false,
10-23 17:49:14.284 I/ReactNativeJS(18100):   timestamp: '2025-10-23T12:19:14.284Z' }
10-23 17:49:14.284 I/ReactNativeJS(18100): '≡ƒÆ░ [UI] Displaying fare for hatchback:', { fare: 0,
10-23 17:49:14.284 I/ReactNativeJS(18100):   isSelected: false,
10-23 17:49:14.284 I/ReactNativeJS(18100):   showingCalculated: false,
10-23 17:49:14.284 I/ReactNativeJS(18100):   source: 'minimum_fare' }
10-23 17:49:14.286 I/ReactNativeJS(18100): '≡ƒÆ░ [UI] Displaying fare for hatchback_ac:', { fare: 0,
10-23 17:49:14.286 I/ReactNativeJS(18100):   isSelected: false,
10-23 17:49:14.286 I/ReactNativeJS(18100):   showingCalculated: false,
10-23 17:49:14.286 I/ReactNativeJS(18100):   source: 'minimum_fare' }
10-23 17:49:14.288 I/ReactNativeJS(18100): '≡ƒÆ░ [UI] Displaying fare for sedan:', { fare: 0,
10-23 17:49:14.288 I/ReactNativeJS(18100):   isSelected: true,
10-23 17:49:14.288 I/ReactNativeJS(18100):   showingCalculated: false,
10-23 17:49:14.288 I/ReactNativeJS(18100):   source: 'minimum_fare' }
10-23 17:49:14.288 I/ReactNativeJS(18100): '≡ƒÆ░ [UI] Displaying fare for sedan_ac:', { fare: 0,
10-23 17:49:14.288 I/ReactNativeJS(18100):   isSelected: false,
10-23 17:49:14.288 I/ReactNativeJS(18100):   showingCalculated: false,
10-23 17:49:14.288 I/ReactNativeJS(18100):   source: 'minimum_fare' }
10-23 17:49:14.290 I/ReactNativeJS(18100): '≡ƒÆ░ [UI] Displaying fare for suv:', { fare: 90,
10-23 17:49:14.290 I/ReactNativeJS(18100):   isSelected: false,
10-23 17:49:14.290 I/ReactNativeJS(18100):   showingCalculated: true,
10-23 17:49:14.290 I/ReactNativeJS(18100):   source: 'calculated' }
10-23 17:49:14.291 I/ReactNativeJS(18100): '≡ƒÆ░ [UI] Displaying fare for suv_ac:', { fare: 0,
10-23 17:49:14.291 I/ReactNativeJS(18100):   isSelected: false,
10-23 17:49:14.291 I/ReactNativeJS(18100):   showingCalculated: false,
10-23 17:49:14.291 I/ReactNativeJS(18100):   source: 'minimum_fare' }
10-23 17:49:14.293 I/ReactNativeJS(18100): ≡ƒº¬≡ƒº¬≡ƒº¬ TEST MAP RENDERING NOW
10-23 17:49:14.293 I/ReactNativeJS(18100): '≡ƒº¬ Props received:', [ 'userLocation',
10-23 17:49:14.293 I/ReactNativeJS(18100):   'pickupLocation',
10-23 17:49:14.293 I/ReactNativeJS(18100):   'destinationLocation',
10-23 17:49:14.293 I/ReactNativeJS(18100):   'onRegionChangeComplete',
10-23 17:49:14.293 I/ReactNativeJS(18100):   'onDestinationDragEnd',
10-23 17:49:14.293 I/ReactNativeJS(18100):   'showCenteredPin',
10-23 17:49:14.293 I/ReactNativeJS(18100):   'availableDrivers',
10-23 17:49:14.293 I/ReactNativeJS(18100):   'showDrivers' ]
10-23 17:49:14.317 W/ReactNativeJS(18100): ≡ƒÅá [HOME] ===== RENDERING HOME SCREEN =====
10-23 17:49:14.317 W/ReactNativeJS(18100): '≡ƒÅá [HOME] currentLocation:', '{"altitude":771.7999877929688,"heading":0,"altitudeAccuracy":1.3601199388504028,"latitude":12.7486283,"speed":6.911815319374692e-17,"longitude":77.8299733,"accuracy":2.0250000953674316}'
10-23 17:49:14.317 W/ReactNativeJS(18100): '≡ƒÅá [HOME] pickupCoords:', '{"latitude":12.7486283,"longitude":77.8299733}'
10-23 17:49:14.317 W/ReactNativeJS(18100): '≡ƒÅá [HOME] destinationCoords:', '{"latitude":12.8303987,"longitude":77.86623689999999}'
10-23 17:49:14.317 W/ReactNativeJS(18100): '≡ƒÅá [HOME] pickupLocation text:', 'PRXJ+F32, Brindavan Nagar, Plot 87, NGGO\'s Colony, Anand Nagar, Hosur, Tamil Nadu 635109, India'
10-23 17:49:14.317 W/ReactNativeJS(18100): '≡ƒÅá [HOME] availableDrivers count:', 1
10-23 17:49:14.317 W/ReactNativeJS(18100): '≡ƒÅá [HOME] showDriversOnMap:', false
10-23 17:49:14.317 I/ReactNativeJS(18100): '≡ƒÅá≡ƒÅá≡ƒÅá [HOME-V2] ABOUT TO RENDER SimpleHosurMap with props:', { hasUserLocation: true,
10-23 17:49:14.317 I/ReactNativeJS(18100):   hasPickup: true,
10-23 17:49:14.317 I/ReactNativeJS(18100):   hasDestination: true,
10-23 17:49:14.317 I/ReactNativeJS(18100):   showDriversOnMap: false,
10-23 17:49:14.317 I/ReactNativeJS(18100):   timestamp: '2025-10-23T12:19:14.317Z' }
10-23 17:49:14.317 I/ReactNativeJS(18100): '≡ƒÆ░ [UI] Displaying fare for hatchback:', { fare: 0,
10-23 17:49:14.317 I/ReactNativeJS(18100):   isSelected: false,
10-23 17:49:14.317 I/ReactNativeJS(18100):   showingCalculated: false,
10-23 17:49:14.317 I/ReactNativeJS(18100):   source: 'minimum_fare' }
10-23 17:49:14.319 I/ReactNativeJS(18100): '≡ƒÆ░ [UI] Displaying fare for hatchback_ac:', { fare: 0,
10-23 17:49:14.319 I/ReactNativeJS(18100):   isSelected: false,
10-23 17:49:14.319 I/ReactNativeJS(18100):   showingCalculated: false,
10-23 17:49:14.319 I/ReactNativeJS(18100):   source: 'minimum_fare' }
10-23 17:49:14.320 I/ReactNativeJS(18100): '≡ƒÆ░ [UI] Displaying fare for sedan:', { fare: 0,
10-23 17:49:14.320 I/ReactNativeJS(18100):   isSelected: true,
10-23 17:49:14.320 I/ReactNativeJS(18100):   showingCalculated: false,
10-23 17:49:14.320 I/ReactNativeJS(18100):   source: 'minimum_fare' }
10-23 17:49:14.321 I/ReactNativeJS(18100): '≡ƒÆ░ [UI] Displaying fare for sedan_ac:', { fare: 0,
10-23 17:49:14.321 I/ReactNativeJS(18100):   isSelected: false,
10-23 17:49:14.321 I/ReactNativeJS(18100):   showingCalculated: false,
10-23 17:49:14.321 I/ReactNativeJS(18100):   source: 'minimum_fare' }
10-23 17:49:14.322 I/ReactNativeJS(18100): '≡ƒÆ░ [UI] Displaying fare for suv:', { fare: 90,
10-23 17:49:14.322 I/ReactNativeJS(18100):   isSelected: false,
10-23 17:49:14.322 I/ReactNativeJS(18100):   showingCalculated: true,
10-23 17:49:14.322 I/ReactNativeJS(18100):   source: 'calculated' }
10-23 17:49:14.324 I/ReactNativeJS(18100): '≡ƒÆ░ [UI] Displaying fare for suv_ac:', { fare: 0,
10-23 17:49:14.324 I/ReactNativeJS(18100):   isSelected: false,
10-23 17:49:14.324 I/ReactNativeJS(18100):   showingCalculated: false,
10-23 17:49:14.324 I/ReactNativeJS(18100):   source: 'minimum_fare' }
10-23 17:49:14.326 I/ReactNativeJS(18100): ≡ƒº¬≡ƒº¬≡ƒº¬ TEST MAP RENDERING NOW
10-23 17:49:14.327 I/ReactNativeJS(18100): '≡ƒº¬ Props received:', [ 'userLocation',
10-23 17:49:14.327 I/ReactNativeJS(18100):   'pickupLocation',
10-23 17:49:14.327 I/ReactNativeJS(18100):   'destinationLocation',
10-23 17:49:14.327 I/ReactNativeJS(18100):   'onRegionChangeComplete',
10-23 17:49:14.327 I/ReactNativeJS(18100):   'onDestinationDragEnd',
10-23 17:49:14.327 I/ReactNativeJS(18100):   'showCenteredPin',
10-23 17:49:14.327 I/ReactNativeJS(18100):   'availableDrivers',
10-23 17:49:14.327 I/ReactNativeJS(18100):   'showDrivers' ]
10-23 17:49:16.383 I/ReactNativeJS(18100): '≡ƒôí [FARE-CALC] Edge function response status:', 200
10-23 17:49:16.387 I/ReactNativeJS(18100): '≡ƒôè [FARE-CALC] Edge function raw result for Bagalur:', { success: true,
10-23 17:49:16.387 I/ReactNativeJS(18100):   fareBreakdown:
10-23 17:49:16.387 I/ReactNativeJS(18100):    { baseFare: 145,
10-23 17:49:16.387 I/ReactNativeJS(18100):      distanceFare: 164,
10-23 17:49:16.387 I/ReactNativeJS(18100):      timeFare: 0,
10-23 17:49:16.387 I/ReactNativeJS(18100):      surgeFare: 0,
10-23 17:49:16.387 I/ReactNativeJS(18100):      platformFee: 0,
10-23 17:49:16.387 I/ReactNativeJS(18100):      deadheadCharge: 138,
10-23 17:49:16.387 I/ReactNativeJS(18100):      totalFare: 447,
10-23 17:49:16.387 I/ReactNativeJS(18100):      distance: 10.55,
10-23 17:49:16.387 I/ReactNativeJS(18100):      duration: 15,
10-23 17:49:16.387 I/ReactNativeJS(18100):      deadheadDistance: 11.03 },
10-23 17:49:16.387 I/ReactNativeJS(18100):   config:
10-23 17:49:16.387 I/ReactNativeJS(18100):    { vehicle_type: 'sedan',
10-23 17:49:16.387 I/ReactNativeJS(18100):      base_fare: 145,
10-23 17:49:16.387 I/ReactNativeJS(18100):      per_km_rate: 25,
10-23 17:49:16.387 I/ReactNativeJS(18100):      per_minute_rate: 0,
10-23 17:49:16.387 I/ReactNativeJS(18100):      minimum_fare: 0,
10-23 17:49:16.387 I/ReactNativeJS(18100):      surge_multiplier: 1,
10-23 17:49:16.387 I/ReactNativeJS(18100):      platform_fee_percent: 0 },
10-23 17:49:16.387 I/ReactNativeJS(18100):   deadheadInfo:
10-23 17:49:16.387 I/ReactNativeJS(18100):    { applied: true,
10-23 17:49:16.387 I/ReactNativeJS(18100):      reason: 'Between Inner and Outer Ring',
10-23 17:49:16.387 I/ReactNativeJS(18100):      deadheadDistance: 11.025914915977474,
10-23 17:49:16.387 I/ReactNativeJS(18100):      deadheadCharge: 137.82393644971842,
10-23 17:49:16.387 I/ReactNativeJS(18100):      zoneStatus: 'Between Inner and Outer Ring' } }
10-23 17:49:16.387 I/ReactNativeJS(18100): Γ£à [FARE-CALC] ===== EDGE FUNCTION SUCCESS WITH DEADHEAD FOR BAGALUR =====
10-23 17:49:16.390 I/ReactNativeJS(18100): 'Γ£à [FARE-CALC] Complete fare breakdown:', { baseFare: 'Γé╣145',
10-23 17:49:16.390 I/ReactNativeJS(18100):   distanceFare: 'Γé╣164',
10-23 17:49:16.390 I/ReactNativeJS(18100):   timeFare: 'Γé╣0',
10-23 17:49:16.390 I/ReactNativeJS(18100):   surgeFare: 'Γé╣0',
10-23 17:49:16.390 I/ReactNativeJS(18100):   platformFee: 'Γé╣0',
10-23 17:49:16.390 I/ReactNativeJS(18100):   deadheadCharge: 'Γé╣138',
10-23 17:49:16.390 I/ReactNativeJS(18100):   deadheadDistance: '11.03km',
10-23 17:49:16.390 I/ReactNativeJS(18100):   totalFare: 'Γé╣447',
10-23 17:49:16.390 I/ReactNativeJS(18100):   deadheadInfo:
10-23 17:49:16.390 I/ReactNativeJS(18100):    { applied: true,
10-23 17:49:16.390 I/ReactNativeJS(18100):      reason: 'Between Inner and Outer Ring',
10-23 17:49:16.390 I/ReactNativeJS(18100):      deadheadDistance: 11.025914915977474,
10-23 17:49:16.390 I/ReactNativeJS(18100):      deadheadCharge: 137.82393644971842,
10-23 17:49:16.390 I/ReactNativeJS(18100):      zoneStatus: 'Between Inner and Outer Ring' },
10-23 17:49:16.390 I/ReactNativeJS(18100):   formula: 'Γé╣145 + Γé╣164 + Γé╣0 + Γé╣0 + Γé╣0 + Γé╣138 = Γé╣447',
10-23 17:49:16.390 I/ReactNativeJS(18100):   bagalurSpecific: 'This should show deadhead charges for Bagalur destination' }
10-23 17:49:16.390 I/ReactNativeJS(18100): 'Γ£à [FARE-CALC] Deadhead analysis for Bagalur:', { destination: { latitude: 12.8303987, longitude: 77.86623689999999 },
10-23 17:49:16.390 I/ReactNativeJS(18100):   deadheadApplied: true,
10-23 17:49:16.390 I/ReactNativeJS(18100):   deadheadReason: 'Between Inner and Outer Ring',
10-23 17:49:16.390 I/ReactNativeJS(18100):   zoneStatus: 'Between Inner and Outer Ring',
10-23 17:49:16.390 I/ReactNativeJS(18100):   expectedForBagalur: 'Should be between Inner and Outer Ring with deadhead charge' }
10-23 17:49:16.391 I/ReactNativeJS(18100): ≡ƒÆ░ [HOME] ===== FARE CALCULATION RESULT =====
10-23 17:49:16.391 I/ReactNativeJS(18100): 'Γ£à [HOME] Fare breakdown received:', { baseFare: 'Γé╣145',
10-23 17:49:16.391 I/ReactNativeJS(18100):   distanceFare: 'Γé╣164',
10-23 17:49:16.391 I/ReactNativeJS(18100):   timeFare: 'Γé╣0',
10-23 17:49:16.391 I/ReactNativeJS(18100):   surgeFare: 'Γé╣0',
10-23 17:49:16.391 I/ReactNativeJS(18100):   platformFee: 'Γé╣0',
10-23 17:49:16.391 I/ReactNativeJS(18100):   deadheadCharge: 'Γé╣138',
10-23 17:49:16.391 I/ReactNativeJS(18100):   deadheadDistance: '11.03km',
10-23 17:49:16.391 I/ReactNativeJS(18100):   totalFare: 'Γé╣447',
10-23 17:49:16.391 I/ReactNativeJS(18100):   distance: '10.55km',
10-23 17:49:16.391 I/ReactNativeJS(18100):   duration: '15min',
10-23 17:49:16.391 I/ReactNativeJS(18100):   hasDeadheadCharge: true,
10-23 17:49:16.391 I/ReactNativeJS(18100):   isBagalurTrip: true,
10-23 17:49:16.391 I/ReactNativeJS(18100):   expectedDeadhead: 'YES' }
10-23 17:49:16.392 I/ReactNativeJS(18100): '≡ƒÄ» [HOME] Γ£à DEADHEAD CHARGE APPLIED:', { destination: 'Bagalur, Tamil Nadu, India',
10-23 17:49:16.392 I/ReactNativeJS(18100):   deadheadCharge: 'Γé╣138',
10-23 17:49:16.392 I/ReactNativeJS(18100):   deadheadDistance: '11.03km',
10-23 17:49:16.392 I/ReactNativeJS(18100):   reason: 'Destination is between Inner Ring and Outer Ring' }
10-23 17:49:16.392 I/ReactNativeJS(18100): '≡ƒÆ░ [HOME] Calculating fares for all vehicle types based on', 'sedan', 'calculation'
10-23 17:49:16.392 I/ReactNativeJS(18100): ≡ƒÆ░ [HOME] hatchback (estimated): Γé╣447 (ratio-based from sedan)
10-23 17:49:16.392 I/ReactNativeJS(18100): ≡ƒÆ░ [HOME] hatchback_ac (estimated): Γé╣493 (ratio-based from sedan)
10-23 17:49:16.392 I/ReactNativeJS(18100): ≡ƒÆ░ [HOME] sedan (selected): Γé╣447 (exact calculation)
10-23 17:49:16.392 I/ReactNativeJS(18100): ≡ƒÆ░ [HOME] sedan_ac (estimated): Γé╣462 (ratio-based from sedan)
10-23 17:49:16.392 I/ReactNativeJS(18100): ≡ƒÆ░ [HOME] suv (estimated): Γé╣762 (ratio-based from sedan)
10-23 17:49:16.392 I/ReactNativeJS(18100): ≡ƒÆ░ [HOME] suv_ac (estimated): Γé╣1923 (ratio-based from sedan)
10-23 17:49:16.394 W/ReactNativeJS(18100): ≡ƒÅá [HOME] ===== RENDERING HOME SCREEN =====
10-23 17:49:16.395 W/ReactNativeJS(18100): '≡ƒÅá [HOME] currentLocation:', '{"altitude":771.7999877929688,"heading":0,"altitudeAccuracy":1.3601199388504028,"latitude":12.7486283,"speed":6.911815319374692e-17,"longitude":77.8299733,"accuracy":2.0250000953674316}'
10-23 17:49:16.395 W/ReactNativeJS(18100): '≡ƒÅá [HOME] pickupCoords:', '{"latitude":12.7486283,"longitude":77.8299733}'
10-23 17:49:16.395 W/ReactNativeJS(18100): '≡ƒÅá [HOME] destinationCoords:', '{"latitude":12.8303987,"longitude":77.86623689999999}'
10-23 17:49:16.395 W/ReactNativeJS(18100): '≡ƒÅá [HOME] pickupLocation text:', 'PRXJ+F32, Brindavan Nagar, Plot 87, NGGO\'s Colony, Anand Nagar, Hosur, Tamil Nadu 635109, India'
10-23 17:49:16.395 W/ReactNativeJS(18100): '≡ƒÅá [HOME] availableDrivers count:', 1
10-23 17:49:16.395 W/ReactNativeJS(18100): '≡ƒÅá [HOME] showDriversOnMap:', false
10-23 17:49:16.395 I/ReactNativeJS(18100): '≡ƒÅá≡ƒÅá≡ƒÅá [HOME-V2] ABOUT TO RENDER SimpleHosurMap with props:', { hasUserLocation: true,
10-23 17:49:16.395 I/ReactNativeJS(18100):   hasPickup: true,
10-23 17:49:16.395 I/ReactNativeJS(18100):   hasDestination: true,
10-23 17:49:16.395 I/ReactNativeJS(18100):   showDriversOnMap: false,
10-23 17:49:16.395 I/ReactNativeJS(18100):   timestamp: '2025-10-23T12:19:16.395Z' }
10-23 17:49:16.396 I/ReactNativeJS(18100): '≡ƒÆ░ [UI] Displaying fare for hatchback:', { fare: 447,
10-23 17:49:16.396 I/ReactNativeJS(18100):   isSelected: false,
10-23 17:49:16.396 I/ReactNativeJS(18100):   showingCalculated: true,
10-23 17:49:16.396 I/ReactNativeJS(18100):   source: 'calculated' }
10-23 17:49:16.400 I/ReactNativeJS(18100): '≡ƒÆ░ [UI] Displaying fare for hatchback_ac:', { fare: 493,
10-23 17:49:16.400 I/ReactNativeJS(18100):   isSelected: false,
10-23 17:49:16.400 I/ReactNativeJS(18100):   showingCalculated: true,
10-23 17:49:16.400 I/ReactNativeJS(18100):   source: 'calculated' }
10-23 17:49:16.403 I/ReactNativeJS(18100): '≡ƒÆ░ [UI] Displaying fare for sedan:', { fare: 447,
10-23 17:49:16.403 I/ReactNativeJS(18100):   isSelected: true,
10-23 17:49:16.403 I/ReactNativeJS(18100):   showingCalculated: true,
10-23 17:49:16.403 I/ReactNativeJS(18100):   source: 'calculated' }
10-23 17:49:16.403 I/ReactNativeJS(18100): '≡ƒÆ░ [UI] Displaying fare for sedan_ac:', { fare: 462,
10-23 17:49:16.403 I/ReactNativeJS(18100):   isSelected: false,
10-23 17:49:16.403 I/ReactNativeJS(18100):   showingCalculated: true,
10-23 17:49:16.403 I/ReactNativeJS(18100):   source: 'calculated' }
10-23 17:49:16.406 I/ReactNativeJS(18100): '≡ƒÆ░ [UI] Displaying fare for suv:', { fare: 762,
10-23 17:49:16.406 I/ReactNativeJS(18100):   isSelected: false,
10-23 17:49:16.406 I/ReactNativeJS(18100):   showingCalculated: true,
10-23 17:49:16.406 I/ReactNativeJS(18100):   source: 'calculated' }
10-23 17:49:16.409 I/ReactNativeJS(18100): '≡ƒÆ░ [UI] Displaying fare for suv_ac:', { fare: 1923,
10-23 17:49:16.409 I/ReactNativeJS(18100):   isSelected: false,
10-23 17:49:16.409 I/ReactNativeJS(18100):   showingCalculated: true,
10-23 17:49:16.409 I/ReactNativeJS(18100):   source: 'calculated' }
10-23 17:49:16.411 I/ReactNativeJS(18100): ≡ƒº¬≡ƒº¬≡ƒº¬ TEST MAP RENDERING NOW
10-23 17:49:16.411 I/ReactNativeJS(18100): '≡ƒº¬ Props received:', [ 'userLocation',
10-23 17:49:16.411 I/ReactNativeJS(18100):   'pickupLocation',
10-23 17:49:16.411 I/ReactNativeJS(18100):   'destinationLocation',
10-23 17:49:16.411 I/ReactNativeJS(18100):   'onRegionChangeComplete',
10-23 17:49:16.411 I/ReactNativeJS(18100):   'onDestinationDragEnd',
10-23 17:49:16.411 I/ReactNativeJS(18100):   'showCenteredPin',
10-23 17:49:16.411 I/ReactNativeJS(18100):   'availableDrivers',
10-23 17:49:16.411 I/ReactNativeJS(18100):   'showDrivers' ]
10-23 17:49:16.423 I/ReactNativeJS(18100): '≡ƒÆ░ [HOME] All vehicle fares calculated:', { hatchback: 447,
10-23 17:49:16.423 I/ReactNativeJS(18100):   hatchback_ac: 493,
10-23 17:49:16.423 I/ReactNativeJS(18100):   sedan: 447,
10-23 17:49:16.423 I/ReactNativeJS(18100):   sedan_ac: 462,
10-23 17:49:16.423 I/ReactNativeJS(18100):   suv: 762,
10-23 17:49:16.423 I/ReactNativeJS(18100):   suv_ac: 1923 }
10-23 17:49:16.424 W/ReactNativeJS(18100): ≡ƒÅá [HOME] ===== RENDERING HOME SCREEN =====
10-23 17:49:16.424 W/ReactNativeJS(18100): '≡ƒÅá [HOME] currentLocation:', '{"altitude":771.7999877929688,"heading":0,"altitudeAccuracy":1.3601199388504028,"latitude":12.7486283,"speed":6.911815319374692e-17,"longitude":77.8299733,"accuracy":2.0250000953674316}'
10-23 17:49:16.424 W/ReactNativeJS(18100): '≡ƒÅá [HOME] pickupCoords:', '{"latitude":12.7486283,"longitude":77.8299733}'
10-23 17:49:16.424 W/ReactNativeJS(18100): '≡ƒÅá [HOME] destinationCoords:', '{"latitude":12.8303987,"longitude":77.86623689999999}'
10-23 17:49:16.424 W/ReactNativeJS(18100): '≡ƒÅá [HOME] pickupLocation text:', 'PRXJ+F32, Brindavan Nagar, Plot 87, NGGO\'s Colony, Anand Nagar, Hosur, Tamil Nadu 635109, India'
10-23 17:49:16.424 W/ReactNativeJS(18100): '≡ƒÅá [HOME] availableDrivers count:', 1
10-23 17:49:16.424 W/ReactNativeJS(18100): '≡ƒÅá [HOME] showDriversOnMap:', false
10-23 17:49:16.424 I/ReactNativeJS(18100): '≡ƒÅá≡ƒÅá≡ƒÅá [HOME-V2] ABOUT TO RENDER SimpleHosurMap with props:', { hasUserLocation: true,
10-23 17:49:16.424 I/ReactNativeJS(18100):   hasPickup: true,
10-23 17:49:16.424 I/ReactNativeJS(18100):   hasDestination: true,
10-23 17:49:16.424 I/ReactNativeJS(18100):   showDriversOnMap: false,
10-23 17:49:16.424 I/ReactNativeJS(18100):   timestamp: '2025-10-23T12:19:16.424Z' }
10-23 17:49:16.424 I/ReactNativeJS(18100): '≡ƒÆ░ [UI] Displaying fare for hatchback:', { fare: 447,
10-23 17:49:16.424 I/ReactNativeJS(18100):   isSelected: false,
10-23 17:49:16.424 I/ReactNativeJS(18100):   showingCalculated: true,
10-23 17:49:16.424 I/ReactNativeJS(18100):   source: 'calculated' }
10-23 17:49:16.426 I/ReactNativeJS(18100): '≡ƒÆ░ [UI] Displaying fare for hatchback_ac:', { fare: 493,
10-23 17:49:16.426 I/ReactNativeJS(18100):   isSelected: false,
10-23 17:49:16.426 I/ReactNativeJS(18100):   showingCalculated: true,
10-23 17:49:16.426 I/ReactNativeJS(18100):   source: 'calculated' }
10-23 17:49:16.428 I/ReactNativeJS(18100): '≡ƒÆ░ [UI] Displaying fare for sedan:', { fare: 447,
10-23 17:49:16.428 I/ReactNativeJS(18100):   isSelected: true,
10-23 17:49:16.428 I/ReactNativeJS(18100):   showingCalculated: true,
10-23 17:49:16.428 I/ReactNativeJS(18100):   source: 'calculated' }
10-23 17:49:16.428 I/ReactNativeJS(18100): '≡ƒÆ░ [UI] Displaying fare for sedan_ac:', { fare: 462,
10-23 17:49:16.428 I/ReactNativeJS(18100):   isSelected: false,
10-23 17:49:16.428 I/ReactNativeJS(18100):   showingCalculated: true,
10-23 17:49:16.428 I/ReactNativeJS(18100):   source: 'calculated' }
10-23 17:49:16.429 I/ReactNativeJS(18100): '≡ƒÆ░ [UI] Displaying fare for suv:', { fare: 762,
10-23 17:49:16.429 I/ReactNativeJS(18100):   isSelected: false,
10-23 17:49:16.429 I/ReactNativeJS(18100):   showingCalculated: true,
10-23 17:49:16.429 I/ReactNativeJS(18100):   source: 'calculated' }
10-23 17:49:16.431 I/ReactNativeJS(18100): '≡ƒÆ░ [UI] Displaying fare for suv_ac:', { fare: 1923,
10-23 17:49:16.431 I/ReactNativeJS(18100):   isSelected: false,
10-23 17:49:16.431 I/ReactNativeJS(18100):   showingCalculated: true,
10-23 17:49:16.431 I/ReactNativeJS(18100):   source: 'calculated' }
10-23 17:49:16.433 I/ReactNativeJS(18100): ≡ƒº¬≡ƒº¬≡ƒº¬ TEST MAP RENDERING NOW
10-23 17:49:16.433 I/ReactNativeJS(18100): '≡ƒº¬ Props received:', [ 'userLocation',
10-23 17:49:16.433 I/ReactNativeJS(18100):   'pickupLocation',
10-23 17:49:16.433 I/ReactNativeJS(18100):   'destinationLocation',
10-23 17:49:16.433 I/ReactNativeJS(18100):   'onRegionChangeComplete',
10-23 17:49:16.433 I/ReactNativeJS(18100):   'onDestinationDragEnd',
10-23 17:49:16.433 I/ReactNativeJS(18100):   'showCenteredPin',
10-23 17:49:16.433 I/ReactNativeJS(18100):   'availableDrivers',
10-23 17:49:16.433 I/ReactNativeJS(18100):   'showDrivers' ]
10-23 17:49:16.447 W/ReactNativeJS(18100): ≡ƒÅá [HOME] ===== RENDERING HOME SCREEN =====
10-23 17:49:16.447 W/ReactNativeJS(18100): '≡ƒÅá [HOME] currentLocation:', '{"altitude":771.7999877929688,"heading":0,"altitudeAccuracy":1.3601199388504028,"latitude":12.7486283,"speed":6.911815319374692e-17,"longitude":77.8299733,"accuracy":2.0250000953674316}'
10-23 17:49:16.447 W/ReactNativeJS(18100): '≡ƒÅá [HOME] pickupCoords:', '{"latitude":12.7486283,"longitude":77.8299733}'
10-23 17:49:16.447 W/ReactNativeJS(18100): '≡ƒÅá [HOME] destinationCoords:', '{"latitude":12.8303987,"longitude":77.86623689999999}'
10-23 17:49:16.447 W/ReactNativeJS(18100): '≡ƒÅá [HOME] pickupLocation text:', 'PRXJ+F32, Brindavan Nagar, Plot 87, NGGO\'s Colony, Anand Nagar, Hosur, Tamil Nadu 635109, India'
10-23 17:49:16.447 W/ReactNativeJS(18100): '≡ƒÅá [HOME] availableDrivers count:', 1
10-23 17:49:16.447 W/ReactNativeJS(18100): '≡ƒÅá [HOME] showDriversOnMap:', false
10-23 17:49:16.447 I/ReactNativeJS(18100): '≡ƒÅá≡ƒÅá≡ƒÅá [HOME-V2] ABOUT TO RENDER SimpleHosurMap with props:', { hasUserLocation: true,
10-23 17:49:16.447 I/ReactNativeJS(18100):   hasPickup: true,
10-23 17:49:16.447 I/ReactNativeJS(18100):   hasDestination: true,
10-23 17:49:16.447 I/ReactNativeJS(18100):   showDriversOnMap: false,
10-23 17:49:16.447 I/ReactNativeJS(18100):   timestamp: '2025-10-23T12:19:16.447Z' }
10-23 17:49:16.447 I/ReactNativeJS(18100): '≡ƒÆ░ [UI] Displaying fare for hatchback:', { fare: 447,
10-23 17:49:16.447 I/ReactNativeJS(18100):   isSelected: false,
10-23 17:49:16.447 I/ReactNativeJS(18100):   showingCalculated: true,
10-23 17:49:16.447 I/ReactNativeJS(18100):   source: 'calculated' }
10-23 17:49:16.449 I/ReactNativeJS(18100): '≡ƒÆ░ [UI] Displaying fare for hatchback_ac:', { fare: 493,
10-23 17:49:16.449 I/ReactNativeJS(18100):   isSelected: false,
10-23 17:49:16.449 I/ReactNativeJS(18100):   showingCalculated: true,
10-23 17:49:16.449 I/ReactNativeJS(18100):   source: 'calculated' }
10-23 17:49:16.451 I/ReactNativeJS(18100): '≡ƒÆ░ [UI] Displaying fare for sedan:', { fare: 447,
10-23 17:49:16.451 I/ReactNativeJS(18100):   isSelected: true,
10-23 17:49:16.451 I/ReactNativeJS(18100):   showingCalculated: true,
10-23 17:49:16.451 I/ReactNativeJS(18100):   source: 'calculated' }
10-23 17:49:16.453 I/ReactNativeJS(18100): '≡ƒÆ░ [UI] Displaying fare for sedan_ac:', { fare: 462,
10-23 17:49:16.453 I/ReactNativeJS(18100):   isSelected: false,
10-23 17:49:16.453 I/ReactNativeJS(18100):   showingCalculated: true,
10-23 17:49:16.453 I/ReactNativeJS(18100):   source: 'calculated' }
10-23 17:49:16.455 I/ReactNativeJS(18100): '≡ƒÆ░ [UI] Displaying fare for suv:', { fare: 762,
10-23 17:49:16.455 I/ReactNativeJS(18100):   isSelected: false,
10-23 17:49:16.455 I/ReactNativeJS(18100):   showingCalculated: true,
10-23 17:49:16.455 I/ReactNativeJS(18100):   source: 'calculated' }
10-23 17:49:16.457 I/ReactNativeJS(18100): '≡ƒÆ░ [UI] Displaying fare for suv_ac:', { fare: 1923,
10-23 17:49:16.457 I/ReactNativeJS(18100):   isSelected: false,
10-23 17:49:16.457 I/ReactNativeJS(18100):   showingCalculated: true,
10-23 17:49:16.457 I/ReactNativeJS(18100):   source: 'calculated' }
10-23 17:49:16.459 I/ReactNativeJS(18100): ≡ƒº¬≡ƒº¬≡ƒº¬ TEST MAP RENDERING NOW
10-23 17:49:16.459 I/ReactNativeJS(18100): '≡ƒº¬ Props received:', [ 'userLocation',
10-23 17:49:16.459 I/ReactNativeJS(18100):   'pickupLocation',
10-23 17:49:16.459 I/ReactNativeJS(18100):   'destinationLocation',
10-23 17:49:16.459 I/ReactNativeJS(18100):   'onRegionChangeComplete',
10-23 17:49:16.459 I/ReactNativeJS(18100):   'onDestinationDragEnd',
10-23 17:49:16.459 I/ReactNativeJS(18100):   'showCenteredPin',
10-23 17:49:16.459 I/ReactNativeJS(18100):   'availableDrivers',
10-23 17:49:16.459 I/ReactNativeJS(18100):   'showDrivers' ]
10-23 17:49:16.827 W/ReactNativeJS(18100): ≡ƒÅá [HOME] ===== RENDERING HOME SCREEN =====
10-23 17:49:16.827 W/ReactNativeJS(18100): '≡ƒÅá [HOME] currentLocation:', '{"altitude":771.7999877929688,"heading":0,"altitudeAccuracy":1.3601199388504028,"latitude":12.7486283,"speed":6.911815319374692e-17,"longitude":77.8299733,"accuracy":2.0250000953674316}'
10-23 17:49:16.827 W/ReactNativeJS(18100): '≡ƒÅá [HOME] pickupCoords:', '{"latitude":12.7486283,"longitude":77.8299733}'
10-23 17:49:16.827 W/ReactNativeJS(18100): '≡ƒÅá [HOME] destinationCoords:', '{"latitude":12.8303987,"longitude":77.86623689999999}'
10-23 17:49:16.827 W/ReactNativeJS(18100): '≡ƒÅá [HOME] pickupLocation text:', 'PRXJ+F32, Brindavan Nagar, Plot 87, NGGO\'s Colony, Anand Nagar, Hosur, Tamil Nadu 635109, India'
10-23 17:49:16.827 W/ReactNativeJS(18100): '≡ƒÅá [HOME] availableDrivers count:', 1
10-23 17:49:16.827 W/ReactNativeJS(18100): '≡ƒÅá [HOME] showDriversOnMap:', false
10-23 17:49:16.827 I/ReactNativeJS(18100): '≡ƒÅá≡ƒÅá≡ƒÅá [HOME-V2] ABOUT TO RENDER SimpleHosurMap with props:', { hasUserLocation: true,
10-23 17:49:16.827 I/ReactNativeJS(18100):   hasPickup: true,
10-23 17:49:16.827 I/ReactNativeJS(18100):   hasDestination: true,
10-23 17:49:16.827 I/ReactNativeJS(18100):   showDriversOnMap: false,
10-23 17:49:16.827 I/ReactNativeJS(18100):   timestamp: '2025-10-23T12:19:16.827Z' }
10-23 17:49:16.828 I/ReactNativeJS(18100): '≡ƒÆ░ [UI] Displaying fare for hatchback:', { fare: 447,
10-23 17:49:16.828 I/ReactNativeJS(18100):   isSelected: false,
10-23 17:49:16.828 I/ReactNativeJS(18100):   showingCalculated: true,
10-23 17:49:16.828 I/ReactNativeJS(18100):   source: 'calculated' }
10-23 17:49:16.830 I/ReactNativeJS(18100): '≡ƒÆ░ [UI] Displaying fare for hatchback_ac:', { fare: 493,
10-23 17:49:16.830 I/ReactNativeJS(18100):   isSelected: false,
10-23 17:49:16.830 I/ReactNativeJS(18100):   showingCalculated: true,
10-23 17:49:16.830 I/ReactNativeJS(18100):   source: 'calculated' }
10-23 17:49:16.832 I/ReactNativeJS(18100): '≡ƒÆ░ [UI] Displaying fare for sedan:', { fare: 447,
10-23 17:49:16.832 I/ReactNativeJS(18100):   isSelected: true,
10-23 17:49:16.832 I/ReactNativeJS(18100):   showingCalculated: true,
10-23 17:49:16.832 I/ReactNativeJS(18100):   source: 'calculated' }
10-23 17:49:16.834 I/ReactNativeJS(18100): '≡ƒÆ░ [UI] Displaying fare for sedan_ac:', { fare: 462,
10-23 17:49:16.834 I/ReactNativeJS(18100):   isSelected: false,
10-23 17:49:16.834 I/ReactNativeJS(18100):   showingCalculated: true,
10-23 17:49:16.834 I/ReactNativeJS(18100):   source: 'calculated' }
10-23 17:49:16.835 I/ReactNativeJS(18100): '≡ƒÆ░ [UI] Displaying fare for suv:', { fare: 762,
10-23 17:49:16.835 I/ReactNativeJS(18100):   isSelected: false,
10-23 17:49:16.835 I/ReactNativeJS(18100):   showingCalculated: true,
10-23 17:49:16.835 I/ReactNativeJS(18100):   source: 'calculated' }
10-23 17:49:16.837 I/ReactNativeJS(18100): '≡ƒÆ░ [UI] Displaying fare for suv_ac:', { fare: 1923,
10-23 17:49:16.837 I/ReactNativeJS(18100):   isSelected: false,
10-23 17:49:16.837 I/ReactNativeJS(18100):   showingCalculated: true,
10-23 17:49:16.837 I/ReactNativeJS(18100):   source: 'calculated' }
10-23 17:49:16.839 I/ReactNativeJS(18100): ≡ƒº¬≡ƒº¬≡ƒº¬ TEST MAP RENDERING NOW
10-23 17:49:16.839 I/ReactNativeJS(18100): '≡ƒº¬ Props received:', [ 'userLocation',
10-23 17:49:16.839 I/ReactNativeJS(18100):   'pickupLocation',
10-23 17:49:16.839 I/ReactNativeJS(18100):   'destinationLocation',
10-23 17:49:16.839 I/ReactNativeJS(18100):   'onRegionChangeComplete',
10-23 17:49:16.839 I/ReactNativeJS(18100):   'onDestinationDragEnd',
10-23 17:49:16.839 I/ReactNativeJS(18100):   'showCenteredPin',
10-23 17:49:16.839 I/ReactNativeJS(18100):   'availableDrivers',
10-23 17:49:16.839 I/ReactNativeJS(18100):   'showDrivers' ]
10-23 17:49:28.366 W/ReactNativeJS(18100): '≡ƒÄ» [TRIP_NOTIFICATION] Component render, notifications count:', 50
10-23 17:49:28.367 W/ReactNativeJS(18100): '≡ƒÄ» [TRIP_NOTIFICATION] Notifications:', '[{"id":"c0930979-b31c-4f63-b636-2d97a731c792","type":"ride_completed","status":"read"},{"id":"2012b652-4fe3-4c41-9df3-bc9d3186a24a","type":"ride_status_changed","status":"read"},{"id":"61a74f93-5643-46ef-8ebb-56d7ed81f675","type":"ride_status_changed","status":"read"},{"id":"e75df879-8cb8-4dee-8100-8dd61f99b26e","type":"ride_status_changed","status":"read"},{"id":"55a746c6-9b8c-44e6-b80c-2beac586c467","type":"ride_status_changed","status":"read"},{"id":"7c3cc3c7-e9b6-4cf8-91bb-1bb827ff7808","type":"ride_status_changed","status":"read"},{"id":"8012a1d6-41e9-4ff2-a75b-8fee9a93ca8e","type":"ride_status_changed","status":"read"},{"id":"d29bae80-10e7-4d05-99d5-8dc43f61d814","type":"ride_status_changed","status":"read"},{"id":"d7d8686d-95ee-4ce0-97da-ed89564b014b","type":"ride_status_changed","status":"read"},{"id":"755a6269-1daf-4327-ab71-f65e3700bf1a","type":"ride_status_changed","status":"read"},{"id":"500d07b9-07ca-40df-9d4a-3efcf677a117","type":"ride_status_changed","status":"read"},{"id":"df4552cd-e9bc-4e40-a8a0-1270b37737db","type":"booking_completed","status":"read"},{"id":"acb2b80a-267e-4b98-acd0-397461aee537","type":"booking_completed","status":"read"},{"id":"60dbc0b5-662a-48af-b01a-55212f6ac6ea","type":"booking_completed","status":"read"},{"id":"0f408121-1188-4550-9f50-919dcc8a4ed1","type":"booking_completed","status":"read"},{"id":"23052592-9d19-442c-b40f-12b90c3da756","type":"booking_completed","status":"read"},{"id":"c9ff3014-54e3-4b30-9f22-eceee292796b","type":"ride_status_changed","status":"read"},{"id":"879d4bbd-20ad-4253-a1c6-ae7535e7c211","type":"ride_status_changed","status":"read"},{"id":"286129cf-19e6-41fd-b52f-d17334d0d0f9","type":"ride_status_changed","status":"read"},{"id":"b55ac709-48d5-4db2-8246-e23f9bd317ec","type":"ride_completed","status":"read"},{"id":"92abe95d-e47d-48fa-8159-b119f5802710","type":"ride_status_changed","status":"read"},{"id":"73ad244d-a00b-42a9-83e9-97932b9db2d2","type":"ride_status_changed","status":"read"},{"id":"971613ac-8d86-4ab6-8fe5-49c528ca56ee","type":"ride_status_changed","status":"read"},{"id":"49f0f7f9-03d6-4211-b47d-0e7738f190fa","type":"ride_completed","status":"read"},{"id":"6a87c30d-c48d-458c-9b94-32dd5e75ac05","type":"ride_status_changed","status":"read"},{"id":"aee0b7a7-9cb2-4f6b-b53f-fa47642319d0","type":"ride_status_changed","status":"read"},{"id":"6c1d61c3-6cbd-4310-adfe-6d36bc611939","type":"ride_status_changed","status":"read"},{"id":"9d9ab6e7-0357-4305-9ba8-e91c0bb29897","type":"ride_status_changed","status":"read"},{"id":"d952183c-69a7-47dc-a848-d11bc2fff300","type":"ride_cancelled","status":"read"},{"id":"a01d13a8-c95b-4bf1-b0e1-8b2a8e9aaa6b","type":"ride_status_changed","status":"read"},{"id":"5a385bc8-147d-4ac2-834c-305ed9db9a05","type":"ride_completed","status":"read"},{"id":"b9365ade-a3a4-4036-b42f-606b88d5fac9","type":"ride_status_changed","status":"read"},{"id":"b6a2c6b6-bdb4-40ce-a092-25f6dd4ba953","type":"ride_status_changed","status":"read"},{"id":"d850bf94-823f-497a-b292-075abf5b5a59","type":"ride_status_changed","status":"read"},{"id":"5d8275c0-6692-44b3-a4ff-4eabba59873e","type":"ride_status_changed","status":"read"},{"id":"5cfa0487-5d05-42e8-8e92-11a287b3ded0","type":"ride_completed","status":"read"},{"id":"679ed79c-eb21-4609-a2b9-a1d304d4d4ad","type":"ride_status_changed","status":"read"},{"id":"53bb9116-5f1d-445c-94e0-f2e3d9fa3ffe","type":"ride_status_changed","status":"read"},{"id":"4196d3c8-e6dd-4a11-8d40-6771aa06de07","type":"ride_status_changed","status":"read"},{"id":"8d21f749-083a-46d1-9f7e-f7dc5c36ef05","type":"ride_status_changed","status":"read"},{"id":"0a371105-3196-4055-97ad-b230dba42df5","type":"ride_completed","status":"read"},{"id":"9f010555-c90c-447e-83ae-919809ba8350","type":"ride_status_changed","status":"read"},{"id":"84dd0357-20ec-4317-b7bd-7b31515219fb","type":"ride_status_changed","status":"read"},{"id":"caaa4644-cefa-47e6-8c92-60415a52ef4b","type":"ride_status_changed","status":"read"},{"id":"c6e2da1c-f900-47c8-b289-a88c28451f89","ty
10-23 17:49:28.367 I/ReactNativeJS(18100): '≡ƒöì [TRIP_NOTIFICATION] Component render - visible:', false, 'notification:', false
10-23 17:49:28.395 I/ReactNativeJS(18100): '≡ƒöì AuthNavigator - checking auth state:', { user: true,
10-23 17:49:28.395 I/ReactNativeJS(18100):   loading: false,
10-23 17:49:28.395 I/ReactNativeJS(18100):   segments: '(tabs)/profile',
10-23 17:49:28.395 I/ReactNativeJS(18100):   userEmail: '918608374935@a1taxi.app',
10-23 17:49:28.395 I/ReactNativeJS(18100):   userRole: 'customer' }
10-23 17:49:28.395 I/ReactNativeJS(18100): Γ£à User authenticated and on correct screen
10-23 17:49:28.997 I/ReactNativeJS(18100): ≡ƒÜ¬ Sign out button pressed
10-23 17:49:29.815 I/ReactNativeJS(18100): ≡ƒÜ¬ User confirmed sign out
10-23 17:49:29.815 I/ReactNativeJS(18100): ≡ƒÜ¬ Calling signOut function...
10-23 17:49:29.815 I/ReactNativeJS(18100): ≡ƒÜ¬ Starting sign out process...
10-23 17:49:30.140 W/ReactNativeJS(18100): '≡ƒÄ» [TRIP_NOTIFICATION] Component render, notifications count:', 50
10-23 17:49:30.144 W/ReactNativeJS(18100): '≡ƒÄ» [TRIP_NOTIFICATION] Notifications:', '[{"id":"c0930979-b31c-4f63-b636-2d97a731c792","type":"ride_completed","status":"read"},{"id":"2012b652-4fe3-4c41-9df3-bc9d3186a24a","type":"ride_status_changed","status":"read"},{"id":"61a74f93-5643-46ef-8ebb-56d7ed81f675","type":"ride_status_changed","status":"read"},{"id":"e75df879-8cb8-4dee-8100-8dd61f99b26e","type":"ride_status_changed","status":"read"},{"id":"55a746c6-9b8c-44e6-b80c-2beac586c467","type":"ride_status_changed","status":"read"},{"id":"7c3cc3c7-e9b6-4cf8-91bb-1bb827ff7808","type":"ride_status_changed","status":"read"},{"id":"8012a1d6-41e9-4ff2-a75b-8fee9a93ca8e","type":"ride_status_changed","status":"read"},{"id":"d29bae80-10e7-4d05-99d5-8dc43f61d814","type":"ride_status_changed","status":"read"},{"id":"d7d8686d-95ee-4ce0-97da-ed89564b014b","type":"ride_status_changed","status":"read"},{"id":"755a6269-1daf-4327-ab71-f65e3700bf1a","type":"ride_status_changed","status":"read"},{"id":"500d07b9-07ca-40df-9d4a-3efcf677a117","type":"ride_status_changed","status":"read"},{"id":"df4552cd-e9bc-4e40-a8a0-1270b37737db","type":"booking_completed","status":"read"},{"id":"acb2b80a-267e-4b98-acd0-397461aee537","type":"booking_completed","status":"read"},{"id":"60dbc0b5-662a-48af-b01a-55212f6ac6ea","type":"booking_completed","status":"read"},{"id":"0f408121-1188-4550-9f50-919dcc8a4ed1","type":"booking_completed","status":"read"},{"id":"23052592-9d19-442c-b40f-12b90c3da756","type":"booking_completed","status":"read"},{"id":"c9ff3014-54e3-4b30-9f22-eceee292796b","type":"ride_status_changed","status":"read"},{"id":"879d4bbd-20ad-4253-a1c6-ae7535e7c211","type":"ride_status_changed","status":"read"},{"id":"286129cf-19e6-41fd-b52f-d17334d0d0f9","type":"ride_status_changed","status":"read"},{"id":"b55ac709-48d5-4db2-8246-e23f9bd317ec","type":"ride_completed","status":"read"},{"id":"92abe95d-e47d-48fa-8159-b119f5802710","type":"ride_status_changed","status":"read"},{"id":"73ad244d-a00b-42a9-83e9-97932b9db2d2","type":"ride_status_changed","status":"read"},{"id":"971613ac-8d86-4ab6-8fe5-49c528ca56ee","type":"ride_status_changed","status":"read"},{"id":"49f0f7f9-03d6-4211-b47d-0e7738f190fa","type":"ride_completed","status":"read"},{"id":"6a87c30d-c48d-458c-9b94-32dd5e75ac05","type":"ride_status_changed","status":"read"},{"id":"aee0b7a7-9cb2-4f6b-b53f-fa47642319d0","type":"ride_status_changed","status":"read"},{"id":"6c1d61c3-6cbd-4310-adfe-6d36bc611939","type":"ride_status_changed","status":"read"},{"id":"9d9ab6e7-0357-4305-9ba8-e91c0bb29897","type":"ride_status_changed","status":"read"},{"id":"d952183c-69a7-47dc-a848-d11bc2fff300","type":"ride_cancelled","status":"read"},{"id":"a01d13a8-c95b-4bf1-b0e1-8b2a8e9aaa6b","type":"ride_status_changed","status":"read"},{"id":"5a385bc8-147d-4ac2-834c-305ed9db9a05","type":"ride_completed","status":"read"},{"id":"b9365ade-a3a4-4036-b42f-606b88d5fac9","type":"ride_status_changed","status":"read"},{"id":"b6a2c6b6-bdb4-40ce-a092-25f6dd4ba953","type":"ride_status_changed","status":"read"},{"id":"d850bf94-823f-497a-b292-075abf5b5a59","type":"ride_status_changed","status":"read"},{"id":"5d8275c0-6692-44b3-a4ff-4eabba59873e","type":"ride_status_changed","status":"read"},{"id":"5cfa0487-5d05-42e8-8e92-11a287b3ded0","type":"ride_completed","status":"read"},{"id":"679ed79c-eb21-4609-a2b9-a1d304d4d4ad","type":"ride_status_changed","status":"read"},{"id":"53bb9116-5f1d-445c-94e0-f2e3d9fa3ffe","type":"ride_status_changed","status":"read"},{"id":"4196d3c8-e6dd-4a11-8d40-6771aa06de07","type":"ride_status_changed","status":"read"},{"id":"8d21f749-083a-46d1-9f7e-f7dc5c36ef05","type":"ride_status_changed","status":"read"},{"id":"0a371105-3196-4055-97ad-b230dba42df5","type":"ride_completed","status":"read"},{"id":"9f010555-c90c-447e-83ae-919809ba8350","type":"ride_status_changed","status":"read"},{"id":"84dd0357-20ec-4317-b7bd-7b31515219fb","type":"ride_status_changed","status":"read"},{"id":"caaa4644-cefa-47e6-8c92-60415a52ef4b","type":"ride_status_changed","status":"read"},{"id":"c6e2da1c-f900-47c8-b289-a88c28451f89","ty
10-23 17:49:30.145 I/ReactNativeJS(18100): '≡ƒöì [TRIP_NOTIFICATION] Component render - visible:', false, 'notification:', false
10-23 17:49:30.146 W/ReactNativeJS(18100): ≡ƒÅá [HOME] ===== RENDERING HOME SCREEN =====
10-23 17:49:30.146 W/ReactNativeJS(18100): '≡ƒÅá [HOME] currentLocation:', '{"altitude":771.7999877929688,"heading":0,"altitudeAccuracy":1.3601199388504028,"latitude":12.7486283,"speed":6.911815319374692e-17,"longitude":77.8299733,"accuracy":2.0250000953674316}'
10-23 17:49:30.147 W/ReactNativeJS(18100): '≡ƒÅá [HOME] pickupCoords:', '{"latitude":12.7486283,"longitude":77.8299733}'
10-23 17:49:30.147 W/ReactNativeJS(18100): '≡ƒÅá [HOME] destinationCoords:', '{"latitude":12.8303987,"longitude":77.86623689999999}'
10-23 17:49:30.147 W/ReactNativeJS(18100): '≡ƒÅá [HOME] pickupLocation text:', 'PRXJ+F32, Brindavan Nagar, Plot 87, NGGO\'s Colony, Anand Nagar, Hosur, Tamil Nadu 635109, India'
10-23 17:49:30.147 W/ReactNativeJS(18100): '≡ƒÅá [HOME] availableDrivers count:', 1
10-23 17:49:30.147 W/ReactNativeJS(18100): '≡ƒÅá [HOME] showDriversOnMap:', false
10-23 17:49:30.148 I/ReactNativeJS(18100): '≡ƒÅá≡ƒÅá≡ƒÅá [HOME-V2] ABOUT TO RENDER SimpleHosurMap with props:', { hasUserLocation: true,
10-23 17:49:30.148 I/ReactNativeJS(18100):   hasPickup: true,
10-23 17:49:30.148 I/ReactNativeJS(18100):   hasDestination: true,
10-23 17:49:30.148 I/ReactNativeJS(18100):   showDriversOnMap: false,
10-23 17:49:30.148 I/ReactNativeJS(18100):   timestamp: '2025-10-23T12:19:30.147Z' }
10-23 17:49:30.148 I/ReactNativeJS(18100): '≡ƒÆ░ [UI] Displaying fare for hatchback:', { fare: 447,
10-23 17:49:30.148 I/ReactNativeJS(18100):   isSelected: false,
10-23 17:49:30.148 I/ReactNativeJS(18100):   showingCalculated: true,
10-23 17:49:30.148 I/ReactNativeJS(18100):   source: 'calculated' }
10-23 17:49:30.151 I/ReactNativeJS(18100): '≡ƒÆ░ [UI] Displaying fare for hatchback_ac:', { fare: 493,
10-23 17:49:30.151 I/ReactNativeJS(18100):   isSelected: false,
10-23 17:49:30.151 I/ReactNativeJS(18100):   showingCalculated: true,
10-23 17:49:30.151 I/ReactNativeJS(18100):   source: 'calculated' }
10-23 17:49:30.153 I/ReactNativeJS(18100): '≡ƒÆ░ [UI] Displaying fare for sedan:', { fare: 447,
10-23 17:49:30.153 I/ReactNativeJS(18100):   isSelected: true,
10-23 17:49:30.153 I/ReactNativeJS(18100):   showingCalculated: true,
10-23 17:49:30.153 I/ReactNativeJS(18100):   source: 'calculated' }
10-23 17:49:30.154 I/ReactNativeJS(18100): '≡ƒÆ░ [UI] Displaying fare for sedan_ac:', { fare: 462,
10-23 17:49:30.154 I/ReactNativeJS(18100):   isSelected: false,
10-23 17:49:30.154 I/ReactNativeJS(18100):   showingCalculated: true,
10-23 17:49:30.154 I/ReactNativeJS(18100):   source: 'calculated' }
10-23 17:49:30.156 I/ReactNativeJS(18100): '≡ƒÆ░ [UI] Displaying fare for suv:', { fare: 762,
10-23 17:49:30.156 I/ReactNativeJS(18100):   isSelected: false,
10-23 17:49:30.156 I/ReactNativeJS(18100):   showingCalculated: true,
10-23 17:49:30.156 I/ReactNativeJS(18100):   source: 'calculated' }
10-23 17:49:30.157 I/ReactNativeJS(18100): '≡ƒÆ░ [UI] Displaying fare for suv_ac:', { fare: 1923,
10-23 17:49:30.157 I/ReactNativeJS(18100):   isSelected: false,
10-23 17:49:30.157 I/ReactNativeJS(18100):   showingCalculated: true,
10-23 17:49:30.157 I/ReactNativeJS(18100):   source: 'calculated' }
10-23 17:49:30.159 I/ReactNativeJS(18100): ≡ƒº¬≡ƒº¬≡ƒº¬ TEST MAP RENDERING NOW
10-23 17:49:30.159 I/ReactNativeJS(18100): '≡ƒº¬ Props received:', [ 'userLocation',
10-23 17:49:30.159 I/ReactNativeJS(18100):   'pickupLocation',
10-23 17:49:30.159 I/ReactNativeJS(18100):   'destinationLocation',
10-23 17:49:30.159 I/ReactNativeJS(18100):   'onRegionChangeComplete',
10-23 17:49:30.159 I/ReactNativeJS(18100):   'onDestinationDragEnd',
10-23 17:49:30.159 I/ReactNativeJS(18100):   'showCenteredPin',
10-23 17:49:30.159 I/ReactNativeJS(18100):   'availableDrivers',
10-23 17:49:30.159 I/ReactNativeJS(18100):   'showDrivers' ]
10-23 17:49:30.179 W/ReactNativeJS(18100): '≡ƒÄ» [TRIP_NOTIFICATION] Component render, notifications count:', 50
10-23 17:49:30.180 W/ReactNativeJS(18100): '≡ƒÄ» [TRIP_NOTIFICATION] Notifications:', '[{"id":"c0930979-b31c-4f63-b636-2d97a731c792","type":"ride_completed","status":"read"},{"id":"2012b652-4fe3-4c41-9df3-bc9d3186a24a","type":"ride_status_changed","status":"read"},{"id":"61a74f93-5643-46ef-8ebb-56d7ed81f675","type":"ride_status_changed","status":"read"},{"id":"e75df879-8cb8-4dee-8100-8dd61f99b26e","type":"ride_status_changed","status":"read"},{"id":"55a746c6-9b8c-44e6-b80c-2beac586c467","type":"ride_status_changed","status":"read"},{"id":"7c3cc3c7-e9b6-4cf8-91bb-1bb827ff7808","type":"ride_status_changed","status":"read"},{"id":"8012a1d6-41e9-4ff2-a75b-8fee9a93ca8e","type":"ride_status_changed","status":"read"},{"id":"d29bae80-10e7-4d05-99d5-8dc43f61d814","type":"ride_status_changed","status":"read"},{"id":"d7d8686d-95ee-4ce0-97da-ed89564b014b","type":"ride_status_changed","status":"read"},{"id":"755a6269-1daf-4327-ab71-f65e3700bf1a","type":"ride_status_changed","status":"read"},{"id":"500d07b9-07ca-40df-9d4a-3efcf677a117","type":"ride_status_changed","status":"read"},{"id":"df4552cd-e9bc-4e40-a8a0-1270b37737db","type":"booking_completed","status":"read"},{"id":"acb2b80a-267e-4b98-acd0-397461aee537","type":"booking_completed","status":"read"},{"id":"60dbc0b5-662a-48af-b01a-55212f6ac6ea","type":"booking_completed","status":"read"},{"id":"0f408121-1188-4550-9f50-919dcc8a4ed1","type":"booking_completed","status":"read"},{"id":"23052592-9d19-442c-b40f-12b90c3da756","type":"booking_completed","status":"read"},{"id":"c9ff3014-54e3-4b30-9f22-eceee292796b","type":"ride_status_changed","status":"read"},{"id":"879d4bbd-20ad-4253-a1c6-ae7535e7c211","type":"ride_status_changed","status":"read"},{"id":"286129cf-19e6-41fd-b52f-d17334d0d0f9","type":"ride_status_changed","status":"read"},{"id":"b55ac709-48d5-4db2-8246-e23f9bd317ec","type":"ride_completed","status":"read"},{"id":"92abe95d-e47d-48fa-8159-b119f5802710","type":"ride_status_changed","status":"read"},{"id":"73ad244d-a00b-42a9-83e9-97932b9db2d2","type":"ride_status_changed","status":"read"},{"id":"971613ac-8d86-4ab6-8fe5-49c528ca56ee","type":"ride_status_changed","status":"read"},{"id":"49f0f7f9-03d6-4211-b47d-0e7738f190fa","type":"ride_completed","status":"read"},{"id":"6a87c30d-c48d-458c-9b94-32dd5e75ac05","type":"ride_status_changed","status":"read"},{"id":"aee0b7a7-9cb2-4f6b-b53f-fa47642319d0","type":"ride_status_changed","status":"read"},{"id":"6c1d61c3-6cbd-4310-adfe-6d36bc611939","type":"ride_status_changed","status":"read"},{"id":"9d9ab6e7-0357-4305-9ba8-e91c0bb29897","type":"ride_status_changed","status":"read"},{"id":"d952183c-69a7-47dc-a848-d11bc2fff300","type":"ride_cancelled","status":"read"},{"id":"a01d13a8-c95b-4bf1-b0e1-8b2a8e9aaa6b","type":"ride_status_changed","status":"read"},{"id":"5a385bc8-147d-4ac2-834c-305ed9db9a05","type":"ride_completed","status":"read"},{"id":"b9365ade-a3a4-4036-b42f-606b88d5fac9","type":"ride_status_changed","status":"read"},{"id":"b6a2c6b6-bdb4-40ce-a092-25f6dd4ba953","type":"ride_status_changed","status":"read"},{"id":"d850bf94-823f-497a-b292-075abf5b5a59","type":"ride_status_changed","status":"read"},{"id":"5d8275c0-6692-44b3-a4ff-4eabba59873e","type":"ride_status_changed","status":"read"},{"id":"5cfa0487-5d05-42e8-8e92-11a287b3ded0","type":"ride_completed","status":"read"},{"id":"679ed79c-eb21-4609-a2b9-a1d304d4d4ad","type":"ride_status_changed","status":"read"},{"id":"53bb9116-5f1d-445c-94e0-f2e3d9fa3ffe","type":"ride_status_changed","status":"read"},{"id":"4196d3c8-e6dd-4a11-8d40-6771aa06de07","type":"ride_status_changed","status":"read"},{"id":"8d21f749-083a-46d1-9f7e-f7dc5c36ef05","type":"ride_status_changed","status":"read"},{"id":"0a371105-3196-4055-97ad-b230dba42df5","type":"ride_completed","status":"read"},{"id":"9f010555-c90c-447e-83ae-919809ba8350","type":"ride_status_changed","status":"read"},{"id":"84dd0357-20ec-4317-b7bd-7b31515219fb","type":"ride_status_changed","status":"read"},{"id":"caaa4644-cefa-47e6-8c92-60415a52ef4b","type":"ride_status_changed","status":"read"},{"id":"c6e2da1c-f900-47c8-b289-a88c28451f89","ty
10-23 17:49:30.180 I/ReactNativeJS(18100): '≡ƒöì [TRIP_NOTIFICATION] Component render - visible:', false, 'notification:', false
10-23 17:49:30.181 W/ReactNativeJS(18100): ≡ƒÅá [HOME] ===== RENDERING HOME SCREEN =====
10-23 17:49:30.181 W/ReactNativeJS(18100): '≡ƒÅá [HOME] currentLocation:', '{"altitude":771.7999877929688,"heading":0,"altitudeAccuracy":1.3601199388504028,"latitude":12.7486283,"speed":6.911815319374692e-17,"longitude":77.8299733,"accuracy":2.0250000953674316}'
10-23 17:49:30.181 W/ReactNativeJS(18100): '≡ƒÅá [HOME] pickupCoords:', '{"latitude":12.7486283,"longitude":77.8299733}'
10-23 17:49:30.181 W/ReactNativeJS(18100): '≡ƒÅá [HOME] destinationCoords:', '{"latitude":12.8303987,"longitude":77.86623689999999}'
10-23 17:49:30.181 W/ReactNativeJS(18100): '≡ƒÅá [HOME] pickupLocation text:', 'PRXJ+F32, Brindavan Nagar, Plot 87, NGGO\'s Colony, Anand Nagar, Hosur, Tamil Nadu 635109, India'
10-23 17:49:30.181 W/ReactNativeJS(18100): '≡ƒÅá [HOME] availableDrivers count:', 1
10-23 17:49:30.181 W/ReactNativeJS(18100): '≡ƒÅá [HOME] showDriversOnMap:', false
10-23 17:49:30.181 I/ReactNativeJS(18100): '≡ƒÅá≡ƒÅá≡ƒÅá [HOME-V2] ABOUT TO RENDER SimpleHosurMap with props:', { hasUserLocation: true,
10-23 17:49:30.181 I/ReactNativeJS(18100):   hasPickup: true,
10-23 17:49:30.181 I/ReactNativeJS(18100):   hasDestination: true,
10-23 17:49:30.181 I/ReactNativeJS(18100):   showDriversOnMap: false,
10-23 17:49:30.181 I/ReactNativeJS(18100):   timestamp: '2025-10-23T12:19:30.181Z' }
10-23 17:49:30.181 I/ReactNativeJS(18100): '≡ƒÆ░ [UI] Displaying fare for hatchback:', { fare: 447,
10-23 17:49:30.181 I/ReactNativeJS(18100):   isSelected: false,
10-23 17:49:30.181 I/ReactNativeJS(18100):   showingCalculated: true,
10-23 17:49:30.181 I/ReactNativeJS(18100):   source: 'calculated' }
10-23 17:49:30.183 I/ReactNativeJS(18100): '≡ƒÆ░ [UI] Displaying fare for hatchback_ac:', { fare: 493,
10-23 17:49:30.183 I/ReactNativeJS(18100):   isSelected: false,
10-23 17:49:30.183 I/ReactNativeJS(18100):   showingCalculated: true,
10-23 17:49:30.183 I/ReactNativeJS(18100):   source: 'calculated' }
10-23 17:49:30.185 I/ReactNativeJS(18100): '≡ƒÆ░ [UI] Displaying fare for sedan:', { fare: 447,
10-23 17:49:30.185 I/ReactNativeJS(18100):   isSelected: true,
10-23 17:49:30.185 I/ReactNativeJS(18100):   showingCalculated: true,
10-23 17:49:30.185 I/ReactNativeJS(18100):   source: 'calculated' }
10-23 17:49:30.186 I/ReactNativeJS(18100): '≡ƒÆ░ [UI] Displaying fare for sedan_ac:', { fare: 462,
10-23 17:49:30.186 I/ReactNativeJS(18100):   isSelected: false,
10-23 17:49:30.186 I/ReactNativeJS(18100):   showingCalculated: true,
10-23 17:49:30.186 I/ReactNativeJS(18100):   source: 'calculated' }
10-23 17:49:30.188 I/ReactNativeJS(18100): '≡ƒÆ░ [UI] Displaying fare for suv:', { fare: 762,
10-23 17:49:30.188 I/ReactNativeJS(18100):   isSelected: false,
10-23 17:49:30.188 I/ReactNativeJS(18100):   showingCalculated: true,
10-23 17:49:30.188 I/ReactNativeJS(18100):   source: 'calculated' }
10-23 17:49:30.190 I/ReactNativeJS(18100): '≡ƒÆ░ [UI] Displaying fare for suv_ac:', { fare: 1923,
10-23 17:49:30.190 I/ReactNativeJS(18100):   isSelected: false,
10-23 17:49:30.190 I/ReactNativeJS(18100):   showingCalculated: true,
10-23 17:49:30.190 I/ReactNativeJS(18100):   source: 'calculated' }
10-23 17:49:30.191 I/ReactNativeJS(18100): ≡ƒº¬≡ƒº¬≡ƒº¬ TEST MAP RENDERING NOW
10-23 17:49:30.192 I/ReactNativeJS(18100): '≡ƒº¬ Props received:', [ 'userLocation',
10-23 17:49:30.192 I/ReactNativeJS(18100):   'pickupLocation',
10-23 17:49:30.192 I/ReactNativeJS(18100):   'destinationLocation',
10-23 17:49:30.192 I/ReactNativeJS(18100):   'onRegionChangeComplete',
10-23 17:49:30.192 I/ReactNativeJS(18100):   'onDestinationDragEnd',
10-23 17:49:30.192 I/ReactNativeJS(18100):   'showCenteredPin',
10-23 17:49:30.192 I/ReactNativeJS(18100):   'availableDrivers',
10-23 17:49:30.192 I/ReactNativeJS(18100):   'showDrivers' ]
10-23 17:49:30.220 I/ReactNativeJS(18100): '≡ƒöì AuthNavigator - checking auth state:', { user: false,
10-23 17:49:30.220 I/ReactNativeJS(18100):   loading: false,
10-23 17:49:30.220 I/ReactNativeJS(18100):   segments: '(tabs)/profile',
10-23 17:49:30.220 I/ReactNativeJS(18100):   userEmail: undefined,
10-23 17:49:30.220 I/ReactNativeJS(18100):   userRole: undefined }
10-23 17:49:30.221 I/ReactNativeJS(18100): ≡ƒöä Redirecting to login - user not authenticated
10-23 17:49:30.263 I/ReactNativeJS(18100): ≡ƒ¢æ [HOME] Stopping driver location polling
10-23 17:49:30.268 I/ReactNativeJS(18100): Γ£à Sign out completed, redirecting to login...
10-23 17:49:30.268 I/ReactNativeJS(18100): Γ£à Sign out completed
10-23 17:49:30.269 I/ReactNativeJS(18100): '≡ƒöì AuthNavigator - checking auth state:', { user: false,
10-23 17:49:30.269 I/ReactNativeJS(18100):   loading: false,
10-23 17:49:30.269 I/ReactNativeJS(18100):   segments: 'auth/login',
10-23 17:49:30.269 I/ReactNativeJS(18100):   userEmail: undefined,
10-23 17:49:30.269 I/ReactNativeJS(18100):   userRole: undefined }
10-23 17:49:37.462 I/ReactNativeJS(  419): '≡ƒôì Background location update:', [ { timestamp: 1761221972441,
10-23 17:49:37.462 I/ReactNativeJS(  419):     mocked: false,
10-23 17:49:37.462 I/ReactNativeJS(  419):     coords:
10-23 17:49:37.462 I/ReactNativeJS(  419):      { altitude: 774.3999633789062,
10-23 17:49:37.462 I/ReactNativeJS(  419):        heading: 0,
10-23 17:49:37.462 I/ReactNativeJS(  419):        altitudeAccuracy: 24.285858154296875,
10-23 17:49:37.462 I/ReactNativeJS(  419):        latitude: 12.7486283,
10-23 17:49:37.462 I/ReactNativeJS(  419):        speed: 5.324934164434305e-44,
10-23 17:49:37.462 I/ReactNativeJS(  419):        longitude: 77.8299733,
10-23 17:49:37.462 I/ReactNativeJS(  419):        accuracy: 2.4119999408721924 } } ]
10-23 17:49:37.467 I/ReactNativeJS(  419): ≡ƒôñ Background location update via RPC...
10-23 17:49:37.467 E/ReactNativeJS(  419): Γ¥î Supabase credentials not configured
10-23 17:49:42.491 I/ReactNativeJS(  419): '≡ƒôì Background location update:', [ { timestamp: 1761221977428,
10-23 17:49:42.491 I/ReactNativeJS(  419):     mocked: false,
10-23 17:49:42.491 I/ReactNativeJS(  419):     coords:
10-23 17:49:42.491 I/ReactNativeJS(  419):      { altitude: 774.3999633789062,
10-23 17:49:42.491 I/ReactNativeJS(  419):        heading: 0,
10-23 17:49:42.491 I/ReactNativeJS(  419):        altitudeAccuracy: 24.33572769165039,
10-23 17:49:42.491 I/ReactNativeJS(  419):        latitude: 12.7486283,
10-23 17:49:42.491 I/ReactNativeJS(  419):        speed: 0,
10-23 17:49:42.491 I/ReactNativeJS(  419):        longitude: 77.8299733,
10-23 17:49:42.491 I/ReactNativeJS(  419):        accuracy: 2.25 } },
10-23 17:49:42.491 I/ReactNativeJS(  419):   { timestamp: 1761221977430,
10-23 17:49:42.491 I/ReactNativeJS(  419):     mocked: false,
10-23 17:49:42.491 I/ReactNativeJS(  419):     coords:
10-23 17:49:42.491 I/ReactNativeJS(  419):      { altitude: 771.7999877929688,
10-23 17:49:42.491 I/ReactNativeJS(  419):        heading: 0,
10-23 17:49:42.491 I/ReactNativeJS(  419):        altitudeAccuracy: 1.3553755283355713,
10-23 17:49:42.491 I/ReactNativeJS(  419):        latitude: 12.7486283,
10-23 17:49:42.491 I/ReactNativeJS(  419):        speed: 0,
10-23 17:49:42.491 I/ReactNativeJS(  419):        longitude: 77.8299733,
10-23 17:49:42.491 I/ReactNativeJS(  419):        accuracy: 2.299999952316284 } },
10-23 17:49:42.491 I/ReactNativeJS(  419):   { timestamp: 1761221982428,
10-23 17:49:42.491 I/ReactNativeJS(  419):     mocked: false,
10-23 17:49:42.491 I/ReactNativeJS(  419):     coords:
10-23 17:49:42.491 I/ReactNativeJS(  419):      { altitude: 771.7999877929688,
10-23 17:49:42.491 I/ReactNativeJS(  419):        heading: 0,
10-23 17:49:42.491 I/ReactNativeJS(  419):        altitudeAccuracy: 1.4053676128387451,
10-23 17:49:42.491 I/ReactNativeJS(  419):        latitude: 12.7486283,
10-23 17:49:42.491 I/ReactNativeJS(  419):        speed: 0,
10-23 17:49:42.491 I/ReactNativeJS(  419):        longitude: 77.8299733,
10-23 17:49:42.491 I/ReactNativeJS(  419):        accuracy: 2 } } ]
10-23 17:49:42.494 I/ReactNativeJS(  419): ≡ƒôñ Background location update via RPC...
10-23 17:49:42.494 E/ReactNativeJS(  419): Γ¥î Supabase credentials not configured
10-23 17:49:51.503 I/ReactNativeJS(  419): '≡ƒôì Background location update:', [ { timestamp: 1761221986429,
10-23 17:49:51.503 I/ReactNativeJS(  419):     mocked: false,
10-23 17:49:51.503 I/ReactNativeJS(  419):     coords:
10-23 17:49:51.503 I/ReactNativeJS(  419):      { altitude: 771.7999877929688,
10-23 17:49:51.503 I/ReactNativeJS(  419):        heading: 0,
10-23 17:49:51.503 I/ReactNativeJS(  419):        altitudeAccuracy: 1.3422702550888062,
10-23 17:49:51.503 I/ReactNativeJS(  419):        latitude: 12.7486283,
10-23 17:49:51.503 I/ReactNativeJS(  419):        speed: 0,
10-23 17:49:51.503 I/ReactNativeJS(  419):        longitude: 77.8299733,
10-23 17:49:51.503 I/ReactNativeJS(  419):        accuracy: 3.1649999618530273 } },
10-23 17:49:51.503 I/ReactNativeJS(  419):   { timestamp: 1761221991429,
10-23 17:49:51.503 I/ReactNativeJS(  419):     mocked: false,
10-23 17:49:51.503 I/ReactNativeJS(  419):     coords:
10-23 17:49:51.503 I/ReactNativeJS(  419):      { altitude: 771.7999877929688,
10-23 17:49:51.503 I/ReactNativeJS(  419):        heading: 0,
10-23 17:49:51.503 I/ReactNativeJS(  419):        altitudeAccuracy: 1.3922778367996216,
10-23 17:49:51.503 I/ReactNativeJS(  419):        latitude: 12.7486283,
10-23 17:49:51.503 I/ReactNativeJS(  419):        speed: 0,
10-23 17:49:51.503 I/ReactNativeJS(  419):        longitude: 77.8299733,
10-23 17:49:51.503 I/ReactNativeJS(  419):        accuracy: 1.5 } } ]
10-23 17:49:51.506 I/ReactNativeJS(  419): ≡ƒôñ Background location update via RPC...
10-23 17:49:51.506 E/ReactNativeJS(  419): Γ¥î Supabase credentials not configured
10-23 17:50:02.052 I/ReactNativeJS(  419): ≡ƒôì Background fetch triggered for location update
10-23 17:50:02.072 I/ReactNativeJS(  419): ≡ƒôñ Background location update via RPC...
10-23 17:50:02.072 E/ReactNativeJS(  419): Γ¥î Supabase credentials not configured
10-23 17:50:02.074 I/ReactNativeJS(  419): Γ£à Background location update successful
10-23 17:50:02.956 I/ReactNativeJS(18100): ≡ƒÜÇ ===== HANDLE SEND OTP CLICKED =====
10-23 17:50:02.956 I/ReactNativeJS(18100): '≡ƒô▒ Formatted phone:', '+918608374935'
10-23 17:50:02.957 I/ReactNativeJS(18100): ΓÅ│ Setting loading true...
10-23 17:50:02.957 I/ReactNativeJS(18100): ≡ƒô₧ Calling sendOTP...
10-23 17:50:02.957 I/ReactNativeJS(18100): ≡ƒô▒ ===== SEND OTP STARTING =====
10-23 17:50:02.957 I/ReactNativeJS(18100): '≡ƒô▒ Phone Number:', '+918608374935'
10-23 17:50:02.957 I/ReactNativeJS(18100): '≡ƒô▒ Name:', 'Hhj'
10-23 17:50:02.957 I/ReactNativeJS(18100): '≡ƒô▒ Supabase URL:', 'https://whubaypabojomdyfqxcf.supabase.co'
10-23 17:50:02.957 I/ReactNativeJS(18100): '≡ƒô▒ Anon Key exists:', true
10-23 17:50:02.957 I/ReactNativeJS(18100): '≡ƒô▒ Request URL:', 'https://whubaypabojomdyfqxcf.supabase.co/functions/v1/send-otp'
10-23 17:50:02.957 I/ReactNativeJS(18100): ≡ƒô▒ Making fetch request...
10-23 17:50:04.185 I/ReactNativeJS(18100): '≡ƒô▒ Response status:', 200
10-23 17:50:04.186 I/ReactNativeJS(18100): '≡ƒô▒ Response ok:', true
10-23 17:50:04.188 I/ReactNativeJS(18100): '≡ƒô▒ Response data:', '{\n  "success": true,\n  "message": "OTP generated successfully",\n  "devOtp": "462365",\n  "smsSent": false,\n  "smsError": "Authenticate"\n}'
10-23 17:50:04.188 I/ReactNativeJS(18100): ≡ƒô▒ Γ£à OTP sent successfully!
10-23 17:50:04.189 I/ReactNativeJS(18100): '≡ƒô▒ Dev OTP:', '462365'
10-23 17:50:04.189 I/ReactNativeJS(18100): '≡ƒô▒ SMS Sent:', false
10-23 17:50:04.189 I/ReactNativeJS(18100): '≡ƒô▒ SMS Error:', 'Authenticate'
10-23 17:50:04.189 I/ReactNativeJS(18100): ≡ƒô▒ ===== SEND OTP COMPLETE =====
10-23 17:50:04.189 I/ReactNativeJS(18100): '≡ƒô₧ sendOTP returned:', { error: null,
10-23 17:50:04.189 I/ReactNativeJS(18100):   otp: '462365',
10-23 17:50:04.189 I/ReactNativeJS(18100):   smsSent: false,
10-23 17:50:04.189 I/ReactNativeJS(18100):   smsError: 'Authenticate' }
10-23 17:50:04.189 I/ReactNativeJS(18100): Γ£à No error in result
10-23 17:50:04.190 I/ReactNativeJS(18100): '≡ƒô▒ OTP received:', '462365'
10-23 17:50:04.190 I/ReactNativeJS(18100): '≡ƒô▒ SMS sent status:', false
10-23 17:50:04.190 I/ReactNativeJS(18100): '≡ƒô▒ SMS error:', 'Authenticate'
10-23 17:50:04.203 I/ReactNativeJS(18100): '≡ƒÆ¼ Showing alert with message:', 'Your OTP code is: 462365\n\nΓÜá∩╕Å SMS failed: Authenticate\nPlease use the code above.'
10-23 17:50:04.203 I/ReactNativeJS(18100): ≡ƒº¡ Will navigate to verify-otp after alert
10-23 17:50:04.203 I/ReactNativeJS(18100): ≡ƒÆ¼ Alert displayed
10-23 17:50:04.203 I/ReactNativeJS(18100): ≡ƒÜÇ ===== HANDLE SEND OTP END =====
10-23 17:50:07.308 I/ReactNativeJS(18100): ≡ƒº¡ Alert dismissed, navigating to verify-otp...
10-23 17:50:07.308 I/ReactNativeJS(18100): '≡ƒº¡ Target params:', { phoneNumber: '+918608374935', name: 'Hhj' }
10-23 17:50:07.338 I/ReactNativeJS(18100): ≡ƒº¡ Navigation triggered
10-23 17:50:07.339 I/ReactNativeJS(18100): '≡ƒöì AuthNavigator - checking auth state:', { user: false,
10-23 17:50:07.339 I/ReactNativeJS(18100):   loading: false,
10-23 17:50:07.339 I/ReactNativeJS(18100):   segments: 'auth/verify-otp',
10-23 17:50:07.339 I/ReactNativeJS(18100):   userEmail: undefined,
10-23 17:50:07.339 I/ReactNativeJS(18100):   userRole: undefined }
10-23 17:50:07.339 I/ReactNativeJS(18100): ≡ƒöÉ User on verify-otp screen, skipping navigation
10-23 17:50:14.467 I/ReactNativeJS(18100): '≡ƒôª Full response data:', '{\n  "success": true,\n  "customerId": "1",\n  "userId": "e95a4f14-8958-49e9-8ede-d81b82a7ba12",\n  "session": {\n    "access_token": "eyJhbGciOiJIUzI1NiIsImtpZCI6IngvRXB5YUxCdnJGSXNwTE0iLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3dodWJheXBhYm9qb21keWZxeGNmLnN1cGFiYXNlLmNvL2F1dGgvdjEiLCJzdWIiOiJlOTVhNGYxNC04OTU4LTQ5ZTktOGVkZS1kODFiODJhN2JhMTIiLCJhdWQiOiJhdXRoZW50aWNhdGVkIiwiZXhwIjoxNzYxMjI1NjE0LCJpYXQiOjE3NjEyMjIwMTQsImVtYWlsIjoiOTE4NjA4Mzc0OTM1QGExdGF4aS5hcHAiLCJwaG9uZSI6IiIsImFwcF9tZXRhZGF0YSI6eyJwcm92aWRlciI6ImVtYWlsIiwicHJvdmlkZXJzIjpbImVtYWlsIl19LCJ1c2VyX21ldGFkYXRhIjp7ImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJmdWxsX25hbWUiOiJSaWNjbyIsInBob25lX251bWJlciI6Iis5MTg2MDgzNzQ5MzUifSwicm9sZSI6ImF1dGhlbnRpY2F0ZWQiLCJhYWwiOiJhYWwxIiwiYW1yIjpbeyJtZXRob2QiOiJvdHAiLCJ0aW1lc3RhbXAiOjE3NjEyMjIwMTR9XSwic2Vzc2lvbl9pZCI6IjQ5NDk4MzNkLTUwNDgtNGNjZC1hZDQxLTJkNDI3YjgyYTkzZCIsImlzX2Fub255bW91cyI6ZmFsc2V9.qbhihl1xR8HPiK7i9pAOywQ_56AdKeq6UrWpyMERAZw",\n    "refresh_token": "lewsbihxglb7",\n    "expires_in": 3600,\n    "expires_at": 1761225614,\n    "token_type": "bearer",\n    "user": {\n      "id": "e95a4f14-8958-49e9-8ede-d81b82a7ba12",\n      "aud": "authenticated",\n      "role": "authenticated",\n      "email": "918608374935@a1taxi.app",\n      "email_confirmed_at": "2025-10-10T18:50:59.835507Z",\n      "phone": "",\n      "confirmed_at": "2025-10-10T18:50:59.835507Z",\n      "recovery_sent_at": "2025-10-23T12:20:14.609433Z",\n      "last_sign_in_at": "2025-10-23T12:20:14.806446537Z",\n      "app_metadata": {\n        "provider": "email",\n        "providers": [\n          "email"\n        ]\n      },\n      "user_metadata": {\n        "email_verified": true,\n        "full_name": "Ricco",\n        "phone_number": "+918608374935"\n      },\n      "identities": [\n        {\n          "identity_id": "43785572-7543-40c4-8eef-853beacc688b",\n          "id": "e95a4f14-8958-49e9-8ede-d81b82a7ba12",\n          "user_id": "e95a4f14-8958-49e9-8ede-d81b82a7ba12",\n          "identity_data": {\n            "email": "918608374935@a1taxi.app",\n            "email_verified": false,\n            "phone_verified": false,\n            "sub": "e95a4f14-8958-49e9-8ede-d81b82a7ba12"\n          },\n          "provider": "email",\n          "last_sign_in_at": "2025-10-10T18:50:59.818589Z",\n          "created_at": "2025-10-10T18:50:59.818651Z",\n          "updated_at": "2025-10-10T18:50:59.818651Z",\n          "email": "918608374935@a1taxi.app"\n        }\n      ],\n      "created_at": "2025-10-10T18:50:59.778879Z",\n      "updated_at": "2025-10-23T12:20:14.810121Z",\n      "is_anonymous": false\n    }\n  },\n  "user": {\n    "id": "e95a4f14-8958-49e9-8ede-d81b82a7ba12",\n    "email": "918608374935@a1taxi.app",\n    "phone": "",\n    "user_metadata": {\n      "email_verified": true,\n      "full_name": "Ricco",\n      "phone_number": "+918608374935"\n    }\n  }\n}'
10-23 17:50:14.467 I/ReactNativeJS(18100): 'Γ£à OTP verified, user ID (UUID):', 'e95a4f14-8958-49e9-8ede-d81b82a7ba12'
10-23 17:50:14.467 I/ReactNativeJS(18100): 'Γ£à Customer ID (integer):', '1'
10-23 17:50:14.468 I/ReactNativeJS(18100): 'Γ£à Session received:', '{\n  "access_token": "eyJhbGciOiJIUzI1NiIsImtpZCI6IngvRXB5YUxCdnJGSXNwTE0iLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3dodWJheXBhYm9qb21keWZxeGNmLnN1cGFiYXNlLmNvL2F1dGgvdjEiLCJzdWIiOiJlOTVhNGYxNC04OTU4LTQ5ZTktOGVkZS1kODFiODJhN2JhMTIiLCJhdWQiOiJhdXRoZW50aWNhdGVkIiwiZXhwIjoxNzYxMjI1NjE0LCJpYXQiOjE3NjEyMjIwMTQsImVtYWlsIjoiOTE4NjA4Mzc0OTM1QGExdGF4aS5hcHAiLCJwaG9uZSI6IiIsImFwcF9tZXRhZGF0YSI6eyJwcm92aWRlciI6ImVtYWlsIiwicHJvdmlkZXJzIjpbImVtYWlsIl19LCJ1c2VyX21ldGFkYXRhIjp7ImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJmdWxsX25hbWUiOiJSaWNjbyIsInBob25lX251bWJlciI6Iis5MTg2MDgzNzQ5MzUifSwicm9sZSI6ImF1dGhlbnRpY2F0ZWQiLCJhYWwiOiJhYWwxIiwiYW1yIjpbeyJtZXRob2QiOiJvdHAiLCJ0aW1lc3RhbXAiOjE3NjEyMjIwMTR9XSwic2Vzc2lvbl9pZCI6IjQ5NDk4MzNkLTUwNDgtNGNjZC1hZDQxLTJkNDI3YjgyYTkzZCIsImlzX2Fub255bW91cyI6ZmFsc2V9.qbhihl1xR8HPiK7i9pAOywQ_56AdKeq6UrWpyMERAZw",\n  "refresh_token": "lewsbihxglb7",\n  "expires_in": 3600,\n  "expires_at": 1761225614,\n  "token_type": "bearer",\n  "user": {\n    "id": "e95a4f14-8958-49e9-8ede-d81b82a7ba12",\n    "aud": "authenticated",\n    "role": "authenticated",\n    "email": "918608374935@a1taxi.app",\n    "email_confirmed_at": "2025-10-10T18:50:59.835507Z",\n    "phone": "",\n    "confirmed_at": "2025-10-10T18:50:59.835507Z",\n    "recovery_sent_at": "2025-10-23T12:20:14.609433Z",\n    "last_sign_in_at": "2025-10-23T12:20:14.806446537Z",\n    "app_metadata": {\n      "provider": "email",\n      "providers": [\n        "email"\n      ]\n    },\n    "user_metadata": {\n      "email_verified": true,\n      "full_name": "Ricco",\n      "phone_number": "+918608374935"\n    },\n    "identities": [\n      {\n        "identity_id": "43785572-7543-40c4-8eef-853beacc688b",\n        "id": "e95a4f14-8958-49e9-8ede-d81b82a7ba12",\n        "user_id": "e95a4f14-8958-49e9-8ede-d81b82a7ba12",\n        "identity_data": {\n          "email": "918608374935@a1taxi.app",\n          "email_verified": false,\n          "phone_verified": false,\n          "sub": "e95a4f14-8958-49e9-8ede-d81b82a7ba12"\n        },\n        "provider": "email",\n        "last_sign_in_at": "2025-10-10T18:50:59.818589Z",\n        "created_at": "2025-10-10T18:50:59.818651Z",\n        "updated_at": "2025-10-10T18:50:59.818651Z",\n        "email": "918608374935@a1taxi.app"\n      }\n    ],\n    "created_at": "2025-10-10T18:50:59.778879Z",\n    "updated_at": "2025-10-23T12:20:14.810121Z",\n    "is_anonymous": false\n  }\n}'
10-23 17:50:14.468 I/ReactNativeJS(18100): ≡ƒöÉ Setting Supabase session...
10-23 17:50:15.085 I/ReactNativeJS(18100): 'Γ£à Supabase session set successfully:', { userId: 'e95a4f14-8958-49e9-8ede-d81b82a7ba12',
10-23 17:50:15.085 I/ReactNativeJS(18100):   email: '918608374935@a1taxi.app',
10-23 17:50:15.085 I/ReactNativeJS(18100):   expiresAt: '2025-10-23T13:20:14.000Z' }
10-23 17:50:15.085 I/ReactNativeJS(18100): '≡ƒöì AuthNavigator - checking auth state:', { user: true,
10-23 17:50:15.085 I/ReactNativeJS(18100):   loading: false,
10-23 17:50:15.085 I/ReactNativeJS(18100):   segments: 'auth/verify-otp',
10-23 17:50:15.085 I/ReactNativeJS(18100):   userEmail: '918608374935@a1taxi.app',
10-23 17:50:15.085 I/ReactNativeJS(18100):   userRole: 'customer' }
10-23 17:50:15.085 I/ReactNativeJS(18100): ≡ƒöÉ User on verify-otp screen, skipping navigation
10-23 17:50:15.106 I/ReactNativeJS(18100): Γ£à AsyncStorage data saved
10-23 17:50:15.107 I/ReactNativeJS(18100): 'Γ£à Setting authenticated user in context with UUID:', 'e95a4f14-8958-49e9-8ede-d81b82a7ba12'
10-23 17:50:15.107 I/ReactNativeJS(18100): 'Γ£à Setting authenticated user in context:', { id: 'e95a4f14-8958-49e9-8ede-d81b82a7ba12',
10-23 17:50:15.107 I/ReactNativeJS(18100):   email: '918608374935@a1taxi.app',
10-23 17:50:15.107 I/ReactNativeJS(18100):   full_name: 'Ricco',
10-23 17:50:15.107 I/ReactNativeJS(18100):   phone_number: '+918608374935',
10-23 17:50:15.107 I/ReactNativeJS(18100):   role: 'customer',
10-23 17:50:15.107 I/ReactNativeJS(18100):   customer_id: 'e95a4f14-8958-49e9-8ede-d81b82a7ba12' }
10-23 17:50:15.124 I/ReactNativeJS(18100): Γ£à Customer data saved, navigating to home...
10-23 17:50:15.125 I/ReactNativeJS(18100): '≡ƒöì AuthNavigator - checking auth state:', { user: true,
10-23 17:50:15.125 I/ReactNativeJS(18100):   loading: false,
10-23 17:50:15.125 I/ReactNativeJS(18100):   segments: 'auth/verify-otp',
10-23 17:50:15.125 I/ReactNativeJS(18100):   userEmail: '918608374935@a1taxi.app',
10-23 17:50:15.125 I/ReactNativeJS(18100):   userRole: 'customer' }
10-23 17:50:15.125 I/ReactNativeJS(18100): ≡ƒöÉ User on verify-otp screen, skipping navigation
10-23 17:50:15.244 W/ReactNativeJS(18100): '≡ƒÄ» [TRIP_NOTIFICATION] Component render, notifications count:', 0
10-23 17:50:15.244 W/ReactNativeJS(18100): '≡ƒÄ» [TRIP_NOTIFICATION] Notifications:', '[]'
10-23 17:50:15.244 I/ReactNativeJS(18100): '≡ƒöì [TRIP_NOTIFICATION] Component render - visible:', false, 'notification:', false
10-23 17:50:15.261 I/ReactNativeJS(18100): '≡ƒÄ» [useRideNotifications] useEffect triggered, user ID:', 'e95a4f14-8958-49e9-8ede-d81b82a7ba12'
10-23 17:50:15.261 I/ReactNativeJS(18100): ≡ƒöì [NOTIFICATIONS] ===== FETCHING NOTIFICATIONS =====
10-23 17:50:15.261 I/ReactNativeJS(18100): '≡ƒöì [NOTIFICATIONS] User ID:', 'e95a4f14-8958-49e9-8ede-d81b82a7ba12'
10-23 17:50:15.261 I/ReactNativeJS(18100): '≡ƒöì [NOTIFICATIONS] Timestamp:', '2025-10-23T12:20:15.261Z'
10-23 17:50:15.267 I/ReactNativeJS(18100): ≡ƒöö [BANNER_DEBUG] ===== NOTIFICATION BANNER EFFECT =====
10-23 17:50:15.267 I/ReactNativeJS(18100): '≡ƒöö [BANNER_DEBUG] Banner summary:', { totalNotifications: 0,
10-23 17:50:15.267 I/ReactNativeJS(18100):   currentlyVisible: false,
10-23 17:50:15.267 I/ReactNativeJS(18100):   currentNotification: undefined,
10-23 17:50:15.267 I/ReactNativeJS(18100):   shownNotificationsCount: 0,
10-23 17:50:15.267 I/ReactNativeJS(18100):   tripCompletedNotifications: 0,
10-23 17:50:15.267 I/ReactNativeJS(18100):   unreadTripCompleted: 0 }
10-23 17:50:15.267 I/ReactNativeJS(18100): ≡ƒô▒ [BANNER_DEBUG] ===== BANNER DISPLAY DECISION =====
10-23 17:50:15.267 I/ReactNativeJS(18100): '≡ƒÄ» [useRideNotifications] useEffect triggered, user ID:', 'e95a4f14-8958-49e9-8ede-d81b82a7ba12'
10-23 17:50:15.267 I/ReactNativeJS(18100): ≡ƒöì [NOTIFICATIONS] ===== FETCHING NOTIFICATIONS =====
10-23 17:50:15.267 I/ReactNativeJS(18100): '≡ƒöì [NOTIFICATIONS] User ID:', 'e95a4f14-8958-49e9-8ede-d81b82a7ba12'
10-23 17:50:15.267 I/ReactNativeJS(18100): '≡ƒöì [NOTIFICATIONS] Timestamp:', '2025-10-23T12:20:15.267Z'
10-23 17:50:15.268 W/ReactNativeJS(18100): ≡ƒÄ» [TRIP_NOTIFICATION] ===== useEffect TRIGGERED - CHECKING FOR COMPLETION NOTIFICATIONS =====
10-23 17:50:15.268 W/ReactNativeJS(18100): '≡ƒÄ» [TRIP_NOTIFICATION] Notifications array length:', 0
10-23 17:50:15.268 W/ReactNativeJS(18100): '≡ƒÄ» [TRIP_NOTIFICATION] Total notifications received:', 0
10-23 17:50:15.268 W/ReactNativeJS(18100): '≡ƒÄ» [TRIP_NOTIFICATION] Notification types:', '[]'
10-23 17:50:15.268 W/ReactNativeJS(18100): '≡ƒÄ» [TRIP_NOTIFICATION] ride_completed count:', 0
10-23 17:50:15.268 W/ReactNativeJS(18100): '≡ƒÄ» [TRIP_NOTIFICATION] Unread ride_completed:', 0
10-23 17:50:15.268 W/ReactNativeJS(18100): '≡ƒÄ» [TRIP_NOTIFICATION] Already shown count:', 0
10-23 17:50:15.268 W/ReactNativeJS(18100): '≡ƒÄ» [TRIP_NOTIFICATION] Currently visible:', false
10-23 17:50:15.268 W/ReactNativeJS(18100): '≡ƒÄ» [TRIP_NOTIFICATION] Filtered completion notifications:', 0
10-23 17:50:15.268 I/ReactNativeJS(18100): '≡ƒÄ» [useRideNotifications] useEffect triggered, user ID:', 'e95a4f14-8958-49e9-8ede-d81b82a7ba12'
10-23 17:50:15.268 I/ReactNativeJS(18100): ≡ƒöì [NOTIFICATIONS] ===== FETCHING NOTIFICATIONS =====
10-23 17:50:15.268 I/ReactNativeJS(18100): '≡ƒöì [NOTIFICATIONS] User ID:', 'e95a4f14-8958-49e9-8ede-d81b82a7ba12'
10-23 17:50:15.268 I/ReactNativeJS(18100): '≡ƒöì [NOTIFICATIONS] Timestamp:', '2025-10-23T12:20:15.268Z'
10-23 17:50:15.269 I/ReactNativeJS(18100): ≡ƒô▒ Requesting location permission on app start for all platforms...
10-23 17:50:15.269 I/ReactNativeJS(18100): '≡ƒô▒ Current platform:', 'android'
10-23 17:50:15.269 I/ReactNativeJS(18100): '≡ƒöì Requesting location permission for platform:', 'android'
10-23 17:50:15.269 I/ReactNativeJS(18100): ≡ƒô▒ Requesting Android location permissions...
10-23 17:50:15.270 I/ReactNativeJS(18100): ≡ƒôè Loading all vehicle configs from fare_matrix table for booking_type=regular
10-23 17:50:15.272 I/ReactNativeJS(18100): ≡ƒù║∩╕Å Using cached zones data
10-23 17:50:15.272 I/ReactNativeJS(18100): ≡ƒôè [HOME] ===== AVAILABLE DRIVERS STATE CHANGED =====
10-23 17:50:15.272 I/ReactNativeJS(18100): '≡ƒôè [HOME] availableDrivers state update:', { count: 0,
10-23 17:50:15.272 I/ReactNativeJS(18100):   showDriversOnMap: true,
10-23 17:50:15.272 I/ReactNativeJS(18100):   driversPassedToMap: 0,
10-23 17:50:15.272 I/ReactNativeJS(18100):   drivers: [] }
10-23 17:50:15.272 I/ReactNativeJS(18100): ≡ƒù║∩╕Å [HOME] No drivers to pass to map (availableDrivers is empty)
10-23 17:50:15.277 I/ReactNativeJS(18100): '≡ƒöì AuthNavigator - checking auth state:', { user: true,
10-23 17:50:15.277 I/ReactNativeJS(18100):   loading: false,
10-23 17:50:15.277 I/ReactNativeJS(18100):   segments: '(tabs)',
10-23 17:50:15.277 I/ReactNativeJS(18100):   userEmail: '918608374935@a1taxi.app',
10-23 17:50:15.277 I/ReactNativeJS(18100):   userRole: 'customer' }
10-23 17:50:15.277 I/ReactNativeJS(18100): Γ£à User authenticated and on correct screen
10-23 17:50:15.278 I/ReactNativeJS(18100): 'Γ£à Loaded active zones:', 2
10-23 17:50:15.280 E/ReactNativeJS(18100): 'Error initializing notifications:', { [Error: Make sure to complete the guide at https://docs.expo.dev/push-notifications/fcm-credentials/ : Default FirebaseApp is not initialized in this process com.a1taxi.a1taxicustomer. Make sure to call FirebaseApp.initializeApp(Context) first.] code: 'E_REGISTRATION_FAILED' }
10-23 17:50:15.286 I/ReactNativeJS(18100): '≡ƒô▒ Fine location permission result:', 'granted'
10-23 17:50:15.286 I/ReactNativeJS(18100): Γ£à Android fine location permission granted
10-23 17:50:15.286 I/ReactNativeJS(18100): Γ£à Location permission granted on mount
10-23 17:50:15.286 I/ReactNativeJS(18100): ≡ƒôì [HOME] Starting location fetch...
10-23 17:50:15.286 I/ReactNativeJS(18100): ≡ƒöì Enhanced Location Service: Getting current location with address...
10-23 17:50:15.286 I/ReactNativeJS(18100): '≡ƒöì Platform:', 'android'
10-23 17:50:15.286 I/ReactNativeJS(18100): ≡ƒôì Enhanced Location Service: Starting location detection...
10-23 17:50:15.286 I/ReactNativeJS(18100): '≡ƒîì Platform:', 'android'
10-23 17:50:15.287 I/ReactNativeJS(18100): Γ£à Enhanced Location Service: Permission granted, attempting detection...
10-23 17:50:15.287 I/ReactNativeJS(18100): ≡ƒÄ» Enhanced Location Service: Attempting high accuracy GPS...
10-23 17:50:15.287 I/ReactNativeJS(18100): ≡ƒô▒ Using Expo Location for high accuracy...
10-23 17:50:15.326 I/ReactNativeJS(18100): 'Γ£à Enhanced Location Service: High accuracy location obtained:', { lat: 12.7486283,
10-23 17:50:15.326 I/ReactNativeJS(18100):   lng: 77.8299733,
10-23 17:50:15.326 I/ReactNativeJS(18100):   accuracy: '2.200000047683716m' }
10-23 17:50:15.326 I/ReactNativeJS(18100): '≡ƒôì Enhanced Location Service: Got location:', { latitude: 12.7486283,
10-23 17:50:15.326 I/ReactNativeJS(18100):   longitude: 77.8299733,
10-23 17:50:15.326 I/ReactNativeJS(18100):   accuracy: 2.200000047683716 }
10-23 17:50:15.326 I/ReactNativeJS(18100): ≡ƒù║∩╕Å Enhanced Location Service: Starting reverse geocoding...
10-23 17:50:15.326 I/ReactNativeJS(18100): '≡ƒù║∩╕Å Reverse geocoding coordinates:', { latitude: 12.7486283, longitude: 77.8299733 }
10-23 17:50:15.326 I/ReactNativeJS(18100): '≡ƒÅá Reverse geocoding:', { lat: 12.7486283, lng: 77.8299733 }
10-23 17:50:15.327 I/ReactNativeJS(18100): '≡ƒîÉ Making proxy request to:', 'https://whubaypabojomdyfqxcf.supabase.co/functions/v1/places-proxy/geocode?latlng=12.7486283%2C77.8299733'
10-23 17:50:15.528 I/ReactNativeJS(18100): ≡ƒöì [NOTIFICATIONS] ===== DATABASE QUERY RESULT =====
10-23 17:50:15.531 I/ReactNativeJS(18100): '≡ƒöì [NOTIFICATIONS] Query result:', { hasError: false,
10-23 17:50:15.531 I/ReactNativeJS(18100):   errorMessage: undefined,
10-23 17:50:15.531 I/ReactNativeJS(18100):   errorCode: undefined,
10-23 17:50:15.531 I/ReactNativeJS(18100):   errorDetails: undefined,
10-23 17:50:15.531 I/ReactNativeJS(18100):   dataCount: 50,
10-23 17:50:15.531 I/ReactNativeJS(18100):   tripCompletedCount: 0,
10-23 17:50:15.531 I/ReactNativeJS(18100):   unreadTripCompletedCount: 0,
10-23 17:50:15.531 I/ReactNativeJS(18100):   allTypes:
10-23 17:50:15.531 I/ReactNativeJS(18100):    [ 'ride_completed',
10-23 17:50:15.531 I/ReactNativeJS(18100):      'ride_status_changed',
10-23 17:50:15.531 I/ReactNativeJS(18100):      'booking_completed',
10-23 17:50:15.531 I/ReactNativeJS(18100):      'ride_cancelled' ],
10-23 17:50:15.531 I/ReactNativeJS(18100):   recentNotifications:
10-23 17:50:15.531 I/ReactNativeJS(18100):    [ { id: 'c0930979-b31c-4f63-b636-2d97a731c792',
10-23 17:50:15.531 I/ReactNativeJS(18100):        type: 'ride_completed',
10-23 17:50:15.531 I/ReactNativeJS(18100):        status: 'read',
10-23 17:50:15.531 I/ReactNativeJS(18100):        title: 'Trip Completed',
10-23 17:50:15.531 I/ReactNativeJS(18100):        created_at: '2025-10-23T11:04:46.92906+00:00',
10-23 17:50:15.531 I/ReactNativeJS(18100):        age_seconds: 4529 },
10-23 17:50:15.531 I/ReactNativeJS(18100):      { id: '2012b652-4fe3-4c41-9df3-bc9d3186a24a',
10-23 17:50:15.531 I/ReactNativeJS(18100):        type: 'ride_status_changed',
10-23 17:50:15.531 I/ReactNativeJS(18100):        status: 'read',
10-23 17:50:15.531 I/ReactNativeJS(18100):        title: 'Ride Status Updated',
10-23 17:50:15.531 I/ReactNativeJS(18100):        created_at: '2025-10-23T11:04:46.92906+00:00',
10-23 17:50:15.531 I/ReactNativeJS(18100):        age_seconds: 4529 },
10-23 17:50:15.531 I/ReactNativeJS(18100):      { id: '61a74f93-5643-46ef-8ebb-56d7ed81f675',
10-23 17:50:15.531 I/ReactNativeJS(18100):        type: 'ride_status_changed',
10-23 17:50:15.531 I/ReactNativeJS(18100):        status: 'read',
10-23 17:50:15.531 I/ReactNativeJS(18100):        title: 'Ride Status Updated',
10-23 17:50:15.531 I/ReactNativeJS(18100):        created_at: '2025-10-23T10:43:16.126619+00:00',
10-23 17:50:15.531 I/ReactNativeJS(18100):        age_seconds: 5819 },
10-23 17:50:15.531 I/ReactNativeJS(18100):      { id: 'e75df879-8cb8-4dee-8100-8dd61f99b26e',
10-23 17:50:15.531 I/ReactNativeJS(18100):        type: 'ride_status_changed',
10-23 17:50:15.531 I/ReactNativeJS(18100):        status: 'read',
10-23 17:50:15.531 I/ReactNativeJS(18100):        title: 'Ride Status Updated',
10-23 17:50:15.531 I/ReactNativeJS(18100):        created_at: '2025-10-23T10:42:44.627741+00:00',
10-23 17:50:15.531 I/ReactNativeJS(18100):        age_seconds: 5851 },
10-23 17:50:15.531 I/ReactNativeJS(18100):      { id: '55a746c6-9b8c-44e6-b80c-2beac586c467',
10-23 17:50:15.531 I/ReactNativeJS(18100):        type: 'ride_status_changed',
10-23 17:50:15.531 I/ReactNativeJS(18100):        status: 'read',
10-23 17:50:15.531 I/ReactNativeJS(18100):        title: 'Ride Status Updated',
10-23 17:50:15.531 I/ReactNativeJS(18100):        created_at: '2025-10-23T10:40:18.79365+00:00',
10-23 17:50:15.531 I/ReactNativeJS(18100):        age_seconds: 5997 } ] }
10-23 17:50:15.531 I/ReactNativeJS(18100): Γ£à [NOTIFICATIONS] ===== SETTING NOTIFICATIONS IN STATE =====
10-23 17:50:15.533 I/ReactNativeJS(18100): 'Γ£à [NOTIFICATIONS] Notifications to set:', { total: 50,
10-23 17:50:15.533 I/ReactNativeJS(18100):   tripCompleted: 0,
10-23 17:50:15.533 I/ReactNativeJS(18100):   unreadTripCompleted: 0,
10-23 17:50:15.533 I/ReactNativeJS(18100):   allNotificationIds:
10-23 17:50:15.533 I/ReactNativeJS(18100):    [ 'c0930979-b31c-4f63-b636-2d97a731c792',
10-23 17:50:15.533 I/ReactNativeJS(18100):      '2012b652-4fe3-4c41-9df3-bc9d3186a24a',
10-23 17:50:15.533 I/ReactNativeJS(18100):      '61a74f93-5643-46ef-8ebb-56d7ed81f675',
10-23 17:50:15.533 I/ReactNativeJS(18100):      'e75df879-8cb8-4dee-8100-8dd61f99b26e',
10-23 17:50:15.533 I/ReactNativeJS(18100):      '55a746c6-9b8c-44e6-b80c-2beac586c467',
10-23 17:50:15.533 I/ReactNativeJS(18100):      '7c3cc3c7-e9b6-4cf8-91bb-1bb827ff7808',
10-23 17:50:15.533 I/ReactNativeJS(18100):      '8012a1d6-41e9-4ff2-a75b-8fee9a93ca8e',
10-23 17:50:15.533 I/ReactNativeJS(18100):      'd29bae80-10e7-4d05-99d5-8dc43f61d814',
10-23 17:50:15.533 I/ReactNativeJS(18100):      'd7d8686d-95ee-4ce0-97da-ed89564b014b',
10-23 17:50:15.533 I/ReactNativeJS(18100):      '755a6269-1daf-4327-ab71-f65e3700bf1a',
10-23 17:50:15.533 I/ReactNativeJS(18100):      '500d07b9-07ca-40df-9d4a-3efcf677a117',
10-23 17:50:15.533 I/ReactNativeJS(18100):      'df4552cd-e9bc-4e40-a8a0-1270b37737db',
10-23 17:50:15.533 I/ReactNativeJS(18100):      'acb2b80a-267e-4b98-acd0-397461aee537',
10-23 17:50:15.533 I/ReactNativeJS(18100):      '60dbc0b5-662a-48af-b01a-55212f6ac6ea',
10-23 17:50:15.533 I/ReactNativeJS(18100):      '0f408121-1188-4550-9f50-919dcc8a4ed1',
10-23 17:50:15.533 I/ReactNativeJS(18100):      '23052592-9d19-442c-b40f-12b90c3da756',
10-23 17:50:15.533 I/ReactNativeJS(18100):      'c9ff3014-54e3-4b30-9f22-eceee292796b',
10-23 17:50:15.533 I/ReactNativeJS(18100):      '879d4bbd-20ad-4253-a1c6-ae7535e7c211',
10-23 17:50:15.533 I/ReactNativeJS(18100):      '286129cf-19e6-41fd-b52f-d17334d0d0f9',
10-23 17:50:15.533 I/ReactNativeJS(18100):      'b55ac709-48d5-4db2-8246-e23f9bd317ec',
10-23 17:50:15.533 I/ReactNativeJS(18100):      '92abe95d-e47d-48fa-8159-b119f5802710',
10-23 17:50:15.533 I/ReactNativeJS(18100):      '73ad244d-a00b-42a9-83e9-97932b9db2d2',
10-23 17:50:15.533 I/ReactNativeJS(18100):      '971613ac-8d86-4ab6-8fe5-49c528ca56ee',
10-23 17:50:15.533 I/ReactNativeJS(18100):      '49f0f7f9-03d6-4211-b47d-0e7738f190fa',
10-23 17:50:15.533 I/ReactNativeJS(18100):      '6a87c30d-c48d-458c-9b94-32dd5e75ac05',
10-23 17:50:15.533 I/ReactNativeJS(18100):      'aee0b7a7-9cb2-4f6b-b53f-fa47642319d0',
10-23 17:50:15.533 I/ReactNativeJS(18100):      '6c1d61c3-6cbd-4310-adfe-6d36bc611939',
10-23 17:50:15.533 I/ReactNativeJS(18100):      '9d9ab6e7-0357-4305-9ba8-e91c0bb29897',
10-23 17:50:15.533 I/ReactNativeJS(18100):      'd952183c-69a7-47dc-a848-d11bc2fff300',
10-23 17:50:15.533 I/ReactNativeJS(18100):      'a01d13a8-c95b-4bf1-b0e1-8b2a8e9aaa6b',
10-23 17:50:15.533 I/ReactNativeJS(18100):      '5a385bc8-147d-4ac2-834c-305ed9db9a05',
10-23 17:50:15.533 I/ReactNativeJS(18100):      'b9365ade-a3a4-4036-b42f-606b88d5fac9',
10-23 17:50:15.533 I/ReactNativeJS(18100):      'b6a2c6b6-bdb4-40ce-a092-25f6dd4ba953',
10-23 17:50:15.533 I/ReactNativeJS(18100):      'd850bf94-823f-497a-b292-075abf5b5a59',
10-23 17:50:15.533 I/ReactNativeJS(18100):      '5d8275c0-6692-44b3-a4ff-4eabba59873e',
10-23 17:50:15.533 I/ReactNativeJS(18100):      '5cfa0487-5d05-42e8-8e92-11a287b3ded0',
10-23 17:50:15.533 I/ReactNativeJS(18100):      '679ed79c-eb21-4609-a2b9-a1d304d4d4ad',
10-23 17:50:15.533 I/ReactNativeJS(18100):      '53bb9116-5f1d-445c-94e0-f2e3d9fa3ffe',
10-23 17:50:15.533 I/ReactNativeJS(18100):      '4196d3c8-e6dd-4a11-8d40-6771aa06de07',
10-23 17:50:15.533 I/ReactNativeJS(18100):      '8d21f749-083a-46d1-9f7e-f7dc5c36ef05',
10-23 17:50:15.533 I/ReactNativeJS(18100):      '0a371105-3196-4055-97ad-b230dba42df5',
10-23 17:50:15.533 I/ReactNativeJS(18100):      '9f010555-c90c-447e-83ae-919809ba8350',
10-23 17:50:15.533 I/ReactNativeJS(18100):      '84dd0357-20ec-4317-b7bd-7b31515219fb',
10-23 17:50:15.533 I/ReactNativeJS(18100):      'caaa4644-cefa-47e6-8c92-60415a52ef4b',
10-23 17:50:15.533 I/ReactNativeJS(18100):      'c6e2da1c-f900-47c8-b289-a88c28451f89',
10-23 17:50:15.533 I/ReactNativeJS(18100):      'c1a54517-80eb-451d-8fbb-26492459f1c4',
10-23 17:50:15.533 I/ReactNativeJS(18100):      'd3a69945-ed73-4db9-84db-77b1013c8fe2',
10-23 17:50:15.533 I/ReactNativeJS(18100):      '8de5daf3-1c41-4bc6-8e2c-c3873b443cbb',
10-23 17:50:15.533 I/ReactNativeJS(18100):      '93b3c278-21c8-4094-a13b-ae25cea5afa8',
10-23 17:50:15.533 I/ReactNativeJS(18100):      '057c85ff-f0f5-4a15-9e89-de6dc65465a2' ],
10-23 17:50:15.533 I/ReactNativeJS(18100):   tripCompletedNotificationIds: [],
10-23 17:50:15.533 I/ReactNativeJS(18100):   unreadTripCompletedNotificationIds: [] }
10-23 17:50:15.533 W/ReactNativeJS(18100): '≡ƒÄ» [TRIP_NOTIFICATION] Component render, notifications count:', 50
10-23 17:50:15.535 W/ReactNativeJS(18100): '≡ƒÄ» [TRIP_NOTIFICATION] Notifications:', '[{"id":"c0930979-b31c-4f63-b636-2d97a731c792","type":"ride_completed","status":"read"},{"id":"2012b652-4fe3-4c41-9df3-bc9d3186a24a","type":"ride_status_changed","status":"read"},{"id":"61a74f93-5643-46ef-8ebb-56d7ed81f675","type":"ride_status_changed","status":"read"},{"id":"e75df879-8cb8-4dee-8100-8dd61f99b26e","type":"ride_status_changed","status":"read"},{"id":"55a746c6-9b8c-44e6-b80c-2beac586c467","type":"ride_status_changed","status":"read"},{"id":"7c3cc3c7-e9b6-4cf8-91bb-1bb827ff7808","type":"ride_status_changed","status":"read"},{"id":"8012a1d6-41e9-4ff2-a75b-8fee9a93ca8e","type":"ride_status_changed","status":"read"},{"id":"d29bae80-10e7-4d05-99d5-8dc43f61d814","type":"ride_status_changed","status":"read"},{"id":"d7d8686d-95ee-4ce0-97da-ed89564b014b","type":"ride_status_changed","status":"read"},{"id":"755a6269-1daf-4327-ab71-f65e3700bf1a","type":"ride_status_changed","status":"read"},{"id":"500d07b9-07ca-40df-9d4a-3efcf677a117","type":"ride_status_changed","status":"read"},{"id":"df4552cd-e9bc-4e40-a8a0-1270b37737db","type":"booking_completed","status":"read"},{"id":"acb2b80a-267e-4b98-acd0-397461aee537","type":"booking_completed","status":"read"},{"id":"60dbc0b5-662a-48af-b01a-55212f6ac6ea","type":"booking_completed","status":"read"},{"id":"0f408121-1188-4550-9f50-919dcc8a4ed1","type":"booking_completed","status":"read"},{"id":"23052592-9d19-442c-b40f-12b90c3da756","type":"booking_completed","status":"read"},{"id":"c9ff3014-54e3-4b30-9f22-eceee292796b","type":"ride_status_changed","status":"read"},{"id":"879d4bbd-20ad-4253-a1c6-ae7535e7c211","type":"ride_status_changed","status":"read"},{"id":"286129cf-19e6-41fd-b52f-d17334d0d0f9","type":"ride_status_changed","status":"read"},{"id":"b55ac709-48d5-4db2-8246-e23f9bd317ec","type":"ride_completed","status":"read"},{"id":"92abe95d-e47d-48fa-8159-b119f5802710","type":"ride_status_changed","status":"read"},{"id":"73ad244d-a00b-42a9-83e9-97932b9db2d2","type":"ride_status_changed","status":"read"},{"id":"971613ac-8d86-4ab6-8fe5-49c528ca56ee","type":"ride_status_changed","status":"read"},{"id":"49f0f7f9-03d6-4211-b47d-0e7738f190fa","type":"ride_completed","status":"read"},{"id":"6a87c30d-c48d-458c-9b94-32dd5e75ac05","type":"ride_status_changed","status":"read"},{"id":"aee0b7a7-9cb2-4f6b-b53f-fa47642319d0","type":"ride_status_changed","status":"read"},{"id":"6c1d61c3-6cbd-4310-adfe-6d36bc611939","type":"ride_status_changed","status":"read"},{"id":"9d9ab6e7-0357-4305-9ba8-e91c0bb29897","type":"ride_status_changed","status":"read"},{"id":"d952183c-69a7-47dc-a848-d11bc2fff300","type":"ride_cancelled","status":"read"},{"id":"a01d13a8-c95b-4bf1-b0e1-8b2a8e9aaa6b","type":"ride_status_changed","status":"read"},{"id":"5a385bc8-147d-4ac2-834c-305ed9db9a05","type":"ride_completed","status":"read"},{"id":"b9365ade-a3a4-4036-b42f-606b88d5fac9","type":"ride_status_changed","status":"read"},{"id":"b6a2c6b6-bdb4-40ce-a092-25f6dd4ba953","type":"ride_status_changed","status":"read"},{"id":"d850bf94-823f-497a-b292-075abf5b5a59","type":"ride_status_changed","status":"read"},{"id":"5d8275c0-6692-44b3-a4ff-4eabba59873e","type":"ride_status_changed","status":"read"},{"id":"5cfa0487-5d05-42e8-8e92-11a287b3ded0","type":"ride_completed","status":"read"},{"id":"679ed79c-eb21-4609-a2b9-a1d304d4d4ad","type":"ride_status_changed","status":"read"},{"id":"53bb9116-5f1d-445c-94e0-f2e3d9fa3ffe","type":"ride_status_changed","status":"read"},{"id":"4196d3c8-e6dd-4a11-8d40-6771aa06de07","type":"ride_status_changed","status":"read"},{"id":"8d21f749-083a-46d1-9f7e-f7dc5c36ef05","type":"ride_status_changed","status":"read"},{"id":"0a371105-3196-4055-97ad-b230dba42df5","type":"ride_completed","status":"read"},{"id":"9f010555-c90c-447e-83ae-919809ba8350","type":"ride_status_changed","status":"read"},{"id":"84dd0357-20ec-4317-b7bd-7b31515219fb","type":"ride_status_changed","status":"read"},{"id":"caaa4644-cefa-47e6-8c92-60415a52ef4b","type":"ride_status_changed","status":"read"},{"id":"c6e2da1c-f900-47c8-b289-a88c28451f89","ty
10-23 17:50:15.535 I/ReactNativeJS(18100): '≡ƒöì [TRIP_NOTIFICATION] Component render - visible:', false, 'notification:', false
10-23 17:50:15.536 W/ReactNativeJS(18100): ≡ƒÄ» [TRIP_NOTIFICATION] ===== useEffect TRIGGERED - CHECKING FOR COMPLETION NOTIFICATIONS =====
10-23 17:50:15.536 W/ReactNativeJS(18100): '≡ƒÄ» [TRIP_NOTIFICATION] Notifications array length:', 50
10-23 17:50:15.536 W/ReactNativeJS(18100): '≡ƒÄ» [TRIP_NOTIFICATION] Total notifications received:', 50
10-23 17:50:15.536 W/ReactNativeJS(18100): '≡ƒÄ» [TRIP_NOTIFICATION] Notification types:', '["ride_completed","ride_status_changed","ride_status_changed","ride_status_changed","ride_status_changed","ride_status_changed","ride_status_changed","ride_status_changed","ride_status_changed","ride_status_changed","ride_status_changed","booking_completed","booking_completed","booking_completed","booking_completed","booking_completed","ride_status_changed","ride_status_changed","ride_status_changed","ride_completed","ride_status_changed","ride_status_changed","ride_status_changed","ride_completed","ride_status_changed","ride_status_changed","ride_status_changed","ride_status_changed","ride_cancelled","ride_status_changed","ride_completed","ride_status_changed","ride_status_changed","ride_status_changed","ride_status_changed","ride_completed","ride_status_changed","ride_status_changed","ride_status_changed","ride_status_changed","ride_completed","ride_status_changed","ride_status_changed","ride_status_changed","ride_status_changed","ride_status_changed","ride_completed","ride_status_changed","ride_status_changed","ride_status_changed"]'
10-23 17:50:15.536 W/ReactNativeJS(18100): '≡ƒÄ» [TRIP_NOTIFICATION] ride_completed count:', 7
10-23 17:50:15.536 W/ReactNativeJS(18100): '≡ƒÄ» [TRIP_NOTIFICATION] Unread ride_completed:', 0
10-23 17:50:15.536 W/ReactNativeJS(18100): '≡ƒÄ» [TRIP_NOTIFICATION] Already shown count:', 0
10-23 17:50:15.536 W/ReactNativeJS(18100): '≡ƒÄ» [TRIP_NOTIFICATION] Currently visible:', false
10-23 17:50:15.536 W/ReactNativeJS(18100): '≡ƒÄ» [TRIP_NOTIFICATION] Filtered completion notifications:', 0
10-23 17:50:15.537 W/ReactNativeJS(18100): '≡ƒÄ» [TRIP_NOTIFICATION] Component render, notifications count:', 50
10-23 17:50:15.538 W/ReactNativeJS(18100): '≡ƒÄ» [TRIP_NOTIFICATION] Notifications:', '[{"id":"c0930979-b31c-4f63-b636-2d97a731c792","type":"ride_completed","status":"read"},{"id":"2012b652-4fe3-4c41-9df3-bc9d3186a24a","type":"ride_status_changed","status":"read"},{"id":"61a74f93-5643-46ef-8ebb-56d7ed81f675","type":"ride_status_changed","status":"read"},{"id":"e75df879-8cb8-4dee-8100-8dd61f99b26e","type":"ride_status_changed","status":"read"},{"id":"55a746c6-9b8c-44e6-b80c-2beac586c467","type":"ride_status_changed","status":"read"},{"id":"7c3cc3c7-e9b6-4cf8-91bb-1bb827ff7808","type":"ride_status_changed","status":"read"},{"id":"8012a1d6-41e9-4ff2-a75b-8fee9a93ca8e","type":"ride_status_changed","status":"read"},{"id":"d29bae80-10e7-4d05-99d5-8dc43f61d814","type":"ride_status_changed","status":"read"},{"id":"d7d8686d-95ee-4ce0-97da-ed89564b014b","type":"ride_status_changed","status":"read"},{"id":"755a6269-1daf-4327-ab71-f65e3700bf1a","type":"ride_status_changed","status":"read"},{"id":"500d07b9-07ca-40df-9d4a-3efcf677a117","type":"ride_status_changed","status":"read"},{"id":"df4552cd-e9bc-4e40-a8a0-1270b37737db","type":"booking_completed","status":"read"},{"id":"acb2b80a-267e-4b98-acd0-397461aee537","type":"booking_completed","status":"read"},{"id":"60dbc0b5-662a-48af-b01a-55212f6ac6ea","type":"booking_completed","status":"read"},{"id":"0f408121-1188-4550-9f50-919dcc8a4ed1","type":"booking_completed","status":"read"},{"id":"23052592-9d19-442c-b40f-12b90c3da756","type":"booking_completed","status":"read"},{"id":"c9ff3014-54e3-4b30-9f22-eceee292796b","type":"ride_status_changed","status":"read"},{"id":"879d4bbd-20ad-4253-a1c6-ae7535e7c211","type":"ride_status_changed","status":"read"},{"id":"286129cf-19e6-41fd-b52f-d17334d0d0f9","type":"ride_status_changed","status":"read"},{"id":"b55ac709-48d5-4db2-8246-e23f9bd317ec","type":"ride_completed","status":"read"},{"id":"92abe95d-e47d-48fa-8159-b119f5802710","type":"ride_status_changed","status":"read"},{"id":"73ad244d-a00b-42a9-83e9-97932b9db2d2","type":"ride_status_changed","status":"read"},{"id":"971613ac-8d86-4ab6-8fe5-49c528ca56ee","type":"ride_status_changed","status":"read"},{"id":"49f0f7f9-03d6-4211-b47d-0e7738f190fa","type":"ride_completed","status":"read"},{"id":"6a87c30d-c48d-458c-9b94-32dd5e75ac05","type":"ride_status_changed","status":"read"},{"id":"aee0b7a7-9cb2-4f6b-b53f-fa47642319d0","type":"ride_status_changed","status":"read"},{"id":"6c1d61c3-6cbd-4310-adfe-6d36bc611939","type":"ride_status_changed","status":"read"},{"id":"9d9ab6e7-0357-4305-9ba8-e91c0bb29897","type":"ride_status_changed","status":"read"},{"id":"d952183c-69a7-47dc-a848-d11bc2fff300","type":"ride_cancelled","status":"read"},{"id":"a01d13a8-c95b-4bf1-b0e1-8b2a8e9aaa6b","type":"ride_status_changed","status":"read"},{"id":"5a385bc8-147d-4ac2-834c-305ed9db9a05","type":"ride_completed","status":"read"},{"id":"b9365ade-a3a4-4036-b42f-606b88d5fac9","type":"ride_status_changed","status":"read"},{"id":"b6a2c6b6-bdb4-40ce-a092-25f6dd4ba953","type":"ride_status_changed","status":"read"},{"id":"d850bf94-823f-497a-b292-075abf5b5a59","type":"ride_status_changed","status":"read"},{"id":"5d8275c0-6692-44b3-a4ff-4eabba59873e","type":"ride_status_changed","status":"read"},{"id":"5cfa0487-5d05-42e8-8e92-11a287b3ded0","type":"ride_completed","status":"read"},{"id":"679ed79c-eb21-4609-a2b9-a1d304d4d4ad","type":"ride_status_changed","status":"read"},{"id":"53bb9116-5f1d-445c-94e0-f2e3d9fa3ffe","type":"ride_status_changed","status":"read"},{"id":"4196d3c8-e6dd-4a11-8d40-6771aa06de07","type":"ride_status_changed","status":"read"},{"id":"8d21f749-083a-46d1-9f7e-f7dc5c36ef05","type":"ride_status_changed","status":"read"},{"id":"0a371105-3196-4055-97ad-b230dba42df5","type":"ride_completed","status":"read"},{"id":"9f010555-c90c-447e-83ae-919809ba8350","type":"ride_status_changed","status":"read"},{"id":"84dd0357-20ec-4317-b7bd-7b31515219fb","type":"ride_status_changed","status":"read"},{"id":"caaa4644-cefa-47e6-8c92-60415a52ef4b","type":"ride_status_changed","status":"read"},{"id":"c6e2da1c-f900-47c8-b289-a88c28451f89","ty
10-23 17:50:15.538 I/ReactNativeJS(18100): '≡ƒöì [TRIP_NOTIFICATION] Component render - visible:', false, 'notification:', false
10-23 17:50:15.538 I/ReactNativeJS(18100): Γ£à [NOTIFICATIONS] ===== CHECKING FOR IMMEDIATE TRIP COMPLETION =====
10-23 17:50:15.538 I/ReactNativeJS(18100): Γ¥î [NOTIFICATIONS] No immediate trip completion notifications found
10-23 17:50:15.539 I/ReactNativeJS(18100): 'Γ¥î [NOTIFICATIONS] Available notification types:', [ 'ride_completed',
10-23 17:50:15.539 I/ReactNativeJS(18100):   'ride_status_changed',
10-23 17:50:15.539 I/ReactNativeJS(18100):   'ride_status_changed',
10-23 17:50:15.539 I/ReactNativeJS(18100):   'ride_status_changed',
10-23 17:50:15.539 I/ReactNativeJS(18100):   'ride_status_changed',
10-23 17:50:15.539 I/ReactNativeJS(18100):   'ride_status_changed',
10-23 17:50:15.539 I/ReactNativeJS(18100):   'ride_status_changed',
10-23 17:50:15.539 I/ReactNativeJS(18100):   'ride_status_changed',
10-23 17:50:15.539 I/ReactNativeJS(18100):   'ride_status_changed',
10-23 17:50:15.539 I/ReactNativeJS(18100):   'ride_status_changed',
10-23 17:50:15.539 I/ReactNativeJS(18100):   'ride_status_changed',
10-23 17:50:15.539 I/ReactNativeJS(18100):   'booking_completed',
10-23 17:50:15.539 I/ReactNativeJS(18100):   'booking_completed',
10-23 17:50:15.539 I/ReactNativeJS(18100):   'booking_completed',
10-23 17:50:15.539 I/ReactNativeJS(18100):   'booking_completed',
10-23 17:50:15.539 I/ReactNativeJS(18100):   'booking_completed',
10-23 17:50:15.539 I/ReactNativeJS(18100):   'ride_status_changed',
10-23 17:50:15.539 I/ReactNativeJS(18100):   'ride_status_changed',
10-23 17:50:15.539 I/ReactNativeJS(18100):   'ride_status_changed',
10-23 17:50:15.539 I/ReactNativeJS(18100):   'ride_completed',
10-23 17:50:15.539 I/ReactNativeJS(18100):   'ride_status_changed',
10-23 17:50:15.539 I/ReactNativeJS(18100):   'ride_status_changed',
10-23 17:50:15.539 I/ReactNativeJS(18100):   'ride_status_changed',
10-23 17:50:15.539 I/ReactNativeJS(18100):   'ride_completed',
10-23 17:50:15.539 I/ReactNativeJS(18100):   'ride_status_changed',
10-23 17:50:15.539 I/ReactNativeJS(18100):   'ride_status_changed',
10-23 17:50:15.539 I/ReactNativeJS(18100):   'ride_status_changed',
10-23 17:50:15.539 I/ReactNativeJS(18100):   'ride_status_changed',
10-23 17:50:15.539 I/ReactNativeJS(18100):   'ride_cancelled',
10-23 17:50:15.539 I/ReactNativeJS(18100):   'ride_status_changed',
10-23 17:50:15.539 I/ReactNativeJS(18100):   'ride_completed',
10-23 17:50:15.539 I/ReactNativeJS(18100):   'ride_status_changed',
10-23 17:50:15.539 I/ReactNativeJS(18100):   'ride_status_changed',
10-23 17:50:15.539 I/ReactNativeJS(18100):   'ride_status_changed',
10-23 17:50:15.539 I/ReactNativeJS(18100):   'ride_status_changed',
10-23 17:50:15.539 I/ReactNativeJS(18100):   'ride_completed',
10-23 17:50:15.539 I/ReactNativeJS(18100):   'ride_status_changed',
10-23 17:50:15.539 I/ReactNativeJS(18100):   'ride_status_changed',
10-23 17:50:15.539 I/ReactNativeJS(18100):   'ride_status_changed',
10-23 17:50:15.539 I/ReactNativeJS(18100):   'ride_status_changed',
10-23 17:50:15.539 I/ReactNativeJS(18100):   'ride_completed',
10-23 17:50:15.539 I/ReactNativeJS(18100):   'ride_status_changed',
10-23 17:50:15.539 I/ReactNativeJS(18100):   'ride_status_changed',
10-23 17:50:15.539 I/ReactNativeJS(18100):   'ride_status_changed',
10-23 17:50:15.539 I/ReactNativeJS(18100):   'ride_status_changed',
10-23 17:50:15.539 I/ReactNativeJS(18100):   'ride_status_changed',
10-23 17:50:15.539 I/ReactNativeJS(18100):   'ride_completed',
10-23 17:50:15.539 I/ReactNativeJS(18100):   'ride_status_changed',
10-23 17:50:15.539 I/ReactNativeJS(18100):   'ride_status_changed',
10-23 17:50:15.539 I/ReactNativeJS(18100):   'ride_status_changed' ]
10-23 17:50:15.539 I/ReactNativeJS(18100): 'Γ¥î [NOTIFICATIONS] Trip completed notifications (all statuses):', []
10-23 17:50:15.540 W/ReactNativeJS(18100): '≡ƒÄ» [TRIP_NOTIFICATION] Component render, notifications count:', 50
10-23 17:50:15.541 W/ReactNativeJS(18100): '≡ƒÄ» [TRIP_NOTIFICATION] Notifications:', '[{"id":"c0930979-b31c-4f63-b636-2d97a731c792","type":"ride_completed","status":"read"},{"id":"2012b652-4fe3-4c41-9df3-bc9d3186a24a","type":"ride_status_changed","status":"read"},{"id":"61a74f93-5643-46ef-8ebb-56d7ed81f675","type":"ride_status_changed","status":"read"},{"id":"e75df879-8cb8-4dee-8100-8dd61f99b26e","type":"ride_status_changed","status":"read"},{"id":"55a746c6-9b8c-44e6-b80c-2beac586c467","type":"ride_status_changed","status":"read"},{"id":"7c3cc3c7-e9b6-4cf8-91bb-1bb827ff7808","type":"ride_status_changed","status":"read"},{"id":"8012a1d6-41e9-4ff2-a75b-8fee9a93ca8e","type":"ride_status_changed","status":"read"},{"id":"d29bae80-10e7-4d05-99d5-8dc43f61d814","type":"ride_status_changed","status":"read"},{"id":"d7d8686d-95ee-4ce0-97da-ed89564b014b","type":"ride_status_changed","status":"read"},{"id":"755a6269-1daf-4327-ab71-f65e3700bf1a","type":"ride_status_changed","status":"read"},{"id":"500d07b9-07ca-40df-9d4a-3efcf677a117","type":"ride_status_changed","status":"read"},{"id":"df4552cd-e9bc-4e40-a8a0-1270b37737db","type":"booking_completed","status":"read"},{"id":"acb2b80a-267e-4b98-acd0-397461aee537","type":"booking_completed","status":"read"},{"id":"60dbc0b5-662a-48af-b01a-55212f6ac6ea","type":"booking_completed","status":"read"},{"id":"0f408121-1188-4550-9f50-919dcc8a4ed1","type":"booking_completed","status":"read"},{"id":"23052592-9d19-442c-b40f-12b90c3da756","type":"booking_completed","status":"read"},{"id":"c9ff3014-54e3-4b30-9f22-eceee292796b","type":"ride_status_changed","status":"read"},{"id":"879d4bbd-20ad-4253-a1c6-ae7535e7c211","type":"ride_status_changed","status":"read"},{"id":"286129cf-19e6-41fd-b52f-d17334d0d0f9","type":"ride_status_changed","status":"read"},{"id":"b55ac709-48d5-4db2-8246-e23f9bd317ec","type":"ride_completed","status":"read"},{"id":"92abe95d-e47d-48fa-8159-b119f5802710","type":"ride_status_changed","status":"read"},{"id":"73ad244d-a00b-42a9-83e9-97932b9db2d2","type":"ride_status_changed","status":"read"},{"id":"971613ac-8d86-4ab6-8fe5-49c528ca56ee","type":"ride_status_changed","status":"read"},{"id":"49f0f7f9-03d6-4211-b47d-0e7738f190fa","type":"ride_completed","status":"read"},{"id":"6a87c30d-c48d-458c-9b94-32dd5e75ac05","type":"ride_status_changed","status":"read"},{"id":"aee0b7a7-9cb2-4f6b-b53f-fa47642319d0","type":"ride_status_changed","status":"read"},{"id":"6c1d61c3-6cbd-4310-adfe-6d36bc611939","type":"ride_status_changed","status":"read"},{"id":"9d9ab6e7-0357-4305-9ba8-e91c0bb29897","type":"ride_status_changed","status":"read"},{"id":"d952183c-69a7-47dc-a848-d11bc2fff300","type":"ride_cancelled","status":"read"},{"id":"a01d13a8-c95b-4bf1-b0e1-8b2a8e9aaa6b","type":"ride_status_changed","status":"read"},{"id":"5a385bc8-147d-4ac2-834c-305ed9db9a05","type":"ride_completed","status":"read"},{"id":"b9365ade-a3a4-4036-b42f-606b88d5fac9","type":"ride_status_changed","status":"read"},{"id":"b6a2c6b6-bdb4-40ce-a092-25f6dd4ba953","type":"ride_status_changed","status":"read"},{"id":"d850bf94-823f-497a-b292-075abf5b5a59","type":"ride_status_changed","status":"read"},{"id":"5d8275c0-6692-44b3-a4ff-4eabba59873e","type":"ride_status_changed","status":"read"},{"id":"5cfa0487-5d05-42e8-8e92-11a287b3ded0","type":"ride_completed","status":"read"},{"id":"679ed79c-eb21-4609-a2b9-a1d304d4d4ad","type":"ride_status_changed","status":"read"},{"id":"53bb9116-5f1d-445c-94e0-f2e3d9fa3ffe","type":"ride_status_changed","status":"read"},{"id":"4196d3c8-e6dd-4a11-8d40-6771aa06de07","type":"ride_status_changed","status":"read"},{"id":"8d21f749-083a-46d1-9f7e-f7dc5c36ef05","type":"ride_status_changed","status":"read"},{"id":"0a371105-3196-4055-97ad-b230dba42df5","type":"ride_completed","status":"read"},{"id":"9f010555-c90c-447e-83ae-919809ba8350","type":"ride_status_changed","status":"read"},{"id":"84dd0357-20ec-4317-b7bd-7b31515219fb","type":"ride_status_changed","status":"read"},{"id":"caaa4644-cefa-47e6-8c92-60415a52ef4b","type":"ride_status_changed","status":"read"},{"id":"c6e2da1c-f900-47c8-b289-a88c28451f89","ty
10-23 17:50:15.541 I/ReactNativeJS(18100): '≡ƒöì [TRIP_NOTIFICATION] Component render - visible:', false, 'notification:', false
10-23 17:50:15.914 I/ReactNativeJS(18100): ≡ƒöö [BANNER_DEBUG] ===== NOTIFICATION BANNER EFFECT =====
10-23 17:50:15.915 I/ReactNativeJS(18100): '≡ƒöö [BANNER_DEBUG] Banner summary:', { totalNotifications: 50,
10-23 17:50:15.915 I/ReactNativeJS(18100):   currentlyVisible: false,
10-23 17:50:15.915 I/ReactNativeJS(18100):   currentNotification: undefined,
10-23 17:50:15.915 I/ReactNativeJS(18100):   shownNotificationsCount: 0,
10-23 17:50:15.915 I/ReactNativeJS(18100):   tripCompletedNotifications: 0,
10-23 17:50:15.915 I/ReactNativeJS(18100):   unreadTripCompleted: 0 }
10-23 17:50:15.915 I/ReactNativeJS(18100): ≡ƒô▒ [BANNER_DEBUG] ===== BANNER DISPLAY DECISION =====
10-23 17:50:15.994 I/ReactNativeJS(18100): 'Γ£à Proxy response received:', 'OK'
10-23 17:50:15.995 I/ReactNativeJS(18100): 'Γ£à Geocoded address:', 'PRXJ+F32, Brindavan Nagar, Plot 87, NGGO\'s Colony, Anand Nagar, Hosur, Tamil Nadu 635109, India'
10-23 17:50:15.995 I/ReactNativeJS(18100): 'Γ£à Geocoded address:', 'PRXJ+F32, Brindavan Nagar, Plot 87, NGGO\'s Colony, Anand Nagar, Hosur, Tamil Nadu 635109, India'
10-23 17:50:15.995 I/ReactNativeJS(18100): '≡ƒÅá Enhanced Location Service: Got address:', 'PRXJ+F32, Brindavan Nagar, Plot 87, NGGO\'s Colony, Anand Nagar, Hosur, Tamil Nadu 635109, India'
10-23 17:50:15.995 I/ReactNativeJS(18100): 'Γ£à [HOME] Location obtained:', { lat: 12.7486283,
10-23 17:50:15.995 I/ReactNativeJS(18100):   lng: 77.8299733,
10-23 17:50:15.995 I/ReactNativeJS(18100):   address: 'PRXJ+F32, Brindavan Nagar, Plot 87, NGGO\'s Colony, Anand Nagar, Hosur, Tamil Nadu 635109, India' }
10-23 17:50:15.999 I/ReactNativeJS(18100): ≡ƒÜù [HOME] ===== STARTING IMMEDIATE DRIVER DISPLAY =====
10-23 17:50:15.999 I/ReactNativeJS(18100): ≡ƒÜù [HOME] Current location available, showing drivers immediately
10-23 17:50:15.999 I/ReactNativeJS(18100): '≡ƒÜù [HOME] Location details:', { latitude: 12.7486283,
10-23 17:50:15.999 I/ReactNativeJS(18100):   longitude: 77.8299733,
10-23 17:50:15.999 I/ReactNativeJS(18100):   accuracy: 2.200000047683716 }
10-23 17:50:15.999 I/ReactNativeJS(18100): ≡ƒÜù [HOME] Showing ALL vehicle types (no filter applied)
10-23 17:50:15.999 I/ReactNativeJS(18100): '≡ƒÜù [HOME] Should show drivers on map:', true
10-23 17:50:15.999 I/ReactNativeJS(18100): '≡ƒöä [HOME] Starting driver location polling with:', { currentLocation: { latitude: 12.7486283, longitude: 77.8299733 },
10-23 17:50:15.999 I/ReactNativeJS(18100):   vehicleType: 'sedan',
10-23 17:50:15.999 I/ReactNativeJS(18100):   radius: 10 }
10-23 17:50:16.000 I/ReactNativeJS(18100): ≡ƒ¢æ [HOME] Stopping driver location polling
10-23 17:50:16.000 I/ReactNativeJS(18100): '≡ƒöä [DRIVER-SERVICE] Starting driver location polling every', 10, 'seconds'
10-23 17:50:16.000 I/ReactNativeJS(18100): '≡ƒöä [DRIVER-SERVICE] Polling parameters:', { customerLocation: { lat: 12.7486283, lng: 77.8299733 },
10-23 17:50:16.000 I/ReactNativeJS(18100):   vehicleType: 'all',
10-23 17:50:16.000 I/ReactNativeJS(18100):   interval: '10000ms' }
10-23 17:50:16.000 I/ReactNativeJS(18100): '≡ƒù║∩╕Å [DRIVER-SERVICE] Fetching available drivers via edge function:', { location: { lat: 12.7486283, lng: 77.8299733 },
10-23 17:50:16.000 I/ReactNativeJS(18100):   radius: '10km',
10-23 17:50:16.000 I/ReactNativeJS(18100):   vehicleType: 'all',
10-23 17:50:16.000 I/ReactNativeJS(18100):   timestamp: '2025-10-23T12:20:16.000Z' }
10-23 17:50:16.001 I/ReactNativeJS(18100): '≡ƒîÉ [DRIVER-SERVICE] Constructed Edge Function URL:', 'https://whubaypabojomdyfqxcf.supabase.co/functions/v1/get-drivers-with-locations?lat=12.7486283&lng=77.8299733&radius=10'
10-23 17:50:16.005 I/ReactNativeJS(18100): ≡ƒÜù [HOME] ===== SHOWING DRIVERS AGAIN =====
10-23 17:50:16.005 I/ReactNativeJS(18100): ≡ƒÜù [HOME] Not both locations selected, showing drivers on map
10-23 17:50:16.005 I/ReactNativeJS(18100): '≡ƒÜù [HOME] Pickup coords:', true, 'Destination coords:', false
10-23 17:50:16.005 I/ReactNativeJS(18100): '≡ƒöä [HOME] Starting driver location polling with:', { currentLocation: { latitude: 12.7486283, longitude: 77.8299733 },
10-23 17:50:16.005 I/ReactNativeJS(18100):   vehicleType: 'sedan',
10-23 17:50:16.005 I/ReactNativeJS(18100):   radius: 10 }
10-23 17:50:16.005 I/ReactNativeJS(18100): ≡ƒ¢æ [HOME] Stopping driver location polling
10-23 17:50:16.006 I/ReactNativeJS(18100): ≡ƒ¢æ [DRIVER-SERVICE] Stopped driver location polling
10-23 17:50:16.006 I/ReactNativeJS(18100): '≡ƒöä [DRIVER-SERVICE] Starting driver location polling every', 10, 'seconds'
10-23 17:50:16.006 I/ReactNativeJS(18100): '≡ƒöä [DRIVER-SERVICE] Polling parameters:', { customerLocation: { lat: 12.7486283, lng: 77.8299733 },
10-23 17:50:16.006 I/ReactNativeJS(18100):   vehicleType: 'all',
10-23 17:50:16.006 I/ReactNativeJS(18100):   interval: '10000ms' }
10-23 17:50:16.006 I/ReactNativeJS(18100): '≡ƒù║∩╕Å [DRIVER-SERVICE] Fetching available drivers via edge function:', { location: { lat: 12.7486283, lng: 77.8299733 },
10-23 17:50:16.006 I/ReactNativeJS(18100):   radius: '10km',
10-23 17:50:16.006 I/ReactNativeJS(18100):   vehicleType: 'all',
10-23 17:50:16.006 I/ReactNativeJS(18100):   timestamp: '2025-10-23T12:20:16.006Z' }
10-23 17:50:16.006 I/ReactNativeJS(18100): '≡ƒîÉ [DRIVER-SERVICE] Constructed Edge Function URL:', 'https://whubaypabojomdyfqxcf.supabase.co/functions/v1/get-drivers-with-locations?lat=12.7486283&lng=77.8299733&radius=10'
10-23 17:50:16.008 I/ReactNativeJS(18100): Γ£à [HOME] Location state updated successfully
10-23 17:50:16.009 I/ReactNativeJS(18100): ≡ƒôì [HOME] Location loading state set to false
10-23 17:50:16.285 I/ReactNativeJS(18100): ≡ƒôì [GPS] Starting live GPS tracking (Uber-style)...
10-23 17:50:16.294 I/ReactNativeJS(18100): Γ£à [GPS] Live GPS tracking started successfully
10-23 17:50:16.306 I/ReactNativeJS(18100): '≡ƒôì [GPS] Live location update:', { lat: '12.748628', lng: '77.829973', accuracy: '2.20m' }
10-23 17:50:16.309 I/ReactNativeJS(18100): ≡ƒÜù [HOME] ===== STARTING IMMEDIATE DRIVER DISPLAY =====
10-23 17:50:16.310 I/ReactNativeJS(18100): ≡ƒÜù [HOME] Current location available, showing drivers immediately
10-23 17:50:16.310 I/ReactNativeJS(18100): '≡ƒÜù [HOME] Location details:', { latitude: 12.7486283,
10-23 17:50:16.310 I/ReactNativeJS(18100):   longitude: 77.8299733,
10-23 17:50:16.310 I/ReactNativeJS(18100):   accuracy: 2.200000047683716 }
10-23 17:50:16.310 I/ReactNativeJS(18100): ≡ƒÜù [HOME] Showing ALL vehicle types (no filter applied)
10-23 17:50:16.310 I/ReactNativeJS(18100): '≡ƒÜù [HOME] Should show drivers on map:', true
10-23 17:50:16.311 I/ReactNativeJS(18100): '≡ƒöä [HOME] Starting driver location polling with:', { currentLocation: { latitude: 12.7486283, longitude: 77.8299733 },
10-23 17:50:16.311 I/ReactNativeJS(18100):   vehicleType: 'sedan',
10-23 17:50:16.311 I/ReactNativeJS(18100):   radius: 10 }
10-23 17:50:16.311 I/ReactNativeJS(18100): ≡ƒ¢æ [HOME] Stopping driver location polling
10-23 17:50:16.311 I/ReactNativeJS(18100): ≡ƒ¢æ [DRIVER-SERVICE] Stopped driver location polling
10-23 17:50:16.311 I/ReactNativeJS(18100): '≡ƒöä [DRIVER-SERVICE] Starting driver location polling every', 10, 'seconds'
10-23 17:50:16.312 I/ReactNativeJS(18100): '≡ƒöä [DRIVER-SERVICE] Polling parameters:', { customerLocation: { lat: 12.7486283, lng: 77.8299733 },
10-23 17:50:16.312 I/ReactNativeJS(18100):   vehicleType: 'all',
10-23 17:50:16.312 I/ReactNativeJS(18100):   interval: '10000ms' }
10-23 17:50:16.312 I/ReactNativeJS(18100): '≡ƒù║∩╕Å [DRIVER-SERVICE] Fetching available drivers via edge function:', { location: { lat: 12.7486283, lng: 77.8299733 },
10-23 17:50:16.312 I/ReactNativeJS(18100):   radius: '10km',
10-23 17:50:16.312 I/ReactNativeJS(18100):   vehicleType: 'all',
10-23 17:50:16.312 I/ReactNativeJS(18100):   timestamp: '2025-10-23T12:20:16.312Z' }
10-23 17:50:16.313 I/ReactNativeJS(18100): '≡ƒîÉ [DRIVER-SERVICE] Constructed Edge Function URL:', 'https://whubaypabojomdyfqxcf.supabase.co/functions/v1/get-drivers-with-locations?lat=12.7486283&lng=77.8299733&radius=10'
10-23 17:50:16.390 I/ReactNativeJS(18100): ≡ƒöì [NOTIFICATIONS] ===== DATABASE QUERY RESULT =====
10-23 17:50:16.392 I/ReactNativeJS(18100): '≡ƒöì [NOTIFICATIONS] Query result:', { hasError: false,
10-23 17:50:16.392 I/ReactNativeJS(18100):   errorMessage: undefined,
10-23 17:50:16.392 I/ReactNativeJS(18100):   errorCode: undefined,
10-23 17:50:16.392 I/ReactNativeJS(18100):   errorDetails: undefined,
10-23 17:50:16.392 I/ReactNativeJS(18100):   dataCount: 50,
10-23 17:50:16.392 I/ReactNativeJS(18100):   tripCompletedCount: 0,
10-23 17:50:16.392 I/ReactNativeJS(18100):   unreadTripCompletedCount: 0,
10-23 17:50:16.392 I/ReactNativeJS(18100):   allTypes:
10-23 17:50:16.392 I/ReactNativeJS(18100):    [ 'ride_completed',
10-23 17:50:16.392 I/ReactNativeJS(18100):      'ride_status_changed',
10-23 17:50:16.392 I/ReactNativeJS(18100):      'booking_completed',
10-23 17:50:16.392 I/ReactNativeJS(18100):      'ride_cancelled' ],
10-23 17:50:16.392 I/ReactNativeJS(18100):   recentNotifications:
10-23 17:50:16.392 I/ReactNativeJS(18100):    [ { id: 'c0930979-b31c-4f63-b636-2d97a731c792',
10-23 17:50:16.392 I/ReactNativeJS(18100):        type: 'ride_completed',
10-23 17:50:16.392 I/ReactNativeJS(18100):        status: 'read',
10-23 17:50:16.392 I/ReactNativeJS(18100):        title: 'Trip Completed',
10-23 17:50:16.392 I/ReactNativeJS(18100):        created_at: '2025-10-23T11:04:46.92906+00:00',
10-23 17:50:16.392 I/ReactNativeJS(18100):        age_seconds: 4529 },
10-23 17:50:16.392 I/ReactNativeJS(18100):      { id: '2012b652-4fe3-4c41-9df3-bc9d3186a24a',
10-23 17:50:16.392 I/ReactNativeJS(18100):        type: 'ride_status_changed',
10-23 17:50:16.392 I/ReactNativeJS(18100):        status: 'read',
10-23 17:50:16.392 I/ReactNativeJS(18100):        title: 'Ride Status Updated',
10-23 17:50:16.392 I/ReactNativeJS(18100):        created_at: '2025-10-23T11:04:46.92906+00:00',
10-23 17:50:16.392 I/ReactNativeJS(18100):        age_seconds: 4529 },
10-23 17:50:16.392 I/ReactNativeJS(18100):      { id: '61a74f93-5643-46ef-8ebb-56d7ed81f675',
10-23 17:50:16.392 I/ReactNativeJS(18100):        type: 'ride_status_changed',
10-23 17:50:16.392 I/ReactNativeJS(18100):        status: 'read',
10-23 17:50:16.392 I/ReactNativeJS(18100):        title: 'Ride Status Updated',
10-23 17:50:16.392 I/ReactNativeJS(18100):        created_at: '2025-10-23T10:43:16.126619+00:00',
10-23 17:50:16.392 I/ReactNativeJS(18100):        age_seconds: 5820 },
10-23 17:50:16.392 I/ReactNativeJS(18100):      { id: 'e75df879-8cb8-4dee-8100-8dd61f99b26e',
10-23 17:50:16.392 I/ReactNativeJS(18100):        type: 'ride_status_changed',
10-23 17:50:16.392 I/ReactNativeJS(18100):        status: 'read',
10-23 17:50:16.392 I/ReactNativeJS(18100):        title: 'Ride Status Updated',
10-23 17:50:16.392 I/ReactNativeJS(18100):        created_at: '2025-10-23T10:42:44.627741+00:00',
10-23 17:50:16.392 I/ReactNativeJS(18100):        age_seconds: 5852 },
10-23 17:50:16.392 I/ReactNativeJS(18100):      { id: '55a746c6-9b8c-44e6-b80c-2beac586c467',
10-23 17:50:16.392 I/ReactNativeJS(18100):        type: 'ride_status_changed',
10-23 17:50:16.392 I/ReactNativeJS(18100):        status: 'read',
10-23 17:50:16.392 I/ReactNativeJS(18100):        title: 'Ride Status Updated',
10-23 17:50:16.392 I/ReactNativeJS(18100):        created_at: '2025-10-23T10:40:18.79365+00:00',
10-23 17:50:16.392 I/ReactNativeJS(18100):        age_seconds: 5998 } ] }
10-23 17:50:16.392 I/ReactNativeJS(18100): Γ£à [NOTIFICATIONS] ===== SETTING NOTIFICATIONS IN STATE =====
10-23 17:50:16.395 I/ReactNativeJS(18100): 'Γ£à [NOTIFICATIONS] Notifications to set:', { total: 50,
10-23 17:50:16.395 I/ReactNativeJS(18100):   tripCompleted: 0,
10-23 17:50:16.395 I/ReactNativeJS(18100):   unreadTripCompleted: 0,
10-23 17:50:16.395 I/ReactNativeJS(18100):   allNotificationIds:
10-23 17:50:16.395 I/ReactNativeJS(18100):    [ 'c0930979-b31c-4f63-b636-2d97a731c792',
10-23 17:50:16.395 I/ReactNativeJS(18100):      '2012b652-4fe3-4c41-9df3-bc9d3186a24a',
10-23 17:50:16.395 I/ReactNativeJS(18100):      '61a74f93-5643-46ef-8ebb-56d7ed81f675',
10-23 17:50:16.395 I/ReactNativeJS(18100):      'e75df879-8cb8-4dee-8100-8dd61f99b26e',
10-23 17:50:16.395 I/ReactNativeJS(18100):      '55a746c6-9b8c-44e6-b80c-2beac586c467',
10-23 17:50:16.395 I/ReactNativeJS(18100):      '7c3cc3c7-e9b6-4cf8-91bb-1bb827ff7808',
10-23 17:50:16.395 I/ReactNativeJS(18100):      '8012a1d6-41e9-4ff2-a75b-8fee9a93ca8e',
10-23 17:50:16.395 I/ReactNativeJS(18100):      'd29bae80-10e7-4d05-99d5-8dc43f61d814',
10-23 17:50:16.395 I/ReactNativeJS(18100):      'd7d8686d-95ee-4ce0-97da-ed89564b014b',
10-23 17:50:16.395 I/ReactNativeJS(18100):      '755a6269-1daf-4327-ab71-f65e3700bf1a',
10-23 17:50:16.395 I/ReactNativeJS(18100):      '500d07b9-07ca-40df-9d4a-3efcf677a117',
10-23 17:50:16.395 I/ReactNativeJS(18100):      'df4552cd-e9bc-4e40-a8a0-1270b37737db',
10-23 17:50:16.395 I/ReactNativeJS(18100):      'acb2b80a-267e-4b98-acd0-397461aee537',
10-23 17:50:16.395 I/ReactNativeJS(18100):      '60dbc0b5-662a-48af-b01a-55212f6ac6ea',
10-23 17:50:16.395 I/ReactNativeJS(18100):      '0f408121-1188-4550-9f50-919dcc8a4ed1',
10-23 17:50:16.395 I/ReactNativeJS(18100):      '23052592-9d19-442c-b40f-12b90c3da756',
10-23 17:50:16.395 I/ReactNativeJS(18100):      'c9ff3014-54e3-4b30-9f22-eceee292796b',
10-23 17:50:16.395 I/ReactNativeJS(18100):      '879d4bbd-20ad-4253-a1c6-ae7535e7c211',
10-23 17:50:16.395 I/ReactNativeJS(18100):      '286129cf-19e6-41fd-b52f-d17334d0d0f9',
10-23 17:50:16.395 I/ReactNativeJS(18100):      'b55ac709-48d5-4db2-8246-e23f9bd317ec',
10-23 17:50:16.395 I/ReactNativeJS(18100):      '92abe95d-e47d-48fa-8159-b119f5802710',
10-23 17:50:16.395 I/ReactNativeJS(18100):      '73ad244d-a00b-42a9-83e9-97932b9db2d2',
10-23 17:50:16.395 I/ReactNativeJS(18100):      '971613ac-8d86-4ab6-8fe5-49c528ca56ee',
10-23 17:50:16.395 I/ReactNativeJS(18100):      '49f0f7f9-03d6-4211-b47d-0e7738f190fa',
10-23 17:50:16.395 I/ReactNativeJS(18100):      '6a87c30d-c48d-458c-9b94-32dd5e75ac05',
10-23 17:50:16.395 I/ReactNativeJS(18100):      'aee0b7a7-9cb2-4f6b-b53f-fa47642319d0',
10-23 17:50:16.395 I/ReactNativeJS(18100):      '6c1d61c3-6cbd-4310-adfe-6d36bc611939',
10-23 17:50:16.395 I/ReactNativeJS(18100):      '9d9ab6e7-0357-4305-9ba8-e91c0bb29897',
10-23 17:50:16.395 I/ReactNativeJS(18100):      'd952183c-69a7-47dc-a848-d11bc2fff300',
10-23 17:50:16.395 I/ReactNativeJS(18100):      'a01d13a8-c95b-4bf1-b0e1-8b2a8e9aaa6b',
10-23 17:50:16.395 I/ReactNativeJS(18100):      '5a385bc8-147d-4ac2-834c-305ed9db9a05',
10-23 17:50:16.395 I/ReactNativeJS(18100):      'b9365ade-a3a4-4036-b42f-606b88d5fac9',
10-23 17:50:16.395 I/ReactNativeJS(18100):      'b6a2c6b6-bdb4-40ce-a092-25f6dd4ba953',
10-23 17:50:16.395 I/ReactNativeJS(18100):      'd850bf94-823f-497a-b292-075abf5b5a59',
10-23 17:50:16.395 I/ReactNativeJS(18100):      '5d8275c0-6692-44b3-a4ff-4eabba59873e',
10-23 17:50:16.395 I/ReactNativeJS(18100):      '5cfa0487-5d05-42e8-8e92-11a287b3ded0',
10-23 17:50:16.395 I/ReactNativeJS(18100):      '679ed79c-eb21-4609-a2b9-a1d304d4d4ad',
10-23 17:50:16.395 I/ReactNativeJS(18100):      '53bb9116-5f1d-445c-94e0-f2e3d9fa3ffe',
10-23 17:50:16.395 I/ReactNativeJS(18100):      '4196d3c8-e6dd-4a11-8d40-6771aa06de07',
10-23 17:50:16.395 I/ReactNativeJS(18100):      '8d21f749-083a-46d1-9f7e-f7dc5c36ef05',
10-23 17:50:16.395 I/ReactNativeJS(18100):      '0a371105-3196-4055-97ad-b230dba42df5',
10-23 17:50:16.395 I/ReactNativeJS(18100):      '9f010555-c90c-447e-83ae-919809ba8350',
10-23 17:50:16.395 I/ReactNativeJS(18100):      '84dd0357-20ec-4317-b7bd-7b31515219fb',
10-23 17:50:16.395 I/ReactNativeJS(18100):      'caaa4644-cefa-47e6-8c92-60415a52ef4b',
10-23 17:50:16.395 I/ReactNativeJS(18100):      'c6e2da1c-f900-47c8-b289-a88c28451f89',
10-23 17:50:16.395 I/ReactNativeJS(18100):      'c1a54517-80eb-451d-8fbb-26492459f1c4',
10-23 17:50:16.395 I/ReactNativeJS(18100):      'd3a69945-ed73-4db9-84db-77b1013c8fe2',
10-23 17:50:16.395 I/ReactNativeJS(18100):      '8de5daf3-1c41-4bc6-8e2c-c3873b443cbb',
10-23 17:50:16.395 I/ReactNativeJS(18100):      '93b3c278-21c8-4094-a13b-ae25cea5afa8',
10-23 17:50:16.395 I/ReactNativeJS(18100):      '057c85ff-f0f5-4a15-9e89-de6dc65465a2' ],
10-23 17:50:16.395 I/ReactNativeJS(18100):   tripCompletedNotificationIds: [],
10-23 17:50:16.395 I/ReactNativeJS(18100):   unreadTripCompletedNotificationIds: [] }
10-23 17:50:16.397 I/ReactNativeJS(18100): Γ£à [NOTIFICATIONS] ===== CHECKING FOR IMMEDIATE TRIP COMPLETION =====
10-23 17:50:16.397 I/ReactNativeJS(18100): Γ¥î [NOTIFICATIONS] No immediate trip completion notifications found
10-23 17:50:16.399 I/ReactNativeJS(18100): 'Γ¥î [NOTIFICATIONS] Available notification types:', [ 'ride_completed',
10-23 17:50:16.399 I/ReactNativeJS(18100):   'ride_status_changed',
10-23 17:50:16.399 I/ReactNativeJS(18100):   'ride_status_changed',
10-23 17:50:16.399 I/ReactNativeJS(18100):   'ride_status_changed',
10-23 17:50:16.399 I/ReactNativeJS(18100):   'ride_status_changed',
10-23 17:50:16.399 I/ReactNativeJS(18100):   'ride_status_changed',
10-23 17:50:16.399 I/ReactNativeJS(18100):   'ride_status_changed',
10-23 17:50:16.399 I/ReactNativeJS(18100):   'ride_status_changed',
10-23 17:50:16.399 I/ReactNativeJS(18100):   'ride_status_changed',
10-23 17:50:16.399 I/ReactNativeJS(18100):   'ride_status_changed',
10-23 17:50:16.399 I/ReactNativeJS(18100):   'ride_status_changed',
10-23 17:50:16.399 I/ReactNativeJS(18100):   'booking_completed',
10-23 17:50:16.399 I/ReactNativeJS(18100):   'booking_completed',
10-23 17:50:16.399 I/ReactNativeJS(18100):   'booking_completed',
10-23 17:50:16.399 I/ReactNativeJS(18100):   'booking_completed',
10-23 17:50:16.399 I/ReactNativeJS(18100):   'booking_completed',
10-23 17:50:16.399 I/ReactNativeJS(18100):   'ride_status_changed',
10-23 17:50:16.399 I/ReactNativeJS(18100):   'ride_status_changed',
10-23 17:50:16.399 I/ReactNativeJS(18100):   'ride_status_changed',
10-23 17:50:16.399 I/ReactNativeJS(18100):   'ride_completed',
10-23 17:50:16.399 I/ReactNativeJS(18100):   'ride_status_changed',
10-23 17:50:16.399 I/ReactNativeJS(18100):   'ride_status_changed',
10-23 17:50:16.399 I/ReactNativeJS(18100):   'ride_status_changed',
10-23 17:50:16.399 I/ReactNativeJS(18100):   'ride_completed',
10-23 17:50:16.399 I/ReactNativeJS(18100):   'ride_status_changed',
10-23 17:50:16.399 I/ReactNativeJS(18100):   'ride_status_changed',
10-23 17:50:16.399 I/ReactNativeJS(18100):   'ride_status_changed',
10-23 17:50:16.399 I/ReactNativeJS(18100):   'ride_status_changed',
10-23 17:50:16.399 I/ReactNativeJS(18100):   'ride_cancelled',
10-23 17:50:16.399 I/ReactNativeJS(18100):   'ride_status_changed',
10-23 17:50:16.399 I/ReactNativeJS(18100):   'ride_completed',
10-23 17:50:16.399 I/ReactNativeJS(18100):   'ride_status_changed',
10-23 17:50:16.399 I/ReactNativeJS(18100):   'ride_status_changed',
10-23 17:50:16.399 I/ReactNativeJS(18100):   'ride_status_changed',
10-23 17:50:16.399 I/ReactNativeJS(18100):   'ride_status_changed',
10-23 17:50:16.399 I/ReactNativeJS(18100):   'ride_completed',
10-23 17:50:16.399 I/ReactNativeJS(18100):   'ride_status_changed',
10-23 17:50:16.399 I/ReactNativeJS(18100):   'ride_status_changed',
10-23 17:50:16.399 I/ReactNativeJS(18100):   'ride_status_changed',
10-23 17:50:16.399 I/ReactNativeJS(18100):   'ride_status_changed',
10-23 17:50:16.399 I/ReactNativeJS(18100):   'ride_completed',
10-23 17:50:16.399 I/ReactNativeJS(18100):   'ride_status_changed',
10-23 17:50:16.399 I/ReactNativeJS(18100):   'ride_status_changed',
10-23 17:50:16.399 I/ReactNativeJS(18100):   'ride_status_changed',
10-23 17:50:16.399 I/ReactNativeJS(18100):   'ride_status_changed',
10-23 17:50:16.399 I/ReactNativeJS(18100):   'ride_status_changed',
10-23 17:50:16.399 I/ReactNativeJS(18100):   'ride_completed',
10-23 17:50:16.399 I/ReactNativeJS(18100):   'ride_status_changed',
10-23 17:50:16.399 I/ReactNativeJS(18100):   'ride_status_changed',
10-23 17:50:16.399 I/ReactNativeJS(18100):   'ride_status_changed' ]
10-23 17:50:16.399 I/ReactNativeJS(18100): 'Γ¥î [NOTIFICATIONS] Trip completed notifications (all statuses):', []
10-23 17:50:16.400 W/ReactNativeJS(18100): 'ΓÜá∩╕Å [DRIVER-SERVICE] Edge function failed, using direct database access:', 'Edge function failed: 500 - {"code":"WORKER_ERROR","message":"Function exited due to an error (please check logs)"}'
10-23 17:50:16.400 I/ReactNativeJS(18100): ≡ƒöì [DRIVER-SERVICE] ===== USING DIRECT DATABASE ACCESS =====
10-23 17:50:16.400 I/ReactNativeJS(18100): '≡ƒöì [DRIVER-SERVICE] Parameters:', { customerLocation: { lat: 12.7486283, lng: 77.8299733 },
10-23 17:50:16.400 I/ReactNativeJS(18100):   radius: '10km',
10-23 17:50:16.400 I/ReactNativeJS(18100):   vehicleType: 'all' }
10-23 17:50:16.400 I/ReactNativeJS(18100): ≡ƒôè [DRIVER-SERVICE] Step 1: Fetching online verified drivers...
10-23 17:50:16.404 I/ReactNativeJS(18100): 'Γ£à Loaded', 6, 'fare configs from fare_matrix table:', [ { vehicle_type: 'hatchback', base_fare: 145, per_km_rate: 25 },
10-23 17:50:16.404 I/ReactNativeJS(18100):   { vehicle_type: 'hatchback_ac', base_fare: 167, per_km_rate: 27 },
10-23 17:50:16.404 I/ReactNativeJS(18100):   { vehicle_type: 'sedan', base_fare: 145, per_km_rate: 25 },
10-23 17:50:16.404 I/ReactNativeJS(18100):   { vehicle_type: 'sedan_ac', base_fare: 160, per_km_rate: 25 },
10-23 17:50:16.404 I/ReactNativeJS(18100):   { vehicle_type: 'suv', base_fare: 400, per_km_rate: 30 },
10-23 17:50:16.404 I/ReactNativeJS(18100):   { vehicle_type: 'suv_ac', base_fare: 1500, per_km_rate: 35 } ]
10-23 17:50:16.406 W/ReactNativeJS(18100): ≡ƒÅá [HOME] ===== RENDERING HOME SCREEN =====
10-23 17:50:16.406 W/ReactNativeJS(18100): '≡ƒÅá [HOME] currentLocation:', '{"altitude":771.7999877929688,"heading":0,"altitudeAccuracy":1.3241634368896484,"latitude":12.7486283,"speed":0,"longitude":77.8299733,"accuracy":2.200000047683716}'
10-23 17:50:16.406 W/ReactNativeJS(18100): '≡ƒÅá [HOME] pickupCoords:', '{"latitude":12.7486283,"longitude":77.8299733}'
10-23 17:50:16.406 W/ReactNativeJS(18100): '≡ƒÅá [HOME] destinationCoords:', 'null'
10-23 17:50:16.406 W/ReactNativeJS(18100): '≡ƒÅá [HOME] pickupLocation text:', 'PRXJ+F32, Brindavan Nagar, Plot 87, NGGO\'s Colony, Anand Nagar, Hosur, Tamil Nadu 635109, India'
10-23 17:50:16.406 W/ReactNativeJS(18100): '≡ƒÅá [HOME] availableDrivers count:', 0
10-23 17:50:16.406 W/ReactNativeJS(18100): '≡ƒÅá [HOME] showDriversOnMap:', true
10-23 17:50:16.406 I/ReactNativeJS(18100): '≡ƒÅá≡ƒÅá≡ƒÅá [HOME-V2] ABOUT TO RENDER SimpleHosurMap with props:', { hasUserLocation: true,
10-23 17:50:16.406 I/ReactNativeJS(18100):   hasPickup: true,
10-23 17:50:16.406 I/ReactNativeJS(18100):   hasDestination: false,
10-23 17:50:16.406 I/ReactNativeJS(18100):   showDriversOnMap: true,
10-23 17:50:16.406 I/ReactNativeJS(18100):   timestamp: '2025-10-23T12:20:16.406Z' }
10-23 17:50:16.406 I/ReactNativeJS(18100): ≡ƒº¬≡ƒº¬≡ƒº¬ TEST MAP RENDERING NOW
10-23 17:50:16.406 I/ReactNativeJS(18100): '≡ƒº¬ Props received:', [ 'userLocation',
10-23 17:50:16.406 I/ReactNativeJS(18100):   'pickupLocation',
10-23 17:50:16.406 I/ReactNativeJS(18100):   'destinationLocation',
10-23 17:50:16.406 I/ReactNativeJS(18100):   'onRegionChangeComplete',
10-23 17:50:16.406 I/ReactNativeJS(18100):   'onDestinationDragEnd',
10-23 17:50:16.406 I/ReactNativeJS(18100):   'showCenteredPin',
10-23 17:50:16.406 I/ReactNativeJS(18100):   'availableDrivers',
10-23 17:50:16.406 I/ReactNativeJS(18100):   'showDrivers' ]
10-23 17:50:16.421 W/ReactNativeJS(18100): 'ΓÜá∩╕Å [DRIVER-SERVICE] Edge function failed, using direct database access:', 'Edge function failed: 500 - {"code":"WORKER_ERROR","message":"Function exited due to an error (please check logs)"}'
10-23 17:50:16.421 I/ReactNativeJS(18100): ≡ƒöì [DRIVER-SERVICE] ===== USING DIRECT DATABASE ACCESS =====
10-23 17:50:16.421 I/ReactNativeJS(18100): '≡ƒöì [DRIVER-SERVICE] Parameters:', { customerLocation: { lat: 12.7486283, lng: 77.8299733 },
10-23 17:50:16.421 I/ReactNativeJS(18100):   radius: '10km',
10-23 17:50:16.421 I/ReactNativeJS(18100):   vehicleType: 'all' }
10-23 17:50:16.421 I/ReactNativeJS(18100): ≡ƒôè [DRIVER-SERVICE] Step 1: Fetching online verified drivers...
10-23 17:50:16.424 I/ReactNativeJS(18100): ≡ƒöì [NOTIFICATIONS] ===== DATABASE QUERY RESULT =====
10-23 17:50:16.425 I/ReactNativeJS(18100): '≡ƒöì [NOTIFICATIONS] Query result:', { hasError: false,
10-23 17:50:16.425 I/ReactNativeJS(18100):   errorMessage: undefined,
10-23 17:50:16.425 I/ReactNativeJS(18100):   errorCode: undefined,
10-23 17:50:16.425 I/ReactNativeJS(18100):   errorDetails: undefined,
10-23 17:50:16.425 I/ReactNativeJS(18100):   dataCount: 50,
10-23 17:50:16.425 I/ReactNativeJS(18100):   tripCompletedCount: 0,
10-23 17:50:16.425 I/ReactNativeJS(18100):   unreadTripCompletedCount: 0,
10-23 17:50:16.425 I/ReactNativeJS(18100):   allTypes:
10-23 17:50:16.425 I/ReactNativeJS(18100):    [ 'ride_completed',
10-23 17:50:16.425 I/ReactNativeJS(18100):      'ride_status_changed',
10-23 17:50:16.425 I/ReactNativeJS(18100):      'booking_completed',
10-23 17:50:16.425 I/ReactNativeJS(18100):      'ride_cancelled' ],
10-23 17:50:16.425 I/ReactNativeJS(18100):   recentNotifications:
10-23 17:50:16.425 I/ReactNativeJS(18100):    [ { id: 'c0930979-b31c-4f63-b636-2d97a731c792',
10-23 17:50:16.425 I/ReactNativeJS(18100):        type: 'ride_completed',
10-23 17:50:16.425 I/ReactNativeJS(18100):        status: 'read',
10-23 17:50:16.425 I/ReactNativeJS(18100):        title: 'Trip Completed',
10-23 17:50:16.425 I/ReactNativeJS(18100):        created_at: '2025-10-23T11:04:46.92906+00:00',
10-23 17:50:16.425 I/ReactNativeJS(18100):        age_seconds: 4529 },
10-23 17:50:16.425 I/ReactNativeJS(18100):      { id: '2012b652-4fe3-4c41-9df3-bc9d3186a24a',
10-23 17:50:16.425 I/ReactNativeJS(18100):        type: 'ride_status_changed',
10-23 17:50:16.425 I/ReactNativeJS(18100):        status: 'read',
10-23 17:50:16.425 I/ReactNativeJS(18100):        title: 'Ride Status Updated',
10-23 17:50:16.425 I/ReactNativeJS(18100):        created_at: '2025-10-23T11:04:46.92906+00:00',
10-23 17:50:16.425 I/ReactNativeJS(18100):        age_seconds: 4529 },
10-23 17:50:16.425 I/ReactNativeJS(18100):      { id: '61a74f93-5643-46ef-8ebb-56d7ed81f675',
10-23 17:50:16.425 I/ReactNativeJS(18100):        type: 'ride_status_changed',
10-23 17:50:16.425 I/ReactNativeJS(18100):        status: 'read',
10-23 17:50:16.425 I/ReactNativeJS(18100):        title: 'Ride Status Updated',
10-23 17:50:16.425 I/ReactNativeJS(18100):        created_at: '2025-10-23T10:43:16.126619+00:00',
10-23 17:50:16.425 I/ReactNativeJS(18100):        age_seconds: 5820 },
10-23 17:50:16.425 I/ReactNativeJS(18100):      { id: 'e75df879-8cb8-4dee-8100-8dd61f99b26e',
10-23 17:50:16.425 I/ReactNativeJS(18100):        type: 'ride_status_changed',
10-23 17:50:16.425 I/ReactNativeJS(18100):        status: 'read',
10-23 17:50:16.425 I/ReactNativeJS(18100):        title: 'Ride Status Updated',
10-23 17:50:16.425 I/ReactNativeJS(18100):        created_at: '2025-10-23T10:42:44.627741+00:00',
10-23 17:50:16.425 I/ReactNativeJS(18100):        age_seconds: 5852 },
10-23 17:50:16.425 I/ReactNativeJS(18100):      { id: '55a746c6-9b8c-44e6-b80c-2beac586c467',
10-23 17:50:16.425 I/ReactNativeJS(18100):        type: 'ride_status_changed',
10-23 17:50:16.425 I/ReactNativeJS(18100):        status: 'read',
10-23 17:50:16.425 I/ReactNativeJS(18100):        title: 'Ride Status Updated',
10-23 17:50:16.425 I/ReactNativeJS(18100):        created_at: '2025-10-23T10:40:18.79365+00:00',
10-23 17:50:16.425 I/ReactNativeJS(18100):        age_seconds: 5998 } ] }
10-23 17:50:16.425 I/ReactNativeJS(18100): Γ£à [NOTIFICATIONS] ===== SETTING NOTIFICATIONS IN STATE =====
10-23 17:50:16.426 I/ReactNativeJS(18100): 'Γ£à [NOTIFICATIONS] Notifications to set:', { total: 50,
10-23 17:50:16.426 I/ReactNativeJS(18100):   tripCompleted: 0,
10-23 17:50:16.426 I/ReactNativeJS(18100):   unreadTripCompleted: 0,
10-23 17:50:16.426 I/ReactNativeJS(18100):   allNotificationIds:
10-23 17:50:16.426 I/ReactNativeJS(18100):    [ 'c0930979-b31c-4f63-b636-2d97a731c792',
10-23 17:50:16.426 I/ReactNativeJS(18100):      '2012b652-4fe3-4c41-9df3-bc9d3186a24a',
10-23 17:50:16.426 I/ReactNativeJS(18100):      '61a74f93-5643-46ef-8ebb-56d7ed81f675',
10-23 17:50:16.426 I/ReactNativeJS(18100):      'e75df879-8cb8-4dee-8100-8dd61f99b26e',
10-23 17:50:16.426 I/ReactNativeJS(18100):      '55a746c6-9b8c-44e6-b80c-2beac586c467',
10-23 17:50:16.426 I/ReactNativeJS(18100):      '7c3cc3c7-e9b6-4cf8-91bb-1bb827ff7808',
10-23 17:50:16.426 I/ReactNativeJS(18100):      '8012a1d6-41e9-4ff2-a75b-8fee9a93ca8e',
10-23 17:50:16.426 I/ReactNativeJS(18100):      'd29bae80-10e7-4d05-99d5-8dc43f61d814',
10-23 17:50:16.426 I/ReactNativeJS(18100):      'd7d8686d-95ee-4ce0-97da-ed89564b014b',
10-23 17:50:16.426 I/ReactNativeJS(18100):      '755a6269-1daf-4327-ab71-f65e3700bf1a',
10-23 17:50:16.426 I/ReactNativeJS(18100):      '500d07b9-07ca-40df-9d4a-3efcf677a117',
10-23 17:50:16.426 I/ReactNativeJS(18100):      'df4552cd-e9bc-4e40-a8a0-1270b37737db',
10-23 17:50:16.426 I/ReactNativeJS(18100):      'acb2b80a-267e-4b98-acd0-397461aee537',
10-23 17:50:16.426 I/ReactNativeJS(18100):      '60dbc0b5-662a-48af-b01a-55212f6ac6ea',
10-23 17:50:16.426 I/ReactNativeJS(18100):      '0f408121-1188-4550-9f50-919dcc8a4ed1',
10-23 17:50:16.426 I/ReactNativeJS(18100):      '23052592-9d19-442c-b40f-12b90c3da756',
10-23 17:50:16.426 I/ReactNativeJS(18100):      'c9ff3014-54e3-4b30-9f22-eceee292796b',
10-23 17:50:16.426 I/ReactNativeJS(18100):      '879d4bbd-20ad-4253-a1c6-ae7535e7c211',
10-23 17:50:16.426 I/ReactNativeJS(18100):      '286129cf-19e6-41fd-b52f-d17334d0d0f9',
10-23 17:50:16.426 I/ReactNativeJS(18100):      'b55ac709-48d5-4db2-8246-e23f9bd317ec',
10-23 17:50:16.426 I/ReactNativeJS(18100):      '92abe95d-e47d-48fa-8159-b119f5802710',
10-23 17:50:16.426 I/ReactNativeJS(18100):      '73ad244d-a00b-42a9-83e9-97932b9db2d2',
10-23 17:50:16.426 I/ReactNativeJS(18100):      '971613ac-8d86-4ab6-8fe5-49c528ca56ee',
10-23 17:50:16.426 I/ReactNativeJS(18100):      '49f0f7f9-03d6-4211-b47d-0e7738f190fa',
10-23 17:50:16.426 I/ReactNativeJS(18100):      '6a87c30d-c48d-458c-9b94-32dd5e75ac05',
10-23 17:50:16.426 I/ReactNativeJS(18100):      'aee0b7a7-9cb2-4f6b-b53f-fa47642319d0',
10-23 17:50:16.426 I/ReactNativeJS(18100):      '6c1d61c3-6cbd-4310-adfe-6d36bc611939',
10-23 17:50:16.426 I/ReactNativeJS(18100):      '9d9ab6e7-0357-4305-9ba8-e91c0bb29897',
10-23 17:50:16.426 I/ReactNativeJS(18100):      'd952183c-69a7-47dc-a848-d11bc2fff300',
10-23 17:50:16.426 I/ReactNativeJS(18100):      'a01d13a8-c95b-4bf1-b0e1-8b2a8e9aaa6b',
10-23 17:50:16.426 I/ReactNativeJS(18100):      '5a385bc8-147d-4ac2-834c-305ed9db9a05',
10-23 17:50:16.426 I/ReactNativeJS(18100):      'b9365ade-a3a4-4036-b42f-606b88d5fac9',
10-23 17:50:16.426 I/ReactNativeJS(18100):      'b6a2c6b6-bdb4-40ce-a092-25f6dd4ba953',
10-23 17:50:16.426 I/ReactNativeJS(18100):      'd850bf94-823f-497a-b292-075abf5b5a59',
10-23 17:50:16.426 I/ReactNativeJS(18100):      '5d8275c0-6692-44b3-a4ff-4eabba59873e',
10-23 17:50:16.426 I/ReactNativeJS(18100):      '5cfa0487-5d05-42e8-8e92-11a287b3ded0',
10-23 17:50:16.426 I/ReactNativeJS(18100):      '679ed79c-eb21-4609-a2b9-a1d304d4d4ad',
10-23 17:50:16.426 I/ReactNativeJS(18100):      '53bb9116-5f1d-445c-94e0-f2e3d9fa3ffe',
10-23 17:50:16.426 I/ReactNativeJS(18100):      '4196d3c8-e6dd-4a11-8d40-6771aa06de07',
10-23 17:50:16.426 I/ReactNativeJS(18100):      '8d21f749-083a-46d1-9f7e-f7dc5c36ef05',
10-23 17:50:16.426 I/ReactNativeJS(18100):      '0a371105-3196-4055-97ad-b230dba42df5',
10-23 17:50:16.426 I/ReactNativeJS(18100):      '9f010555-c90c-447e-83ae-919809ba8350',
10-23 17:50:16.426 I/ReactNativeJS(18100):      '84dd0357-20ec-4317-b7bd-7b31515219fb',
10-23 17:50:16.426 I/ReactNativeJS(18100):      'caaa4644-cefa-47e6-8c92-60415a52ef4b',
10-23 17:50:16.426 I/ReactNativeJS(18100):      'c6e2da1c-f900-47c8-b289-a88c28451f89',
10-23 17:50:16.426 I/ReactNativeJS(18100):      'c1a54517-80eb-451d-8fbb-26492459f1c4',
10-23 17:50:16.426 I/ReactNativeJS(18100):      'd3a69945-ed73-4db9-84db-77b1013c8fe2',
10-23 17:50:16.426 I/ReactNativeJS(18100):      '8de5daf3-1c41-4bc6-8e2c-c3873b443cbb',
10-23 17:50:16.426 I/ReactNativeJS(18100):      '93b3c278-21c8-4094-a13b-ae25cea5afa8',
10-23 17:50:16.426 I/ReactNativeJS(18100):      '057c85ff-f0f5-4a15-9e89-de6dc65465a2' ],
10-23 17:50:16.426 I/ReactNativeJS(18100):   tripCompletedNotificationIds: [],
10-23 17:50:16.426 I/ReactNativeJS(18100):   unreadTripCompletedNotificationIds: [] }
10-23 17:50:16.429 W/ReactNativeJS(18100): ≡ƒÅá [HOME] ===== RENDERING HOME SCREEN =====
10-23 17:50:16.429 W/ReactNativeJS(18100): '≡ƒÅá [HOME] currentLocation:', '{"altitude":771.7999877929688,"heading":0,"altitudeAccuracy":1.3241634368896484,"latitude":12.7486283,"speed":0,"longitude":77.8299733,"accuracy":2.200000047683716}'
10-23 17:50:16.429 W/ReactNativeJS(18100): '≡ƒÅá [HOME] pickupCoords:', '{"latitude":12.7486283,"longitude":77.8299733}'
10-23 17:50:16.429 W/ReactNativeJS(18100): '≡ƒÅá [HOME] destinationCoords:', 'null'
10-23 17:50:16.429 W/ReactNativeJS(18100): '≡ƒÅá [HOME] pickupLocation text:', 'PRXJ+F32, Brindavan Nagar, Plot 87, NGGO\'s Colony, Anand Nagar, Hosur, Tamil Nadu 635109, India'
10-23 17:50:16.429 W/ReactNativeJS(18100): '≡ƒÅá [HOME] availableDrivers count:', 0
10-23 17:50:16.429 W/ReactNativeJS(18100): '≡ƒÅá [HOME] showDriversOnMap:', true
10-23 17:50:16.429 I/ReactNativeJS(18100): '≡ƒÅá≡ƒÅá≡ƒÅá [HOME-V2] ABOUT TO RENDER SimpleHosurMap with props:', { hasUserLocation: true,
10-23 17:50:16.429 I/ReactNativeJS(18100):   hasPickup: true,
10-23 17:50:16.429 I/ReactNativeJS(18100):   hasDestination: false,
10-23 17:50:16.429 I/ReactNativeJS(18100):   showDriversOnMap: true,
10-23 17:50:16.429 I/ReactNativeJS(18100):   timestamp: '2025-10-23T12:20:16.429Z' }
10-23 17:50:16.430 I/ReactNativeJS(18100): ≡ƒº¬≡ƒº¬≡ƒº¬ TEST MAP RENDERING NOW
10-23 17:50:16.430 I/ReactNativeJS(18100): '≡ƒº¬ Props received:', [ 'userLocation',
10-23 17:50:16.430 I/ReactNativeJS(18100):   'pickupLocation',
10-23 17:50:16.430 I/ReactNativeJS(18100):   'destinationLocation',
10-23 17:50:16.430 I/ReactNativeJS(18100):   'onRegionChangeComplete',
10-23 17:50:16.430 I/ReactNativeJS(18100):   'onDestinationDragEnd',
10-23 17:50:16.430 I/ReactNativeJS(18100):   'showCenteredPin',
10-23 17:50:16.430 I/ReactNativeJS(18100):   'availableDrivers',
10-23 17:50:16.430 I/ReactNativeJS(18100):   'showDrivers' ]
10-23 17:50:16.438 W/ReactNativeJS(18100): ≡ƒÅá [HOME] ===== RENDERING HOME SCREEN =====
10-23 17:50:16.438 W/ReactNativeJS(18100): '≡ƒÅá [HOME] currentLocation:', '{"altitude":771.7999877929688,"heading":0,"altitudeAccuracy":1.3241634368896484,"latitude":12.7486283,"speed":0,"longitude":77.8299733,"accuracy":2.200000047683716}'
10-23 17:50:16.438 W/ReactNativeJS(18100): '≡ƒÅá [HOME] pickupCoords:', '{"latitude":12.7486283,"longitude":77.8299733}'
10-23 17:50:16.438 W/ReactNativeJS(18100): '≡ƒÅá [HOME] destinationCoords:', 'null'
10-23 17:50:16.438 W/ReactNativeJS(18100): '≡ƒÅá [HOME] pickupLocation text:', 'PRXJ+F32, Brindavan Nagar, Plot 87, NGGO\'s Colony, Anand Nagar, Hosur, Tamil Nadu 635109, India'
10-23 17:50:16.438 W/ReactNativeJS(18100): '≡ƒÅá [HOME] availableDrivers count:', 0
10-23 17:50:16.438 W/ReactNativeJS(18100): '≡ƒÅá [HOME] showDriversOnMap:', true
10-23 17:50:16.438 I/ReactNativeJS(18100): '≡ƒÅá≡ƒÅá≡ƒÅá [HOME-V2] ABOUT TO RENDER SimpleHosurMap with props:', { hasUserLocation: true,
10-23 17:50:16.438 I/ReactNativeJS(18100):   hasPickup: true,
10-23 17:50:16.438 I/ReactNativeJS(18100):   hasDestination: false,
10-23 17:50:16.438 I/ReactNativeJS(18100):   showDriversOnMap: true,
10-23 17:50:16.438 I/ReactNativeJS(18100):   timestamp: '2025-10-23T12:20:16.438Z' }
10-23 17:50:16.439 I/ReactNativeJS(18100): Γ£à [NOTIFICATIONS] ===== CHECKING FOR IMMEDIATE TRIP COMPLETION =====
10-23 17:50:16.439 I/ReactNativeJS(18100): Γ¥î [NOTIFICATIONS] No immediate trip completion notifications found
10-23 17:50:16.439 I/ReactNativeJS(18100): 'Γ¥î [NOTIFICATIONS] Available notification types:', [ 'ride_completed',
10-23 17:50:16.439 I/ReactNativeJS(18100):   'ride_status_changed',
10-23 17:50:16.439 I/ReactNativeJS(18100):   'ride_status_changed',
10-23 17:50:16.439 I/ReactNativeJS(18100):   'ride_status_changed',
10-23 17:50:16.439 I/ReactNativeJS(18100):   'ride_status_changed',
10-23 17:50:16.439 I/ReactNativeJS(18100):   'ride_status_changed',
10-23 17:50:16.439 I/ReactNativeJS(18100):   'ride_status_changed',
10-23 17:50:16.439 I/ReactNativeJS(18100):   'ride_status_changed',
10-23 17:50:16.439 I/ReactNativeJS(18100):   'ride_status_changed',
10-23 17:50:16.439 I/ReactNativeJS(18100):   'ride_status_changed',
10-23 17:50:16.439 I/ReactNativeJS(18100):   'ride_status_changed',
10-23 17:50:16.439 I/ReactNativeJS(18100):   'booking_completed',
10-23 17:50:16.439 I/ReactNativeJS(18100):   'booking_completed',
10-23 17:50:16.439 I/ReactNativeJS(18100):   'booking_completed',
10-23 17:50:16.439 I/ReactNativeJS(18100):   'booking_completed',
10-23 17:50:16.439 I/ReactNativeJS(18100):   'booking_completed',
10-23 17:50:16.439 I/ReactNativeJS(18100):   'ride_status_changed',
10-23 17:50:16.439 I/ReactNativeJS(18100):   'ride_status_changed',
10-23 17:50:16.439 I/ReactNativeJS(18100):   'ride_status_changed',
10-23 17:50:16.439 I/ReactNativeJS(18100):   'ride_completed',
10-23 17:50:16.439 I/ReactNativeJS(18100):   'ride_status_changed',
10-23 17:50:16.439 I/ReactNativeJS(18100):   'ride_status_changed',
10-23 17:50:16.439 I/ReactNativeJS(18100):   'ride_status_changed',
10-23 17:50:16.439 I/ReactNativeJS(18100):   'ride_completed',
10-23 17:50:16.439 I/ReactNativeJS(18100):   'ride_status_changed',
10-23 17:50:16.439 I/ReactNativeJS(18100):   'ride_status_changed',
10-23 17:50:16.439 I/ReactNativeJS(18100):   'ride_status_changed',
10-23 17:50:16.439 I/ReactNativeJS(18100):   'ride_status_changed',
10-23 17:50:16.439 I/ReactNativeJS(18100):   'ride_cancelled',
10-23 17:50:16.439 I/ReactNativeJS(18100):   'ride_status_changed',
10-23 17:50:16.439 I/ReactNativeJS(18100):   'ride_completed',
10-23 17:50:16.439 I/ReactNativeJS(18100):   'ride_status_changed',
10-23 17:50:16.439 I/ReactNativeJS(18100):   'ride_status_changed',
10-23 17:50:16.439 I/ReactNativeJS(18100):   'ride_status_changed',
10-23 17:50:16.439 I/ReactNativeJS(18100):   'ride_status_changed',
10-23 17:50:16.439 I/ReactNativeJS(18100):   'ride_completed',
10-23 17:50:16.439 I/ReactNativeJS(18100):   'ride_status_changed',
10-23 17:50:16.439 I/ReactNativeJS(18100):   'ride_status_changed',
10-23 17:50:16.439 I/ReactNativeJS(18100):   'ride_status_changed',
10-23 17:50:16.439 I/ReactNativeJS(18100):   'ride_status_changed',
10-23 17:50:16.439 I/ReactNativeJS(18100):   'ride_completed',
10-23 17:50:16.439 I/ReactNativeJS(18100):   'ride_status_changed',
10-23 17:50:16.439 I/ReactNativeJS(18100):   'ride_status_changed',
10-23 17:50:16.439 I/ReactNativeJS(18100):   'ride_status_changed',
10-23 17:50:16.439 I/ReactNativeJS(18100):   'ride_status_changed',
10-23 17:50:16.439 I/ReactNativeJS(18100):   'ride_status_changed',
10-23 17:50:16.439 I/ReactNativeJS(18100):   'ride_completed',
10-23 17:50:16.439 I/ReactNativeJS(18100):   'ride_status_changed',
10-23 17:50:16.439 I/ReactNativeJS(18100):   'ride_status_changed',
10-23 17:50:16.439 I/ReactNativeJS(18100):   'ride_status_changed' ]
10-23 17:50:16.439 I/ReactNativeJS(18100): 'Γ¥î [NOTIFICATIONS] Trip completed notifications (all statuses):', []
10-23 17:50:16.440 W/ReactNativeJS(18100): ≡ƒÅá [HOME] ===== RENDERING HOME SCREEN =====
10-23 17:50:16.440 W/ReactNativeJS(18100): '≡ƒÅá [HOME] currentLocation:', '{"altitude":771.7999877929688,"heading":0,"altitudeAccuracy":1.3241634368896484,"latitude":12.7486283,"speed":0,"longitude":77.8299733,"accuracy":2.200000047683716}'
10-23 17:50:16.440 W/ReactNativeJS(18100): '≡ƒÅá [HOME] pickupCoords:', '{"latitude":12.7486283,"longitude":77.8299733}'
10-23 17:50:16.440 W/ReactNativeJS(18100): '≡ƒÅá [HOME] destinationCoords:', 'null'
10-23 17:50:16.440 W/ReactNativeJS(18100): '≡ƒÅá [HOME] pickupLocation text:', 'PRXJ+F32, Brindavan Nagar, Plot 87, NGGO\'s Colony, Anand Nagar, Hosur, Tamil Nadu 635109, India'
10-23 17:50:16.440 W/ReactNativeJS(18100): '≡ƒÅá [HOME] availableDrivers count:', 0
10-23 17:50:16.440 W/ReactNativeJS(18100): '≡ƒÅá [HOME] showDriversOnMap:', true
10-23 17:50:16.440 I/ReactNativeJS(18100): '≡ƒÅá≡ƒÅá≡ƒÅá [HOME-V2] ABOUT TO RENDER SimpleHosurMap with props:', { hasUserLocation: true,
10-23 17:50:16.440 I/ReactNativeJS(18100):   hasPickup: true,
10-23 17:50:16.440 I/ReactNativeJS(18100):   hasDestination: false,
10-23 17:50:16.440 I/ReactNativeJS(18100):   showDriversOnMap: true,
10-23 17:50:16.440 I/ReactNativeJS(18100):   timestamp: '2025-10-23T12:20:16.440Z' }
10-23 17:50:16.440 I/ReactNativeJS(18100): ≡ƒº¬≡ƒº¬≡ƒº¬ TEST MAP RENDERING NOW
10-23 17:50:16.441 I/ReactNativeJS(18100): '≡ƒº¬ Props received:', [ 'userLocation',
10-23 17:50:16.441 I/ReactNativeJS(18100):   'pickupLocation',
10-23 17:50:16.441 I/ReactNativeJS(18100):   'destinationLocation',
10-23 17:50:16.441 I/ReactNativeJS(18100):   'onRegionChangeComplete',
10-23 17:50:16.441 I/ReactNativeJS(18100):   'onDestinationDragEnd',
10-23 17:50:16.441 I/ReactNativeJS(18100):   'showCenteredPin',
10-23 17:50:16.441 I/ReactNativeJS(18100):   'availableDrivers',
10-23 17:50:16.441 I/ReactNativeJS(18100):   'showDrivers' ]
10-23 17:50:16.683 I/ReactNativeJS(18100): '≡ƒôè [DRIVER-SERVICE] Found drivers:', { total: 21,
10-23 17:50:16.683 I/ReactNativeJS(18100):   details:
10-23 17:50:16.683 I/ReactNativeJS(18100):    [ { id: '22480cc3-665c-407e-ad8a-8eafde67706b',
10-23 17:50:16.683 I/ReactNativeJS(18100):        user_id: '16011178-decf-4de3-beae-94ca46ce9258',
10-23 17:50:16.683 I/ReactNativeJS(18100):        name: undefined,
10-23 17:50:16.683 I/ReactNativeJS(18100):        vehicle_type: 'hatchback',
10-23 17:50:16.683 I/ReactNativeJS(18100):        status: 'online',
10-23 17:50:16.683 I/ReactNativeJS(18100):        verified: true },
10-23 17:50:16.683 I/ReactNativeJS(18100):      { id: '76b66a88-dff9-4965-9e36-8a92023f155d',
10-23 17:50:16.683 I/ReactNativeJS(18100):        user_id: 'ae53a792-6aed-4186-823d-61c34c6defe2',
10-23 17:50:16.683 I/ReactNativeJS(18100):        name: undefined,
10-23 17:50:16.683 I/ReactNativeJS(18100):        vehicle_type: 'sedan',
10-23 17:50:16.683 I/ReactNativeJS(18100):        status: 'online',
10-23 17:50:16.683 I/ReactNativeJS(18100):        verified: true },
10-23 17:50:16.683 I/ReactNativeJS(18100):      { id: '6f55e87b-6558-48df-af8c-d69190918b32',
10-23 17:50:16.683 I/ReactNativeJS(18100):        user_id: 'e6145579-4f5a-439f-b929-fa478580c049',
10-23 17:50:16.683 I/ReactNativeJS(18100):        name: undefined,
10-23 17:50:16.683 I/ReactNativeJS(18100):        vehicle_type: 'hatchback',
10-23 17:50:16.683 I/ReactNativeJS(18100):        status: 'online',
10-23 17:50:16.683 I/ReactNativeJS(18100):        verified: true },
10-23 17:50:16.683 I/ReactNativeJS(18100):      { id: '97a4ba58-9431-48e5-ac8f-3472b8357179',
10-23 17:50:16.683 I/ReactNativeJS(18100):        user_id: '5d6651c8-2e3f-44e7-b4a1-0056c1d5315b',
10-23 17:50:16.683 I/ReactNativeJS(18100):        name: undefined,
10-23 17:50:16.683 I/ReactNativeJS(18100):        vehicle_type: 'sedan_ac',
10-23 17:50:16.683 I/ReactNativeJS(18100):        status: 'online',
10-23 17:50:16.683 I/ReactNativeJS(18100):        verified: true },
10-23 17:50:16.683 I/ReactNativeJS(18100):      { id: 'c568b21d-0975-4388-a9fb-cc00013b6d4f',
10-23 17:50:16.683 I/ReactNativeJS(18100):        user_id: '6150ee57-77e5-45f7-b6c7-a586f22f2af8',
10-23 17:50:16.683 I/ReactNativeJS(18100):        name: undefined,
10-23 17:50:16.683 I/ReactNativeJS(18100):        vehicle_type: 'sedan',
10-23 17:50:16.683 I/ReactNativeJS(18100):        status: 'online',
10-23 17:50:16.683 I/ReactNativeJS(18100):        verified: true },
10-23 17:50:16.683 I/ReactNativeJS(18100):      { id: '7055c2f9-99fa-4d96-bc6c-079b5cda6f56',
10-23 17:50:16.683 I/ReactNativeJS(18100):        user_id: 'dc475d27-6167-4695-a014-dcb8d160b4c6',
10-23 17:50:16.683 I/ReactNativeJS(18100):        name: undefined,
10-23 17:50:16.683 I/ReactNativeJS(18100):        vehicle_type: 'hatchback',
10-23 17:50:16.683 I/ReactNativeJS(18100):        status: 'online',
10-23 17:50:16.683 I/ReactNativeJS(18100):        verified: true },
10-23 17:50:16.683 I/ReactNativeJS(18100):      { id: '770e8400-e29b-41d4-a716-446655440001',
10-23 17:50:16.683 I/ReactNativeJS(18100):        user_id: '550e8400-e29b-41d4-a716-446655440001',
10-23 17:50:16.683 I/ReactNativeJS(18100):        name: undefined,
10-23 17:50:16.683 I/ReactNativeJS(18100):        vehicle_type: 'hatchback',
10-23 17:50:16.683 I/ReactNativeJS(18100):        status: 'online',
10-23 17:50:16.683 I/ReactNativeJS(18100):        verified: true },
10-23 17:50:16.683 I/ReactNativeJS(18100):      { id: '770e8400-e29b-41d4-a716-446655440002',
10-23 17:50:16.683 I/ReactNativeJS(18100):        user_id: '550e8400-e29b-41d4-a716-446655440002',
10-23 17:50:16.683 I/ReactNativeJS(18100):        name: undefined,
10-23 17:50:16.683 I/ReactNativeJS(18100):        vehicle_type: 'sedan',
10-23 17:50:16.683 I/ReactNativeJS(18100):        status: 'online',
10-23 17:50:16.683 I/ReactNativeJS(18100):        verified: true },
10-23 17:50:16.683 I/ReactNativeJS(18100):      { id: '43d81d7d-e647-46cf-8599-11f63996b03e',
10-23 17:50:16.683 I/ReactNativeJS(18100):        user_id: '6c03a657-c3e4-466e-b49c-324c2d051ce9',
10-23 17:50:16.683 I/ReactNativeJS(18100):        name: undefined,
10-23 17:50:16.683 I/ReactNativeJS(18100):        vehicle_type: 'sedan_ac',
10-23 17:50:16.683 I/ReactNativeJS(18100):        status: 'online',
10-23 17:50:16.683 I/ReactNativeJS(18100):        verified: true },
10-23 17:50:16.683 I/ReactNativeJS(18100):      { id: '770e8400-e29b-41d4-a716-446655440003',
10-23 17:50:16.683 I/ReactNativeJS(18100):        user_id: '550e8400-e29b-41d4-a716-446655440003',
10-23 17:50:16.683 I/ReactNativeJS(18100):        name: undefined,
10-23 17:50:16.683 I/ReactNativeJS(18100):        vehicle_type: 'suv',
10-23 17:50:16.683 I/ReactNativeJS(18100):        status: 'online',
10-23 17:50:16.683 I/ReactNativeJS(18100):        verified: true },
10-23 17:50:16.683 I/ReactNativeJS(18100):      { id: '770e8400-e29b-41d4-a716-446655440004',
10-23 17:50:16.683 I/ReactNativeJS(18100):        user_id: '550e8400-e29b-41d4-a716-446655440004',
10-23 17:50:16.683 I/ReactNativeJS(18100):        name: undefined,
10-23 17:50:16.683 I/ReactNativeJS(18100):        vehicle_type: 'sedan',
10-23 17:50:16.683 I/ReactNativeJS(18100):        status: 'online',
10-23 17:50:16.683 I/ReactNativeJS(18100):        verified: true },
10-23 17:50:16.683 I/ReactNativeJS(18100):      { id: '770e8400-e29b-41d4-a716-446655440005',
10-23 17:50:16.683 I/ReactNativeJS(18100):        user_id: '550e8400-e29b-41d4-a716-446655440005',
10-23 17:50:16.683 I/ReactNativeJS(18100):        name: undefined,
10-23 17:50:16.683 I/ReactNativeJS(18100):        vehicle_type: 'hatchback',
10-23 17:50:16.683 I/ReactNativeJS(18100):        status: 'online',
10-23 17:50:16.683 I/ReactNativeJS(18100):        verified: true },
10-23 17:50:16.683 I/ReactNativeJS(18100):      { id: '489b94a7-777b-4e11-ba5c-17e0a3173737',
10-23 17:50:16.683 I/ReactNativeJS(18100):        user_id: '892d8e0d-7ca5-4dd8-9979-539f394538f2',
10-23 17:50:16.683 I/ReactNativeJS(18100):        name: undefined,
10-23 17:50:16.683 I/ReactNativeJS(18100):        vehicle_type: 'hatchback',
10-23 17:50:16.683 I/ReactNativeJS(18100):        status: 'online',
10-23 17:50:16.683 I/ReactNativeJS(18100):        verified: true },
10-23 17:50:16.683 I/ReactNativeJS(18100):      { id: 'd7b4a339-2ba5-45ed-a2ec-238548a8eab6',
10-23 17:50:16.683 I/ReactNativeJS(18100):        user_id: 'cb735787-e96d-4d1d-9975-c112e75dfabd',
10-23 17:50:16.683 I/ReactNativeJS(18100):        name: undefined,
10-23 17:50:16.683 I/ReactNativeJS(18100):        vehicle_type: 'hatchback_ac',
10-23 17:50:16.683 I/ReactNativeJS(18100):        status: 'online',
10-23 17:50:16.683 I/ReactNativeJS(18100):        verified: true },
10-23 17:50:16.683 I/ReactNativeJS(18100):      { id: '38ee94d8-ac2d-450e-8084-0bef654546d7',
10-23 17:50:16.683 I/ReactNativeJS(18100):        user_id: 'fdd94862-18e4-49d4-b6c0-8b9f73c8ff8c',
10-23 17:50:16.683 I/ReactNativeJS(18100):        name: undefined,
10-23 17:50:16.683 I/ReactNativeJS(18100):        vehicle_type: 'sedan',
10-23 17:50:16.683 I/ReactNativeJS(18100):        status: 'online',
10-23 17:50:16.683 I/ReactNativeJS(18100):        verified: true },
10-23 17:50:16.683 I/ReactNativeJS(18100):      { id: 'b4613ecf-44b5-49ba-8613-f8993b6db1d6',
10-23 17:50:16.683 I/ReactNativeJS(18100):        user_id: '539b06c9-4e24-49a4-b307-3fb3f9dc39da',
10-23 17:50:16.683 I/ReactNativeJS(18100):        name: undefined,
10-23 17:50:16.683 I/ReactNativeJS(18100):        vehicle_type: 'sedan',
10-23 17:50:16.683 I/ReactNativeJS(18100):        status: 'online',
10-23 17:50:16.683 I/ReactNativeJS(18100):        verified: true },
10-23 17:50:16.683 I/ReactNativeJS(18100):      { id: '631f4ab4-c643-45a8-addd-541595b0fe86',
10-23 17:50:16.683 I/ReactNativeJS(18100):        user_id: 'b12c8a48-05b3-475a-b042-4810aee4e918',
10-23 17:50:16.683 I/ReactNativeJS(18100):        name: undefined,
10-23 17:50:16.683 I/ReactNativeJS(18100):        vehicle_type: 'suv',
10-23 17:50:16.683 I/ReactNativeJS(18100):        status: 'online',
10-23 17:50:16.683 I/ReactNativeJS(18100):        verified: true },
10-23 17:50:16.683 I/ReactNativeJS(18100):      { id: '0330d75a-67b0-4b12-b9b7-22a241af9c57',
10-23 17:50:16.683 I/ReactNativeJS(18100):        user_id: 'f5e495f1-75a4-4ce1-bb60-4adfc348b8fc',
10-23 17:50:16.683 I/ReactNativeJS(18100):        name: undefined,
10-23 17:50:16.683 I/ReactNativeJS(18100):        vehicle_type: 'sedan',
10-23 17:50:16.683 I/ReactNativeJS(18100):        status: 'online',
10-23 17:50:16.683 I/ReactNativeJS(18100):        verified: true },
10-23 17:50:16.683 I/ReactNativeJS(18100):      { id: '707e2d38-7346-4a2e-bddb-e1157475f786',
10-23 17:50:16.683 I/ReactNativeJS(18100):        user_id: 'ed59084b-f517-4da3-814c-a314cdd8b4c6',
10-23 17:50:16.683 I/ReactNativeJS(18100):        name: undefined,
10-23 17:50:16.683 I/ReactNativeJS(18100):        vehicle_type: 'sedan',
10-23 17:50:16.683 I/ReactNativeJS(18100):        status: 'online',
10-23 17:50:16.683 I/ReactNativeJS(18100):        verified: true },
10-23 17:50:16.683 I/ReactNativeJS(18100):      { id: 'eb91d7e5-e2f2-4021-a8c8-3739a3d4cae4',
10-23 17:50:16.683 I/ReactNativeJS(18100):        user_id: '1c4ac410-54d8-4b5e-960b-3afcbebd115d',
10-23 17:50:16.683 I/ReactNativeJS(18100):        name: undefined,
10-23 17:50:16.683 I/ReactNativeJS(18100):        vehicle_type: 'sedan',
10-23 17:50:16.683 I/ReactNativeJS(18100):        status: 'online',
10-23 17:50:16.683 I/ReactNativeJS(18100):        verified: true },
10-23 17:50:16.683 I/ReactNativeJS(18100):      { id: '058f85df-35b3-4027-81a1-bd52a0df8e4a',
10-23 17:50:16.683 I/ReactNativeJS(18100):        user_id: '411ee301-8ffc-4874-86e9-37716951bc4d',
10-23 17:50:16.683 I/ReactNativeJS(18100):        name: undefined,
10-23 17:50:16.683 I/ReactNativeJS(18100):        vehicle_type: 'suv_ac',
10-23 17:50:16.683 I/ReactNativeJS(18100):        status: 'online',
10-23 17:50:16.683 I/ReactNativeJS(18100):        verified: true } ] }
10-23 17:50:16.684 I/ReactNativeJS(18100): '≡ƒôì [DRIVER-SERVICE] Step 2: Getting locations for user IDs:', [ '16011178-decf-4de3-beae-94ca46ce9258',
10-23 17:50:16.684 I/ReactNativeJS(18100):   'ae53a792-6aed-4186-823d-61c34c6defe2',
10-23 17:50:16.684 I/ReactNativeJS(18100):   'e6145579-4f5a-439f-b929-fa478580c049',
10-23 17:50:16.684 I/ReactNativeJS(18100):   '5d6651c8-2e3f-44e7-b4a1-0056c1d5315b',
10-23 17:50:16.684 I/ReactNativeJS(18100):   '6150ee57-77e5-45f7-b6c7-a586f22f2af8',
10-23 17:50:16.684 I/ReactNativeJS(18100):   'dc475d27-6167-4695-a014-dcb8d160b4c6',
10-23 17:50:16.684 I/ReactNativeJS(18100):   '550e8400-e29b-41d4-a716-446655440001',
10-23 17:50:16.684 I/ReactNativeJS(18100):   '550e8400-e29b-41d4-a716-446655440002',
10-23 17:50:16.684 I/ReactNativeJS(18100):   '6c03a657-c3e4-466e-b49c-324c2d051ce9',
10-23 17:50:16.684 I/ReactNativeJS(18100):   '550e8400-e29b-41d4-a716-446655440003',
10-23 17:50:16.684 I/ReactNativeJS(18100):   '550e8400-e29b-41d4-a716-446655440004',
10-23 17:50:16.684 I/ReactNativeJS(18100):   '550e8400-e29b-41d4-a716-446655440005',
10-23 17:50:16.684 I/ReactNativeJS(18100):   '892d8e0d-7ca5-4dd8-9979-539f394538f2',
10-23 17:50:16.684 I/ReactNativeJS(18100):   'cb735787-e96d-4d1d-9975-c112e75dfabd',
10-23 17:50:16.684 I/ReactNativeJS(18100):   'fdd94862-18e4-49d4-b6c0-8b9f73c8ff8c',
10-23 17:50:16.684 I/ReactNativeJS(18100):   '539b06c9-4e24-49a4-b307-3fb3f9dc39da',
10-23 17:50:16.684 I/ReactNativeJS(18100):   'b12c8a48-05b3-475a-b042-4810aee4e918',
10-23 17:50:16.684 I/ReactNativeJS(18100):   'f5e495f1-75a4-4ce1-bb60-4adfc348b8fc',
10-23 17:50:16.684 I/ReactNativeJS(18100):   'ed59084b-f517-4da3-814c-a314cdd8b4c6',
10-23 17:50:16.684 I/ReactNativeJS(18100):   '1c4ac410-54d8-4b5e-960b-3afcbebd115d',
10-23 17:50:16.684 I/ReactNativeJS(18100):   '411ee301-8ffc-4874-86e9-37716951bc4d' ]
10-23 17:50:16.701 I/ReactNativeJS(18100): '≡ƒôè [DRIVER-SERVICE] Found drivers:', { total: 21,
10-23 17:50:16.701 I/ReactNativeJS(18100):   details:
10-23 17:50:16.701 I/ReactNativeJS(18100):    [ { id: '22480cc3-665c-407e-ad8a-8eafde67706b',
10-23 17:50:16.701 I/ReactNativeJS(18100):        user_id: '16011178-decf-4de3-beae-94ca46ce9258',
10-23 17:50:16.701 I/ReactNativeJS(18100):        name: undefined,
10-23 17:50:16.701 I/ReactNativeJS(18100):        vehicle_type: 'hatchback',
10-23 17:50:16.701 I/ReactNativeJS(18100):        status: 'online',
10-23 17:50:16.701 I/ReactNativeJS(18100):        verified: true },
10-23 17:50:16.701 I/ReactNativeJS(18100):      { id: '76b66a88-dff9-4965-9e36-8a92023f155d',
10-23 17:50:16.701 I/ReactNativeJS(18100):        user_id: 'ae53a792-6aed-4186-823d-61c34c6defe2',
10-23 17:50:16.701 I/ReactNativeJS(18100):        name: undefined,
10-23 17:50:16.701 I/ReactNativeJS(18100):        vehicle_type: 'sedan',
10-23 17:50:16.701 I/ReactNativeJS(18100):        status: 'online',
10-23 17:50:16.701 I/ReactNativeJS(18100):        verified: true },
10-23 17:50:16.701 I/ReactNativeJS(18100):      { id: '6f55e87b-6558-48df-af8c-d69190918b32',
10-23 17:50:16.701 I/ReactNativeJS(18100):        user_id: 'e6145579-4f5a-439f-b929-fa478580c049',
10-23 17:50:16.701 I/ReactNativeJS(18100):        name: undefined,
10-23 17:50:16.701 I/ReactNativeJS(18100):        vehicle_type: 'hatchback',
10-23 17:50:16.701 I/ReactNativeJS(18100):        status: 'online',
10-23 17:50:16.701 I/ReactNativeJS(18100):        verified: true },
10-23 17:50:16.701 I/ReactNativeJS(18100):      { id: '97a4ba58-9431-48e5-ac8f-3472b8357179',
10-23 17:50:16.701 I/ReactNativeJS(18100):        user_id: '5d6651c8-2e3f-44e7-b4a1-0056c1d5315b',
10-23 17:50:16.701 I/ReactNativeJS(18100):        name: undefined,
10-23 17:50:16.701 I/ReactNativeJS(18100):        vehicle_type: 'sedan_ac',
10-23 17:50:16.701 I/ReactNativeJS(18100):        status: 'online',
10-23 17:50:16.701 I/ReactNativeJS(18100):        verified: true },
10-23 17:50:16.701 I/ReactNativeJS(18100):      { id: 'c568b21d-0975-4388-a9fb-cc00013b6d4f',
10-23 17:50:16.701 I/ReactNativeJS(18100):        user_id: '6150ee57-77e5-45f7-b6c7-a586f22f2af8',
10-23 17:50:16.701 I/ReactNativeJS(18100):        name: undefined,
10-23 17:50:16.701 I/ReactNativeJS(18100):        vehicle_type: 'sedan',
10-23 17:50:16.701 I/ReactNativeJS(18100):        status: 'online',
10-23 17:50:16.701 I/ReactNativeJS(18100):        verified: true },
10-23 17:50:16.701 I/ReactNativeJS(18100):      { id: '7055c2f9-99fa-4d96-bc6c-079b5cda6f56',
10-23 17:50:16.701 I/ReactNativeJS(18100):        user_id: 'dc475d27-6167-4695-a014-dcb8d160b4c6',
10-23 17:50:16.701 I/ReactNativeJS(18100):        name: undefined,
10-23 17:50:16.701 I/ReactNativeJS(18100):        vehicle_type: 'hatchback',
10-23 17:50:16.701 I/ReactNativeJS(18100):        status: 'online',
10-23 17:50:16.701 I/ReactNativeJS(18100):        verified: true },
10-23 17:50:16.701 I/ReactNativeJS(18100):      { id: '770e8400-e29b-41d4-a716-446655440001',
10-23 17:50:16.701 I/ReactNativeJS(18100):        user_id: '550e8400-e29b-41d4-a716-446655440001',
10-23 17:50:16.701 I/ReactNativeJS(18100):        name: undefined,
10-23 17:50:16.701 I/ReactNativeJS(18100):        vehicle_type: 'hatchback',
10-23 17:50:16.701 I/ReactNativeJS(18100):        status: 'online',
10-23 17:50:16.701 I/ReactNativeJS(18100):        verified: true },
10-23 17:50:16.701 I/ReactNativeJS(18100):      { id: '770e8400-e29b-41d4-a716-446655440002',
10-23 17:50:16.701 I/ReactNativeJS(18100):        user_id: '550e8400-e29b-41d4-a716-446655440002',
10-23 17:50:16.701 I/ReactNativeJS(18100):        name: undefined,
10-23 17:50:16.701 I/ReactNativeJS(18100):        vehicle_type: 'sedan',
10-23 17:50:16.701 I/ReactNativeJS(18100):        status: 'online',
10-23 17:50:16.701 I/ReactNativeJS(18100):        verified: true },
10-23 17:50:16.701 I/ReactNativeJS(18100):      { id: '43d81d7d-e647-46cf-8599-11f63996b03e',
10-23 17:50:16.701 I/ReactNativeJS(18100):        user_id: '6c03a657-c3e4-466e-b49c-324c2d051ce9',
10-23 17:50:16.701 I/ReactNativeJS(18100):        name: undefined,
10-23 17:50:16.701 I/ReactNativeJS(18100):        vehicle_type: 'sedan_ac',
10-23 17:50:16.701 I/ReactNativeJS(18100):        status: 'online',
10-23 17:50:16.701 I/ReactNativeJS(18100):        verified: true },
10-23 17:50:16.701 I/ReactNativeJS(18100):      { id: '770e8400-e29b-41d4-a716-446655440003',
10-23 17:50:16.701 I/ReactNativeJS(18100):        user_id: '550e8400-e29b-41d4-a716-446655440003',
10-23 17:50:16.701 I/ReactNativeJS(18100):        name: undefined,
10-23 17:50:16.701 I/ReactNativeJS(18100):        vehicle_type: 'suv',
10-23 17:50:16.701 I/ReactNativeJS(18100):        status: 'online',
10-23 17:50:16.701 I/ReactNativeJS(18100):        verified: true },
10-23 17:50:16.701 I/ReactNativeJS(18100):      { id: '770e8400-e29b-41d4-a716-446655440004',
10-23 17:50:16.701 I/ReactNativeJS(18100):        user_id: '550e8400-e29b-41d4-a716-446655440004',
10-23 17:50:16.701 I/ReactNativeJS(18100):        name: undefined,
10-23 17:50:16.701 I/ReactNativeJS(18100):        vehicle_type: 'sedan',
10-23 17:50:16.701 I/ReactNativeJS(18100):        status: 'online',
10-23 17:50:16.701 I/ReactNativeJS(18100):        verified: true },
10-23 17:50:16.701 I/ReactNativeJS(18100):      { id: '770e8400-e29b-41d4-a716-446655440005',
10-23 17:50:16.701 I/ReactNativeJS(18100):        user_id: '550e8400-e29b-41d4-a716-446655440005',
10-23 17:50:16.701 I/ReactNativeJS(18100):        name: undefined,
10-23 17:50:16.701 I/ReactNativeJS(18100):        vehicle_type: 'hatchback',
10-23 17:50:16.701 I/ReactNativeJS(18100):        status: 'online',
10-23 17:50:16.701 I/ReactNativeJS(18100):        verified: true },
10-23 17:50:16.701 I/ReactNativeJS(18100):      { id: '489b94a7-777b-4e11-ba5c-17e0a3173737',
10-23 17:50:16.701 I/ReactNativeJS(18100):        user_id: '892d8e0d-7ca5-4dd8-9979-539f394538f2',
10-23 17:50:16.701 I/ReactNativeJS(18100):        name: undefined,
10-23 17:50:16.701 I/ReactNativeJS(18100):        vehicle_type: 'hatchback',
10-23 17:50:16.701 I/ReactNativeJS(18100):        status: 'online',
10-23 17:50:16.701 I/ReactNativeJS(18100):        verified: true },
10-23 17:50:16.701 I/ReactNativeJS(18100):      { id: 'd7b4a339-2ba5-45ed-a2ec-238548a8eab6',
10-23 17:50:16.701 I/ReactNativeJS(18100):        user_id: 'cb735787-e96d-4d1d-9975-c112e75dfabd',
10-23 17:50:16.701 I/ReactNativeJS(18100):        name: undefined,
10-23 17:50:16.701 I/ReactNativeJS(18100):        vehicle_type: 'hatchback_ac',
10-23 17:50:16.701 I/ReactNativeJS(18100):        status: 'online',
10-23 17:50:16.701 I/ReactNativeJS(18100):        verified: true },
10-23 17:50:16.701 I/ReactNativeJS(18100):      { id: '38ee94d8-ac2d-450e-8084-0bef654546d7',
10-23 17:50:16.701 I/ReactNativeJS(18100):        user_id: 'fdd94862-18e4-49d4-b6c0-8b9f73c8ff8c',
10-23 17:50:16.701 I/ReactNativeJS(18100):        name: undefined,
10-23 17:50:16.701 I/ReactNativeJS(18100):        vehicle_type: 'sedan',
10-23 17:50:16.701 I/ReactNativeJS(18100):        status: 'online',
10-23 17:50:16.701 I/ReactNativeJS(18100):        verified: true },
10-23 17:50:16.701 I/ReactNativeJS(18100):      { id: 'b4613ecf-44b5-49ba-8613-f8993b6db1d6',
10-23 17:50:16.701 I/ReactNativeJS(18100):        user_id: '539b06c9-4e24-49a4-b307-3fb3f9dc39da',
10-23 17:50:16.701 I/ReactNativeJS(18100):        name: undefined,
10-23 17:50:16.701 I/ReactNativeJS(18100):        vehicle_type: 'sedan',
10-23 17:50:16.701 I/ReactNativeJS(18100):        status: 'online',
10-23 17:50:16.701 I/ReactNativeJS(18100):        verified: true },
10-23 17:50:16.701 I/ReactNativeJS(18100):      { id: '631f4ab4-c643-45a8-addd-541595b0fe86',
10-23 17:50:16.701 I/ReactNativeJS(18100):        user_id: 'b12c8a48-05b3-475a-b042-4810aee4e918',
10-23 17:50:16.701 I/ReactNativeJS(18100):        name: undefined,
10-23 17:50:16.701 I/ReactNativeJS(18100):        vehicle_type: 'suv',
10-23 17:50:16.701 I/ReactNativeJS(18100):        status: 'online',
10-23 17:50:16.701 I/ReactNativeJS(18100):        verified: true },
10-23 17:50:16.701 I/ReactNativeJS(18100):      { id: '0330d75a-67b0-4b12-b9b7-22a241af9c57',
10-23 17:50:16.701 I/ReactNativeJS(18100):        user_id: 'f5e495f1-75a4-4ce1-bb60-4adfc348b8fc',
10-23 17:50:16.701 I/ReactNativeJS(18100):        name: undefined,
10-23 17:50:16.701 I/ReactNativeJS(18100):        vehicle_type: 'sedan',
10-23 17:50:16.701 I/ReactNativeJS(18100):        status: 'online',
10-23 17:50:16.701 I/ReactNativeJS(18100):        verified: true },
10-23 17:50:16.701 I/ReactNativeJS(18100):      { id: '707e2d38-7346-4a2e-bddb-e1157475f786',
10-23 17:50:16.701 I/ReactNativeJS(18100):        user_id: 'ed59084b-f517-4da3-814c-a314cdd8b4c6',
10-23 17:50:16.701 I/ReactNativeJS(18100):        name: undefined,
10-23 17:50:16.701 I/ReactNativeJS(18100):        vehicle_type: 'sedan',
10-23 17:50:16.701 I/ReactNativeJS(18100):        status: 'online',
10-23 17:50:16.701 I/ReactNativeJS(18100):        verified: true },
10-23 17:50:16.701 I/ReactNativeJS(18100):      { id: 'eb91d7e5-e2f2-4021-a8c8-3739a3d4cae4',
10-23 17:50:16.701 I/ReactNativeJS(18100):        user_id: '1c4ac410-54d8-4b5e-960b-3afcbebd115d',
10-23 17:50:16.701 I/ReactNativeJS(18100):        name: undefined,
10-23 17:50:16.701 I/ReactNativeJS(18100):        vehicle_type: 'sedan',
10-23 17:50:16.701 I/ReactNativeJS(18100):        status: 'online',
10-23 17:50:16.701 I/ReactNativeJS(18100):        verified: true },
10-23 17:50:16.701 I/ReactNativeJS(18100):      { id: '058f85df-35b3-4027-81a1-bd52a0df8e4a',
10-23 17:50:16.701 I/ReactNativeJS(18100):        user_id: '411ee301-8ffc-4874-86e9-37716951bc4d',
10-23 17:50:16.701 I/ReactNativeJS(18100):        name: undefined,
10-23 17:50:16.701 I/ReactNativeJS(18100):        vehicle_type: 'suv_ac',
10-23 17:50:16.701 I/ReactNativeJS(18100):        status: 'online',
10-23 17:50:16.701 I/ReactNativeJS(18100):        verified: true } ] }
10-23 17:50:16.702 I/ReactNativeJS(18100): '≡ƒôì [DRIVER-SERVICE] Step 2: Getting locations for user IDs:', [ '16011178-decf-4de3-beae-94ca46ce9258',
10-23 17:50:16.702 I/ReactNativeJS(18100):   'ae53a792-6aed-4186-823d-61c34c6defe2',
10-23 17:50:16.702 I/ReactNativeJS(18100):   'e6145579-4f5a-439f-b929-fa478580c049',
10-23 17:50:16.702 I/ReactNativeJS(18100):   '5d6651c8-2e3f-44e7-b4a1-0056c1d5315b',
10-23 17:50:16.702 I/ReactNativeJS(18100):   '6150ee57-77e5-45f7-b6c7-a586f22f2af8',
10-23 17:50:16.702 I/ReactNativeJS(18100):   'dc475d27-6167-4695-a014-dcb8d160b4c6',
10-23 17:50:16.702 I/ReactNativeJS(18100):   '550e8400-e29b-41d4-a716-446655440001',
10-23 17:50:16.702 I/ReactNativeJS(18100):   '550e8400-e29b-41d4-a716-446655440002',
10-23 17:50:16.702 I/ReactNativeJS(18100):   '6c03a657-c3e4-466e-b49c-324c2d051ce9',
10-23 17:50:16.702 I/ReactNativeJS(18100):   '550e8400-e29b-41d4-a716-446655440003',
10-23 17:50:16.702 I/ReactNativeJS(18100):   '550e8400-e29b-41d4-a716-446655440004',
10-23 17:50:16.702 I/ReactNativeJS(18100):   '550e8400-e29b-41d4-a716-446655440005',
10-23 17:50:16.702 I/ReactNativeJS(18100):   '892d8e0d-7ca5-4dd8-9979-539f394538f2',
10-23 17:50:16.702 I/ReactNativeJS(18100):   'cb735787-e96d-4d1d-9975-c112e75dfabd',
10-23 17:50:16.702 I/ReactNativeJS(18100):   'fdd94862-18e4-49d4-b6c0-8b9f73c8ff8c',
10-23 17:50:16.702 I/ReactNativeJS(18100):   '539b06c9-4e24-49a4-b307-3fb3f9dc39da',
10-23 17:50:16.702 I/ReactNativeJS(18100):   'b12c8a48-05b3-475a-b042-4810aee4e918',
10-23 17:50:16.702 I/ReactNativeJS(18100):   'f5e495f1-75a4-4ce1-bb60-4adfc348b8fc',
10-23 17:50:16.702 I/ReactNativeJS(18100):   'ed59084b-f517-4da3-814c-a314cdd8b4c6',
10-23 17:50:16.702 I/ReactNativeJS(18100):   '1c4ac410-54d8-4b5e-960b-3afcbebd115d',
10-23 17:50:16.702 I/ReactNativeJS(18100):   '411ee301-8ffc-4874-86e9-37716951bc4d' ]
10-23 17:50:16.710 W/ReactNativeJS(18100): 'ΓÜá∩╕Å [DRIVER-SERVICE] Edge function failed, using direct database access:', 'Edge function failed: 500 - {"code":"WORKER_ERROR","message":"Function exited due to an error (please check logs)"}'
10-23 17:50:16.710 I/ReactNativeJS(18100): ≡ƒöì [DRIVER-SERVICE] ===== USING DIRECT DATABASE ACCESS =====
10-23 17:50:16.711 I/ReactNativeJS(18100): '≡ƒöì [DRIVER-SERVICE] Parameters:', { customerLocation: { lat: 12.7486283, lng: 77.8299733 },
10-23 17:50:16.711 I/ReactNativeJS(18100):   radius: '10km',
10-23 17:50:16.711 I/ReactNativeJS(18100):   vehicleType: 'all' }
10-23 17:50:16.711 I/ReactNativeJS(18100): ≡ƒôè [DRIVER-SERVICE] Step 1: Fetching online verified drivers...
10-23 17:50:16.924 I/ReactNativeJS(18100): '≡ƒôì [DRIVER-SERVICE] Found locations:', { total: 1,
10-23 17:50:16.924 I/ReactNativeJS(18100):   details:
10-23 17:50:16.924 I/ReactNativeJS(18100):    [ { user_id: '1c4ac410-54d8-4b5e-960b-3afcbebd115d',
10-23 17:50:16.924 I/ReactNativeJS(18100):        coordinates: { lat: 12.7486296, lng: 77.8299689 },
10-23 17:50:16.924 I/ReactNativeJS(18100):        updated_at: '2025-10-23T12:18:41.271673+00:00',
10-23 17:50:16.924 I/ReactNativeJS(18100):        age_minutes: 2 } ] }
10-23 17:50:16.925 I/ReactNativeJS(18100): ≡ƒöì [DRIVER-SERVICE] Step 3: Processing drivers with distance calculation...
10-23 17:50:16.925 I/ReactNativeJS(18100): '≡ƒöì [DRIVER-SERVICE] Customer coordinates for distance calc:', { lat: 12.7486283,
10-23 17:50:16.925 I/ReactNativeJS(18100):   lng: 77.8299733,
10-23 17:50:16.925 I/ReactNativeJS(18100):   type: 'number',
10-23 17:50:16.925 I/ReactNativeJS(18100):   isValid: true }
10-23 17:50:16.925 I/ReactNativeJS(18100): Γ¥î [DRIVER-SERVICE] Driver 22480cc3-665c-407e-ad8a-8eafde67706b (undefined) skipped: no recent location
10-23 17:50:16.925 I/ReactNativeJS(18100): Γ¥î [DRIVER-SERVICE] Driver 76b66a88-dff9-4965-9e36-8a92023f155d (undefined) skipped: no recent location
10-23 17:50:16.926 I/ReactNativeJS(18100): Γ¥î [DRIVER-SERVICE] Driver 6f55e87b-6558-48df-af8c-d69190918b32 (undefined) skipped: no recent location
10-23 17:50:16.926 I/ReactNativeJS(18100): Γ¥î [DRIVER-SERVICE] Driver 97a4ba58-9431-48e5-ac8f-3472b8357179 (undefined) skipped: no recent location
10-23 17:50:16.926 I/ReactNativeJS(18100): Γ¥î [DRIVER-SERVICE] Driver c568b21d-0975-4388-a9fb-cc00013b6d4f (undefined) skipped: no recent location
10-23 17:50:16.926 I/ReactNativeJS(18100): Γ¥î [DRIVER-SERVICE] Driver 7055c2f9-99fa-4d96-bc6c-079b5cda6f56 (undefined) skipped: no recent location
10-23 17:50:16.926 I/ReactNativeJS(18100): Γ¥î [DRIVER-SERVICE] Driver 770e8400-e29b-41d4-a716-446655440001 (undefined) skipped: no recent location
10-23 17:50:16.926 I/ReactNativeJS(18100): Γ¥î [DRIVER-SERVICE] Driver 770e8400-e29b-41d4-a716-446655440002 (undefined) skipped: no recent location
10-23 17:50:16.926 I/ReactNativeJS(18100): Γ¥î [DRIVER-SERVICE] Driver 43d81d7d-e647-46cf-8599-11f63996b03e (undefined) skipped: no recent location
10-23 17:50:16.926 I/ReactNativeJS(18100): Γ¥î [DRIVER-SERVICE] Driver 770e8400-e29b-41d4-a716-446655440003 (undefined) skipped: no recent location
10-23 17:50:16.926 I/ReactNativeJS(18100): Γ¥î [DRIVER-SERVICE] Driver 770e8400-e29b-41d4-a716-446655440004 (undefined) skipped: no recent location
10-23 17:50:16.926 I/ReactNativeJS(18100): Γ¥î [DRIVER-SERVICE] Driver 770e8400-e29b-41d4-a716-446655440005 (undefined) skipped: no recent location
10-23 17:50:16.926 I/ReactNativeJS(18100): Γ¥î [DRIVER-SERVICE] Driver 489b94a7-777b-4e11-ba5c-17e0a3173737 (undefined) skipped: no recent location
10-23 17:50:16.926 I/ReactNativeJS(18100): Γ¥î [DRIVER-SERVICE] Driver d7b4a339-2ba5-45ed-a2ec-238548a8eab6 (undefined) skipped: no recent location
10-23 17:50:16.926 I/ReactNativeJS(18100): Γ¥î [DRIVER-SERVICE] Driver 38ee94d8-ac2d-450e-8084-0bef654546d7 (undefined) skipped: no recent location
10-23 17:50:16.926 I/ReactNativeJS(18100): Γ¥î [DRIVER-SERVICE] Driver b4613ecf-44b5-49ba-8613-f8993b6db1d6 (undefined) skipped: no recent location
10-23 17:50:16.926 I/ReactNativeJS(18100): Γ¥î [DRIVER-SERVICE] Driver 631f4ab4-c643-45a8-addd-541595b0fe86 (undefined) skipped: no recent location
10-23 17:50:16.926 I/ReactNativeJS(18100): Γ¥î [DRIVER-SERVICE] Driver 0330d75a-67b0-4b12-b9b7-22a241af9c57 (undefined) skipped: no recent location
10-23 17:50:16.926 I/ReactNativeJS(18100): Γ¥î [DRIVER-SERVICE] Driver 707e2d38-7346-4a2e-bddb-e1157475f786 (undefined) skipped: no recent location
10-23 17:50:16.926 I/ReactNativeJS(18100): ≡ƒÜù [DRIVER-SERVICE] Driver eb91d7e5-e2f2-4021-a8c8-3739a3d4cae4 (undefined) vehicle type: sedan
10-23 17:50:16.926 I/ReactNativeJS(18100): ≡ƒôÉ [DISTANCE-SERVICE] ===== DISTANCE CALCULATION DEBUG =====
10-23 17:50:16.927 I/ReactNativeJS(18100): '≡ƒôÉ [DISTANCE-SERVICE] Raw inputs:', { lat1: 12.7486283,
10-23 17:50:16.927 I/ReactNativeJS(18100):   lon1: 77.8299733,
10-23 17:50:16.927 I/ReactNativeJS(18100):   lat2: 12.7486296,
10-23 17:50:16.927 I/ReactNativeJS(18100):   lon2: 77.8299689 }
10-23 17:50:16.927 I/ReactNativeJS(18100): '≡ƒôÉ [DISTANCE-SERVICE] Converted inputs:', { latitude1: 12.7486283,
10-23 17:50:16.927 I/ReactNativeJS(18100):   longitude1: 77.8299733,
10-23 17:50:16.927 I/ReactNativeJS(18100):   latitude2: 12.7486296,
10-23 17:50:16.927 I/ReactNativeJS(18100):   longitude2: 77.8299689 }
10-23 17:50:16.927 I/ReactNativeJS(18100): '≡ƒôÉ [DISTANCE-SERVICE] Coordinate differences:', { lat_diff: 0.000001299999999204715,
10-23 17:50:16.927 I/ReactNativeJS(18100):   lng_diff: 0.0000044000000087862645,
10-23 17:50:16.927 I/ReactNativeJS(18100):   very_close: true,
10-23 17:50:16.927 I/ReactNativeJS(18100):   essentially_same: true }
10-23 17:50:16.927 I/ReactNativeJS(18100): ≡ƒôÉ [DISTANCE-SERVICE] Coordinates are essentially the same, returning 0km
10-23 17:50:16.928 I/ReactNativeJS(18100): '≡ƒôÅ [DRIVER-SERVICE] Distance for driver eb91d7e5-e2f2-4021-a8c8-3739a3d4cae4 (undefined):', { distance_km: '0.0000',
10-23 17:50:16.928 I/ReactNativeJS(18100):   within_radius: true,
10-23 17:50:16.928 I/ReactNativeJS(18100):   radius_limit: '10km',
10-23 17:50:16.928 I/ReactNativeJS(18100):   driver_coords: { lat: 12.7486296, lng: 77.8299689 },
10-23 17:50:16.928 I/ReactNativeJS(18100):   customer_coords: { lat: 12.7486283, lng: 77.8299733 } }
10-23 17:50:16.928 I/ReactNativeJS(18100): Γ£à [DRIVER-SERVICE] Driver eb91d7e5-e2f2-4021-a8c8-3739a3d4cae4 (undefined) INCLUDED: 0.0000km
10-23 17:50:16.928 I/ReactNativeJS(18100): Γ¥î [DRIVER-SERVICE] Driver 058f85df-35b3-4027-81a1-bd52a0df8e4a (undefined) skipped: no recent location
10-23 17:50:16.928 I/ReactNativeJS(18100): ≡ƒôè [DRIVER-SERVICE] ===== DIRECT DATABASE ACCESS RESULT =====
10-23 17:50:16.928 I/ReactNativeJS(18100): '≡ƒôè [DRIVER-SERVICE] Final summary:', { total_drivers_processed: 21,
10-23 17:50:16.928 I/ReactNativeJS(18100):   available_drivers_found: 1,
10-23 17:50:16.928 I/ReactNativeJS(18100):   customer_location: { lat: 12.7486283, lng: 77.8299733 },
10-23 17:50:16.928 I/ReactNativeJS(18100):   radius_km: 10,
10-23 17:50:16.928 I/ReactNativeJS(18100):   vehicle_type_filter: 'all (no filter applied)' }
10-23 17:50:16.929 I/ReactNativeJS(18100): '≡ƒöä [DRIVER-SERVICE] Initial fetch completed:', 1, 'drivers'
10-23 17:50:16.929 I/ReactNativeJS(18100): '≡ƒôì [HOME] Received driver locations update:', 1, 'drivers'
10-23 17:50:16.931 W/ReactNativeJS(18100): ≡ƒÅá [HOME] ===== RENDERING HOME SCREEN =====
10-23 17:50:16.931 W/ReactNativeJS(18100): '≡ƒÅá [HOME] currentLocation:', '{"altitude":771.7999877929688,"heading":0,"altitudeAccuracy":1.3241634368896484,"latitude":12.7486283,"speed":0,"longitude":77.8299733,"accuracy":2.200000047683716}'
10-23 17:50:16.931 W/ReactNativeJS(18100): '≡ƒÅá [HOME] pickupCoords:', '{"latitude":12.7486283,"longitude":77.8299733}'
10-23 17:50:16.931 W/ReactNativeJS(18100): '≡ƒÅá [HOME] destinationCoords:', 'null'
10-23 17:50:16.931 W/ReactNativeJS(18100): '≡ƒÅá [HOME] pickupLocation text:', 'PRXJ+F32, Brindavan Nagar, Plot 87, NGGO\'s Colony, Anand Nagar, Hosur, Tamil Nadu 635109, India'
10-23 17:50:16.932 W/ReactNativeJS(18100): '≡ƒÅá [HOME] availableDrivers count:', 1
10-23 17:50:16.932 W/ReactNativeJS(18100): '≡ƒÅá [HOME] showDriversOnMap:', true
10-23 17:50:16.932 I/ReactNativeJS(18100): '≡ƒÅá≡ƒÅá≡ƒÅá [HOME-V2] ABOUT TO RENDER SimpleHosurMap with props:', { hasUserLocation: true,
10-23 17:50:16.932 I/ReactNativeJS(18100):   hasPickup: true,
10-23 17:50:16.932 I/ReactNativeJS(18100):   hasDestination: false,
10-23 17:50:16.932 I/ReactNativeJS(18100):   showDriversOnMap: true,
10-23 17:50:16.932 I/ReactNativeJS(18100):   timestamp: '2025-10-23T12:20:16.932Z' }
10-23 17:50:16.932 I/ReactNativeJS(18100): ≡ƒº¬≡ƒº¬≡ƒº¬ TEST MAP RENDERING NOW
10-23 17:50:16.933 I/ReactNativeJS(18100): '≡ƒº¬ Props received:', [ 'userLocation',
10-23 17:50:16.933 I/ReactNativeJS(18100):   'pickupLocation',
10-23 17:50:16.933 I/ReactNativeJS(18100):   'destinationLocation',
10-23 17:50:16.933 I/ReactNativeJS(18100):   'onRegionChangeComplete',
10-23 17:50:16.933 I/ReactNativeJS(18100):   'onDestinationDragEnd',
10-23 17:50:16.933 I/ReactNativeJS(18100):   'showCenteredPin',
10-23 17:50:16.933 I/ReactNativeJS(18100):   'availableDrivers',
10-23 17:50:16.933 I/ReactNativeJS(18100):   'showDrivers' ]
10-23 17:50:16.946 I/ReactNativeJS(18100): ≡ƒôè [HOME] ===== AVAILABLE DRIVERS STATE CHANGED =====
10-23 17:50:16.947 I/ReactNativeJS(18100): '≡ƒôè [HOME] availableDrivers state update:', { count: 1,
10-23 17:50:16.947 I/ReactNativeJS(18100):   showDriversOnMap: true,
10-23 17:50:16.947 I/ReactNativeJS(18100):   driversPassedToMap: 1,
10-23 17:50:16.947 I/ReactNativeJS(18100):   drivers:
10-23 17:50:16.947 I/ReactNativeJS(18100):    [ { id: 'eb91d7e5-e2f2-4021-a8c8-3739a3d4cae4',
10-23 17:50:16.947 I/ReactNativeJS(18100):        vehicle_type: 'sedan',
10-23 17:50:16.947 I/ReactNativeJS(18100):        distance: '0.00km',
10-23 17:50:16.947 I/ReactNativeJS(18100):        coordinates: { lat: 12.7486296, lng: 77.8299689 },
10-23 17:50:16.947 I/ReactNativeJS(18100):        heading: null,
10-23 17:50:16.947 I/ReactNativeJS(18100):        rating: 5 } ] }
10-23 17:50:16.947 I/ReactNativeJS(18100): ≡ƒù║∩╕Å [HOME] ===== DRIVERS BEING PASSED TO MAP =====
10-23 17:50:16.947 I/ReactNativeJS(18100): '≡ƒù║∩╕Å [HOME] Map will receive', 1, 'drivers:'
10-23 17:50:16.947 I/ReactNativeJS(18100): '≡ƒù║∩╕Å [HOME] Driver 1 for map:', { driver_id: 'eb91d7e5-e2f2-4021-a8c8-3739a3d4cae4',
10-23 17:50:16.947 I/ReactNativeJS(18100):   user_id: '1c4ac410-54d8-4b5e-960b-3afcbebd115d',
10-23 17:50:16.947 I/ReactNativeJS(18100):   vehicle_type: 'sedan',
10-23 17:50:16.947 I/ReactNativeJS(18100):   coordinates: { lat: 12.7486296, lng: 77.8299689 },
10-23 17:50:16.947 I/ReactNativeJS(18100):   distance: '0.0000km',
10-23 17:50:16.947 I/ReactNativeJS(18100):   rating: 5,
10-23 17:50:16.947 I/ReactNativeJS(18100):   heading: null,
10-23 17:50:16.947 I/ReactNativeJS(18100):   updated_at: '2025-10-23T12:18:41.271673+00:00' }
10-23 17:50:16.950 I/ReactNativeJS(18100): '≡ƒôì [DRIVER-SERVICE] Found locations:', { total: 1,
10-23 17:50:16.950 I/ReactNativeJS(18100):   details:
10-23 17:50:16.950 I/ReactNativeJS(18100):    [ { user_id: '1c4ac410-54d8-4b5e-960b-3afcbebd115d',
10-23 17:50:16.950 I/ReactNativeJS(18100):        coordinates: { lat: 12.7486296, lng: 77.8299689 },
10-23 17:50:16.950 I/ReactNativeJS(18100):        updated_at: '2025-10-23T12:18:41.271673+00:00',
10-23 17:50:16.950 I/ReactNativeJS(18100):        age_minutes: 2 } ] }
10-23 17:50:16.950 I/ReactNativeJS(18100): ≡ƒöì [DRIVER-SERVICE] Step 3: Processing drivers with distance calculation...
10-23 17:50:16.950 I/ReactNativeJS(18100): '≡ƒöì [DRIVER-SERVICE] Customer coordinates for distance calc:', { lat: 12.7486283,
10-23 17:50:16.950 I/ReactNativeJS(18100):   lng: 77.8299733,
10-23 17:50:16.950 I/ReactNativeJS(18100):   type: 'number',
10-23 17:50:16.950 I/ReactNativeJS(18100):   isValid: true }
10-23 17:50:16.950 I/ReactNativeJS(18100): Γ¥î [DRIVER-SERVICE] Driver 22480cc3-665c-407e-ad8a-8eafde67706b (undefined) skipped: no recent location
10-23 17:50:16.950 I/ReactNativeJS(18100): Γ¥î [DRIVER-SERVICE] Driver 76b66a88-dff9-4965-9e36-8a92023f155d (undefined) skipped: no recent location
10-23 17:50:16.950 I/ReactNativeJS(18100): Γ¥î [DRIVER-SERVICE] Driver 6f55e87b-6558-48df-af8c-d69190918b32 (undefined) skipped: no recent location
10-23 17:50:16.950 I/ReactNativeJS(18100): Γ¥î [DRIVER-SERVICE] Driver 97a4ba58-9431-48e5-ac8f-3472b8357179 (undefined) skipped: no recent location
10-23 17:50:16.950 I/ReactNativeJS(18100): Γ¥î [DRIVER-SERVICE] Driver c568b21d-0975-4388-a9fb-cc00013b6d4f (undefined) skipped: no recent location
10-23 17:50:16.950 I/ReactNativeJS(18100): Γ¥î [DRIVER-SERVICE] Driver 7055c2f9-99fa-4d96-bc6c-079b5cda6f56 (undefined) skipped: no recent location
10-23 17:50:16.950 I/ReactNativeJS(18100): Γ¥î [DRIVER-SERVICE] Driver 770e8400-e29b-41d4-a716-446655440001 (undefined) skipped: no recent location
10-23 17:50:16.950 I/ReactNativeJS(18100): Γ¥î [DRIVER-SERVICE] Driver 770e8400-e29b-41d4-a716-446655440002 (undefined) skipped: no recent location
10-23 17:50:16.950 I/ReactNativeJS(18100): Γ¥î [DRIVER-SERVICE] Driver 43d81d7d-e647-46cf-8599-11f63996b03e (undefined) skipped: no recent location
10-23 17:50:16.950 I/ReactNativeJS(18100): Γ¥î [DRIVER-SERVICE] Driver 770e8400-e29b-41d4-a716-446655440003 (undefined) skipped: no recent location
10-23 17:50:16.950 I/ReactNativeJS(18100): Γ¥î [DRIVER-SERVICE] Driver 770e8400-e29b-41d4-a716-446655440004 (undefined) skipped: no recent location
10-23 17:50:16.950 I/ReactNativeJS(18100): Γ¥î [DRIVER-SERVICE] Driver 770e8400-e29b-41d4-a716-446655440005 (undefined) skipped: no recent location
10-23 17:50:16.950 I/ReactNativeJS(18100): Γ¥î [DRIVER-SERVICE] Driver 489b94a7-777b-4e11-ba5c-17e0a3173737 (undefined) skipped: no recent location
10-23 17:50:16.950 I/ReactNativeJS(18100): Γ¥î [DRIVER-SERVICE] Driver d7b4a339-2ba5-45ed-a2ec-238548a8eab6 (undefined) skipped: no recent location
10-23 17:50:16.950 I/ReactNativeJS(18100): Γ¥î [DRIVER-SERVICE] Driver 38ee94d8-ac2d-450e-8084-0bef654546d7 (undefined) skipped: no recent location
10-23 17:50:16.950 I/ReactNativeJS(18100): Γ¥î [DRIVER-SERVICE] Driver b4613ecf-44b5-49ba-8613-f8993b6db1d6 (undefined) skipped: no recent location
10-23 17:50:16.950 I/ReactNativeJS(18100): Γ¥î [DRIVER-SERVICE] Driver 631f4ab4-c643-45a8-addd-541595b0fe86 (undefined) skipped: no recent location
10-23 17:50:16.950 I/ReactNativeJS(18100): Γ¥î [DRIVER-SERVICE] Driver 0330d75a-67b0-4b12-b9b7-22a241af9c57 (undefined) skipped: no recent location
10-23 17:50:16.950 I/ReactNativeJS(18100): Γ¥î [DRIVER-SERVICE] Driver 707e2d38-7346-4a2e-bddb-e1157475f786 (undefined) skipped: no recent location
10-23 17:50:16.950 I/ReactNativeJS(18100): ≡ƒÜù [DRIVER-SERVICE] Driver eb91d7e5-e2f2-4021-a8c8-3739a3d4cae4 (undefined) vehicle type: sedan
10-23 17:50:16.950 I/ReactNativeJS(18100): ≡ƒôÉ [DISTANCE-SERVICE] ===== DISTANCE CALCULATION DEBUG =====
10-23 17:50:16.951 I/ReactNativeJS(18100): '≡ƒôÉ [DISTANCE-SERVICE] Raw inputs:', { lat1: 12.7486283,
10-23 17:50:16.951 I/ReactNativeJS(18100):   lon1: 77.8299733,
10-23 17:50:16.951 I/ReactNativeJS(18100):   lat2: 12.7486296,
10-23 17:50:16.951 I/ReactNativeJS(18100):   lon2: 77.8299689 }
10-23 17:50:16.951 I/ReactNativeJS(18100): '≡ƒôÉ [DISTANCE-SERVICE] Converted inputs:', { latitude1: 12.7486283,
10-23 17:50:16.951 I/ReactNativeJS(18100):   longitude1: 77.8299733,
10-23 17:50:16.951 I/ReactNativeJS(18100):   latitude2: 12.7486296,
10-23 17:50:16.951 I/ReactNativeJS(18100):   longitude2: 77.8299689 }
10-23 17:50:16.951 I/ReactNativeJS(18100): '≡ƒôÉ [DISTANCE-SERVICE] Coordinate differences:', { lat_diff: 0.000001299999999204715,
10-23 17:50:16.951 I/ReactNativeJS(18100):   lng_diff: 0.0000044000000087862645,
10-23 17:50:16.951 I/ReactNativeJS(18100):   very_close: true,
10-23 17:50:16.951 I/ReactNativeJS(18100):   essentially_same: true }
10-23 17:50:16.951 I/ReactNativeJS(18100): ≡ƒôÉ [DISTANCE-SERVICE] Coordinates are essentially the same, returning 0km
10-23 17:50:16.952 I/ReactNativeJS(18100): '≡ƒôÅ [DRIVER-SERVICE] Distance for driver eb91d7e5-e2f2-4021-a8c8-3739a3d4cae4 (undefined):', { distance_km: '0.0000',
10-23 17:50:16.952 I/ReactNativeJS(18100):   within_radius: true,
10-23 17:50:16.952 I/ReactNativeJS(18100):   radius_limit: '10km',
10-23 17:50:16.952 I/ReactNativeJS(18100):   driver_coords: { lat: 12.7486296, lng: 77.8299689 },
10-23 17:50:16.952 I/ReactNativeJS(18100):   customer_coords: { lat: 12.7486283, lng: 77.8299733 } }
10-23 17:50:16.952 I/ReactNativeJS(18100): Γ£à [DRIVER-SERVICE] Driver eb91d7e5-e2f2-4021-a8c8-3739a3d4cae4 (undefined) INCLUDED: 0.0000km
10-23 17:50:16.952 I/ReactNativeJS(18100): Γ¥î [DRIVER-SERVICE] Driver 058f85df-35b3-4027-81a1-bd52a0df8e4a (undefined) skipped: no recent location
10-23 17:50:16.952 I/ReactNativeJS(18100): ≡ƒôè [DRIVER-SERVICE] ===== DIRECT DATABASE ACCESS RESULT =====
10-23 17:50:16.952 I/ReactNativeJS(18100): '≡ƒôè [DRIVER-SERVICE] Final summary:', { total_drivers_processed: 21,
10-23 17:50:16.952 I/ReactNativeJS(18100):   available_drivers_found: 1,
10-23 17:50:16.952 I/ReactNativeJS(18100):   customer_location: { lat: 12.7486283, lng: 77.8299733 },
10-23 17:50:16.952 I/ReactNativeJS(18100):   radius_km: 10,
10-23 17:50:16.952 I/ReactNativeJS(18100):   vehicle_type_filter: 'all (no filter applied)' }
10-23 17:50:16.952 I/ReactNativeJS(18100): '≡ƒöä [DRIVER-SERVICE] Initial fetch completed:', 1, 'drivers'
10-23 17:50:16.952 I/ReactNativeJS(18100): '≡ƒôì [HOME] Received driver locations update:', 1, 'drivers'
10-23 17:50:16.955 W/ReactNativeJS(18100): ≡ƒÅá [HOME] ===== RENDERING HOME SCREEN =====
10-23 17:50:16.955 W/ReactNativeJS(18100): '≡ƒÅá [HOME] currentLocation:', '{"altitude":771.7999877929688,"heading":0,"altitudeAccuracy":1.3241634368896484,"latitude":12.7486283,"speed":0,"longitude":77.8299733,"accuracy":2.200000047683716}'
10-23 17:50:16.955 W/ReactNativeJS(18100): '≡ƒÅá [HOME] pickupCoords:', '{"latitude":12.7486283,"longitude":77.8299733}'
10-23 17:50:16.955 W/ReactNativeJS(18100): '≡ƒÅá [HOME] destinationCoords:', 'null'
10-23 17:50:16.955 W/ReactNativeJS(18100): '≡ƒÅá [HOME] pickupLocation text:', 'PRXJ+F32, Brindavan Nagar, Plot 87, NGGO\'s Colony, Anand Nagar, Hosur, Tamil Nadu 635109, India'
10-23 17:50:16.955 W/ReactNativeJS(18100): '≡ƒÅá [HOME] availableDrivers count:', 1
10-23 17:50:16.955 W/ReactNativeJS(18100): '≡ƒÅá [HOME] showDriversOnMap:', true
10-23 17:50:16.955 I/ReactNativeJS(18100): '≡ƒÅá≡ƒÅá≡ƒÅá [HOME-V2] ABOUT TO RENDER SimpleHosurMap with props:', { hasUserLocation: true,
10-23 17:50:16.955 I/ReactNativeJS(18100):   hasPickup: true,
10-23 17:50:16.955 I/ReactNativeJS(18100):   hasDestination: false,
10-23 17:50:16.955 I/ReactNativeJS(18100):   showDriversOnMap: true,
10-23 17:50:16.955 I/ReactNativeJS(18100):   timestamp: '2025-10-23T12:20:16.955Z' }
10-23 17:50:16.956 I/ReactNativeJS(18100): ≡ƒº¬≡ƒº¬≡ƒº¬ TEST MAP RENDERING NOW
10-23 17:50:16.956 I/ReactNativeJS(18100): '≡ƒº¬ Props received:', [ 'userLocation',
10-23 17:50:16.956 I/ReactNativeJS(18100):   'pickupLocation',
10-23 17:50:16.956 I/ReactNativeJS(18100):   'destinationLocation',
10-23 17:50:16.956 I/ReactNativeJS(18100):   'onRegionChangeComplete',
10-23 17:50:16.956 I/ReactNativeJS(18100):   'onDestinationDragEnd',
10-23 17:50:16.956 I/ReactNativeJS(18100):   'showCenteredPin',
10-23 17:50:16.956 I/ReactNativeJS(18100):   'availableDrivers',
10-23 17:50:16.956 I/ReactNativeJS(18100):   'showDrivers' ]
10-23 17:50:16.967 I/ReactNativeJS(18100): ≡ƒôè [HOME] ===== AVAILABLE DRIVERS STATE CHANGED =====
10-23 17:50:16.967 I/ReactNativeJS(18100): '≡ƒôè [HOME] availableDrivers state update:', { count: 1,
10-23 17:50:16.967 I/ReactNativeJS(18100):   showDriversOnMap: true,
10-23 17:50:16.967 I/ReactNativeJS(18100):   driversPassedToMap: 1,
10-23 17:50:16.967 I/ReactNativeJS(18100):   drivers:
10-23 17:50:16.967 I/ReactNativeJS(18100):    [ { id: 'eb91d7e5-e2f2-4021-a8c8-3739a3d4cae4',
10-23 17:50:16.967 I/ReactNativeJS(18100):        vehicle_type: 'sedan',
10-23 17:50:16.967 I/ReactNativeJS(18100):        distance: '0.00km',
10-23 17:50:16.967 I/ReactNativeJS(18100):        coordinates: { lat: 12.7486296, lng: 77.8299689 },
10-23 17:50:16.967 I/ReactNativeJS(18100):        heading: null,
10-23 17:50:16.967 I/ReactNativeJS(18100):        rating: 5 } ] }
10-23 17:50:16.967 I/ReactNativeJS(18100): ≡ƒù║∩╕Å [HOME] ===== DRIVERS BEING PASSED TO MAP =====
10-23 17:50:16.967 I/ReactNativeJS(18100): '≡ƒù║∩╕Å [HOME] Map will receive', 1, 'drivers:'
10-23 17:50:16.967 I/ReactNativeJS(18100): '≡ƒù║∩╕Å [HOME] Driver 1 for map:', { driver_id: 'eb91d7e5-e2f2-4021-a8c8-3739a3d4cae4',
10-23 17:50:16.967 I/ReactNativeJS(18100):   user_id: '1c4ac410-54d8-4b5e-960b-3afcbebd115d',
10-23 17:50:16.967 I/ReactNativeJS(18100):   vehicle_type: 'sedan',
10-23 17:50:16.967 I/ReactNativeJS(18100):   coordinates: { lat: 12.7486296, lng: 77.8299689 },
10-23 17:50:16.967 I/ReactNativeJS(18100):   distance: '0.0000km',
10-23 17:50:16.967 I/ReactNativeJS(18100):   rating: 5,
10-23 17:50:16.967 I/ReactNativeJS(18100):   heading: null,
10-23 17:50:16.967 I/ReactNativeJS(18100):   updated_at: '2025-10-23T12:18:41.271673+00:00' }
10-23 17:50:16.972 I/ReactNativeJS(18100): '≡ƒôè [DRIVER-SERVICE] Found drivers:', { total: 21,
10-23 17:50:16.972 I/ReactNativeJS(18100):   details:
10-23 17:50:16.972 I/ReactNativeJS(18100):    [ { id: '22480cc3-665c-407e-ad8a-8eafde67706b',
10-23 17:50:16.972 I/ReactNativeJS(18100):        user_id: '16011178-decf-4de3-beae-94ca46ce9258',
10-23 17:50:16.972 I/ReactNativeJS(18100):        name: undefined,
10-23 17:50:16.972 I/ReactNativeJS(18100):        vehicle_type: 'hatchback',
10-23 17:50:16.972 I/ReactNativeJS(18100):        status: 'online',
10-23 17:50:16.972 I/ReactNativeJS(18100):        verified: true },
10-23 17:50:16.972 I/ReactNativeJS(18100):      { id: '76b66a88-dff9-4965-9e36-8a92023f155d',
10-23 17:50:16.972 I/ReactNativeJS(18100):        user_id: 'ae53a792-6aed-4186-823d-61c34c6defe2',
10-23 17:50:16.972 I/ReactNativeJS(18100):        name: undefined,
10-23 17:50:16.972 I/ReactNativeJS(18100):        vehicle_type: 'sedan',
10-23 17:50:16.972 I/ReactNativeJS(18100):        status: 'online',
10-23 17:50:16.972 I/ReactNativeJS(18100):        verified: true },
10-23 17:50:16.972 I/ReactNativeJS(18100):      { id: '6f55e87b-6558-48df-af8c-d69190918b32',
10-23 17:50:16.972 I/ReactNativeJS(18100):        user_id: 'e6145579-4f5a-439f-b929-fa478580c049',
10-23 17:50:16.972 I/ReactNativeJS(18100):        name: undefined,
10-23 17:50:16.972 I/ReactNativeJS(18100):        vehicle_type: 'hatchback',
10-23 17:50:16.972 I/ReactNativeJS(18100):        status: 'online',
10-23 17:50:16.972 I/ReactNativeJS(18100):        verified: true },
10-23 17:50:16.972 I/ReactNativeJS(18100):      { id: '97a4ba58-9431-48e5-ac8f-3472b8357179',
10-23 17:50:16.972 I/ReactNativeJS(18100):        user_id: '5d6651c8-2e3f-44e7-b4a1-0056c1d5315b',
10-23 17:50:16.972 I/ReactNativeJS(18100):        name: undefined,
10-23 17:50:16.972 I/ReactNativeJS(18100):        vehicle_type: 'sedan_ac',
10-23 17:50:16.972 I/ReactNativeJS(18100):        status: 'online',
10-23 17:50:16.972 I/ReactNativeJS(18100):        verified: true },
10-23 17:50:16.972 I/ReactNativeJS(18100):      { id: 'c568b21d-0975-4388-a9fb-cc00013b6d4f',
10-23 17:50:16.972 I/ReactNativeJS(18100):        user_id: '6150ee57-77e5-45f7-b6c7-a586f22f2af8',
10-23 17:50:16.972 I/ReactNativeJS(18100):        name: undefined,
10-23 17:50:16.972 I/ReactNativeJS(18100):        vehicle_type: 'sedan',
10-23 17:50:16.972 I/ReactNativeJS(18100):        status: 'online',
10-23 17:50:16.972 I/ReactNativeJS(18100):        verified: true },
10-23 17:50:16.972 I/ReactNativeJS(18100):      { id: '7055c2f9-99fa-4d96-bc6c-079b5cda6f56',
10-23 17:50:16.972 I/ReactNativeJS(18100):        user_id: 'dc475d27-6167-4695-a014-dcb8d160b4c6',
10-23 17:50:16.972 I/ReactNativeJS(18100):        name: undefined,
10-23 17:50:16.972 I/ReactNativeJS(18100):        vehicle_type: 'hatchback',
10-23 17:50:16.972 I/ReactNativeJS(18100):        status: 'online',
10-23 17:50:16.972 I/ReactNativeJS(18100):        verified: true },
10-23 17:50:16.972 I/ReactNativeJS(18100):      { id: '770e8400-e29b-41d4-a716-446655440001',
10-23 17:50:16.972 I/ReactNativeJS(18100):        user_id: '550e8400-e29b-41d4-a716-446655440001',
10-23 17:50:16.972 I/ReactNativeJS(18100):        name: undefined,
10-23 17:50:16.972 I/ReactNativeJS(18100):        vehicle_type: 'hatchback',
10-23 17:50:16.972 I/ReactNativeJS(18100):        status: 'online',
10-23 17:50:16.972 I/ReactNativeJS(18100):        verified: true },
10-23 17:50:16.972 I/ReactNativeJS(18100):      { id: '770e8400-e29b-41d4-a716-446655440002',
10-23 17:50:16.972 I/ReactNativeJS(18100):        user_id: '550e8400-e29b-41d4-a716-446655440002',
10-23 17:50:16.972 I/ReactNativeJS(18100):        name: undefined,
10-23 17:50:16.972 I/ReactNativeJS(18100):        vehicle_type: 'sedan',
10-23 17:50:16.972 I/ReactNativeJS(18100):        status: 'online',
10-23 17:50:16.972 I/ReactNativeJS(18100):        verified: true },
10-23 17:50:16.972 I/ReactNativeJS(18100):      { id: '43d81d7d-e647-46cf-8599-11f63996b03e',
10-23 17:50:16.972 I/ReactNativeJS(18100):        user_id: '6c03a657-c3e4-466e-b49c-324c2d051ce9',
10-23 17:50:16.972 I/ReactNativeJS(18100):        name: undefined,
10-23 17:50:16.972 I/ReactNativeJS(18100):        vehicle_type: 'sedan_ac',
10-23 17:50:16.972 I/ReactNativeJS(18100):        status: 'online',
10-23 17:50:16.972 I/ReactNativeJS(18100):        verified: true },
10-23 17:50:16.972 I/ReactNativeJS(18100):      { id: '770e8400-e29b-41d4-a716-446655440003',
10-23 17:50:16.972 I/ReactNativeJS(18100):        user_id: '550e8400-e29b-41d4-a716-446655440003',
10-23 17:50:16.972 I/ReactNativeJS(18100):        name: undefined,
10-23 17:50:16.972 I/ReactNativeJS(18100):        vehicle_type: 'suv',
10-23 17:50:16.972 I/ReactNativeJS(18100):        status: 'online',
10-23 17:50:16.972 I/ReactNativeJS(18100):        verified: true },
10-23 17:50:16.972 I/ReactNativeJS(18100):      { id: '770e8400-e29b-41d4-a716-446655440004',
10-23 17:50:16.972 I/ReactNativeJS(18100):        user_id: '550e8400-e29b-41d4-a716-446655440004',
10-23 17:50:16.972 I/ReactNativeJS(18100):        name: undefined,
10-23 17:50:16.972 I/ReactNativeJS(18100):        vehicle_type: 'sedan',
10-23 17:50:16.972 I/ReactNativeJS(18100):        status: 'online',
10-23 17:50:16.972 I/ReactNativeJS(18100):        verified: true },
10-23 17:50:16.972 I/ReactNativeJS(18100):      { id: '770e8400-e29b-41d4-a716-446655440005',
10-23 17:50:16.972 I/ReactNativeJS(18100):        user_id: '550e8400-e29b-41d4-a716-446655440005',
10-23 17:50:16.972 I/ReactNativeJS(18100):        name: undefined,
10-23 17:50:16.972 I/ReactNativeJS(18100):        vehicle_type: 'hatchback',
10-23 17:50:16.972 I/ReactNativeJS(18100):        status: 'online',
10-23 17:50:16.972 I/ReactNativeJS(18100):        verified: true },
10-23 17:50:16.972 I/ReactNativeJS(18100):      { id: '489b94a7-777b-4e11-ba5c-17e0a3173737',
10-23 17:50:16.972 I/ReactNativeJS(18100):        user_id: '892d8e0d-7ca5-4dd8-9979-539f394538f2',
10-23 17:50:16.972 I/ReactNativeJS(18100):        name: undefined,
10-23 17:50:16.972 I/ReactNativeJS(18100):        vehicle_type: 'hatchback',
10-23 17:50:16.972 I/ReactNativeJS(18100):        status: 'online',
10-23 17:50:16.972 I/ReactNativeJS(18100):        verified: true },
10-23 17:50:16.972 I/ReactNativeJS(18100):      { id: 'd7b4a339-2ba5-45ed-a2ec-238548a8eab6',
10-23 17:50:16.972 I/ReactNativeJS(18100):        user_id: 'cb735787-e96d-4d1d-9975-c112e75dfabd',
10-23 17:50:16.972 I/ReactNativeJS(18100):        name: undefined,
10-23 17:50:16.972 I/ReactNativeJS(18100):        vehicle_type: 'hatchback_ac',
10-23 17:50:16.972 I/ReactNativeJS(18100):        status: 'online',
10-23 17:50:16.972 I/ReactNativeJS(18100):        verified: true },
10-23 17:50:16.972 I/ReactNativeJS(18100):      { id: '38ee94d8-ac2d-450e-8084-0bef654546d7',
10-23 17:50:16.972 I/ReactNativeJS(18100):        user_id: 'fdd94862-18e4-49d4-b6c0-8b9f73c8ff8c',
10-23 17:50:16.972 I/ReactNativeJS(18100):        name: undefined,
10-23 17:50:16.972 I/ReactNativeJS(18100):        vehicle_type: 'sedan',
10-23 17:50:16.972 I/ReactNativeJS(18100):        status: 'online',
10-23 17:50:16.972 I/ReactNativeJS(18100):        verified: true },
10-23 17:50:16.972 I/ReactNativeJS(18100):      { id: 'b4613ecf-44b5-49ba-8613-f8993b6db1d6',
10-23 17:50:16.972 I/ReactNativeJS(18100):        user_id: '539b06c9-4e24-49a4-b307-3fb3f9dc39da',
10-23 17:50:16.972 I/ReactNativeJS(18100):        name: undefined,
10-23 17:50:16.972 I/ReactNativeJS(18100):        vehicle_type: 'sedan',
10-23 17:50:16.972 I/ReactNativeJS(18100):        status: 'online',
10-23 17:50:16.972 I/ReactNativeJS(18100):        verified: true },
10-23 17:50:16.972 I/ReactNativeJS(18100):      { id: '631f4ab4-c643-45a8-addd-541595b0fe86',
10-23 17:50:16.972 I/ReactNativeJS(18100):        user_id: 'b12c8a48-05b3-475a-b042-4810aee4e918',
10-23 17:50:16.972 I/ReactNativeJS(18100):        name: undefined,
10-23 17:50:16.972 I/ReactNativeJS(18100):        vehicle_type: 'suv',
10-23 17:50:16.972 I/ReactNativeJS(18100):        status: 'online',
10-23 17:50:16.972 I/ReactNativeJS(18100):        verified: true },
10-23 17:50:16.972 I/ReactNativeJS(18100):      { id: '0330d75a-67b0-4b12-b9b7-22a241af9c57',
10-23 17:50:16.972 I/ReactNativeJS(18100):        user_id: 'f5e495f1-75a4-4ce1-bb60-4adfc348b8fc',
10-23 17:50:16.972 I/ReactNativeJS(18100):        name: undefined,
10-23 17:50:16.972 I/ReactNativeJS(18100):        vehicle_type: 'sedan',
10-23 17:50:16.972 I/ReactNativeJS(18100):        status: 'online',
10-23 17:50:16.972 I/ReactNativeJS(18100):        verified: true },
10-23 17:50:16.972 I/ReactNativeJS(18100):      { id: '707e2d38-7346-4a2e-bddb-e1157475f786',
10-23 17:50:16.972 I/ReactNativeJS(18100):        user_id: 'ed59084b-f517-4da3-814c-a314cdd8b4c6',
10-23 17:50:16.972 I/ReactNativeJS(18100):        name: undefined,
10-23 17:50:16.972 I/ReactNativeJS(18100):        vehicle_type: 'sedan',
10-23 17:50:16.972 I/ReactNativeJS(18100):        status: 'online',
10-23 17:50:16.972 I/ReactNativeJS(18100):        verified: true },
10-23 17:50:16.972 I/ReactNativeJS(18100):      { id: 'eb91d7e5-e2f2-4021-a8c8-3739a3d4cae4',
10-23 17:50:16.972 I/ReactNativeJS(18100):        user_id: '1c4ac410-54d8-4b5e-960b-3afcbebd115d',
10-23 17:50:16.972 I/ReactNativeJS(18100):        name: undefined,
10-23 17:50:16.972 I/ReactNativeJS(18100):        vehicle_type: 'sedan',
10-23 17:50:16.972 I/ReactNativeJS(18100):        status: 'online',
10-23 17:50:16.972 I/ReactNativeJS(18100):        verified: true },
10-23 17:50:16.972 I/ReactNativeJS(18100):      { id: '058f85df-35b3-4027-81a1-bd52a0df8e4a',
10-23 17:50:16.972 I/ReactNativeJS(18100):        user_id: '411ee301-8ffc-4874-86e9-37716951bc4d',
10-23 17:50:16.972 I/ReactNativeJS(18100):        name: undefined,
10-23 17:50:16.972 I/ReactNativeJS(18100):        vehicle_type: 'suv_ac',
10-23 17:50:16.972 I/ReactNativeJS(18100):        status: 'online',
10-23 17:50:16.972 I/ReactNativeJS(18100):        verified: true } ] }
10-23 17:50:16.973 I/ReactNativeJS(18100): '≡ƒôì [DRIVER-SERVICE] Step 2: Getting locations for user IDs:', [ '16011178-decf-4de3-beae-94ca46ce9258',
10-23 17:50:16.973 I/ReactNativeJS(18100):   'ae53a792-6aed-4186-823d-61c34c6defe2',
10-23 17:50:16.973 I/ReactNativeJS(18100):   'e6145579-4f5a-439f-b929-fa478580c049',
10-23 17:50:16.973 I/ReactNativeJS(18100):   '5d6651c8-2e3f-44e7-b4a1-0056c1d5315b',
10-23 17:50:16.973 I/ReactNativeJS(18100):   '6150ee57-77e5-45f7-b6c7-a586f22f2af8',
10-23 17:50:16.973 I/ReactNativeJS(18100):   'dc475d27-6167-4695-a014-dcb8d160b4c6',
10-23 17:50:16.973 I/ReactNativeJS(18100):   '550e8400-e29b-41d4-a716-446655440001',
10-23 17:50:16.973 I/ReactNativeJS(18100):   '550e8400-e29b-41d4-a716-446655440002',
10-23 17:50:16.973 I/ReactNativeJS(18100):   '6c03a657-c3e4-466e-b49c-324c2d051ce9',
10-23 17:50:16.973 I/ReactNativeJS(18100):   '550e8400-e29b-41d4-a716-446655440003',
10-23 17:50:16.973 I/ReactNativeJS(18100):   '550e8400-e29b-41d4-a716-446655440004',
10-23 17:50:16.973 I/ReactNativeJS(18100):   '550e8400-e29b-41d4-a716-446655440005',
10-23 17:50:16.973 I/ReactNativeJS(18100):   '892d8e0d-7ca5-4dd8-9979-539f394538f2',
10-23 17:50:16.973 I/ReactNativeJS(18100):   'cb735787-e96d-4d1d-9975-c112e75dfabd',
10-23 17:50:16.973 I/ReactNativeJS(18100):   'fdd94862-18e4-49d4-b6c0-8b9f73c8ff8c',
10-23 17:50:16.973 I/ReactNativeJS(18100):   '539b06c9-4e24-49a4-b307-3fb3f9dc39da',
10-23 17:50:16.973 I/ReactNativeJS(18100):   'b12c8a48-05b3-475a-b042-4810aee4e918',
10-23 17:50:16.973 I/ReactNativeJS(18100):   'f5e495f1-75a4-4ce1-bb60-4adfc348b8fc',
10-23 17:50:16.973 I/ReactNativeJS(18100):   'ed59084b-f517-4da3-814c-a314cdd8b4c6',
10-23 17:50:16.973 I/ReactNativeJS(18100):   '1c4ac410-54d8-4b5e-960b-3afcbebd115d',
10-23 17:50:16.973 I/ReactNativeJS(18100):   '411ee301-8ffc-4874-86e9-37716951bc4d' ]
10-23 17:50:17.355 I/ReactNativeJS(18100): '≡ƒôì [DRIVER-SERVICE] Found locations:', { total: 1,
10-23 17:50:17.355 I/ReactNativeJS(18100):   details:
10-23 17:50:17.355 I/ReactNativeJS(18100):    [ { user_id: '1c4ac410-54d8-4b5e-960b-3afcbebd115d',
10-23 17:50:17.355 I/ReactNativeJS(18100):        coordinates: { lat: 12.7486296, lng: 77.8299689 },
10-23 17:50:17.355 I/ReactNativeJS(18100):        updated_at: '2025-10-23T12:18:41.271673+00:00',
10-23 17:50:17.355 I/ReactNativeJS(18100):        age_minutes: 2 } ] }
10-23 17:50:17.356 I/ReactNativeJS(18100): ≡ƒöì [DRIVER-SERVICE] Step 3: Processing drivers with distance calculation...
10-23 17:50:17.356 I/ReactNativeJS(18100): '≡ƒöì [DRIVER-SERVICE] Customer coordinates for distance calc:', { lat: 12.7486283,
10-23 17:50:17.356 I/ReactNativeJS(18100):   lng: 77.8299733,
10-23 17:50:17.356 I/ReactNativeJS(18100):   type: 'number',
10-23 17:50:17.356 I/ReactNativeJS(18100):   isValid: true }
10-23 17:50:17.356 I/ReactNativeJS(18100): Γ¥î [DRIVER-SERVICE] Driver 22480cc3-665c-407e-ad8a-8eafde67706b (undefined) skipped: no recent location
10-23 17:50:17.356 I/ReactNativeJS(18100): Γ¥î [DRIVER-SERVICE] Driver 76b66a88-dff9-4965-9e36-8a92023f155d (undefined) skipped: no recent location
10-23 17:50:17.356 I/ReactNativeJS(18100): Γ¥î [DRIVER-SERVICE] Driver 6f55e87b-6558-48df-af8c-d69190918b32 (undefined) skipped: no recent location
10-23 17:50:17.356 I/ReactNativeJS(18100): Γ¥î [DRIVER-SERVICE] Driver 97a4ba58-9431-48e5-ac8f-3472b8357179 (undefined) skipped: no recent location
10-23 17:50:17.357 I/ReactNativeJS(18100): Γ¥î [DRIVER-SERVICE] Driver c568b21d-0975-4388-a9fb-cc00013b6d4f (undefined) skipped: no recent location
10-23 17:50:17.357 I/ReactNativeJS(18100): Γ¥î [DRIVER-SERVICE] Driver 7055c2f9-99fa-4d96-bc6c-079b5cda6f56 (undefined) skipped: no recent location
10-23 17:50:17.357 I/ReactNativeJS(18100): Γ¥î [DRIVER-SERVICE] Driver 770e8400-e29b-41d4-a716-446655440001 (undefined) skipped: no recent location
10-23 17:50:17.357 I/ReactNativeJS(18100): Γ¥î [DRIVER-SERVICE] Driver 770e8400-e29b-41d4-a716-446655440002 (undefined) skipped: no recent location
10-23 17:50:17.357 I/ReactNativeJS(18100): Γ¥î [DRIVER-SERVICE] Driver 43d81d7d-e647-46cf-8599-11f63996b03e (undefined) skipped: no recent location
10-23 17:50:17.357 I/ReactNativeJS(18100): Γ¥î [DRIVER-SERVICE] Driver 770e8400-e29b-41d4-a716-446655440003 (undefined) skipped: no recent location
10-23 17:50:17.357 I/ReactNativeJS(18100): Γ¥î [DRIVER-SERVICE] Driver 770e8400-e29b-41d4-a716-446655440004 (undefined) skipped: no recent location
10-23 17:50:17.357 I/ReactNativeJS(18100): Γ¥î [DRIVER-SERVICE] Driver 770e8400-e29b-41d4-a716-446655440005 (undefined) skipped: no recent location
10-23 17:50:17.357 I/ReactNativeJS(18100): Γ¥î [DRIVER-SERVICE] Driver 489b94a7-777b-4e11-ba5c-17e0a3173737 (undefined) skipped: no recent location
10-23 17:50:17.357 I/ReactNativeJS(18100): Γ¥î [DRIVER-SERVICE] Driver d7b4a339-2ba5-45ed-a2ec-238548a8eab6 (undefined) skipped: no recent location
10-23 17:50:17.357 I/ReactNativeJS(18100): Γ¥î [DRIVER-SERVICE] Driver 38ee94d8-ac2d-450e-8084-0bef654546d7 (undefined) skipped: no recent location
10-23 17:50:17.357 I/ReactNativeJS(18100): Γ¥î [DRIVER-SERVICE] Driver b4613ecf-44b5-49ba-8613-f8993b6db1d6 (undefined) skipped: no recent location
10-23 17:50:17.357 I/ReactNativeJS(18100): Γ¥î [DRIVER-SERVICE] Driver 631f4ab4-c643-45a8-addd-541595b0fe86 (undefined) skipped: no recent location
10-23 17:50:17.357 I/ReactNativeJS(18100): Γ¥î [DRIVER-SERVICE] Driver 0330d75a-67b0-4b12-b9b7-22a241af9c57 (undefined) skipped: no recent location
10-23 17:50:17.357 I/ReactNativeJS(18100): Γ¥î [DRIVER-SERVICE] Driver 707e2d38-7346-4a2e-bddb-e1157475f786 (undefined) skipped: no recent location
10-23 17:50:17.357 I/ReactNativeJS(18100): ≡ƒÜù [DRIVER-SERVICE] Driver eb91d7e5-e2f2-4021-a8c8-3739a3d4cae4 (undefined) vehicle type: sedan
10-23 17:50:17.357 I/ReactNativeJS(18100): ≡ƒôÉ [DISTANCE-SERVICE] ===== DISTANCE CALCULATION DEBUG =====
10-23 17:50:17.358 I/ReactNativeJS(18100): '≡ƒôÉ [DISTANCE-SERVICE] Raw inputs:', { lat1: 12.7486283,
10-23 17:50:17.358 I/ReactNativeJS(18100):   lon1: 77.8299733,
10-23 17:50:17.358 I/ReactNativeJS(18100):   lat2: 12.7486296,
10-23 17:50:17.358 I/ReactNativeJS(18100):   lon2: 77.8299689 }
10-23 17:50:17.358 I/ReactNativeJS(18100): '≡ƒôÉ [DISTANCE-SERVICE] Converted inputs:', { latitude1: 12.7486283,
10-23 17:50:17.358 I/ReactNativeJS(18100):   longitude1: 77.8299733,
10-23 17:50:17.358 I/ReactNativeJS(18100):   latitude2: 12.7486296,
10-23 17:50:17.358 I/ReactNativeJS(18100):   longitude2: 77.8299689 }
10-23 17:50:17.359 I/ReactNativeJS(18100): '≡ƒôÉ [DISTANCE-SERVICE] Coordinate differences:', { lat_diff: 0.000001299999999204715,
10-23 17:50:17.359 I/ReactNativeJS(18100):   lng_diff: 0.0000044000000087862645,
10-23 17:50:17.359 I/ReactNativeJS(18100):   very_close: true,
10-23 17:50:17.359 I/ReactNativeJS(18100):   essentially_same: true }
10-23 17:50:17.359 I/ReactNativeJS(18100): ≡ƒôÉ [DISTANCE-SERVICE] Coordinates are essentially the same, returning 0km
10-23 17:50:17.359 I/ReactNativeJS(18100): '≡ƒôÅ [DRIVER-SERVICE] Distance for driver eb91d7e5-e2f2-4021-a8c8-3739a3d4cae4 (undefined):', { distance_km: '0.0000',
10-23 17:50:17.359 I/ReactNativeJS(18100):   within_radius: true,
10-23 17:50:17.359 I/ReactNativeJS(18100):   radius_limit: '10km',
10-23 17:50:17.359 I/ReactNativeJS(18100):   driver_coords: { lat: 12.7486296, lng: 77.8299689 },
10-23 17:50:17.359 I/ReactNativeJS(18100):   customer_coords: { lat: 12.7486283, lng: 77.8299733 } }
10-23 17:50:17.359 I/ReactNativeJS(18100): Γ£à [DRIVER-SERVICE] Driver eb91d7e5-e2f2-4021-a8c8-3739a3d4cae4 (undefined) INCLUDED: 0.0000km
10-23 17:50:17.360 I/ReactNativeJS(18100): Γ¥î [DRIVER-SERVICE] Driver 058f85df-35b3-4027-81a1-bd52a0df8e4a (undefined) skipped: no recent location
10-23 17:50:17.360 I/ReactNativeJS(18100): ≡ƒôè [DRIVER-SERVICE] ===== DIRECT DATABASE ACCESS RESULT =====
10-23 17:50:17.360 I/ReactNativeJS(18100): '≡ƒôè [DRIVER-SERVICE] Final summary:', { total_drivers_processed: 21,
10-23 17:50:17.360 I/ReactNativeJS(18100):   available_drivers_found: 1,
10-23 17:50:17.360 I/ReactNativeJS(18100):   customer_location: { lat: 12.7486283, lng: 77.8299733 },
10-23 17:50:17.360 I/ReactNativeJS(18100):   radius_km: 10,
10-23 17:50:17.360 I/ReactNativeJS(18100):   vehicle_type_filter: 'all (no filter applied)' }
10-23 17:50:17.360 I/ReactNativeJS(18100): '≡ƒöä [DRIVER-SERVICE] Initial fetch completed:', 1, 'drivers'
10-23 17:50:17.361 I/ReactNativeJS(18100): '≡ƒôì [HOME] Received driver locations update:', 1, 'drivers'
10-23 17:50:17.363 W/ReactNativeJS(18100): ≡ƒÅá [HOME] ===== RENDERING HOME SCREEN =====
10-23 17:50:17.363 W/ReactNativeJS(18100): '≡ƒÅá [HOME] currentLocation:', '{"altitude":771.7999877929688,"heading":0,"altitudeAccuracy":1.3241634368896484,"latitude":12.7486283,"speed":0,"longitude":77.8299733,"accuracy":2.200000047683716}'
10-23 17:50:17.363 W/ReactNativeJS(18100): '≡ƒÅá [HOME] pickupCoords:', '{"latitude":12.7486283,"longitude":77.8299733}'
10-23 17:50:17.363 W/ReactNativeJS(18100): '≡ƒÅá [HOME] destinationCoords:', 'null'
10-23 17:50:17.363 W/ReactNativeJS(18100): '≡ƒÅá [HOME] pickupLocation text:', 'PRXJ+F32, Brindavan Nagar, Plot 87, NGGO\'s Colony, Anand Nagar, Hosur, Tamil Nadu 635109, India'
10-23 17:50:17.364 W/ReactNativeJS(18100): '≡ƒÅá [HOME] availableDrivers count:', 1
10-23 17:50:17.364 W/ReactNativeJS(18100): '≡ƒÅá [HOME] showDriversOnMap:', true
10-23 17:50:17.364 I/ReactNativeJS(18100): '≡ƒÅá≡ƒÅá≡ƒÅá [HOME-V2] ABOUT TO RENDER SimpleHosurMap with props:', { hasUserLocation: true,
10-23 17:50:17.364 I/ReactNativeJS(18100):   hasPickup: true,
10-23 17:50:17.364 I/ReactNativeJS(18100):   hasDestination: false,
10-23 17:50:17.364 I/ReactNativeJS(18100):   showDriversOnMap: true,
10-23 17:50:17.364 I/ReactNativeJS(18100):   timestamp: '2025-10-23T12:20:17.364Z' }
10-23 17:50:17.365 I/ReactNativeJS(18100): ≡ƒº¬≡ƒº¬≡ƒº¬ TEST MAP RENDERING NOW
10-23 17:50:17.365 I/ReactNativeJS(18100): '≡ƒº¬ Props received:', [ 'userLocation',
10-23 17:50:17.365 I/ReactNativeJS(18100):   'pickupLocation',
10-23 17:50:17.365 I/ReactNativeJS(18100):   'destinationLocation',
10-23 17:50:17.365 I/ReactNativeJS(18100):   'onRegionChangeComplete',
10-23 17:50:17.365 I/ReactNativeJS(18100):   'onDestinationDragEnd',
10-23 17:50:17.365 I/ReactNativeJS(18100):   'showCenteredPin',
10-23 17:50:17.365 I/ReactNativeJS(18100):   'availableDrivers',
10-23 17:50:17.365 I/ReactNativeJS(18100):   'showDrivers' ]
10-23 17:50:17.379 I/ReactNativeJS(18100): ≡ƒôè [HOME] ===== AVAILABLE DRIVERS STATE CHANGED =====
10-23 17:50:17.380 I/ReactNativeJS(18100): '≡ƒôè [HOME] availableDrivers state update:', { count: 1,
10-23 17:50:17.380 I/ReactNativeJS(18100):   showDriversOnMap: true,
10-23 17:50:17.380 I/ReactNativeJS(18100):   driversPassedToMap: 1,
10-23 17:50:17.380 I/ReactNativeJS(18100):   drivers:
10-23 17:50:17.380 I/ReactNativeJS(18100):    [ { id: 'eb91d7e5-e2f2-4021-a8c8-3739a3d4cae4',
10-23 17:50:17.380 I/ReactNativeJS(18100):        vehicle_type: 'sedan',
10-23 17:50:17.380 I/ReactNativeJS(18100):        distance: '0.00km',
10-23 17:50:17.380 I/ReactNativeJS(18100):        coordinates: { lat: 12.7486296, lng: 77.8299689 },
10-23 17:50:17.380 I/ReactNativeJS(18100):        heading: null,
10-23 17:50:17.380 I/ReactNativeJS(18100):        rating: 5 } ] }
10-23 17:50:17.380 I/ReactNativeJS(18100): ≡ƒù║∩╕Å [HOME] ===== DRIVERS BEING PASSED TO MAP =====
10-23 17:50:17.380 I/ReactNativeJS(18100): '≡ƒù║∩╕Å [HOME] Map will receive', 1, 'drivers:'
10-23 17:50:17.382 I/ReactNativeJS(18100): '≡ƒù║∩╕Å [HOME] Driver 1 for map:', { driver_id: 'eb91d7e5-e2f2-4021-a8c8-3739a3d4cae4',
10-23 17:50:17.382 I/ReactNativeJS(18100):   user_id: '1c4ac410-54d8-4b5e-960b-3afcbebd115d',
10-23 17:50:17.382 I/ReactNativeJS(18100):   vehicle_type: 'sedan',
10-23 17:50:17.382 I/ReactNativeJS(18100):   coordinates: { lat: 12.7486296, lng: 77.8299689 },
10-23 17:50:17.382 I/ReactNativeJS(18100):   distance: '0.0000km',
10-23 17:50:17.382 I/ReactNativeJS(18100):   rating: 5,
10-23 17:50:17.382 I/ReactNativeJS(18100):   heading: null,
10-23 17:50:17.382 I/ReactNativeJS(18100):   updated_at: '2025-10-23T12:18:41.271673+00:00' }
10-23 17:50:26.318 I/ReactNativeJS(18100): ≡ƒöä [DRIVER-SERVICE] Polling interval triggered
10-23 17:50:26.319 I/ReactNativeJS(18100): '≡ƒù║∩╕Å [DRIVER-SERVICE] Fetching available drivers via edge function:', { location: { lat: 12.7486283, lng: 77.8299733 },
10-23 17:50:26.319 I/ReactNativeJS(18100):   radius: '10km',
10-23 17:50:26.319 I/ReactNativeJS(18100):   vehicleType: 'all',
10-23 17:50:26.319 I/ReactNativeJS(18100):   timestamp: '2025-10-23T12:20:26.319Z' }
10-23 17:50:26.319 I/ReactNativeJS(18100): '≡ƒîÉ [DRIVER-SERVICE] Constructed Edge Function URL:', 'https://whubaypabojomdyfqxcf.supabase.co/functions/v1/get-drivers-with-locations?lat=12.7486283&lng=77.8299733&radius=10'
10-23 17:50:26.788 W/ReactNativeJS(18100): 'ΓÜá∩╕Å [DRIVER-SERVICE] Edge function failed, using direct database access:', 'Edge function failed: 500 - {"code":"WORKER_ERROR","message":"Function exited due to an error (please check logs)"}'
10-23 17:50:26.788 I/ReactNativeJS(18100): ≡ƒöì [DRIVER-SERVICE] ===== USING DIRECT DATABASE ACCESS =====
10-23 17:50:26.789 I/ReactNativeJS(18100): '≡ƒöì [DRIVER-SERVICE] Parameters:', { customerLocation: { lat: 12.7486283, lng: 77.8299733 },
10-23 17:50:26.789 I/ReactNativeJS(18100):   radius: '10km',
10-23 17:50:26.789 I/ReactNativeJS(18100):   vehicleType: 'all' }
10-23 17:50:26.789 I/ReactNativeJS(18100): ≡ƒôè [DRIVER-SERVICE] Step 1: Fetching online verified drivers...
10-23 17:50:27.124 I/ReactNativeJS(18100): '≡ƒôè [DRIVER-SERVICE] Found drivers:', { total: 21,
10-23 17:50:27.124 I/ReactNativeJS(18100):   details:
10-23 17:50:27.124 I/ReactNativeJS(18100):    [ { id: '22480cc3-665c-407e-ad8a-8eafde67706b',
10-23 17:50:27.124 I/ReactNativeJS(18100):        user_id: '16011178-decf-4de3-beae-94ca46ce9258',
10-23 17:50:27.124 I/ReactNativeJS(18100):        name: undefined,
10-23 17:50:27.124 I/ReactNativeJS(18100):        vehicle_type: 'hatchback',
10-23 17:50:27.124 I/ReactNativeJS(18100):        status: 'online',
10-23 17:50:27.124 I/ReactNativeJS(18100):        verified: true },
10-23 17:50:27.124 I/ReactNativeJS(18100):      { id: '76b66a88-dff9-4965-9e36-8a92023f155d',
10-23 17:50:27.124 I/ReactNativeJS(18100):        user_id: 'ae53a792-6aed-4186-823d-61c34c6defe2',
10-23 17:50:27.124 I/ReactNativeJS(18100):        name: undefined,
10-23 17:50:27.124 I/ReactNativeJS(18100):        vehicle_type: 'sedan',
10-23 17:50:27.124 I/ReactNativeJS(18100):        status: 'online',
10-23 17:50:27.124 I/ReactNativeJS(18100):        verified: true },
10-23 17:50:27.124 I/ReactNativeJS(18100):      { id: '6f55e87b-6558-48df-af8c-d69190918b32',
10-23 17:50:27.124 I/ReactNativeJS(18100):        user_id: 'e6145579-4f5a-439f-b929-fa478580c049',
10-23 17:50:27.124 I/ReactNativeJS(18100):        name: undefined,
10-23 17:50:27.124 I/ReactNativeJS(18100):        vehicle_type: 'hatchback',
10-23 17:50:27.124 I/ReactNativeJS(18100):        status: 'online',
10-23 17:50:27.124 I/ReactNativeJS(18100):        verified: true },
10-23 17:50:27.124 I/ReactNativeJS(18100):      { id: '97a4ba58-9431-48e5-ac8f-3472b8357179',
10-23 17:50:27.124 I/ReactNativeJS(18100):        user_id: '5d6651c8-2e3f-44e7-b4a1-0056c1d5315b',
10-23 17:50:27.124 I/ReactNativeJS(18100):        name: undefined,
10-23 17:50:27.124 I/ReactNativeJS(18100):        vehicle_type: 'sedan_ac',
10-23 17:50:27.124 I/ReactNativeJS(18100):        status: 'online',
10-23 17:50:27.124 I/ReactNativeJS(18100):        verified: true },
10-23 17:50:27.124 I/ReactNativeJS(18100):      { id: 'c568b21d-0975-4388-a9fb-cc00013b6d4f',
10-23 17:50:27.124 I/ReactNativeJS(18100):        user_id: '6150ee57-77e5-45f7-b6c7-a586f22f2af8',
10-23 17:50:27.124 I/ReactNativeJS(18100):        name: undefined,
10-23 17:50:27.124 I/ReactNativeJS(18100):        vehicle_type: 'sedan',
10-23 17:50:27.124 I/ReactNativeJS(18100):        status: 'online',
10-23 17:50:27.124 I/ReactNativeJS(18100):        verified: true },
10-23 17:50:27.124 I/ReactNativeJS(18100):      { id: '7055c2f9-99fa-4d96-bc6c-079b5cda6f56',
10-23 17:50:27.124 I/ReactNativeJS(18100):        user_id: 'dc475d27-6167-4695-a014-dcb8d160b4c6',
10-23 17:50:27.124 I/ReactNativeJS(18100):        name: undefined,
10-23 17:50:27.124 I/ReactNativeJS(18100):        vehicle_type: 'hatchback',
10-23 17:50:27.124 I/ReactNativeJS(18100):        status: 'online',
10-23 17:50:27.124 I/ReactNativeJS(18100):        verified: true },
10-23 17:50:27.124 I/ReactNativeJS(18100):      { id: '770e8400-e29b-41d4-a716-446655440001',
10-23 17:50:27.124 I/ReactNativeJS(18100):        user_id: '550e8400-e29b-41d4-a716-446655440001',
10-23 17:50:27.124 I/ReactNativeJS(18100):        name: undefined,
10-23 17:50:27.124 I/ReactNativeJS(18100):        vehicle_type: 'hatchback',
10-23 17:50:27.124 I/ReactNativeJS(18100):        status: 'online',
10-23 17:50:27.124 I/ReactNativeJS(18100):        verified: true },
10-23 17:50:27.124 I/ReactNativeJS(18100):      { id: '770e8400-e29b-41d4-a716-446655440002',
10-23 17:50:27.124 I/ReactNativeJS(18100):        user_id: '550e8400-e29b-41d4-a716-446655440002',
10-23 17:50:27.124 I/ReactNativeJS(18100):        name: undefined,
10-23 17:50:27.124 I/ReactNativeJS(18100):        vehicle_type: 'sedan',
10-23 17:50:27.124 I/ReactNativeJS(18100):        status: 'online',
10-23 17:50:27.124 I/ReactNativeJS(18100):        verified: true },
10-23 17:50:27.124 I/ReactNativeJS(18100):      { id: '43d81d7d-e647-46cf-8599-11f63996b03e',
10-23 17:50:27.124 I/ReactNativeJS(18100):        user_id: '6c03a657-c3e4-466e-b49c-324c2d051ce9',
10-23 17:50:27.124 I/ReactNativeJS(18100):        name: undefined,
10-23 17:50:27.124 I/ReactNativeJS(18100):        vehicle_type: 'sedan_ac',
10-23 17:50:27.124 I/ReactNativeJS(18100):        status: 'online',
10-23 17:50:27.124 I/ReactNativeJS(18100):        verified: true },
10-23 17:50:27.124 I/ReactNativeJS(18100):      { id: '770e8400-e29b-41d4-a716-446655440003',
10-23 17:50:27.124 I/ReactNativeJS(18100):        user_id: '550e8400-e29b-41d4-a716-446655440003',
10-23 17:50:27.124 I/ReactNativeJS(18100):        name: undefined,
10-23 17:50:27.124 I/ReactNativeJS(18100):        vehicle_type: 'suv',
10-23 17:50:27.124 I/ReactNativeJS(18100):        status: 'online',
10-23 17:50:27.124 I/ReactNativeJS(18100):        verified: true },
10-23 17:50:27.124 I/ReactNativeJS(18100):      { id: '770e8400-e29b-41d4-a716-446655440004',
10-23 17:50:27.124 I/ReactNativeJS(18100):        user_id: '550e8400-e29b-41d4-a716-446655440004',
10-23 17:50:27.124 I/ReactNativeJS(18100):        name: undefined,
10-23 17:50:27.124 I/ReactNativeJS(18100):        vehicle_type: 'sedan',
10-23 17:50:27.124 I/ReactNativeJS(18100):        status: 'online',
10-23 17:50:27.124 I/ReactNativeJS(18100):        verified: true },
10-23 17:50:27.124 I/ReactNativeJS(18100):      { id: '770e8400-e29b-41d4-a716-446655440005',
10-23 17:50:27.124 I/ReactNativeJS(18100):        user_id: '550e8400-e29b-41d4-a716-446655440005',
10-23 17:50:27.124 I/ReactNativeJS(18100):        name: undefined,
10-23 17:50:27.124 I/ReactNativeJS(18100):        vehicle_type: 'hatchback',
10-23 17:50:27.124 I/ReactNativeJS(18100):        status: 'online',
10-23 17:50:27.124 I/ReactNativeJS(18100):        verified: true },
10-23 17:50:27.124 I/ReactNativeJS(18100):      { id: '489b94a7-777b-4e11-ba5c-17e0a3173737',
10-23 17:50:27.124 I/ReactNativeJS(18100):        user_id: '892d8e0d-7ca5-4dd8-9979-539f394538f2',
10-23 17:50:27.124 I/ReactNativeJS(18100):        name: undefined,
10-23 17:50:27.124 I/ReactNativeJS(18100):        vehicle_type: 'hatchback',
10-23 17:50:27.124 I/ReactNativeJS(18100):        status: 'online',
10-23 17:50:27.124 I/ReactNativeJS(18100):        verified: true },
10-23 17:50:27.124 I/ReactNativeJS(18100):      { id: 'd7b4a339-2ba5-45ed-a2ec-238548a8eab6',
10-23 17:50:27.124 I/ReactNativeJS(18100):        user_id: 'cb735787-e96d-4d1d-9975-c112e75dfabd',
10-23 17:50:27.124 I/ReactNativeJS(18100):        name: undefined,
10-23 17:50:27.124 I/ReactNativeJS(18100):        vehicle_type: 'hatchback_ac',
10-23 17:50:27.124 I/ReactNativeJS(18100):        status: 'online',
10-23 17:50:27.124 I/ReactNativeJS(18100):        verified: true },
10-23 17:50:27.124 I/ReactNativeJS(18100):      { id: '38ee94d8-ac2d-450e-8084-0bef654546d7',
10-23 17:50:27.124 I/ReactNativeJS(18100):        user_id: 'fdd94862-18e4-49d4-b6c0-8b9f73c8ff8c',
10-23 17:50:27.124 I/ReactNativeJS(18100):        name: undefined,
10-23 17:50:27.124 I/ReactNativeJS(18100):        vehicle_type: 'sedan',
10-23 17:50:27.124 I/ReactNativeJS(18100):        status: 'online',
10-23 17:50:27.124 I/ReactNativeJS(18100):        verified: true },
10-23 17:50:27.124 I/ReactNativeJS(18100):      { id: 'b4613ecf-44b5-49ba-8613-f8993b6db1d6',
10-23 17:50:27.124 I/ReactNativeJS(18100):        user_id: '539b06c9-4e24-49a4-b307-3fb3f9dc39da',
10-23 17:50:27.124 I/ReactNativeJS(18100):        name: undefined,
10-23 17:50:27.124 I/ReactNativeJS(18100):        vehicle_type: 'sedan',
10-23 17:50:27.124 I/ReactNativeJS(18100):        status: 'online',
10-23 17:50:27.124 I/ReactNativeJS(18100):        verified: true },
10-23 17:50:27.124 I/ReactNativeJS(18100):      { id: '631f4ab4-c643-45a8-addd-541595b0fe86',
10-23 17:50:27.124 I/ReactNativeJS(18100):        user_id: 'b12c8a48-05b3-475a-b042-4810aee4e918',
10-23 17:50:27.124 I/ReactNativeJS(18100):        name: undefined,
10-23 17:50:27.124 I/ReactNativeJS(18100):        vehicle_type: 'suv',
10-23 17:50:27.124 I/ReactNativeJS(18100):        status: 'online',
10-23 17:50:27.124 I/ReactNativeJS(18100):        verified: true },
10-23 17:50:27.124 I/ReactNativeJS(18100):      { id: '0330d75a-67b0-4b12-b9b7-22a241af9c57',
10-23 17:50:27.124 I/ReactNativeJS(18100):        user_id: 'f5e495f1-75a4-4ce1-bb60-4adfc348b8fc',
10-23 17:50:27.124 I/ReactNativeJS(18100):        name: undefined,
10-23 17:50:27.124 I/ReactNativeJS(18100):        vehicle_type: 'sedan',
10-23 17:50:27.124 I/ReactNativeJS(18100):        status: 'online',
10-23 17:50:27.124 I/ReactNativeJS(18100):        verified: true },
10-23 17:50:27.124 I/ReactNativeJS(18100):      { id: '707e2d38-7346-4a2e-bddb-e1157475f786',
10-23 17:50:27.124 I/ReactNativeJS(18100):        user_id: 'ed59084b-f517-4da3-814c-a314cdd8b4c6',
10-23 17:50:27.125 I/ReactNativeJS(18100):        name: undefined,
10-23 17:50:27.125 I/ReactNativeJS(18100):        vehicle_type: 'sedan',
10-23 17:50:27.125 I/ReactNativeJS(18100):        status: 'online',
10-23 17:50:27.125 I/ReactNativeJS(18100):        verified: true },
10-23 17:50:27.125 I/ReactNativeJS(18100):      { id: 'eb91d7e5-e2f2-4021-a8c8-3739a3d4cae4',
10-23 17:50:27.125 I/ReactNativeJS(18100):        user_id: '1c4ac410-54d8-4b5e-960b-3afcbebd115d',
10-23 17:50:27.125 I/ReactNativeJS(18100):        name: undefined,
10-23 17:50:27.125 I/ReactNativeJS(18100):        vehicle_type: 'sedan',
10-23 17:50:27.125 I/ReactNativeJS(18100):        status: 'online',
10-23 17:50:27.125 I/ReactNativeJS(18100):        verified: true },
10-23 17:50:27.125 I/ReactNativeJS(18100):      { id: '058f85df-35b3-4027-81a1-bd52a0df8e4a',
10-23 17:50:27.125 I/ReactNativeJS(18100):        user_id: '411ee301-8ffc-4874-86e9-37716951bc4d',
10-23 17:50:27.125 I/ReactNativeJS(18100):        name: undefined,
10-23 17:50:27.125 I/ReactNativeJS(18100):        vehicle_type: 'suv_ac',
10-23 17:50:27.125 I/ReactNativeJS(18100):        status: 'online',
10-23 17:50:27.125 I/ReactNativeJS(18100):        verified: true } ] }
10-23 17:50:27.126 I/ReactNativeJS(18100): '≡ƒôì [DRIVER-SERVICE] Step 2: Getting locations for user IDs:', [ '16011178-decf-4de3-beae-94ca46ce9258',
10-23 17:50:27.126 I/ReactNativeJS(18100):   'ae53a792-6aed-4186-823d-61c34c6defe2',
10-23 17:50:27.126 I/ReactNativeJS(18100):   'e6145579-4f5a-439f-b929-fa478580c049',
10-23 17:50:27.126 I/ReactNativeJS(18100):   '5d6651c8-2e3f-44e7-b4a1-0056c1d5315b',
10-23 17:50:27.126 I/ReactNativeJS(18100):   '6150ee57-77e5-45f7-b6c7-a586f22f2af8',
10-23 17:50:27.126 I/ReactNativeJS(18100):   'dc475d27-6167-4695-a014-dcb8d160b4c6',
10-23 17:50:27.126 I/ReactNativeJS(18100):   '550e8400-e29b-41d4-a716-446655440001',
10-23 17:50:27.126 I/ReactNativeJS(18100):   '550e8400-e29b-41d4-a716-446655440002',
10-23 17:50:27.126 I/ReactNativeJS(18100):   '6c03a657-c3e4-466e-b49c-324c2d051ce9',
10-23 17:50:27.126 I/ReactNativeJS(18100):   '550e8400-e29b-41d4-a716-446655440003',
10-23 17:50:27.126 I/ReactNativeJS(18100):   '550e8400-e29b-41d4-a716-446655440004',
10-23 17:50:27.126 I/ReactNativeJS(18100):   '550e8400-e29b-41d4-a716-446655440005',
10-23 17:50:27.126 I/ReactNativeJS(18100):   '892d8e0d-7ca5-4dd8-9979-539f394538f2',
10-23 17:50:27.126 I/ReactNativeJS(18100):   'cb735787-e96d-4d1d-9975-c112e75dfabd',
10-23 17:50:27.126 I/ReactNativeJS(18100):   'fdd94862-18e4-49d4-b6c0-8b9f73c8ff8c',
10-23 17:50:27.126 I/ReactNativeJS(18100):   '539b06c9-4e24-49a4-b307-3fb3f9dc39da',
10-23 17:50:27.126 I/ReactNativeJS(18100):   'b12c8a48-05b3-475a-b042-4810aee4e918',
10-23 17:50:27.126 I/ReactNativeJS(18100):   'f5e495f1-75a4-4ce1-bb60-4adfc348b8fc',
10-23 17:50:27.126 I/ReactNativeJS(18100):   'ed59084b-f517-4da3-814c-a314cdd8b4c6',
10-23 17:50:27.126 I/ReactNativeJS(18100):   '1c4ac410-54d8-4b5e-960b-3afcbebd115d',
10-23 17:50:27.126 I/ReactNativeJS(18100):   '411ee301-8ffc-4874-86e9-37716951bc4d' ]
10-23 17:50:27.420 I/ReactNativeJS(18100): '≡ƒôì [DRIVER-SERVICE] Found locations:', { total: 1,
10-23 17:50:27.420 I/ReactNativeJS(18100):   details:
10-23 17:50:27.420 I/ReactNativeJS(18100):    [ { user_id: '1c4ac410-54d8-4b5e-960b-3afcbebd115d',
10-23 17:50:27.420 I/ReactNativeJS(18100):        coordinates: { lat: 12.7486296, lng: 77.8299689 },
10-23 17:50:27.420 I/ReactNativeJS(18100):        updated_at: '2025-10-23T12:18:41.271673+00:00',
10-23 17:50:27.420 I/ReactNativeJS(18100):        age_minutes: 2 } ] }
10-23 17:50:27.420 I/ReactNativeJS(18100): ≡ƒöì [DRIVER-SERVICE] Step 3: Processing drivers with distance calculation...
10-23 17:50:27.420 I/ReactNativeJS(18100): '≡ƒöì [DRIVER-SERVICE] Customer coordinates for distance calc:', { lat: 12.7486283,
10-23 17:50:27.420 I/ReactNativeJS(18100):   lng: 77.8299733,
10-23 17:50:27.420 I/ReactNativeJS(18100):   type: 'number',
10-23 17:50:27.420 I/ReactNativeJS(18100):   isValid: true }
10-23 17:50:27.420 I/ReactNativeJS(18100): Γ¥î [DRIVER-SERVICE] Driver 22480cc3-665c-407e-ad8a-8eafde67706b (undefined) skipped: no recent location
10-23 17:50:27.420 I/ReactNativeJS(18100): Γ¥î [DRIVER-SERVICE] Driver 76b66a88-dff9-4965-9e36-8a92023f155d (undefined) skipped: no recent location
10-23 17:50:27.420 I/ReactNativeJS(18100): Γ¥î [DRIVER-SERVICE] Driver 6f55e87b-6558-48df-af8c-d69190918b32 (undefined) skipped: no recent location
10-23 17:50:27.420 I/ReactNativeJS(18100): Γ¥î [DRIVER-SERVICE] Driver 97a4ba58-9431-48e5-ac8f-3472b8357179 (undefined) skipped: no recent location
10-23 17:50:27.420 I/ReactNativeJS(18100): Γ¥î [DRIVER-SERVICE] Driver c568b21d-0975-4388-a9fb-cc00013b6d4f (undefined) skipped: no recent location
10-23 17:50:27.420 I/ReactNativeJS(18100): Γ¥î [DRIVER-SERVICE] Driver 7055c2f9-99fa-4d96-bc6c-079b5cda6f56 (undefined) skipped: no recent location
10-23 17:50:27.420 I/ReactNativeJS(18100): Γ¥î [DRIVER-SERVICE] Driver 770e8400-e29b-41d4-a716-446655440001 (undefined) skipped: no recent location
10-23 17:50:27.420 I/ReactNativeJS(18100): Γ¥î [DRIVER-SERVICE] Driver 770e8400-e29b-41d4-a716-446655440002 (undefined) skipped: no recent location
10-23 17:50:27.420 I/ReactNativeJS(18100): Γ¥î [DRIVER-SERVICE] Driver 43d81d7d-e647-46cf-8599-11f63996b03e (undefined) skipped: no recent location
10-23 17:50:27.420 I/ReactNativeJS(18100): Γ¥î [DRIVER-SERVICE] Driver 770e8400-e29b-41d4-a716-446655440003 (undefined) skipped: no recent location
10-23 17:50:27.420 I/ReactNativeJS(18100): Γ¥î [DRIVER-SERVICE] Driver 770e8400-e29b-41d4-a716-446655440004 (undefined) skipped: no recent location
10-23 17:50:27.420 I/ReactNativeJS(18100): Γ¥î [DRIVER-SERVICE] Driver 770e8400-e29b-41d4-a716-446655440005 (undefined) skipped: no recent location
10-23 17:50:27.420 I/ReactNativeJS(18100): Γ¥î [DRIVER-SERVICE] Driver 489b94a7-777b-4e11-ba5c-17e0a3173737 (undefined) skipped: no recent location
10-23 17:50:27.420 I/ReactNativeJS(18100): Γ¥î [DRIVER-SERVICE] Driver d7b4a339-2ba5-45ed-a2ec-238548a8eab6 (undefined) skipped: no recent location
10-23 17:50:27.420 I/ReactNativeJS(18100): Γ¥î [DRIVER-SERVICE] Driver 38ee94d8-ac2d-450e-8084-0bef654546d7 (undefined) skipped: no recent location
10-23 17:50:27.421 I/ReactNativeJS(18100): Γ¥î [DRIVER-SERVICE] Driver b4613ecf-44b5-49ba-8613-f8993b6db1d6 (undefined) skipped: no recent location
10-23 17:50:27.421 I/ReactNativeJS(18100): Γ¥î [DRIVER-SERVICE] Driver 631f4ab4-c643-45a8-addd-541595b0fe86 (undefined) skipped: no recent location
10-23 17:50:27.421 I/ReactNativeJS(18100): Γ¥î [DRIVER-SERVICE] Driver 0330d75a-67b0-4b12-b9b7-22a241af9c57 (undefined) skipped: no recent location
10-23 17:50:27.421 I/ReactNativeJS(18100): Γ¥î [DRIVER-SERVICE] Driver 707e2d38-7346-4a2e-bddb-e1157475f786 (undefined) skipped: no recent location
10-23 17:50:27.421 I/ReactNativeJS(18100): ≡ƒÜù [DRIVER-SERVICE] Driver eb91d7e5-e2f2-4021-a8c8-3739a3d4cae4 (undefined) vehicle type: sedan
10-23 17:50:27.421 I/ReactNativeJS(18100): ≡ƒôÉ [DISTANCE-SERVICE] ===== DISTANCE CALCULATION DEBUG =====
10-23 17:50:27.421 I/ReactNativeJS(18100): '≡ƒôÉ [DISTANCE-SERVICE] Raw inputs:', { lat1: 12.7486283,
10-23 17:50:27.421 I/ReactNativeJS(18100):   lon1: 77.8299733,
10-23 17:50:27.421 I/ReactNativeJS(18100):   lat2: 12.7486296,
10-23 17:50:27.421 I/ReactNativeJS(18100):   lon2: 77.8299689 }
10-23 17:50:27.421 I/ReactNativeJS(18100): '≡ƒôÉ [DISTANCE-SERVICE] Converted inputs:', { latitude1: 12.7486283,
10-23 17:50:27.421 I/ReactNativeJS(18100):   longitude1: 77.8299733,
10-23 17:50:27.421 I/ReactNativeJS(18100):   latitude2: 12.7486296,
10-23 17:50:27.421 I/ReactNativeJS(18100):   longitude2: 77.8299689 }
10-23 17:50:27.421 I/ReactNativeJS(18100): '≡ƒôÉ [DISTANCE-SERVICE] Coordinate differences:', { lat_diff: 0.000001299999999204715,
10-23 17:50:27.421 I/ReactNativeJS(18100):   lng_diff: 0.0000044000000087862645,
10-23 17:50:27.421 I/ReactNativeJS(18100):   very_close: true,
10-23 17:50:27.421 I/ReactNativeJS(18100):   essentially_same: true }
10-23 17:50:27.421 I/ReactNativeJS(18100): ≡ƒôÉ [DISTANCE-SERVICE] Coordinates are essentially the same, returning 0km
10-23 17:50:27.422 I/ReactNativeJS(18100): '≡ƒôÅ [DRIVER-SERVICE] Distance for driver eb91d7e5-e2f2-4021-a8c8-3739a3d4cae4 (undefined):', { distance_km: '0.0000',
10-23 17:50:27.422 I/ReactNativeJS(18100):   within_radius: true,
10-23 17:50:27.422 I/ReactNativeJS(18100):   radius_limit: '10km',
10-23 17:50:27.422 I/ReactNativeJS(18100):   driver_coords: { lat: 12.7486296, lng: 77.8299689 },
10-23 17:50:27.422 I/ReactNativeJS(18100):   customer_coords: { lat: 12.7486283, lng: 77.8299733 } }
10-23 17:50:27.422 I/ReactNativeJS(18100): Γ£à [DRIVER-SERVICE] Driver eb91d7e5-e2f2-4021-a8c8-3739a3d4cae4 (undefined) INCLUDED: 0.0000km
10-23 17:50:27.422 I/ReactNativeJS(18100): Γ¥î [DRIVER-SERVICE] Driver 058f85df-35b3-4027-81a1-bd52a0df8e4a (undefined) skipped: no recent location
10-23 17:50:27.422 I/ReactNativeJS(18100): ≡ƒôè [DRIVER-SERVICE] ===== DIRECT DATABASE ACCESS RESULT =====
10-23 17:50:27.422 I/ReactNativeJS(18100): '≡ƒôè [DRIVER-SERVICE] Final summary:', { total_drivers_processed: 21,
10-23 17:50:27.422 I/ReactNativeJS(18100):   available_drivers_found: 1,
10-23 17:50:27.422 I/ReactNativeJS(18100):   customer_location: { lat: 12.7486283, lng: 77.8299733 },
10-23 17:50:27.422 I/ReactNativeJS(18100):   radius_km: 10,
10-23 17:50:27.422 I/ReactNativeJS(18100):   vehicle_type_filter: 'all (no filter applied)' }
10-23 17:50:27.422 I/ReactNativeJS(18100): '≡ƒöä [DRIVER-SERVICE] Polling update:', 1, 'drivers'
10-23 17:50:27.422 I/ReactNativeJS(18100): '≡ƒôì [HOME] Received driver locations update:', 1, 'drivers'
10-23 17:50:27.424 W/ReactNativeJS(18100): ≡ƒÅá [HOME] ===== RENDERING HOME SCREEN =====
10-23 17:50:27.424 W/ReactNativeJS(18100): '≡ƒÅá [HOME] currentLocation:', '{"altitude":771.7999877929688,"heading":0,"altitudeAccuracy":1.3241634368896484,"latitude":12.7486283,"speed":0,"longitude":77.8299733,"accuracy":2.200000047683716}'
10-23 17:50:27.424 W/ReactNativeJS(18100): '≡ƒÅá [HOME] pickupCoords:', '{"latitude":12.7486283,"longitude":77.8299733}'
10-23 17:50:27.424 W/ReactNativeJS(18100): '≡ƒÅá [HOME] destinationCoords:', 'null'
10-23 17:50:27.424 W/ReactNativeJS(18100): '≡ƒÅá [HOME] pickupLocation text:', 'PRXJ+F32, Brindavan Nagar, Plot 87, NGGO\'s Colony, Anand Nagar, Hosur, Tamil Nadu 635109, India'
10-23 17:50:27.424 W/ReactNativeJS(18100): '≡ƒÅá [HOME] availableDrivers count:', 1
10-23 17:50:27.424 W/ReactNativeJS(18100): '≡ƒÅá [HOME] showDriversOnMap:', true
10-23 17:50:27.424 I/ReactNativeJS(18100): '≡ƒÅá≡ƒÅá≡ƒÅá [HOME-V2] ABOUT TO RENDER SimpleHosurMap with props:', { hasUserLocation: true,
10-23 17:50:27.424 I/ReactNativeJS(18100):   hasPickup: true,
10-23 17:50:27.424 I/ReactNativeJS(18100):   hasDestination: false,
10-23 17:50:27.424 I/ReactNativeJS(18100):   showDriversOnMap: true,
10-23 17:50:27.424 I/ReactNativeJS(18100):   timestamp: '2025-10-23T12:20:27.424Z' }
10-23 17:50:27.425 I/ReactNativeJS(18100): ≡ƒº¬≡ƒº¬≡ƒº¬ TEST MAP RENDERING NOW
10-23 17:50:27.425 I/ReactNativeJS(18100): '≡ƒº¬ Props received:', [ 'userLocation',
10-23 17:50:27.425 I/ReactNativeJS(18100):   'pickupLocation',
10-23 17:50:27.425 I/ReactNativeJS(18100):   'destinationLocation',
10-23 17:50:27.425 I/ReactNativeJS(18100):   'onRegionChangeComplete',
10-23 17:50:27.425 I/ReactNativeJS(18100):   'onDestinationDragEnd',
10-23 17:50:27.425 I/ReactNativeJS(18100):   'showCenteredPin',
10-23 17:50:27.425 I/ReactNativeJS(18100):   'availableDrivers',
10-23 17:50:27.425 I/ReactNativeJS(18100):   'showDrivers' ]
10-23 17:50:27.438 I/ReactNativeJS(18100): ≡ƒôè [HOME] ===== AVAILABLE DRIVERS STATE CHANGED =====
10-23 17:50:27.438 I/ReactNativeJS(18100): '≡ƒôè [HOME] availableDrivers state update:', { count: 1,
10-23 17:50:27.438 I/ReactNativeJS(18100):   showDriversOnMap: true,
10-23 17:50:27.438 I/ReactNativeJS(18100):   driversPassedToMap: 1,
10-23 17:50:27.438 I/ReactNativeJS(18100):   drivers:
10-23 17:50:27.438 I/ReactNativeJS(18100):    [ { id: 'eb91d7e5-e2f2-4021-a8c8-3739a3d4cae4',
10-23 17:50:27.438 I/ReactNativeJS(18100):        vehicle_type: 'sedan',
10-23 17:50:27.438 I/ReactNativeJS(18100):        distance: '0.00km',
10-23 17:50:27.438 I/ReactNativeJS(18100):        coordinates: { lat: 12.7486296, lng: 77.8299689 },
10-23 17:50:27.438 I/ReactNativeJS(18100):        heading: null,
10-23 17:50:27.438 I/ReactNativeJS(18100):        rating: 5 } ] }
10-23 17:50:27.438 I/ReactNativeJS(18100): ≡ƒù║∩╕Å [HOME] ===== DRIVERS BEING PASSED TO MAP =====
10-23 17:50:27.438 I/ReactNativeJS(18100): '≡ƒù║∩╕Å [HOME] Map will receive', 1, 'drivers:'
10-23 17:50:27.439 I/ReactNativeJS(18100): '≡ƒù║∩╕Å [HOME] Driver 1 for map:', { driver_id: 'eb91d7e5-e2f2-4021-a8c8-3739a3d4cae4',
10-23 17:50:27.439 I/ReactNativeJS(18100):   user_id: '1c4ac410-54d8-4b5e-960b-3afcbebd115d',
10-23 17:50:27.439 I/ReactNativeJS(18100):   vehicle_type: 'sedan',
10-23 17:50:27.439 I/ReactNativeJS(18100):   coordinates: { lat: 12.7486296, lng: 77.8299689 },
10-23 17:50:27.439 I/ReactNativeJS(18100):   distance: '0.0000km',
10-23 17:50:27.439 I/ReactNativeJS(18100):   rating: 5,
10-23 17:50:27.439 I/ReactNativeJS(18100):   heading: null,
10-23 17:50:27.439 I/ReactNativeJS(18100):   updated_at: '2025-10-23T12:18:41.271673+00:00' }
10-23 17:50:33.074 W/ReactNativeJS(18100): ≡ƒÅá [HOME] ===== RENDERING HOME SCREEN =====
10-23 17:50:33.074 W/ReactNativeJS(18100): '≡ƒÅá [HOME] currentLocation:', '{"altitude":771.7999877929688,"heading":0,"altitudeAccuracy":1.3241634368896484,"latitude":12.7486283,"speed":0,"longitude":77.8299733,"accuracy":2.200000047683716}'
10-23 17:50:33.074 W/ReactNativeJS(18100): '≡ƒÅá [HOME] pickupCoords:', '{"latitude":12.7486283,"longitude":77.8299733}'
10-23 17:50:33.074 W/ReactNativeJS(18100): '≡ƒÅá [HOME] destinationCoords:', 'null'
10-23 17:50:33.074 W/ReactNativeJS(18100): '≡ƒÅá [HOME] pickupLocation text:', 'PRXJ+F32, Brindavan Nagar, Plot 87, NGGO\'s Colony, Anand Nagar, Hosur, Tamil Nadu 635109, India'
10-23 17:50:33.074 W/ReactNativeJS(18100): '≡ƒÅá [HOME] availableDrivers count:', 1
10-23 17:50:33.074 W/ReactNativeJS(18100): '≡ƒÅá [HOME] showDriversOnMap:', true
10-23 17:50:33.075 I/ReactNativeJS(18100): '≡ƒÅá≡ƒÅá≡ƒÅá [HOME-V2] ABOUT TO RENDER SimpleHosurMap with props:', { hasUserLocation: true,
10-23 17:50:33.075 I/ReactNativeJS(18100):   hasPickup: true,
10-23 17:50:33.075 I/ReactNativeJS(18100):   hasDestination: false,
10-23 17:50:33.075 I/ReactNativeJS(18100):   showDriversOnMap: true,
10-23 17:50:33.075 I/ReactNativeJS(18100):   timestamp: '2025-10-23T12:20:33.074Z' }
10-23 17:50:33.075 I/ReactNativeJS(18100): ≡ƒº¬≡ƒº¬≡ƒº¬ TEST MAP RENDERING NOW
10-23 17:50:33.075 I/ReactNativeJS(18100): '≡ƒº¬ Props received:', [ 'userLocation',
10-23 17:50:33.075 I/ReactNativeJS(18100):   'pickupLocation',
10-23 17:50:33.075 I/ReactNativeJS(18100):   'destinationLocation',
10-23 17:50:33.075 I/ReactNativeJS(18100):   'onRegionChangeComplete',
10-23 17:50:33.075 I/ReactNativeJS(18100):   'onDestinationDragEnd',
10-23 17:50:33.075 I/ReactNativeJS(18100):   'showCenteredPin',
10-23 17:50:33.075 I/ReactNativeJS(18100):   'availableDrivers',
10-23 17:50:33.075 I/ReactNativeJS(18100):   'showDrivers' ]
10-23 17:50:33.138 I/ReactNativeJS(18100): '≡ƒôÜ Loaded', 1, 'recent searches'
10-23 17:50:33.971 I/ReactNativeJS(18100): '≡ƒôì Location selected:', { description: 'Bagalur, Tamil Nadu, India',
10-23 17:50:33.971 I/ReactNativeJS(18100):   coordinates: { latitude: 12.8303987, longitude: 77.86623689999999 },
10-23 17:50:33.971 I/ReactNativeJS(18100):   type: 'recent' }
10-23 17:50:33.971 I/ReactNativeJS(18100): Γ£à Calling onLocationSelect with valid coordinates
10-23 17:50:33.971 I/ReactNativeJS(18100): ≡ƒöì Destination location selected, validating zone...
10-23 17:50:33.971 I/ReactNativeJS(18100): '≡ƒöì Selected destination:', { location: 'Bagalur, Tamil Nadu, India',
10-23 17:50:33.971 I/ReactNativeJS(18100):   coords: { latitude: 12.8303987, longitude: 77.86623689999999 } }
10-23 17:50:33.971 I/ReactNativeJS(18100): '≡ƒöì Active zones for validation:', 2
10-23 17:50:33.971 I/ReactNativeJS(18100): ≡ƒöì [ZONE-VALIDATION] Starting destination zone validation
10-23 17:50:33.971 I/ReactNativeJS(18100): '≡ƒöì [ZONE-VALIDATION] Location:', 'Bagalur, Tamil Nadu, India'
10-23 17:50:33.971 I/ReactNativeJS(18100): '≡ƒöì [ZONE-VALIDATION] Coordinates:', { latitude: 12.8303987, longitude: 77.86623689999999 }
10-23 17:50:33.971 I/ReactNativeJS(18100): '≡ƒöì [ZONE-VALIDATION] Active zones available:', 2
10-23 17:50:33.972 I/ReactNativeJS(18100): '≡ƒöì [ZONE-VALIDATION] Zone names:', [ 'Inner Ring', 'Outer Ring' ]
10-23 17:50:33.972 I/ReactNativeJS(18100): '≡ƒöì [ZONE-VALIDATION] Full zone data:', '[\n  {\n    "id": "90c1bc5f-7a2d-4585-a2ef-0a85e05e138a",\n    "name": "Inner Ring",\n    "city": "Hosur",\n    "state": "Tamil Nadu",\n    "coordinates": {\n      "type": "circle",\n      "center": {\n        "lat": 12.733564125720461,\n        "lng": 77.82145902191407\n      },\n      "radius": 5882.595479495581\n    },\n    "center_latitude": 12.73356413,\n    "center_longitude": 77.82145902,\n    "radius_km": 5.88,\n    "base_fare": 50,\n    "per_km_rate": 12,\n    "surge_multiplier": 1,\n    "is_active": true,\n    "created_at": "2025-10-22T12:45:47.862374+00:00",\n    "updated_at": "2025-10-22T12:45:47.862374+00:00"\n  },\n  {\n    "id": "8d504fe8-e310-459f-b6d9-29ec5b42ecfc",\n    "name": "Outer Ring",\n    "city": "Hosur",\n    "state": "Tamil Nadu",\n    "coordinates": {\n      "type": "circle",\n      "center": {\n        "lat": 12.736626222356561,\n        "lng": 77.82943489347866\n      },\n      "radius": 13004.829888314574\n    },\n    "center_latitude": 12.73662622,\n    "center_longitude": 77.82943489,\n    "radius_km": 13,\n    "base_fare": 50,\n    "per_km_rate": 12,\n    "surge_multiplier": 1,\n    "is_active": true,\n    "created_at": "2025-10-22T12:04:26.098131+00:00",\n    "updated_at": "2025-10-22T12:04:26.098131+00:00"\n  }\n]'
10-23 17:50:33.973 I/ReactNativeJS(18100): '≡ƒöì Checking if point is in service area:', { coordinates: { latitude: 12.8303987, longitude: 77.86623689999999 },
10-23 17:50:33.973 I/ReactNativeJS(18100):   zonesCount: 2,
10-23 17:50:33.973 I/ReactNativeJS(18100):   zones:
10-23 17:50:33.973 I/ReactNativeJS(18100):    [ { name: 'Inner Ring',
10-23 17:50:33.973 I/ReactNativeJS(18100):        type: 'circle',
10-23 17:50:33.973 I/ReactNativeJS(18100):        radius_km: 5.88,
10-23 17:50:33.973 I/ReactNativeJS(18100):        center_lat: 12.73356413,
10-23 17:50:33.973 I/ReactNativeJS(18100):        center_lng: 77.82145902 },
10-23 17:50:33.973 I/ReactNativeJS(18100):      { name: 'Outer Ring',
10-23 17:50:33.973 I/ReactNativeJS(18100):        type: 'circle',
10-23 17:50:33.973 I/ReactNativeJS(18100):        radius_km: 13,
10-23 17:50:33.973 I/ReactNativeJS(18100):        center_lat: 12.73662622,
10-23 17:50:33.973 I/ReactNativeJS(18100):        center_lng: 77.82943489 } ] }
10-23 17:50:33.973 I/ReactNativeJS(18100): ≡ƒöì Using circle-based zone validation
10-23 17:50:33.973 I/ReactNativeJS(18100): '≡ƒöì Raw Outer Ring data:', { center_latitude: 12.73662622,
10-23 17:50:33.973 I/ReactNativeJS(18100):   center_latitude_type: 'number',
10-23 17:50:33.973 I/ReactNativeJS(18100):   center_longitude: 77.82943489,
10-23 17:50:33.973 I/ReactNativeJS(18100):   center_longitude_type: 'number',
10-23 17:50:33.973 I/ReactNativeJS(18100):   radius_km: 13,
10-23 17:50:33.973 I/ReactNativeJS(18100):   radius_km_type: 'number' }
10-23 17:50:33.973 I/ReactNativeJS(18100): '≡ƒöì Parsed values:', { centerLat: 12.73662622,
10-23 17:50:33.973 I/ReactNativeJS(18100):   centerLng: 77.82943489,
10-23 17:50:33.973 I/ReactNativeJS(18100):   radiusKm: 13,
10-23 17:50:33.973 I/ReactNativeJS(18100):   allValid: true }
10-23 17:50:33.974 I/ReactNativeJS(18100): '≡ƒöì Circle zone check:', { point: { latitude: 12.8303987, longitude: 77.86623689999999 },
10-23 17:50:33.974 I/ReactNativeJS(18100):   center: { latitude: 12.73662622, longitude: 77.82943489 },
10-23 17:50:33.974 I/ReactNativeJS(18100):   radiusKm: '13km',
10-23 17:50:33.974 I/ReactNativeJS(18100):   calculatedDistance: '11.16km',
10-23 17:50:33.974 I/ReactNativeJS(18100):   difference: '-1.84km',
10-23 17:50:33.974 I/ReactNativeJS(18100):   isInside: 'Γ£à INSIDE' }
10-23 17:50:33.974 I/ReactNativeJS(18100): ≡ƒöì Point is INSIDE Outer Ring (13km radius)
10-23 17:50:33.974 I/ReactNativeJS(18100): Γ£à [ZONE-VALIDATION] Destination location is within active zones
10-23 17:50:33.975 W/ReactNativeJS(18100): ≡ƒÅá [HOME] ===== RENDERING HOME SCREEN =====
10-23 17:50:33.975 W/ReactNativeJS(18100): '≡ƒÅá [HOME] currentLocation:', '{"altitude":771.7999877929688,"heading":0,"altitudeAccuracy":1.3241634368896484,"latitude":12.7486283,"speed":0,"longitude":77.8299733,"accuracy":2.200000047683716}'
10-23 17:50:33.975 W/ReactNativeJS(18100): '≡ƒÅá [HOME] pickupCoords:', '{"latitude":12.7486283,"longitude":77.8299733}'
10-23 17:50:33.976 W/ReactNativeJS(18100): '≡ƒÅá [HOME] destinationCoords:', '{"latitude":12.8303987,"longitude":77.86623689999999}'
10-23 17:50:33.976 W/ReactNativeJS(18100): '≡ƒÅá [HOME] pickupLocation text:', 'PRXJ+F32, Brindavan Nagar, Plot 87, NGGO\'s Colony, Anand Nagar, Hosur, Tamil Nadu 635109, India'
10-23 17:50:33.976 W/ReactNativeJS(18100): '≡ƒÅá [HOME] availableDrivers count:', 1
10-23 17:50:33.976 W/ReactNativeJS(18100): '≡ƒÅá [HOME] showDriversOnMap:', true
10-23 17:50:33.976 I/ReactNativeJS(18100): '≡ƒÅá≡ƒÅá≡ƒÅá [HOME-V2] ABOUT TO RENDER SimpleHosurMap with props:', { hasUserLocation: true,
10-23 17:50:33.976 I/ReactNativeJS(18100):   hasPickup: true,
10-23 17:50:33.976 I/ReactNativeJS(18100):   hasDestination: true,
10-23 17:50:33.976 I/ReactNativeJS(18100):   showDriversOnMap: true,
10-23 17:50:33.976 I/ReactNativeJS(18100):   timestamp: '2025-10-23T12:20:33.976Z' }
10-23 17:50:33.976 I/ReactNativeJS(18100): '≡ƒÆ░ [UI] Displaying fare for hatchback:', { fare: 0,
10-23 17:50:33.976 I/ReactNativeJS(18100):   isSelected: false,
10-23 17:50:33.976 I/ReactNativeJS(18100):   showingCalculated: false,
10-23 17:50:33.976 I/ReactNativeJS(18100):   source: 'minimum_fare' }
10-23 17:50:33.981 I/ReactNativeJS(18100): '≡ƒÆ░ [UI] Displaying fare for hatchback_ac:', { fare: 0,
10-23 17:50:33.981 I/ReactNativeJS(18100):   isSelected: false,
10-23 17:50:33.981 I/ReactNativeJS(18100):   showingCalculated: false,
10-23 17:50:33.981 I/ReactNativeJS(18100):   source: 'minimum_fare' }
10-23 17:50:33.985 I/ReactNativeJS(18100): '≡ƒÆ░ [UI] Displaying fare for sedan:', { fare: 0,
10-23 17:50:33.985 I/ReactNativeJS(18100):   isSelected: true,
10-23 17:50:33.985 I/ReactNativeJS(18100):   showingCalculated: false,
10-23 17:50:33.985 I/ReactNativeJS(18100):   source: 'minimum_fare' }
10-23 17:50:33.988 I/ReactNativeJS(18100): '≡ƒÆ░ [UI] Displaying fare for sedan_ac:', { fare: 0,
10-23 17:50:33.988 I/ReactNativeJS(18100):   isSelected: false,
10-23 17:50:33.988 I/ReactNativeJS(18100):   showingCalculated: false,
10-23 17:50:33.988 I/ReactNativeJS(18100):   source: 'minimum_fare' }
10-23 17:50:33.990 I/ReactNativeJS(18100): '≡ƒÆ░ [UI] Displaying fare for suv:', { fare: 90,
10-23 17:50:33.990 I/ReactNativeJS(18100):   isSelected: false,
10-23 17:50:33.990 I/ReactNativeJS(18100):   showingCalculated: true,
10-23 17:50:33.990 I/ReactNativeJS(18100):   source: 'calculated' }
10-23 17:50:33.992 I/ReactNativeJS(18100): '≡ƒÆ░ [UI] Displaying fare for suv_ac:', { fare: 0,
10-23 17:50:33.992 I/ReactNativeJS(18100):   isSelected: false,
10-23 17:50:33.992 I/ReactNativeJS(18100):   showingCalculated: false,
10-23 17:50:33.992 I/ReactNativeJS(18100):   source: 'minimum_fare' }
10-23 17:50:33.994 I/ReactNativeJS(18100): ≡ƒº¬≡ƒº¬≡ƒº¬ TEST MAP RENDERING NOW
10-23 17:50:33.995 I/ReactNativeJS(18100): '≡ƒº¬ Props received:', [ 'userLocation',
10-23 17:50:33.995 I/ReactNativeJS(18100):   'pickupLocation',
10-23 17:50:33.995 I/ReactNativeJS(18100):   'destinationLocation',
10-23 17:50:33.995 I/ReactNativeJS(18100):   'onRegionChangeComplete',
10-23 17:50:33.995 I/ReactNativeJS(18100):   'onDestinationDragEnd',
10-23 17:50:33.995 I/ReactNativeJS(18100):   'showCenteredPin',
10-23 17:50:33.995 I/ReactNativeJS(18100):   'availableDrivers',
10-23 17:50:33.995 I/ReactNativeJS(18100):   'showDrivers' ]
10-23 17:50:34.009 I/ReactNativeJS(18100): ≡ƒù║∩╕Å [HOME] ===== HIDING DRIVERS FOR ROUTE DISPLAY =====
10-23 17:50:34.009 I/ReactNativeJS(18100): ≡ƒù║∩╕Å [HOME] Both pickup and destination selected, hiding drivers to show route
10-23 17:50:34.009 I/ReactNativeJS(18100): ≡ƒ¢æ [HOME] Stopping driver location polling
10-23 17:50:34.009 I/ReactNativeJS(18100): ≡ƒ¢æ [DRIVER-SERVICE] Stopped driver location polling
10-23 17:50:34.009 I/ReactNativeJS(18100): ≡ƒöä [HOME] Triggering fare calculation due to location/vehicle change
10-23 17:50:34.009 I/ReactNativeJS(18100): ≡ƒÆ░ [HOME] ===== STARTING FARE CALCULATION WITH DEADHEAD =====
10-23 17:50:34.010 I/ReactNativeJS(18100): '≡ƒÆ░ [HOME] Calculating fare for Bagalur trip:', { pickup: 'PRXJ+F32, Brindavan Nagar, Plot 87, NGGO\'s Colony, Anand Nagar, Hosur, Tamil Nadu 635109, India',
10-23 17:50:34.010 I/ReactNativeJS(18100):   destination: 'Bagalur, Tamil Nadu, India',
10-23 17:50:34.010 I/ReactNativeJS(18100):   pickupCoords: { latitude: 12.7486283, longitude: 77.8299733 },
10-23 17:50:34.010 I/ReactNativeJS(18100):   destinationCoords: { latitude: 12.8303987, longitude: 77.86623689999999 },
10-23 17:50:34.010 I/ReactNativeJS(18100):   selectedVehicle: 'sedan',
10-23 17:50:34.010 I/ReactNativeJS(18100):   timestamp: '2025-10-23T12:20:34.009Z',
10-23 17:50:34.010 I/ReactNativeJS(18100):   shouldHaveDeadhead: true }
10-23 17:50:34.010 I/ReactNativeJS(18100): ≡ƒÆ░ [HOME] Calling fareCalculator.calculateFare...
10-23 17:50:34.010 I/ReactNativeJS(18100): '≡ƒÆ░ [FARE-CALC] Input parameters:', { vehicleType: 'sedan',
10-23 17:50:34.010 I/ReactNativeJS(18100):   pickup: { latitude: 12.7486283, longitude: 77.8299733 },
10-23 17:50:34.010 I/ReactNativeJS(18100):   destination: { latitude: 12.8303987, longitude: 77.86623689999999 },
10-23 17:50:34.010 I/ReactNativeJS(18100):   timestamp: '2025-10-23T12:20:34.010Z',
10-23 17:50:34.010 I/ReactNativeJS(18100):   supabaseUrl: 'SET',
10-23 17:50:34.010 I/ReactNativeJS(18100):   supabaseKey: 'SET' }
10-23 17:50:34.010 I/ReactNativeJS(18100): ≡ƒÄ» [FARE-CALC] Using edge function for deadhead calculation...
10-23 17:50:34.010 I/ReactNativeJS(18100): '≡ƒöì [FARE-CALC] Environment validation:', { supabaseUrl: 'SET',
10-23 17:50:34.010 I/ReactNativeJS(18100):   supabaseKey: 'SET',
10-23 17:50:34.010 I/ReactNativeJS(18100):   urlValid: true,
10-23 17:50:34.010 I/ReactNativeJS(18100):   keyValid: true }
10-23 17:50:34.010 I/ReactNativeJS(18100): '≡ƒÄ» [FARE-CALC] Edge function URL:', 'https://whubaypabojomdyfqxcf.supabase.co/functions/v1/fare-calculation'
10-23 17:50:34.010 I/ReactNativeJS(18100): ≡ƒôí [FARE-CALC] Making request to edge function...
10-23 17:50:34.010 I/ReactNativeJS(18100): '≡ƒôí [FARE-CALC] Request body:', { pickup_latitude: 12.7486283,
10-23 17:50:34.010 I/ReactNativeJS(18100):   pickup_longitude: 77.8299733,
10-23 17:50:34.010 I/ReactNativeJS(18100):   destination_latitude: 12.8303987,
10-23 17:50:34.010 I/ReactNativeJS(18100):   destination_longitude: 77.86623689999999,
10-23 17:50:34.010 I/ReactNativeJS(18100):   vehicle_type: 'sedan',
10-23 17:50:34.010 I/ReactNativeJS(18100):   booking_type: 'regular' }
10-23 17:50:34.011 W/ReactNativeJS(18100): ≡ƒÅá [HOME] ===== RENDERING HOME SCREEN =====
10-23 17:50:34.011 W/ReactNativeJS(18100): '≡ƒÅá [HOME] currentLocation:', '{"altitude":771.7999877929688,"heading":0,"altitudeAccuracy":1.3241634368896484,"latitude":12.7486283,"speed":0,"longitude":77.8299733,"accuracy":2.200000047683716}'
10-23 17:50:34.011 W/ReactNativeJS(18100): '≡ƒÅá [HOME] pickupCoords:', '{"latitude":12.7486283,"longitude":77.8299733}'
10-23 17:50:34.011 W/ReactNativeJS(18100): '≡ƒÅá [HOME] destinationCoords:', '{"latitude":12.8303987,"longitude":77.86623689999999}'
10-23 17:50:34.011 W/ReactNativeJS(18100): '≡ƒÅá [HOME] pickupLocation text:', 'PRXJ+F32, Brindavan Nagar, Plot 87, NGGO\'s Colony, Anand Nagar, Hosur, Tamil Nadu 635109, India'
10-23 17:50:34.011 W/ReactNativeJS(18100): '≡ƒÅá [HOME] availableDrivers count:', 1
10-23 17:50:34.011 W/ReactNativeJS(18100): '≡ƒÅá [HOME] showDriversOnMap:', false
10-23 17:50:34.011 I/ReactNativeJS(18100): '≡ƒÅá≡ƒÅá≡ƒÅá [HOME-V2] ABOUT TO RENDER SimpleHosurMap with props:', { hasUserLocation: true,
10-23 17:50:34.011 I/ReactNativeJS(18100):   hasPickup: true,
10-23 17:50:34.011 I/ReactNativeJS(18100):   hasDestination: true,
10-23 17:50:34.011 I/ReactNativeJS(18100):   showDriversOnMap: false,
10-23 17:50:34.011 I/ReactNativeJS(18100):   timestamp: '2025-10-23T12:20:34.011Z' }
10-23 17:50:34.011 I/ReactNativeJS(18100): '≡ƒÆ░ [UI] Displaying fare for hatchback:', { fare: 0,
10-23 17:50:34.011 I/ReactNativeJS(18100):   isSelected: false,
10-23 17:50:34.011 I/ReactNativeJS(18100):   showingCalculated: false,
10-23 17:50:34.011 I/ReactNativeJS(18100):   source: 'minimum_fare' }
10-23 17:50:34.013 I/ReactNativeJS(18100): '≡ƒÆ░ [UI] Displaying fare for hatchback_ac:', { fare: 0,
10-23 17:50:34.013 I/ReactNativeJS(18100):   isSelected: false,
10-23 17:50:34.013 I/ReactNativeJS(18100):   showingCalculated: false,
10-23 17:50:34.013 I/ReactNativeJS(18100):   source: 'minimum_fare' }
10-23 17:50:34.015 I/ReactNativeJS(18100): '≡ƒÆ░ [UI] Displaying fare for sedan:', { fare: 0,
10-23 17:50:34.015 I/ReactNativeJS(18100):   isSelected: true,
10-23 17:50:34.015 I/ReactNativeJS(18100):   showingCalculated: false,
10-23 17:50:34.015 I/ReactNativeJS(18100):   source: 'minimum_fare' }
10-23 17:50:34.015 I/ReactNativeJS(18100): '≡ƒÆ░ [UI] Displaying fare for sedan_ac:', { fare: 0,
10-23 17:50:34.015 I/ReactNativeJS(18100):   isSelected: false,
10-23 17:50:34.015 I/ReactNativeJS(18100):   showingCalculated: false,
10-23 17:50:34.015 I/ReactNativeJS(18100):   source: 'minimum_fare' }
10-23 17:50:34.017 I/ReactNativeJS(18100): '≡ƒÆ░ [UI] Displaying fare for suv:', { fare: 90,
10-23 17:50:34.017 I/ReactNativeJS(18100):   isSelected: false,
10-23 17:50:34.017 I/ReactNativeJS(18100):   showingCalculated: true,
10-23 17:50:34.017 I/ReactNativeJS(18100):   source: 'calculated' }
10-23 17:50:34.018 I/ReactNativeJS(18100): '≡ƒÆ░ [UI] Displaying fare for suv_ac:', { fare: 0,
10-23 17:50:34.018 I/ReactNativeJS(18100):   isSelected: false,
10-23 17:50:34.018 I/ReactNativeJS(18100):   showingCalculated: false,
10-23 17:50:34.018 I/ReactNativeJS(18100):   source: 'minimum_fare' }
10-23 17:50:34.020 I/ReactNativeJS(18100): ≡ƒº¬≡ƒº¬≡ƒº¬ TEST MAP RENDERING NOW
10-23 17:50:34.020 I/ReactNativeJS(18100): '≡ƒº¬ Props received:', [ 'userLocation',
10-23 17:50:34.020 I/ReactNativeJS(18100):   'pickupLocation',
10-23 17:50:34.020 I/ReactNativeJS(18100):   'destinationLocation',
10-23 17:50:34.020 I/ReactNativeJS(18100):   'onRegionChangeComplete',
10-23 17:50:34.020 I/ReactNativeJS(18100):   'onDestinationDragEnd',
10-23 17:50:34.020 I/ReactNativeJS(18100):   'showCenteredPin',
10-23 17:50:34.020 I/ReactNativeJS(18100):   'availableDrivers',
10-23 17:50:34.020 I/ReactNativeJS(18100):   'showDrivers' ]
10-23 17:50:35.106 I/ReactNativeJS(18100): '≡ƒôí [FARE-CALC] Edge function response status:', 200
10-23 17:50:35.112 I/ReactNativeJS(18100): '≡ƒôè [FARE-CALC] Edge function raw result for Bagalur:', { success: true,
10-23 17:50:35.112 I/ReactNativeJS(18100):   fareBreakdown:
10-23 17:50:35.112 I/ReactNativeJS(18100):    { baseFare: 145,
10-23 17:50:35.112 I/ReactNativeJS(18100):      distanceFare: 164,
10-23 17:50:35.112 I/ReactNativeJS(18100):      timeFare: 0,
10-23 17:50:35.112 I/ReactNativeJS(18100):      surgeFare: 0,
10-23 17:50:35.112 I/ReactNativeJS(18100):      platformFee: 0,
10-23 17:50:35.112 I/ReactNativeJS(18100):      deadheadCharge: 138,
10-23 17:50:35.112 I/ReactNativeJS(18100):      totalFare: 447,
10-23 17:50:35.112 I/ReactNativeJS(18100):      distance: 10.55,
10-23 17:50:35.112 I/ReactNativeJS(18100):      duration: 15,
10-23 17:50:35.112 I/ReactNativeJS(18100):      deadheadDistance: 11.03 },
10-23 17:50:35.112 I/ReactNativeJS(18100):   config:
10-23 17:50:35.112 I/ReactNativeJS(18100):    { vehicle_type: 'sedan',
10-23 17:50:35.112 I/ReactNativeJS(18100):      base_fare: 145,
10-23 17:50:35.112 I/ReactNativeJS(18100):      per_km_rate: 25,
10-23 17:50:35.112 I/ReactNativeJS(18100):      per_minute_rate: 0,
10-23 17:50:35.112 I/ReactNativeJS(18100):      minimum_fare: 0,
10-23 17:50:35.112 I/ReactNativeJS(18100):      surge_multiplier: 1,
10-23 17:50:35.112 I/ReactNativeJS(18100):      platform_fee_percent: 0 },
10-23 17:50:35.112 I/ReactNativeJS(18100):   deadheadInfo:
10-23 17:50:35.112 I/ReactNativeJS(18100):    { applied: true,
10-23 17:50:35.112 I/ReactNativeJS(18100):      reason: 'Between Inner and Outer Ring',
10-23 17:50:35.112 I/ReactNativeJS(18100):      deadheadDistance: 11.025914915977474,
10-23 17:50:35.112 I/ReactNativeJS(18100):      deadheadCharge: 137.82393644971842,
10-23 17:50:35.112 I/ReactNativeJS(18100):      zoneStatus: 'Between Inner and Outer Ring' } }
10-23 17:50:35.112 I/ReactNativeJS(18100): Γ£à [FARE-CALC] ===== EDGE FUNCTION SUCCESS WITH DEADHEAD FOR BAGALUR =====
10-23 17:50:35.114 I/ReactNativeJS(18100): 'Γ£à [FARE-CALC] Complete fare breakdown:', { baseFare: 'Γé╣145',
10-23 17:50:35.114 I/ReactNativeJS(18100):   distanceFare: 'Γé╣164',
10-23 17:50:35.114 I/ReactNativeJS(18100):   timeFare: 'Γé╣0',
10-23 17:50:35.114 I/ReactNativeJS(18100):   surgeFare: 'Γé╣0',
10-23 17:50:35.114 I/ReactNativeJS(18100):   platformFee: 'Γé╣0',
10-23 17:50:35.114 I/ReactNativeJS(18100):   deadheadCharge: 'Γé╣138',
10-23 17:50:35.114 I/ReactNativeJS(18100):   deadheadDistance: '11.03km',
10-23 17:50:35.114 I/ReactNativeJS(18100):   totalFare: 'Γé╣447',
10-23 17:50:35.114 I/ReactNativeJS(18100):   deadheadInfo:
10-23 17:50:35.114 I/ReactNativeJS(18100):    { applied: true,
10-23 17:50:35.114 I/ReactNativeJS(18100):      reason: 'Between Inner and Outer Ring',
10-23 17:50:35.114 I/ReactNativeJS(18100):      deadheadDistance: 11.025914915977474,
10-23 17:50:35.114 I/ReactNativeJS(18100):      deadheadCharge: 137.82393644971842,
10-23 17:50:35.114 I/ReactNativeJS(18100):      zoneStatus: 'Between Inner and Outer Ring' },
10-23 17:50:35.114 I/ReactNativeJS(18100):   formula: 'Γé╣145 + Γé╣164 + Γé╣0 + Γé╣0 + Γé╣0 + Γé╣138 = Γé╣447',
10-23 17:50:35.114 I/ReactNativeJS(18100):   bagalurSpecific: 'This should show deadhead charges for Bagalur destination' }
10-23 17:50:35.115 I/ReactNativeJS(18100): 'Γ£à [FARE-CALC] Deadhead analysis for Bagalur:', { destination: { latitude: 12.8303987, longitude: 77.86623689999999 },
10-23 17:50:35.115 I/ReactNativeJS(18100):   deadheadApplied: true,
10-23 17:50:35.115 I/ReactNativeJS(18100):   deadheadReason: 'Between Inner and Outer Ring',
10-23 17:50:35.115 I/ReactNativeJS(18100):   zoneStatus: 'Between Inner and Outer Ring',
10-23 17:50:35.115 I/ReactNativeJS(18100):   expectedForBagalur: 'Should be between Inner and Outer Ring with deadhead charge' }
10-23 17:50:35.115 I/ReactNativeJS(18100): ≡ƒÆ░ [HOME] ===== FARE CALCULATION RESULT =====
10-23 17:50:35.116 I/ReactNativeJS(18100): 'Γ£à [HOME] Fare breakdown received:', { baseFare: 'Γé╣145',
10-23 17:50:35.116 I/ReactNativeJS(18100):   distanceFare: 'Γé╣164',
10-23 17:50:35.116 I/ReactNativeJS(18100):   timeFare: 'Γé╣0',
10-23 17:50:35.116 I/ReactNativeJS(18100):   surgeFare: 'Γé╣0',
10-23 17:50:35.116 I/ReactNativeJS(18100):   platformFee: 'Γé╣0',
10-23 17:50:35.116 I/ReactNativeJS(18100):   deadheadCharge: 'Γé╣138',
10-23 17:50:35.116 I/ReactNativeJS(18100):   deadheadDistance: '11.03km',
10-23 17:50:35.116 I/ReactNativeJS(18100):   totalFare: 'Γé╣447',
10-23 17:50:35.116 I/ReactNativeJS(18100):   distance: '10.55km',
10-23 17:50:35.116 I/ReactNativeJS(18100):   duration: '15min',
10-23 17:50:35.116 I/ReactNativeJS(18100):   hasDeadheadCharge: true,
10-23 17:50:35.116 I/ReactNativeJS(18100):   isBagalurTrip: true,
10-23 17:50:35.116 I/ReactNativeJS(18100):   expectedDeadhead: 'YES' }
10-23 17:50:35.117 I/ReactNativeJS(18100): '≡ƒÄ» [HOME] Γ£à DEADHEAD CHARGE APPLIED:', { destination: 'Bagalur, Tamil Nadu, India',
10-23 17:50:35.117 I/ReactNativeJS(18100):   deadheadCharge: 'Γé╣138',
10-23 17:50:35.117 I/ReactNativeJS(18100):   deadheadDistance: '11.03km',
10-23 17:50:35.117 I/ReactNativeJS(18100):   reason: 'Destination is between Inner Ring and Outer Ring' }
10-23 17:50:35.117 I/ReactNativeJS(18100): '≡ƒÆ░ [HOME] Calculating fares for all vehicle types based on', 'sedan', 'calculation'
10-23 17:50:35.117 I/ReactNativeJS(18100): ≡ƒÆ░ [HOME] hatchback (estimated): Γé╣447 (ratio-based from sedan)
10-23 17:50:35.117 I/ReactNativeJS(18100): ≡ƒÆ░ [HOME] hatchback_ac (estimated): Γé╣493 (ratio-based from sedan)
10-23 17:50:35.117 I/ReactNativeJS(18100): ≡ƒÆ░ [HOME] sedan (selected): Γé╣447 (exact calculation)
10-23 17:50:35.117 I/ReactNativeJS(18100): ≡ƒÆ░ [HOME] sedan_ac (estimated): Γé╣462 (ratio-based from sedan)
10-23 17:50:35.117 I/ReactNativeJS(18100): ≡ƒÆ░ [HOME] suv (estimated): Γé╣762 (ratio-based from sedan)
10-23 17:50:35.117 I/ReactNativeJS(18100): ≡ƒÆ░ [HOME] suv_ac (estimated): Γé╣1923 (ratio-based from sedan)
10-23 17:50:35.126 W/ReactNativeJS(18100): ≡ƒÅá [HOME] ===== RENDERING HOME SCREEN =====
10-23 17:50:35.127 W/ReactNativeJS(18100): '≡ƒÅá [HOME] currentLocation:', '{"altitude":771.7999877929688,"heading":0,"altitudeAccuracy":1.3241634368896484,"latitude":12.7486283,"speed":0,"longitude":77.8299733,"accuracy":2.200000047683716}'
10-23 17:50:35.127 W/ReactNativeJS(18100): '≡ƒÅá [HOME] pickupCoords:', '{"latitude":12.7486283,"longitude":77.8299733}'
10-23 17:50:35.127 W/ReactNativeJS(18100): '≡ƒÅá [HOME] destinationCoords:', '{"latitude":12.8303987,"longitude":77.86623689999999}'
10-23 17:50:35.127 W/ReactNativeJS(18100): '≡ƒÅá [HOME] pickupLocation text:', 'PRXJ+F32, Brindavan Nagar, Plot 87, NGGO\'s Colony, Anand Nagar, Hosur, Tamil Nadu 635109, India'
10-23 17:50:35.127 W/ReactNativeJS(18100): '≡ƒÅá [HOME] availableDrivers count:', 1
10-23 17:50:35.127 W/ReactNativeJS(18100): '≡ƒÅá [HOME] showDriversOnMap:', false
10-23 17:50:35.127 I/ReactNativeJS(18100): '≡ƒÅá≡ƒÅá≡ƒÅá [HOME-V2] ABOUT TO RENDER SimpleHosurMap with props:', { hasUserLocation: true,
10-23 17:50:35.127 I/ReactNativeJS(18100):   hasPickup: true,
10-23 17:50:35.127 I/ReactNativeJS(18100):   hasDestination: true,
10-23 17:50:35.127 I/ReactNativeJS(18100):   showDriversOnMap: false,
10-23 17:50:35.127 I/ReactNativeJS(18100):   timestamp: '2025-10-23T12:20:35.127Z' }
10-23 17:50:35.128 I/ReactNativeJS(18100): '≡ƒÆ░ [UI] Displaying fare for hatchback:', { fare: 447,
10-23 17:50:35.128 I/ReactNativeJS(18100):   isSelected: false,
10-23 17:50:35.128 I/ReactNativeJS(18100):   showingCalculated: true,
10-23 17:50:35.128 I/ReactNativeJS(18100):   source: 'calculated' }
10-23 17:50:35.131 I/ReactNativeJS(18100): '≡ƒÆ░ [UI] Displaying fare for hatchback_ac:', { fare: 493,
10-23 17:50:35.131 I/ReactNativeJS(18100):   isSelected: false,
10-23 17:50:35.131 I/ReactNativeJS(18100):   showingCalculated: true,
10-23 17:50:35.131 I/ReactNativeJS(18100):   source: 'calculated' }
10-23 17:50:35.135 I/ReactNativeJS(18100): '≡ƒÆ░ [UI] Displaying fare for sedan:', { fare: 447,
10-23 17:50:35.135 I/ReactNativeJS(18100):   isSelected: true,
10-23 17:50:35.135 I/ReactNativeJS(18100):   showingCalculated: true,
10-23 17:50:35.135 I/ReactNativeJS(18100):   source: 'calculated' }
10-23 17:50:35.135 I/ReactNativeJS(18100): '≡ƒÆ░ [UI] Displaying fare for sedan_ac:', { fare: 462,
10-23 17:50:35.135 I/ReactNativeJS(18100):   isSelected: false,
10-23 17:50:35.135 I/ReactNativeJS(18100):   showingCalculated: true,
10-23 17:50:35.135 I/ReactNativeJS(18100):   source: 'calculated' }
10-23 17:50:35.137 I/ReactNativeJS(18100): '≡ƒÆ░ [UI] Displaying fare for suv:', { fare: 762,
10-23 17:50:35.137 I/ReactNativeJS(18100):   isSelected: false,
10-23 17:50:35.137 I/ReactNativeJS(18100):   showingCalculated: true,
10-23 17:50:35.137 I/ReactNativeJS(18100):   source: 'calculated' }
10-23 17:50:35.139 I/ReactNativeJS(18100): '≡ƒÆ░ [UI] Displaying fare for suv_ac:', { fare: 1923,
10-23 17:50:35.139 I/ReactNativeJS(18100):   isSelected: false,
10-23 17:50:35.139 I/ReactNativeJS(18100):   showingCalculated: true,
10-23 17:50:35.139 I/ReactNativeJS(18100):   source: 'calculated' }
10-23 17:50:35.141 I/ReactNativeJS(18100): ≡ƒº¬≡ƒº¬≡ƒº¬ TEST MAP RENDERING NOW
10-23 17:50:35.141 I/ReactNativeJS(18100): '≡ƒº¬ Props received:', [ 'userLocation',
10-23 17:50:35.141 I/ReactNativeJS(18100):   'pickupLocation',
10-23 17:50:35.141 I/ReactNativeJS(18100):   'destinationLocation',
10-23 17:50:35.141 I/ReactNativeJS(18100):   'onRegionChangeComplete',
10-23 17:50:35.141 I/ReactNativeJS(18100):   'onDestinationDragEnd',
10-23 17:50:35.141 I/ReactNativeJS(18100):   'showCenteredPin',
10-23 17:50:35.141 I/ReactNativeJS(18100):   'availableDrivers',
10-23 17:50:35.141 I/ReactNativeJS(18100):   'showDrivers' ]
10-23 17:50:35.153 I/ReactNativeJS(18100): '≡ƒÆ░ [HOME] All vehicle fares calculated:', { hatchback: 447,
10-23 17:50:35.153 I/ReactNativeJS(18100):   hatchback_ac: 493,
10-23 17:50:35.153 I/ReactNativeJS(18100):   sedan: 447,
10-23 17:50:35.153 I/ReactNativeJS(18100):   sedan_ac: 462,
10-23 17:50:35.153 I/ReactNativeJS(18100):   suv: 762,
10-23 17:50:35.153 I/ReactNativeJS(18100):   suv_ac: 1923 }
10-23 17:50:35.154 W/ReactNativeJS(18100): ≡ƒÅá [HOME] ===== RENDERING HOME SCREEN =====
10-23 17:50:35.154 W/ReactNativeJS(18100): '≡ƒÅá [HOME] currentLocation:', '{"altitude":771.7999877929688,"heading":0,"altitudeAccuracy":1.3241634368896484,"latitude":12.7486283,"speed":0,"longitude":77.8299733,"accuracy":2.200000047683716}'
10-23 17:50:35.154 W/ReactNativeJS(18100): '≡ƒÅá [HOME] pickupCoords:', '{"latitude":12.7486283,"longitude":77.8299733}'
10-23 17:50:35.154 W/ReactNativeJS(18100): '≡ƒÅá [HOME] destinationCoords:', '{"latitude":12.8303987,"longitude":77.86623689999999}'
10-23 17:50:35.154 W/ReactNativeJS(18100): '≡ƒÅá [HOME] pickupLocation text:', 'PRXJ+F32, Brindavan Nagar, Plot 87, NGGO\'s Colony, Anand Nagar, Hosur, Tamil Nadu 635109, India'
10-23 17:50:35.154 W/ReactNativeJS(18100): '≡ƒÅá [HOME] availableDrivers count:', 1
10-23 17:50:35.154 W/ReactNativeJS(18100): '≡ƒÅá [HOME] showDriversOnMap:', false
10-23 17:50:35.154 I/ReactNativeJS(18100): '≡ƒÅá≡ƒÅá≡ƒÅá [HOME-V2] ABOUT TO RENDER SimpleHosurMap with props:', { hasUserLocation: true,
10-23 17:50:35.154 I/ReactNativeJS(18100):   hasPickup: true,
10-23 17:50:35.154 I/ReactNativeJS(18100):   hasDestination: true,
10-23 17:50:35.154 I/ReactNativeJS(18100):   showDriversOnMap: false,
10-23 17:50:35.154 I/ReactNativeJS(18100):   timestamp: '2025-10-23T12:20:35.154Z' }
10-23 17:50:35.154 I/ReactNativeJS(18100): '≡ƒÆ░ [UI] Displaying fare for hatchback:', { fare: 447,
10-23 17:50:35.154 I/ReactNativeJS(18100):   isSelected: false,
10-23 17:50:35.154 I/ReactNativeJS(18100):   showingCalculated: true,
10-23 17:50:35.154 I/ReactNativeJS(18100):   source: 'calculated' }
10-23 17:50:35.156 I/ReactNativeJS(18100): '≡ƒÆ░ [UI] Displaying fare for hatchback_ac:', { fare: 493,
10-23 17:50:35.156 I/ReactNativeJS(18100):   isSelected: false,
10-23 17:50:35.156 I/ReactNativeJS(18100):   showingCalculated: true,
10-23 17:50:35.156 I/ReactNativeJS(18100):   source: 'calculated' }
10-23 17:50:35.157 I/ReactNativeJS(18100): '≡ƒÆ░ [UI] Displaying fare for sedan:', { fare: 447,
10-23 17:50:35.157 I/ReactNativeJS(18100):   isSelected: true,
10-23 17:50:35.157 I/ReactNativeJS(18100):   showingCalculated: true,
10-23 17:50:35.157 I/ReactNativeJS(18100):   source: 'calculated' }
10-23 17:50:35.157 I/ReactNativeJS(18100): '≡ƒÆ░ [UI] Displaying fare for sedan_ac:', { fare: 462,
10-23 17:50:35.157 I/ReactNativeJS(18100):   isSelected: false,
10-23 17:50:35.157 I/ReactNativeJS(18100):   showingCalculated: true,
10-23 17:50:35.157 I/ReactNativeJS(18100):   source: 'calculated' }
10-23 17:50:35.159 I/ReactNativeJS(18100): '≡ƒÆ░ [UI] Displaying fare for suv:', { fare: 762,
10-23 17:50:35.159 I/ReactNativeJS(18100):   isSelected: false,
10-23 17:50:35.159 I/ReactNativeJS(18100):   showingCalculated: true,
10-23 17:50:35.159 I/ReactNativeJS(18100):   source: 'calculated' }
10-23 17:50:35.160 I/ReactNativeJS(18100): '≡ƒÆ░ [UI] Displaying fare for suv_ac:', { fare: 1923,
10-23 17:50:35.160 I/ReactNativeJS(18100):   isSelected: false,
10-23 17:50:35.160 I/ReactNativeJS(18100):   showingCalculated: true,
10-23 17:50:35.160 I/ReactNativeJS(18100):   source: 'calculated' }
10-23 17:50:35.162 I/ReactNativeJS(18100): ≡ƒº¬≡ƒº¬≡ƒº¬ TEST MAP RENDERING NOW
10-23 17:50:35.162 I/ReactNativeJS(18100): '≡ƒº¬ Props received:', [ 'userLocation',
10-23 17:50:35.162 I/ReactNativeJS(18100):   'pickupLocation',
10-23 17:50:35.162 I/ReactNativeJS(18100):   'destinationLocation',
10-23 17:50:35.162 I/ReactNativeJS(18100):   'onRegionChangeComplete',
10-23 17:50:35.162 I/ReactNativeJS(18100):   'onDestinationDragEnd',
10-23 17:50:35.162 I/ReactNativeJS(18100):   'showCenteredPin',
10-23 17:50:35.162 I/ReactNativeJS(18100):   'availableDrivers',
10-23 17:50:35.162 I/ReactNativeJS(18100):   'showDrivers' ]
10-23 17:50:35.175 W/ReactNativeJS(18100): ≡ƒÅá [HOME] ===== RENDERING HOME SCREEN =====
10-23 17:50:35.175 W/ReactNativeJS(18100): '≡ƒÅá [HOME] currentLocation:', '{"altitude":771.7999877929688,"heading":0,"altitudeAccuracy":1.3241634368896484,"latitude":12.7486283,"speed":0,"longitude":77.8299733,"accuracy":2.200000047683716}'
10-23 17:50:35.175 W/ReactNativeJS(18100): '≡ƒÅá [HOME] pickupCoords:', '{"latitude":12.7486283,"longitude":77.8299733}'
10-23 17:50:35.175 W/ReactNativeJS(18100): '≡ƒÅá [HOME] destinationCoords:', '{"latitude":12.8303987,"longitude":77.86623689999999}'
10-23 17:50:35.175 W/ReactNativeJS(18100): '≡ƒÅá [HOME] pickupLocation text:', 'PRXJ+F32, Brindavan Nagar, Plot 87, NGGO\'s Colony, Anand Nagar, Hosur, Tamil Nadu 635109, India'
10-23 17:50:35.175 W/ReactNativeJS(18100): '≡ƒÅá [HOME] availableDrivers count:', 1
10-23 17:50:35.175 W/ReactNativeJS(18100): '≡ƒÅá [HOME] showDriversOnMap:', false
10-23 17:50:35.176 I/ReactNativeJS(18100): '≡ƒÅá≡ƒÅá≡ƒÅá [HOME-V2] ABOUT TO RENDER SimpleHosurMap with props:', { hasUserLocation: true,
10-23 17:50:35.176 I/ReactNativeJS(18100):   hasPickup: true,
10-23 17:50:35.176 I/ReactNativeJS(18100):   hasDestination: true,
10-23 17:50:35.176 I/ReactNativeJS(18100):   showDriversOnMap: false,
10-23 17:50:35.176 I/ReactNativeJS(18100):   timestamp: '2025-10-23T12:20:35.175Z' }
10-23 17:50:35.176 I/ReactNativeJS(18100): '≡ƒÆ░ [UI] Displaying fare for hatchback:', { fare: 447,
10-23 17:50:35.176 I/ReactNativeJS(18100):   isSelected: false,
10-23 17:50:35.176 I/ReactNativeJS(18100):   showingCalculated: true,
10-23 17:50:35.176 I/ReactNativeJS(18100):   source: 'calculated' }
10-23 17:50:35.177 I/ReactNativeJS(18100): '≡ƒÆ░ [UI] Displaying fare for hatchback_ac:', { fare: 493,
10-23 17:50:35.177 I/ReactNativeJS(18100):   isSelected: false,
10-23 17:50:35.177 I/ReactNativeJS(18100):   showingCalculated: true,
10-23 17:50:35.177 I/ReactNativeJS(18100):   source: 'calculated' }
10-23 17:50:35.178 I/ReactNativeJS(18100): '≡ƒÆ░ [UI] Displaying fare for sedan:', { fare: 447,
10-23 17:50:35.178 I/ReactNativeJS(18100):   isSelected: true,
10-23 17:50:35.178 I/ReactNativeJS(18100):   showingCalculated: true,
10-23 17:50:35.178 I/ReactNativeJS(18100):   source: 'calculated' }
10-23 17:50:35.180 I/ReactNativeJS(18100): '≡ƒÆ░ [UI] Displaying fare for sedan_ac:', { fare: 462,
10-23 17:50:35.180 I/ReactNativeJS(18100):   isSelected: false,
10-23 17:50:35.180 I/ReactNativeJS(18100):   showingCalculated: true,
10-23 17:50:35.180 I/ReactNativeJS(18100):   source: 'calculated' }
10-23 17:50:35.181 I/ReactNativeJS(18100): '≡ƒÆ░ [UI] Displaying fare for suv:', { fare: 762,
10-23 17:50:35.181 I/ReactNativeJS(18100):   isSelected: false,
10-23 17:50:35.181 I/ReactNativeJS(18100):   showingCalculated: true,
10-23 17:50:35.181 I/ReactNativeJS(18100):   source: 'calculated' }
10-23 17:50:35.182 I/ReactNativeJS(18100): '≡ƒÆ░ [UI] Displaying fare for suv_ac:', { fare: 1923,
10-23 17:50:35.182 I/ReactNativeJS(18100):   isSelected: false,
10-23 17:50:35.182 I/ReactNativeJS(18100):   showingCalculated: true,
10-23 17:50:35.182 I/ReactNativeJS(18100):   source: 'calculated' }
10-23 17:50:35.183 I/ReactNativeJS(18100): ≡ƒº¬≡ƒº¬≡ƒº¬ TEST MAP RENDERING NOW
10-23 17:50:35.183 I/ReactNativeJS(18100): '≡ƒº¬ Props received:', [ 'userLocation',
10-23 17:50:35.183 I/ReactNativeJS(18100):   'pickupLocation',
10-23 17:50:35.183 I/ReactNativeJS(18100):   'destinationLocation',
10-23 17:50:35.183 I/ReactNativeJS(18100):   'onRegionChangeComplete',
10-23 17:50:35.183 I/ReactNativeJS(18100):   'onDestinationDragEnd',
10-23 17:50:35.183 I/ReactNativeJS(18100):   'showCenteredPin',
10-23 17:50:35.183 I/ReactNativeJS(18100):   'availableDrivers',
10-23 17:50:35.183 I/ReactNativeJS(18100):   'showDrivers' ]
^C^C
C:\Users\Dell\Desktop\platform-tools-latest-windows (1)\platform-tools>
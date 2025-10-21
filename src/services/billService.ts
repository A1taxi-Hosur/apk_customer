import { Ride } from '../types/database';
import { supabase } from '../utils/supabase';
import { Platform, Alert } from 'react-native';
import * as FileSystem from 'expo-file-system';
import * as Sharing from 'expo-sharing';
// TODO: Re-enable after package-lock.json is regenerated
// import * as Print from 'expo-print';

interface BillData {
  ride: Ride & {
    drivers?: {
      users: { full_name: string; phone_number: string };
      vehicles: { make: string; model: string; registration_number: string; color: string };
    };
  };
  fareBreakdown: any;
}

class BillService {
  generateBillHTML(billData: BillData): string {
    const { ride, fareBreakdown } = billData;
    const date = fareBreakdown?.completed_at || ride.created_at || new Date().toISOString();

    return `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="UTF-8">
        <title>Trip Bill</title>
        <style>
          body {
            font-family: Arial, sans-serif;
            padding: 40px;
            max-width: 800px;
            margin: 0 auto;
            color: #1F2937;
          }
          .header {
            text-align: center;
            margin-bottom: 30px;
            padding-bottom: 20px;
            border-bottom: 3px solid #10B981;
          }
          .header h1 {
            color: #10B981;
            margin: 0;
            font-size: 32px;
          }
          .header p {
            color: #6B7280;
            margin: 5px 0 0 0;
            font-size: 16px;
          }
          .info {
            margin: 20px 0;
            background: #F9FAFB;
            padding: 20px;
            border-radius: 8px;
          }
          .info-row {
            display: flex;
            justify-content: space-between;
            padding: 12px 0;
            border-bottom: 1px solid #E5E7EB;
            font-size: 14px;
          }
          .info-row:last-child {
            border-bottom: none;
          }
          .info-row span:first-child {
            font-weight: 600;
            color: #6B7280;
          }
          .info-row span:last-child {
            color: #1F2937;
            text-align: right;
          }
          .fare-section {
            margin: 30px 0;
            background: #FFFFFF;
            padding: 20px;
            border: 1px solid #E5E7EB;
            border-radius: 8px;
          }
          .fare-section h3 {
            margin: 0 0 20px 0;
            color: #1F2937;
            font-size: 18px;
            padding-bottom: 10px;
            border-bottom: 2px solid #E5E7EB;
          }
          .fare-row {
            display: flex;
            justify-content: space-between;
            padding: 12px 0;
            font-size: 14px;
            color: #374151;
          }
          .total-row {
            font-weight: bold;
            font-size: 20px;
            color: #1F2937;
            border-top: 2px solid #1F2937;
            padding-top: 15px;
            margin-top: 15px;
          }
          .rupee {
            font-family: Arial, sans-serif;
          }
        </style>
      </head>
      <body>
        <div class="header">
          <h1>A1 Taxi</h1>
          <p>Trip Bill</p>
        </div>

        <div class="info">
          <div class="info-row">
            <span>Booking ID:</span>
            <span>${ride.ride_code || 'N/A'}</span>
          </div>
          <div class="info-row">
            <span>Date:</span>
            <span>${new Date(date).toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}</span>
          </div>
          <div class="info-row">
            <span>Booking Type:</span>
            <span>${this.formatBookingType(fareBreakdown?.booking_type || ride.booking_type || 'N/A')}</span>
          </div>
          <div class="info-row">
            <span>From:</span>
            <span>${fareBreakdown?.pickup_address || ride.pickup_address || 'N/A'}</span>
          </div>
          <div class="info-row">
            <span>To:</span>
            <span>${fareBreakdown?.destination_address || ride.destination_address || 'N/A'}</span>
          </div>
        </div>

        <div class="fare-section">
          <h3>Fare Breakdown</h3>
          ${fareBreakdown?.base_fare > 0 ? `<div class="fare-row"><span>Base Fare</span><span class="rupee">Rs. ${fareBreakdown.base_fare.toFixed(2)}</span></div>` : ''}
          ${fareBreakdown?.hourly_charges > 0 ? `<div class="fare-row"><span>Hourly Charges</span><span class="rupee">Rs. ${fareBreakdown.hourly_charges.toFixed(2)}</span></div>` : ''}
          ${fareBreakdown?.per_day_charges > 0 ? `<div class="fare-row"><span>Per Day Charges</span><span class="rupee">Rs. ${fareBreakdown.per_day_charges.toFixed(2)}</span></div>` : ''}
          ${fareBreakdown?.distance_fare > 0 ? `<div class="fare-row"><span>Distance Charges (${fareBreakdown.actual_distance_km?.toFixed(1)}km)</span><span class="rupee">Rs. ${fareBreakdown.distance_fare.toFixed(2)}</span></div>` : ''}
          ${fareBreakdown?.platform_fee > 0 ? `<div class="fare-row"><span>Platform Fee</span><span class="rupee">Rs. ${fareBreakdown.platform_fee.toFixed(2)}</span></div>` : ''}
          ${fareBreakdown?.gst_on_charges > 0 ? `<div class="fare-row"><span>GST on Charges (5%)</span><span class="rupee">Rs. ${fareBreakdown.gst_on_charges.toFixed(2)}</span></div>` : ''}
          ${fareBreakdown?.gst_on_platform_fee > 0 ? `<div class="fare-row"><span>GST on Platform Fee (18%)</span><span class="rupee">Rs. ${fareBreakdown.gst_on_platform_fee.toFixed(2)}</span></div>` : ''}
          ${fareBreakdown?.driver_allowance > 0 ? `<div class="fare-row"><span>Driver Allowance</span><span class="rupee">Rs. ${fareBreakdown.driver_allowance.toFixed(2)}</span></div>` : ''}
          ${fareBreakdown?.extra_km_charges > 0 ? `<div class="fare-row"><span>Extra KM Charges</span><span class="rupee">Rs. ${fareBreakdown.extra_km_charges.toFixed(2)}</span></div>` : ''}
          ${fareBreakdown?.extra_hour_charges > 0 ? `<div class="fare-row"><span>Extra Hour Charges</span><span class="rupee">Rs. ${fareBreakdown.extra_hour_charges.toFixed(2)}</span></div>` : ''}
          ${fareBreakdown?.airport_surcharge > 0 ? `<div class="fare-row"><span>Airport Surcharge</span><span class="rupee">Rs. ${fareBreakdown.airport_surcharge.toFixed(2)}</span></div>` : ''}
          ${fareBreakdown?.toll_charges > 0 ? `<div class="fare-row"><span>Toll Charges</span><span class="rupee">Rs. ${fareBreakdown.toll_charges.toFixed(2)}</span></div>` : ''}

          <div class="fare-row total-row">
            <span>Total Fare</span>
            <span class="rupee">Rs. ${(fareBreakdown?.total_fare || ride.fare_amount || 0).toFixed(2)}</span>
          </div>
        </div>

        <div style="text-align: center; margin-top: 40px; padding-top: 20px; border-top: 1px solid #E5E7EB; color: #6B7280; font-size: 12px;">
          <p>Thank you for choosing A1 Taxi</p>
          <p>For support: Call 04344 221 221</p>
        </div>
      </body>
      </html>
    `;
  }

  formatBookingType(type: string): string {
    const types: { [key: string]: string } = {
      'local': 'Local',
      'rental': 'Rental',
      'outstation': 'Outstation',
      'airport': 'Airport',
    };
    return types[type] || type.charAt(0).toUpperCase() + type.slice(1);
  }

  async fetchFareBreakdown(ride: any): Promise<any> {
    try {
      console.log('📄 [BILL] Fetching fare breakdown for ride:', ride.id, 'Type:', ride.booking_type);

      let fareData = null;
      const bookingType = ride.booking_type;

      // Determine which table to query based on booking type
      if (bookingType === 'rental') {
        console.log('📄 [BILL] Fetching from rental_trip_completions');
        const { data } = await supabase
          .from('rental_trip_completions')
          .select('*')
          .eq('scheduled_booking_id', ride.scheduled_booking_id || ride.id)
          .order('created_at', { ascending: false })
          .limit(1)
          .maybeSingle();
        fareData = data;
      } else if (bookingType === 'outstation') {
        console.log('📄 [BILL] Fetching from outstation_trip_completions');
        const { data } = await supabase
          .from('outstation_trip_completions')
          .select('*')
          .eq('scheduled_booking_id', ride.scheduled_booking_id || ride.id)
          .order('created_at', { ascending: false })
          .limit(1)
          .maybeSingle();
        fareData = data;
      } else if (bookingType === 'airport') {
        console.log('📄 [BILL] Fetching from airport_trip_completions');
        const { data } = await supabase
          .from('airport_trip_completions')
          .select('*')
          .eq('scheduled_booking_id', ride.scheduled_booking_id || ride.id)
          .order('created_at', { ascending: false })
          .limit(1)
          .maybeSingle();
        fareData = data;
      } else {
        // Regular ride - try trip_completions table
        console.log('📄 [BILL] Fetching from trip_completions');
        const { data } = await supabase
          .from('trip_completions')
          .select('*')
          .eq('ride_id', ride.id)
          .order('created_at', { ascending: false })
          .limit(1)
          .maybeSingle();
        fareData = data;
      }

      if (fareData) {
        console.log('✅ [BILL] Fare breakdown fetched:', fareData);
        return fareData;
      } else {
        console.log('⚠️ [BILL] No fare breakdown found, using basic ride info');
        // Fallback to basic ride info
        return {
          booking_type: ride.booking_type,
          base_fare: ride.fare_amount || 0,
          total_fare: ride.fare_amount || 0,
          actual_distance_km: ride.distance_km || 0,
          actual_duration_minutes: ride.duration_minutes || 0,
          pickup_address: ride.pickup_address,
          destination_address: ride.destination_address,
        };
      }
    } catch (error) {
      console.error('❌ [BILL] Error fetching fare breakdown:', error);
      // Return basic fallback
      return {
        booking_type: ride.booking_type,
        base_fare: ride.fare_amount || 0,
        total_fare: ride.fare_amount || 0,
        pickup_address: ride.pickup_address,
        destination_address: ride.destination_address,
      };
    }
  }

  async downloadBill(ride: any): Promise<void> {
    try {
      console.log('📄 [BILL] Generating PDF bill for ride:', ride.ride_code);

      const fareBreakdown = await this.fetchFareBreakdown(ride);
      const billData: BillData = { ride, fareBreakdown };

      const htmlContent = this.generateBillHTML(billData);

      if (Platform.OS === 'web') {
        // Web platform: Open print dialog which allows Save as PDF
        const printWindow = window.open('', '_blank');
        if (printWindow) {
          printWindow.document.write(htmlContent);
          printWindow.document.close();
          printWindow.focus();

          // Wait for content to load then print (user can save as PDF)
          setTimeout(() => {
            printWindow.print();
          }, 500);
        }
        console.log('✅ [BILL] Print dialog opened (web)');
      } else {
        // Mobile platform: Generate PDF using expo-print
        // TODO: Temporarily disabled until expo-print is installed
        console.warn('⚠️ [BILL] PDF generation temporarily disabled - expo-print not installed');
        Alert.alert(
          'Feature Unavailable',
          'PDF generation is temporarily unavailable. Please use the web version to print bills.',
          [{ text: 'OK' }]
        );
        return;

        /* Temporarily disabled - will be re-enabled after expo-print is installed
        const fileName = `A1Taxi_Bill_${ride.ride_code}_${new Date().toISOString().split('T')[0]}.pdf`;

        const { uri } = await Print.printToFileAsync({
          html: htmlContent,
        });

        console.log('✅ [BILL] PDF generated at:', uri);

        // Move file to documents directory with proper name
        const fileUri = `${FileSystem.documentDirectory}${fileName}`;
        await FileSystem.moveAsync({
          from: uri,
          to: fileUri,
        });

        console.log('✅ [BILL] PDF moved to:', fileUri);

        // Share the PDF
        const isSharingAvailable = await Sharing.isAvailableAsync();
        if (isSharingAvailable) {
          await Sharing.shareAsync(fileUri, {
            mimeType: 'application/pdf',
            dialogTitle: 'Save or Share Bill',
            UTI: 'com.adobe.pdf',
          });
          console.log('✅ [BILL] PDF shared successfully (mobile)');
        } else {
          Alert.alert('Success', `Bill saved as PDF to: ${fileUri}`);
        }
        */
      }
    } catch (error) {
      console.error('❌ [BILL] Error downloading bill:', error);
      Alert.alert('Error', 'Failed to generate bill. Please try again.');
      throw error;
    }
  }

  async printBill(ride: any): Promise<void> {
    try {
      console.log('🖨️ [BILL] Opening print dialog for ride:', ride.ride_code);

      const fareBreakdown = await this.fetchFareBreakdown(ride);
      const billData: BillData = { ride, fareBreakdown };

      const htmlContent = this.generateBillHTML(billData);

      // Open in new window for printing
      const printWindow = window.open('', '_blank');
      if (printWindow) {
        printWindow.document.write(htmlContent);
        printWindow.document.close();
        printWindow.focus();

        // Wait for content to load then print
        setTimeout(() => {
          printWindow.print();
        }, 500);
      }

      console.log('✅ [BILL] Print dialog opened successfully');
    } catch (error) {
      console.error('❌ [BILL] Error printing bill:', error);
      throw error;
    }
  }
}

export const billService = new BillService();
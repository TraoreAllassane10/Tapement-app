import AsyncStorage from "@react-native-async-storage/async-storage";
import { createClient } from "@supabase/supabase-js";
import "react-native-url-polyfill/auto";

const supabaseUrl = process.env.EXPO_PUBLIC_SUPABASE_URL!;
const publishableKey = process.env.EXPO_PUBLIC_SUPABASE_PUBLISHABLE_KEY!;

export const supabase = createClient(supabaseUrl, publishableKey, {
  auth: {
    storage: AsyncStorage, // Permet de conserver la session localement sur le telephone
    autoRefreshToken: true,
    persistSession: true, // Persister la session localement
    detectSessionInUrl: false,
  },
});

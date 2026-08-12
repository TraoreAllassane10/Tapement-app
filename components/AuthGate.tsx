import { useAuth } from "@/providers/AuthProvider";
import { Redirect, useSegments } from "expo-router";
import React from "react";
import { ActivityIndicator, View } from "react-native";

const AuthGate = ({ children }: { children: React.ReactNode }) => {
  const { user, isLoading } = useAuth();
  const segments = useSegments();

  if (isLoading) {
    return (
      <View className="flex-1 items-center justify-center">
        <ActivityIndicator size="large" />
      </View>
    );
  }

  const inAuthGroup = segments[0] === "(auth)";

  if (!user && !inAuthGroup) {
    return <Redirect href={"/login"} />;
  }

  if (user && inAuthGroup) {
    return <Redirect href={"/(tabs)"} />;
  }

  return <>{children}</>;
};

export default AuthGate;

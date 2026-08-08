import { cn } from "@/lib/utils";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const Screen = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <SafeAreaView className={cn("flex-1 background p-4", className)}>
      {children}
    </SafeAreaView>
  );
};

export default Screen;

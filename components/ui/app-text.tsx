import React from "react";
import { Text, TextProps } from "react-native";

type AppTextProps = TextProps & {
  children: string;
  className?: string;
};

export default function AppText({
  children,
  className,
  ...props
}: AppTextProps) {
  return (
    <Text
      className={className}
      style={{ fontFamily: "Poppins_400Regular" }}
      {...props}
    >
      {children}
    </Text>
  );
}

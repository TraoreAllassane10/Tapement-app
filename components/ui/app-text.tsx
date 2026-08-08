import React from "react";
import { Text, TextProps } from "react-native";

type AppTextProps = TextProps & {
  children: any;
  className?: string;
};

export default function AppText({
  children,
  className,
  style,
  ...props
}: AppTextProps) {
  return (
    <Text
      style={[{ fontFamily: "Poppins_400Regular" }, style]}
      {...props}
      className={className}
    >
      {children}
    </Text>
  );
}

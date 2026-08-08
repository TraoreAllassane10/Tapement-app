import { cn } from "@/lib/utils";
import React from "react";
import { View, ViewProps } from "react-native";

type CardProps = ViewProps & {
  children?: React.ReactNode;
  className?: string;
};

const Card = ({ children, className = "", style, ...props }: CardProps) => {
  return (
    <View
      className={cn(
        "surface border border-gray-100 shadow-sm rounded-xl p-4",
        className,
      )}
      style={style}
      {...props}
    >
      {children}
    </View>
  );
};

export default Card;

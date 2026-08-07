import React from "react";
import { View } from "react-native";

type CardProps = {
  children: React.ReactNode;
  classNamePerso?: string;
};

const Card = ({ children, classNamePerso }: CardProps) => {
  return <View className={`surface ${classNamePerso}`}>{children}</View>;
};

export default Card;

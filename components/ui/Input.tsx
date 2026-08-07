import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Pressable, TextInput, TextInputProps, View } from "react-native";

export type InputProps = TextInputProps & {
  value: string;
  lefticon: React.ComponentProps<typeof Ionicons>["name"];
  righticon?: React.ComponentProps<typeof Ionicons>["name"];
  onRightIconPress?: () => void;
};

export default function Input({
  value,
  lefticon,
  righticon,
  onRightIconPress,
  ...props
}: InputProps) {
  return (
    <View className="flex-row items-center gap-1 border p-0.5 px-4 border-gray-300 focus:border-primary rounded-md">
      <Ionicons name={lefticon} size={20} color={"#64748B"} />
      <TextInput value={value} {...props} className="flex-1" />
      {righticon && (
        <Pressable onPress={onRightIconPress}>
          <Ionicons name={righticon} size={20} color={"#64748B"} />
        </Pressable>
      )}
    </View>
  );
}

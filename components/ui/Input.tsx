import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import { Pressable, TextInput, TextInputProps, View } from "react-native";

type InputProps = TextInputProps & {
  value: string;
  lefticon: React.ComponentProps<typeof Ionicons>["name"];
  righticon?: React.ComponentProps<typeof Ionicons>["name"];
};

export default function Input({
  value,
  lefticon,
  righticon,
  ...props
}: InputProps) {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  return (
    <View className="flex-row items-center gap-1 border p-0.5 px-4 border-gray-300 rounded-md">
      <Ionicons name={lefticon} size={20} color={"#64748B"} />
      <TextInput value={value} {...props} className="flex-1" />
      {righticon && (
        <Pressable onPress={() => setShowPassword(!showPassword)}>
          {showPassword ? (
            <Ionicons name={"eye-off-outline"} size={20} color={"#64748B"} />
          ) : (
            <Ionicons name={righticon} size={20} color={"#64748B"} />
          )}
        </Pressable>
      )}
    </View>
  );
}

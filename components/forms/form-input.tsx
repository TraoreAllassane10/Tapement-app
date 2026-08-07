import { LoginFormData } from "@/features/auth/schemas/loginSchema";
import React from "react";
import { Control, Controller, FieldErrors } from "react-hook-form";
import { View } from "react-native";
import Input, { InputProps } from "../ui/Input";
import AppText from "../ui/app-text";

type FormInputProps = InputProps & {
  control: Control<LoginFormData>;
  name: "email" | "password";
  errors: FieldErrors<LoginFormData>;
};

export default function FormInput({
  control,
  name,
  errors,
  ...props
}: FormInputProps) {
  console.log(name);
  return (
    <View>
      <Controller
        control={control}
        name={name}
        render={({ field, fieldState }) => (
          <Input
            placeholder="allassane@gmail.com"
            value={field.value}
            onChange={field.onChange}
            {...props}
          />
        )}
      />
      {/* Erreur */}
      {errors.email && (
        <AppText className="text-xs text-red-500">
          {errors.email.message}
        </AppText>
      )}{" "}
    </View>
  );
}

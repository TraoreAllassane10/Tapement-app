import AppText from "@/components/ui/app-text";
import Input from "@/components/ui/Input";
import Screen from "@/components/ui/Screen";
import {
  SignupFormData,
  signupSchema,
} from "@/features/auth/schemas/signupSchema";
import { Ionicons } from "@expo/vector-icons";
import { zodResolver } from "@hookform/resolvers/zod";
import { router } from "expo-router";
import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import {
  KeyboardAvoidingView,
  Platform,
  Pressable,
  ScrollView,
  View,
} from "react-native";

const signup = () => {
  const {
    control,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<SignupFormData>({
    resolver: zodResolver(signupSchema),

    defaultValues: {
      nom: "",
      prenom: "",
      email: "",
      password: "",
    },
  });

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [showPassword, setShowPassword] = useState<boolean>(false);

  const onSubmit = (data: SignupFormData) => {
    console.log(data);
  };

  return (
    <Screen>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        className="flex-1"
      >
        <ScrollView
          contentContainerStyle={{ flexGrow: 1 }}
          showsVerticalScrollIndicator={false}
          className="px-6 py-4"
        >
          {/* Header */}
          <View className=" items-center mt-6 mb-8">
            <View className="w-16 h-16 bg-primary/10 rounded-2xl items-center justify-center mb-4 ">
              <View className="bg-primary p-3 rounded-xl shadow-md">
                <Ionicons name="earth-outline" size={30} color="white" />
              </View>
            </View>

            <AppText className="text-3xl font-extrabold tracking-tight text-title mb-1">
              Bienvenue
            </AppText>
            <AppText className="text-secondary text-center">
              Retrouve ton identité numérique
            </AppText>
          </View>

          {/* Form */}
          <View className="gap-5">
            {/* Nom */}
            <View className="gap-2">
              <AppText className="title text-sm">Nom</AppText>
              <Controller
                name="nom"
                control={control}
                render={({ field, fieldState }) => (
                  <Input
                    placeholder="Traore"
                    value={field.value}
                    onChangeText={field.onChange}
                    lefticon="mail-outline"
                  />
                )}
              />
              {errors.nom && (
                <AppText className="text-xs text-red-500">
                  {errors.nom.message}
                </AppText>
              )}
            </View>

            {/* Prenom */}
            <View className="gap-2">
              <AppText className="title text-sm">Prénom</AppText>

              <Controller
                name="prenom"
                control={control}
                render={({ field, fieldState }) => (
                  <Input
                    placeholder="Allassane"
                    value={field.value}
                    onChangeText={field.onChange}
                    lefticon="mail-outline"
                  />
                )}
              />
              {errors.prenom && (
                <AppText className="text-xs text-red-500">
                  {errors.prenom.message}
                </AppText>
              )}
            </View>

            {/* Email */}
            <View className="gap-2">
              <AppText className="title text-sm">Adresse email</AppText>

              <Controller
                name="email"
                control={control}
                render={({ field, fieldState }) => (
                  <Input
                    placeholder="allassane@gmail.com"
                    value={field.value}
                    onChangeText={field.onChange}
                    lefticon="mail-outline"
                    keyboardType="email-address"
                    autoCapitalize="none"
                  />
                )}
              />
              {errors.email && (
                <AppText className="text-xs text-red-500">
                  {errors.email.message}
                </AppText>
              )}
            </View>

            {/* Mot de passe */}
            <View className="gap-2">
              <AppText className="text-sm title">Mot de passe</AppText>

              <Controller
                name="password"
                control={control}
                render={({ field, fieldState }) => (
                  <Input
                    placeholder="***************"
                    value={field.value}
                    onChangeText={field.onChange}
                    secureTextEntry={!showPassword}
                    lefticon="lock-closed-outline"
                    righticon={showPassword ? "eye-off-outline" : "eye-outline"}
                    onRightIconPress={() => setShowPassword(!showPassword)}
                  />
                )}
              />
              {errors.password && (
                <AppText className="text-xs text-red-500">
                  {errors.password.message}
                </AppText>
              )}
            </View>

            <Pressable className="align-self-end mt-1 self-end">
              <AppText className="text-accent text-sm font-medium">
                Mot de passe oublié ?
              </AppText>
            </Pressable>

            {/* Bouton Se connecter  */}
            <Pressable className="btn-primary" onPress={handleSubmit(onSubmit)}>
              <AppText className="text-white font-bold text-base">
                S'inscrire
              </AppText>
            </Pressable>

            {/* Separateur */}
            <View className="flex-row items-center my-2 gap-4">
              <View className="flex-1 h-[1px] bg-gray-200" />
              <AppText className="text-xs text-secondary font-medium uppercase tracking-wider">
                ou
              </AppText>
              <View className="flex-1 h-[1px] bg-gray-200" />
            </View>

            {/* Bouton Google */}
            <Pressable className="flex-row items-center justify-center rounded-xl py-3.5 px-4 gap-3 border border-gray-200 bg-white active:bg-gray-50">
              <Ionicons name="logo-google" size={20} color="#EA4335" />
              <AppText className=" font-semibold text-base">
                Continuer avec Google
              </AppText>
            </Pressable>
          </View>

          {/* Footer */}
          <View className="mt-auto pt-8 pb-4 flex-row items-center justify-center gap-1.5">
            <AppText className="text-secondary text-sm">
              Avez-vous déjà un compte ?
            </AppText>
            <Pressable onPress={() => router.push("/login")}>
              <AppText className="text-accent font-semibold text-sm">
                Connectez-vous
              </AppText>
            </Pressable>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </Screen>
  );
};

export default signup;

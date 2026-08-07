import AppText from "@/components/ui/app-text";
import Input from "@/components/ui/Input";
import Screen from "@/components/ui/Screen";
import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import {
    KeyboardAvoidingView,
    Platform,
    Pressable,
    ScrollView,
    View,
} from "react-native";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

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
          <View className="items-center mt-6 mb-8">
            <View className="w-16 h-16 bg-primary/10 rounded-2xl items-center justify-center mb-4 border border-primary/20">
              <View className="bg-primary p-3 rounded-xl shadow-md">
                <Ionicons name="earth-outline" size={28} color="white" />
              </View>
            </View>

            <AppText className="text-3xl font-extrabold text-title tracking-tight mb-1">
              Bienvenue 👋
            </AppText>
            <AppText className="text-secondary text-base text-center">
              Retrouve ton identité numérique
            </AppText>
          </View>

          {/* Form */}
          <View className="gap-5">
            <View className="gap-2">
              <AppText className="text-sm font-semibold text-text">
                Adresse email
              </AppText>
              <Input
                placeholder="nom@exemple.com"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                autoCapitalize="none"
                lefticon="mail-outline"
              />
            </View>

            <View className="gap-2">
              <AppText className="text-sm font-semibold text-text">
                Mot de passe
              </AppText>
              <Input
                placeholder="••••••••"
                value={password}
                onChangeText={setPassword}
                secureTextEntry={!showPassword}
                lefticon="lock-closed-outline"
                righticon={showPassword ? "eye-off-outline" : "eye-outline"}
                // onRightIconPress={() => setShowPassword(!showPassword)}
              />

              <Pressable className="align-self-end mt-1 self-end">
                <AppText className="text-accent text-sm font-medium">
                  Mot de passe oublié ?
                </AppText>
              </Pressable>
            </View>

            {/* Bouton Se connecter */}
            <Pressable className="bg-primary py-4 rounded-xl items-center justify-center shadow-lg shadow-blue-500/30 active:opacity-90 mt-2">
              <AppText className="text-white font-bold text-base">
                Se connecter
              </AppText>
            </Pressable>

            {/* Séparateur */}
            <View className="flex-row items-center my-2 gap-4">
              <View className="flex-1 h-[1px] bg-gray-200" />
              <AppText className="text-xs text-text-secondary font-medium uppercase tracking-wider">
                ou
              </AppText>
              <View className="flex-1 h-[1px] bg-gray-200" />
            </View>

            {/* Bouton Google */}
            <Pressable className="flex-row items-center justify-center rounded-xl py-3.5 px-4 gap-3 border border-gray-200 bg-white active:bg-gray-50">
              <Ionicons name="logo-google" size={20} color="#EA4335" />
              <AppText className="font-semibold text-text text-base">
                Continuer avec Google
              </AppText>
            </Pressable>
          </View>

          {/* Footer */}
          <View className="mt-auto pt-8 pb-4 flex-row items-center justify-center gap-1.5">
            <AppText className="text-text-secondary text-sm">
              Nouveau sur Tapement ?
            </AppText>
            <Pressable>
              <AppText className="text-accent font-semibold text-sm">
                Créer un compte
              </AppText>
            </Pressable>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </Screen>
  );
};

export default Login;

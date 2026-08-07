import AppText from "@/components/ui/app-text";
import Input from "@/components/ui/Input";
import Screen from "@/components/ui/Screen";
import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import { Pressable, TouchableOpacity, View } from "react-native";

const login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <Screen>
      {/* Header */}
      <View className="flex-1 items-center mb-10">
        <View className="items-center justify-center bg-primary p-4 rounded-md shadow-md mb-6">
          <Ionicons name="earth-outline" size={30} color="white" />
        </View>

        <View className="items-center gap-1">
          <AppText className="text-2xl font-bold text-title">Bienvenue</AppText>
          <AppText className="text-secondary">
            Retrouve ton identité numérique
          </AppText>
        </View>
      </View>

      {/* Form */}
      <View className="flex-2 p-8 gap-8 ">
        <View className="gap-2">
          <AppText>Email</AppText>
          <Input
            placeholder="Entrer votre email"
            value={email}
            lefticon="mail-outline"
          />
        </View>

        <View className="gap-2">
          <AppText>Mot de passe</AppText>
          <Input
            placeholder="Entrer votre email"
            value={email}
            lefticon="lock-closed-outline"
            righticon="eye-outline"
          />
        </View>

        <Pressable>
          <AppText className="text-accent">Mot de passe oublié</AppText>
        </Pressable>

        {/* Bouton Se connecter  */}
        <TouchableOpacity className="btn-primary">
          <AppText className="text-white font-semibold ">Se Connecter</AppText>
        </TouchableOpacity>

        <View className="flex-row items-center gap-4">
          <View className="border border-gray-200 flex-1 h-0" />
          <AppText>ou</AppText>
          <View className="border border-gray-200 flex-1 h-0" />
        </View>

        <TouchableOpacity className="flex-row items-center justify-center rounded-lg p-4 gap-4 border border-gray-300">
          <Ionicons name="logo-google" size={24} />
          <AppText className=" font-medium">Continuer avec Google</AppText>
        </TouchableOpacity>
      </View>

      {/* Footer */}
      <View className="flex-1 flex-row items-center justify-center gap-1">
        <AppText>Nouveau sur Tapement ?</AppText>
        <Pressable>
          <AppText className="text-accent">Créer un compte</AppText>
        </Pressable>
      </View>
    </Screen>
  );
};

export default login;

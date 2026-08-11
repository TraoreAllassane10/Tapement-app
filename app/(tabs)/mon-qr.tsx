import AppText from "@/components/ui/app-text";
import Card from "@/components/ui/card";
import Screen from "@/components/ui/Screen";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Image, Pressable, View } from "react-native";
import QRCode from "react-native-qrcode-svg";

export default function MonQrScreen() {
  const user = {
    id: 1,
    nom: "Traore",
    prenom: "Allassane",
    profession: "Développeur",
  };

  return (
    <Screen>
      <Card>
        {/* Profil */}
        <View className="mb-8">
          <View className="items-center p-6">
            <Image
              source={require("../../assets/images/profil.jpg")}
              style={{
                width: 60,
                height: 60,
                borderRadius: 100,
              }}
            />
          </View>

          <View className="items-center justify-center gap-1">
            <AppText className="title text-lg tracking-wide">
              Traore Allassane
            </AppText>

            <AppText className="text-secondary font-bold text-sm">
              Développeur
            </AppText>
          </View>
        </View>

        {/* QR Code  */}
        <View className="items-center justify-center p-8 rounded-xl active:opacity-90 mb-8">
          <View className="bg-white">
            <QRCode value={user.id.toString()} size={220} />
          </View>

          <AppText className="mt-4 text-secondary text-center tracking-wide active:opacity-80">
            Faire scanner ce QR Code pour partager ton profil
          </AppText>
        </View>

        {/* Bouton */}
        <View className="flex-row gap-4 items-center justify-center">
          <Pressable className="bg-secondary items-center justify-center p-2 rounded-lg active:opacity-80">
            <Ionicons name="share-social" size={24} color={"#0F172A"} />
            <AppText className="title font-bold">Partager</AppText>
          </Pressable>

          <Pressable className="bg-secondary items-center justify-center p-2 rounded-lg active:opacity-80">
            <Ionicons name="download-outline" size={24} color={"#0F172A"} />
            <AppText className="title font-bold">Télécharger</AppText>
          </Pressable>

          <Pressable className="bg-secondary items-center justify-center p-2 rounded-lg active:opacity-80">
            <Ionicons name="expand-outline" size={24} color={"#0F172A"} />
            <AppText className="title font-bold">Plein écran</AppText>
          </Pressable>
        </View>
      </Card>
    </Screen>
  );
}

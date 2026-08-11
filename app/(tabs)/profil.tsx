import AppText from "@/components/ui/app-text";
import Card from "@/components/ui/card";
import Screen from "@/components/ui/Screen";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import React from "react";
import { Image, Pressable, ScrollView, View } from "react-native";

export default function ProfilScreen() {
  const user = {
    id: 1,
    nom: "Traore",
    prenom: "Allassane",
    profession: "Développeur",
  };

  return (
    <Screen>
      <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
        {/* Profil */}
        <View className="mb-6">
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
            <AppText className="title text-lg font-bold tracking-wide">
              Traore Allassane
            </AppText>

            <AppText className="text-secondary font-bold text-sm">
              Développeur
            </AppText>
          </View>
        </View>

        {/* Bio et Centre d'intêret */}
        <View className="mb-6">
          {/* Bio */}
          <AppText className="text-center text-sm text-secondary leading-5 tracking-wide mb-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro ex ab
            quaerat! Nostrum accusantium quia maiores. Cum ducimus quae, omnis
            vel,
          </AppText>

          {/* Centre d'interet */}
          <View className="flex-row flex-wrap gap-2 items-center justify-center">
            <View className="items-center justify-center bg-primary rounded-full px-3 py-0.5">
              <AppText className="text-white text-xs">Coding</AppText>
            </View>

            <View className="items-center justify-center bg-primary rounded-full px-3 py-0.5">
              <AppText className="text-white text-xs">Football</AppText>
            </View>

            <View className="items-center justify-center bg-primary rounded-full px-3 py-0.5">
              <AppText className="text-white text-xs">Lecture</AppText>
            </View>
          </View>
        </View>

        {/* Identité */}
        <Card className="mb-6">
          {/* Header */}
          <View className="mb-2">
            <AppText className="text-xl">Identité</AppText>
          </View>

          {/* Contenu */}
          <View className="flex gap-4">
            {/* Telephone */}
            <View className="flex-row items-center gap-2">
              <View className="bg-primary size-8 items-center justify-center rounded-md">
                <Ionicons name="phone-portrait" size={20} color={"white"} />
              </View>

              <View>
                <AppText className="text-sm text-secondary">Téléphone</AppText>
                <AppText className="text-md">+225 05 64 63 99 33</AppText>
              </View>
            </View>

            {/* Email */}
            <View className="flex-row items-center gap-2">
              <View className="bg-primary size-8 items-center justify-center rounded-md">
                <Ionicons name="mail" size={20} color={"white"} />
              </View>

              <View>
                <AppText className="text-sm text-secondary">Email</AppText>
                <AppText className="text-md ">
                  traoreallassane@gmail.com
                </AppText>
              </View>
            </View>

            {/* Quartier */}
            <View className="flex-row items-center gap-2">
              <View className="bg-primary size-8 items-center justify-center rounded-md">
                <Ionicons name="location" size={20} color={"white"} />
              </View>

              <View>
                <AppText className="text-sm text-secondary">
                  Quartier (Ville)
                </AppText>
                <AppText className="text-md ">Garage (Daloa)</AppText>
              </View>
            </View>

            {/* Niveau d'étude */}
            <View className="flex-row items-center gap-2">
              <View className="bg-primary size-8 items-center justify-center rounded-md">
                <Ionicons name="school" size={20} color={"white"} />
              </View>

              <View>
                <AppText className="text-sm text-secondary">
                  Niveau d'etude
                </AppText>
                <AppText className="text-md">Licence 3</AppText>
              </View>
            </View>

            {/* Sport */}
            <View className="flex-row items-center gap-2">
              <View className="bg-primary size-8 items-center justify-center rounded-md">
                <Ionicons name="logo-playstation" size={20} color={"white"} />
              </View>

              <View>
                <AppText className="text-sm text-secondary">
                  Sport préféré
                </AppText>
                <AppText className="text-md">Football</AppText>
              </View>
            </View>

            {/* Equipe */}
            <View className="flex-row items-center gap-2">
              <View className="bg-primary size-8 items-center justify-center rounded-md">
                <Ionicons name="football" size={20} color={"white"} />
              </View>

              <View>
                <AppText className="text-sm text-secondary">
                  Equipe peféré
                </AppText>
                <AppText className="text-md">Real Madrid</AppText>
              </View>
            </View>

            {/* Artiste prefere */}
            <View className="flex-row items-center gap-2">
              <View className="bg-primary size-8 items-center justify-center rounded-md">
                <Ionicons name="musical-note" size={20} color={"white"} />
              </View>

              <View>
                <AppText className="text-sm text-secondary">
                  Artiste preféré
                </AppText>
                <AppText className="text-md">Ninho</AppText>
              </View>
            </View>
          </View>
        </Card>

        {/* Liens des réseaux sociaux */}
        <Card className="mb-6">
          {/* Header */}
          <View className="mb-2">
            <AppText className="text-xl">Liens sociaux </AppText>
          </View>

          {/* Contenu */}
          <View className="flex gap-4">
            <View className="flex-row items-center justify-between">
              <View className="flex-row items-center justify-between gap-2">
                <View className="bg-primary size-8 items-center justify-center rounded-md">
                  <Ionicons name="logo-facebook" size={20} color={"white"} />
                </View>

                <AppText className="text-md">Traore Allassane</AppText>
              </View>

              <Ionicons name="link" />
            </View>

            <View className="flex gap-4">
              <View className="flex-row items-center justify-between">
                <View className="flex-row items-center justify-between gap-2">
                  <View className="bg-primary size-8 items-center justify-center rounded-md">
                    <Ionicons name="logo-whatsapp" size={20} color={"white"} />
                  </View>

                  <AppText className="text-md">05 64 63 99 33</AppText>
                </View>

                <Ionicons name="link" />
              </View>
            </View>

            <View className="flex gap-4">
              <View className="flex-row items-center justify-between">
                <View className="flex-row items-center justify-between gap-2">
                  <View className="bg-primary size-8 items-center justify-center rounded-md">
                    <Ionicons name="logo-instagram" size={20} color={"white"} />
                  </View>

                  <AppText className="text-md">Traore Allassane</AppText>
                </View>

                <Ionicons name="link" />
              </View>
            </View>

            <View className="flex gap-4">
              <View className="flex-row items-center justify-between">
                <View className="flex-row items-center justify-between gap-2">
                  <View className="bg-primary size-8 items-center justify-center rounded-md">
                    <Ionicons name="logo-tiktok" size={20} color={"white"} />
                  </View>

                  <AppText className="text-md">Traore Allassane</AppText>
                </View>

                <Ionicons name="link" />
              </View>
            </View>
          </View>
        </Card>

        <Pressable
          onPress={() => router.push("/profile/edit")}
          className="btn-primary "
        >
          <AppText className="text-white">Editer votre profil</AppText>
        </Pressable>
      </ScrollView>
    </Screen>
  );
}

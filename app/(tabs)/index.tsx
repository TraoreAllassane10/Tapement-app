import AppText from "@/components/ui/app-text";
import Card from "@/components/ui/card";
import Screen from "@/components/ui/Screen";
import TapementItem from "@/features/tapement/components/tapement-item";
import { Tapements } from "@/features/tapement/constants/data";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import React from "react";
import { FlatList, Image, Pressable, ScrollView, View } from "react-native";

export default function HomeScreen() {
  return (
    <Screen>
      <ScrollView showsVerticalScrollIndicator={false} className="flex-1">
        {/* Header */}
        <View className="flex-row items-center justify-between mb-6">
          <View className="flex-1 flex-row items-center gap-1">
            <AppText className="text-2xl tracking-wider title font-bold">
              Bonjour
            </AppText>
            <AppText className="text-2xl tracking-wider text-accent font-bold">
              Allassane
            </AppText>
          </View>

          <View className="flex-row items-center gap-4">
            <Pressable>
              <Ionicons name="settings-outline" size={30} />
            </Pressable>

            <Pressable onPress={() => router.push("/profil")}>
              <Image
                source={require("../../assets/images/profil.jpg")}
                style={{ width: 30, height: 30, borderRadius: 100 }}
              />
            </Pressable>
          </View>
        </View>

        {/* Section QR code */}
        <View className="mb-6">
          {/* Bouton Scanner un code QR */}
          <Pressable
            onPress={() => router.push("/scanner")}
            className="bg-primary p-8 rounded-xl mb-6 active:opacity-90"
          >
            <View className="bg-blue-500/90 w-14 h-14 rounded-full items-center justify-center mb-6">
              <Ionicons name="qr-code-sharp" size={26} color={"white"} />
            </View>

            <View className="gap-2">
              <AppText className="text-2xl text-white tracking-wider font-bold">
                Scanner un code QR
              </AppText>
              <AppText className="text-xs tracking-wider text-white font-light">
                Ajouter un nouveau contact rapidement.
              </AppText>
            </View>
          </Pressable>

          {/* Bouton Afficher mon code QR */}
          <Pressable
            onPress={() => router.push("/mon-qr")}
            className="bg-secondary p-8 rounded-xl active:opacity-90"
          >
            <View className="bg-sky-500/90 w-14 h-14 rounded-full items-center justify-center mb-6">
              <Ionicons name="qr-code-outline" size={26} color={"black"} />
            </View>

            <View className="gap-2">
              <AppText className="text-2xl title tracking-wider font-bold">
                Afficher mon code QR
              </AppText>
              <AppText className="text-xs tracking-wider text-secondary font-light">
                Partager votre identité numérique.
              </AppText>
            </View>
          </Pressable>
        </View>

        {/* Section Derniers Tapements */}
        <View className="mb-6">
          {/* Entête */}
          <View className="flex-1 flex-row items-center justify-between mb-4">
            <AppText className="text-xl font-bold tracking-wider">
              Derniers Tapements
            </AppText>

            <Pressable>
              <AppText className="text-accent text-base font-semiBold">
                Voir tout
              </AppText>
            </Pressable>
          </View>

          <View className="flex-1 gap-10">
            <FlatList
              horizontal
              showsHorizontalScrollIndicator={false}
              data={Tapements}
              keyExtractor={(item) => item.id?.toString()!}
              renderItem={({ item }) => <TapementItem item={item} />}
              ItemSeparatorComponent={() => <View className="w-4" />}
              contentContainerClassName="px-1"
            />
          </View>
        </View>

        {/* Statistiques */}
        <View className="flex-1 flex-row gap-6 mb-6">
          <Card className="gap-10 w-40">
            <View className="flex-row items-center gap-2 ">
              <Ionicons name="person-outline" />
              <AppText className="text-sm font-bold">Réseau</AppText>
            </View>

            <View className="flex-row gap-1">
              <AppText className="text-3xl font-bold">142</AppText>
              <AppText className="self-end text-sm text-secondary">
                contacts
              </AppText>
            </View>
          </Card>

          <Card className="gap-10 ">
            <View className="flex-row items-center gap-2 ">
              <Ionicons name="eye-outline" />
              <AppText className="text-sm font-bold">Vues Profil</AppText>
            </View>

            <View className="flex-row gap-1">
              <AppText className="text-3xl font-bold">38</AppText>
              <AppText className="self-end text-sm text-secondary">
                cette sémaine
              </AppText>
            </View>
          </Card>
        </View>
      </ScrollView>
    </Screen>
  );
}

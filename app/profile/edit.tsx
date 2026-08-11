import AppText from "@/components/ui/app-text";
import Input from "@/components/ui/Input";
import Screen from "@/components/ui/Screen";
import {
    EditProfileData,
    editProfileSchema,
} from "@/features/profil/schemas/editProfilSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import {
    KeyboardAvoidingView,
    Platform,
    Pressable,
    ScrollView,
    View,
} from "react-native";

const EditProfil = () => {
  const {
    control,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<EditProfileData>({
    resolver: zodResolver(editProfileSchema),

    defaultValues: {
      nom: "",
      prenom: "",
      email: "",
      telephone: "",
      artiste: "",

      equipe: "",
      niveau: "",
      sport: "",
    },
  });

  const onSubmit = (data: EditProfileData) => {
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
          className="px-6"
        >
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
                    lefticon="person-outline"
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
                    lefticon="person-outline"
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

            {/* Téléphone */}
            <View className="gap-2">
              <AppText className="title text-sm">Téléphone</AppText>

              <Controller
                name="telephone"
                control={control}
                render={({ field, fieldState }) => (
                  <Input
                    placeholder="07 08 00 00 00"
                    value={field.value}
                    onChangeText={field.onChange}
                    lefticon="call-outline"

                    autoCapitalize="none"
                  />
                )}
              />
              {errors.telephone && (
                <AppText className="text-xs text-red-500">
                  {errors.telephone.message}
                </AppText>
              )}
            </View>

            {/* Téléphone */}
            <View className="gap-2">
              <AppText className="title text-sm">Niveau d'etude</AppText>

              <Controller
                name="niveau"
                control={control}
                render={({ field, fieldState }) => (
                  <Input
                    placeholder="Terminale"
                    value={field.value}
                    onChangeText={field.onChange}
                    lefticon="school-outline"
                    autoCapitalize="none"
                  />
                )}
              />
              {errors.niveau && (
                <AppText className="text-xs text-red-500">
                  {errors.niveau.message}
                </AppText>
              )}
            </View>

            {/* Sport preféré */}
            <View className="gap-2">
              <AppText className="title text-sm">Sport perféré</AppText>

              <Controller
                name="sport"
                control={control}
                render={({ field, fieldState }) => (
                  <Input
                    placeholder="Football"
                    value={field.value}
                    onChangeText={field.onChange}
                    lefticon="logo-playstation"
                    autoCapitalize="none"
                  />
                )}
              />
              {errors.sport && (
                <AppText className="text-xs text-red-500">
                  {errors.sport.message}
                </AppText>
              )}
            </View>

            {/* Equipe preférée */}
            <View className="gap-2">
              <AppText className="title text-sm">Equipe perférée</AppText>

              <Controller
                name="equipe"
                control={control}
                render={({ field, fieldState }) => (
                  <Input
                    placeholder="Real Madrid"
                    value={field.value}
                    onChangeText={field.onChange}
                    lefticon="football-outline"
                    autoCapitalize="none"
                  />
                )}
              />
              {errors.equipe && (
                <AppText className="text-xs text-red-500">
                  {errors.equipe.message}
                </AppText>
              )}
            </View>

            {/* Artiste preféré */}
            <View className="gap-2">
              <AppText className="title text-sm">Artiste perféré</AppText>

              <Controller
                name="artiste"
                control={control}
                render={({ field, fieldState }) => (
                  <Input
                    placeholder="Ninho"
                    value={field.value}
                    onChangeText={field.onChange}
                    lefticon="musical-note-outline"
                    autoCapitalize="none"
                  />
                )}
              />
              {errors.artiste && (
                <AppText className="text-xs text-red-500">
                  {errors.artiste.message}
                </AppText>
              )}
            </View>

            {/* Bouton Se connecter  */}
            <Pressable className="btn-primary" onPress={handleSubmit(onSubmit)}>
              <AppText className="text-white font-bold text-base">
                Mettre à jour
              </AppText>
            </Pressable>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </Screen>
  );
};

export default EditProfil;

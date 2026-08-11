import { Stack } from "expo-router";
import React from "react";

export default function ProfileLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="edit"
        options={{ presentation: "formSheet", title: "Editer votre profil" }}
      />
    </Stack>
  );
}

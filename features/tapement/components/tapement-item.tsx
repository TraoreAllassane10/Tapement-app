import AppText from "@/components/ui/app-text";
import Card from "@/components/ui/card";
import { formatRelativeDate } from "@/utils/date";
import React from "react";
import { Image, View } from "react-native";
import { Tapement } from "../types";

type TapementItemProps = {
  item: Tapement;
};

export default function TapementItem({ item }: TapementItemProps) {
  return (
    <Card className="items-center justify-center p-8">
      <View className="mb-4">
        <Image
          source={item.photo}
          style={{ width: 60, height: 60, borderRadius: 100 }}
        />
      </View>

      <View className="items-center justify-center gap-1">
        <AppText className="title text-lg font-bold tracking-wide">
          {item.nom} {item.prenom}
        </AppText>

        <AppText className="text-secondary font-bold text-sm">
          {item.profession}
        </AppText>

        <AppText className="text-secondary text-xs">
          {formatRelativeDate(item.date_scanne)}
        </AppText>
      </View>
    </Card>
  );
}

import AppText from "@/components/ui/app-text";
import Screen from "@/components/ui/Screen";
import { Ionicons } from "@expo/vector-icons";
import { Camera, CameraView, useCameraPermissions } from "expo-camera";
import * as ImagePicker from "expo-image-picker";
import React, { useState } from "react";
import { Pressable, StyleSheet, View } from "react-native";

export default function ScannerScreen() {
  const [permissions, requestPermissions] = useCameraPermissions();
  const [flashEnabled, setFlashEnabled] = useState(false);
  const [scanned, setScanned] = useState(false);

  // Importation d'un code qr depuis la galerie
  const pickerImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ["images"],
      allowsEditing: false,
      quality: 1,
    });

    if (result.canceled) {
      return;
    }

    const imageUri = result.assets[0].uri;

    const barCodes = await Camera.scanFromURLAsync(imageUri, ["qr"]);

    if (barCodes.length > 0) {
      handleScan(barCodes[0].data);
    } else {
      console.log("Aucun QR code trouvé");
    }
  };

  const handleScan = (data: string) => {
    if (scanned) {
      return;
    }

    setScanned(true);

    console.log("QR code : ", data);
  };

  if (!permissions) {
    return (
      <Screen>
        <AppText>Chargement...</AppText>
      </Screen>
    );
  }

  if (!permissions.granted) {
    return (
      <Screen>
        <View style={styles.permissionContainer}>
          <AppText style={styles.permissionText}>
            L'accès à la caméra est nécessaire pour scanner un QR code.
          </AppText>

          <Pressable onPress={requestPermissions} className="btn-primary px-4">
            <AppText className="text-white">Autoriser la caméra</AppText>
          </Pressable>
        </View>
      </Screen>
    );
  }

  return (
    <View style={styles.container}>
      {/* Caméra */}
      <CameraView
        style={StyleSheet.absoluteFill}
        facing="back"
        enableTorch={flashEnabled}
        barcodeScannerSettings={{
          barcodeTypes: ["qr"],
        }}

        onBarcodeScanned={({ data }) => handleScan(data)}
      />

      {/* Interface au dessus de la camera */}
      <View style={styles.overlay}>
        {/* Header */}
        <View className="flex-row items-center justify-between px-8 pt-14">
          <AppText className="text-2xl font-bold text-white">Tapement</AppText>

          <Pressable
            onPress={() => setFlashEnabled(!flashEnabled)}
            className="h-14 w-14 items-center justify-center rounded-full bg-slate-800/80"
          >
            <Ionicons
              name={flashEnabled ? "flash" : "flash-outline"}
              size={26}
              color="white"
            />
          </Pressable>
        </View>

        {/* Zone Centrale */}
        <View style={styles.scanSection}>
          <View style={styles.scanFrame}>
            {/* coins */}
            <View style={[styles.corner, styles.topLeft]} />
            <View style={[styles.corner, styles.topRight]} />
            <View style={[styles.corner, styles.bottomLeft]} />
            <View style={[styles.corner, styles.bottomRight]} />
          </View>

          {/* Message */}
          <View className="mt-14 rounded-full bg-slate-800/90 px-8 py-4">
            <AppText className="text-center text-lg font-semibold text-white">
              Place le QR Code dans le cadre.
            </AppText>
          </View>
        </View>

        {/* Import galerie */}
        <View className="items-center pb-8">
          <Pressable
            onPress={pickerImage}
            className="flex-row items-center rounded-full bg-white px-7 py-4 active:bg-white/90"
          >
            <Ionicons name="images-outline" size={26} color="#0B5CFF" />

            <AppText className="ml-3 text-lg text-blue-600">
              Importer depuis la galerie
            </AppText>
          </Pressable>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  camera: {
    flex: 1,
  },

  permissionContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 24,
  },

  permissionText: {
    textAlign: "center",
    marginBottom: 20,
  },

  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(15, 23, 42, 0.58)",
    justifyContent: "space-between",
  },

  scanSection: {
    alignItems: "center",
  },

  scanFrame: {
    width: 300,
    height: 300,
    position: "relative",
  },

  corner: {
    position: "absolute",
    width: 55,
    height: 55,
    borderColor: "#0B5CFF",
  },

  topLeft: {
    top: 0,
    left: 0,
    borderTopWidth: 6,
    borderLeftWidth: 6,
    borderTopLeftRadius: 28,
  },

  topRight: {
    top: 0,
    right: 0,
    borderTopWidth: 6,
    borderRightWidth: 6,
    borderTopRightRadius: 28,
  },

  bottomLeft: {
    bottom: 0,
    left: 0,
    borderBottomWidth: 6,
    borderLeftWidth: 6,
    borderBottomLeftRadius: 28,
  },

  bottomRight: {
    bottom: 0,
    right: 0,
    borderBottomWidth: 6,
    borderRightWidth: 6,
    borderBottomRightRadius: 28,
  },
});

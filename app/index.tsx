import { ImageBackground, ScrollView, SafeAreaView, Text } from "react-native";
import { router } from "expo-router";
import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import images from "../constants/images";
import PlaySoundButton from "@/components/PlaySoundButton";
// index.tsx serves as the default homescreen, aka the root route within a directory
// Goal is to have Sounds bring you to the alphabet page but then also pop up the tab navigator for the other sound pages (double consonants, double vowels,
// markings, accents, etc.)

const index = () => {
  return (
    <SafeAreaView className="bg-background h-full">
      <StatusBar style="auto" />
      <ScrollView contentContainerStyle={{ height: "100%" }}>
        {/* small devices small res so scrollable screen, ScrollView uses contentContainerStyle specifically */}
        <ImageBackground
          className="w-full h-full flex-1 justify-center items-center"
          source={images.stackscreen}
        >
          {/* use full width height allowable, fill whole container, center main axis (horizontal), center cross axis (vertical), pad horizontally 4 units */}
          <Text className="text-center text-white text-3xl">
            Welcome to{"\n"}
          </Text>
          <Text className="text-center text-white text-6xl font-bold">
            VietLearn
          </Text>
          <PlaySoundButton
            title="Let's get started"
            handlePress={() => router.push("/signin")}
            containerStyles="w-10/12 mt-7 bg-white min-h-[60px]"
            textStyles="text-primary font-bold text-2xl rounded-xl"
          />
        </ImageBackground>
      </ScrollView>
    </SafeAreaView>
  );
};

export default index;

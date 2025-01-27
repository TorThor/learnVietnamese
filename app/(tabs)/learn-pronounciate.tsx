import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, ImageBackground } from "react-native";
import * as Speech from "expo-speech";
import images from "../../constants/images";
import TextInputButton from "@/components/textinput-button";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import alphabet from "./alphabet";

const LearnPronounciate = () => {
  const [text, setText] = useState("");

  const words = text.toLowerCase().split(" ");

  const speakVietnamese = () => {
    const tts = text;
    Speech.speak(tts, {
      language: "vi-VN",
      rate: 1,
    });
  };

  return (
    <SafeAreaView className="bg-background h-full">
      <StatusBar style="auto" />
      <ImageBackground
        className="w-full h-full items-start px-4"
        source={images.stackscreen}
      >
        <TextInputButton
          value={text}
          placeholder="Type here"
          handleChangeText={setText}
          keyboardType="default"
          otherStyles="w-10/12"
        />
        <TouchableOpacity
          className=" mt-4 w-20 h-20 bg-primary rounded-xl justify-center items-center"
          onPress={speakVietnamese}
        >
          <Text className="text-white font-bold text-xl">Speak</Text>
        </TouchableOpacity>
        <Text className="text-white font-bold text-xl">
          --------------------------------------------------------{"\n"}
        </Text>
        {words.map((word, index) => {
          const letters = word.split("");

          return (
            <Text key={index} className="text-white font-bold text-xl">
              {word}: {letters.join(" ")}
            </Text>
          );
        })}
      </ImageBackground>
    </SafeAreaView>
  );
};

export default LearnPronounciate;

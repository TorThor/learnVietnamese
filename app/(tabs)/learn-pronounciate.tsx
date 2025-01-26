import React, { useState, useEffect } from "react";
import {
  Text,
  TouchableOpacity,
  FlatList,
  ImageBackground,
} from "react-native";
import * as Speech from "expo-speech";
import images from "../../constants/images";
import TextInputButton from "@/components/textinput-button";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";

const LearnPronounciate = () => {
  const [text, setText] = useState("");
  const [voices, setVoices] = useState<Speech.Voice[]>();

  useEffect(() => {
    const fetchVoices = async () => {
      try {
        const voicesList = await Speech.getAvailableVoicesAsync();
        setVoices(voicesList);
      } catch (error) {
        console.error("Error fetching voices", error);
      }
    };

    fetchVoices();
  }, []); // Empty dependency array ensures this runs only once

  const handleTextChange = (newText: string) => {
    setText(newText);
  };

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
          --------------------------------------------------------
        </Text>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default LearnPronounciate;

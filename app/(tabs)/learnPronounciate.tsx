import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  FlatList,
  SafeAreaView,
} from "react-native";
import * as Speech from "expo-speech";
import images from "../../constants/images";
import TextInputButton from "@/components/textinput-button";
import { StatusBar } from "expo-status-bar";
import PlaySoundButton from "@/components/PlaySoundButton";

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

  const renderWord = ({ item, index }: { item: string; index: number }) => {
    const letters = item.split("");

    return (
      <View key={index}>
        <Text className="text-white font-bold text-xl">
          {item}
          {item ? ":" : ""}
        </Text>
        <View className="flex-row flex-wrap">
          {letters.map((letter: string, letterIndex: number) => (
            <PlaySoundButton
              dataName="unifiedData"
              key={letterIndex}
              audioName={letter}
              title={letter}
              handlePress={() => {}}
              containerStyles="w-20 h-20 bg-primary mr-2 mb-2"
              textStyles="text-white font-bold text-3xl"
            />
          ))}
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView className="bg-background h-full">
      <StatusBar style="auto" />
      <ImageBackground
        className="w-full h-full px-4"
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
          className="mt-4 w-20 h-20 bg-primary rounded-xl justify-center items-center"
          onPress={speakVietnamese}
        >
          <Text className="text-white font-bold text-xl">Speak</Text>
        </TouchableOpacity>
        <Text className="text-white font-bold text-xl">
          --------------------------------------------------------{"\n"}
        </Text>
        <FlatList
          data={words}
          renderItem={renderWord}
          keyExtractor={(item, index) => `${item}-${index}`}
          className="w-full h-full"
        />
      </ImageBackground>
    </SafeAreaView>
  );
};

export default LearnPronounciate;

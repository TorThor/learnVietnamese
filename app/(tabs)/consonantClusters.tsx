import React, { useState } from "react";
import {
  View,
  ImageBackground,
  FlatList,
  SafeAreaView,
  Text,
  Linking,
  TouchableOpacity,
  Switch,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import images from "../../constants/images";
import PlaySoundButton from "@/components/PlaySoundButton";
import consonantClustersData from "@/constants/consonantClustersData";

const letterStyling: string = "text-white font-bold text-3xl";
const boxStylingBase: string = "w-20 h-20 bg-primary";
const descStyling: string = "flex-1 px-4 text-white text-2xl";

const consonantClusters = () => {
  const renderDescriptionWithUnderline = (
    desc: string,
    underline: number[]
  ) => {
    const beforeUnderline = desc.substring(0, underline[0] - 1);
    const underlinedText = desc.substring(underline[0] - 1, underline[1]);
    const afterUnderline = desc.substring(underline[1]);

    return (
      <Text className={descStyling}>
        {beforeUnderline}
        <Text className="underline">{underlinedText}</Text>
        {afterUnderline}
      </Text>
    );
  };

  const handlePressSourceLink = () => {
    Linking.openURL("https://www.youtube.com/watch?v=8mme0S4UG1I");
  };

  const [isEnabled, setIsEnabled] = useState(true);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  return (
    <View className="bg-background h-full">
      <StatusBar style="auto" />
      <ImageBackground
        className="w-full h-full justify-center items-center"
        source={images.stackscreen}
      >
        <FlatList
          className="w-full h-full px-4"
          data={consonantClustersData}
          keyExtractor={(item) => item.label}
          ListHeaderComponent={
            <View>
              <View className="flex-row items-center">
                <Text className=" text-white text-2xl">
                  Toggle descriptions
                </Text>
                <Switch
                  trackColor={{ false: "#767577", true: "#84CC15" }}
                  thumbColor={isEnabled ? "#FFFFFF" : "#f4f3f4"}
                  onValueChange={toggleSwitch}
                  value={isEnabled}
                />
              </View>
              <TouchableOpacity onPress={handlePressSourceLink}>
                <Text className="text-primary text-xl underline mt-4">
                  Pronounciation Source
                </Text>
                <Text className="text-white text-xl"></Text>
              </TouchableOpacity>
            </View>
          }
          renderItem={({ item, index }) => (
            <View className="flex-row items-center">
              <PlaySoundButton
                dataName="consonantClustersData"
                audioName={item.label}
                title={item.label}
                handlePress={() => {}}
                containerStyles={`${boxStylingBase} ${
                  index === consonantClustersData.length - 1 ? "mb-4" : ""
                }`}
                textStyles={letterStyling}
              />
              {isEnabled
                ? renderDescriptionWithUnderline(item.desc, item.underline)
                : null}
            </View>
          )}
          ItemSeparatorComponent={() => <View className="h-4" />}
        />
      </ImageBackground>
    </View>
  );
};

export default consonantClusters;

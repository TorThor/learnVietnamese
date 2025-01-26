import { TouchableOpacity, Text } from "react-native";
import React from "react";
import { Audio } from "expo-av";
import audioMap from "../constants/letters-audio-map";

type PlaySoundButtonProps = {
  title: string;
  handlePress: () => void;
  isLoading?: boolean;
  containerStyles?: string;
  textStyles?: string;
  audioName?: string;
};

const PlaySoundButton: React.FC<PlaySoundButtonProps> = ({
  title,
  handlePress,
  isLoading = false,
  containerStyles = "",
  textStyles = "",
  audioName,
}) => {
  const handlePressWithAudio = async () => {
    try {
      handlePress();

      if (audioName && audioMap[audioName]) {
        const { sound } = await Audio.Sound.createAsync(audioMap[audioName]);
        await sound.playAsync();
        sound.setOnPlaybackStatusUpdate((status) => {
          if (status.isLoaded && status.didJustFinish) {
            sound.unloadAsync();
          }
        });
      }
    } catch (error) {
      console.error("Error playing sound:", error);
    }
  };

  return (
    <TouchableOpacity
      onPress={handlePressWithAudio}
      activeOpacity={0.7}
      className={`rounded-xl justify-center items-center  ${containerStyles} ${
        isLoading ? "opacity-50" : ""
      }`}
      disabled={isLoading}
    >
      <Text className={`${textStyles}`}>{title}</Text>
    </TouchableOpacity>
  );
};

export default PlaySoundButton;

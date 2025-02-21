import {
  Image,
  Text,
  View,
  useWindowDimensions,
  ImageBackground,
} from "react-native";
import React from "react";
import images from "../../constants/images";
import { commonStyles } from "../../styles/styles";
import { StatusBar } from "expo-status-bar";

const TonalMarks = () => {
  const { width } = useWindowDimensions();
  const imageWidth = width * 0.9;
  const imageAspectRatio = 16 / 9;
  const imageHeight = imageWidth / imageAspectRatio;
  const diatrics = [
    [
      "acute accent(“ ´ ”)",
      "grave(“ ` ”)",
      "hook(” ̉  “)",
      "tilde(“ ~ ”)",
      "dot(“ . ”)",
    ],
    ["s", "f", "r", "x", "j"],
    ["á = as", "à = af", "ả = ar", "ã = ax", "ạ = aj"],
  ];

  return (
    <View className="bg-background h-full">
      <StatusBar style="auto" />
      <ImageBackground
        className="w-full h-full justify-center items-center"
        source={images.stackscreen}
      >
        <Text>Tonal Marks</Text>
        <Image
          source={require("../../assets/images/tonal-marks.png")}
          resizeMode="contain"
          style={{ width: imageWidth, height: imageHeight }}
        />
        <Text>Diacritics</Text>
        {diatrics.map((row, rowIndex) => (
          <View key={rowIndex}>
            {row.map((item, index) => (
              <Text key={index}>{item}</Text>
            ))}
          </View>
        ))}
        <Text>Typing â, ê, ô</Text>
        <Text>
          Type the underlying letter x2.{"\n"}Ex.: â: "aa", ô: "oo", ê: "ee"
        </Text>
        <Text>Typing ư, ơ and ă</Text>
        <Text>
          Type the underlying letter + w.{"\n"}Ex.: ư: "uw", ơ: "ow", ă: "aw"
        </Text>
      </ImageBackground>
    </View>
  );
};

export default TonalMarks;

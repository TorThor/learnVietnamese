import { Image, Text, View, useWindowDimensions } from "react-native";
import React from "react";
import { commonStyles } from "../../styles/styles";

const TonalMarks = () => {
  const { width } = useWindowDimensions();
  const imageWidth = width * 0.9;
  const imageAspectRatio = 16 / 9;
  const imageHeight = imageWidth / imageAspectRatio;

  return (
    <View style={commonStyles.container}>
      <Text style={commonStyles.text}>Tonal Marks</Text>
      <Image
        source={require("../../assets/images/tonal-marks.png")}
        resizeMode="contain"
        style={{ width: imageWidth, height: imageHeight }}
      />
    </View>
  );
};

export default TonalMarks;

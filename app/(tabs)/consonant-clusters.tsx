import { FlatList, View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { Audio } from "expo-av";
import { commonStyles } from "../../styles/styles";
import consonantClusterData from "../../constants/consonantClusterData";

const ConsonantClusters = () => {
  const playSound = async (file: any) => {
    const { sound } = await Audio.Sound.createAsync(file);
    await sound.playAsync();
    sound.setOnPlaybackStatusUpdate((status) => {
      if (status.isLoaded && status.didJustFinish) {
        sound.unloadAsync();
      }
    });
  };

  const renderItem = ({ item }: { item: (typeof consonantClusterData)[0] }) => {
    const { desc, underline } = item;
    const start = underline[0];
    const end = underline[1];

    const beforeUnderline = desc.slice(0, start);
    const underlinedText = desc.slice(start, end);
    const afterUnderline = desc.slice(end);

    return (
      <View style={commonStyles.itemContainer}>
        <TouchableOpacity
          style={commonStyles.button}
          onPress={() => playSound(item.file)}
        >
          <Text style={commonStyles.buttonText}>{item.label}</Text>
        </TouchableOpacity>
        <Text style={commonStyles.text}>
          {beforeUnderline}
          {underline.length > 0 && (
            <Text style={commonStyles.underlined}>{underlinedText}</Text>
          )}
          {afterUnderline}
        </Text>
      </View>
    );
  };

  return (
    <View style={commonStyles.container}>
      <FlatList
        style={commonStyles.flatList}
        data={consonantClusterData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={commonStyles.listContainer}
      />
    </View>
  );
};

export default ConsonantClusters;

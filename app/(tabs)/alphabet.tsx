import { FlatList, View, Text, TouchableOpacity, Linking } from "react-native";
import React from "react";
import { Audio } from "expo-av";
import { commonStyles } from "../../styles/styles";
import audioData from "../../constants/alphabetAudioData";

const alphabet = () => {
  const playSound = async (file: any) => {
    const { sound } = await Audio.Sound.createAsync(file);
    await sound.playAsync();
    sound.setOnPlaybackStatusUpdate((status) => {
      if (status.isLoaded && status.didJustFinish) {
        sound.unloadAsync();
      }
    });
  };

  const renderHeader = () => (
    <View
      style={{
        flexDirection: "row",
        marginBottom: 10,
        paddingRight: 20,
        paddingLeft: 10,
      }}
    >
      <Text>Source: </Text>
      <TouchableOpacity onPress={handlePressSourceLink}>
        <Text style={commonStyles.linkText}>
          https://langi.app/blog/vietnamese-alphabet-tones#vietnamese-single-consonants
        </Text>
        <Text>
          Single consonant playback are words since would be hard to
          pronounciate otherwise
        </Text>
      </TouchableOpacity>
    </View>
  );

  const renderItem = ({ item }: { item: (typeof audioData)[0] }) => {
    const desc = item.desc || "";
    const underline = item.underline || [];

    const start = underline.length > 0 ? underline[0] : 0;
    const end = underline.length > 0 ? underline[1] : 0;

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

  const handlePressSourceLink = () => {
    Linking.openURL(
      "https://langi.app/blog/vietnamese-alphabet-tones#vietnamese-single-consonants"
    );
  };

  return (
    <View style={commonStyles.container}>
      <FlatList
        style={commonStyles.flatList}
        data={audioData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={commonStyles.listContainer}
        ListHeaderComponent={renderHeader}
      />
    </View>
  );
};

export default alphabet;

import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { commonStyles } from "../../styles/styles";
import * as Speech from "expo-speech";

const LearnPronounciate = () => {
  const [text, setText] = useState("");
  const [voices, setVoices] = useState<Speech.Voice[]>(); // State to hold the list of voices

  useEffect(() => {
    // Fetch available voices when the component mounts
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
      rate: 0.2,
    });
  };

  return (
    <View style={commonStyles.container}>
      <Text>learnPronounciate</Text>
      <TextInput
        style={commonStyles.input}
        onChangeText={handleTextChange}
        value={text}
        placeholder="Type here"
      />
      <Text>{`Current Text: ${text}`}</Text>
      <TouchableOpacity style={commonStyles.button} onPress={speakVietnamese}>
        <Text style={commonStyles.buttonText}>Speak</Text>
      </TouchableOpacity>
      <Text style={{ marginTop: 20 }}>Available Voices:</Text>
      <ScrollView style={{ maxHeight: 200 }}>
        {voices && voices.length > 0 ? (
          voices.map((voice, index) => (
            <Text key={index}>
              {voice.name} - {voice.language}
            </Text>
          ))
        ) : (
          <Text>No voices available</Text>
        )}
      </ScrollView>
    </View>
  );
};

export default LearnPronounciate;

import { Tabs } from "expo-router";
import { Image } from "react-native";

export default function TabsLayout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="alphabet"
        options={{
          headerShown: false,
          title: "Alphabet",
          tabBarActiveTintColor: "green",
          tabBarIcon: () => (
            <Image source={require("../../assets/icons/alphabet.png")} />
          ),
        }}
      />
      <Tabs.Screen
        name="consonantClusters"
        options={{
          headerShown: false,
          title: "Clusters",
          tabBarActiveTintColor: "green",
          tabBarIcon: () => (
            <Image
              source={require("../../assets/icons/consonant-cluster.png")}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="tonalMarks"
        options={{
          headerShown: false,
          title: "Tonal",
          tabBarActiveTintColor: "green",
          tabBarIcon: () => (
            <Image source={require("../../assets/icons/tonal-marks.png")} />
          ),
        }}
      />
      <Tabs.Screen
        name="typing"
        options={{
          headerShown: false,
          title: "Typing",
          tabBarActiveTintColor: "green",
          tabBarIcon: () => (
            <Image source={require("../../assets/icons/typing.png")} />
          ),
        }}
      />
      <Tabs.Screen
        name="learnPronounciate"
        options={{
          headerShown: false,
          title: "Pronounciate",
          tabBarActiveTintColor: "green",
          tabBarIcon: () => (
            <Image
              source={require("../../assets/icons/learn-pronounciate.png")}
            />
          ),
        }}
      />
    </Tabs>
  );
}

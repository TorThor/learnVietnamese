import { Tabs } from "expo-router";
import { useSafeAreaInsets } from "react-native-safe-area-context"; // Import hook
import { View, Text, Image, ImageSourcePropType, Platform } from "react-native";
import icons from "../../constants/icons";

type TabIconProps = {
  icon: ImageSourcePropType;
  color: string;
  name: string;
  focused: boolean;
};

const TabIcon: React.FC<TabIconProps> = ({ icon, color, name, focused }) => {
  return (
    <View className="items-center justify-center gap-2">
      <Image source={icon} resizeMode="contain" tintColor={color} />
      <Text
        className={`${focused ? "font-psemibold" : "font-pregular"} text-xs`}
        style={{ color: color }}
      >
        {name}
      </Text>
    </View>
  );
};

const TabsLayout = () => {
  const insets = useSafeAreaInsets();

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: "#84CC15",
        tabBarInactiveTintColor: "gray",
        tabBarStyle: {
          backgroundColor: "#E0D0BB",
          borderTopWidth: 1,
          borderTopColor: "#84CC15",
          height:
            Platform.OS === "ios" ? 60 + insets.bottom : 70 + insets.bottom,
        },
      }}
    >
      <Tabs.Screen
        name="alphabet"
        options={{
          title: "Alphabet",
          tabBarIcon: ({ color, focused }) => (
            <TabIcon
              icon={icons.alphabet}
              color={color}
              name="Alphabet"
              focused={focused}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="consonantClusters"
        options={{
          title: "Clusters",
          tabBarIcon: ({ color, focused }) => (
            <TabIcon
              icon={icons.consonantClusters}
              color={color}
              name="Clusters"
              focused={focused}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="tonalMarks"
        options={{
          title: "Tonal Marks",
          tabBarIcon: ({ color, focused }) => (
            <TabIcon
              icon={icons.tonalMarks}
              color={color}
              name="Tonal Marks"
              focused={focused}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="typing"
        options={{
          title: "typing",
          tabBarIcon: ({ color, focused }) => (
            <TabIcon
              icon={icons.typing}
              color={color}
              name="Typing"
              focused={focused}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="learnPronounciate"
        options={{
          title: "learnPronounciate",
          tabBarIcon: ({ color, focused }) => (
            <TabIcon
              icon={icons.learnPronounciate}
              color={color}
              name="Pronounciate"
              focused={focused}
            />
          ),
        }}
      />
    </Tabs>
  );
};

export default TabsLayout;

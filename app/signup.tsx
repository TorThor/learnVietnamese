import {
  View,
  ImageBackground,
  ScrollView,
  SafeAreaView,
  Text,
} from "react-native";
import { useState } from "react";
import { Link } from "expo-router";
import { StatusBar } from "expo-status-bar";
import images from "../constants/images";
import TextInputButton from "@/components/textinput-button"; // Use PascalCase for imported components
import React from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../FirebaseConfig";
import { router } from "expo-router";
import PlaySoundButton from "@/components/PlaySoundButton";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signUp = async () => {
    try {
      const user = await createUserWithEmailAndPassword(auth, email, password);
      if (user) router.push("/(tabs)/alphabet");
    } catch (error: any) {
      console.log(error);
      alert("Sign in failed: " + error.message);
    }
  };

  return (
    <SafeAreaView className="bg-background h-full">
      <StatusBar style="auto" />
      <ScrollView contentContainerStyle={{ height: "100%" }}>
        <ImageBackground
          className="w-full h-full flex-1 justify-center items-baseline"
          source={images.stackscreen}
        >
          <Text className="text-center text-white text-3xl px-4 mb-10 font-bold">
            Sign up for VietLearn
          </Text>
          <TextInputButton
            title="Email"
            value={email}
            placeholder="Enter your email"
            handleChangeText={setEmail}
            otherStyles="px-4 w-10/12"
            keyboardType="email-address"
          />
          <TextInputButton
            title="Password"
            value={password}
            placeholder="Enter your password"
            handleChangeText={setPassword}
            otherStyles="mt-10 px-4 w-10/12"
            keyboardType="default"
          />
          <View className="flex-row mt-10">
            <PlaySoundButton
              title="Sign up"
              handlePress={() => signUp()}
              containerStyles="px-4"
              textStyles="text-primary font-bold text-2xl rounded-xl"
            ></PlaySoundButton>
            <Link
              href="/signin"
              className="text-primary font-bold text-2xl rounded-xl px-4"
            >
              Go back
            </Link>
          </View>
        </ImageBackground>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Signup;

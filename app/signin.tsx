import {
  View,
  ImageBackground,
  ScrollView,
  SafeAreaView,
  Text,
} from "react-native";
import { useState, useEffect } from "react";
import { Link } from "expo-router";
import { StatusBar } from "expo-status-bar";
import images from "../constants/images";
import TextInputButton from "@/components/textinput-button";
import { signInWithEmailAndPassword, getAuth } from "firebase/auth";
import { router } from "expo-router";
import PlaySoundButton from "@/components/PlaySoundButton";
import AsyncStorage from "@react-native-async-storage/async-storage";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    const checkUserLoggedIn = async () => {
      const storedUser = await AsyncStorage.getItem("userToken");
      if (storedUser) {
        router.push("/(tabs)/alphabet");
      }
    };

    checkUserLoggedIn();
  }, []);

  const signIn = async () => {
    try {
      const auth = getAuth();
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );

      const token = await userCredential.user.getIdToken();
      await AsyncStorage.setItem("userToken", token);

      router.push("/(tabs)/alphabet");
    } catch (error: any) {
      console.error("Sign in failed: ", error);
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
            Log in to VietLearn
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
          <PlaySoundButton
            title="Sign in"
            handlePress={() => signIn()}
            containerStyles="px-4"
            textStyles="text-primary font-bold text-2xl rounded-xl mt-5"
          ></PlaySoundButton>
          <View className="flex-row mt-10">
            <Link
              href="/signup"
              className="text-primary font-bold text-2xl rounded-xl px-4"
            >
              Sign up
            </Link>
            <Link
              href="/"
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

export default SignIn;

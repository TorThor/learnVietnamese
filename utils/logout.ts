import { router } from "expo-router";
import { useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const logout = () => {
  const checkUserLoggedIn = async () => {
    try {
      const storedUser = await AsyncStorage.getItem("userToken");
      if (storedUser) {
        await AsyncStorage.removeItem("userToken");
        router.push("../");
      }
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };
  checkUserLoggedIn();
};

export default logout;

import React, { useState } from "react";
import {
  View,
  TextInput,
  KeyboardTypeOptions,
  Text,
  Image,
  TouchableOpacity,
} from "react-native";
import images from "../constants/images";

type TextInputButtonProps = {
  title?: string;
  value: string;
  placeholder: string;
  handleChangeText: (e: string) => void;
  otherStyles?: string;
  keyboardType: KeyboardTypeOptions;
};

const textInputButton: React.FC<TextInputButtonProps> = ({
  title,
  value,
  placeholder,
  handleChangeText,
  otherStyles,
  keyboardType,
}) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <View className={`${otherStyles}`}>
      <Text className={`text-white font-psemibold text-lg`}>{title}</Text>
      <View className="bg-trinary border-2 border-gray-100 h-16 px-4 rounded-2xl focus:border-primary flex-row items-center">
        <TextInput
          className="flex-1 text-white font-psemibold text-base"
          value={value}
          placeholder={placeholder}
          placeholderTextColor="#7b7b8b"
          onChangeText={handleChangeText}
          secureTextEntry={title === "Password" && !showPassword}
          keyboardType={keyboardType}
        />
        {title === "Password" && (
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            <Image
              source={!showPassword ? images.eye : images.eyeHide}
              className="w-6 h-6"
            ></Image>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default textInputButton;

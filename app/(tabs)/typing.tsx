import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { commonStyles } from "../../styles/styles";

const Typing = () => {
  const diatrics = [
    [
      "acute accent(“ ´ ”)",
      "grave(“ ` ”)",
      "hook(” ̉  “)",
      "tilde(“ ~ ”)",
      "dot(“ . ”)",
    ],
    ["s", "f", "r", "x", "j"],
    ["á = as", "à = af", "ả = ar", "ã = ax", "ạ = aj"],
  ];

  return (
    <View style={commonStyles.container}>
      <Text style={commonStyles.header}>Diacritics</Text>
      {diatrics.map((row, rowIndex) => (
        <View key={rowIndex} style={commonStyles.row}>
          {row.map((item, index) => (
            <Text key={index} style={[commonStyles.text, commonStyles.cell]}>
              {item}
            </Text>
          ))}
        </View>
      ))}
      <Text style={commonStyles.header}>Typing â, ê, ô</Text>
      <Text style={commonStyles.text}>
        Type the underlying letter x2.{"\n"}Ex.: â: "aa", ô: "oo", ê: "ee"
      </Text>
      <Text style={commonStyles.header}>Typing ư, ơ and ă</Text>
      <Text style={commonStyles.text}>
        Type the underlying letter + w.{"\n"}Ex.: ư: "uw", ơ: "ow", ă: "aw"
      </Text>
    </View>
  );
};

export default Typing;

// e:\Coding\ReactNative\RNapp\app\_layout.tsx
import { Stack } from "expo-router";

export default function AppStack() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{ headerShown: true, title: "Welcome to myApp" }}
      />
      <Stack.Screen
        name="(tabs)"
        options={{
          headerShown: true,
          headerTitle: "Pronounciation",
        }}
      />
    </Stack>
  );
}

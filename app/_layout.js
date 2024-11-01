import { View, Text } from "react-native";
import { Slot } from "expo-router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

export default function _layout() {
  return (
    <QueryClientProvider client={queryClient}>
      <View className="flex-1 bg-white items-center justify-center">
        <Slot />
      </View>
    </QueryClientProvider>
  );
}

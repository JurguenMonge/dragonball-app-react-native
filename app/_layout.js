import { View } from "react-native";
import { Stack } from "expo-router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Logo from "../src/components/Logo";

const queryClient = new QueryClient();

export default function _layout() {
  return (
    <QueryClientProvider client={queryClient}>
      <View className="flex-1 bg-white ">
        <Stack
            screenOptions={{
                headerStyle: { backgroundColor: "white" },
                headerTintColor: "black",
                headerTitle: () => <Logo />, 
                headerTitleAlign: 'center',
              }}
        />
      </View>
    </QueryClientProvider>
  );
}

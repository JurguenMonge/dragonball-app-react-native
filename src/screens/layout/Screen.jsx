import { View, Text, TouchableOpacity, Linking } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Screen({ children }) {
  const handlePress = () => {
    Linking.openURL("https://github.com/JurguenMonge");
  };

  return (
    <SafeAreaView className="bg-white flex-1">
      <View className="pt-4 px-2 flex-1">
        {children}
      </View>
      <View className="bg-transparent p-1"> 
        <TouchableOpacity onPress={handlePress}>
          <Text className="text-gray-400 text-center text-base">
            © Jurguen Monge - {new Date().getFullYear()}
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

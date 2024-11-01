import { useQuery } from "@tanstack/react-query";
import { getCharacters } from "../../api/CharactersAPI";
import { Text, ActivityIndicator, FlatList, View } from "react-native";
import { AnimatedCharacterCard } from "../../components/character/CharacterCard";
import Screen from "../layout/Screen";

export default function Characters() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["getAllCharacters"],
    queryFn: getCharacters,
  });

  if (isLoading) {
    return (
        <View className="flex-1 justify-center items-center" >
          <ActivityIndicator size="large" color="#000" />
        </View>
      );
  }

  if (error) {
    return <Text className="text-red-500 text-center">{error.message}</Text>;
  }

  return (
    <Screen>
      <FlatList
        data={data.items}
        keyExtractor={(item) => item.id.toString()}
        initialNumToRender={10}
        renderItem={({ item }) => (
          <AnimatedCharacterCard character={item} index={item.id} />
        )}
      />
    </Screen>
  );
}

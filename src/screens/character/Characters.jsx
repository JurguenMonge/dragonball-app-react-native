import { useQuery } from "@tanstack/react-query";
import { getCharacters } from "../../api/CharactersAPI";
import { View, Text, ActivityIndicator, FlatList, Image } from 'react-native';

export default function Characters() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["getAllCharacters"],
    queryFn: getCharacters,
  });

  if (isLoading) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  if (error) {
    return <Text>{error.message}</Text>;
  }

  console.log(data)

  return (
    <FlatList
    data={data.items}
    keyExtractor={(item) => item.id.toString()}
    renderItem={({ item }) => (
      <View className="flex-row items-center p-4 border-b border-gray-300">
        <Image source={{ uri: item.image }} className="w-12 h-12 rounded-full mr-4" />
        <View>
          <Text className="font-bold text-lg">{item.name}</Text>
          <Text>Transformación: {item.transformation || 'N/A'}</Text>
          <Text>Raza: {item.race || 'N/A'}</Text>
        </View>
      </View>
    )}
  />
  );
}

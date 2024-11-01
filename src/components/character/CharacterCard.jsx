import { useEffect, useRef } from "react";
import { View, Text, Image, Animated } from "react-native";

export default function CharacterCard({ character }) {
  return (
    <View
      className="w-full rounded-xl shadow-xl mb-6 bg-gray-100 pt-2"
      key={character.id}
    >
      <Image
        source={{ uri: character.image }}
        className="w-full h-60"
        resizeMode="contain" 
      />
      <View className="px-6 py-4 bg-zinc-700 rounded-b-xl "> 
        <Text className="font-bold text-2xl mb-2 text-white">
          {character.name} 
        </Text>

        <Text className="font-bold text-lg mb-4 text-yellow-400">
          {character.race} - {character.gender}
        </Text>

        <Text className="font-bold text-xl text-white">
          Base KI: 
        </Text>
        <Text className="font-bold text-base mb-4 text-yellow-400">
          {character.ki}
        </Text>

        <Text className="font-bold text-xl text-white">
          Total KI: 
        </Text>
        <Text className="font-bold text-base mb-4 text-yellow-400">
          {character.maxKi}
        </Text>
        
        <Text className="font-bold text-xl text-white">
          Affiliation:
        </Text>
        <Text className="font-bold text-base mb-4 text-yellow-400">
          {character.affiliation}
        </Text>
      </View>
      
    </View>
  );
}

export function AnimatedCharacterCard({ character, index }) {
  const opacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 1000,
      delay: index * 500,
      useNativeDriver: true,
    }).start();
  }, [opacity, index]);

  return (
    <Animated.View>
      <CharacterCard character={character} />
    </Animated.View>
  );
}

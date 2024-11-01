import { View, Text, Image, Animated } from 'react-native'

export default function CharacterCard({ character }) {
  return (
    <View className="flex-row bg-slate-500/10 p-4 rounded-xl gap-4 mb-10" key={character.id}>
        <Image source={{ uri: character.image }} className="w-24 h-24 rounded-full" />
        <View>
            <Text className="text-2xl font-bold mb-1">{character.name}</Text>
            <Text className="mt-2 flex-shrink">{character.description.slice(0, 100)}</Text>
        </View>
    </View>
  ) 
}


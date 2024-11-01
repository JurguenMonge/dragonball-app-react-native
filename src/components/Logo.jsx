import { Image } from "react-native"

export default function Logo() {
  return (
    <Image
        source={require("../assets/images/logo.jpg")}
        style={{ width: 120, height: 45 }}
        resizeMode="contain"
    />
  )
}

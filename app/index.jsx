import AsyncStorage from '@react-native-async-storage/async-storage';
import { useRouter } from "expo-router";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { assets } from "../assets/assets";
import "../global.css";
export default function Index() {
  const router = useRouter();

  const handleGuest = async() => {
    await AsyncStorage.setItem("isGuest", "true");
    // await AsyncStorage.setItem("email",null);
    router.push("/Home")
  }
  return (
    <SafeAreaView className={`bg-[#2b2b2b]`}>
      <ScrollView contentContainerStyle={{ height: "100%" }}>
        <View className="m-2 flex justify-center items-center">
          <Image
            source={assets.logo1} style={{ width: 300, height: 300 }}
          />
          <View className="w-3/4">
            <TouchableOpacity onPress={() => router.push("/Signup")} className="p-2 m-y-2 bg-[#f49b33] text-black rounded-lg ">
              <Text className="text-base font-semibold text-center">SignUp</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleGuest} className=" mt-4 p-2 m-y-2 bg-[#2b2b2b] border-2 border-[#f49b33]  rounded-lg ">
              <Text className="text-[#f49b33] text-base font-semibold text-center">Guest User</Text>
            </TouchableOpacity>
          </View>
          <View className="mt-4">
            <Text className="text-lg font-semibold text-center text-white">
              <View className="border-b-2 border-[#f49b33] p-2 mb-1 w-24" /> or{" "} <View className="border-b-2 border-[#f49b33] p-2 mb-1 w-24" />
            </Text>
            <TouchableOpacity onPress={() => router.push("/Signin")} className="flex flex-row items-center mt-4 p-2 m-y-2 bg-[#2b2b2b] border-2 border-[#f49b33]  rounded-lg w-full">
              <Text className="text-base font-semibold text-center text-white ">Already a User? {" "}</Text>
              <Text className="text-[#f49b33] text-base font-semibold text-center">Sign in</Text>
            </TouchableOpacity>
          </View>
          
          <Image source={assets.logo2} className="w-full mt-20" resizeMode="contain"/>
        </View> 
      </ScrollView>
    </SafeAreaView>
  );
}

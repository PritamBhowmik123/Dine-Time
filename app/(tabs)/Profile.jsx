import { Ionicons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRouter } from "expo-router";
import { getAuth, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import { Alert, Text, TouchableOpacity, View } from "react-native";

export default function Profile() {
  const router = useRouter();
  const auth = getAuth();
  const [userEmail, setUserEmail] = useState(null);

  useEffect(() => {
    const fetchUserEmail = async () => {
      const email = await AsyncStorage.getItem("userEmail");
      setUserEmail(email);
    };
    fetchUserEmail();
  }, []);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      await AsyncStorage.removeItem("userEmail");
      setUserEmail(null);
      Alert.alert("Logged out", "You have been logged out successfully.");
      router.push("/Signin");
    } catch (error) {
      Alert.alert("Error", "Error while logging out");
    }
  };

  const handleSignup = () => {
    router.push("/Signup");
  };

  return (
    <View className="flex-1 bg-[#1c1c1c] px-6 py-10">
      {/* Header */}
      <View className="flex-row items-center mb-8">
        <Ionicons name="person-circle-outline" size={40} color="#f49b33" />
        <Text className="text-2xl font-bold text-white ml-3">Profile</Text>
      </View>

      {/* User Card */}
      <View className="bg-[#2b2b2b] rounded-2xl p-6 shadow-md shadow-black mb-8">
        {userEmail ? (
          <>
            <Text className="text-[#f49b33] text-lg font-semibold mb-2">
              Logged in as
            </Text>
            <Text className="text-white text-base mb-4">{userEmail}</Text>

            <TouchableOpacity
              onPress={handleLogout}
              className="bg-[#f49b33] py-3 rounded-xl shadow-md shadow-black"
            >
              <Text className="text-black text-lg font-bold text-center">
                Logout
              </Text>
            </TouchableOpacity>
          </>
        ) : (
          <>
            <Text className="text-white text-base mb-4">
              You are not signed in yet.
            </Text>
            <TouchableOpacity
              onPress={handleSignup}
              className="bg-[#f49b33] py-3 rounded-xl shadow-md shadow-black"
            >
              <Text className="text-black text-lg font-bold text-center">
                Sign Up
              </Text>
            </TouchableOpacity>
          </>
        )}
      </View>
    </View>
  );
}

import AsyncStorage from '@react-native-async-storage/async-storage'
import { BlurView } from 'expo-blur'
import { router } from 'expo-router'
import { collection, getDocs, query } from 'firebase/firestore'
import { useEffect, useState } from 'react'
import { ActivityIndicator, FlatList, Image, ImageBackground, Platform, ScrollView, StatusBar, Text, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { assets } from '../../assets/assets'
import { db } from '../../config/firebaseConfig'
const Home = () => {
  const temp = async() => {
    const value = await AsyncStorage.getItem("isGuest");
    const email = await AsyncStorage.getItem("userEmail");
    console.log(value, email);
  }

  const [restaurants, setRestaurants] = useState([])
  const getRestaurants = async ()=>{
    const q = query(collection(db,"restaurants"));
    const res = await getDocs(q);
    res.forEach((item) => {
      setRestaurants((prev)=>[...prev, item.data()])
    })
  }
  useEffect(() => {
    getRestaurants();
    temp();
  }, []);
  const renderItem = ({ item }) => (
    <TouchableOpacity
      onPress={() => router.push(`/restaurant/${item.name}`)}
      className="bg-[#5f5f5f] max-h-64 max-w-xs flex justify-center rounded-lg p-4 mx-4 shadow-md"
    >
      <Image
        resizeMode="cover"
        source={{ uri: item.image }}
        className="h-28 mt-2 mb-1 rounded-lg"
      />
      <Text className="text-white text-lg font-bold mb-2">{item.name}</Text>
      <Text className="text-white text-base mb-2">{item.address}</Text>
      <Text className="text-white text-base mb-2">
        Open: {item.opening} - Close: {item.closing}
      </Text>
    </TouchableOpacity>
  )
  return (
    <SafeAreaView style={[
      { backgroundColor: "#2b2b2b" },
      Platform.OS == "android" && { paddingBottom: 55 },
      Platform.OS == "ios" && { paddingBottom: 20 },
    ]}>
      <StatusBar backgroundColor="#2b2b2b" barStyle="light-content" />
      <View className="flex items-center">
        <View className="bg-[#2b2b2b] w-full justify-center items-center flex flex-row p-2">
          <View className="flex flex-row">
            <Text className={`text-base h-10 pt-[${Platform.OS == "android" ? 4 : 8}] align-middle text-white`}>{" "}Welcome to{" "}</Text>
            <Image resizeMode='cover' className={"w-20 h-12"} source={assets.logo1} />
          </View>
        </View>
      </View>
      <ScrollView stickyHeaderIndices={[0]}>
        <ImageBackground
          resizeMode="cover"
          className="mb-4 w-full bg-[#2b2b2b] h-64 items-center justify-center"
          source={assets.homeBanner}
        >
          <BlurView
            intensity={Platform.OS === "android" ? 100 : 25}
            tint="dark"
            className="w-full p-4 shadow-lg"
          >
            <Text className="text-center text-3xl font-bold text-white">
              Dine with your loved ones
            </Text>
          </BlurView>
        </ImageBackground>
        <View className="ml-6">
          <Text className="text-[#f49b33] font-bold text-3xl">Top Discounts %</Text>
        </View>
        {
          restaurants.length > 0
            ?
            <FlatList data={restaurants} renderItem={renderItem} horizontal contentContainerStyle={{ padding: 16 }} showsHorizontalScrollIndicator={false} scrollEnabled={true} />
            :
            <ActivityIndicator animating color={"#fb9b33"} />
        }
        <View className="ml-6">
          <Text className="text-[#f49b33] font-bold text-2xl">Our Restaurants</Text>
        </View>
        {
          restaurants.length > 0
            ?
            <FlatList data={restaurants} renderItem={renderItem} horizontal contentContainerStyle={{ padding: 16 }} showsHorizontalScrollIndicator={false} scrollEnabled={true} />
            :
            <ActivityIndicator animating color={"#fb9b33"} />
        }
        {
          restaurants.length > 0
            ?
            <FlatList data={restaurants} renderItem={renderItem} horizontal contentContainerStyle={{ padding: 16 }} showsHorizontalScrollIndicator={false} scrollEnabled={true} />
            :
            <ActivityIndicator animating color={"#fb9b33"} />
        }
        {
          restaurants.length > 0
            ?
            <FlatList data={restaurants} renderItem={renderItem} horizontal contentContainerStyle={{ padding: 16 }} showsHorizontalScrollIndicator={false} scrollEnabled={true} />
            :
            <ActivityIndicator animating color={"#fb9b33"} />
        }
        {
          restaurants.length > 0
            ?
            <FlatList data={restaurants} renderItem={renderItem} horizontal contentContainerStyle={{ padding: 16 }} showsHorizontalScrollIndicator={false} scrollEnabled={true} />
            :
            <ActivityIndicator animating color={"#fb9b33"} />
        }
        {
          restaurants.length > 0
            ?
            <FlatList data={restaurants} renderItem={renderItem} horizontal contentContainerStyle={{ padding: 16 }} showsHorizontalScrollIndicator={false} scrollEnabled={true} />
            :
            <ActivityIndicator animating color={"#fb9b33"} />
        }
      </ScrollView>

    </SafeAreaView>
  )
}

export default Home
import { Ionicons } from '@expo/vector-icons';
import { useLocalSearchParams } from 'expo-router';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { useEffect, useRef, useState } from 'react';
import { Dimensions, FlatList, Image, Linking, Platform, ScrollView, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import DatePickerComponent from '../../components/restaurant/DatePickerComponent';
import FindSlots from '../../components/restaurant/FindSlots';
import GuestPickerComponent from '../../components/restaurant/GuestPickerComponent';
import { db } from '../../config/firebaseConfig';

export default function Restaurant() {
    const { restaurant } = useLocalSearchParams();

    const flatListRef = useRef(null);
    const windowWidth = Dimensions.get("window").width;

    const [restaurantData, setRestaurantData] = useState({});
    const [carouselData, setCarouselData] = useState({});
    const [slotsData, setSlotsData] = useState({});
    const [currentIndex, setCurrentIndex] = useState(0);
    const [date, setDate] = useState(new Date())
    const [selectedNumber, setSelectedNumber] = useState(2);
    const [selectedSlot, setSelectedSlot] = useState(null);
    const handleLocation = async () => {
        const url = "https://maps.app.goo.gl/CrXidcbqaxTTd5Ng8";
        const supported = await Linking.canOpenURL(url);
        if (supported) {
            await Linking.openURL(url);
        } else {
            console.log("Dont know how to open this url");
        }
    }
    const handleNextImage = () => {
        const carouselLength = carouselData[0]?.images.length;
        if (currentIndex < carouselLength - 1) {
            const nextIndex = currentIndex + 1;
            setCurrentIndex(nextIndex);
            flatListRef.current.scrollToIndex({ index: nextIndex, animated: true })
        }
        if (currentIndex == carouselLength - 1) {
            const nextIndex = 0;
            setCurrentIndex(nextIndex);
            flatListRef.current.scrollToIndex({ index: nextIndex, animated: true })
        }
    }
    const handlePrevImage = () => {
        const carouselLength = carouselData[0]?.images.length;
        if (currentIndex > 0) {
            const prevIndex = currentIndex - 1;
            setCurrentIndex(prevIndex);
            flatListRef.current.scrollToIndex({ index: prevIndex, animated: true })
        }
        if (currentIndex == 0) {
            const prevIndex = carouselLength - 1;
            setCurrentIndex(prevIndex);
            flatListRef.current.scrollToIndex({ index: prevIndex, animated: true })
        }
    }
    const carouselItem = ({ item }) => {
        return (
            <View style={{ width: windowWidth - 2 }} className="h-64 relative rounded-[25px]">
                <View style={{ position: "absolute", top: "50%", backgroundColor: "rgba(0,0,0,0.6)", borderRadius: 50, padding: 5, zIndex: 10, right: "6%" }}>
                    <Ionicons onPress={handleNextImage} name='arrow-forward' size={24} color="white" />
                </View>
                <View>
                    <Image source={{ uri: item }} style={{ opacity: 0.5, backgroundColor: "black", marginRight: 20, marginLeft: 5, borderRadius: 25 }} className="h-64" />
                </View>
                <View style={{ position: "absolute", top: "50%", backgroundColor: "rgba(0,0,0,0.6)", borderRadius: 50, padding: 5, zIndex: 10, left: "2%" }}>
                    <Ionicons onPress={handlePrevImage} name='arrow-back' size={24} color="white" />
                </View>
                <View style={{ position: "absolute", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "row", left: "50%", transform: [{ translateX: -50 }], zIndex: 10, bottom: 15 }}>
                    {carouselData[0].images?.map((_, i) => (
                        <View key={i} className={`bg-white h-2 p-1 w-2 ${i == currentIndex && "h-3 w-3"} mx-1 rounded-full `} />
                    ))}
                </View>
                <View>
                    <Image source={{ uri: item }} style={{ opacity: 0.5, backgroundColor: "black", marginRight: 20, marginLeft: 5, borderRadius: 25 }} className="h-64" />
                </View>
            </View>
        )
    }

    const getRestaurantData = async () => {
        try {
            const restaurantQuery = query(
                collection(db, "restaurants"),
                where("name", "==", restaurant)
            );
            const restaurantSnapshot = await getDocs(restaurantQuery);

            if (restaurantSnapshot.empty) {
                console.log("No matching restaurant found");
                return;
            }

            for (const doc of restaurantSnapshot.docs) {
                const restaurantData = doc.data();
                setRestaurantData(restaurantData);

                const carouselQuery = query(
                    collection(db, "carousel"),
                    where("res_id", "==", doc.ref)
                );
                const carouselSnapshot = await getDocs(carouselQuery);
                const carouselImages = [];
                if (carouselSnapshot.empty) {
                    console.log("No matching carousel found");
                    return;
                }
                carouselSnapshot.forEach((carouselDoc) => {
                    carouselImages.push(carouselDoc.data());
                });
                setCarouselData(carouselImages);

                const slotsQuery = query(
                    collection(db, "slot"),
                    where("ref_id", "==", doc.ref)
                );
                const slotsSnapshot = await getDocs(slotsQuery);
                const slots = [];
                if (slotsSnapshot.empty) {
                    console.log("No matching slots found");
                    return;
                }
                slotsSnapshot.forEach((slotDoc) => {
                    slots.push(slotDoc.data());
                });
                setSlotsData(slots[0]?.slot);
            }
        } catch (error) {
            console.log("Error fetching data", error);
        }
    };
    useEffect(() => {
        getRestaurantData();
    }, []);
    // console.log(restaurantData);
    // console.log(slotsData);
    // console.log(carouselData);

    return (
        <SafeAreaView
            style={[
                { backgroundColor: "#2b2b2b" },
                Platform.OS == "android" && { paddingBottom: 55 },
                Platform.OS == "ios" && { paddingBottom: 20 },
            ]}
        >
            <ScrollView className='h-full'>
                <View className="p-2 my-2 flex-1">
                    <Text className="text-2xl text-[#f49b33]">{restaurant}</Text>
                    <View className="border-b border-[#f49b33]" />
                </View>
                <View className="h-64 max-w-[98%] mx-2 rounded-[25px]">
                    <FlatList
                        ref={flatListRef}
                        data={carouselData[0]?.images}
                        renderItem={carouselItem}
                        horizontal
                        scrollEnabled={false}
                        style={{ borderRadius: 25 }}
                        showsHorizontalScrollIndicator={false}
                    />
                </View>
                <View className="flex-1 flex-row mt-2 p-2 ">
                    <Ionicons onPress={handleLocation} name='location-sharp' size={24} color="#f49b33" />
                    <Text className="max-w-[75%] text-white">
                        {restaurantData?.address} | {" "}
                        <Text onPress={handleLocation} className="underline flex items-center mt-1 text-[#f49b33] italic font-semibold">Get Direction</Text>
                    </Text>

                </View>
                <View className="flex-1 flex-row p-2 ">
                    <Ionicons onPress={handleLocation} name='time' size={24} color="#f49b33" />
                    <Text className="max-w-[75%] mx-2 font-bold text-white">
                        {restaurantData?.opening} - {restaurantData?.closing}
                    </Text>
                </View>
                <View className="flex-1 border m-2 p-2 border-[#f49b33] rounded-lg">
                    <View className="flex-1 flex-row m-2 p-1 justify-end items-center">
                        <View className="flex-1 flex-row">
                            <Ionicons name='calendar' size={24} color="#f49b33" />
                            <Text className="text-white mx-2 font-semibold">Select booking date</Text>
                        </View>
                        <DatePickerComponent date={date} setDate={setDate} />

                    </View>
                    <View className="flex-1 flex-row m-2 p-1 justify-end items-center">
                        <View className="flex-1 flex-row">
                            <Ionicons name='people' size={24} color="#f49b33" />
                            <Text className="text-white mx-2 font-semibold">Number of Guests</Text>
                        </View>
                        <GuestPickerComponent selectedNumber={selectedNumber} setSelectedNumber={setSelectedNumber} />

                    </View>
                </View>
                <View className="flex-1">
                    <FindSlots restaurant={restaurant} selectedNumber={selectedNumber} date={date} slots={slotsData} selectedSlot={selectedSlot} setSelectedSlot={setSelectedSlot}/>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}


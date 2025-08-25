import { Ionicons } from "@expo/vector-icons";
import { useLocalSearchParams } from "expo-router";
import { collection, getDocs, query, where } from "firebase/firestore";
import { useEffect, useRef, useState } from "react";
import {
    Dimensions,
    FlatList,
    Image,
    Linking,
    Platform,
    ScrollView,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import DatePickerComponent from '../../components/restaurant/DatePickerComponent';
import FindSlots from '../../components/restaurant/FindSlots';
import GuestPickerComponent from '../../components/restaurant/GuestPickerComponent';
import { db } from "../../config/firebaseConfig";
export default function Restaurant() {
    const { restaurant } = useLocalSearchParams();
    const flatListRef = useRef(null);
    const windowWidth = Dimensions.get("window").width;

    const [restaurantData, setRestaurantData] = useState({});
    const [carouselData, setCarouselData] = useState([]);
    const [slotsData, setSlotsData] = useState([]);
    const [menuData, setMenuData] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [date, setDate] = useState(new Date());
    const [selectedNumber, setSelectedNumber] = useState(2);
    const [selectedSlot, setSelectedSlot] = useState(null);
    const [search, setSearch] = useState("");
    const [activeTab, setActiveTab] = useState("booking");

    const handleLocation = async () => {
        const url = "https://maps.app.goo.gl/CrXidcbqaxTTd5Ng8";
        if (await Linking.canOpenURL(url)) {
            await Linking.openURL(url);
        }
    };

    const handleNextImage = () => {
        const carouselLength = carouselData[0]?.images?.length || 0;
        const nextIndex = currentIndex < carouselLength - 1 ? currentIndex + 1 : 0;
        setCurrentIndex(nextIndex);
        flatListRef.current?.scrollToIndex({ index: nextIndex, animated: true });
    };

    const handlePrevImage = () => {
        const carouselLength = carouselData[0]?.images?.length || 0;
        const prevIndex = currentIndex > 0 ? currentIndex - 1 : carouselLength - 1;
        setCurrentIndex(prevIndex);
        flatListRef.current?.scrollToIndex({ index: prevIndex, animated: true });
    };

    const carouselItem = ({ item }) => (
        <View style={{ width: windowWidth - 2 }} className="h-64 relative rounded-[25px]">
            {/* Right arrow */}
            <View className="absolute top-1/2 right-[6%] bg-black/60 rounded-full p-2 z-10">
                <Ionicons onPress={handleNextImage} name="arrow-forward" size={22} color="white" />
            </View>

            {/* Image */}
            <Image
                source={{ uri: item }}
                style={{ marginHorizontal: 5, borderRadius: 25 }}
                className="h-64"
            />

            {/* Left arrow */}
            <View className="absolute top-1/2 left-[2%] bg-black/60 rounded-full p-2 z-10">
                <Ionicons onPress={handlePrevImage} name="arrow-back" size={22} color="white" />
            </View>

            {/* Indicators */}
            <View className="absolute bottom-3 left-1/2 -translate-x-1/2 flex-row">
                {carouselData[0]?.images?.map((_, i) => (
                    <View
                        key={i}
                        className={`bg-white mx-1 rounded-full ${i === currentIndex ? "h-3 w-3" : "h-2 w-2"}`}
                    />
                ))}
            </View>
        </View>
    );

    const getRestaurantData = async () => {
        try {
            const restaurantQuery = query(
                collection(db, "restaurants"),
                where("name", "==", restaurant)
            );
            const restaurantSnapshot = await getDocs(restaurantQuery);

            if (restaurantSnapshot.empty) return;

            for (const docSnap of restaurantSnapshot.docs) {
                const data = docSnap.data();
                setRestaurantData(data);

                // Carousel
                const carouselQuery = query(
                    collection(db, "carousel"),
                    where("res_id", "==", docSnap.ref)
                );
                const carouselSnapshot = await getDocs(carouselQuery);
                const carouselImages = [];
                carouselSnapshot.forEach((cDoc) => carouselImages.push(cDoc.data()));
                setCarouselData(carouselImages);

                // Slots
                const slotsQuery = query(
                    collection(db, "slot"),
                    where("ref_id", "==", docSnap.ref)
                );
                const slotsSnapshot = await getDocs(slotsQuery);
                slotsSnapshot.forEach((sDoc) => setSlotsData(sDoc.data().slot));

                // Menu
                const menuQuery = query(
                    collection(db, "menu"),
                    where("ref_id", "==", docSnap.ref)
                );
                const menuSnapshot = await getDocs(menuQuery);
                menuSnapshot.forEach((mDoc) => setMenuData(mDoc.data().dishes));
            }
        } catch (error) {
            console.log("Error fetching restaurant data:", error);
        }
    };

    useEffect(() => {
        getRestaurantData();
    }, []);

    // -------------------------------
    // Render Menu (grouped by category)
    // -------------------------------
    const renderMenu = () => {
        if (!menuData.length) {
            return <Text className="text-gray-400 italic p-2">No menu available</Text>;
        }

        // Group dishes by category
        const categories = {};
        menuData.forEach((dish) => {
            if (!categories[dish.category]) {
                categories[dish.category] = [];
            }
            categories[dish.category].push(dish);
        });

        // Filter helper
        const filterDishes = (dishes) =>
            dishes.filter((d) => d.name.toLowerCase().includes(search.toLowerCase()));

        return (
            <View className="p-2 my-4">
                <Text className="text-xl text-[#f49b33] font-semibold mb-2">Menu</Text>

                {/* Search Bar */}
                <TextInput
                    className="bg-gray-800 text-white rounded-lg p-2 mb-4"
                    placeholder="Search dishes..."
                    placeholderTextColor="#aaa"
                    value={search}
                    onChangeText={setSearch}
                />

                {Object.keys(categories).map((category, idx) => {
                    const dishes = filterDishes(categories[category]);
                    if (dishes.length === 0) return null;

                    return (
                        <View key={idx} className="mb-6">
                            <Text className="text-lg text-[#f49b33] font-semibold mb-2">
                                {category}
                            </Text>
                            {dishes.map((dish, i) => (
                                <View
                                    key={i}
                                    className="flex-row justify-between items-center border-b border-gray-700 py-2"
                                >
                                    <Text className="text-white text-base">{dish.name}</Text>
                                    <Text className="text-[#f49b33] font-bold">${dish.price}</Text>
                                </View>
                            ))}
                        </View>
                    );
                })}
            </View>
        );
    };

    return (
        <SafeAreaView
            style={[
                { backgroundColor: "#2b2b2b" },
                Platform.OS === "android" && { paddingBottom: 55 },
                Platform.OS === "ios" && { paddingBottom: 20 },
            ]}
        >
            <ScrollView className="h-full">
                {/* Header */}
                <View className="p-2 my-2">
                    <Text className="text-2xl text-[#f49b33]">{restaurant}</Text>
                    <View className="border-b border-[#f49b33]" />
                </View>

                {/* Carousel */}
                {carouselData[0]?.images && (
                    <View className="h-64 max-w-[98%] mx-2 rounded-[25px]">
                        <FlatList
                            ref={flatListRef}
                            data={carouselData[0].images}
                            renderItem={carouselItem}
                            horizontal
                            scrollEnabled={false}
                            showsHorizontalScrollIndicator={false}
                        />
                    </View>
                )}
                <View className="flex-1 bg-[#2b2b2b]">
                    {/* Toggle Buttons */}
                    <View className="flex-row justify-around mt-4 mx-4 bg-[#1f1f1f] rounded-xl p-1">
                        <TouchableOpacity
                            onPress={() => setActiveTab("booking")}
                            className={`flex-1 p-2 rounded-xl ${activeTab === "booking" ? "bg-[#f49b33]" : ""
                                }`}
                        >
                            <Text
                                className={`text-center font-semibold ${activeTab === "booking" ? "text-black" : "text-white"
                                    }`}
                            >
                                Booking
                            </Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            onPress={() => setActiveTab("menu")}
                            className={`flex-1 p-2 rounded-xl ${activeTab === "menu" ? "bg-[#f49b33]" : ""
                                }`}
                        >
                            <Text
                                className={`text-center font-semibold ${activeTab === "menu" ? "text-black" : "text-white"
                                    }`}
                            >
                                Menu
                            </Text>
                        </TouchableOpacity>
                    </View>

                    {/* Content */}
                    <View className="flex-1 mt-4 px-2">
                        {activeTab === "booking" ? (
                            <>
                                {/* Your Booking Section */}
                                <View>
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
                                        <FindSlots restaurant={restaurant} selectedNumber={selectedNumber} date={date} slots={slotsData} selectedSlot={selectedSlot} setSelectedSlot={setSelectedSlot} />
                                    </View>
                                </View>
                            </>
                        ) : (
                            <>
                                {/* Your Menu Section */}
                                <View>{renderMenu()}</View>
                            </>
                        )}
                    </View>
                </View>


            </ScrollView>
        </SafeAreaView>
    );
}

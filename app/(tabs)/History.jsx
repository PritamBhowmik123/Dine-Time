import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRouter } from "expo-router";
import {
  collection,
  getDocs,
  getFirestore,
  query,
  where,
} from "firebase/firestore";
import { useEffect, useState } from "react";
import {
  Alert,
  FlatList,
  Modal,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const history = () => {
  const [userEmail, setUserEmail] = useState(null);
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [sortOption, setSortOption] = useState("bookingDate"); // default
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const router = useRouter();
  const db = getFirestore();

  useEffect(() => {
    const fetchUserEmail = async () => {
      const email = await AsyncStorage.getItem("userEmail");
      setUserEmail(email);
    };
    fetchUserEmail();
  }, []);

  const fetchBookings = async () => {
    if (userEmail) {
      try {
        const bookingCollection = collection(db, "bookings");
        const bookingQuery = query(
          bookingCollection,
          where("email", "==", userEmail)
        );
        const bookingSnapshot = await getDocs(bookingQuery);

        let bookingList = bookingSnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        // 🔹 Apply sorting based on dropdown option
        if (sortOption === "bookingDate") {
          bookingList.sort(
            (a, b) =>  new Date(a.date)  - new Date(b.date)// newest reservation date first
          );
        } else if (sortOption === "createdAtNewest") {
          bookingList.sort((a, b) => (a.id < b.id ? 1 : -1)); // newest booking first
        } else if (sortOption === "createdAtOldest") {
          bookingList.sort((a, b) => (a.id > b.id ? 1 : -1)); // oldest booking first
        }

        setBookings(bookingList);
      } catch (error) {
        console.log(error);
        Alert.alert("Error", "Could not fetch bookings");
      }
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchBookings();
  }, [userEmail, sortOption]);

  if (loading) {
    return (
      <SafeAreaView className="flex-1 justify-center items-center bg-[#2b2b2b]">
        <Text>Loading....</Text>
      </SafeAreaView>
    );
  }

  // helper function
  const formatDate = (isoString) => {
    if (!isoString) return "";
    const date = new Date(isoString);
    return (
      date.toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "short",
        year: "numeric",
      }) +
      " " +
      date.toLocaleTimeString("en-GB", {
        hour: "2-digit",
        minute: "2-digit",
      })
    );
  };

  return (
    <SafeAreaView className="flex-1 bg-[#1c1c1c]">
      {userEmail ? (
        <>
          {/* 🔹 Header Row */}
          <View className="flex-row justify-between items-center p-4">
            <Text className="text-white text-2xl font-bold">
              Booking History
            </Text>

            <TouchableOpacity
              onPress={() => setDropdownVisible(true)}
              className="px-3 py-2 bg-[#2b2b2b] rounded-xl border border-[#f49b33]"
            >
              <Text className="text-white">Sort ▾</Text>
            </TouchableOpacity>
          </View>

          {/* 🔹 Dropdown Modal */}
          <Modal
            visible={dropdownVisible}
            transparent
            animationType="fade"
            onRequestClose={() => setDropdownVisible(false)}
          >
            <TouchableOpacity
              className="flex-1 bg-black/40 justify-center items-center"
              activeOpacity={1}
              onPressOut={() => setDropdownVisible(false)}
            >
              <View className="bg-[#2b2b2b] w-64 rounded-2xl p-4">
                <TouchableOpacity
                  onPress={() => {
                    setSortOption("bookingDate");
                    setDropdownVisible(false);
                  }}
                  className="p-3 border-b border-gray-600"
                >
                  <Text className="text-white">Sort by Reservation Date</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    setSortOption("createdAtNewest");
                    setDropdownVisible(false);
                  }}
                  className="p-3 border-b border-gray-600"
                >
                  <Text className="text-white">Sort by Booking Time (Newest)</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    setSortOption("createdAtOldest");
                    setDropdownVisible(false);
                  }}
                  className="p-3"
                >
                  <Text className="text-white">Sort by Booking Time (Oldest)</Text>
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          </Modal>

          {/* 🔹 Bookings List */}
          <FlatList
            data={bookings}
            onRefresh={fetchBookings}
            refreshing={loading}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <View className="m-3 p-4 bg-[#2b2b2b] rounded-2xl shadow-md shadow-black">
                <Text className="text-[#f49b33] text-lg font-semibold mb-1">
                  {item.restaurant}
                </Text>
                <Text className="text-white">
                  📅 Date: {formatDate(item.date)}
                </Text>
                <Text className="text-white">⏰ Slot: {item.slot}</Text>
                <Text className="text-white">👥 Guests: {item.guests}</Text>
                <Text className="text-gray-300 text-sm mt-2 italic">
                  Booked with {item.email}
                </Text>
              </View>
            )}
            ListEmptyComponent={
              <View className="flex-1 justify-center items-center mt-20">
                <Text className="text-gray-400 text-lg">
                  No bookings found yet ✨
                </Text>
              </View>
            }
            contentContainerStyle={{ paddingBottom: 20 }}
          />
        </>
      ) : (
        <View className="flex-1 justify-center items-center px-6">
          <Text className="text-white text-xl mb-4 text-center">
            Please sign in to view your booking history
          </Text>
          <TouchableOpacity
            onPress={() => router.push("/Signin")}
            className="px-6 py-3 bg-[#f49b33] rounded-2xl shadow-md shadow-black"
          >
            <Text className="text-lg font-bold text-black">Sign In</Text>
          </TouchableOpacity>
        </View>
      )}
    </SafeAreaView>
  );
};

export default history;

import { Ionicons } from '@expo/vector-icons'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { addDoc, collection, serverTimestamp } from 'firebase/firestore'
import { Formik } from 'formik'
import { useState } from 'react'
import { Modal, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { db } from '../../config/firebaseConfig'
import validationSchema from '../../utils/guestFormSchema'

const FindSlots = ({ restaurant, selectedNumber, date, slots, selectedSlot, setSelectedSlot }) => {
    const [slotVisible, setSlotVisible] = useState(false)
    const [modalVisible, setModalVisible] = useState(false)
    const [formVisible, setFormVisible] = useState(false)

    const handlePress = () => setSlotVisible(!slotVisible)
    const handleSlotPress = (slot) => {
        let prevSlot = selectedSlot;
        if (prevSlot == slot) {
            setSelectedSlot(null)
        } else {
            setSelectedSlot(slot)
        }
    }
    const handleBooking = async () => {
        const userEmail = await AsyncStorage.getItem("userEmail")
        const guestStatus = await AsyncStorage.getItem("isGuest")
        if (userEmail) {
            try {
                await addDoc(collection(db, "bookings"), {
                    email: userEmail,
                    slot: selectedSlot,
                    date: date.toISOString(),
                    guests: selectedNumber,
                    restaurant: restaurant,
                    createdAt: serverTimestamp(),
                });
                alert("Booking Successfully Done!")
            } catch (error) {
                console.log('Error booking slot', error);
            }
        } else if (guestStatus === "true") {
            setFormVisible(true);
            setModalVisible(true);
        }
    }
    const handleFormSubmit = async (values) => {
        //todo - prevent multiple entry
        try {
            await addDoc(collection(db, "bookings"), {
                ...values,
                slot: selectedSlot,
                date: date.toISOString(),
                guests: selectedNumber,
                restaurant: restaurant,
                createdAt: serverTimestamp(),
            });
            alert("Booking Successfully Done!")
            setModalVisible(false)
        } catch (error) {
            console.log('Error booking slot', error);
        }
    }

    const handleCloseModal = () => {
        setModalVisible(false);
    }
    return (
        <View style={styles.flex1}>
            <View style={[
                styles.actionRow,
                selectedSlot !== null ? styles.actionRowWhenSlot : null
            ]}>
                <View style={selectedSlot !== null ? styles.flex1 : null}>
                    <TouchableOpacity onPress={handlePress}>
                        <Text style={styles.findSlotsBtn}>Find Slots</Text>
                    </TouchableOpacity>
                </View>
                {selectedSlot !== null && (
                    <View style={styles.flex1}>
                        <TouchableOpacity onPress={handleBooking}>
                            <Text style={styles.findSlotsBtn}>Book Slots</Text>
                        </TouchableOpacity>
                    </View>
                )}
            </View>
            {slotVisible && (
                <View style={styles.slotWrap}>
                    {slots.map((slot, index) => (
                        <TouchableOpacity
                            key={index}
                            style={[
                                styles.slotBtn,
                                selectedSlot && selectedSlot !== slot ? styles.opacityHalf : null,
                            ]} onPress={() => handleSlotPress(slot)}
                            disabled={
                                selectedSlot == slot || selectedSlot == null ? false : true
                            }
                        >
                            <Text style={styles.slotText}>{slot}</Text>
                        </TouchableOpacity>
                    ))}
                </View>
            )}
            <Modal visible={modalVisible} transparent={true} animationType='slide' style={{
                flex: 1,
                justifyContent: "flex-end",
                margin: 0,
                borderTopLeftRadius: 20,
                borderTopRightRadius: 20
            }}>
                <View className="flex-1 justify-end" style={{ backgroundColor: "#00000080" }}>
                    <View className=" mx-4 rounded-t-lg p-4 pb-6" style={{ backgroundColor: '#474747' }}>
                        {formVisible &&
                            (<Formik
                                initialValues={{ fullName: "", phoneNumber: "" }}
                                validationSchema={validationSchema}
                                onSubmit={handleFormSubmit}
                            >
                                {({
                                    handleChange,
                                    handleBlur,
                                    handleSubmit,
                                    values,
                                    errors,
                                    touched,
                                }) => (
                                    <View className="w-full">
                                        <View>
                                            <Ionicons
                                                name="close-sharp"
                                                size={30}
                                                color={"#f49b33"}
                                                onPress={handleCloseModal}
                                            />
                                        </View>
                                        <Text className="text-[#f49b33] mt-4 mb-2">Name</Text>
                                        <TextInput
                                            className="h-10 border border-white text-white rounded px-2"
                                            onChangeText={handleChange("fullName")}
                                            value={values.fullName}
                                            onBlur={handleBlur("fullName")}
                                        />

                                        {touched.fullName && errors.fullName && (
                                            <Text className="text-red-500 text-xs mb-2">
                                                {errors.fullName}
                                            </Text>
                                        )}
                                        <Text className="text-[#f49b33] mt-4 mb-2">
                                            Phone Number
                                        </Text>
                                        <TextInput
                                            className="h-10 border border-white text-white rounded px-2"
                                            onChangeText={handleChange("phoneNumber")}
                                            value={values.phoneNumber}
                                            onBlur={handleBlur("phoneNumber")}
                                        />

                                        {touched.phoneNumber && errors.phoneNumber && (
                                            <Text className="text-red-500 text-xs mb-2">
                                                {errors.phoneNumber}
                                            </Text>
                                        )}

                                        <TouchableOpacity
                                            onPress={handleSubmit}
                                            className="p-2 my-2 bg-[#f49b33]  text-black rounded-lg mt-10"
                                        >
                                            <Text className="text-lg font-semibold text-center">
                                                Submit
                                            </Text>
                                        </TouchableOpacity>
                                    </View>
                                )}
                            </Formik>)
                        }
                    </View>
                </View>
            </Modal>
        </View>
    )
}

const styles = StyleSheet.create({
    flex1: {
        flex: 1,
    },
    actionRow: {
        flexDirection: 'column',
    },
    actionRowWhenSlot: {
        flexDirection: 'row',
    },
    findSlotsBtn: {
        textAlign: 'center',
        fontSize: 16,
        fontWeight: '600',
        backgroundColor: '#f49b33',
        paddingVertical: 10,
        marginVertical: 8,
        marginHorizontal: 8,
        borderRadius: 10,
        color: '#fff',
    },
    slotWrap: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginHorizontal: 8,
        padding: 10,
        backgroundColor: '#474747',
        borderRadius: 12,
        justifyContent: 'flex-start',
    },
    slotBtn: {
        margin: 8,
        paddingVertical: 10,
        paddingHorizontal: 12,
        backgroundColor: '#f49b33',
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
    },
    opacityHalf: {
        opacity: 0.5,
    },
    slotText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16,
    },
});

export default FindSlots;

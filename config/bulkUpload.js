import { collection, doc, setDoc } from "firebase/firestore";
import { menu } from "../store/restaurants";
import { db } from "./firebaseConfig";

const restaurantData = menu

const uploadData = async () => {
    try{
        for(let i = 0; i < restaurantData.length; i++){
            const restaurant = restaurantData[i];
            const docRef = doc(collection(db,"menu"),`menu_${i+1}`);
            await setDoc(docRef, restaurant);
        }
            console.log("Data uploaded");
    }    
    catch(e){
        console.log("Error uploading data", e);
    }
}

export default uploadData
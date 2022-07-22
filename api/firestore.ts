import {
  collection,
  getDocs,
  getFirestore,
  query,
  where
} from 'firebase/firestore';
import seedFoodCategories from './foodCategoriesSeed';
import sampleFirestoreGetFoodCategoriesWithPicturesResponse from './sampleFirestoreGetFoodCategoriesWithPicturesResponse';

const FirestoreAPI = {
  getFoodCategories: async () => {},
  getFoodCategoriesWithPictures: async () => {
    // - Returns query from firestore ---------------------------
    // const db = getFirestore();
    // const foodsRef = collection(db, "foodCategories");
    // const foodsQuery = query(foodsRef, where("containsImages", "==", true));
    // const querySnapshot = await getDocs(foodsQuery);

    // const res = [];
    // querySnapshot.forEach((doc) => {
    //   res.push({
    //     id: doc.id,
    //     ...doc.data()
    //   })
    // });

    // return res;
    // ------------------------------------------------------------

    return sampleFirestoreGetFoodCategoriesWithPicturesResponse;
  }
};

export default FirestoreAPI;

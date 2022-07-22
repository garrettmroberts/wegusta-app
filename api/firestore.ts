import {
  collection,
  getDocs,
  getFirestore,
  query,
  where
} from 'firebase/firestore';
import seedFoodCategories from './foodCategoriesSeed';
import sampleGetRandomImagesResponse from './stubs/sampleGetRandomImagesResponse';

const FirestoreAPI = {
  getRandomImages: async () => {
    // const db = getFirestore();
    // const foodsRef = collection(db, "foodCategories");
    // const foodsQuery = query(foodsRef, where("containsImages", "==", true));
    // const querySnapshot = await getDocs(foodsQuery);

    // type QueryResultType = {
    //   id?: string,
    //   photos?: string[]
    // }

    // const QueryResult: QueryResultType[] = [];
    // querySnapshot.forEach((doc) => {
    //   QueryResult.push({
    //     id: doc.id,
    //     ...doc.data()
    //   })
    // });

    // const randomCategorySelection = [];
    // for (let i = 0; i < 8; i++) {
    //   let randInt = Math.floor(Math.random() * QueryResult.length);
    //   randomCategorySelection.push(QueryResult[randInt]);
    // }

    // const res: { id: string; photo: string; }[] = [];
    // randomCategorySelection.forEach((ele) => {
    //   let randInt = Math.floor(Math.random() * ele.photos!.length);
    //   res.push({
    //     id: ele.id!,
    //     photo: ele.photos![randInt]
    //   })
    // })
    // console.log(res);
    // return res;

    return sampleGetRandomImagesResponse;
  }
};

export default FirestoreAPI;

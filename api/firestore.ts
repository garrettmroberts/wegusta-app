import {
  collection,
  getDocs,
  getFirestore,
  query,
  where
} from 'firebase/firestore';
import sampleGetRandomImagesResponse from './stubs/sampleGetRandomImagesResponse';

type QueryResultType = {
  id?: string;
  photos?: string[];
};

type RandomImageResponseType = {
  category: string;
  imageUrl: string;
};

export default {
  getRandomImages: async (): Promise<RandomImageResponseType[]> => {
    const db = getFirestore();
    const foodsRef = collection(db, 'foodCategories');
    const foodsQuery = query(foodsRef, where('containsImages', '==', true));
    const querySnapshot = await getDocs(foodsQuery);

    const queryResult: QueryResultType[] = [];
    querySnapshot.forEach(doc => {
      queryResult.push({
        id: doc.id,
        ...doc.data()
      });
    });

    const randomCategorySelection = [];
    for (let i = 0; i < 5; i++) {
      let randInt = Math.floor(Math.random() * queryResult.length);
      randomCategorySelection.push(queryResult[randInt]);
      queryResult.splice(randInt, 1);
    }

    const res: RandomImageResponseType[] = [];
    randomCategorySelection.forEach(ele => {
      let randInt = Math.floor(Math.random() * ele.photos!.length);
      res.push({
        category: ele.id!,
        imageUrl: ele.photos![randInt]
      });
    });

    return res;

    // For use in dev.  Comment out above code.
    // return sampleGetRandomImagesResponse;
  }
};

import firestore from './firestore';
import storage from './storage';

const API = {
  getRandomImages: async () => {
    const firestoreResponse = await firestore.getRandomImages();
    const images = await storage.getImageUrls(
      firestoreResponse.map(({ id, photo }) => photo)
    );
    const res: any = [];
    firestoreResponse.map((ele, idx) => {
      res.push({
        category: ele.id,
        image: images[idx]
      });
    });

    return res;
  },
  firestore,
  storage
};

export default API;

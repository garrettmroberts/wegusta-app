import firestore from './firestore';
import storage from './storage';

const API = {
  getRandomImages: async () => {
    const firestoreResponse = await firestore.getRandomImages();
    const images = await storage.getImageUrls(firestoreResponse);
    return images;
  },
  firestore,
  storage
};

export default API;

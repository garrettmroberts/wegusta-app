import foodCategories from './foodCategories';

type RandomImageResponseType = {
  category: string;
  imageUri: string;
};


const API = {
  // getRandomImages: async () => {
  //   const firestoreResponse = await firestore.getRandomImages();
  //   const images = await storage.getImageUrls(firestoreResponse);
  //   return images;
  // },
  getRandomImages: async (): Promise<RandomImageResponseType[]> => {
    const filtered = foodCategories.filter(ele => ele.images.length > 0)

    const randomCategorySelection = [];
    for (let i = 0; i < 5; i++) {
      let randInt = Math.floor(Math.random() * filtered.length);
      randomCategorySelection.push(filtered[randInt]);
      filtered.splice(randInt, 1);
    }

    const res: RandomImageResponseType[] = [];
    randomCategorySelection.forEach(ele => {
      let randInt = Math.floor(Math.random() * ele.images.length);
      res.push({
        category: ele.value,
        imageUri: ele.images[randInt]
      });
    });

    return res;
  }
};

export default API;
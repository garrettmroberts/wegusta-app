import foodCategories from './foodCategories'

type RandomImageResponseType = {
  category: string;
  imageName: string;
};


const API = {
  getRandomImages: async (): Promise<RandomImageResponseType[]> => {
    const filtered = foodCategories.filter(ele => ele.images.length > 0)

    const randomCategorySelection = []
    for (let i = 0; i < 5; i++) {
      const randInt = Math.floor(Math.random() * filtered.length)
      randomCategorySelection.push(filtered[randInt])
      filtered.splice(randInt, 1)
    }

    const res: RandomImageResponseType[] = []
    randomCategorySelection.forEach(ele => {
      const randInt = Math.floor(Math.random() * ele.images.length)
      res.push({
        category: ele.value,
        imageName: ele.images[randInt]
      })
    })

    return res
  }
}

export default API
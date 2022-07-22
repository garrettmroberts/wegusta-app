import { doc, getFirestore, setDoc } from 'firebase/firestore';

const seedFoodCategories = async () => {
  const db = getFirestore();

  await setDoc(doc(db, 'foodCategories', 'brewPub'), {
    displayName: 'brew pub',
    containsImages: false
  });

  await setDoc(doc(db, 'foodCategories', 'barbeque'), {
    displayName: 'barbeque',
    containsImages: true,
    photos: [
      'gs://wegusta-app.appspot.com/foods/barbeque/barbeque-1.jpeg',
      'gs://wegusta-app.appspot.com/foods/barbeque/barbeque-2.jpeg',
      'gs://wegusta-app.appspot.com/foods/barbeque/barbeque-3.jpeg'
    ]
  });

  await setDoc(doc(db, 'foodCategories', 'burgers'), {
    displayName: 'burgers',
    containsImages: true,
    photos: [
      'gs://wegusta-app.appspot.com/foods/burgers/burgers-1.jpeg',
      'gs://wegusta-app.appspot.com/foods/burgers/burgers-2.jpeg',
      'gs://wegusta-app.appspot.com/foods/burgers/burgers-3.jpeg'
    ]
  });

  await setDoc(doc(db, 'foodCategories', 'cafe'), {
    displayName: 'cafe',
    containsImages: false
  });

  await setDoc(doc(db, 'foodCategories', 'cajun_creole'), {
    displayName: 'Cajun & Creole',
    containsImages: true,
    photos: [
      'gs://wegusta-app.appspot.com/foods/cajun_creole/cajun_creole-1.jpeg'
    ]
  });

  await setDoc(doc(db, 'foodCategories', 'chinese'), {
    displayName: 'chinese',
    containsImages: true,
    photos: [
      'gs://wegusta-app.appspot.com/foods/chinese/chinese-1.jpeg',
      'gs://wegusta-app.appspot.com/foods/chinese/chinese-2.jpeg',
      'gs://wegusta-app.appspot.com/foods/chinese/chinese-3.jpeg'
    ]
  });

  await setDoc(doc(db, 'foodCategories', 'carribean'), {
    displayName: 'carribean',
    containsImages: false
  });

  await setDoc(doc(db, 'foodCategories', 'deli'), {
    displayName: 'deli',
    containsImages: true,
    photos: [
      'gs://wegusta-app.appspot.com/foods/deli/deli-1.jpeg',
      'gs://wegusta-app.appspot.com/foods/deli/deli-1.jpeg',
      'gs://wegusta-app.appspot.com/foods/deli/deli-1.jpeg'
    ]
  });

  await setDoc(doc(db, 'foodCategories', 'fast_food'), {
    displayName: 'fast food',
    containsImages: false
  });

  await setDoc(doc(db, 'foodCategories', 'french'), {
    displayName: 'french',
    containsImages: true,
    photos: ['gs://wegusta-app.appspot.com/foods/french/french-1.jpeg']
  });

  await setDoc(doc(db, 'foodCategories', 'fusion'), {
    displayName: 'fusion',
    containsImages: false
  });

  await setDoc(doc(db, 'foodCategories', 'indian'), {
    displayName: 'indian',
    containsImages: true,
    photos: [
      'gs://wegusta-app.appspot.com/foods/indian/indian-1.jpeg',
      'gs://wegusta-app.appspot.com/foods/indian/indian-2.jpeg',
      'gs://wegusta-app.appspot.com/foods/indian/indian-3.jpeg'
    ]
  });

  await setDoc(doc(db, 'foodCategories', 'italian'), {
    displayName: 'italian',
    containsImages: true,
    photos: [
      'gs://wegusta-app.appspot.com/foods/italian/italian-1.jpeg',
      'gs://wegusta-app.appspot.com/foods/italian/italian-2.jpeg',
      'gs://wegusta-app.appspot.com/foods/italian/italian-3.jpeg'
    ]
  });

  await setDoc(doc(db, 'foodCategories', 'japanese'), {
    displayName: 'japanese',
    containsImages: false
  });

  await setDoc(doc(db, 'foodCategories', 'korean'), {
    displayName: 'korean',
    containsImages: false
  });

  await setDoc(doc(db, 'foodCategories', 'greek'), {
    displayName: 'greek',
    containsImages: false
  });

  await setDoc(doc(db, 'foodCategories', 'mediterranean'), {
    displayName: 'mediterranean',
    containsImages: false
  });

  await setDoc(doc(db, 'foodCategories', 'mexican'), {
    displayName: 'mexican',
    containsImages: true,
    photos: ['gs://wegusta-app.appspot.com/foods/mexican/mexican-1.jpeg']
  });

  await setDoc(doc(db, 'foodCategories', 'middle_eastern'), {
    displayName: 'middle eastern',
    containsImages: false
  });

  await setDoc(doc(db, 'foodCategories', 'pizza'), {
    displayName: 'pizza',
    containsImages: true,
    photos: [
      'gs://wegusta-app.appspot.com/foods/pizza/pizza-1.jpeg',
      'gs://wegusta-app.appspot.com/foods/pizza/pizza-2.jpeg',
      'gs://wegusta-app.appspot.com/foods/pizza/pizza-3.jpeg'
    ]
  });

  await setDoc(doc(db, 'foodCategories', 'seafood'), {
    displayName: 'seafood',
    containsImages: false
  });

  await setDoc(doc(db, 'foodCategories', 'steakhouse'), {
    displayName: 'steakhouse',
    containsImages: true,
    photos: [
      'gs://wegusta-app.appspot.com/foods/steakhouse/steakhouse-1.jpeg',
      'gs://wegusta-app.appspot.com/foods/steakhouse/steakhouse-2.jpeg',
      'gs://wegusta-app.appspot.com/foods/steakhouse/steakhouse-3.jpeg'
    ]
  });

  await setDoc(doc(db, 'foodCategories', 'sushi'), {
    displayName: 'sushi',
    containsImages: true,
    photos: [
      'gs://wegusta-app.appspot.com/foods/sushi/sushi-1.jpeg',
      'gs://wegusta-app.appspot.com/foods/sushi/sushi-2.jpeg',
      'gs://wegusta-app.appspot.com/foods/sushi/sushi-3.jpeg'
    ]
  });

  await setDoc(doc(db, 'foodCategories', 'thai'), {
    displayName: 'thai',
    containsImages: false
  });

  await setDoc(doc(db, 'foodCategories', 'vietnamese'), {
    displayName: 'vietnamese',
    containsImages: false
  });

  await setDoc(doc(db, 'foodCategories', 'wine_bar'), {
    displayName: 'wine bar',
    containsImages: false
  });
};

export default seedFoodCategories;

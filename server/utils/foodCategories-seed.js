const db = require('../db');

db.collection('foodCategories').doc('brewPub').set({
  displayName: 'brew pub',
  photos: []
})

db.collection('foodCategories').doc('barbeque').set({
  displayName: 'barbeque',
  photos: [
    'barbeque-1',
    'barbeque-2',
    'barbeque-3'
  ]
})

db.collection('foodCategories').doc('burgers').set({
  displayName: 'burgers',
  photos: [
    'burgers-1',
    'burgers-2',
    'burgers-3'
  ]
})

db.collection('foodCategories').doc('cafe').set({
  displayName: 'cafe'
})

db.collection('foodCategories').doc('cajun_creole').set({
  displayName: 'Cajun & Creole',
  photos: [
    'cajun_creole-1'
  ]
})

db.collection('foodCategories').doc('chinese').set({
  displayName: 'chinese',
  photos: [
    'chinese-1',
    'chinese-2',
    'chinese-3'
  ]
})

db.collection('foodCategories').doc('carribean').set({
  displayName: 'carribean'
})

db.collection('foodCategories').doc('deli').set({
  displayName: 'deli',
  photos: [
    'deli-1',
    'deli-2',
    'deli-3'
  ]
})

db.collection('foodCategories').doc('fast_food').set({
  displayName: 'fast food'
})


db.collection('foodCategories').doc('french').set({
  displayName: 'french',
  photos: [
    'french-1'
  ]
})

db.collection('foodCategories').doc('fusion').set({
  displayName: 'fusion'
})

db.collection('foodCategories').doc('italian').set({
  displayName: 'italian',
  photos: [
    'italian-1',
    'italian-2',
    'italian-3'
  ]
})

db.collection('foodCategories').doc('indian').set({
  displayName: 'indian',
  photos: [
    'indian-1',
    'indian-2',
    'indian-3'
  ]
})

db.collection('foodCategories').doc('japanese').set({
  displayName: 'japanese'
})

db.collection('foodCategories').doc('korean').set({
  displayName: 'korean'
})

db.collection('foodCategories').doc('greek').set({
  displayName: 'greek'
})

db.collection('foodCategories').doc('mediterranean').set({
  displayName: 'mediterranean'
})

db.collection('foodCategories').doc('mexican').set({
  displayName: 'mexican',
  photos: [
    'mexican-1'
  ]
})

db.collection('foodCategories').doc('middle_eastern').set({
  displayName: 'middle eastern'
})

db.collection('foodCategories').doc('pizza').set({
  displayName: 'pizza',
  photos: [
    'pizza-1',
    'pizza-2',
    'pizza-3'
  ]
})

db.collection('foodCategories').doc('seafood').set({
  displayName: 'seafood'
})

db.collection('foodCategories').doc('steakhouse').set({
  displayName: 'steakhouse',
  photos: [
    'steakhouse-1',
    'steakhouse-2',
    'steakhouse-3'
  ]
})

db.collection('foodCategories').doc('sushi').set({
  displayName: 'sushi',
  photos: [
    'sushi-1',
    'sushi-2',
    'sushi-3'
  ]
})

db.collection('foodCategories').doc('thai').set({
  displayName: 'thai'
})

db.collection('foodCategories').doc('vietnamese').set({
  displayName: 'vietnamese'
})

db.collection('foodCategories').doc('wine_bar').set({
  displayName: 'wine bar'
})
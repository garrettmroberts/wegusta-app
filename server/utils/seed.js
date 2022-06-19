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

db.collection('foodCategories').add('cafe').set({
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

db.collection('foodCategories').add('carribean').set({
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

db.collection('foodCategories').add('fast_food').set({
  displayName: 'fast food'
})


db.collection('foodCategories').doc('french').set({
  displayName: 'french',
  photos: [
    'french-1'
  ]
})

db.collection('foodCategories').add('fusion').set({
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

db.collection('foodCategories').add('japanese').set({
  displayName: 'japanese'
})

db.collection('foodCategories').add('korean').set({
  displayName: 'korean'
})

db.collection('foodCategories').add('greek').set({
  displayName: 'greek'
})

db.collection('foodCategories').add('mediterranean').set({
  displayName: 'mediterranean'
})

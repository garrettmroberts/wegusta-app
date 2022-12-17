const reducer = (state: any, action: any) => {
  switch (action.type) {
    case 'addImages':
      return {
        ...state,
        images: action.payload,
        userPreferences: []
      };
    case 'setNextAction':
      return {
        ...state,
        nextAction: {
          isSet: action.payload.isSet,
          category: action.payload.category,
          isLiked: action.payload.isLiked
        }
      };
    case 'resetNextAction':
      return {
        ...state,
        nextAction: {}
      };
    case 'updateUserPreferences':
      return {
        ...state,
        images: state.images.filter(
          (ele: { category: any }) => ele.category !== action.payload.category
        ),
        userPreferences: [
          ...state.userPreferences,
          {
            category: action.payload.category,
            isLiked: action.payload.isLiked
          }
        ]
      };
    case 'incrementLoadedImageCount':
      return {
        ...state,
        loadedImageCount: state.loadedImageCount += 1
      };
    case 'resetLoadedImageCount':
      return {
        ...state,
        loadedImageCount: 0
      };
    default:
      console.log('STATE: ', state);
      return state;
  }
};

export default reducer;

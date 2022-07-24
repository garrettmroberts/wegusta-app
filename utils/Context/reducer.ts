const reducer = (state: any, action: any) => {
  switch (action.type) {
    case 'addImages':
      return {
        ...state,
        images: action.payload
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
    default:
      console.log('STATE: ', state);
      return state;
  }
};

export default reducer;

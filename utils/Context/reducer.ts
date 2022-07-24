const reducer = (state: any, action: any) => {
  switch (action.type) {
    case 'addImages':
      return {
        ...state,
        images: action.payload
      };
    case 'handleSwipe':
      console.log(state.images);
      return state;
    default:
      console.log('STATE: ', state);
      return state;
  }
};

export default reducer;

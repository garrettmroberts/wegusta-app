const reducer = (state: any, action: any) => {
  switch (action.type) {
    case 'addImages':
      return {
        ...state,
        images: action.payload
      };
    default:
      console.log('STATE: ', state);
      return state;
  }
};

export default reducer;

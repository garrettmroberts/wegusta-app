const reducer = (state: any, action: any) => {
  switch (action.type) {
    default:
      console.log('STATE in reducer: ', state);
      return state;
  }
};

export default reducer;

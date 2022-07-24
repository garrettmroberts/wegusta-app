type InitialStateType = {
  userPreferences: {
    category: string;
    isLiked: boolean;
  }[];
  images: {
    uri: any;
    category: string;
  }[];
};

const initialState: InitialStateType = {
  images: [],
  userPreferences: []
};

export { InitialStateType };
export default initialState;

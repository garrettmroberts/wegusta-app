type InitialStateType = {
  userPreferences: {
    category: string;
    isLiked: boolean;
  }[];
  images: {
    uri: any;
    category: string;
  }[];
  nextAction: {
    isSet?: boolean;
    category?: string;
    isLiked?: boolean;
  };
};

const initialState: InitialStateType = {
  images: [],
  userPreferences: [],
  nextAction: {}
};

export { InitialStateType };
export default initialState;

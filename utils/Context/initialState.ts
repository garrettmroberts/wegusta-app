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
  loadedImageCount: number;
  isOptionsModalVisible: boolean;
};

const initialState: InitialStateType = {
  images: [],
  userPreferences: [],
  nextAction: {},
  loadedImageCount: 0,
  isOptionsModalVisible: false
};

export { InitialStateType };
export default initialState;

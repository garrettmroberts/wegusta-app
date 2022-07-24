type InitialStateType = {
  images: ImageType[];
};

type FormattedImageType = {
  uri: string;
};

type ImageType = {
  uri: any;
  category: string | undefined;
};

const initialState: InitialStateType = {
  images: []
};

export { InitialStateType };
export default initialState;

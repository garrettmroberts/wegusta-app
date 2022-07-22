type InitialStateType = {
  images: ImageType[];
  formattedImages: FormattedImageType[];
};

type FormattedImageType = {
  uri: string;
};

type ImageType = {
  id: string | undefined;
  image: string | undefined;
};

const initialState: InitialStateType = {
  images: [],
  formattedImages: []
};

export { InitialStateType };
export default initialState;

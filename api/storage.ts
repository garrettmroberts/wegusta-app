import { getDownloadURL, getStorage, ref } from 'firebase/storage';
import sampleImageUrlsResponse from './stubs/sampleImageUrlsResponse';

type GetImageUrlsArgType = {
  category: string;
  imageUrl: string;
};

export default {
  getImageUrls: async (imageData: GetImageUrlsArgType[]) => {
    const res: any = [];
    const storage = getStorage();

    await Promise.all(
      imageData.map(async (item: any) => {
        await getDownloadURL(ref(storage, item.imageUrl)).then(uri => {
          res.push({ category: item.category, uri });
        });
      })
    );
    return res;

    // For use in dev.  Comment out above code.
    // return sampleImageUrlsResponse;
  }
};

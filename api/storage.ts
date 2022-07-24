import { getDownloadURL, getStorage, ref } from 'firebase/storage';
import sampleImageUrlsResponse from './stubs/sampleImageUrlsResponse';

export default {
  getImageUrls: async (list: any) => {
    // const res: any = [];
    // const storage = getStorage();

    // await Promise.all(list.map(async (item: any) => {
    //   await getDownloadURL(ref(storage, item)).then(uri => {
    //     res.push({uri})
    //   })
    // }))
    // return res;

    return sampleImageUrlsResponse;
  }
};

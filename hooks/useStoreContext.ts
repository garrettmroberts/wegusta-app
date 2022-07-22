import { useContext } from 'react';

import { StoreContext } from '../utils/Context/Context';

const useStoreContext = () => useContext(StoreContext);

export default useStoreContext;

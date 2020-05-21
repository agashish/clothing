import {shopTypes} from './shop.types';
export const collectionDataForRedux = (collections) => ({
    type: shopTypes.COLLECTION_DATA,
    payload: collections
})
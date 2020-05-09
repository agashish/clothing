import {createSelector } from 'reselect';

const collectionState = state => state.shop;

export const collectionsData = createSelector(
    [collectionState],
    (shop) => shop.collections
)

export const selectCollectionsForPreview = createSelector(
    [collectionsData],
    (collections) => Object.keys(collections).map(
        key => collections[key]
    )
)

// export const selectCollection = shopUrlParam => {
//     return createSelector(
//         [collectionsData],
//         (collections) => collections.find(
//             collection => collection.id === COLLECTION_ID_MAP[shopUrlParam]
//         )
//     )
// }

// export const selectCollection = shopUrlParam =>
//     createSelector(
//         [collectionsData],
//         (collections) => collections.find(
//             collection => collection.id === COLLECTION_ID_MAP[shopUrlParam]
//         )
//     )

export const selectCollection = shopUrlParam =>
    createSelector(
        [collectionsData],
        (collections) => collections[shopUrlParam]
    )
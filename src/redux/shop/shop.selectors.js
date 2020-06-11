import {createSelector } from 'reselect';

const collectionState = state => state.shop;

export const collectionsData = createSelector(
    [collectionState],
    (shop) => shop.collections
)

export const selectCollectionsForPreview = createSelector(
    [collectionsData],
    (collections) => 
    collections ? Object.keys(collections).map(key => collections[key]) : []
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
        (collections) => collections ? collections[shopUrlParam] : null
    )

export const showLoading = createSelector(
    [collectionState],
    (shop) => shop.isFetching
)   

// #### PASS NULL TO COMPONENT
export const isCollectionLoaded = createSelector(
    [collectionState],
    (shop) => !!shop.collections
) 

// #### PASS BOOLEAN TO COMPONENT
// export const isCollectionLoaded = createSelector(
//     [collectionState],
//     (shop) => !!shop.collections
// ) 

export const increment = createSelector(
    [collectionState],
    shop => shop.increment
)
import { createSelector } from 'reselect';

const selectShop = state => state.shop;

//It's an array
export const selectCollections = createSelector(
  [selectShop],
  shop => shop.collections
);

//Convert our object into an array
export const selectCollectionsForPreview = createSelector(
  [selectCollections],
  collections => Object.keys(collections).map(key => collections[key])
);

//collectionUrlParam comes from :collectionId on ShopPage
export const selectCollection = collectionUrlParam =>
  createSelector(
    [selectCollections],
    collections => collections[collectionUrlParam]
  );
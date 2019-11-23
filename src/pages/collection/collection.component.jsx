import React from 'react';
import { connect } from 'react-redux';

import CollectionItem from '../../components/collection-item/collection-item.component';

import { selectCollection } from '../../redux/shop/shop.selector';

import './collection.styles.scss';

const CollectionPage = ({ collection_prop }) => {
  const { title, items } = collection_prop;
  console.log(collection_prop);
  
  return (
    <div className='collection-page'>
      <h2 className='title'>{title}</h2>
      <div className='items'>
        {items.map(item => (
          <CollectionItem key={item.id} item_prop={item} />
        ))}
      </div>
    </div>
  );
};

//The second parameters of mapStateToProps is the props from the CollectionPage component that it gets from its parrnt element
//The state is returning the createSelector function from shop.selector

const mapStateToProps = (state, ownProps) => ({
  collection_prop: selectCollection(ownProps.match.params.collectionId)(state)
});

export default connect(mapStateToProps)(CollectionPage);

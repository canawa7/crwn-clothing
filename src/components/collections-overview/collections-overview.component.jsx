import React from 'react';
import './collections-overview.styles.scss';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import CollectionPreview from '../collection-preview/collection-preview.component';
import { selectCollectionsForPreview } from '../../redux/shop/shop.selector';

const CollectionsOverview = ({collections_prop}) => (
    <div className='collections-overview'>
    {
        collections_prop.map(({ id, ...otherCollectionProps}) => (
            <CollectionPreview key={id} {...otherCollectionProps}/>
        ))
    }
    
    </div>
);

const mapStateToProps = createStructuredSelector( { 
    collections_prop: selectCollectionsForPreview
});
   

export default connect(mapStateToProps)(CollectionsOverview);
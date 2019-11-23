import React from 'react';

// import SHOP_DATA from './shop.data.js';
// import CollectionPreview from '../../components/collection-preview/collection-preview.component';
// import { connect } from 'react-redux';

// import { selectCollections } from '../../redux/shop/shop.selector';
// import { createStructuredSelector } from 'reselect';


import {Route} from 'react-router-dom';
import CollectionsOverview from '../../components/collections-overview/collections-overview.component';

import CollectionPage from '../collection/collection.component';

// class ShopPage extends React.Component{
//     constructor(props){
//         super(props);

//         this.state={
//             collections: SHOP_DATA
//         };
//     }

//     render(){
//         const {collections} = this.state;

//         return(
//             <div className='shop-page'>
//                 {
//                     collections.map(({ id, ...otherCollectionProps}) => (
//                         <CollectionPreview key={id} {...otherCollectionProps}/>
//                     ))
//                 }
//             </div>
//         );
//     }
// }

// const ShopPage = (props) => (
//     <div className='shop-page'>
//         {
//             props.collections_prop.map(({ id, ...otherCollectionProps}) => (
//                 <CollectionPreview key={id} {...otherCollectionProps}/>
//             ))
//         }
//     </div>
// );

// const mapStateToProps = createStructuredSelector( { 
//     collections_prop: selectCollections
// });
   

// export default connect(mapStateToProps)(ShopPage);

// const ShopPage = (props) => (
//     <div className='shop-page'>
//        <CollectionsOverview/>
//     </div>
// );-

const ShopPage = ({ match }) => (
  <div className='shop-page'>
    <Route exact path={`${match.path}`} component={CollectionsOverview} />
    <Route path={`${match.path}/:collectionId`} render={CollectionPage} />
  </div>
);

export default ShopPage;
import React from 'react';
import {Route} from 'react-router-dom';
import {connect} from 'react-redux';

import CategoryPageContainer from './../../components/category/category.container';
// import CollectionOverview from './../../components/collection-overview/collection-overview.component';
import CollectionOverviewContainer from './../../components/collection-overview/collection-overview.container';
import {fetchCollectionStartAsync} from './../../redux/shop/shop.actions';

// const CollectionOverviewWithSpinner = WithSpinner(CollectionOverview);
// const CategoryPageWithSpinner = WithSpinner(CategoryPage);
       

class ShopPage extends React.Component{

    componentDidMount() {
        const {fetchCollectionStartAsync} = this.props;
        fetchCollectionStartAsync(); 
    }   
    
    render() {
        const {match} = this.props;
        return (
            <div className="shop-page">
                {/* <Route exact path={`${match.path}`} render={(props) => 
                    (<CollectionOverviewWithSpinner 
                        isLoading={isFetching} 
                        {...props}/>)} 
                    /> */}

                <Route exact path={`${match.path}`} component={CollectionOverviewContainer} />     
                {/* <Route path={`${match.path}/:categoryId`} render={(props) => 
                    (<CategoryPageWithSpinner 
                        isLoading={!!!isCollectionLoading} 
                        {...props}/>)} 
                    /> */}

                <Route path={`${match.path}/:categoryId`} component={CategoryPageContainer} />    
            </div>
        )
    }    
}
const mapDispatchToProps = dispatch => ({
    fetchCollectionStartAsync: () => dispatch(fetchCollectionStartAsync())
})

export default connect(null, mapDispatchToProps)(ShopPage);
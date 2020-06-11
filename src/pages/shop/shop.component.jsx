import React from 'react';
import {Route} from 'react-router-dom';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {increment} from './../../redux/shop/shop.selectors';

import CategoryPageContainer from './../../components/category/category.container';
// import CollectionOverview from './../../components/collection-overview/collection-overview.component';
import CollectionOverviewContainer from './../../components/collection-overview/collection-overview.container';
// import {fetchCollectionStartAsync} from './../../redux/shop/shop.actions';
import {fetchCollectionStart, setIncrement} from './../../redux/shop/shop.actions';
import CustomButton from '../../components/custom-button/custom-button.component';

// const CollectionOverviewWithSpinner = WithSpinner(CollectionOverview);
// const CategoryPageWithSpinner = WithSpinner(CategoryPage);
       
class ShopPage extends React.Component{

    componentDidMount() {
        const {fetchCollectionStart} = this.props;
        fetchCollectionStart(); 
    }
    
    render() {
        const {match, setIncrement, incrementValue} = this.props;
        return (
            <div className="shop-page">

                {/* <span>{incrementValue}</span>    
                <CustomButton onClick={() => setIncrement()}>Add</CustomButton> */}
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

const mapStateToProps = createStructuredSelector({
    incrementValue: increment
})

const mapDispatchToProps = dispatch => ({
    fetchCollectionStart: () => dispatch(fetchCollectionStart()),
    setIncrement: () => dispatch(setIncrement())
})

export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);
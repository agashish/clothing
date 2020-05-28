import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {compose} from 'redux';
import WithSpinner from './../with-spinner/with-spinner.components';

import {isCollectionLoaded} from './../../redux/shop/shop.selectors';
import CategoryPage from './../category/category.component';

const mapStateToProps = createStructuredSelector({
    isLoading: (state) => !isCollectionLoaded(state)
})

const CategoryPageContainer = compose(
    connect(mapStateToProps),
    WithSpinner
)(CategoryPage);

export default CategoryPageContainer;
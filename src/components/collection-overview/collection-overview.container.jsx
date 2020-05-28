
import {connect} from 'react-redux';
import {compose} from 'redux';
import {createStructuredSelector} from 'reselect';
import WithSpinner from './../with-spinner/with-spinner.components';
import {showLoading} from './../../redux/shop/shop.selectors';
import CollectionOverview from './../collection-overview/collection-overview.component';

const mapStateToProps = createStructuredSelector({
    isLoading: showLoading
})

// const CollectionOverviewContainer = connect(mapStateToProps)(WithSpinner(CollectionOverview));

// ITS WORKLING THROUGH RIGHT - TO - LEFT
const CollectionOverviewContainer = compose(
    connect(mapStateToProps),
    WithSpinner
)(CollectionOverview); 

export default CollectionOverviewContainer;

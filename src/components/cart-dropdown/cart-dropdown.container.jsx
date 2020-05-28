import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect'
import {compose} from 'redux';
import {selectCartHidden} from './../../redux/cart/cart.selectors';
import CartDropdown from './../cart-dropdown/cart-dropdown.component';

const mapStateToProps = createStructuredSelector({
    hidden: selectCartHidden
})

const CartDropdownContainer = compose(
    connect(mapStateToProps)
)(CartDropdown);

export default CartDropdownContainer;
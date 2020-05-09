import React from 'react';
import {connect} from 'react-redux';

import {selectCollection} from './../../redux/shop/shop.selectors';
import './category.styles.scss';

import CollectionItem from './../collection-item/collection-item.component';

const CategoryPage = ({match, category}) => {
    console.log(match.params.categoryId);
    console.log(category);
    const {title, items} = category;
    return (
        <div className="category-page">
            <h2 className="title">{title}</h2>
            <div className="items">
            {
               items.length ?
                    items.map(
                        item => <CollectionItem key={item.id} item={item} />
                    )
                : <span>No Category items found</span>    
            }
            </div>
        </div>
    )
}

const mapStateToProps = (state, ownProps) => ({
    category: selectCollection(ownProps.match.params.categoryId)(state)
})

export default connect(mapStateToProps)(CategoryPage);
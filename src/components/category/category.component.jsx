import React from 'react';
import {connect} from 'react-redux';

import {selectCollection} from './../../redux/shop/shop.selectors';
import './category.styles.scss';

import CollectionItem from './../collection-item/collection-item.component';

const CategoryPage = ({match, category}) => {
    console.log(match.params.categoryId);
    console.log(category);

    const isData = category ? <div>
        <h2 className="title">{category.title}</h2>
            <div className="items">
            {
               category.items.length ?
               category.items.map(
                        item => <CollectionItem key={item.id} item={item} />
                    )
                : <span>No Category items found</span>    
            }
            </div>
    </div>
    : <div>No category found</div>

    //const {title, items} = category;    
    return (
        <div className="category-page">
            {isData}
        </div> 
    )
}

const mapStateToProps = (state, ownProps) => ({
    category: selectCollection(ownProps.match.params.categoryId)(state)
})

export default connect(mapStateToProps)(CategoryPage);
import React from 'react';
import './directory-menu.styles.scss';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {directorySections} from './../../redux/directory/directory.selectors';

import MenuItem from './../menu-item/menu-item.components';

class DirectoryMenu extends React.Component {
  
    render() {
        const sections = this.props.sections;
        return (
            <div className="directory-menu">
                {
                    sections.map(({id, ...otherSectionProps}) => (
                        <MenuItem key={id} {...otherSectionProps} />
                    ))
                }  
            </div>
        )
    }
}

// #### OPTION - 1
// const mapStateTopProps = state => ({
//   sections: directorySections(state)
// })

const mapStateTopProps = createStructuredSelector({
  sections: directorySections
})
export default connect(mapStateTopProps)(DirectoryMenu);
import React from 'react';
import {Link} from 'react-router-dom';
import './homepage.styles.scss';

import DirectoryMenu from './../../components/directory-menu/directory-menu.component';

const Homepage = () => {
    return (
        <div className="homepage">
            <DirectoryMenu />                    
        </div>
    )  
}

export default Homepage;
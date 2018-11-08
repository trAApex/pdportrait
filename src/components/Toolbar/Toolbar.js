import React from 'react';

import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';
import './Toolbar.css';

const toolbar = props => (
    <header className="toolbar">
        <nav className="toolbar__navigation">
            <div className="toolbar__toggle-button">
                <DrawerToggleButton click={props.drawerClickHandler}/>
            </div>
            <div className="toolbar__logo"><a href="/">The logo</a></div>
            <div className="spacer" />
            <div className="toolbar_navigation-items">
                <ul>
                    <li><a href="/">Rólam</a></li>
                    <li><a href="/">Galéria</a>
                        <ul>
                            <li><a href="/">Esküvő</a></li>
                            <li><a href="/">Portré</a></li>
                            <li><a href="/">Család</a></li>
                            <li><a href="/">Stúdió</a></li>
                            <li><a href="/">Jegyes</a></li>
                        </ul>
                    </li>
                    <li><a href="/">Kapcsolat</a></li>
                    <li><a href="/">Blog</a></li>
                </ul>
            </div>
        </nav>
    </header>
);

export default toolbar;
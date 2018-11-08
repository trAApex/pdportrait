import React from 'react';

import './SideDrawer.css';

const sideDrawer = props => {
    let drawerClasses = 'side-drawer';
    if (props.show) {
        drawerClasses = 'side-drawer open';
    }

    return (
        <nav className={drawerClasses}>
            <ul>
                <li>
                    <a href="/">Rólam</a>
                </li>
                <li>
                    <a href="/">Galéria</a>
                </li>
                <li>
                    <a href="/">Kapcsolat</a>
                </li>
                <li>
                    <a href="/">Blog</a>
                </li>
            </ul>
        </nav>
    );
};

export default sideDrawer;
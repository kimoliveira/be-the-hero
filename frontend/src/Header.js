import React from 'react';

export default function Header({ children }){
    return (
        <header>
            <h1>{children}</h1>
        </header>
    );
}

/**
 * or export default Header; 
 */

 /**
 * Prop podem ser resgatagas tambem da seguinte forma  Header(prop) prop.title 
 */
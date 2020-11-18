import React, {useState, useEffect} from 'react';

function NavBarItem(props) {

    console.log(props);
    return (
        <>

            <li style={{display: 'inline', padding:'10px'}}>{props.item}</li>

        </>
    );
}

export default NavBarItem;

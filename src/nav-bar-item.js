import React, {useState, useEffect} from 'react';

function NavBarItem(props) {

    console.log(props);
    return (
        <>

            <li className={'border border-teal-500 text-white pl-2 pr-2 bg-teal-600 rounded'} style={{display: 'inline', padding:'5px'}}>{props.item}</li>

        </>
    );
}

export default NavBarItem;



//'border border-teal-500 text-white pl-2 pr-2 bg-teal-600 rounded'
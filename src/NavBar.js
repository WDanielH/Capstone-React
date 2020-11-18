import React, {useState, useEffect} from 'react';
import NavBarItem from "./nav-bar-item";

function NavBar(props) {

    console.log(props);

    const sendInfoBacktoParent =  () => {
        props.aFunctionProp('Jane');
    };

    const navBarItems = ['Home', 'About', 'Docs', 'Contact'];

    return (
        <>

            {/*{navBarItems.map((oneItem) => {*/}
            {/*    return <NavBarItem key={oneItem} item={oneItem} />*/}
            {/*})}*/}




            <ul style={{listStyle: 'none'}}>
                {navBarItems.map((oneItem) => {
                    return <NavBarItem key={oneItem} item={oneItem} />
                })}

                {/*<li style={{display: 'inline', padding:'10px'}}>Home</li>*/}
                {/*<li style={{display: 'inline', padding:'10px'}}>About</li>*/}
                {/*<li style={{display: 'inline', padding:'10px'}}>Docs</li>*/}
                {/*<li style={{display: 'inline', padding:'10px'}}>Contact</li>*/}
            </ul>


            <h1 onClick={sendInfoBacktoParent}>This is the nav bar component!</h1>

            {props.firstName} {props.lastName}


        </>
    );
}

export default NavBar


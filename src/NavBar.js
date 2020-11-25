import React, {useState, useEffect} from 'react';
import NavBarItem from "./nav-bar-item";

function NavBar(props) {

    console.log(props);

    const sendInfoBacktoParent =  () => {
        props.aFunctionProp('Jane');
    };

    const navBarItems = ['Home', 'Portfolio', 'Charts', 'Document','Logout'];

    return (
        <>

                <ul style={{listStyle: 'none'}}>
                {navBarItems.map((oneItem) => {
                    return <NavBarItem key={oneItem} item={oneItem} />
                })}

               
            </ul>


            {/*<h1 onClick={sendInfoBacktoParent}>This is the nav bar component!</h1>*/}

            {props.firstName} {props.lastName}


        </>
    );
}

export default NavBar


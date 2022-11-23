import React from "react";

function Nav(props) {
    return(
        <div>
            <navbar className="navbar">
                <ul>
                    <li>{props.kind}</li>
                    <li>{props.honest}</li>
                    <li>{props.pure}</li>
                </ul>  
             </navbar>        
        </div>
    )
};

export default Nav;
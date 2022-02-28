//import React from 'react'; not needed here
import "./Navbar.css"
import NavButton from "./NavButton"

export default function Navbar() {
    return(
        <nav>
            <p>React component and Props</p>
            <NavButton />

            <NavButton message={"Click me for greens"} color={"green"}/>

            <NavButton message={"Click me for pinks"} color={"pink"} 
            linkTo={"www.css-tricks.com"}/>
        </nav>
    )
}

//export default Navbar or export directly in the function
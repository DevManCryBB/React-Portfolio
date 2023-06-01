import React from "react";
import { Link } from "react-router-dom"

function NavBar (){
    return (
<nav> 
<Link 
    to='/About'
> 
<div>
    About
</div>
</Link>

<Link 
    to='/Portfolio'
> 
<div>
    Portfolio
</div>
</Link>

<Link 
    to='/Resume'
> 
<div>
    Resume
</div>
</Link>

<Link 
    to='/Contact'
> 
<div>
    Contact
</div>
</Link>

</nav>
    )
}

export default NavBar;
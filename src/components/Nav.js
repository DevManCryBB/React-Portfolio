import { Link } from 'react-router-dom'

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


<div>
    Portfolio
</div>
<div>
    Resume
</div>
<div>
    Contact
</div>
</nav>
    )
}

export default NavBar;
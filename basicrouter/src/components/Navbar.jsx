import React from 'react'
import {Link} from 'react-router-dom'
function Navbar() {
  return (
  <>
  <nav>
<Link to={'/'}><li>Home</li></Link>
<Link to={'/about'}><li>About</li></Link>
<Link to={'/user'}><li>User</li></Link>
</nav>
  </>
  )
}

export default Navbar
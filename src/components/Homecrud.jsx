import React from 'react'
import { Link } from 'react-router-dom'
import abc from "./home.module.css"

const Homecrud = () => {
  return (
   <section id={abc.nav}>
    <div>
      <table>
        <tr>
          <td className='td'><Link to='/createusers'>Create-users</Link></td>
          <td className='td'><Link to='/users'>Users</Link></td>
        </tr>
      </table>
    
     
    </div>
    
   </section>
  )
}

export default Homecrud
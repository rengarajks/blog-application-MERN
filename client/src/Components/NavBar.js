import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import PinterestIcon from '@mui/icons-material/Pinterest';
import EmailIcon from '@mui/icons-material/Email';
import { Avatar } from '@mui/material';
import {Link} from 'react-router-dom'

function NavBar() {
  return (
    <div class='fixed flex justify-between items-center p-2 w-full bg-white/60 '>

        <div className=''>
          <FacebookIcon/>
          <PinterestIcon/>
          <EmailIcon/></div>

        <div className='flex w-1/4 justify-between font-bold'>

          <div>
            <span>Home</span>
          </div>

          <div>
            <span>About</span>
          </div>


          <div>
            <span>Contact</span>
          </div>

          <div>
            <span>Write</span>
          </div>

          <div>
            <Link to={'/login'}><span>Logout</span></Link>
          </div>
        </div>

        <div>
          <Avatar/>
        </div>


    </div>
  )
}

export default NavBar
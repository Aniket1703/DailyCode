import React from 'react'
import {Drawer,styled} from '@mui/material'
import SidebarContent from './SidebarContent'

const Sidebar = ({openDrawer}) => {
  return (
<Drawer
anchor='left'
open={openDrawer}
hideBackdrop={true}
ModelProps={{
  keepMounted: true
}}
varient="persistent"
sx={{
  '& .MuiDrawer-paper':{
    marginTop: '64px',
    width: 250,
    backgroundColor: '#F5F5F5',
    borderRight: 'none',
    boxShadow: 'none',
    height: 'calc(100vh - 64px)'
  }
}}
>
<SidebarContent/>
</Drawer> 
 )
}

export default Sidebar
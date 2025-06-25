import React from 'react'
import { Box, Button, List, ListItem } from '@mui/material'
import CreateIcon from '@mui/icons-material/Create';
import styled from '@emotion/styled';
import { SIDEBAR_DATA } from '../config/Sidebar.config'

const ComposeButton = styled(Button)({
  background: '#c2e7ff',
  color: '#001d35',
  padding: 16,
  borderRadius: 16,
  minWidth: 130,
  textTransform: 'none'
})

const Container=styled(Box)({
  padding:0,
  '& > ul':{
    padding: '10px 0 0 5px',
    fontSize: 14,
    fontWeight:500,
    cursor: 'pointer'
  },
  '& > ul > li > svg':{
    marginRight:20
  }
})

const SidebarContent = () => {
  return (
    <Container>
      <ComposeButton>
        <CreateIcon style={{ paddingRight: 10 }} />Compose
      </ComposeButton>
      <List>
        {
          SIDEBAR_DATA.map(item => (
            <ListItem>
              <item.icon fontSize='small' />{item.title}
            </ListItem>
          ))
        }
      </List>
    </Container>
  )
}

export default SidebarContent
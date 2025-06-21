import React from 'react'
import { AppBar, Toolbar, styled ,InputBase,Box} from '@mui/material';
import { Menu as MenuIcone, Search, Tune,HelpOutline ,AppsOutlined,AccountCircleOutlined} from '@mui/icons-material';
import { GmailLogo } from '../Constants/constant';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';



const StyledAppBar = styled(AppBar)({
    background: '#f5f5f5',
    boxShadow: 'none'
})

const SearchWrapper=styled(Box)({
    background:'#EAF1FB',
    marginLeft:80,
    borderRadius:8,
    minWidth:690,
    maxWidth:720,
    height:48,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding:'0 20px',
    '& > div':{
        width: '100%',
        padding: '0 10px'
    }

})

const OptionsWrapper= styled(Box)({
    width:'100%',
    display: 'flex',
    justifyContent:'end',
    '& > svg':{
        marginLeft:'20'
    }
})

const Header = ({toggleDrawer}) => {
    return (
        <div>
            <StyledAppBar position='static'>
                <Toolbar>
                    <MenuIcone color='action' onPress={toggleDrawer} />
                    <img src={GmailLogo} alt="logo" style={{ width: 110, marginLeft: 15 }} />

                    <SearchWrapper>
                        <Search color='action'/>
                        <InputBase placeholder='Search Mail'/>
                        <Tune color='action' />
                    </SearchWrapper>
                
                <OptionsWrapper>
                <HelpOutline color='action' style={{ marginLeft: 20 }}/>
                <SettingsOutlinedIcon color='action' style={{ marginLeft: 20 }}/>
                <AppsOutlined color='action' style={{ marginLeft: 20 }}/>
                <AccountCircleOutlined color='action' style={{ marginLeft: 20 }}/>
            </OptionsWrapper>
            </Toolbar>
            </StyledAppBar>
          
        </div>
    )
}

export default Header
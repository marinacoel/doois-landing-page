import GitHubIcon from '@mui/icons-material/GitHub'
import AppBar from '@mui/material/AppBar'
import IconButton from '@mui/material/IconButton'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import logo from 'assets/header/logo.PNG'
import { headerStyles } from './Header.styles'


export const Header = () => {
    const classes = headerStyles()

    return (
        <AppBar position="static" >
            <Toolbar>
            <div className={classes.lp_header}>
                <div>
                    <img src={logo}/>
                </div>

                <Typography variant="body1" sx={{ flexGrow: 1 }}>
                    Home
                </Typography>
                <Typography variant="body1" sx={{ flexGrow: 1 }}>
                    Features
                </Typography>
                <Typography variant="body1" sx={{ flexGrow: 1 }}>
                    Pricing
                </Typography>
                <Typography variant="body1" sx={{ flexGrow: 1 }}>
                    Blog
                </Typography>
                <Typography variant="body1" sx={{ flexGrow: 1 }}>
                    Pages
                </Typography>
            

                <IconButton
                    size="large"
                    edge="end"
                    onClick={() => window.open('https://github.com/tanabee/cra-template-mui', '_blank')}
                >
                    <GitHubIcon />
                </IconButton>

            </div>
            
            </Toolbar>
        </AppBar>
    )
}
import { cloneElement } from 'react'
import { Button, useScrollTrigger } from '@mui/material'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import logo from 'assets/header/logo.PNG'

import { desktopNavbarStyles } from './desktopNavbar.styles'

function ElevationScroll(props) {
  const { children, window } = props
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  })

  return cloneElement(children, {
    elevation: trigger ? 3 : 0,
  })
}

export const DesktopNabvar = props => {
  const classes = desktopNavbarStyles()

  const scrollToSection = elementId => {
    const elementToScrollTo = document.getElementById(elementId)
    elementToScrollTo.scrollIntoView({
      behavior: 'smooth',
    })
  }

  return (
    <ElevationScroll {...props}>
      <AppBar elevation={0} position="fixed">
        <Toolbar>
          <div className={classes.desktop_navbar}>
            <img className={classes.dn_img} src={logo} onClick={() => scrollToSection('home')} />
            <nav className={classes.dn_menu}>
              <Typography
                variant="body1"
                className={classes.dn_txt}
                onClick={() => scrollToSection('home')}
                sx={{ flexGrow: 1 }}
              >
                Home
              </Typography>
              <Typography
                variant="body1"
                className={classes.dn_txt}
                onClick={() => scrollToSection('how')}
                sx={{ flexGrow: 1 }}
              >
                How to use
              </Typography>
              <Typography
                variant="body1"
                className={classes.dn_txt}
                onClick={() => scrollToSection('about')}
                sx={{ flexGrow: 1 }}
              >
                About us
              </Typography>
              <Typography
                variant="body1"
                className={classes.dn_txt}
                onClick={() => scrollToSection('services')}
                sx={{ flexGrow: 1 }}
              >
                Services
              </Typography>
              <Typography
                variant="body1"
                className={classes.dn_txt}
                onClick={() => scrollToSection('contact')}
                sx={{ flexGrow: 1 }}
              >
                Contact
              </Typography>
            </nav>
            <Button variant="contained" color="success" className={classes.dn_btn}>
              Login
            </Button>
          </div>
        </Toolbar>
      </AppBar>
    </ElevationScroll>
  )
}
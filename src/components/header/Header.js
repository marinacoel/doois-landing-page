import { MobileNavbar } from './mobile-navbar/MobileNavbar'
import { cloneElement } from 'react'
import { Button, useScrollTrigger } from '@mui/material'
import { DesktopNabvar } from './desktop-navbar/DesktopNavbar'

import { useTheme, useMediaQuery, AppBar } from '@mui/material'

import { headerStyles } from './header.styles'

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

export const Header = props => {
  const classes = headerStyles()
  const theme = useTheme()
  const mobileViewport = useMediaQuery(theme.breakpoints.down('md'))	

  return (
    <ElevationScroll {...props}>
      <AppBar elevation={0} position="fixed" className={classes.header}>
        {mobileViewport ? <MobileNavbar /> : <DesktopNabvar />}
      </AppBar>
    </ElevationScroll>
  )
}

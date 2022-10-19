import { Drawer, IconButton, Typography } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'
import MenuIcon from '@mui/icons-material/Menu'
import { Button } from '@mui/material'

import clsx from 'clsx'

import { useState } from 'react'

import { mobileNavbarStyles } from './mobileNavbar.styles'

export const MobileNavbar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)
  const classes = mobileNavbarStyles()

  const scrollToSection = elementId => {
    const elementToScrollTo = document.getElementById(elementId)
    elementToScrollTo.scrollIntoView({
      behavior: 'smooth',
    })
  }

  const handleClick = sectionName => {
    scrollToSection(sectionName)
    setIsDrawerOpen(false)
  }

  return (
    <>
      <div className={classes.mobile_navbar}>
        <IconButton className={classes.mn_menu_button} onClick={() => setIsDrawerOpen(true)}>
          <MenuIcon />
        </IconButton>
      </div>
      <Drawer anchor="left" open={isDrawerOpen} onClose={() => setIsDrawerOpen(false)}>
        <div className={classes.mn_menu}>
          <IconButton
            className={clsx(classes.mn_menu_button, classes.mn_close_button)}
            onClick={() => setIsDrawerOpen(false)}
          >
            <CloseIcon />
          </IconButton>
          <div className={classes.mn_txt_wrapper}>
            <Typography
              variant="body1"
              color="primary.white"
              className={classes.mn_txt}
              onClick={() => handleClick('home')}
            >
              Home
            </Typography>
            <Typography
              variant="body1"
              color="primary.white"
              className={classes.mn_txt}
              onClick={() => handleClick('how')}
            >
              How to use
            </Typography>
            <Typography
              variant="body1"
              color="primary.white"
              className={classes.mn_txt}
              onClick={() => handleClick('about')}
            >
              About us
            </Typography>
            <Typography
              variant="body1"
              color="primary.white"
              className={classes.mn_txt}
              onClick={() => handleClick('services')}
            >
              Services
            </Typography>
            <Typography
              variant="body1"
              color="primary.white"
              className={classes.mn_txt}
              onClick={() => handleClick('contact')}
            >
              Contact
            </Typography>
            <Button variant="contained" color="success" className={classes.mn_login_button}>
              Login
            </Button>
          </div>
        </div>
      </Drawer>
    </>
  )
}

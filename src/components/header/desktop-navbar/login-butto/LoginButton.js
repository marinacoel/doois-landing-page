import { Drawer, IconButton, Input, Typography } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'
import MenuIcon from '@mui/icons-material/Menu'
import { Button } from '@mui/material'

import clsx from 'clsx'

import { useState } from 'react'

import { loginButtonStyles } from './loginButton.styles'
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'

export const LoginButton = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)
  const classes = loginButtonStyles()

  return (
    <>
      <div className={classes.login_button}>
        <Button variant="contained" color="success" className={classes.lb_button} onClick={() => setIsDrawerOpen(true)}>
          Login
        </Button>
      </div>
      <Drawer anchor="right" open={isDrawerOpen} onClose={() => setIsDrawerOpen(false)}>
        <div className={classes.lb_menu}>
          <IconButton
            className={clsx(classes.mn_menu_button, classes.lb_close_button)}
            onClick={() => setIsDrawerOpen(false)}
          >
            <CloseIcon />
          </IconButton>
          <div className={classes.lb_txt_wrapper}>
            <Typography
              variant="h3"
              color="primary.white"
              className={classes.lb_title}
            >
              Sign up or login
            </Typography>
            <div className={classes.lb_form}>
              <Typography
                variant="body1"
                color="primary.white"
                className={classes.lb_txt}
              >
                Please enter your phone number, you will receive 4 digit code via SMS to verify.
              </Typography>
              <PhoneInput
                id="phone_number"
                type="tel"
                country={'US'}
                preferredCountries={['US']}
                placeholder="+44 5412 123456"/>
            </div>
            <Button variant="contained" color="success" className={classes.lb_login_button}>
              Login
            </Button>
          </div>
        </div>
      </Drawer>
    </>
  )
}
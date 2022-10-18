// import { DesktopNabvar } from './desktop-navbar/DesktopNavbar'
import { MobileNavbar } from './mobile-navbar/MobileNavbar'
import { DesktopNabvar } from './desktop-navbar/DesktopNavbar'

import { headerStyles } from './header.styles'
import { useTheme, useMediaQuery } from '@mui/material';

export const Header = () => {
  const classes = headerStyles()
	const theme = useTheme()
	const mobileViewport = useMediaQuery(theme.breakpoints.down('md'));

  return (
		<div className={classes.header}>
			{mobileViewport ? <MobileNavbar /> : <DesktopNabvar />}
		</div>
  )
}

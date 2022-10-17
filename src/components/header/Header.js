import { headerStyles } from './header.styles'
import { DesktopNabvar } from './desktop-navbar/DesktopNavbar'


export const Header = () => {
  const classes = headerStyles()
  // const theme = useTheme()
  // const mobileViewport = useMediaQuery(theme.breakpoints.up('md'))

  return (
		<div className={classes.header}>
			<DesktopNabvar />
		</div>

  )
}

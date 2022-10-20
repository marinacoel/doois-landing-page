import { makeStyles } from '@mui/styles'

export const desktopNavbarStyles = makeStyles((theme) => ({
    desktop_navbar: {
      boxSizing: 'border-box',
  
      width: '100%',
      height: '4.5rem',

      backgroundColor: theme.palette.primary.main,
  
      display: 'flex',
      flexDirection:'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '24px',
    },
    dn_img: {
      width: '160px',
      height: '45px',
      cursor: 'pointer',
    },
    dn_menu: {
      display: 'flex',
      gap: '40px',
    },
    dn_txt: {
      position: 'relative',
      cursor: 'pointer',
      padding: '0 10px',

      "&:after": {
        content: '""',
        position: "absolute",
        backgroundColor: theme.palette.success.main,
        width: "0",
        height: "2px",
        left: 0,
        bottom: -5,
        transition: "0.3s",
        transform: "scaleX(0)",
        transformOrigin: "center bottom 50%",
      },
      "&:hover:after": {
        width: '100%',
        transform: "scaleX(1)",
        transformOrigin: "center bottom 50%",
      },

    },
    dn_btn: {
      width: '168px',
      height: '38px'
    },

  }))
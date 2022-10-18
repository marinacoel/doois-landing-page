import { makeStyles } from '@mui/styles';
import { height } from '@mui/system';

export const mobileNavbarStyles = makeStyles((theme) => ({
    mobile_navbar: {
      boxSizing: 'border-box',
    
      width: '100vw',

      padding: '0',

      display: 'flex',
      flexDirection: 'column',

    },
    mn_menu_button: {
      width: '3.5rem',
      height: '3.5rem',
    },
    mn_close_button: {
      position: 'absolute !important',
      inset: '0 0 auto auto !important'
    },
    mn_menu: {  
      width: '300px',
      height: '100%',
      boxSizing: 'border-box',
      padding: '1rem',

      background: theme.palette.primary.main,

      position: 'relative'
    },
    mn_txt_wrapper: {
      display: 'flex',
      flexDirection: 'column',

      width: '100%',
      height: '100%',
    },
    mn_txt: {
      cursor: 'pointer',
      marginBottom: '.5rem !important'
    },
    mn_login_button: {
      width: '100%',
      height: '38px',
      marginTop: 'auto !important',
    }

}))
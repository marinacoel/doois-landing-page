import { makeStyles } from '@mui/styles'

export const sectionStyles = makeStyles((theme) => ({
    section: {
      width: '100%',
      height: '100vh',

      backgroundColor: theme.palette.primary.main,
  
      display: 'flex',
      flexDirection:'row',
      alignItems: 'center',
      justifyContent: 'space-evenly',

    },
    s_row: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    s_video: {
      width: '60%',
      height: '60%',
    },
    s_btn: {
      width: '284px',
      height: '55px',
    },
    s_img: {
      width: '400px',
      height: '400px',
      marginRight: '150px'
    },
    s_two:{
      height: '100vh',

      display: 'flex',
      flexDirection:'column',
      alignItems: 'center',
      justifyContent: 'space-evenly',
    },
    txt_row: {
      width: '200px'
    },
    s_two_row: {
      display: 'flex',
      flexDirection:'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: '100px',
    },
    s_three: {
      height: '100vh',

      display: 'flex',
      flexDirection:'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap:'100px',

    },
    s_three_txt: {
      width: '80%'
    },
    s_four: {
      height: '100vh',

      display: 'flex',
      flexDirection:'row',
      alignItems: 'center',
      justifyContent: 'space-evenly',

    },
    s_four_row: {
      display: 'flex',
      flexDirection: 'column',
      gap: '50px',
      marginLeft: '150px',
      marginRight: '100px'
    },
    s_five: {
      width: '100%',
      height: '50vh',

      backgroundColor: theme.palette.primary.main,
  
      display: 'flex',
      flexDirection:'row',
      alignItems: 'center',
      justifyContent: 'space-around'
    },
    s_five_row: {
      display: 'flex',
      flexDirection: 'column',
      marginLeft: '100px',
      marginRight: '100px',
      gap:'10px'
    },
    s_five_icon: {
      display: 'flex',
      flexDirection: 'row',
      gap: '10px',
    },
    s_five_icon_row: {
      cursor:'pointer'
    },
    s_five_txt_row: {
      cursor: 'pointer'
    }



  }))
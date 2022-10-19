import { makeStyles } from '@mui/styles'

export const sectionStyles = makeStyles((theme) => ({ 
    section:{
      width: '100%',
      overflow: 'hidden',
    },
    s_one: {
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

      [theme.breakpoints.down('sm')]:{
        width: '80%',
        height: '80%',
      }

    },
    s_btn: {
      width: '284px',
      height: '55px',
    },
    s_img: {
      width: '400px',
      height: '400px',
      marginRight: '150px',

      [theme.breakpoints.down('md')]:{
        display: 'none'
      }
    },
    s_two:{
      height: '100vh',

      display: 'flex',
      flexDirection:'column',
      alignItems: 'center',
      justifyContent: 'space-evenly',

    },
    txt_row: {
      width: '200px',
      [theme.breakpoints.down('md')]:{
        width: '70%'
      },
    },
    s_two_row: {
      display: 'flex',
      flexDirection:'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: '100px',

      [theme.breakpoints.down('md')]:{
        display: 'flex',
        flexDirection:'column',
        gap:'50px',
      }
    },
    s_three: {
      height: '100vh',

      display: 'flex',
      flexDirection:'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap:'100px',
    },
    s_three_title: {
      textAlign: 'center',
    },
    s_three_txt: {
      width: '80%',

    },
    s_four: {
      height: '100vh',

      display: 'flex',
      flexDirection:'row',
      alignItems: 'center',
      justifyContent: 'space-between',

    },
    s_four_row: {
      display: 'flex',
      flexDirection: 'column',
      gap: '50px',
      marginLeft: '150px',
      marginRight: '100px',

      [theme.breakpoints.down('md')]:{
        display:'flex',
        alignItems: 'center',
        marginLeft: '50px',
        marginRight: '50px',
        width: '100%',
      },

    },
    s_four_title:{
      [theme.breakpoints.down('md')]:{
        textAlign:'center',
      },
    },
    s_five: {
      height: '50vh',

      backgroundColor: theme.palette.primary.main,
  
      display: 'flex',
      flexDirection:'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      margin: 'auto',
      padding: '70px',
    },
    s_five_row:{
      display: 'flex',
      flexDirection: 'column',

      gap:'10px',
      width:'40%',
      [theme.breakpoints.down('md')]:{
        widht: '100%'
      },
    },
    s_five_column: {
      display: 'flex',
      flexDirection: 'row',
      marginLeft: '100px',
      marginRight: '100px',
      gap:'50px',

      [theme.breakpoints.down('md')]:{
        marginLeft: '0px',
        marginRight: '0px',
      },
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
      cursor: 'pointer',
    }



  }))
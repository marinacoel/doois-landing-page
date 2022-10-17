import { pink, grey } from '@mui/material/colors'
import { createTheme } from '@mui/material/styles'

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 1024,
      lg: 1440,
      xl: 1920,
    },
  },
    palette: {
      primary: {
        main: '#ff5203',
        hover: '#540303',
        white: "#ffffff",
      },
      success: {
        main: '#EA9674',
      },
      secondary: pink,
      text: {
        primary: grey[900],
        secondary: grey[700],
      },
      background: {
        main: '#eee',
        paper: '#fff',
      },
      divider: grey[300],
    },
    spacing: 8,
    typography: {
      fontFamily: [
        '"Hiragino Sans"',
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        'Helvetica',
        'Arial',
        'sans-serif',
      ].join(','),
    },
    components: {
      MuiButton: {
        defaultProps: {
          disableElevation: true,
        },
        styleOverrides: {
          root: {
            borderRadius: '10px',
            color: 'white',
            "&:hover": {
              backgroundColor: '#540303',
            }
          }
        },
      },
      MuiTextField: {
        defaultProps: {
          variant: 'filled',
        },
      },
    },
  })

  export default theme
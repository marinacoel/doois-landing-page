import { blue, pink, grey } from '@mui/material/colors'
import { createTheme } from '@mui/material/styles'

const theme = createTheme({
    palette: {
      primary: blue,
      secondary: pink,
      text: {
        primary: grey[900],
        secondary: grey[700],
      },
      background: {
        default: '#eee',
        paper: '#000',
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
        styleOverrides: {},
      },
      MuiTextField: {
        defaultProps: {
          variant: 'filled',
        },
      },
    },
  })

  export default theme
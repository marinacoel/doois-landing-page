import AddIcon from '@mui/icons-material/Add'
import Box from '@mui/material/Box'
import Fab from '@mui/material/Fab'
import Typography from '@mui/material/Typography'
import { Header } from '../header/Header'
import { Section } from '../section/Section'

export const Layout = () => {
  return (
    <>
      <Header />

      <Section />

      <Fab
        color="secondary"
        sx={{
          position: 'fixed',
          right: ({ spacing }) => spacing(3),
          bottom: ({ spacing }) => spacing(3),
        }}
      >
        <AddIcon />
      </Fab>
    </>
  )
}

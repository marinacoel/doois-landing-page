import AddIcon from '@mui/icons-material/Add'
import Box from '@mui/material/Box'
import Fab from '@mui/material/Fab'
import Typography from '@mui/material/Typography'
import { Header } from '../header/Header'

export const Layout = () => {
    return (
        <>
        <Box sx={{ flexGrow: 1 }}>
            <Header />

        </Box>
        <Box sx={{ p: 3 }}>
            <Typography variant="h1">h1. Heading</Typography>
            <Typography variant="h2">h2. Heading</Typography>
            <Typography variant="h3">h3. Heading</Typography>
            <Typography variant="h4">h4. Heading</Typography>
            <Typography variant="h5">h5. Heading</Typography>
            <Typography variant="h6">h6. Heading</Typography>
            <Typography variant="body1">body1. text</Typography>
            <Typography variant="body2">body2. text</Typography>
        </Box>
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
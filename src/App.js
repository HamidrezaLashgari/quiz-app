import { Container, Typography } from '@mui/material'
import { Box } from '@mui/system'
import {
  BrowserRouter as RouterProvider,
  Route,
  Routes,
} from 'react-router-dom'
import FinalScreen from './pages/FinalScreen'
import Questions from './pages/Questions'
import Settings from './pages/Settings'

function App() {
  return (
    <RouterProvider>
      <Container maxWidth="sm">
        <Box textAlign="center" mt={5}>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Typography variant="h2" fontWeight="bold">
                    Quiz App
                  </Typography>
                  <Settings />
                </>
              }
            />
            <Route path="/questions" element={<Questions />} />
            <Route path="/score" element={<FinalScreen />} />
          </Routes>
        </Box>
      </Container>
    </RouterProvider>
  )
}

export default App

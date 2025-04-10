import './App.css'
import './theme/custom.css';
import { RouterProvider } from 'react-router-dom'
import router from './Router'
import { CssBaseline, CssVarsProvider } from "@mui/joy";
import { metonTheme } from './theme/theme';
function App() {

  return (
    <CssVarsProvider theme={metonTheme} defaultMode='light'>
      <CssBaseline />
    <RouterProvider router = {router} />
    </CssVarsProvider>
  )
}

export default App

import CssBaseline from '@mui/material/CssBaseline'
import ToDoList from './ToDoList.jsx'
import ErrorBoundary from './ErrorBoundary.jsx'
function App() {

  return (
    <>
      <CssBaseline />
      <ErrorBoundary>
        <ToDoList />
      </ErrorBoundary>
    </>
  )
}

export default App

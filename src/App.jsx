import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import './App.css'
import Header from './components/Header';
import ProductTable from './components/ProductTable';
import { ShowModalContextProvider } from './context/ShowModalContext';
import { ToastContainer } from 'react-toastify';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import InfoIcon from '@mui/icons-material/Info';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import { Toast } from './constants';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const queryClient = new QueryClient();

  return (
    <>   
      <QueryClientProvider client={queryClient}>
        <ShowModalContextProvider>
          <ReactQueryDevtools initialIsOpen={false} position="bottom" />
          <Header/>
          <ProductTable/>
          <ToastContainer
            position="top-right"
            autoClose={4000}
            hideProgressBar
            closeOnClick
            newestOnTop={false}
            rtl={false}
            pauseOnHover
            icon={({ type }) => {
              if (type === Toast.Success) return <TaskAltIcon color="success" />;
              if (type === Toast.Warn) return <InfoIcon  sx={{ color: '#fcca2c' }} />;
              return <HighlightOffIcon sx={{ color: '#d22e22' }} />;
            }}
          />
        </ShowModalContextProvider>
      </QueryClientProvider>   
    </>
  )
}

export default App

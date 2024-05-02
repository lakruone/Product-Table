import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import './App.css'
import Header from './components/Header';
import ProductTable from './components/ProductTable';
import { ShowProductModalContextProvider } from './context/ShowProductModalContext';
import { ToastContainer } from 'react-toastify';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import InfoIcon from '@mui/icons-material/Info';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import styled from 'styled-components';
import { Toast } from './constants';

const StyledToastContainer = styled(ToastContainer)`
  &&&.Toastify__toast-container {
  }
  .Toastify__toast {
    padding: 16px;
    min-height: unset;
  }
  .Toastify__toast-body {
    padding: 0;
    margin: 0;
    font-size: 14px;
    font-weight: 400;
    color: #09090b;
  }
  .Toastify__progress-bar {
  }
`;

function App() {
  const queryClient = new QueryClient();


  return (
    <>   
      <QueryClientProvider client={queryClient}>
        <ShowProductModalContextProvider>
          <ReactQueryDevtools initialIsOpen={false} position="bottom" />
          <Header/>
          <ProductTable/>
          <StyledToastContainer
            position="top-right"
            autoClose={3000}
            hideProgressBar
            closeOnClick
            newestOnTop={false}
            rtl={false}
            pauseOnHover
            icon={({ type }) => {
              if (type === Toast.Success) return <TaskAltIcon color="#16905d" />;
              if (type === Toast.Warn) return <InfoIcon color="#fcca2c" />;
              return <HighlightOffIcon color="#d22e22" />;
            }}
          />
        </ShowProductModalContextProvider>
      </QueryClientProvider>   
    </>
  )
}

export default App

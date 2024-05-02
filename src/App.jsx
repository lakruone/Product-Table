import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import './App.css'
import Header from './components/Header';
import ProductTable from './components/ProductTable';

function App() {
  const queryClient = new QueryClient();


  return (
    <>   
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false} position="bottom" />
        <Header/>
        <ProductTable/>
      </QueryClientProvider>   
    </>
  )
}

export default App

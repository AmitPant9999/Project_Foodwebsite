import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // ✅ Fixed import
import Homepage from "./Pages/Homepage";
import ProductDetail from "./Pages/ProductDetails";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Header from "./components/Header";


function App() {
  const queryClient = new QueryClient();

  return (
    
      <QueryClientProvider client={queryClient}>
        <Router>
          
          
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/product/:id" element={<ProductDetail />} />
          </Routes>
        </Router>
      </QueryClientProvider>
   
  );
}

export default App;

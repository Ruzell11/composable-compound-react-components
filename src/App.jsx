import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Product from './product-page';
import OtherPage from './other-page';

function App() {
  return (
    <Router>
    

      <Routes>
        <Route path="/" element={<Product />} />
        <Route path="/other-page" element={<OtherPage />} />
      </Routes>
    </Router>
  );
}

export default App

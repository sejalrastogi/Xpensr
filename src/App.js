import Home from './pages/home';
import Header from './components/header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AddExpense from './pages/add-expense';
import Footer from './components/footer';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/add-expense" element={<AddExpense />} />
      </Routes>
      <Footer />
    </Router>
    
  );
}

export default App;

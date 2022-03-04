import Home from './pages/home';
import Header from './components/header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AddExpense from './pages/add-expense';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/add-expense" element={<AddExpense />} />
      </Routes>
    </Router>
    
      // <div>Footer</div>
  );
}

export default App;

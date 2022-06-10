import logo from './logo.svg';
import './App.css';
import LikeArea from './components/LikeArea';
import Header from './Header';
import Sidebar from './Sidebar';
import Dashboard from './Dashboard';
import Footer from './Footer';

function App() {
  return (
    <div class="wrapper">
      <Header/>
      <Sidebar/>
      <Dashboard/>
      <Footer/>
    </div>
  );
}

export default App;
import logo from './logo.svg';
import './App.css';
import SideBar from './components/layouts/Side';
import Header from './components/layouts/Header';
import Content from './components/layouts/Content';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Header />
      <SideBar />
      <Content />
      </BrowserRouter>
  </div>
  );
}

export default App;

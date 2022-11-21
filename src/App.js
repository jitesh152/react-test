import logo from './logo.svg';
import './App.css';
import {Container} from 'react-bootstrap';

import Header from './components/Header';
import Navbar from './components/Navbar';
import Jumbotron from './components/Jumbotron';
import PostSection from './components/PostSection';
import Footer from './components/Footer';

function App() {
  return (
    <>
    <Container>
      <Header />
      <Navbar />
      <Jumbotron />
      <PostSection />
    </Container>
    <Footer />
    </>
  );
}

export default App;

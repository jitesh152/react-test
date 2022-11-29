import React from "react";
import {Container} from 'react-bootstrap';

import Header from '../components/Header';
import Navbar from '../components/Navbar';
import Jumbotron from '../components/Jumbotron';
import PostSection from '../components/PostSection';
import Footer from '../components/Footer';

function Home() {
    return (
        <>
        <Container>
            <Header />
            <Navbar />
            <Jumbotron heading="Home Page" path="/about" />
            <PostSection />
        </Container>
        <Footer />
        </>
    );
}

export default Home;
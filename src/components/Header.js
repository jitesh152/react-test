import React from 'react';
import {Row, Col} from 'react-bootstrap';
import '../css/Header.css';

function Header(){
    return (
        
        <header className='blog-header py-3'>
            <Row className='flex-nowrap justify-content-between align-items-center'>
                <Col xs={4} className='pt-1'>
                    <a className="text-muted" href="#">Subscribe</a>
                </Col>
                <Col xs={4} className='text-center'>
                    <a className="blog-header-logo text-dark" href="#">Large</a>
                </Col>
                <Col xs={4} className='d-flex justify-content-end align-items-center'>
                <a className="text-muted" href="#">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mx-3"><circle cx="10.5" cy="10.5" r="7.5"></circle><line x1="21" y1="21" x2="15.8" y2="15.8"></line></svg>
                </a>
                <a className="btn btn-sm btn-outline-secondary" href="#">Sign up</a>
                </Col>
            </Row>
        </header>
    );
}

export default Header;
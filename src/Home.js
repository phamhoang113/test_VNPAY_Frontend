import React, { Component } from 'react';
import './App.css';
import {Container } from 'reactstrap';
import Header from './Component/Header/Header';
import Footer from './Component/Footer/Footer';
import mainImage from './images/pic-center.png'
class Home extends Component {
    render() {
        return (
            <div>
                <Header />
                <Container fluid>
                    <img
                        src={mainImage}
                        className="d-inline-block align-top"
                        alt="Brand logo"
                    />
                </Container>
                <Footer/>
            </div>
        );
    }
}
export default Home;
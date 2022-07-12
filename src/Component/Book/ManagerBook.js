import React, { Component } from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import '../../static/managerbook.css'
import {Navbar, Nav, NavDropdown, Container, Form, Button, FormControl } from 'react-bootstrap';
class ManagerBook extends Component {

    constructor(props) {
        super(props);
        this.state = { token: localStorage.getItem("token") };
    }

    render() {
        const { token } = this.state;
        // if(token==null||token == "")
        //     return (<div>
        //         <Header/>
        //         <h3>Bạn cần đăng nhập để sử dụng chức năng này!</h3>
        //         <Footer/>
        //     </div>);
        // else
        return (
            <div>
                <Header />
                <div class="col-lg-8 mx-auto mt-5" style={{ minHeight: '79.3333333vh' }}>
                    <div class="row ">
                        <div className="button-container">
                            <Nav.Link href="/manager_book" className="btn btn-href">Thêm</Nav.Link>
                            <Nav.Link href="/manager_book" className="btn btn-href">Sửa</Nav.Link>
                            <Nav.Link href="/manager_book" className="btn btn-href">Xóa</Nav.Link>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }

}

export default ManagerBook;

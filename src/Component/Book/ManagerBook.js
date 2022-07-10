import React, { Component } from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';



class ManagerBook extends Component {

    constructor(props) {
        super(props);
        this.state = { token:localStorage.getItem("token")};
    }

    render() {
        const { token } = this.state;
        if(token==null||token == "")
            return (<div>
                <Header/>
                <h3>Bạn cần đăng nhập để sử dụng chức năng này!</h3>
                <Footer/>
            </div>);
        else
            return (
                <div>
                    <Header/>
                    <Footer/>
                </div>
            );
    }

}
export default ManagerBook;

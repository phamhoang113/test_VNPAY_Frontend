import React, { Component } from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

class BookList extends Component {

    constructor(props) {
        super(props);
        this.state = { books: [] };
    }

    componentDidMount() {
        fetch('/api/book/list_book')
            .then(response => response.json())
            .then(data => this.setState({ books: data }));
    }

    render() {
        const { books } = this.state;
        return (
            <div>
                <Header />
                <div class="col-lg-8 mx-auto mt-5" style={{minHeight:'79.3333333vh'}}>
                    <div class="row ">
                        {books.map(book =>
                            <Card style={{ width: '18rem', marginLeft:'20px', }} >
                                <Card.Img variant="top" src={book.image} class="mt-2"/>
                                <Card.Body>
                                    <Card.Title>{book.name}</Card.Title>
                                    <Card.Text>
                                    {book.description}
                                    </Card.Text>
                                    <Button variant="primary">Go somewhere</Button>
                                </Card.Body>
                            </Card>
                        )}
                    </div>
                </div>
                <Footer />
            </div>
        );
    }

}
export default BookList;

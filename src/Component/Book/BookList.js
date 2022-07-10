import React, { Component } from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

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
                <Header/>
                <div class="row">
                    <div class="col-lg-8 mx-auto">
                        <ul class="list-group shadow">
                            {books.map(book =>
                                <li class="list-group-item">
                                    <div class="media-body order-2 order-lg-1">
                                        <h5 class="mt-0 font-weight-bold mb-2">{book.name}</h5>
                                        <p class="font-italic text-muted mb-0 small">{book.description}</p>
                                        <div class="d-flex align-items-center justify-content-between mt-1">
                                            <h6 class="font-weight-bold my-2">{book.price}</h6>
                                            <ul class="list-inline small">
                                                <li class="list-inline-item m-0"><i class="fa fa-star text-success"></i></li>
                                                <li class="list-inline-item m-0"><i class="fa fa-star text-success"></i></li>
                                                <li class="list-inline-item m-0"><i class="fa fa-star text-success"></i></li>
                                                <li class="list-inline-item m-0"><i class="fa fa-star text-success"></i></li>
                                                <li class="list-inline-item m-0"><i class="fa fa-star-o text-gray"></i></li>
                                            </ul>
                                        </div>
                                    </div><img src={book.image}  class="ml-lg-5 order-1 order-lg-2"/>
                                </li>
                            )}
                        </ul>
                    </div>
                </div>
                <Footer/>
            </div>
        );
    }

}
export default BookList;

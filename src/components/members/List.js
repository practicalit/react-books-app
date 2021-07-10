import React, {Component} from 'react';
import axios from 'axios';

class List extends Component{
    constructor(props) {
        super(props);
        this.state = {
            books: []
        }
    }

    componentDidMount() {
        this.getBooks().then(response => {
            this.setState({books: response.data});
        })
    }
    
    getBooks = () => {
        let url = `${process.env.REACT_APP_BACK_URL}${process.env.REACT_APP_BOOKS}`;
        console.log(url);
        return axios.get(url)
    }

    render = () => {
        return (this.state.books.map((book, index) => {
                return <div key={book.id}>{book.title}</div>
            })
        );
    }
}

export default List;
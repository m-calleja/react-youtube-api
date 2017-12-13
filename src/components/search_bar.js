/**
 * Created by Mei on 13/12/2017.
 */
import React, { Component } from 'react';

// const SearchBar = () => {
//     return <input />;
// };

class SearchBar extends Component {

//State Initialisation
    constructor(props) {
        super(props); //calling Components properties
//only use this pattern inside a constructor:
        this.state = {term: ''};
    }

    render() {
        //multiple code we place a () to return
        return (
            <div className="search-bar">
             <input
                 value={this.state.term} //controller component
                 onChange={event => this.onInputChange(event.target.value)}/>
            </div>
        );
    }

    onInputChange(term) {
        this.setState({term});
        this.props.onSearchTermChange(term)
    }
}

export default SearchBar;
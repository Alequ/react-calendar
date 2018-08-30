import React from 'react';
import List from './List';

class ToDoList extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            term: '',
            items: []
        };
    }

    onChange = (event) => {
        this.setState({ term: event.target.value })
    }

    onSubmit = ( event ) => {
        event.preventDefault();
        this.setState({
            term: '',
            items: [...this.state.items, this.state.term]
        })
    }

    render() {
        return(
            <div>
                <form className="todoApp" onSubmit={this.onSubmit}>
                <input value={this.state.term} onChange={this.onChange}/>
                </form>
                <List items={this.state.items} />
            </div>
        );
    }

}

export default ToDoList;
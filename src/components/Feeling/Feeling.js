import React, { Component } from 'react';
import { connect } from 'react-redux';

const mapReduxStateToProps = (reduxState) => (
    { reduxState }
);

const emptyInput = '';


class Feeling extends Component {
    constructor(props) {
        super(props);
        this.state = {
            formInput: emptyInput,
        }
    }

    handleChangeFor = propertyName => event => {
        console.log('input says: ', event.target.value);
        this.setState({
            [propertyName] : event.target.value
        });
    }
    
    submitHandler = (event) => {
        console.log('init submitHandler')
        event.preventDefault();
        this.dispatchInput();
        console.log('dispatched action');
    
    }

    dispatchInput = () => {
        const action = {type: 'STORE_FEELING', payload: this.state};
        this.props.dispatch(action);
    }

    render() {
        return (
            <div >
                <div className="progressIndicator">
                    <div className="progressBar">
                    </div>
                    <div>
                        <h3>1 of 4</h3>
                    </div>
                </div>
                <h2>How are you feeling today?</h2>
                <form>
                    <input onChange={this.handleChangeFor('formInput')} type="number" placeholder="Type 1 through 5" />
                    <input type="submit" value="Next" onClick={this.submitHandler}/>
                </form>
            </div>
        );
    }
}

export default connect(mapReduxStateToProps)(Feeling);

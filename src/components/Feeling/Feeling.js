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

    // load user input from store
    componentDidMount = () => {
        this.setState({
            formInput: this.props.reduxState.formReducer.feeling,
        })
    }

    // send state to store
    dispatchInput = () => {
        const action = {type: 'STORE_INPUT', property: 'feeling', payload: this.state.formInput};
        this.props.dispatch(action);
    }
    
    // assign input value to state property
    handleChangeFor = propertyName => event => {
        this.setState({
            [propertyName] : event.target.value
        });
    }

    // store state and advance to next page
    submitHandler = (event) => {
        event.preventDefault();
        this.dispatchInput();
        this.props.history.push('/understanding');
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
                    <input onChange={this.handleChangeFor('formInput')} type="number" placeholder={this.state.formInput} />
                    <input type="submit" value="Next" onClick={this.submitHandler}/>
                </form>
            </div>
        );
    }
}

export default connect(mapReduxStateToProps)(Feeling);

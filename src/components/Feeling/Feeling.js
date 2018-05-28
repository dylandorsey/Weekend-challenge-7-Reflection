import React, { Component } from 'react';
import { connect } from 'react-redux';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';



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
                    <Paper elevation={2}>
                    <Typography variant="subheading">Page 1 of 4</Typography>
                    </Paper>
                </div>
                <Paper elevation={3}>
                <Typography variant="title">How are you feeling today?</Typography>
                <form onSubmit={this.submitHandler}>
                    <input onChange={this.handleChangeFor('formInput')} type="number" placeholder={this.state.formInput} />
                </form>
                <button onClick={this.submitHandler}>Next</button>
                </Paper>
            </div>
        );
    }
}

export default connect(mapReduxStateToProps)(Feeling);

import React, { Component } from 'react';
import { connect } from 'react-redux';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';

const mapReduxStateToProps = (reduxState) => (
    { reduxState }
);

const emptyInput = '';

class Comments extends Component {
    constructor(props) {
        super(props);
        this.state = {
            formInput: emptyInput,
        }
    }

    // load user input from store
    componentDidMount = () => {
        this.setState({
            formInput: this.props.reduxState.formReducer.comments,
        })
    }

    // send state to store
    dispatchInput = () => {
        const action = { type: 'STORE_INPUT', property: 'comments', payload: this.state.formInput };
        this.props.dispatch(action);
    }

    // initiate submit feedback to server via submissionReducer
    dispatchSubmitFeedback = () => {
        const action = { type: 'SUBMIT_FEEDBACK' };
        this.props.dispatch(action);
    }

    // assign input value to state property
    handleChangeFor = propertyName => event => {
        this.setState({
            [propertyName]: event.target.value
        });
    }

    // handle navigation to previous page
    previousHandler = () => {
        this.dispatchInput();
        this.props.history.push('/support')
    }

    // store input and initiate POST to database
    submitHandler = (event) => {
        event.preventDefault();
        // store state
        this.dispatchInput();
        // initiate POST to database
        this.dispatchSubmitFeedback();
        this.props.history.push('/thank_you')
    }

    render() {
        return (
            <div >
                <div className="progressIndicator">
                    <div className="progressBar">
                    </div>
                    <Paper elevation={2}>
                        <Typography variant="subheading">Page 4 of 4</Typography>
                    </Paper>
                </div>
                <Paper elevation={3}>
                    <Typography variant="title">Any comments you want to leave?</Typography>
                    <form onSubmit={this.submitHandler}>
                        <input onChange={this.handleChangeFor('formInput')} type="text" placeholder={this.state.formInput} />
                    </form>
                    <br />
                    <button onClick={this.previousHandler} >Previous</button>
                    <button onClick={this.submitHandler}>Submit Feedback</button>
                </Paper>
            </div>
        );
    }
}

export default connect(mapReduxStateToProps)(Comments);

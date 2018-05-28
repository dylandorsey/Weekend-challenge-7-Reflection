import React, { Component } from 'react';
import { connect } from 'react-redux';

const mapReduxStateToProps = (reduxState) => (
    { reduxState }
);

const emptyInput = '';
const emptyObject = {};

// const submitHandler = new Promise(function resolve() {
//     console.log('finished');
// }, function reject() {
//     console.log('failed');
// }
// );

class Comments extends Component {
    constructor(props) {
        super(props);
        this.state = {
            formInput: emptyInput,
            feedback: emptyObject,
        }
    }

    // load user input from store
    componentDidMount = () => {
        this.setState({
            formInput: this.props.reduxState.formReducer.comments,
        })
    }

    // assemble stored user inputs into a feedback object for later submission to server
    createFeedbackObject = () => {
        console.log('init createFeedbackObject');
        console.log('feedback object: ', this.state.feedback);

    }

    // send state to store
    dispatchInput = () => {
        const action = { type: 'STORE_INPUT', property: 'comments', payload: this.state.formInput };
        this.props.dispatch(action);

    }

    // initiate submit feedback to server via submissionReducer
    dispatchSubmitFeedback = () => {
        const action = { type: 'SUBMIT_FEEDBACK'};
        this.props.dispatch(action);

    }

    // assign input value to state property
    handleChangeFor = propertyName => event => {
        this.setState({
            [propertyName]: event.target.value
        });
    }

    // store state and advance to next page
    submitHandler = (event) => {
        event.preventDefault();
        // store state
        this.dispatchInput();
        // submit feedback to server
        this.dispatchSubmitFeedback();
    }

    render() {
        return (
            <div >
                <div className="progressIndicator">
                    <div className="progressBar">
                    </div>
                    <div>
                        <h3>4 of 4</h3>
                    </div>
                </div>
                <h2>Any comments you want to leave?</h2>
                <form>
                    <input onChange={this.handleChangeFor('formInput')} type="text" placeholder={this.state.formInput} />
                    <input type="submit" value="Submit Feedback" onClick={this.submitHandler} />
                </form>
            </div>
        );
    }
}

export default connect(mapReduxStateToProps)(Comments);

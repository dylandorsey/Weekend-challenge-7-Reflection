import React, { Component } from 'react';
import { connect } from 'react-redux';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import ButtonNavBackward from '../ButtonNavBackward/ButtonNavBackward';
import ButtonNavForward from '../ButtonNavForward/ButtonNavForward';

const mapReduxStateToProps = (reduxState) => (
    { reduxState }
);

const emptyInput = '';


class Understanding extends Component {
    constructor(props) {
        super(props);
        this.state = {
            formInput: emptyInput,
        }
    }

    // load user input from store
    componentDidMount = () => {
        this.setState({
            formInput: this.props.reduxState.formReducer.understanding,
        })
    }

    // send state to store
    dispatchInput = () => {
        const action = { type: 'STORE_INPUT', property: 'understanding', payload: this.state.formInput };
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
        this.props.history.push('/')
    }

    // store state and advance to next page
    submitHandler = (event) => {
        event.preventDefault();
        this.dispatchInput();
        this.props.history.push('/support')
    }

    render() {
        return (
            <div >
                <div className="progressIndicator">
                    <div className="progressBar">
                    </div>
                    <Paper elevation={2}>
                        <Typography variant="subheading">Page 2 of 4</Typography>
                    </Paper>
                </div>
                <Paper elevation={3}>
                    <Typography variant="title">How well are you understanding the content?</Typography>
                    <form onSubmit={this.submitHandler}>
                        <input onChange={this.handleChangeFor('formInput')} type="number" placeholder={this.state.formInput} />
                    </form>
                    <br />
                    <div className="navButtons">
                        <ButtonNavBackward onClick={this.previousHandler} />
                        <ButtonNavForward onClick={this.submitHandler} />
                    </div>
                </Paper>
            </div>
        );
    }
}

export default connect(mapReduxStateToProps)(Understanding);

import React, { Component } from 'react';
import FeedbackItem from '../FeedbackItem/FeedbackItem';
import axios from 'axios';

class Admin extends Component {
    constructor(props) {
        super(props);

        this.state = {
            feedbackArray: [],
        }
    }

    componentDidMount() {
        this.getFeedback();
    }

    getFeedback = () => {
        axios({
            method: 'GET',
            url: '/api/admin',
        })
            .then((response) => {
                console.log(response);
                this.setState({
                    feedbackArray: response.data.rows,
                })
            })
            .catch((error) => {
                console.log('error with GET', error);
            });
    }

    deleteFeedback = (entryID) => {
        console.log('init deleteFeedback', entryID);
        axios({
            method: 'DELETE',
            url: `/api/admin/${entryID}`
        })
            .then((response) => {
                console.log(response);
                // update DOM with remaining data from database
                this.getFeedback();
            })
            .catch((error) => {
                console.log('error with DELETE', error);
            });
    }

    render() {
        return (
            <div >
                <h2>Admin</h2>
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Feeling</th>
                            <th>Understanding</th>
                            <th>Support</th>
                            <th>Comments</th>
                            <th>Flagged</th>
                            <th>Date</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.feedbackArray.map(item => <FeedbackItem key={item.id} item={item} delete={this.deleteFeedback} />)}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Admin;

import React, { Component } from 'react';
import FeedbackItem from '../FeedbackItem/FeedbackItem';
import axios from 'axios';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

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

    confirmAction = (entryID) => {
        confirmAlert({
            title: 'Confirm delete',
            message: 'Are you sure you want to delete?',
            buttons: [
                {
                    label: 'Yes',
                    onClick: () => this.deleteFeedback(entryID)
                },
                {
                    label: 'No',
                    onClick: () => alert('aborted')
                }
            ]
        })
    };

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
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell numeric>ID</TableCell>
                            <TableCell numeric>Feeling</TableCell>
                            <TableCell numeric>Understanding</TableCell>
                            <TableCell numeric>Support</TableCell>
                            <TableCell >Comments</TableCell>
                            <TableCell>Flagged</TableCell>
                            <TableCell>Date</TableCell>
                            <TableCell>Action</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {this.state.feedbackArray.map(item => <FeedbackItem key={item.id} item={item} delete={this.confirmAction} />)}
                    </TableBody>
                </Table>
            </div>
        );
    }
}

export default Admin;

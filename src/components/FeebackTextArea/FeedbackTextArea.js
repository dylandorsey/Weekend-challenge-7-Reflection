import React from 'react';
import TextField from '@material-ui/core/TextField';

const FeedbackTextArea = props => (
    <div>
        <TextField
            label="Your comments here..."
            multiline={true}
            rows={4}
            fullWidth
            placeholder={props.placeholder}
            value={props.placeholder}
            onChange={props.onChange}
        />
    </div>
)

export default FeedbackTextArea;
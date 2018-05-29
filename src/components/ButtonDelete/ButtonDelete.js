import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import { Delete } from '@material-ui/icons';

const ButtonDelete = props => (
    <div onClick={props.onClick}>
        <Button
            variant="raised"
            color="secondary"
        >
            Delete
                <Delete />
        </Button>
    </div>
);

export default ButtonDelete;
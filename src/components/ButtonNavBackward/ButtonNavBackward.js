import React, { Component } from 'react';
import Button from '@material-ui/core/Button';

const ButtonNavBackward = props => (
            <div onClick={props.onClick}>
                <Button
                    variant="raised"
                    color="primary"
                >
                Previous
          </Button>
            </div>
);

export default ButtonNavBackward;
import React, { Component } from 'react';
import Button from '@material-ui/core/Button';

const ButtonNavForward = props => (
            <div onClick={props.onClick}>
                <Button
                    variant="raised"
                    color="primary"

                >
                Next
          </Button>
            </div>
);

export default ButtonNavForward;
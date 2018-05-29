import React, { Component } from 'react';
import Button from '@material-ui/core/Button';

const ButtonSubmitFeedback = props => (
            <div onClick={props.onClick}>
                <Button
                    variant="raised"
                    color="primary"

                >
                Submit feedback
          </Button>
            </div>
);

export default ButtonSubmitFeedback;
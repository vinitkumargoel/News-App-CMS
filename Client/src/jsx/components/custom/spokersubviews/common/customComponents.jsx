import {Modal} from 'semantic-ui-react'
import React, { Component } from 'react';

export const TempModal=(props)=>{
    return (<Modal style={{position: 'absolute',
        left: '25%',
        top: '40%'}} basic size='small' open={props.open} {...props.remainingProps}>
                {props.children}
              </Modal>);
    }
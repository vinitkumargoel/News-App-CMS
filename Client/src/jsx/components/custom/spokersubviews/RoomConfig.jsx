//core imports
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    Route,
    Link, Redirect
} from 'react-router-dom';
import PropTypes from 'prop-types';
import { pmData, typesToValidate } from './common/commonData';
import { validate, updateStoreInput } from './common/utils';
import update from 'immutability-helper';
import { Message, Modal, Header, Grid, Input, Icon, Label, Radio, Form, Divider, Button } from 'semantic-ui-react';
import { TempModal } from './common/customComponents';
import urls from './../../../../js/resources/url.js';

//style imports

//container imports

//component imports

//semantic-ui components

//component
class RoomConfig extends Component {
    constructor(props) {
        super(props);
        this.pageRefs = {};
        this.state = {
            open: false,
            message: '',
            hideList: false,
            isDefault: false,
            inputFields: {
                pointingMethod: { value: '', type: 'radio', required: true, error: false, show: true },
                roomname: { value: '', type: 'text', required: true, error: false, show: true },
                adminName: { value: '', type: 'text', required: true, error: false, show: true },
                fileID: { value: '', type: 'number', required: true, error: false, show: true },
                pwd: { value: '', type: 'password', required: true, error: false, show: true },
            },
            formError: true,
        };
    }
    handleModalClick = (e) => {
        if (e.target.innerText.trim() === 'Okay') {
            this.setState({ open: false });
        }
    }

    handleInput = (e, { value: nextValue }) => {
        let srcElem = e.target;
        let key = srcElem.type == 'radio' ? srcElem.name : srcElem.id;
        this.setState((prevState) => {
            let result = update(prevState, {
                inputFields: {
                    [key]: {
                        value:
                            { $set: srcElem.value }
                    }
                }
            });
            return result;
        });
        this.setState((prevState) => {
            let formError = !validate(JSON.parse(JSON.stringify(prevState)), srcElem.type);
            return { formError };

        })
    }

    handleClick = (e) => {
        let srcElem = e.target;
        let storeChunk = this.props.initRoomInfo;
        let currentState = this.state;
        const creds = 'BASIC ' + window.btoa(`${currentState.adminName}:${currentState.pwd}`);
        const url = `${urls.nodeServer}${urls.jiraApi.user}`;
        window.fetch(url, {
            method: "GET",
            headers: {
                "Authorization": creds,
            }
        })
            .then((response) => {
                let data = response.json();
                if (response.ok) {
                    switch (srcElem.id) {
                        case "join":
                            updateStoreInput(storeChunk, currentState.inputFields);
                            storeChunk.jiraData = data;
                            this.props.actions.joinRoom(storeChunk);
                            break;
                        default:

                    }
                    <Redirect to="/dashboard/spoker/join" />
                }
                else if (response.status === 401 || response.status === 404) {
                    response.status === 401 && this.setState({ open: true, message: 'Invalid JIRA credentials' });
                    response.status === 404 && this.setState({ open: true, message: "User doesn't exist" });
                }
                else {
                    this.setState({ open: true, message: "An Error occured. Please try again later." });
                }
            })
            .catch(error => {
                this.setState({ open: true, message: 'An Error occured. Please try again later.' });
                console.log(error);
            })
    }

    handleCopy = (refName, tag) => {
        let elem = ReactDOM.findDOMNode(this.pageRefs[refName]);
        elem = elem && elem.querySelector(tag);
        elem.focus();
        elem.select();
        document.execCommand("copy");
    }
    setRef = (ref) => {
        this.pageRefs.roomNum = ref;
    }
    render() {
        return (
            <Grid columns='3'>
                <Grid.Row centered>
                    <Grid.Column width={6}>
                        <Header textAlign='left' padded="true" as='h3'>Configure Room</Header>
                        <Form.Field required>
                            <Grid columns="equal">
                                <Grid.Column width={6} verticalAlign='middle'>
                                    <label htmlFor="roomnum">Room number : </label>
                                </Grid.Column>
                                <Grid.Column width={8}>
                                    <Input
                                        ref={this.setRef}
                                        size="mini"
                                        action={{ color: 'teal', icon: 'copy', onClick: this.handleCopy.bind(this, 'roomNum', 'input') }}
                                        value={this.props.initRoomInfo.roomnum}
                                    />
                                </Grid.Column>
                                <Grid.Column width={6} verticalAlign='middle'>
                                    <label htmlFor="roomname">Room name : </label>
                                </Grid.Column>
                                <Grid.Column width={8}>
                                    <Input id='roomname' type='text' size="mini" placeholder='Cheesy room name' onChange={this.handleInput} />
                                </Grid.Column>
                                <Grid.Column width={6} verticalAlign='middle'>
                                    <label htmlFor="adminName">Jira Username : </label>
                                </Grid.Column>
                                <Grid.Column width={8}>
                                    <Input id='adminName' type='text' size="mini" placeholder='Your name' onChange={this.handleInput} />
                                </Grid.Column>
                                <Grid.Column width={6} verticalAlign='middle'>
                                    <label htmlFor="pwd">Jira Password : </label>
                                </Grid.Column>
                                <Grid.Column width={8}>
                                    <Input id='pwd' size="mini" type="password" placeholder='XXXX' onChange={this.handleInput} />
                                </Grid.Column>
                                <Grid.Column width={6} verticalAlign='middle'>
                                    <label htmlFor="fileID">File ID : </label>
                                </Grid.Column>
                                <Grid.Column width={8}>
                                    <Input id='fileID' type="number" size="mini" placeholder='123456' onChange={this.handleInput} />
                                </Grid.Column>

                            </Grid>
                        </Form.Field>

                    </Grid.Column>
                    <Grid.Column width={2} >
                        <Divider vertical>And</Divider>
                    </Grid.Column>
                    <Grid.Column width={6} >
                        <Header textAlign='left' padded="true" as='h4'>Select a pointing method</Header>
                        <Form>
                            <Form.Field>
                                Selected value: <b>{this.state.inputFields.pointingMethod.value}</b>
                            </Form.Field>
                            <Form.Field>
                                <Radio
                                    label=''
                                    name='pointingMethod'
                                    value='Fibonacci'
                                    checked={this.state.inputFields.pointingMethod.value === 'Fibonacci'}
                                    onChange={this.handleInput}
                                    id='Fibonacci'
                                />
                                {pmData["Fibonacci"].map(fibno => <Label circular color="orange" size='big' key={fibno}>{fibno}</Label>)}
                            </Form.Field>
                            <Form.Field>
                                <Radio
                                    label=''
                                    name='pointingMethod'
                                    value='Exponential'
                                    checked={this.state.inputFields.pointingMethod.value === 'Exponential'}
                                    onChange={this.handleInput}
                                    id='Exponential'
                                />
                                {pmData["Exponential"].map(expno => <Label circular color="teal" size='big' key={expno}>{expno}</Label>)}
                            </Form.Field>
                            <Form.Field>
                                <Radio
                                    label=''
                                    name='pointingMethod'
                                    value='Normal'
                                    checked={this.state.inputFields.pointingMethod.value === 'Normal'}
                                    onChange={this.handleInput}
                                    id='Normal'
                                />
                                {pmData["Normal"].map(nrmlno => <Label circular color="pink" size='big' key={nrmlno}>{nrmlno}</Label>)}
                            </Form.Field>
                            <Form.Field>
                                <Radio
                                    label=''
                                    name='pointingMethod'
                                    value='Tshirt'
                                    checked={this.state.inputFields.pointingMethod.value === 'Tshirt'}
                                    onChange={this.handleInput}
                                    id='Tshirt'
                                />
                                {pmData["Tshirt"].map(tno => <Label circular color="blue" size='big' key={tno}>{tno}</Label>)}
                            </Form.Field>
                        </Form>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row centered>
                    {this.state.formError && <Message
                        error={this.state.formError}
                        content='Please make sure the values entered are correct'
                    />}
                </Grid.Row>
                <Grid.Row centered>
                    <Button style={{ pointerEvents: this.state.formError ? 'none' : 'auto' }} disabled={this.state.formError} id='join' color="green" onClick={this.handleClick}>
                        <Icon name='plus' />Create
                    </Button>
                </Grid.Row>
                <TempModal open={this.state.open} >
                    <Header icon='exclamation' content='Oh!' />
                    <Modal.Content>
                        <p>{this.state.message}</p>
                    </Modal.Content>
                    <Modal.Actions floated='right'>
                        <Button color='green' inverted onClick={this.handleModalClick}>
                            <Icon name='checkmark' /> Okay
                        </Button>

                    </Modal.Actions>
                </TempModal>
            </Grid >

        );
    }
}

export default RoomConfig;

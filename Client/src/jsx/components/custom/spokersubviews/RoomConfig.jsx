//core imports
import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';
import PropTypes from 'prop-types';
import { pointingMethod, typesToValidate } from './common/commonData';
import { validate } from './common/utils';
import update from 'immutability-helper';


//style imports
import styles from '../../../../css/ScrumPokerStyle.css';

//container imports

//component imports

//semantic-ui components
import { Message, Container, Header, Segment, Grid, Input, Icon, Checkbox, List, Label, Radio, Form, Divider, Button } from 'semantic-ui-react';

//component
class RoomConfig extends Component {
    constructor(props) {
        super(props);
        // this.state = this.props.initRoomInfo;
        this.state = {
            hideList: false,
            isDefault: false,
            inputFields: {
                pointingMethod: { value: '', type: 'radio', required: true, error: false, show: true },
                roomnum: { value: '', type: 'number', required: true, error: false, show: true },
                roomname: { value: '', type: 'text', required: true, error: false, show: true },
                adminName: { value: '', type: 'text', required: true, error: false, show: true },
                fileID: { value: '', type: 'number', required: true, error: false, show: true },
                pwd: { value: '', type: 'password', required: true, error: false, show: true },
            },
            formError: true,
        };
    }

    handleInput = (e, { value: nextValue }) => {
        let srcElem = e.target;
        let key = srcElem.type == 'radio' ? srcElem.name : srcElem.id;
        switch (key) {
            case "isDefault":
                this.setState({ isDefault: srcElem.checked, hideList: !this.state.isDefault });
                break;
            default:
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
        }
        this.setState((prevState) => {
            let formError = !validate(JSON.parse(JSON.stringify(prevState)), srcElem.type);
            return { formError };

        })
    }

    handleClick = (e) => {
        let srcElem = e.target;
        switch (srcElem.id) {
            case "join":
                this.props.actions.joinRoom(this.state);
                break;
            default:

        }
    }



    render() {
        return (
            <Grid columns='3'>
                <Grid.Row centered>
                    <Grid.Column width={6}>
                        <Header textAlign='left' padded as='h3'>Configure Room</Header>
                        <Form.Field required>
                            <Grid columns="equals">
                                <Grid.Column width={6} verticalAlign='middle'>
                                    <label htmlFor="roomnum">Room number : </label>
                                </Grid.Column>
                                <Grid.Column width={8}>
                                    <Input id='roomnum' type='number' size="mini" placeholder='123456' onChange={this.handleInput} />
                                </Grid.Column>
                                <Grid.Column width={6} verticalAlign='middle'>
                                    <label htmlFor="roomname">Room name : </label>
                                </Grid.Column>
                                <Grid.Column width={8}>
                                    <Input id='roomname' type='text' size="mini" placeholder='Cheesy room name' onChange={this.handleInput} />
                                </Grid.Column>
                                <Grid.Column width={6} verticalAlign='middle'>
                                    <label htmlFor="adminName">Name : </label>
                                </Grid.Column>
                                <Grid.Column width={8}>
                                    <Input id='adminName' type='text' size="mini" placeholder='Your name' onChange={this.handleInput} />
                                </Grid.Column>
                                <Grid.Column width={6} verticalAlign='middle'>
                                    <label htmlFor="fileID">File ID : </label>
                                </Grid.Column>
                                <Grid.Column width={8}>
                                    <Input id='fileID' type="number" size="mini" placeholder='123456' onChange={this.handleInput} />
                                </Grid.Column>
                                <Grid.Column width={6} verticalAlign='middle'>
                                    <label htmlFor="pwd">Password : </label>
                                </Grid.Column>
                                <Grid.Column width={8}>
                                    <Input id='pwd' size="mini" type="password" placeholder='XXXX' onChange={this.handleInput} />
                                </Grid.Column>
                            </Grid>
                        </Form.Field>

                    </Grid.Column>
                    <Grid.Column width={2} >
                        <Divider vertical>And</Divider>
                    </Grid.Column>
                    <Grid.Column width={6} >
                        <Header textAlign='left' padded as='h4'>Select a pointing method</Header>
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
                                {pointingMethod.Fib_no.map(fibno => <Label circular color="orange" size='big' key={fibno}>{fibno}</Label>)}
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
                                {pointingMethod.Exp_no.map(expno => <Label circular color="teal" size='big' key={expno}>{expno}</Label>)}
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
                                {pointingMethod.Nrml_no.map(nrmlno => <Label circular color="pink" size='big' key={nrmlno}>{nrmlno}</Label>)}
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
                                {pointingMethod.T_no.map(tno => <Label circular color="blue" size='big' key={tno}>{tno}</Label>)}
                            </Form.Field>
                        </Form>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row centered>
                    <Message
                        error={this.state.formError}
                        content='Please make sure the values entered are correct'
                    />
                </Grid.Row>
                <Grid.Row centered>
                    <Link to={"/dashboard/spoker/join"} style={{pointerEvents:this.state.formError?'none':'auto'}}>
                        <Button disabled={this.state.formError} id='join' color="green" onClick={this.handleClick}>
                            <Icon name='plus' />Create
                                    </Button>
                    </Link>
                </Grid.Row>
            </Grid >

        );
    }
}

export default RoomConfig;

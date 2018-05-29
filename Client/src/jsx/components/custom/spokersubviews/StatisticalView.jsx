import React, { Component } from 'react'
import { Input, Table, Grid, Header, Button, Message, Icon, Modal,Dropdown } from 'semantic-ui-react'
import { TempModal } from './common/customComponents';
import { pmData } from './common/commonData';
import update from 'immutability-helper';
import { updateStoreInput, validate } from './common/utils';

let plNew = {};

class StatisticalView extends Component {
    constructor(props) {
        super(props);
        //console.log(this.props.pointList);
        this.state = {
            inputFields: {
                pointInput: { value: '', type: 'select', required: false, error: false, show: true },
            },
            pointsCount:[],
            lowestStoryPoint:0,
            votingDetailsMetadata:{
                highestStoryPoint: "Highest story point",
                lowestStoryPoint:"Least story Point",
                averageStoryPoint:"Average story Point",
                peopleVoted:"People voted",
                peopleNotVoted:"People who didn't vote"
            },
            votingDetails: {
                highestStoryPoint:0,
                lowestStoryPoint:0,
                averageStoryPoint:0,
                peopleVoted:0,
                peopleNotVoted:0
            },
            open: false,
            formError:true
        }
        //console.log(this.state.pointsCount);
    }


    //this is to be changed
    componentDidMount(){
        //console.log(this.props.pointList);
        let pointsCount=[];
        this.props.pointList.forEach((element) => {
            //console.log("element is", element);
            if(pointsCount[element.score] ==undefined){
                pointsCount[element.score]=1;
            }
            else{
                pointsCount[element.score]=pointsCount[element.score]+1;
            } 
               
            
        });
        //console.log("points count is", pointsCount);
        
        let values=[];
        for(let point in pointsCount){
            values.push(point);
        }

        //console.log("valuesfffcvf",values);

        let votingDetails=this.state.votingDetails;
        votingDetails.highestStoryPoint=Math.max(...values);
        votingDetails.lowestStoryPoint=Math.min(...values);

        values.sort((a, b) => a - b);
        let lowMiddle = Math.floor((values.length - 1) / 2);
        let highMiddle = Math.ceil((values.length - 1) / 2);
        let median = Math.ceil((parseInt(values[lowMiddle]) + parseInt(values[highMiddle])) / 2);
        
        votingDetails.peopleVoted=values.length;
        votingDetails.peopleNotVoted=(this.props.playerList.length-1)-this.props.pointList.length;
        votingDetails.averageStoryPoint=median;
        this.setState({pointsCount,votingDetails});

    }

    
    
    
    //this should be removed
    componentWillReceiveßßProps(newProps,prevState){
        //console.log(newProps.pointList);
        let pointsCount=[];
        newProps.pointList.forEach((element) => {
            //console.log("element is", element);
            if(pointsCount[element.score] ==undefined){
                pointsCount[element.score]=1;
            }
            else{
                pointsCount[element.score]=pointsCount[element.score]+1;
            } 
               
            
        });
        //console.log("points count is", pointsCount);
        
        let values=[];
        for(let point in pointsCount){
            values.push(point);
        }

        //console.log("valuesfffcvf",values);

        let votingDetails=this.state.votingDetails;
        votingDetails.highestStoryPoint=Math.max(...values);
        votingDetails.lowestStoryPoint=Math.min(...values);

        values.sort((a, b) => a - b);
        let lowMiddle = Math.floor((values.length - 1) / 2);
        let highMiddle = Math.ceil((values.length - 1) / 2);
        let median = Math.ceil((parseInt(values[lowMiddle]) + parseInt(values[highMiddle])) / 2);
        
        votingDetails.peopleVoted=values.length;
        votingDetails.peopleNotVoted=(this.props.playerList.length-1)-newProps.pointList.length;
        votingDetails.averageStoryPoint=median;
        this.setState({pointsCount,votingDetails});

    }

    calculateFrequency = (pl)=>{
        pl.map((p)=>{
            plNew[p] = (plNew[p])?++plNew[p]:1;
        });
        return plNew;
    }

    handleClick = (e, data) => {
        let votingDetails=this.state.votingDetails;
        
        if (e.target.innerText.trim() === 'Cancel') {
            this.setState({ open: false });
        }
        else if(e.target.innerText.trim()==='Submit'){
            votingDetails.averageStoryPoint=this.state.inputFields.pointInput.value;
            this.setState({ open: false, votingDetails });
        }
        else{
            this.setState({ open: true });
            
        }

    }
    handleChange = (e, data) => {

        let srcElem = data;
        let key = srcElem.name;
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
    render() {
        const pointOptions = pmData[this.props.roomInfo.pointingMethod].map((item) =>
            ({ key: item, text: item, value: item }));
        return (
            <div>
                <Message color='orange' style={{ textAlign: 'center', marginTop: '10px' }}>
                    <span>Average Score : {this.state.votingDetails.averageStoryPoint}</span>
                    <Icon style={{ marginLeft: '20px', cursor: 'pointer' }} name='edit' onClick={this.handleClick} />
                </Message>
                <Header textAlign='left' padded="true" as='h2'>Statistical View</Header>
                <Grid>
                    <Grid.Column width="8">
                        <Table celled size="small">
                            <Table.Header>
                                <Table.Row>
                                    <Table.HeaderCell>Story points</Table.HeaderCell>
                                    <Table.HeaderCell>Number of People selected</Table.HeaderCell>
                                </Table.Row>
                            </Table.Header>
                            <Table.Body>
                                {Object.getOwnPropertyNames(this.state.pointsCount).map((key,i) => {
                                    return (
                                        <Table.Row key={i}>
                                            <Table.Cell>{key}</Table.Cell>
                                            <Table.Cell>{this.state.pointsCount[key]}</Table.Cell>
                                        </Table.Row>)
                                })}
                            </Table.Body>
                        </Table>
                    </Grid.Column >
                    <Grid.Column width="8">
                        <Table celled size="small">
                            <Table.Body>
                                {Object.keys(this.state.votingDetails).map((key) => {
                                    return (
                                        <Table.Row key={key}>
                                            <Table.Cell><b>{this.state.votingDetailsMetadata[key]}</b></Table.Cell>
                                            <Table.Cell>{this.state.votingDetails[key]}</Table.Cell>
                                        </Table.Row>)
                                })}
                            </Table.Body>
                        </Table>
                    </Grid.Column >
                    <Grid.Row>
                        <Grid.Column width={11}></Grid.Column>
                        <Grid.Column floated='right' width={5}>
                            <Button primary>Submit story</Button>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
                <TempModal open={this.state.open}>
                    <Header icon='edit' content='Edit story point' />
                    <Modal.Content>
                        <p>You are about to edit the story point. Are you sure of this action?</p>
                        <Dropdown
                            inverted
                            value={this.state.inputFields.pointInput.value}
                            name="pointInput"
                            selection
                            options={pointOptions}
                            placeholder='New story point..'
                            onChange={this.handleChange}
                        />
                        {/* <Input inverted type='number' placeholder={'New story point..'} onChange={this.handleChange} />  */}
                    </Modal.Content>
                    <Modal.Actions floated='left'>
                        <Button floated='left' basic color='red' inverted onClick={this.handleClick}>
                            <Icon name='remove' /> Cancel
              </Button>

                        <Button color='green' inverted onClick={this.handleClick}>
                            <Icon name='checkmark' /> Submit
              </Button>

                    </Modal.Actions>
                </TempModal>
            </div>
        )

    }
}

export default StatisticalView;
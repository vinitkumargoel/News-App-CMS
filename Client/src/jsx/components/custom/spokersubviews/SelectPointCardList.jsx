import React, { Component } from 'react'
import { Card, Icon, Button, Grid,Header,Container,Modal } from 'semantic-ui-react'
import selectVote from '../../../../img/jpg/angry.jpg';
import SelectPointCard from './SelectPointCard'
import { pointingMethod } from './common/commonData';
import { TempModal } from './common/customComponents';

class SelectPointCardList extends Component {
  constructor(props){
    super(props);
    this.state = {open: false,selectedScore:null};
  }
  handleClick = (e,score) => {

    if (e.target.innerText.trim() === 'Cancel') {
        this.setState({ open: false });
    }
    else if (e.target.innerText.trim() === 'Submit') {
        this.setState({ open: false });
        this.props.actions.selectPoint({score});
    }
}
selectScore=({score})=>{
  this.setState({selectedScore:score, open: true });
}
  render() {
    let pointsList = this.props.pointingMethod;
    return (
      this.props.votesOpen?<Grid columns={6} padded>
        <Grid.Row>
          {
            (pointsList) ? (pointsList.map((p, i) => {
              return (
                <Grid.Column style={{padding:'1rem'}} key={i}>
                  <SelectPointCard point={p}
                    selected={this.props.playerInfo.score == "" ? null : this.props.playerInfo.score===p}
                    image={selectVote} actions={this.props.actions} handleClick={this.selectScore.bind(this)} />
                </Grid.Column>
              );
            })) : null
            
          }
        </Grid.Row>
        <TempModal open={this.state.open}>
                <Header icon='pin' content='Please confirm' />
                <Modal.Content>
                    <p>You are about to choose the story point{this.state.selectedScore}. Are you sure of this action?</p>
                    <p>Please be aware the choice cannot be changed once confirmed</p>
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
      </Grid>
      :<Container text>
      <Header textAlign='center' color='orange' as='h2'>Scrum Master has not selected any story for votes</Header>
      <p style={{color:'grey',textAlign:'center'}}>
        A story has to be selected or published by the Scrum Master for you to be able to vote
      </p>
    </Container>
      );
  }
}
export default SelectPointCardList;
import React, { Component } from 'react'
import { Card, Icon, Image, Grid } from 'semantic-ui-react'
import selectVote from '../../../../img/jpg/angry.jpg';
import SelectPointCard from './SelectPointCard'
import {pointingMethod} from './common/commonData';
class SelectPointCardList extends Component {
  render() {
    return (
      <Grid columns={6} padded>
        <Grid.Row>
          {
            this.props.pointingMethod.map((p,i) => {
              return (
                <Grid.Column key={i}>
                  <SelectPointCard point={p} image={selectVote} actions={this.props.actions}/>
                </Grid.Column>
              );
            })
          }
        </Grid.Row>
      </Grid>);
  }
}
export default SelectPointCardList;
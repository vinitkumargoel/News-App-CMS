import React, { Component } from 'react'
import { Card, Icon, Image, Grid } from 'semantic-ui-react'
import selectVote from '../../../../img/jpg/angry.jpg';
import SelectPointCard from './SelectPointCard'
import { pointingMethod } from './common/commonData';
class SelectPointCardList extends Component {
  render() {
    let pointsList = this.props.pointingMethod;
    return (
      <Grid columns={6} padded>
        <Grid.Row>
          {
            (pointsList) ? (pointsList.map((p, i) => {
              return (
                <Grid.Column style={{padding:'1rem'}} key={i}>
                  <SelectPointCard point={p}
                    selected={this.props.playerInfo.score == "" ? null : this.props.playerInfo.score===p}
                    image={selectVote} actions={this.props.actions} />
                </Grid.Column>
              );
            })) : null
          }
        </Grid.Row>
      </Grid>);
  }
}
export default SelectPointCardList;
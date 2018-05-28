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
                <Grid.Column key={i}>
                  <SelectPointCard point={p}
                    selected={this.props.playerInfo.score == undefined ? null : this.props.playerInfo.score}
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
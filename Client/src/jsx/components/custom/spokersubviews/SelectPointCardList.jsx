import React, { Component } from 'react'
import { Card, Icon, Image, Grid } from 'semantic-ui-react'
import selectVote from '../../../../img/jpg/angry.jpg';
import SelectPointCard from './SelectPointCard'
import {pointingMethod} from './common/commonData';
class SelectPointCardList extends Component {
  constructor(props) {
    super(props);
    }
  render() {
    return (
      <Grid columns={6} padded>
        <Grid.Row>
          {
            pointingMethod.Fib_no.map((user) => {
              return (
                <Grid.Column>
                  <SelectPointCard point={user} image={selectVote}/>
                </Grid.Column>
              );
            })
          }
        </Grid.Row>
      </Grid>);
  }
}
export default SelectPointCardList;
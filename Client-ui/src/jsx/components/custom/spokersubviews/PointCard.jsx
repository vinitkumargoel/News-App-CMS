import React, { Component } from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'
// import CardImg from '../../../../img/jpg/Penguins.jpg';
class PointCard extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Card style={{ margin: 10 }}>
                <Image size="small" src={this.props.image} />
                <Card.Content>
                    <Card.Description>
                        <b>{this.props.displayData}</b>
                    </Card.Description>
                </Card.Content>
            </Card>);
    }
}
// const CardExampleCard = () => (
//   <Card>
//     <Image src='https://goo.gl/images/nnPwUR' />
//     <Card.Content>
//       <Card.Header>
//         Matthew
//       </Card.Header>
//       <Card.Meta>
//         <span className='date'>
//           Joined in 2015
//         </span>
//       </Card.Meta>
//       <Card.Description>
//         Matthew is a musician living in Nashville.
//       </Card.Description>
//     </Card.Content>
//     <Card.Content extra>
//       <a>
//         <Icon name='user' />
//         22 Friends
//       </a>
//     </Card.Content>
//   </Card>
// )

export default PointCard;
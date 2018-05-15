import React, { Component } from 'react'
import { Card, Feed, Icon, Button} from 'semantic-ui-react'

class UserList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      userList: [
        { userName: "user1" },
        { userName: "user2" },
        { userName: "user3" },
        { userName: "user4" },
        { userName: "user5" }
      ]
    }
  }
  render() {
    return (
      <Card>
        <Card.Content>
          <Card.Header>
            People Joined
      </Card.Header>
        </Card.Content>
        <Card.Content>
          <Feed>
            {
              this.state.userList.map((user) => {
                return (
                  <Feed.Event>
                    <Feed.Label> <Icon circular size="mini" name='user' /></Feed.Label>
                    <Feed.Content>
                      <Feed.Summary>
                        {user.userName}
                        <Button style={{marginLeft:"50"}} disabled>Chat</Button>
                      </Feed.Summary>
                    </Feed.Content>
                  </Feed.Event>
                )
              })
            }
          </Feed>
        </Card.Content>
      </Card>
    )
  }
}

export default UserList

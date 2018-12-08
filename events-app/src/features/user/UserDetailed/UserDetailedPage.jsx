import React, { Component } from 'react';
import {
  Button,
  Card,
  Grid,
  Header,
  Icon,
  Image,
  Item,
  List,
  Menu,
  Segment
} from 'semantic-ui-react';
import { connect } from 'react-redux';

class UserDetailedPage extends Component {
  render() {
    const { info, photos } = this.props;
    return (
      <Grid>
        <Grid.Column width={16}>
          <Segment>
            <Item.Group>
              <Item>
                <Item.Image avatar size="small" src={info.profile.photoURL} />
                <Item.Content verticalAlign="bottom">
                  <Header as="h1">{info.profile.displayName}</Header>
                  <br />
                  <Header as="h3">{info.profile.occupation}</Header>
                  <br />
                  <Header as="h3">27, Lives in {info.profile.city}</Header>
                </Item.Content>
              </Item>
            </Item.Group>
          </Segment>
        </Grid.Column>
        <Grid.Column width={12}>
          <Segment>
            <Grid columns={2}>
              <Grid.Column width={10}>
                <Header icon="smile" content="About Display Name" />
                <p>
                  I am a: <strong>{info.profile.occupation}</strong>
                </p>
                <p>
                  Originally from <strong>{info.profile.city}</strong>
                </p>
                <p>
                  Member Since:{' '}
                  <strong>{this.props.info.auth.createdAt}</strong>
                </p>
                <p>
                  Description of user: <strong>{info.profile.about}</strong>{' '}
                </p>
              </Grid.Column>
              <Grid.Column width={6}>
                <Header icon="heart outline" content="Interests" />

                <List>
                  {info.profile.interests &&
                    info.profile.interests.map(interest => (
                      <Item key={interest + Math.random() * 59}>
                        <Icon name="heart" />
                        <Item.Content>{interest}</Item.Content>
                      </Item>
                    ))}
                </List>
              </Grid.Column>
            </Grid>
          </Segment>
        </Grid.Column>
        <Grid.Column width={4}>
          <Segment>
            <Button color="teal" fluid basic content="Edit Profile" />
          </Segment>
        </Grid.Column>

        {photos && (
          <Grid.Column width={12}>
            <Segment attached>
              <Header icon="image" content="Photos" />

              <Image.Group size="small">
                {photos.map(photo => (
                  <Image src={photo.url} />
                ))}
              </Image.Group>
            </Segment>
          </Grid.Column>
        )}

        <Grid.Column width={12}>
          <Segment attached>
            <Header icon="calendar" content="Events" />
            <Menu secondary pointing>
              <Menu.Item name="All Events" active />
              <Menu.Item name="Past Events" />
              <Menu.Item name="Future Events" />
              <Menu.Item name="Events Hosted" />
            </Menu>

            <Card.Group itemsPerRow={5}>
              <Card>
                <Image src={'/assets/categoryImages/drinks.jpg'} />
                <Card.Content>
                  <Card.Header textAlign="center">Event Title</Card.Header>
                  <Card.Meta textAlign="center">
                    28th March 2018 at 10:00 PM
                  </Card.Meta>
                </Card.Content>
              </Card>

              <Card>
                <Image src={'/assets/categoryImages/drinks.jpg'} />
                <Card.Content>
                  <Card.Header textAlign="center">Event Title</Card.Header>
                  <Card.Meta textAlign="center">
                    28th March 2018 at 10:00 PM
                  </Card.Meta>
                </Card.Content>
              </Card>
            </Card.Group>
          </Segment>
        </Grid.Column>
      </Grid>
    );
  }
}

const mapStateToProps = state => ({
  info: state.firebase,
  photos: state.firestore.data.photos
});

export default connect(mapStateToProps)(UserDetailedPage);

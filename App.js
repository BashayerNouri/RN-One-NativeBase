import React from "react";
import { StyleSheet, View, Image } from "react-native";
import {
  Container,
  Header,
  Content,
  Card,
  CardItem,
  Thumbnail,
  Text,
  Button,
  Icon,
  Left,
  Body,
  Right,
  Title
} from "native-base";

export default function App() {
  return (
    <Container>
      <Header>
        <Left>
          <Button transparent>
            <Icon name="camera" />
          </Button>
        </Left>
        <Body>
          <Title>InstaCODED</Title>
        </Body>
        <Right>
          <Button transparent>
            <Icon type="FontAwesome" name="location-arrow" />
          </Button>
        </Right>
      </Header>

      <Content>
        <Card>
          <CardItem>
            <Left>
              <Thumbnail
                source={{
                  uri:
                    "https://www.pngix.com/pngfile/middle/21-216930_react-js-development-react-native-logo-png-transparent.png"
                }}
              />
              <Body>
                <Text>ReactNative</Text>
              </Body>
            </Left>
          </CardItem>
          <CardItem cardBody>
            <Image
              source={{
                uri:
                  "https://media.licdn.com/dms/image/C4D0BAQHLyZXsUy3iaw/company-logo_200_200/0?e=2159024400&v=beta&t=S_5-JHuojwlJxNHjGWaz1dj5TkdcMOWC9Mm0rzvrYFo"
              }}
              style={{ height: 200, width: null, flex: 1 }}
            />
          </CardItem>
          <CardItem>
            <Left>
              <Button transparent>
                <Icon active type="AntDesign" name="hearto" />
              </Button>
              <Button transparent>
                <Icon active type="FontAwesome" name="comment-o" />
              </Button>
              <Button transparent>
                <Icon type="FontAwesome" name="location-arrow" />
              </Button>
            </Left>
          </CardItem>
        </Card>
      </Content>
    </Container>
  );
}

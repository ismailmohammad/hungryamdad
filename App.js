import React, {Component} from 'react';
import {ScrollView, Dimensions} from 'react-native';
import styled from 'styled-components/native';

const MainView = styled.ScrollView`
  background-color: #5F4B8B;
  flex: 1;
`;

const WelcomeView = styled.ScrollView`
  background-color: transparent;
  padding: 20px;
  flex-direction: row;
`;

const MainText = styled.Text`
  font-family: Heveltica;
  font-weight: 900;
  font-size: 22px;
  padding-top: 25px;
  padding-left: 12px;
  color: white;
`;

const SubHeading = styled.Text`
  color: #511C29;
  font-size: 17px;
  font-weight: bold;
  font-family: Arial;
  margin: 10px;
  padding: 20px;
  border-radius: 10px;
  text-align: center;
  background-color: #07e8c1;
  box-shadow: rgba(0,0,0,0.1) 5px 5px 10px;
`;

const Button = styled.Button`
  background-color: #DB324D;
  font-size: 26px;
  border-radius: 20px;
`;

const Tile = styled.View`
  background-color: #0067cd;
  border: white 4px;
  height: 200px;
  width: 200px;
  border-radius: 20px;
  margin: 5px;
`;

const JokeTitle = styled(MainText)`
  padding-right: 12px;
`;

const JokeText = styled.Text`
  padding: 12px;
  font-weight: 600;
  color: white;
`;

const { height, width } = Dimensions.get('window');

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      buttonCount: 0,
      buttons: []
    }
    console.log(height, width);
  }

  buttonClick = () => {
    let buttonCount = this.state.buttonCount + 1;
    let newButton = <Button key={"Button-" + buttonCount} title={"Button Number " + buttonCount + ". I told you not to..."} onPress={this.buttonClick}></Button>
    let buttons = this.state.buttons;
    buttons.push(newButton);
    this.setState({
      buttons: buttons,
      buttonCount: buttonCount
    })
  }

  render() {
    return (
        // API to use later on: https://icanhazdadjoke.com/api. Credit Author on completion
        <MainView>
          <MainText style={{fontSize: 30}}>Dad Joke Finder</MainText>
          <SubHeading>* Echoes 'Dad Joke Finder' in Dad *</SubHeading>
          <MainText>Hi Hungry, I'm Dad!</MainText>
          <WelcomeView horizontal={true}>
            {/* Extract into individual Components */}
            <Tile>
              <JokeTitle>Why do bees hum?</JokeTitle>
              <JokeText>Because they don't know the words.</JokeText>
            </Tile>
            <Tile style={{backgroundColor: "#FF66B3"}}>
              <JokeTitle>Why do pumpkins sit on people’s porches?</JokeTitle>
              <JokeText>They have no hands to knock on the door.</JokeText>
            </Tile>
            <Tile>
              {/* Case 2: Joke without a Leadup -> becomes the title */}
              <JokeTitle>I just broke my guitar. It's okay, I won't fret</JokeTitle>
            </Tile>
          </WelcomeView>
          <Button title="This is a Button. When you click it, it just adds another Button so don't click it." onPress={this.buttonClick}></Button>
          <MainView>
            {this.state.buttons}
          </MainView>
        </MainView>
    )
  }
}

export default App;
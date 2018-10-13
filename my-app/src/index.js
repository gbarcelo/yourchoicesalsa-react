import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import 'semantic-ui-css/semantic.min.css';
import { Container, Header, Menu, Image, Icon, Dropdown, TextArea, Grid } from 'semantic-ui-react';

class TopMenu extends React.Component {
  render() {
    const itemStyle = {
      fontFamily: "Open Sans, sans-serif",
      fontWeight: "300",
      fontSize: "16px",
      color: "#939393"
    };
    return (
        <div className={"topmenu"}><Menu borderless>
          <Container>
            <Menu.Item><Image size={"small"} src={"http://www.hawaiisalsa101.com/wp-content/uploads/2015/07/Logo.png"}/></Menu.Item>
            <Menu.Item style={itemStyle} link position={"right"}>Home</Menu.Item>
            {/*<Menu.Item style={itemStyle} link>Classes</Menu.Item>*/}
            <Dropdown item link text='Classes' style={itemStyle}>
              <Dropdown.Menu>
                <Dropdown.Item link text={'Salsa 101 (FIRST CLASS FREE)'}/>
                <Dropdown.Item link text={'Salsa 102'}/>
                <Dropdown.Item link text={'Salsa 201'}/>
              </Dropdown.Menu>
            </Dropdown>
            <Menu.Item style={itemStyle} link>Latin Party</Menu.Item>
            <Menu.Item style={itemStyle} link>Contact Us</Menu.Item>
            <Menu.Item style={itemStyle} link>About Us</Menu.Item>
            <Menu.Item style={itemStyle} link>Videos</Menu.Item>
            <Menu.Item><Icon name={"search"}/></Menu.Item>
          </Container>
        </Menu></div>
    );
  }
}

class MainBody extends React.Component {
  render () {
    return(
        <div className={"mainbody"}>
          <Header as={'h1'}>Mission</Header>
          <p>Hawaii Salsa 101 is the premier salsa dance school in Hawaii, specializing in turning raw beginners into amazing
            dancers. We are committed to serving Hawaii by providing dance education at the highest level. Our classes are
            progressive, which means that each student is put on a path that guarantees success in the shortest time frame
            possible. We believe in teaching very technical, fundamental movements and with every progressive class, building on
            these skills and growing each student’s understanding through association to past lessons.</p>
          <Header as={'h1'}>Are You A Beginner?</Header>
          <p>If you’ve never danced before our Salsa 101 class is the place to start. Whether you’re coming as a couple or have
            no partner this class puts you on the road to mastering the dance and grooving to this amazing Latin music with
            anyone!</p>
        </div>
    );
  }
}

class Footer extends React.Component {
  render() {
    return (
        <div className={"footer2-background"}>
          <Grid centered>
              <Grid.Column textAlign={"center"}>Hawaii's Premier Salsa Dance Company</Grid.Column>
          </Grid>
        </div>
    );
  }
}

class HISalsa extends React.Component {

  render() {
    return (
        <div>
          <TopMenu/>
          <div className={"headimg"}/>
          <MainBody/>
          <div className={"footer1-background"}/>
          <Footer/>
        </div>
    );
  }
}

ReactDOM.render(<HISalsa/>, document.getElementById('root'));
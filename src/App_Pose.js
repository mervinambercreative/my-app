import React from 'react';
import posed from 'react-pose';
import SplitText from 'react-pose-text';
import './App.css';

const Text = posed.div({
  hoverable: true,
  init: {
    scale: 1
  },
  hover: {
    scale: 1.2
  }
});

const charPoses = {
  exit: { opacity: 0, y: 20 },
  enter: {
    opacity: 1,
    y: 0,
    delay: ({ charIndex }) => charIndex * 30
  }
};

class Header extends React.Component{
  render() {
    return <div className="pos-f-t">
              <nav className="navbar navbar-light bg-light">
                <a className="navbar-brand" href="#">AMBER</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
              </nav>
              <div className="collapse" id="navbarToggleExternalContent">
                <div className="bg-dark p-4">
                  <h5 className="text-white h4">Collapsed content</h5>
                  <span className="text-muted">Toggleable via the navbar brand.</span>
                </div>
              </div>
            </div>
  }
}

class Content extends React.Component{
  constructor(){
    super();
    this.state = {
      name: 'This is the content area'
    };
  }
  render() {
    return <div className="container-fluid">
        <h2>{this.state.name}</h2>
      </div>
  }
}

class Footer extends React.Component{
  render() {
    const date = new Date();
    const thisYear = date.getFullYear();
    return <div className="container-fluid">
      <p>Copyright &copy; Amber Creative Pte Ltd - All Rights Reserved {thisYear}.</p>
    </div>
  }
}

class App extends React.Component {

  state = { isVisible: false };

  componentDidMount() {
    setInterval(() => {
      this.setState({
        isVisible: !this.state.isVisible
      });
    }, 2000);
  }
  
  render() {

    return (
      <div class="container-fluid">
      
      <Header />
      <Content />
      <Text className="box">Test</Text>

      <SplitText initialPose="exit" pose="enter" charPoses={charPoses}>
        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
      </SplitText>

      <Footer />
      </div>
    );
  }
}

export default App;

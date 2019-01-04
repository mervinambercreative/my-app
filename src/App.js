import React from 'react';
//import { Spring } from 'react-spring';
//import { Spring, animated, config } from 'react-spring';
import { StickyContainer, Sticky } from 'react-sticky';
import './App.css';

class Header extends React.Component{
  render() {
    return <div className="container-fluid pos-f-t header">
              <nav className="navbar navbar-light bg-light">
                
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
class Footer extends React.Component{
  render() {
    const date = new Date();
    const thisYear = date.getFullYear();
    return <div className="">
      <p>Copyright &copy; Amber Creative Pte Ltd - All Rights Reserved {thisYear}.</p>
    </div>
  }
}

class App extends React.Component {

  render() {
    return (
      <div>
      <Header />
        <div className="container-fluid" id="section1">
          <div className="row">
            <div className="col">
              <h1 style={{fontSize:'52px'}}>Lonely Planet</h1>
              <h2 style={{color:'#ccc', fontSize:'52px'}}>Amazing experiences start here</h2>
            </div>
          </div>
        </div>

        <div className="container-fluid" id="section2">
          <div className="row">
            <div className="col">&nbsp;</div>
          </div>
        </div>

        <div className="container-fluid" id="section3">
          <div className="row">
            <div className="col">
              <img src="http://localhost:3000/images/home-section2-bg.png" className="img-fluid" alt="Home Section 2 Banner" />
            </div>
            <div className="col">
              <h1 style={{fontSize:'52px'}}>Discovering a new planet</h1>
              <h2 style={{color:'#ccc', fontSize:'52px'}}>A complete overhaul of the website of the world’s most successful travel publisher.</h2>
            </div>
          </div>
        </div>

        <StickyContainer>
        <div className="container" id="section4">
        <div className="row">
        {/* Other elements can be in between `StickyContainer` and `Sticky`,
        but certain styles can break the positioning logic used. */}
        <div className="col-lg-6 col-xs-12">
        <Sticky>
          {({
            style,
            isSticky,
            wasSticky,
            distanceFromTop,
            distanceFromBottom,
            calculatedHeight
          }) => (
            <div style={style}>
            <h1 style={{fontSize:'52px'}}>It’s a big world</h1>
            <h2 style={{color:'#ccc', fontSize:'42px'}}>Finding your way</h2>
            <p>Many people’s vacation plans start with Lonely Planet. With so much content about so many destinations, we focused on helping users find what they’re looking for, even when they’re not sure what it is yet.</p>
            </div>
          )}
        </Sticky>
        </div>

        <div className="col-lg-6 col-xs-12">
          <img src="http://localhost:3000/images/home-section3-banner.jpg" className="img-fluid" alt="Home Section 3 Banner" />
        </div>
        </div>
        </div>
      </StickyContainer>

      <div class="container-fluid" id="section5">
            <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <h1>All over the map<br /><span>A better way to discover</span></h1>
                <p>The Lonely Planet map is a tool to help users discover places and activities they didn’t know they were looking for.</p>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12">
                <img src="http://localhost:3000/images/map.jpg" className="img-fluid" alt="Home Section 5 Banner" />
              </div>
            </div>
            </div>
      </div>

      <StickyContainer id="section6">
        <div className="container">
        <div className="row">
        {/* Other elements can be in between `StickyContainer` and `Sticky`,
        but certain styles can break the positioning logic used. */}

        <div className="col-lg-6 col-xs-12">
          <img src="http://localhost:3000/images/home-section6-banner.jpg" className="img-fluid" alt="Home Section 5 Banner" />
        </div>
        <div className="col-lg-6 col-xs-12">
        <Sticky>
          {({
            style,
            isSticky,
            wasSticky,
            distanceFromTop,
            distanceFromBottom,
            calculatedHeight
          }) => (
            <div style={style}>
              <h1 style={{fontSize:'52px'}}>Discovering a new planet</h1>
              <h2 style={{color:'#ccc', fontSize:'42px'}}>A complete overhaul of the website of the world’s most successful travel publisher.</h2>
            </div>
          )}
        </Sticky>
        </div>

        </div>
        </div>
      </StickyContainer>
      <Footer />
      </div>
    );
  }
}

export default App;

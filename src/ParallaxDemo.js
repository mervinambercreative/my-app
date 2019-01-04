import React from 'react';
//import { Spring } from 'react-spring';
//import { Spring, animated, config } from 'react-spring';
import './App.css';

import { Parallax, ParallaxLayer } from './Parallax'

export {
  Parallax,
  ParallaxLayer,
}

const url = (name, wrap = false) =>
  `${
    wrap ? 'url(' : ''
  }https://awv3node-homepage.surge.sh/build/assets/${name}.svg${
    wrap ? ')' : ''
  }`

class Header extends React.Component{
  render() {
    return <div className="pos-f-t">
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
    return <div className="">
      <p>Copyright &copy; Amber Creative Pte Ltd - All Rights Reserved {thisYear}.</p>
    </div>
  }
}

class App extends React.Component {

  state = { y: 0 }
  el = React.createRef()
  spring = React.createRef()
  setY = () => this.setState({ y: Math.round(Math.random() * 750) + 50 })
  // User interaction should stop animation in order to prevent scroll-hijacking
  // Doing this on onWheel isn't enough, but just to illustrate ...
  stop = () => this.spring.current.stop()

  render() {
    const y = this.el.current ? this.el.current.scrollTop : 0
    return (
      <div style={{ width: '100%', height: '100%', background: '#253237' }}>
        <Parallax ref={ref => (this.parallax = ref)} pages={3}>
          <ParallaxLayer
            offset={1}
            speed={1}
            style={{ backgroundColor: '#805E73' }}
          />
          <ParallaxLayer
            offset={2}
            speed={1}
            style={{ backgroundColor: '#87BCDE' }}
          />

          <ParallaxLayer
            offset={0}
            speed={0}
            factor={3}
            style={{
              backgroundImage: url('stars', true),
              backgroundSize: 'cover',
            }}
          />

          <ParallaxLayer
            offset={1.3}
            speed={-0.3}
            style={{ pointerEvents: 'none' }}>
            <img alt="img1"
              src={url('satellite4')}
              style={{ width: '15%', marginLeft: '70%' }}
            />
          </ParallaxLayer>

          <ParallaxLayer offset={1} speed={0.8} style={{ opacity: 0.1 }}>
            <img alt="img2"
              src={url('cloud')}
              style={{ display: 'block', width: '20%', marginLeft: '55%' }}
            />
            <img alt="img3"
              src={url('cloud')}
              style={{ display: 'block', width: '10%', marginLeft: '15%' }}
            />
          </ParallaxLayer>

          <ParallaxLayer offset={1.75} speed={0.5} style={{ opacity: 0.1 }}>
            <img alt="img4"
              src={url('cloud')}
              style={{ display: 'block', width: '20%', marginLeft: '70%' }}
            />
            <img alt="img5"
              src={url('cloud')}
              style={{ display: 'block', width: '20%', marginLeft: '40%' }}
            />
          </ParallaxLayer>

          <ParallaxLayer offset={1} speed={0.2} style={{ opacity: 0.2 }}>
            <img alt="img6"
              src={url('cloud')}
              style={{ display: 'block', width: '10%', marginLeft: '10%' }}
            />
            <img alt="img7"
              src={url('cloud')}
              style={{ display: 'block', width: '20%', marginLeft: '75%' }}
            />
          </ParallaxLayer>

          <ParallaxLayer offset={1.6} speed={-0.1} style={{ opacity: 0.4 }}>
            <img alt="img8"
              src={url('cloud')}
              style={{ display: 'block', width: '20%', marginLeft: '60%' }}
            />
            <img alt="img9"
              src={url('cloud')}
              style={{ display: 'block', width: '25%', marginLeft: '30%' }}
            />
            <img alt="img10"
              src={url('cloud')}
              style={{ display: 'block', width: '10%', marginLeft: '80%' }}
            />
          </ParallaxLayer>

          <ParallaxLayer offset={2.6} speed={0.4} style={{ opacity: 0.6 }}>
            <img alt="img11"
              src={url('cloud')}
              style={{ display: 'block', width: '20%', marginLeft: '5%' }}
            />
            <img alt="img12"
              src={url('cloud')}
              style={{ display: 'block', width: '15%', marginLeft: '75%' }}
            />
          </ParallaxLayer>

          <ParallaxLayer
            offset={2.5}
            speed={-0.4}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              pointerEvents: 'none',
            }}>
            <img alt="img13" src={url('earth')} style={{ width: '60%' }} />
          </ParallaxLayer>

          <ParallaxLayer
            offset={2}
            speed={-0.3}
            style={{
              backgroundSize: '80%',
              backgroundPosition: 'center',
              backgroundImage: url('clients', true),
            }}
          />

          <ParallaxLayer
            offset={0}
            speed={0.1}
            onClick={() => this.parallax.scrollTo(1)}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <img alt="img14" src={url('server')} style={{ width: '20%' }} />
          </ParallaxLayer>

          <ParallaxLayer
            offset={1}
            speed={0.1}
            onClick={() => this.parallax.scrollTo(2)}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <img alt="img15" src={url('bash')} style={{ width: '40%' }} />
          </ParallaxLayer>

          <ParallaxLayer
            offset={2}
            speed={-0}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
            onClick={() => this.parallax.scrollTo(0)}>
            <img alt="img16" src={url('clients-main')} style={{ width: '40%' }} />
          </ParallaxLayer>
        </Parallax>
      </div>
    );
  }
}

export default App;

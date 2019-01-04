import React from 'react';
import './App.css';
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
    return <div className="container-fluid">
      <p>Copyright &copy; Amber Creative Pte Ltd - All Rights Reserved {thisYear}.</p>
    </div>
  }
}

class App extends React.Component {
  render() {
    return (
      <div>
      <Header />
      <Content />
      <Footer />
      </div>
    );
  }
}

export default App;

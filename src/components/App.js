import React from 'react';
import Slider  from 'rc-slider';
import Array from './Array';
import Input from './Input';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.setArray = this.setArray.bind(this);
    this.state = {
      array: [1, 56, 3, 23]
    }
 }

 setArray(array) {
   this.setState({array: array});
 }

  render() {
   return (
      <div className="App">
        <h1 className="logo">visu<span>arr</span></h1>
        <main>
          <Slider className="rc-slider-i" />
          <Array array={this.state.array} />
          <Slider className="rc-slider-j" />
        </main>
        <Input setArray={this.setArray} />
      </div>
    ); 
  }
}

export default App;

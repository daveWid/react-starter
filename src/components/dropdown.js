import React from 'react';

class Dropdown extends React.Component {
  render() {
    return <select name={this.props.name} onChange={this.handleChange}>
            <option value="">-- Select State --</option>
    {this.props.data.map(function(item, index){
      return <option value={item.abbreviation} key={index}>{item.name}</option>;
    })}
    </select>;
  }

  handleChange(event) {
    console.log("State changed: " + event.target.value);
  }
}

export default Dropdown;

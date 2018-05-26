import React from 'react';

class Autocomplete extends React.Component {
  constructor(props) {
    super(props);
    this.state = {query: ""};
    this.updateList = this.updateList.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  
  render() {
    return(
      <div className="autocomplete-container">
        Autocomplete
        <input type="text" value={this.state.query} onInput={this.updateList}/>
        <ul className="autocomplete-list">
          {this.props.names.map((nameObj, idx) =>
            (nameObj.name.toLowerCase()).startsWith(this.state.query.toLowerCase()) ? (
              <li className="autocomplete-list-item" key={idx} onClick={this.handleChange}>{nameObj.name}</li>
          ) : ""
          )}
        </ul>
      </div>
    );
  }

  handleChange(e) {
    this.setState({ query: e.target.innerText });
  }

  updateList(e) {
    this.setState({ query: e.target.value });
  }
}

export default Autocomplete;
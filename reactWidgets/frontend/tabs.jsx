import React from 'react';

class Tabs extends React.Component {
  constructor(props){
    super(props);
    this.state = { tabIndex: 0 };
    this.switchTab = this.switchTab.bind(this);
  }

  render() {
    const article = this.props.tabs[this.state.tabIndex].content;
    // debugger
    return (
      <div className="tabs">
        <ul className="tabs-headers">
          {this.props.tabs.map((tab, idx) =>
            <h1 key={idx} onClick={() => this.switchTab(idx)}>{tab.title}</h1>)}
        </ul>
        <article className="tabs-article">{article}</article>
      </div>
    );
  }

  switchTab(tabIndex) {
    this.setState({ tabIndex });
  }
}

export default Tabs;

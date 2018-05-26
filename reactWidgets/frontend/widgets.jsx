import React from 'react';
import ReactDOM from 'react-dom';
import Main from './main';
import Clock from './clock';
import Tabs from './tabs';

const tabArr = [
  {title: "Tab One", content: "Content One"},
  {title: "Tab Two", content: "Content Two"},
  {title: "Tab Three", content: "Content Three"}
];

document.addEventListener('DOMContentLoaded', () => {
  let groot = document.getElementById('groot');
  ReactDOM.render(
    <div>
      <Clock />
      <Tabs tabs={tabArr} />
    </div>,
    groot
  );

});

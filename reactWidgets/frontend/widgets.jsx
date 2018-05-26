import React from 'react';
import ReactDOM from 'react-dom';
import Main from './main';
import Clock from './clock';
import Tabs from './tabs';
import Weather from './weather';
import Autocomplete from './autocomplete';

const tabArr = [
  { title: "Happy", content: "If I paint something, I don't want to have to explain what it is. Maybe there was an old trapper that lived out here and maybe one day he went to check his beaver traps, and maybe he fell into the river and drowned. We don't have anything but happy trees here. We have all at one time or another mixed some mud. Think about a cloud. Just float around and be there."},
  { title: "Little", content: "This is your creation - and it's just as unique and special as you are. Don't be afraid to make these big decisions. Once you start, they sort of just make themselves. Be brave. Get tough with it, get strong."},
  { title: "Trees", content: "Learn when to stop. This present moment is perfect simply due to the fact you're experiencing it. This is truly an almighty mountain. God gave you this gift of imagination. Use it. And that's when it becomes fun - you don't have to spend your time thinking about what's happening - you just let it happen."}
];

const namesArr = [
  {name: "Ula Acosta"},
  {name: "Lili Horwitz"},
  {name: "Janey Nock"},
  {name: "Vinnie Sharlow"},
  {name: "Valene Canela"},
  {name: "Brittany Riney"},
  {name: "Daron Rakow"},
  {name: "Herb Linquist"},
  {name: "Ariane Cabral"},
  {name: "Dominga Chamblee"},
  {name: "Shena Paterno"},
  {name: "Sheilah Tefft"},
  {name: "Lakia Cogan"},
  {name: "Rufus Mitzel"},
  {name: "Colette Lindberg"},
  {name: "Tess Nielson"},
  {name: "Wiley Kaup"},
  {name: "Tesha Millikin"},
  {name: "Robbyn Mckelvey"},
  {name: "Mickey Munez"}
];

document.addEventListener('DOMContentLoaded', () => {
  // debugger;
  // console.log(process.env.REACT_APP_API_KEY);
  let groot = document.getElementById('groot');
  ReactDOM.render(
    <div>
      <Clock />
      <div className="tabs-weather-container">
        <Tabs tabs={tabArr} />
        <Weather />
      </div>
      <Autocomplete names={namesArr}/>
    </div>,
    groot
  );

});

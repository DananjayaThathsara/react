import React from 'react';
import ReactDOM from 'react-dom';

setInterval(function () {
  function clock() {
    return <h3>Now Time is : {new Date().toLocaleTimeString()}</h3>
  }
  ReactDOM.render(
    clock(),document.getElementById('root')
  );
},1000)

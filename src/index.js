import React from 'react';
import ReactDOM from 'react-dom';

function test(name,age){
return <div>
<h1>My Name is {name}</h1>
<h2>My Age is {age}</h2>
</div>
}

ReactDOM.render(
  test('dana','25'),document.getElementById('root')
);

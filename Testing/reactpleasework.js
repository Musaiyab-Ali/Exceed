import React from 'react';
import ReactDOM from 'react-dom';

class MyComponentClass extends React.Component{
    render(){
        return <h1>Testing</h1>
    };
};

ReactDOM.render(<MyComponentClass />,
    document.getElementById(''));
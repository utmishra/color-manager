import React from 'react';
import ReactDOM from 'react-dom';
import Container from './';

function App() {
    return (
        <div className="container">
            <Header />
            <Body />
        </div>
    );
}

export default App;

if (document.getElementById('app')) {
    ReactDOM.render(<App />, document.getElementById('app'));
}

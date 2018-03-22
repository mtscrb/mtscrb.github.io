// @flow

import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

const PixelSpinner = styled.div`
    background: ${props => props.top};
    width: 10px;
    height: 10px;
    transition: box-shadow 0.3s ease-in-out;

    box-shadow: 10px 10px ${props => props.right}, -10px 10px ${props => props.left},
        0px 20px ${props => props.bottom};
`;

class App extends React.Component {
    state = {
        top: 'black',
        left: 'orange',
        right: 'red',
        bottom: 'blue',
    };
    componentDidMount() {
        console.log('tewst');
        setInterval(() => {
            console.log('test');
            const { top, right, left, bottom } = this.state;
            this.setState({
                top: left,
                right: top,
                bottom: right,
                left: bottom,
            });
        }, 400);
    }
    render = () => <PixelSpinner {...this.state} />;
}

ReactDOM.render(<App />, document.getElementById('root'));

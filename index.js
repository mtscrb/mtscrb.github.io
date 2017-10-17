import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import styled from 'styled-components';
import { Transition } from 'react-transition-group'

const grid = 4;

const Root = styled.div`
    overflow: hidden;
    background-color: #292D3E;
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center; /*centers items on the line (the x-axis by default)*/
    align-items: center; /*centers items on the cross-axis (y by default)*/
`;

const Name = styled.div`
    display: inline-flex;
    margin-right: ${grid*2}px;
`

const HtmlTag = styled.span`
    display: inline-flex;
    opacity: ${props => props.touched ? 1 : 0};
    transition: opacity 200ms ease-in;
    font-family: hack;
    font-size: ${4*10}px;
    color: #82AAFF;
    &:after {
        content: "${props => props.opened ? '<' : '/>'}"
    }
`

const Content = styled.div`
    display: inline-flex;
    user-select: none;
    font-family: hack;
    font-size: ${4*10}px;
    color: #ECEFF1;
    &:hover ${HtmlTag} {
        opacity: 1;
    }
`

class App extends React.Component {
    state = {
        touched: false,
    }
    render() {
        return (
            <Root>
                <Content
                    onTouchStart={() => this.setState({ touched: true })}
                    onTouchEnd={() => this.setState({ touched: false })}
                >
                    <HtmlTag touched={this.state.touched} opened />
                    <Name>matias</Name>
                    <HtmlTag touched={this.state.touched} />
                </Content>
            </Root>
        );
    }
}

ReactDOM.render(
  <App />,
  document.getElementById('root'),
);

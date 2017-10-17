import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import styled from 'styled-components';

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
    font-family: hack;
    font-size: ${4*10}px;
    color: #ECEFF1;
`

const HtmlTag = styled.span`
    display: inline-flex;
    visibility: ${props => props.touched ? 'visible' : 'hidden'};
    font-family: hack;
    font-size: ${4*10}px;
    color: #82AAFF;
`

const Content = styled.div`
    display: inline-flex;
    user-select: none;
    &:hover ${HtmlTag} {
        visibility: visible;
    }
`

class App extends React.Component {
    state = {
        touched: false,
    }
    render() {
        return (
            <Root>
                <Name>
                    <Content
                        onTouchStart={() => this.setState({ touched: true })}
                        onTouchCancel={() => this.setState({ touched: false })}
                    >
                        <HtmlTag touched={this.state.touched}>{'<'}</HtmlTag>
                            matias
                        <HtmlTag touched={this.state.touched}>{'/>'}</HtmlTag>
                    </Content>
                </Name>
            </Root>
        );
    }
}

ReactDOM.render(
  <App />,
  document.getElementById('root'),
);

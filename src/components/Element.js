import React, { Component } from 'react';
import styled from 'styled-components';

export class Element extends Component {


    render() {

        return (
            <>
                <Capitalize>
                    Count Effect {this.props.count}
                    Data Effect {this.props.data}
                </Capitalize>
            </>
        )
    }
}

const Capitalize = styled.h1`
    text-transform: capitalize;
    `;
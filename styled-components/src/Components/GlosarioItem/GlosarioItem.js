import React from 'react';
import styled from 'styled-components'

export const Title = styled.h2`
color: black;
margin: 0;
`;

export const SubTitle = styled.h3`
color: gray;
margin: 0;
color: ${props => props.color};
`;

export const Circle = styled.span`
  height: 20px;
  width: 20px;
  background-color: ${props => props.color};
  border-radius: 50%;
  display: inline-block;
  margin-top: 10px;
`;

const GlosarioItem = ({data}) => {

    return (
        <div>
            <Circle color={data.color}/>
            <div style={{marginLeft: "35px", marginTop: "-32px"}}>
                <Title>{data.title}</Title>
                <SubTitle color={data.resources ? data.color : null}>{data.resources > 1 ? data.resources + "     resources" : "No resources" }</SubTitle>
            </div>
        </div>
    );



}
export default GlosarioItem;
import { TaskItem } from "@/SharedStyledComponents";

import styled from "styled-components";



const ResultLabel = styled.label`
  padding: 0.5rem;
  text-align: left;
`;

const ResultInput = styled.input`
width: 4rem;
height: 1.5rem;
font-size: 0.95rem;
`;

export default function PostTaskFeedback({x, y, z, calcType})

{
  return (<TaskItem><ResultLabel htmlFor="resultInput"  ><ResultInput type="number" id="resultInput" name="resultInput" /> </ResultLabel>{z}</TaskItem>) ;

    
}


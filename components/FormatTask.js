import { TaskItem } from "@/SharedStyledComponents";

import styled from "styled-components";

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: black;
`;

const ResultLabel = styled.label`
  padding: 0.5rem;
  text-align: left;
`;

const ResultInput = styled.input`
width: 4rem;
height: 1.5rem;
font-size: 0.95rem;
`;

export default function FormatTask({x, y, z, calcType, showResult})

{if (calcType === "Addition") {
  return (<TaskItem>{x} + {y} = <ResultLabel htmlFor="resultInput"  ><ResultInput type="number" id="resultInput" name="resultInput" /> </ResultLabel></TaskItem>);
} else if(calcType === "Subtraction"){
  return (<TaskItem>{z} - {x} = <ResultLabel htmlFor="resultInput"  ><ResultInput type="number" id="resultInput" name="resultInput"/> </ResultLabel></TaskItem>) ;
}
    
}


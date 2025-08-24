import styled from "styled-components";

const StyledHeadline1 = styled.h1`
 text-align: center;
  font-weight: 700;
  line-height: 2rem;
  font-size: 2rem;
  margin: 0.75rem 0 0;
`;

const StyledHeadline2 = styled.h2`
 text-align: center;
  font-weight: 500;
  line-height: 1.5rem;
  font-size: 1.4rem;
  margin: 0.75rem 1rem 1rem;
`;


//Lists
const TaskItem = styled.li`
  padding: 0.2rem;
  margin: 0.5rem;
`;

//Wrappers
const FlexRowWrapper = styled.li`
  display: flex;
  flex-direction: row; 
 
`;

export {
    FlexRowWrapper, StyledHeadline1, StyledHeadline2, TaskItem
};
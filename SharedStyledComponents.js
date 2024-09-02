import styled from "styled-components";

const StyledHeadline1 = styled.h1`
 text-align: center;
  font-weight: 700;
  line-height: 2rem;
  font-size: 1.5rem;
  padding-bottom: 1rem;
`;

const StyledHeadline2 = styled.h2`
 text-align: left;
  font-weight: 500;
  line-height: 1.5rem;
  font-size: 1.2rem;
  margin: 1.5rem 1rem 0;
`;


//Lists
const TaskItem = styled.li`
padding: 0.2rem;
margin: 0.5rem;
`;

export {
    StyledHeadline1, StyledHeadline2, TaskItem
};
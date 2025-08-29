import FormatTask from "@/components/FormatTask";
import { initialSheetState } from "@/initialdata";
import { generateAdditionArray, generateMultiplicationArray, generateSheetArray } from "@/generators";
import { FlexRowWrapper, StyledHeadline1, StyledHeadline2 } from "@/SharedStyledComponents";
import { useEffect, useState } from "react";

import styled from "styled-components";
import PostTaskFeedback from "@/components/PostTaskFeedback";

const Header = styled(FlexRowWrapper)`
  margin: 0.5rem;
  padding: 0.5rem;
  width: 63vw;
  background-color: #22ee9a;
  border-radius: 0.5rem;
  `;

const SheetSection = styled.section`
  display: grid;
  grid-template-columns: 8fr 4fr;
  grid-template-rows: 1fr 13fr 2fr;
  color: var(--main-dark);
  gap: 0.5rem;
  width: 80vw;
  left: 10%;
  min-width: 300px;
  max-width: 1000px;
  max-height: 600px;
  margin: 0.5rem;
  border-radius: 6px;
`;
const GridElement = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 6px;
  padding: 0.5rem;
  min-height: 64px;
  height: 100%;
  width: 100%;
  align-content: center;
  align-items: center;
  background-color: lightgrey;
  border: 1px solid black;
`;

const StandardParagraph = styled.p`
text-align: left;
margin: 0.5 rem;
`;

const UnorderedList = styled.ul`
list-style-type: none;
padding: 0;
margin: 0;
font-size: 0.9 rem;
`;

// needed?
const StyledForm = styled.form`
  display: flex;
  flex-direction: row;
  justify-content: start;
  color: black;
`;

const OptionsLabel = styled.label`
  padding: 0.3rem;
  text-align: left;
  color: red;
`;


export default function HomePage({ }) {
  const [sheetParameters, setSheetParameters] = useState(initialSheetState);
  const { numberOfTasks, minimum, maximum, sheetMode, taskParameters } = sheetParameters;
  // const { taskNumber, calcType } = taskParameters;
  // console.log("sheetParameters line37", sheetParameters);

  // wird abhängig von button bzw state oder bleibt als initial?
  useEffect(() => {
    setSheetParameters({ ...sheetParameters, taskParameters: generateAdditionArray(10, 0, 10, sheetMode) });
    // console.log(taskParameters);
  }, []);
  
  function handleSelect(newSheetMode, numberOfTasks) {
    console.log("handled select");
    const newTaskParameters = generateSheetArray (numberOfTasks, minimum, maximum, newSheetMode);
    setSheetParameters({ ...sheetParameters, sheetMode: newSheetMode, taskParameters: newTaskParameters });
  }
 
  function handleAmount(newAmount) {
    console.log("handled amount: ", newAmount);
    const newTaskParameters = generateSheetArray (newAmount, minimum, maximum, sheetMode);
  setSheetParameters({...sheetParameters, numberOfTasks: newAmount, taskParameters: newTaskParameters  })
}

//old logic - keep?
  const taskArray = [...Array(numberOfTasks+1).keys()].slice(1);
 
  return (
    <main>
      <Header>
        <StyledHeadline1>LiMA</StyledHeadline1>
        <StyledHeadline2>Little Math App</StyledHeadline2>
      </Header>
      {/* <StandardParagraph> </StandardParagraph> */}
      <StyledForm>Options:<br></br>
        <OptionsLabel htmlFor="typeOC"  >Type of calculation: <select aria-label="Choose type of calculation" id="typeOC" 
        name="typeOC" value={sheetMode} onChange={(event) => handleSelect(event.target.value)} >
        <option value="">--Please choose a calculation--</option>
        <option value="Addition">Addition</option>
        <option value="Subtraction">Subtraction</option>
        <option value="Multiplication">Multiplication</option>
        <option value="Division">Division</option>
        {/* <option value="Presets">Presets</option> */}
      </select></OptionsLabel> 
        {/* <OptionsLabel htmlFor="numberOfTasks"  >Number of tasks: <input  aria-label="Adjust number of tasks" id="numberOfTasks" 
      name="numberOfTasks" type="number" value={numberOfTasks} onChange={(event) => handleAmount(event.target.value)} min="1" max="200" /></OptionsLabel> */}
      <OptionsLabel htmlFor="range-minimum"  >Range from: <input  aria-label="Adjust minimal number" id="range-minimum" 
      name="range-minimum" type="number" min="0" max="20"></input></OptionsLabel>
       <OptionsLabel htmlFor="range-maximum"  >up to: <input  aria-label="Adjust minimal number" id="range-maximum" 
          name="range-maximum" type="number" min="10" max="200" ></input></OptionsLabel>
        <button type="button" onClick={()=>console.log("go")}>Go</button>
      </StyledForm>
      <SheetSection>
        <GridElement>
          <StyledHeadline2>New {sheetMode} sheet </StyledHeadline2>
        </GridElement>
        <GridElement>
          <StyledHeadline2>Result / Control</StyledHeadline2>
        </GridElement>
        <GridElement>
          <UnorderedList> {taskParameters.map((task) => <FormatTask key={task.taskId} calcType={sheetMode} x={task.x} y={task.y} z={task.z} taskId={task.taskId} />)}
          </UnorderedList>
        </GridElement>
        <GridElement>
          <UnorderedList> {taskParameters.map((task) => <PostTaskFeedback key={"P" + task.taskId} calcType={sheetMode} y={task.y} z={task.z} />)}
          </UnorderedList>
        </GridElement>
        <GridElement>
        </GridElement>
      </SheetSection>

    



    </main>
  );
}

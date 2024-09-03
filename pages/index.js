import Addition from "@/components/Addition";
import Division from "@/components/Division";
import Multiplication from "@/components/Multiplication";
import Subtraction from "@/components/Subtraction";
import FormatTask from "@/components/FormatTask";
import { initialSheetState } from "@/initialdata";
import { TaskItem, StyledHeadline1, StyledHeadline2 } from "@/SharedStyledComponents";
import { useEffect, useState } from "react";


import Chance from "chance";
const chance = new Chance();


import styled from "styled-components";


const SheetSection = styled.section`
  display: grid;
  grid-template-columns: 8fr 4fr;
  grid-template-rows: 1fr 14fr 1fr;
  color: var(--main-dark);
  gap: 0.5rem;
  width: 90vw;
  min-width: 300px;
  max-width: 1200px;
  max-height: 1200px;
  margin: 0;
  align-items: start;
  border-radius: 6px;
  justify-content: center;
`;
const GridElement = styled.div`
  display: flex;;
  flex-direction: column;
  border-radius: 6px;
  padding: 0.5rem;
  min-height: 110px;
  height: 100%;
  width: 100%;
  align-content: center;
  align-items: center;
  background-color: lightgrey;
  border: 1px solid black;
`;


// needed?
const StyledForm = styled.form`
  display: flex;
  flex-direction: row;
  justify-content: start;
  color: black;
`;

const OptionsLabel = styled.label`
  padding: 0.5rem;
  text-align: left;
  color: red;
`;



export default function HomePage({}) {
  const [sheetParameters, setSheetParameters] = useState(initialSheetState);
  const { numberOfTasks, minimum, maximum, sheetMode, taskParameters } = sheetParameters;
  const { taskNumber, calcType } = taskParameters;
  console.log("sheetParameters line37", sheetParameters);

//new logic to test, move out of this file after success

function generateAdditionArray (amount, minimum, maximum) {
  const protoArray = [...Array(amount+1).keys()].slice(1);
  const additionArray = protoArray.map((number) => {
    const z = chance.integer({ min: minimum, max: maximum });
    const x = chance.integer({ min: minimum, max: z });
    const y = z - x;
    const taskId = `a.${x}.${y}.${z}.`
    const taskObject = {taskNumber: number, calcType: "Addition", x, y, z, taskId};
    return taskObject;
  });
  return additionArray;
  
}
  // wird abhängig von button bzw state or stays as initial?
  useEffect(() => {
    setSheetParameters({ ...sheetParameters, taskParameters: generateAdditionArray(10, 0, 50) });
    // console.log(taskParameters);
   }, []);
  
 
//old logic
  const taskArray = [...Array(numberOfTasks+1).keys()].slice(1);
 
  return (
    <main>
      <StyledHeadline1>Hello math lover (hater)</StyledHeadline1>
      <p>Options: </p>
      <StyledForm><OptionsLabel htmlFor="typeOC"  >Type of calculation: <select  aria-label="Choose type of calculation" id="typeOC" 
      name="typeOC" value={calcType} onChange={(event) => console.log(sheetMode)} >  <option value="">--Please choose a calculation--</option>
     {/* setSheetParameters({...sheetParameters, calcType: event.target.value}) */}
        <option value="Addition">Addition</option>
      <option value="Subtraction">Subtraction</option>
        <option value="Multiplication">Multiplication</option>
        <option value="Division">Division</option>
        <option value="Presets">Presets</option>
      </select></OptionsLabel> 
        <OptionsLabel htmlFor="numberOfTasks"  >Number of tasks: <input  aria-label="Adjust number of tasks" id="numberOfTasks" 
      name="numberOfTasks" type="number" min="1" max="20" /></OptionsLabel>
      <OptionsLabel htmlFor="range-minimum"  >Range from: <input  aria-label="Adjust minimal number" id="range-minimum" 
      name="range-minimum" type="number" min="0" max="20"></input></OptionsLabel>
       <OptionsLabel htmlFor="range-maximum"  >up to: <input  aria-label="Adjust minimal number" id="range-maximum" 
      name="range-maximum" type="number" min="10" max="200" ></input></OptionsLabel>
      </StyledForm>
      <SheetSection>
      <GridElement>
      <StyledHeadline2>New {sheetMode} test </StyledHeadline2>
      <p>Type of calculation (control sheetmode): {sheetMode}</p></GridElement>   <GridElement>empty</GridElement>
      <GridElement> <ol> {taskParameters.map((task) => <FormatTask key={task.taskId} calcType={task.calcType} x={task.x} y={task.y} z={task.z} />)}</ol>
      </GridElement> <GridElement>Result / Control</GridElement>  <GridElement></GridElement></SheetSection>
      <StyledHeadline2>Manual test Subtraction</StyledHeadline2>
      <p>Type of calculation (manual ): Subtraction</p>
      <ol> {taskParameters.map((task) => <FormatTask key={"s"+task.taskId} calcType="Subtraction" x={task.x} y={task.y} z={task.z} />)}</ol>
    
{/* 
      <StyledHeadline2>Subtraction test </StyledHeadline2> 
    <ol> 
    <li><Subtraction minimum={minimum} maximum={maximum}/></li>
    <li><Subtraction minimum maximum={30}/></li>
    <li><Subtraction minimum={17} maximum={33}/></li>
    <li><Subtraction minimum={20} maximum={50}/></li></ol>

    <h2>Multiplication test </h2> 
    <ol> 
    <li><Multiplication minimum={minimum} maximum={100}/></li>
    <li><Multiplication minimum maximum={80}/></li>
    <li><Multiplication minimum={2} maximum={150}/></li>
    <li><Multiplication minimum={2} maximum={200}/></li></ol>

    <h2>Division test </h2> 

    <ol> {taskArray.map((number) => <Division key={"d"+ number} minimum maximum={200}  />)} </ol> */}


    </main>
  );
}

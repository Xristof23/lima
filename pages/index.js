import Addition from "@/components/Addition";
import Division from "@/components/Division";
import Multiplication from "@/components/Multiplication";
import Subtraction from "@/components/Subtraction";
import FormatTask from "@/components/FormatTask";
import { TaskItem, StyledHeadline1, StyledHeadline2 } from "@/SharedStyledComponents";
import { useEffect, useState } from "react";

import styled from "styled-components";

import Chance from "chance";
const chance = new Chance();

import { initialSheetState } from "@/initialdata";

console.log("initialSheetState", initialSheetState);


const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: black;
`;

const OptionsLabel = styled.label`
  padding: 0.5rem;
  text-align: left;
  color: red;
`;



export default function HomePage({}) {
  // const [taskCount, setTaskCount] = useState(0);
  const [sheetParameters, setSheetParameters] = useState(initialSheetState);
  const { numberOfTasks, minimum, maximum, type, taskParameters } = sheetParameters;


//new logic to test, move out of this file after success

function generateAdditionArray (amount, minimum, maximum) {
  const protoArray = [...Array(amount+1).keys()].slice(1);
  const additionArray = protoArray.map((number) => {
    const z = chance.integer({ min: minimum, max: maximum });
    const x = chance.integer({ min: minimum, max: z });
    const y = z - x;
    const taskId = `a.${x}.${y}.${z}.`
    const taskObject = {taskNumber: number, type: "addition", x, y, z, taskId};
    return taskObject;
  });
  return additionArray;
  
}
  // wird abhängig von button bzw state
  useEffect(() => {
    setSheetParameters({ ...sheetParameters, taskParameters: generateAdditionArray(10, 0, 50) });

   }, []);
  
 
//old logic
  const taskArray = [...Array(numberOfTasks+1).keys()].slice(1);
 
  return (
    <main>
      <StyledHeadline1>Hello math lover (hater)</StyledHeadline1>
      <p>Options: </p>
      <StyledForm><OptionsLabel htmlFor="typeOC"  >Type of calculation: <select  aria-label="Choose type of calculation" id="typeOC" 
      name="typeOC" >  <option value="">--Please choose a calculation--</option>
      <option value="Addition">Addition</option>
      <option value="Subtraction">Subtraction</option>
      <option value="Multiplication">Multiplication</option></select></OptionsLabel> 
        <OptionsLabel htmlFor="numberOfTasks"  >Number of tasks: <input  aria-label="Adjust number of tasks" id="numberOfTasks" 
      name="numberOfTasks" type="number" min="1" max="20" /></OptionsLabel>
      <OptionsLabel htmlFor="range-minimum"  >Range from: <input  aria-label="Adjust minimal number" id="range-minimum" 
      name="range-minimum" type="number" min="0" max="20"></input></OptionsLabel>
       <OptionsLabel htmlFor="range-maximum"  >up to: <input  aria-label="Adjust minimal number" id="range-maximum" 
      name="range-maximum" type="number" min="10" max="200" ></input></OptionsLabel>
      </StyledForm>

      <StyledHeadline2>New {type} test </StyledHeadline2>
      <ol> {taskParameters.map((task) => <FormatTask key={task.taskId} x={task.x} y={task.y} z={task.z} />)}</ol>
     
    

    <h2>Subtraction test </h2> 
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

    <ol> {taskArray.map((number) => <Division key={"d"+ number} minimum maximum={200}  />)} </ol>


    </main>
  );
}

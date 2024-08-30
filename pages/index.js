import Addition from "@/components/Addition";
import Division from "@/components/Division";
import Multiplication from "@/components/Multiplication";
import Subtraction from "@/components/Subtraction";
import { TaskItem, StyledHeadline1, StyledHeadline2 } from "@/SharedStyledComponents";
import { useState } from "react";
import styled from "styled-components";


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
  const [sheetParameters, setSheetParameters] = useState({numberOfTasks: 10, minimum: 0, maximum: 50, type: ["Addition"]});
  const {numberOfTasks, minimum, maximum, type} = sheetParameters;
  

  const taskArray = [...Array(numberOfTasks+1).keys()].slice(1);
 
  return (
    <main>
      <StyledHeadline1>Hello math lover (hater)</StyledHeadline1>
      <StyledHeadline2>Options: </StyledHeadline2>
      <form><OptionsLabel htmlFor="typeOC"  >Type of calculation: <select  aria-label="Choose type of calculation" id="typeOC" 
      name="typeOC" >  <option value="">--Please choose a calculation--</option>
      <option value="Addition">Addition</option>
      <option value="Subtraction">Subtraction</option>
      <option value="Multiplication">Multiplication</option></select></OptionsLabel> 
        <OptionsLabel htmlFor="numberOfTasks"  >Number of tasks: <input  aria-label="Adjust number of tasks" id="numberOfTasks" 
      name="numberOfTasks" type="number" min="1" max="20" ></input></OptionsLabel>
      <OptionsLabel htmlFor="range-minimum"  >Range from: <input  aria-label="Adjust minimal number" id="range-minimum" 
      name="range-minimum" type="number" min="0" max="20"></input></OptionsLabel>
       <OptionsLabel htmlFor="range-maximum"  >up to: <input  aria-label="Adjust minimal number" id="range-maximum" 
      name="range-maximum" type="number" min="10" max="200" ></input></OptionsLabel>
      </form>
      <h2>{type} </h2>
      <ol> {taskArray.map((number) =>  <Addition key={number} minimum maximum={80}/>)}</ol>
      <h2>Addition test </h2> 
  
  <ol> {taskArray.map((number) =>  <Addition key={"a"+ number} minimum maximum={200}/>)}</ol>
  
  

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

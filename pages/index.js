import Addition from "@/components/Addition";
import Subtraction from "@/components/Subtraction";
import { useState } from "react";

export default function HomePage({}) {
  // const [taskCount, setTaskCount] = useState(0);
  const [sheetParameters, setSheetParameters] = useState({numberOfTasks: 10, minimum: 0, maximum: 20, types: ["addition"]});
  const {numberOfTasks, minimum, maximum, types} = sheetParameters;
  // console.log(sheetParameters);

  return (
    <div>
      <h1>Hello math lover (hater)</h1>
    <Addition minimum maximum={maximum}/>
    <Addition minimum maximum={maximum}/>
    <Addition minimum maximum={maximum + 10}/>
    <Addition minimum maximum={40}/>
    <Addition minimum={20} maximum={50}/>
    <Subtraction minimum maximum={maximum}/>
    <Subtraction minimum maximum={maximum}/>
    <Subtraction minimum maximum={30}/>
    <Subtraction minimum={17} maximum={33}/>
    <Subtraction minimum={20} maximum={50}/>

    </div>
  );
}

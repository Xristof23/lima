import { TaskItem } from "@/SharedStyledComponents";

export default function FormatTask({x, y, z, calcType, taskId})

{
  if (calcType === "Addition") {
    return (<TaskItem>{x} + {y} = ({taskId})</TaskItem>);
  } else if (calcType === "Subtraction") {
    return (<TaskItem>{z} - {x} = </TaskItem>);
  } else if (calcType === "Multiplication") {
    return (<TaskItem>{x} * {y} = </TaskItem>);
  } else if (calcType === "Division") {
    return (<TaskItem>{z} : {x} = </TaskItem>);
  }
    return (<TaskItem>Sorry, something went wrong </TaskItem>)
}


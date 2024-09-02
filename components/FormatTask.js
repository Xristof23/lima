import { TaskItem } from "@/SharedStyledComponents";
import Chance from "chance";
const chance = new Chance();


export default function FormatTask({x, y, z, calculationType})

{
    
   

    return (<TaskItem>{x} + {y} = {z} </TaskItem>);
}
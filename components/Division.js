import { TaskItem } from "@/SharedStyledComponents";
import Chance from "chance";
const chance = new Chance();


export default function Division({minimum, maximum})
{

    //for this stage, only tasks with remainder = 0 will be generated get numbers(may add useEffect later)
const factorMaximum = maximum / 10;

    const y = chance.integer({ min: Math.max(1, minimum), max: factorMaximum });
    console.log("factotMax",factorMaximum);
    console.log("y",y);
    const z = chance.integer({ min: minimum, max: factorMaximum });
    const x = y * z;

    const seedPart = `d${x}.${y}.${y}`;
    

    return (<TaskItem>{x} : {y} = {z} </TaskItem>);
}
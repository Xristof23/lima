
import Chance from "chance";

const chance = new Chance();

export default function Subtraction({minimum, maximum})

{
    //get numbers for subtraction (might add useEffect later)
    const x = chance.integer({ min: minimum, max: maximum });
    const y = chance.integer({ min: minimum, max: x});
    const z = x - y;


    return (<p>{x} - {y} = {z} </p>);
}
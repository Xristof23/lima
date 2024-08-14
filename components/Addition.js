
import Chance from "chance";
const chance = new Chance();

export default function Addition({minimum, maximum})

{

    //get numbers for addition (may add useEffect later)
    const z = chance.integer({ min: minimum, max: maximum });
    const x = chance.integer({ min: minimum, max: z });
    const y = z - x;


    return (<p>{x} + {y} = {z} </p>);
}
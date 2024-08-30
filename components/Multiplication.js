
import Chance from "chance";
const chance = new Chance();


export default function Multiplication({minimum, maximum})
{

    //get numbers(may add useEffect later)
const factorMaximum = maximum / 10;

    const x = chance.integer({ min: minimum, max: factorMaximum  });
    const y = chance.integer({ min: minimum, max: factorMaximum });
    const z = x * y;

    const seedPart = `m${x}.${y}.${y}`;
    

    return (<>{x} x {y} = {z} </>);
}
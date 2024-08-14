
import Chance from "chance";

const chance = new Chance();

export default function Addition({upperLimit}) {

    const z = chance.integer({ min: 0, max: upperLimit });
    console.log(z);
    const x = chance.integer({ min: 0, max: z });
    const y = z - x;


    return (<p>{x} + {y} = {z} </p>);
}
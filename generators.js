import Chance from "chance";
const chance = new Chance();




export function generateAdditionArray(amount, minimum, maximum, calcType) {
    const protoArray = [...Array(amount+1).keys()].slice(1);
    const additionArray = protoArray.map((number) => {
      const z = chance.integer({ min: minimum, max: maximum });
      const x = chance.integer({ min: minimum, max: z });
        const y = z - x;
        const timeStamp = Date.now();
      const taskId = `${calcType.slice(0, 1)}.${x}.${y}.${z}.${timeStamp}`
        const taskObject = { taskNumber: number, calcType, x, y, z, taskId };
      return taskObject;
    });
    return additionArray;
}
    

export function generateMultiplicationArray(amount, minimum, maximum, calcType) {
    const protoArray = [...Array(amount + 1).keys()].slice(1);
    const factorMaximum = maximum / 10;
    const multiplicationArray = protoArray.map((number) => {
        const x = chance.integer({ min: minimum, max: factorMaximum  });
        const y = chance.integer({ min: minimum, max: factorMaximum });
        const z = x * y;
        const timeStamp = Date.now();
      const taskId = `${calcType.slice(0, 1)}.${x}.${y}.${z}.${timeStamp}`
        const taskObject = { taskNumber: number, calcType, x, y, z, taskId };
      return taskObject;
    });
    return multiplicationArray;
}
    
export function generateSheetArray(numberOfTasks, min, max, sheetMode) {
    const amount = Number(numberOfTasks);
    sheetMode === "Addition" || "Subtraction" ? generateAdditionArray(amount, min, max, sheetMode) : generateMultiplicationArray(amount, min, max, sheetMode);
}
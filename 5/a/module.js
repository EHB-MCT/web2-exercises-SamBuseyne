import * as fs from 'fs/promises';

//get data from boardgames file
let result = await fs.readFile('boardgames.json');
console.log(result);
let data = JSON.parse(result);
console.log(data)

//loop over the boardgames
for(let i in data){
    //create filename
let filename = `${i}.json`
    //stringify the value
let bg = JSON.stringify(data[i]);
    //save to file
    await fs.writeFile(filename,bg);
    //Be happy
}
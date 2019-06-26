console.log("Typescript log1");

let myName: String;
myName = "이정우";
//myName = 32;
console.log(myName);

enum Color
{
    Blue,
    Red,
    Yellow
};

console.log(Color.Blue);

function multiply(val1: number, val2: number): number
{
    return val1 * val2;
}

console.log("multiply = " + multiply(3, 4));

for(let i=0; i < 9; i++)
{
    console.log(i + "번째");
}

interface Person{
    name: string;
    age: number;
    height: number;
}

function personInfoPrint(personInfo: Person) : void {
    console.log(personInfo.name);
}


let ps: Person = {
    name: "홍길동",
    age: 20,
    height: 180
}

personInfoPrint(ps);
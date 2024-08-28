#! /usr/bin/env node
import inquirer from "inquirer";
console.log("\n ---- Welcome To Our Mini Adventure Game ---- \n");
class Player {
    name;
    fuel = 100;
    constructor(name) {
        this.name = name;
    }
    fuelDecrease() {
        this.fuel -= 25;
    }
    fuelIncrease() {
        this.fuel = 100;
    }
}
class Opponent {
    name;
    fuel = 100;
    constructor(name) {
        this.name = name;
    }
    fuelDecrease() {
        this.fuel -= 25;
    }
}
let player = await inquirer.prompt([
    {
        name: "name",
        type: "input",
        message: "Please Enter Your Name: ",
    },
]);
let opponent = await inquirer.prompt([
    {
        name: "select",
        type: "list",
        message: "Select Your Opponent",
        choices: ["Skeleton", "Alien", "Zombie"],
    },
]);
let p1 = new Player(player.name);
let o1 = new Opponent(opponent.select);
let gameIsRunning = true;
do {
    let ask = await inquirer.prompt([
        {
            name: "opt",
            type: "list",
            message: "What Would You Like To Do?",
            choices: ["Attack", "Drink Portion", "Run For Your Life.."],
        },
    ]);
    let num = Math.floor(Math.random() * 2);
    if (ask.opt === "Attack") {
        if (num > 0) {
            p1.fuelDecrease();
            console.log(`${p1.name} fuel is ${p1.fuel}`);
            console.log(`${o1.name} fuel is ${o1.fuel}`);
            if (p1.fuel <= 0) {
                console.log("You Lose, Better Luck Next Time");
                gameIsRunning = false;
            }
        }
        else {
            o1.fuelDecrease();
            console.log(`${p1.name} fuel is ${p1.fuel}`);
            console.log(`${o1.name} fuel is ${o1.fuel}`);
            if (o1.fuel <= 0) {
                console.log("You Win");
                gameIsRunning = false;
            }
        }
    }
    else if (ask.opt === "Drink Portion") {
        p1.fuelIncrease();
        console.log(`You Drink Health Portion. Your Fuel is now ${p1.fuel}`);
    }
    else if (ask.opt === "Run For Your Life..") {
        console.log("You Lose, Better Luck Next Time");
        gameIsRunning = false;
    }
} while (gameIsRunning);
console.log("\n ---- Thanks For Testing Our Project ---- \n");

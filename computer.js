export class Computer { // exporting by class names
//export default class Computer { } //if you will remove braces from import side then u have to use default in export 
    constructor(name) {
        this.name = name
    }

    run() {
        console.log("The computer is now running")
    }
}
const inquirer = require('inquirer');

 module.exports = class MenuController {
   constructor(){
     this.mainMenuQuestions = [
      {
       type: "list",
        name: "mainMenuChoice",
        message: "Please choose from an option below: ",
        choices: [
          "Add new contact",
          "Date",
          "Exit"

        ]
      }
    ];
    this.contacts = [];
  }


 main(){
   console.log(`Welcome to AddressBloc!`);
     inquirer.prompt(this.mainMenuQuestions).then((response) => {
       switch(response.mainMenuChoice){
         case "Add new contact":
           this.addContact();
           break;
         case "Date":
           this.getDate();
           break;
         case "Exit":
           this.exit();
         default:
           console.log("Invalid input");
           this.main();
       }
     })
     .catch((err) => {
       console.log(err);
     });
 }

 clear(){
   console.log("\x1Bc");
 }

 addContact(){
   this.clear();
   console.log('addContact called');
   this.main();
 }

 exit(){
   console.log('Thanks for using AddressBloc!');
   process.exit();
 }

 getDate(){
   var d = new Date
   var months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
   console.log(months[d.getMonth()] + "/" + d.getDate() + "/" + d.getFullYear())
 }
}

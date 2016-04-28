function People(person, persNum, persSal, persRat) {
  this.employeeName = person;
  this.empNum = persNum;
  this.empSal = persSal;
  this.empRat = persRat;
};
var atticus = new People("Atticus", "2405", "47000", 3);
var jem = new People("Jem", "62347", "63500", 4);
var boo = new People("Boo", "11435", "54000", 3);
var scout = new People("Scout", "6243", "74750", 5);

var employees = [atticus, jem, boo, scout];


 var percentage = function(empName) {
   var percent = 0;

   switch (empName.empRat) {
     case 0:
     case 1:
     case 2:
      percent = 0;
       break;
      case 3:
        percent = 4;
        break;
      case 4:
        percent = 6;
        break;
      case 5:
        percent = 10;
        break;
   }

   if (empName.empNum.length <= 4) {
     percent += 5;
   }
   if (parseInt(empName.empSal) > 65000) {
     percent -= 1;
   }
   if (percent > 13) {
     percent = 13;
   }
   return percent;
 }

 function newArray(origArray) {
   var empArray = [];
   var perc = percentage(origArray);
   empArray[0] = origArray.employeeName;
   empArray[1] = perc + "%";
   empArray[2] = Math.round(((perc/100) + 1) * origArray.empSal);
   empArray[3] = Math.round(empArray[2] - origArray.empSal);
   return empArray;
 };
 for (var i = 0; i < employees.length; i++) {
    console.log(newArray(employees[i]));
 }

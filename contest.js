
let arr = [
    { id: 1, name: "john", age: "18", profession: "developer" },
    { id: 2, name: "jack", age: "20", profession: "developer" },
    { id: 3, name: "karen", age: "19", profession: "admin" },
  ];
  
  function PrintDeveloperbyMap() {
    //Write your code here , just console.log
    arr.filter(employees => employees.profession=="developer")
    .map(developer=> console.log(developer));
  }
  PrintDeveloperbyMap();
  
  function PrintDeveloperbyForEach() {
    //Write your code here , just console.log
    arr.forEach(function(value, index){
      if(value.profession==="developer"){
        console.log("Printed via using forEach" , value);
      }
    })
  }
  
  function addData() {
    //Write your code here, just console.log
    let newDaata = {
      id:4,
      name:"susan",
      age:20,
      profession:"intern"
    }
    arr.push(newDaata);
    console.log("updated array ", arr);
  }
  
  function removeAdmin() {
    //Write your code here, just console.log
    let answer = arr.filter(function(value, index){return value.profession!=="admin"})
    console.log("After deleting : ", answer);
  }
  
  function concatenateArray() {
    //Write your code here, just console.log
    let newArr = [
      {id:5, name:"emma", age:"22", profession:"designer"},
      {id:6, name: "alex", age:"24", profession:"analyst"},
      {id:7, name:"ryan", age:"21", profession:"engineer"},
    ];
    arr = [...arr, ...newArr]
    console.log("Updated arr : ", arr);
  }
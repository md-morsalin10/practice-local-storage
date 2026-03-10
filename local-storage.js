const addToLocal = () =>{
    const number = Math.ceil(Math.random()*100)
    console.log(number)
    localStorage.setItem("number", number)
}

const getNumberFromLocal = () =>{
    const number = localStorage.getItem("number")
    console.log("From local storage", number);
    
}

const addObject = () =>{
    const student = {name: "Morsalin", Roll: 12, age: 24}
    const studentLocal = JSON.stringify(student);
    localStorage.setItem("student", studentLocal)
    console.log(studentLocal);
}

const getObject = () =>{
    const studentJSON = localStorage.getItem("student")
    const studentJ =JSON.parse(studentJSON)
    console.log("from local",studentJ);
    
}
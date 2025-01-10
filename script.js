function adddata(event) {
    
    event.preventDefault();

   
    const firstname = document.getElementById("first-name").value;
    const lastname = document.getElementById("last-name").value;
    const date = document.getElementById("dateofbirth").value;
    const dis = document.getElementById("district").value;
    const parentname = document.getElementById("parent-name").value;
    const email = document.getElementById("email").value;
    const phonenumber = document.getElementById("phone").value;
    const grade = document.getElementById("grade").value;

 
    let students = JSON.parse(localStorage.getItem("students")) || [];

    
    students.push({ firstname, lastname,date,dis,parentname,email,phonenumber,grade });


    localStorage.setItem("students", JSON.stringify(students));

  
    document.getElementById("first-name").value = '';
    document.getElementById("last-name").value = '';
    document.getElementById("dateofbirth").value = '';
    document.getElementById("district").value = '';
    document.getElementById("parent-name").value = '';
    document.getElementById("email").value = '';
    document.getElementById("phone").value = ''; 
    document.getElementById("grade").value = '';  
}

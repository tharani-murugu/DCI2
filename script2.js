document.addEventListener("DOMContentLoaded", () => {
   
    const students = JSON.parse(localStorage.getItem("students")) || [];

   
    const tbody = document.querySelector("#tbl tbody");

  
    students.forEach(student => {
        const tr = document.createElement("tr");

        const td1 = document.createElement("td");
        td1.textContent = student.firstname;

        const td2 = document.createElement("td");
        td2.textContent = student.lastname;

        const td3 = document.createElement("td");
        td3.textContent = student.date;

        const td4 = document.createElement("td");
        td4.textContent = student.dis;

        const td5 = document.createElement("td");
        td5.textContent = student.parentname;

        const td6 = document.createElement("td");
        td6.textContent = student.email;

        const td7 = document.createElement("td");
        td7.textContent = student.phonenumber;

        const td8 = document.createElement("td");
        td8.textContent = student.grade;

        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        tr.appendChild(td4);
        tr.appendChild(td5);
        tr.appendChild(td6);
        tr.appendChild(td7);
        tr.appendChild(td8);
        tbody.appendChild(tr);
    });
});

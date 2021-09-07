function myfunction() {
    const tbl = document.getElementById("mytable");
    const row = tbl.insertRow();
    const cell1 = row.insertCell();
    const cell2 = row.insertCell();
    const cell3 = row.insertCell();
    const cell4 = row.insertCell();
    const cell5 = row.insertCell();
    const cell6 = row.insertCell();
    const cell7 = row.insertCell();
    const cell8 = row.insertCell();
    cell1.innerHTML = document.getElementById("fname").value;
    cell2.innerHTML = document.getElementById("lname").value;
    cell3.innerHTML = document.getElementById("add").value;
    cell4.innerHTML = document.getElementById("pin").value;
    cell5.innerHTML = document.getElementById("gen").value;
    cell5.innerHTML = document.getElementById("gen1").value;
    cell6.innerHTML = document.getElementById("food").value;
    cell7.innerHTML = document.getElementById("state").value;
    cell8.innerHTML = document.getElementById("country").value;
   
  }
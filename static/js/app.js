// from data.js
var tableData = data;

// YOUR CODE HERE!
function isDate(searchDate) {
    if (searchDate.match(/^(?:(0[1-9]|1[012])[\- \/.](0[1-9]|[12][0-9]|3[01])[\- \/.](19|20)[0-9]{2})$/)){
        return true;
    }else{
        return false;
    }
}

function convertDate(searchDate) {
    if (searchDate[0]=="0") {
        searchDate=searchDate.slice(1,10);
    }
return searchDate;
}

function clearTable() {
    let numberRows=document.getElementById("ufo-table").rows.length;
    if (numberRows>2) {
        for (let i=0; i<numberRows-2; i++) {
            document.getElementById("ufo-table").deleteRow(2);
        }
    }
}

function insertTablerow(tableData) {
    console.log(tableData.datetime);
    console.log(tableData.city);
    console.log(tableData.state);
    console.log(tableData.country);
    console.log(tableData.shape);
    console.log(tableData.durationMinutes);
    console.log(tableData.comments);

    let numberRows=document.getElementById("ufo-table").rows.length;
    let newRow=document.getElementById('ufo-table').insertRow(numberRows);

    let datetime=newRow.insertCell(0);
    let city=newRow.insertCell(1);
    let state=newRow.insertCell(2);
    let country=newRow.insertCell(3);
    let shape=newRow.insertCell(4);
    let durationMinutes=newRow.insertCell(5);
    let comments=newRow.insertCell(6);

    datetime.innerHTML=tableData.datetime;
    city.innerHTML=tableData.city;
    state.innerHTML=tableData.state;
    country.innerHTML=tableData.country;
    shape.innerHTML=tableData.shape;
    durationMinutes.innerHTML=tableData.durationMinutes;
    comments.innerHTML=tableData.comments;
}

function readList(searchDate) {
    let found=false;
    for(let i=0; i<tableData.length; i++) {
        if (searchDate==tableData[i].datetime) {
            insertTablerow(tableData[i]);
            found=true;
        }
    }
    if (!found) {
        alert("No sitings reported on this date.....")
    }
}

function checksited(event) {
    let x=event.which || event.keyCode;
 //   if (x==13) {
 //       console.log("Enter Key Pressed...");
    let searchDate=document.getElementById("datetime").value;
//        console.log("Search Date:",searchDate);
    if (isDate(searchDate)) {
        searchDate=convertDate(searchDate);
        clearTable();
        readList(searchDate);
        }
 //   }
}

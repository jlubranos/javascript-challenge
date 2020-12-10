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

function readList(searchDate) {
    let found=false;
    for(let i=0; i<tableData.length; i++) {
        if (searchDate==tableData[i].datetime) {
            console.log(tableData[i].datetime);
            found=true;
        }
    }
    if (!found) {
        alert("No sitings reported on this date.....")
    }
}

function checksited(event) {
    let x=event.which || event.keyCode;
    if (x==13) {
        console.log("Enter Key Pressed...");
        let searchDate=document.getElementById("datetime").value;
        console.log("Search Date:",searchDate);
        if (isDate(searchDate)) {
            searchDate=convertDate(searchDate);
            readList(searchDate);
        }
    }
}

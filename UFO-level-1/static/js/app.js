// from data.js
var tableData = data;

// YOUR CODE HERE!
function loadtable(data) {

    // Create table with data passed as a parameter..
    var tbody=d3.select("tbody");
    data.forEach((siting)=> {
        var row=tbody.append("tr");
        Object.entries(siting).forEach(([key,value])=> {
            var cell=row.append("td");
            cell.text(value);
        });
     });

}

function filtertabledata(date) {

    // If date is ALL call loadtable and pass all the dates as an argument.
    if (date==="ALL") {
        loadtable(tableData);
    } else {
    // Otherwise filter on date call function loadtable and pass newData as an argument.
        var newData=tableData.filter(siting=>siting.datetime===date);
        loadtable(newData);
    }

}

function searchDate() {

    // Acquire input date
    var input=d3.select("#datetime");
    var date=input.property("value");

    // If date field is empty set date to ALL
    if (date==="") {
        date="ALL";
    }

    // Clear any table if any
    var tbody=d3.select("tbody");
    tbodyRows=tbody.selectAll("tr");
    tbodyRows.remove();

    // Call filtertabledata() function and pass date as an argument
    filtertabledata(date);
}

// Load all dates
searchDate();

// On click event call function searchDate()
var button=d3.select("#filter-btn");
button.on("click", searchDate);

// On keydown event check if return key is pressed.
//      If return key is pressed prevent page from reloading and call function searchDate()
var input=d3.select("#datetime");
input.on("keydown",function() {
    if (d3.event.keyCode===13) {
        d3.event.preventDefault();
        searchDate();
    }
});
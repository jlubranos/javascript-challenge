// from data.js
var tableData = data;

// YOUR CODE HERE!
function loadtable(data) {
    console.log(data);
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
    if (date==="ALL") {
        loadtable(tableData);
    } else {
        var newData=tableData.filter(siting=>siting.datetime===date);
        loadtable(newData);

    }

}

function searchDate() {
    var input=d3.select("#datetime");
    console.log(input.property("value"));
    var date=input.property("value");
    if (date==="") {
        date="ALL";
    }
    var tbody=d3.select("tbody");
    tbodyRows=tbody.selectAll("tr");
    tbodyRows.remove();
    filtertabledata(date);
}


searchDate();
var button=d3.select("#filter-btn");
button.on("click", searchDate);
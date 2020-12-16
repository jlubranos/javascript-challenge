// from data.js
var tableData = data;

// YOUR CODE HERE!
function exist(list,string) {

    // Check for duplicate in list for dropdown
    for(let x=0; x<list.length; x++) {
        if (list[x]===string) {
            return true;
        }
    }
    return false;
}

function loadSelect(obj,list) {

    // Load list into dropdown object 
    let i=0;
    list.forEach(function(item) {
        i++;
        obj.append(new Option(item,String(i)));
    });
}

function loadOptions(){

    // Create the five list which represent the five dropdowns in the html
    let datelist=[];
    let citylist=[];
    let statelist=[];
    let countrylist=[];
    let shapelist=[];

    // Loop through data list and create dropdown options for each list above checking for unique values by calling the exist function
    tableData.forEach((data)=> {
        Object.entries(data).forEach(([key,value])=>{
            if (key=="datetime") {
                if (exist(datelist,value)==false) {
                    datelist.push(value);
                }
            }
            if (key=="city") {
                if (exist(citylist,value)==false) {
                    citylist.push(value);
                }
            }
            if (key=="state") {
                if (exist(statelist,value)==false) {
                    statelist.push(value);
                }
            }
            if (key=="country") {
                if (exist(countrylist,value)==false) {
                    countrylist.push(value);
                }
            }
            if (key=="shape") {
                if (exist(shapelist,value)==false) {
                    shapelist.push(value);
                }
            }
        });
    });

//  datelist.sort();
//  did sort datelist due to date format will cause the sort not to sort in date order.
// Load datelist into the date dropdown.
    let date=document.getElementById("selectDate");
    loadSelect(date,datelist);

// Sort the remaining dropdowns and load each sorted list into its respective dropdown.
    citylist.sort();
    let city=document.getElementById("selectCity");
    loadSelect(city,citylist);

    statelist.sort();
    let state=document.getElementById("selectState");
    loadSelect(state,statelist);

    countrylist.sort();
    let country=document.getElementById("selectCountry");
    loadSelect(country,countrylist);

    shapelist.sort();
    let shape=document.getElementById("selectShape");
    loadSelect(shape,shapelist);

}

function loadtable(data) {

    // Create table according to data parameter
    var tbody=d3.select("tbody");
    data.forEach((siting)=> {
        var row=tbody.append("tr");
        Object.entries(siting).forEach(([key,value])=> {
            var cell=row.append("td");
            cell.text(value);
        });
     });

}

function clearTbody() {

    // Clear table
    var tbody=d3.select("tbody");
    var tbodyRows=tbody.selectAll("tr");
    tbodyRows.remove();
}

function readList(criteria) {
    
    // filter tableData according to criteria dictionary parameter.
    let newData=tableData.filter(siting=>
        (siting.datetime===criteria.date || criteria.date==="All" || criteria.date==="Select Date") &&
        (siting.city===criteria.city || criteria.city==="All" || criteria.city==="Select City") &&
        (siting.state===criteria.state || criteria.state==="All" || criteria.state==="Select State") &&
        (siting.country===criteria.country || criteria.country==="All" || criteria.country==="Select Country") &&
        (siting.shape===criteria.shape || criteria.shape==="All" || criteria.shape==="Select Shape")
        );

    // Test to see if any results were found.
    if (newData.length>0) {
    
    // If found clear the table and load the table with newData passed as an argument
        clearTbody();
        loadtable(newData);
    } else {

    // If no results found clear table if any and return
        clearTbody();
    }

}

function checkSited() {

    // Create a dictionary of input values from drop downs.

    let criteria={};

    let date = document.getElementById("selectDate");
    criteria.date=date.options[date.selectedIndex].text;

    let city = document.getElementById("selectCity");
    criteria.city=city.options[city.selectedIndex].text;

    let state = document.getElementById("selectState");
    criteria.state=state.options[state.selectedIndex].text;

    let country = document.getElementById("selectCountry");
    criteria.country=country.options[country.selectedIndex].text;

    let shape = document.getElementById("selectShape");
    criteria.shape=shape.options[shape.selectedIndex].text;

    // Clear table
    clearTbody();

    //Call readList function passing the input dictionary as an argument
    readList(criteria);
}

// Call loadOptions function which load all dropdowns for html.
loadOptions();

// Initial call to checkSited function to load all dates into the table.
checkSited();
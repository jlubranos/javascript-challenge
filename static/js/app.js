// from data.js
var tableData = data;

// YOUR CODE HERE!
function exist(obj,string) {
    for(let x=0; x<obj.length; x++) {
        if (obj[x].text===string) {
            return true;
        }
    }
    return false;
}

function loadoptions(){
    tableData.forEach((data)=> {
        Object.entries(data).forEach(([key,value])=>{
            if (key=="datetime") {
                let date=document.getElementById("selectDate");
                if (exist(date,value)==false) {
                    date.append(new Option(value,key));
                }
            }
            if (key=="city") {
                let city=document.getElementById("selectCity");
                if (exist(city,value)==false) {
                    city.append(new Option(value,key));
                }
            }
            if (key=="state") {
                let state=document.getElementById("selectState");
                if (exist(state,value)==false) {
                    state.append(new Option(value,key));
                }
            }
            if (key=="country") {
                let country=document.getElementById("selectCountry");
                if (exist(country,value)==false) {
                    country.append(new Option(value,key));
                }
            }
            if (key=="shape") {
                let shape=document.getElementById("selectShape");
                if (exist(shape,value)==false) {
                    shape.append(new Option(value,key));
                }
            }
        });
    });
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

function readList(criteria) {
    for(let i=0; i<tableData.length; i++) {
        let found=0;
        if (criteria.date==tableData[i].datetime || criteria.date==="All" || criteria.date==="Select Date") {
            found++;
        }
        if (criteria.city==tableData[i].city || criteria.city==="All" || criteria.city==="Select City") {
            found++;
        }
        if (criteria.state==tableData[i].state || criteria.state==="All" || criteria.state==="Select State") {
            found++;
        }
        if (criteria.country==tableData[i].country || criteria.country==="All" || criteria.country==="Select Country") {
            found++;
        }
        if (criteria.shape==tableData[i].shape || criteria.shape==="All" || criteria.shape==="Select Shape") {
            found++;
        }                                
        if (found===5) {
            insertTablerow(tableData[i]);
        }
    }
    if (found<5) {
        alert("No sitings reported on this date.....")
    }
}

function checksited(event) {
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
    console.log("Criteria:");
    console.log(criteria);
    clearTable();
    readList(criteria);
}
loadoptions();
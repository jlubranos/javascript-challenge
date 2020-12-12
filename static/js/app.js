// from data.js
var tableData = data;

// YOUR CODE HERE!
function exist(list,string) {
    for(let x=0; x<list.length; x++) {
        if (list[x]===string) {
            return true;
        }
    }
    return false;
}

function loadSelect(obj,list) {
    
    let i=0;
    list.forEach(function(item) {
        i++;
        obj.append(new Option(item,String(i)));
    });
}

function loadOptions(){

    let datelist=[];
    let citylist=[];
    let statelist=[];
    let countrylist=[];
    let shapelist=[];

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

//    datelist.sort();
    let date=document.getElementById("selectDate");
    loadSelect(date,datelist);

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

    let found=false;

    for(let i=0; i<tableData.length; i++) {
        if ((criteria.date==tableData[i].datetime || criteria.date==="All" || criteria.date==="Select Date") &&
            (criteria.city==tableData[i].city || criteria.city==="All" || criteria.city==="Select City") &&
            (criteria.state==tableData[i].state || criteria.state==="All" || criteria.state==="Select State") &&
            (criteria.country==tableData[i].country || criteria.country==="All" || criteria.country==="Select Country") &&
            (criteria.shape==tableData[i].shape || criteria.shape==="All" || criteria.shape==="Select Shape")) {
                insertTablerow(tableData[i]);
                found=true;
        }
    }
    if (!found) {
        alert("No records found with criteria you entered.....");
    }
}

function checkSited(event) {

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

    clearTable();
    readList(criteria);
}
loadOptions();
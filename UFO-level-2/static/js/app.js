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

function loadtable(data) {
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
    var tbody=d3.select("tbody");
    var tbodyRows=tbody.selectAll("tr");
    tbodyRows.remove();
}

function readList(criteria) {
    let newData=tableData.filter(siting=>
        (siting.datetime===criteria.date || criteria.date==="All" || criteria.date==="Select Date") &&
        (siting.city===criteria.city || criteria.city==="All" || criteria.city==="Select City") &&
        (siting.state===criteria.state || criteria.state==="All" || criteria.state==="Select State") &&
        (siting.country===criteria.country || criteria.country==="All" || criteria.country==="Select Country") &&
        (siting.shape===criteria.shape || criteria.shape==="All" || criteria.shape==="Select Shape")
        );
    if (newData.length>0) {
        clearTbody();
        loadtable(newData);
    } else {
        clearTbody();
    }

}

function checkSited() {

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

    clearTbody();
    readList(criteria);
}
loadOptions();
checkSited();
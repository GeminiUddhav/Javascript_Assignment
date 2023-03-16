function CreateTable() {
    
    var mydata = new Array();
    mydata.push(["NAME ", "AGE", "DOB","EMAIL","COMPANY"]);
    mydata.push(["Uddhav Sankhdhar", "21","30/11/2001","uddhav11302001@gmail.com","GeminiSolutions"]);
    mydata.push(["Uddhav Sankhdhar", "21","30/11/2001","uddhav11302001@gmail.com","GeminiSolutions"]);
    mydata.push(["Uddhav Sankhdhar", "21","30/11/2001","uddhav11302001@gmail.com","GeminiSolutions"]);
    mydata.push(["Uddhav Sankhdhar", "21","30/11/2001","uddhav11302001@gmail.com","GeminiSolutions"]);

    
    var table = document.createElement("TABLE");
    table.border = "1";

    
    var columnCount = mydata[0].length;

    //Add the header row.
    var row = table.insertRow(-1);
    for (var i = 0; i < columnCount; i++) {
        var headerCell = document.createElement("TH");
        headerCell.innerHTML = mydata[0][i];
        row.appendChild(headerCell);
    }

    //Add the data rows.
    for (var i = 1; i < mydata.length; i++) {
        row = table.insertRow(-1);
        for (var j = 0; j < columnCount; j++) {
            var cell = row.insertCell(-1);
            cell.innerHTML = mydata[i][j];
        }
    }

    var dvTable = document.getElementById("dvTable");
    dvTable.innerHTML = "";
    dvTable.appendChild(table);
};
   
   


 
   
  
function Table(){
    const AddColumn = () =>{
        //creating div
        let created_div = document.createElement("div");
        created_div.className = "column";
        //creating checkbox
        let created_checkbox = document.createElement("input")
        created_checkbox.setAttribute("type", "checkbox");
        //adding checkbox to div
        created_div.appendChild(created_checkbox);

        //adding created element to all the rows
        let created_element = created_div;
        let allrows = document.getElementsByClassName("row");
        for(var i=0;i<allrows.length;i++)
        {
            let clone = created_element.cloneNode(true);
            document.getElementsByClassName("row")[i].appendChild(clone);
        }
    }
    const addRow = () => {
        //count number of columns already there
        let childCount = document.getElementById("row").childElementCount;
        console.log("children count : " + childCount);
        //creating RowDiv
        let rowDiv = document.createElement("div");
        rowDiv.className = "row";
        //creating heading column
        let headingDiv = document.createElement("div");
        headingDiv.className = "column col-heading";
        headingDiv.setAttribute("contentEditable","true");
        headingDiv.innerHTML = "Heading";
        
        //adding headingdiv to the row
        rowDiv.appendChild(headingDiv);
        
        //creating div containing checkbox
        let columnDiv = document.createElement("div");
        columnDiv.className="column";
        //creating checkbox
        let created_checkbox = document.createElement("input");
        created_checkbox.setAttribute("type", "checkbox");
        //adding checkbox to the column div
        columnDiv.appendChild(created_checkbox);
        let created_element = columnDiv;
        //adding created checkbox div to the row
        for(let i=0;i<(childCount-1);i++)
        {
            let clone = created_element.cloneNode(true);
            rowDiv.appendChild(clone);
        }
        
        document.getElementById("table").appendChild(rowDiv);
    }
    const deleteRow = () => {
        console.log("delete Row");
        let table = document.getElementById("table");
        table.removeChild(table.lastElementChild);
    }
    const trySave = () => {
        console.log("Saving");
        let table = document.getElementById("table");
        console.log(table);
        console.log("Child Count : ", table.childElementCount);
        
        console.log("Child Elements : ");
        for(let i = 0;i<table.childElementCount;i++)
        {
            let oneRow = table.childNodes[i];
            console.log("Row ",i," ", oneRow);
            // let numofTdinaRow = oneRow.childNodes[0].childElementCount;
            // let arrayOfCheckboxes = [];
            // let rowDiv = oneRow.childNodes[0];
            // //console.log(rowDiv.childNodes[0].childNodes[0].innerHTML);
            // for(let j=0;j<numofTdinaRow;j++)
            // {
            //     //console.log(rowDiv.childNodes[j]);
            //     let tdDiv = rowDiv.childNodes[j].childNodes[0];
            //     if(tdDiv.childNodes[0].textContent)
            //     {
            //         console.log(tdDiv.childNodes[0].textContent);
            //     }
            //     else
            //     {
            //         let temp = tdDiv.childNodes;
            //         if(temp[0].checked)
            //         {
            //             //console.log(1);
            //             arrayOfCheckboxes.push(1);
            //         }
            //         else
            //         {
            //             //console.log(0);
            //             arrayOfCheckboxes.push(0);
            //         }
            //     }
            // }
            // console.log(arrayOfCheckboxes);
        }

        // let jsonObjString = JSON.stringify(table);
        // JSON.parse(jsonObjString);
        // console.log(JSON.parse(jsonObjString));
        // let fs = require('fs');
        // fs.writeFile("saveData.json",jsonObj,'utf-8',()=>{});
    }
    return(
        <div className="babu-container">
            <div id="table" className="table">
                <div id="row" className="row">
                    <div contentEditable="true" className="column col-heading">Wakeup Early</div>
                </div>
                <div className="row"><div contentEditable="true" className="column col-heading">250 JJ's - morning</div></div>
                <div className="row"><div contentEditable="true" className="column col-heading">Logs</div></div>
                <div className="row"><div contentEditable="true" className="column col-heading">Study 1 ch Tech</div></div>
                <div className="row"><div contentEditable="true" className="column col-heading">Practice 100 sums</div></div>
                <div className="row"><div contentEditable="true" className="column col-heading">Study 1 ch Non-Tech</div></div>
                <div className="row"><div contentEditable="true" className="column col-heading">250 JJ's - evening</div></div>
                <div className="row"><div contentEditable="true" className="column col-heading">Eat Good Food</div></div>
                <div className="row"><div contentEditable="true" className="column col-heading">Keep A Water Bottle</div></div>
                <div className="row"><div contentEditable="true" className="column col-heading">Getting Good Thoughts</div></div>
                <div className="row"><div contentEditable="true" className="column col-heading">Triggers Overcame</div></div>
                <div className="row"><div contentEditable="true" className="column col-heading">Pressure Prevent (Do Better)</div></div>
                <div className="row"><div contentEditable="true" className="column col-heading">Next Tech Subject</div></div>
                <div className="row"><div contentEditable="true" className="column col-heading">Hobbies- Extra Project</div></div>
                <div className="row"><div contentEditable="true" className="column col-heading">Early to Bed</div></div>
                <div className="row"><div contentEditable="true" className="column col-heading">Control</div></div>
            </div>
            <div className="option-buttons">
                <div className="button-div has-items">
                    <div className="which-button-text">Column -&nbsp;</div>
                    <button className="big-button add-button" onClick={AddColumn}>Add</button>
                </div>
                <div className="button-div has-items">
                    <button className="big-button delete-button" onClick={deleteRow}>Delete</button>
                    <div className="which-button-text">- Row -</div>
                    <button className="big-button add-button" onClick={addRow}>Add</button>
                </div>
                <div className="button-div has-items">
                <div className="which-button-text">Save -&nbsp;</div>
                    <button className="big-button add-button" onClick={trySave}>Save</button>
                </div>
            </div>
        </div>        
    )
}

export default Table;
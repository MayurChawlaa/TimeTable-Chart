function Table(){
    const AddColumn = () =>{
        // //createing td
        // let created_td = document.createElement("td");
        //creating div inside td
        let created_div = document.createElement("div");
        created_div.className = "column";
        //creating checkbox
        let created_checkbox = document.createElement("input")
        created_checkbox.setAttribute("type", "checkbox");
        //adding checkbox to div
        created_div.appendChild(created_checkbox);
        // //appending divoftd to td
        // created_td.appendChild(divoftd);

        let created_element = created_div;
        let allrows = document.getElementsByClassName("row");
        for(var i=0;i<allrows.length;i++)
        {
            let clone = created_element.cloneNode(true);
            document.getElementsByClassName("row")[i].appendChild(clone);
        }
    }
    return(
        <div className="babu-container">
            <div className="table">
                <div className="row">
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
            <div>
                <button onClick={AddColumn}>Add Column</button>
            </div>
        </div>        
    )
}

export default Table;
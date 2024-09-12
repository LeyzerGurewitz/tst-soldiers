const form = document.querySelector("#form-main");

const table = document.querySelector(".table")
let soldiers = JSON.parse(localStorage.getItem("soldiers")) || [];


const fullNameTableCreate = (soldier) => {
    const tdFullName = document.createElement("td");
    tdFullName.innerText = soldier. FullName ;
    return  tdFullName;
}
const rankTableCreate = (soldier) =>{
    const tdRank = document.createElement("td");
    tdRank.innerText = soldier.RANK;

    return tdRank 
}
const PosittonTableCreate = (soldier) => {
    const tdPositton = document.createElement("td");
    tdPositton.innerText = soldier.Positton ;
    return  tdPositton;
}
const plaootntableCreate = (soldier) => {
    const tdPlaootnt = document.createElement("td");
    tdPlaootnt.innerText = soldier.Plaootn ;
    return  tdPlaootnt;
}
const statusTableCreate = (soldier) => {
    const tdstatus = document.createElement("td");
    tdstatus.innerText = soldier.Status ;
    return  tdstatus;
}
const clickDelete = (task) => {
    tasks = tasks.filter(t => t.id !== task.id);
    localStorage.setItem("soldiers", JSON.stringify(soldiers));
    renderTable();

}

const clickUpdate = (task) => {
            if (updatedText) {
                task.toDo = updatedText;
                localStorage.setItem("soldiers", JSON.stringify(soldiers));

                renderTable();

            }

}

const clickStatus = (task) => {
    task.status = !task.status;
    localStorage.setItem("soldiers", JSON.stringify(soldiers));
    renderTable();

}
const actionsTableCreate =(task)  =>{
    const tdActions = document.createElement("td");

    const deleteBtn = document.createElement("button");
    deleteBtn.innerText = "Delete";
    deleteBtn.setAttribute("id", "IdDelete");
        deleteBtn.addEventListener("click", () => clickDelete(task));
        tdActions.appendChild(deleteBtn);

    const updateBtn = document.createElement("button");
        updateBtn.innerText = "Update";
        updateBtn.setAttribute("id", "IdUpdate");
        updateBtn.addEventListener("click",() => clickUpdate(task));
        tdActions.appendChild(updateBtn);

        const toggleStatusBtn = document.createElement("button");
        toggleStatusBtn.innerText = "Status";
        toggleStatusBtn.setAttribute("id", "IdStatus");
        toggleStatusBtn.addEventListener("click",() => clickStatus(task));
        tdActions.appendChild(toggleStatusBtn);    

    return tdActions    
}


const renderTable = () => {
    debugger
    const rows = table.querySelectorAll("tr");
    rows.forEach((row, index) => {
        if (index > 0) {
            row.remove();
        } 
    });
    
    soldiers.forEach(soldier => {
        const tr = document.createElement("tr");    
        
        tr.appendChild(fullNameTableCreate(soldier));
        
        tr.appendChild(rankTableCreate(soldier));
        
        tr.appendChild(PosittonTableCreate(soldier));
        
        tr.appendChild(plaootntableCreate(soldier));
        tr.appendChild(statusTableCreate(soldier));
        tr.appendChild(actionsTableCreate(soldier));
        table.appendChild(tr);

        
    });
}


const elementSoldier = () =>{
    const fullName = document.querySelector("#full-name");
    const rank = document.querySelector("#rank");
    const positton = document.querySelector("#positton");
    const plaootn = document.querySelector("#plaootn");
    const missionTime = document.querySelector("#mission-time");
    const status = document.querySelector("#select");
    const  newElement = {
        FullName: fullName.value,
         RANK: rank.value,
         Positton: positton.value,
         Plaootn: plaootn.value,
         MissionTime: missionTime.value,
         Status: status.value
    };
    soldiers.push(newElement);
    localStorage.setItem("soldiers", JSON.stringify(soldiers));
    fullName.value = ""
    rank.value = ""
    positton.value = ""
    plaootn.value = ""
    missionTime.value = ""
    renderTable();
}
const clickButtonSubmit =(e) =>{
    e.preventDefault()
    elementSoldier();
}

form.addEventListener("submit", clickButtonSubmit)

renderTable();
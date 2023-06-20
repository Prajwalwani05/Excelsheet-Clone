
let headRow = document.getElementById('head-row');
let tableBody = document.getElementById('table-body');
let col = 26;

// running loop to get upper row that containe A-Z chars .
for(let x=1;x<=col;x++){
    let th = document.createElement('th');
    th.innerText = String.fromCharCode(x+64);
    headRow.append(th);
}

let tbody = document.getElementById('table-body');

// running loop to get rows from 1 to 100 and also empty cells;

for(let row=1;row<=100;row++){
    let tr = document.createElement('tr');
    let th = document.createElement('th');
    th.innerText = row;
    tr.append(th);
    for(let x=1;x<=col;x++){
        let td = document.createElement('td');
        td.setAttribute('id' , `${String.fromCharCode(x+64)}${row}`);
        td.addEventListener('focus',(event) => focus(event));
        tr.append(td);
        td.contentEditable = "true";
    }
    tableBody.append(tr);
}
let rowColNum = document.getElementById('rowColNum');
function focus(event){
   let showId = event.target.id;
   rowColNum.innerText= showId;
// console.log(event.target)
}
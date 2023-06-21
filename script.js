
let headRow = document.getElementById('head-row');
let tableBody = document.getElementById('table-body');
let col = 26;
let currentCell;
let cutBtn = document.getElementById('cut');
let pasteBtn = document.getElementById('paste');
let copyBtn = document.getElementById('copy');
let boldBtn = document.getElementById('bold');
let italicsBtn = document.getElementById('italics');
let underlineBtn = document.getElementById('underline');
let lineThrough = document.getElementById('lineThrough');
let txtColor = document.getElementsByClassName('txtColor')[0];
let bgColor = document.getElementsByClassName('bgColor')[0];
let fontFamily = document.getElementById('fontFamily');
let fontSize = document.getElementById('fontSize');

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
// let cut = {
//     text:currentCell.innerText,
// };
// cutBtn.addEventListener('click' , (event)=>{
//     cut.innerText = currentCell.innerText;
//     currentCell.innerText='';
// })
// pasteBtn.addEventListener('click' ,(event)=>{
//     currentCell.innerText = cut;
//     cut = '';
// })
boldBtn.addEventListener('click',(event)=>{
    if(currentCell.style.fontWeight==='bold'){
        currentCell.style.fontWeight= 'normal';
    }
    else
    currentCell.style.fontWeight='bold';
});

italicsBtn.addEventListener('click',()=>{
    if(currentCell.style.fontStyle==='italic')
    currentCell.style.fontStyle='normal';
    else
    currentCell.style.fontStyle='italic';
})

underlineBtn.addEventListener('click' , ()=>{
    if(currentCell.style.textDecoration==='underline')
    currentCell.style.textDecoration='none';
    else
    currentCell.style.textDecoration='underline';
})

lineThrough.addEventListener('click' , ()=>{
    if(currentCell.style.textDecoration==='line-through')
    currentCell.style.textDecoration='none';
    else
    currentCell.style.textDecoration='line-through';
})

txtColor.addEventListener('input', ()=>{
   let textColor = txtColor.value;
    currentCell.style.color = textColor;
})
bgColor.addEventListener('input', ()=>{
    let textColor = bgColor.value;
     currentCell.style.backgroundColor = textColor;
 })
fontFamily.addEventListener('input' , ()=>{
    let font = fontFamily.value;
    currentCell.style.fontFamily = font;
})
fontSize.addEventListener('input' , ()=>{
    let Sfont = fontSize.value;
    currentCell.style.fontSize = Sfont;
})


let rowColNum = document.getElementById('rowColNum');
function focus(event){
    currentCell = event.target;
   rowColNum.innerText= currentCell.id;
// console.log(event.target)
}
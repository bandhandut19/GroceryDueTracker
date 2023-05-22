let allDue = [];
let showDue = [];
let newDue = 0;
let totalDue = 0;

const singleDue = document.getElementById('addAmount')
const addBtn = document.getElementById('btn')
const startNewBtn = document.getElementById('btn2')
const displayDue = document.querySelector('.dueBox')
const track = document.querySelector('.track')

addBtn.addEventListener('click', () => {
    addDue();
    allDue();
    displayingDue();
    trackingDue();
    singleDue.value='';
})

startNewBtn.addEventListener('click', () => {
   totalDue = 0;
})

const addDue = () => {
    let number = parseFloat(singleDue.value); /*  using parseFloat for stopping invalid inputs */
    console.log(`The number is ${number}`)
    totalDue+= number;
    console.log(`The number is ${totalDue}`)
    

}

const displayingDue = ()=>{
    displayDue.innerText = `YOUR TOTAL DUE IS   > > >  ${totalDue} BDT`;
}

const trackingDue = () =>{
    let date = new Date()
    track.innerText=`Your Due Amount Enterted is > > > >_ [ ${singleDue.value} BDT ] & The Date is : ${date.toLocaleDateString()}`
}

allDue = ()=>{
    for(let i=0;i<allDue.length;i++){
        addDue[i] = singleDue.value;
    }
    // console.log(`items are ${addDue[2]}`)
}

showDue = () => {
    showDue.forEach(data => {
        totalDue = +data;
    })
    return totalDue;
}
let inputArr = [];
let outputArr = [];
let showDue = [];
let newDue = 0;
let totalDue = 0;
let previousDue = 0;

const singleDue = document.getElementById('addAmount')
const addBtn = document.getElementById('btn')
const startNewBtn = document.getElementById('btn2')
const displayDue = document.querySelector('.dueBox')
const track = document.querySelector('.track')

addBtn.addEventListener('click', () => {
    addDue();
    previousDue = totalDue;
    displayDue.insertAdjacentHTML('beforeend', `<p class="para"> YOUR LAST TOTAL DUE WAS   > > >  ${previousDue} BDT </p>`)
    displayingDue();
    singleDue.value = '';
})
startNewBtn.addEventListener('click', () => {
    displayDue.innerHTML = '';
    displayDue.insertAdjacentHTML('afterbegin', `<p class="para"> YOUR LAST TOTAL DUE WAS   > > >  ${totalDue} BDT </p>`)
    totalDue = 0;
    displayDue.insertAdjacentHTML('beforeend', `<p class="para"> YOUR TOTAL DUE IS   > > >  ${totalDue} BDT </p>`)
    track.innerHTML = '';
    
    

})

const addDue = () => {

    let number = parseFloat(singleDue.value); /*  using parseFloat for stopping invalid inputs */
    const track = document.querySelector('.track')
    inputArr.push(number);
    inputArr.forEach(num => {
        outputArr.push(num)
        inputArr.pop(num)
    })


    let copyOutput = [];
    outputArr.forEach(item => {
        copyOutput.push(item)
    })

    console.log(copyOutput)
    let output = JSON.stringify(outputArr);
    localStorage.setItem('output', output)

    let mainOutput = localStorage.getItem('output')
    let mainOutputParse = JSON.parse(mainOutput)

    track.innerHTML = '';
    mainOutputParse.forEach(item => {
        track.insertAdjacentHTML('afterbegin', `<p class="para"> Your Last Entered Due is ${item}</p>`)
        // localStorage.removeItem('output',item)
    })


    totalDue += number;

}

(   function () {
    const loadShow = document.querySelector('.loadShow')
    
    let savedArrString = localStorage.getItem('output')
    let savedArr = JSON.parse(savedArrString)
    savedArr.forEach(item=>{

        loadShow.insertAdjacentHTML('beforeend', `<p class="para"> Your Last Entered Due is ${item}</p>`)
    })

})()
const displayingDue = () => {

    displayDue.innerHTML = `<p class="para"> YOUR TOTAL DUE IS   > > >  ${totalDue} BDT</p>`
    // displayDue.insertAdjacentHTML('beforeend',`<p class="para"> YOUR TOTAL DUE IS   > > >  ${totalDue} BDT </p>`);
}



/*
const trackingDue = () =>{
    let date = new Date()
    track.innerText=`Your Due Amount Enterted is > > > >_ [ ${singleDue.value} BDT ] & The Date is : ${date.toLocaleDateString()}`
}

allDue = () => {
    for (let i = 0; i < allDue.length; i++) {
        addDue[i] = singleDue.value;
    }
    // console.log(`items are ${addDue[2]}`)
}
*/



showDue = () => {
    showDue.forEach(data => {
        totalDue = +data;
    })
    return totalDue;
}
let countEl = document.getElementById('count-el');

let count = 0;

function increment () {
  count += 1; 
  countEl.innerText = count;

}

function decrement () {
  count -= 1;
  countEl.innerText = count;
}

let saveEl = document.getElementById('save-el')

function save () {
  let current = count + " -";
  saveEl.innerText = current;
  
}
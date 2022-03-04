let countEl = document.getElementById('count-el');

let count = 0;

let saveEl = document.getElementById('save-el')

function increment () {
  count += 1; 
  countEl.textContent = count;

}

function decrement () {
  count -= 1;
  if (count < 0) {
    return countEl.innerText = 'error'
  } else {
    countEl.textContent = count;

  }
};



function save () {
  let current = count + " - ";
  if (count < 0) {
    return saveEl.textContent = 'error';
  } else {
    saveEl.textContent += current;
    countEl.textContent = 0;
    count = 0;

  };
  
};
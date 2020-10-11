const sideToggle = document.querySelector('.head__sidebar-toggle')
const closeBtn = document.querySelector('.close-btn');
const aside = document.querySelector('.aside');
const errorMsg = document.querySelector('.error-message')
const input = document.querySelector('.url-input')
const form = document.querySelector('.url_form')
const resultContainer = document.querySelector('.result__container')


//const url = `https://rel.ink/api/links/Nn8y9p/`;
//POSTurl = "url": "https://news.ycombinator.com/"

sideToggle.addEventListener('click', () => {
  aside.classList.toggle('show-sidebar')
})

closeBtn.addEventListener('click', () => {
  aside.classList.remove('show-sidebar')
})

function append(parent, el) {
  return parent.appendChild(el); 
}

const createResult = () => {
  let result = document.createElement('div')
  let url = document.createElement('span')
  let link = document.createElement('span')
  let anchor = document.createElement('a')
  let copyBtn = document.createElement('button')

  url.setAttribute('class', 'left_url')
  link.setAttribute('class', 'right_url')
  anchor.setAttribute('href', '#')
  copyBtn.setAttribute('class', 'copy_button')
  copyBtn.setAttribute('type', 'button')
  result.setAttribute('class', 'result')

  url.textContent = input.value
  link.innerHTML = `https://rel.ink/k4lKyk`;
  copyBtn.innerHTML = `copy`
  

  append(link, anchor)
  append(result, link)
  append(result, url)
  append(result, copyBtn)
  append(resultContainer, result)
}

const getRequest = async (link) => {
  const url = `https://rel.ink/api/${link}/Nn8y9p/`;
  const response = await fetch(url);
  const data = await response.json();
  console.log(data);
};

var expression = /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi;
var regex = new RegExp(expression);

form.addEventListener('submit', (e) => {
  e.preventDefault()
  if(input.value !== '' && input.value.match(regex)) {
    errorMsg.textContent = '';
    input.classList.remove('error');

    //getRequest(input.value);
    createResult()

    input.value = '';
    
  }else {
    errorMsg.textContent = '*Please enter a valid url e.g https://www.google.com';
    input.classList.add('error');
    return
  }

  
})



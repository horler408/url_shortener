const sideToggle = document.querySelector('.head__sidebar-toggle')
const closeBtn = document.querySelector('.close-btn');
const aside = document.querySelector('.aside');
const errorMsg = document.querySelector('.error-message')
const input = document.querySelector('.url-input')
const form = document.querySelector('.url_form')
// const login = document.querySelector('.login')
// const signUp = document.querySelector('.signup')
// const formBtn = document.querySelector('.form__buttons')



//const url = `https://rel.ink/api/links/Nn8y9p/`;
//POSTurl = "url": "https://news.ycombinator.com/"

sideToggle.addEventListener('click', () => {
  aside.classList.toggle('show-sidebar')
})

closeBtn.addEventListener('click', () => {
  aside.classList.remove('show-sidebar')
})


const getRequest = async (link) => {
  const url = `https://rel.ink/api/${link}/Nn8y9p/`;
  const response = await fetch(url);
  const data = await response.json();
  console.log(data);
};

form.addEventListener('submit', (e) => {
  e.preventDefault()
  if(input.value === '') {
    errorMsg.textContent = '*Please enter a valid url';
    input.classList.add('error');
    return
  }else {
    errorMsg.textContent = '';
    input.classList.remove('error');

    //console.log(input.value);
    getRequest(input.value);

    input.value = '';
  }

  
})



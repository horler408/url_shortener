const sideToggle = document.querySelector('.head__sidebar-toggle')
const closeBtn = document.querySelector('.close-btn');
const aside = document.querySelector('.aside');
// const login = document.querySelector('.login')
// const signUp = document.querySelector('.signup')
// const formBtn = document.querySelector('.form__buttons')

const url = `https://rel.ink/api/links/Nn8y9p/`;
//POSTurl = "url": "https://news.ycombinator.com/"

sideToggle.addEventListener('click', () => {
  aside.classList.toggle('show-sidebar')
})

closeBtn.addEventListener('click', () => {
  aside.classList.remove('show-sidebar')
})


const getRequest = async () => {
  const response = await fetch(url);
  const data = await response.json();
  console.log(data);
};

getRequest();


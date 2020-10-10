const sideToggle = document.querySelector('sidebar__toggle')
const closeBtn = document.querySelector('.close-btn')
const aside = document.querySelector('.aside')

const url = `https://rel.ink/api/links/Nn8y9p/`;
//POSTurl = "url": "https://news.ycombinator.com/"

sideToggle.addEventListener('click', () => {
  aside.classList.toggle()
})

const getRequest = async () => {
  const response = await fetch(url);
  const data = await response.json();
  console.log(data);
};

getRequest();


const url = `https://rel.ink/api/links/Nn8y9p/`;
//POSTurl = "url": "https://news.ycombinator.com/"

const getRequest = async () => {
  const response = await fetch(url);
  const data = await response.json();
  console.log(data);
};

getRequest();

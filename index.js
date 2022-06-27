let news = document.getElementById("news");
let b = '104dfa49b82749fbb1901aa15fa8b533';
async function fun(){
    const response = await fetch(`https://newsapi.org/v2/top-headlines?country=in&apiKey=${b}`);
    
    const users = await response.json();
   let articles = users.articles;
   let newsHtml = "";
 
    articles.forEach((description,index) => {
      //console.log(description,index);
      let newsapi = ` <div class="accordion my-3" id="news">
      <div class="accordion-item" id="heading${index}">
        <h2 class="accordion-header" id="headingOne">
          <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collaps${index}">
            <b>Breaking News ${index + 1}:</b>${description["title"]}
          </button>
        </h2>
        <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="heading${index}" data-bs-parent="#accordionExample">
          <div class="accordion-body">
           <p> ${description["content"]}<a href="${description['url']}" target="_blank">Read more</a></p>
          </div>
        </div>
      </div>
    </div>`
    newsHtml += newsapi;
    });
    news.innerHTML = newsHtml;
    return users;
}

let a = fun();
a.then(data => console.log(data.description,index));

let search = document.getElementById('searchtext');
search.addEventListener("input",function(){
  console.log("input fired");
  let inputVal = search.value;
  console.log("it works!",inputVal);
  let accordion = document.getElementsByClassName("accordion-body");
  console.log(accordion);
  Array.from(accordion).forEach(function(element){
    let inputText = element.getElementsByTagName("p")[0].innerText;
    if(inputText.includes(inputVal)){
      element.style.display = "block";
    }
    else{
      element.style.display ="none";
    }
  })

})

let bnews = document.getElementById("bnews");
async function bussiness(){
  const res = await fetch(`https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=${b}`);
  const businessusers = await res.json();
  let businessArticles = businessusers.articles;
  let newhtml = "";
  businessArticles.forEach((element,index)=>{
    let bussinessapi = ` <div class="accordion my-3" id="news">
    <div class="accordion-item" id="heading${index}">
      <h2 class="accordion-header" id="headingOne">
        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collaps${index}">
          <b>Breaking News ${index + 1}:</b>${element["title"]}
        </button>
      </h2>
      <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="heading${index}" data-bs-parent="#accordionExample">
        <div class="accordion-body">
         <p> ${element["content"]}<a href="${element['url']}" target="_blank">Read more</a></p>
        </div>
      </div>
    </div>
  </div>`
  newhtml += bussinessapi;
  })
  bnews.innerHTML = newhtml;
  return businessusers;
}

let c = bussiness()
c.then(data =>console.log(data.element,index));

let snews = document.getElementById("snews");
async function sportsNews(){
  const sportsResponse = await fetch(`https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=${b}`);
  const sportsUsers = await sportsResponse.json();
  let sportsArticles = sportsUsers.articles;
  let sporthtml = "";
  sportsArticles.forEach((elem,index)=>{
    let sportsApi = ` <div class="accordion my-3" id="news">
    <div class="accordion-item" id="heading${index}">
      <h2 class="accordion-header" id="headingOne">
        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collaps${index}">
          <b>Breaking News ${index + 1}:</b>${elem["title"]}
        </button>
      </h2>
      <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="heading${index}" data-bs-parent="#accordionExample">
        <div class="accordion-body">
         <p> ${elem["content"]}<a href="${elem['url']}" target="_blank">Read more</a></p>
        </div>
      </div>
    </div>
  </div>`
  sporthtml += sportsApi;
  })
  snews.innerHTML = sporthtml;
  return sportsUsers;
}

let S = sportsNews();
S.then(data =>console.log(data.elem,index));

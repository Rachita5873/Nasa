url1="https://api.nasa.gov/planetary/apod";

let imageSrc = document.getElementById("image");
let imageTitle = document.getElementById("title");
let imageContent = document.getElementById("content");
let fetchDate = document.getElementById("search-input");
let ulist = document.getElementById("unorder");

const date = new Date();

let day = date.getDate();
let month = date.getMonth() + 1;
let year = date.getFullYear();
let currentDate = `${year}-${month}-${day}`;

function getData(){
    return fetch(`${url1}?date=${currentDate}&api_key=wbIk6flyqgmu96VKfKxpt22Mq5JVg8SZ49jd2vGO`).then((response)=>{
return response.json();
    }).then((data)=>{
        console.log(data);
        return data;
    }).
    catch((error) => {
        console.error("There was a problem with the fetch operation:", error);
      });
}

getData();



function getCurrentImageOfTheDay(){

    getData().then((data)=>{
        imageSrc.src = data.url;
        imageTitle.innerText=data.title;
        imageContent.innerText=data.explanation;

    });

   
}

function getData2(fetchDate){
    return fetch(`${url1}?date=${fetchDate}&api_key=wbIk6flyqgmu96VKfKxpt22Mq5JVg8SZ49jd2vGO`).then((response)=>{
        return response.json();
            }).then((data)=>{
                console.log(data);
                return data;
            }).
            catch((error) => {
                console.error("There was a problem with the fetch operation:", error);
              });
}



function getImageOfTheDay(){
    const fetchDate = document.getElementById("search-input").value;
    getData2(fetchDate).then((data)=>{
        imageSrc.src = data.url;
        imageTitle.innerText=data.title;
        imageContent.innerText=data.explanation;

    });

    let listt = document.createElement("li");
   

    listt.addEventListener("click", () =>{
        let listVal = listt.innerText;
        getData2(listVal).then((data)=>{
            imageSrc.src = data.url;
            imageTitle.innerText=data.title;
            imageContent.innerText=data.explanation;
    
        });
    })
    listt.className = "list1";
    
    listt.innerText = fetchDate;
    ulist.appendChild(listt);

    saveSearch(fetchDate);
    

   
}

let arr = [];

function saveSearch(fetchDate){
    const result = {
        date: fetchDate,
    }
    arr.push(result);
    localStorage.setItem("date", JSON.stringify(arr));
    console.log(arr);

}







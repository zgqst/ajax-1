getCSS.onclick = () => {
  let request = new XMLHttpRequest();
  request.open("GET", "/style.css");
  request.onload = () => {
    let css = document.createElement("style");
    css.innerHTML = request.response;
    document.body.appendChild(css);
  };
  request.onerror = () => {
    console.log(2);
  };
  request.send();
};
getJS.onclick = () => {
  let request = new XMLHttpRequest();
  request.open("GET", "/2.js");
  request.onreadystatechange = () => {
    if (request.readyState === 4 && request.status === 200) {
      let script = document.createElement("script");
      script.textContent = request.response;
      document.body.appendChild(script);
    }
  };
  request.send();
};

getHTML.onclick = () => {
  let request = new XMLHttpRequest();
  request.open("GET", "/3.html");
  request.onreadystatechange = () => {
    if (request.readyState === 4 && request.status === 200) {
      let div = document.createElement("div");
      div.innerHTML = request.response;
      document.body.appendChild(div);
    }
  };
  request.send();
};
getXML.onclick = () => {
  let request = new XMLHttpRequest();
  request.open("GET", "/4.xml");
  request.onreadystatechange = () => {
    if (request.readyState === 4 && request.status === 200) {
      let dom = request.responseXML;
      let text = dom.getElementsByTagName("warning")[0].textContent;
      let h1 = document.querySelector("h1");
      h1.textContent = text;
    }
  };
  request.send();
};
getJSON.onclick = () => {
  let request = new XMLHttpRequest();
  request.open("GET", "/5.json");
  request.onreadystatechange = () => {
    if (request.readyState === 4 && request.status === 200) {
      let json = request.response;
      let h1 = document.querySelector("h1");
      h1.innerHTML = JSON.parse(request.response).name;
    }
  };
  request.send();
};
let n = 1;
getPAGE.onclick = () => {
  let request = new XMLHttpRequest();
  request.open("GET", `/page${n + 1}.json`);
  request.onreadystatechange = () => {
    if (request.readyState === 4 && request.status === 200) {
      let page = request.response.toString();
      let array = JSON.parse(page);
      array.forEach((item) => {
        let li = document.createElement(`li`);
        li.textContent = item.id;
        xxx.appendChild(li);
      });
      n += 1;
    }
  };
  request.send();
};

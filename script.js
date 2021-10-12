const countries = [
    {
      image: "https://flagpedia.net/data/flags/w580/de.png",
      country: "Germany",
      population: "81,770,900",
      region: "Europe",
      capital: "Berlin"
    },
    {
      image: "https://flagpedia.net/data/flags/w580/au.png",
      country: "Australia",
      population: "91,657,312",
      region: "Aus",
      capital: "Canberra"
    },
    {
      image: "https://flagpedia.net/data/flags/w580/in.png",
      country: "India",
      population: "1,3179,984,812",
      region: "Asia",
      capital: "New Delhi"
    },
    {
      image: "https://flagpedia.net/data/flags/w580/kr.png",
      country: "South Korea",
      population: "40,400,000",
      region: "Asia",
      capital: "Seoul"
    },
    {
      image: "https://flagpedia.net/data/flags/w580/us.png",
      country: "United States of America",
      population: "323,947,000",
      region: "North America",
      capital: "Washington,D.C"
    },
    {
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Bandera_de_Espa%C3%B1a.svg/1200px-Bandera_de_Espa%C3%B1a.svg.png",
        country: "Spain",
        population: "423,957,000",
        region: "North America",
        capital: "Madrid"
      },
      {
        image: "https://upload.wikimedia.org/wikipedia/en/thumb/c/c3/Flag_of_France.svg/1200px-Flag_of_France.svg.png",
        country: "France",
        population: "923,947,000",
        region: "North America",
        capital: "Italy"
      },
      {
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Flag_of_Pakistan.svg/1280px-Flag_of_Pakistan.svg.png",
        country: "Pakistan",
        population: "3,947,000",
        region: "North America",
        capital: "Islamabad"
      }
  ];
   
     

    var input1=document.createElement("input");
    input1.setAttribute("type","text");
    input1.setAttribute("placeholder","search here");
    document.body.append(input1);
      
    var x=document.createElement("div");
    x.setAttribute("class","container");
    document.body.append(x);

    for(var i=0;i<countries.length;i++){
    var div=document.createElement("div");
    var imag=document.createElement('img');
    imag.src=countries[i].image;
    div.appendChild(imag);
    var cou=document.createElement("p");
    cou.innerText=countries[i].country;
    div.appendChild(cou);
    var popu=document.createElement("p");
    popu.innerText=`Population: ${countries[i].population}`;
    div.appendChild(popu);
    var reg=document.createElement("p");
    reg.innerText=`Region: ${countries[i].region}`;
    div.appendChild(reg);
    var cap=document.createElement("p");
    cap.innerText=`Capital: ${countries[i].capital}`;
    div.appendChild(cap);
    document.querySelector(".container").append(div);
  
    }
let paragrafo = document.querySelector("#para1");

paragrafo.addEventListener("mouseover",mudaVerde);
paragrafo.addEventListener("mouseout",mudaVermelho);


function mudaVerde(){
    paragrafo.style.background="green"};

    function mudaVermelho(){
        paragrafo.style.background="red";

    }


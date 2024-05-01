var Refresh = (window.onload = function() {
  let button = document.getElementById("button");
  button.addEventListener("click", function() {
    Refresh();
  });
  Refresh = () => {
    let number = document.getElementsByClassName("number")[0];
    let num = Math.floor(Math.random() * 12) + 1; //13 lck+++
    console.log(num);
    let variable = Math.floor(Math.random() * 4) + 1;
    let vari = "";
    switch (num) {
      case 1:
        num = "A";
        break;
      case 10:
        num = "J";
        break;
      case 11:
        num = "Q";
        break;
      case 12:
        num = "K";
        break;
    }
    switch (variable) {
      case 1:
        vari = "heart";
        break;
      case 2:
        vari = "spade";
        break;
      case 3:
        vari = "club";
        break;
      case 4:
        vari = "diamond";
        break;
    }
    number.innerHTML = num;

    let card = document.getElementsByClassName("card")[0];
    card.classList = `card ${vari}`;
  };
  Refresh();
});

//Reciclando conceptos yes?no?
/*function domainName (){
    let a=0;
    let b=0;
    let c=0;

    let pronoun = ['the', 'our'];
    let adj = ['great','big'];
    let noun = ['jogger','racoon'];
    
    let Domain = ""; //No
    
    for (let a=0;a<pronoun.length;a++)
    {
        for (let b=0;b<adj.length;b++)
        {
            for (let c=0;c<noun.length;c++)
            {
                Domain += pronoun[a]+adj[b]+noun[c]+".com <br>";
            }
        }
    }
    return Domain;
}

document.querySelector("#btn").addEventListener("click", () => {
    document.querySelector("#name").innerHTML = domainName();
});
//All done
*/

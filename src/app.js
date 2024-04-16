//Reciclando conceptos yes?no?
function domainName (){
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

// Ya no puedo mas 10/04/2024

window.onload = () => {
  document.querySelector("#btn").addEventListener("click", () => {
    document.querySelector("#the-excuse").innerHTML = generateExcuse();
  });
  console.log("Hello Rigo from the console! ");
};

let generateExcuse = () => {

  let who = ['The dog', 'My grandma', 'The mailman', 'My bird'];
  let action = ['ate', 'peed', 'crushed', 'broke'];
  let what = ['my homework', 'my phone', 'the car'];
  let when = ['before the class', 'when I was sleeping', 'while I was exercising', 'during my lunch', 'while I was praying'];
  
  let whoIndex = Math.floor(Math.random() * who.length);
  let actIndex = Math.floor(Math.random() * action.length);
  let whaIndex = Math.floor(Math.random() * what.length);
  let wheIndex = Math.floor(Math.random() * when.length);
  
  return (
    who[whoIndex] +
    " " +
    action[actIndex] +
    " " +
    what[whaIndex] +
    " " +
    when[wheIndex]
  );
};

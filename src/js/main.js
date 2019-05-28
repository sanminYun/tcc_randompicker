let results=[];

const GetRandomNumber = (min, max) => {
  let result = 0;
  let resultBox = document.getElementById("result-box");

  while(result-1 < min){

    result = Math.floor(Math.random() * max);
    console.log("result is",result);
  }

  GetHistory(result+1);
  resultBox.innerText = ""+ (result+1);
  // return result + 1;
};

const GetHistory = (result) => {
  // results.push(`<li class="list-group-item">` + result + '</li>');
  results.push(result + ", ");
  let historyModal = document.getElementById("modal-body");
  let text ="";

  for(let i = 0 ; i < results.length; i++){
    text += results[i];
  }
  historyModal.innerText = text;
};


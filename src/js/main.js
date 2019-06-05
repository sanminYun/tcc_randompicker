let results=[];

const GetRandomNumber = () => {
  let min = $('#min').val();
  let max = $('#max').val();
  console.log(min + "," + max);

  if(min < 0 || min === null || min === ""){min = 13}
  if(max < 0 || max === null || max === ""){max = 133}
  if(max <= min){alert("최대값이 최소값보다 작을 수 없습니다."); return;}
  console.log("현재 범위:" +min + ", " + max);

  let result = 0;
  //let resultBox = document.getElementById("result-box");



  result = Math.floor(Math.random() * (max - min + 1)) + min;
  console.log("result is",result);


  GetHistory(result);

  $('.loader').removeClass("loader-hide").addClass("loader-show");
  $('.result-text').text("");

  setTimeout(function(){
    $('.loader').removeClass("loader-show").addClass("loader-hide");
    $('.result-text').text(""+(result));
    let audio = new Audio('tada.wav')
    audio.play();
  }, 1500);
  // return result + 1;
};

const GetHistory = (result) => {
  // results.push(`<li class="list-group-item">` + result + '</li>');

  results.push(result + ", ");
  console.log(results);
  //let historyModal = document.getElementById("modal-body");
  let text ="";

  for(let i = 0 ; i < results.length; i++){
    text += results[i];
  }
  //historyModal.innerText = text;
  console.log(text);
  $('.modal-body').text(text);
};


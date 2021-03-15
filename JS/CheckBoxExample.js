function nicknameFunction(){
    if (document.getElementById('yesNick').checked){
      var testing=document.getElementById('yesNick').checked;
      console.log(testing);
       document.getElementById('nick').style.display="inline";
  document.getElementById('nickname').setAttribute('required',true);
    }
    else{ 
        document.getElementById('nickname').removeAttribute('required');
        document.getElementById('nick').style.display="none";
    }
}

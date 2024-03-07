// funkcja powoduje wyświetlanie się reklamy na komputerze  
function adsPC(){ 
    let reklamaPcJeden = ['LinkDoZdjęcia', 'LinkDoStrony']; 
    let reklamaPcDwa = ['LinkDoZdjęcia', 'LinkDoStrony']; 
    let reklamaPcTrzy = ['LinkDoZdjęcia', 'LinkDoStrony']; 
    let reklamaPcCztery = ['LinkDoZdjęcia', 'LinkDoStrony']; 
    
    let imgTabPC = [reklamaPcCztery, reklamaPcDwa, reklamaPcJeden, reklamaPcTrzy, reklamaPcJeden, reklamaPcCztery, reklamaPcTrzy,  
      reklamaPcDwa, reklamaPcTrzy,reklamaPcCztery, reklamaPcDwa, reklamaPcJeden,reklamaPcTrzy, reklamaPcCztery, reklamaPcJeden, reklamaPcDwa]; 
    let itemPC = imgTabPC[Math.floor(Math.random()*imgTabPC.length)]; 
    let image = document.querySelector(".reklamy_na_strone"); 
    let link = document.querySelector(".link_do_reklamy"); 
   
    image.src = itemPC[0]; 
    link.href = itemPC[1]; 
    image.style.width = "750px"; 
    image.style.height = "300px"; 
  } 
  // funkcja powoduje wyświetlanie się reklamy na telefonie   
   
  function adsMobile(){ 
    let reklamaTelJeden = ['LinkDoZdjęciaMobile', 'LinkDoStrony']; 
    let reklamaTelDwa = ['LinkDoZdjęciaMobile', 'LinkDoStrony']; 
    let reklamaTelTrzy = ['LinkDoZdjęciaMobile', 'LinkDoStrony']; 
    let reklamaTelCztery = ['LinkDoZdjęciaMobile', 'LinkDoStrony']; 
    
    let imgTabTel = [reklamaTelCztery, reklamaTelDwa, reklamaTelJeden, reklamaTelTrzy, reklamaTelJeden, reklamaTelCztery, reklamaTelTrzy,  
      reklamaTelDwa, reklamaTelTrzy,reklamaTelCztery, reklamaTelDwa, reklamaTelJeden,reklamaTelTrzy, reklamaTelCztery, reklamaTelJeden, reklamaTelDwa]; 
    let itemTel = imgTabTel[Math.floor(Math.random()*imgTabTel.length)]; 
    let image = document.querySelector(".reklamy_na_strone"); 
    let link = document.querySelector(".link_do_reklamy"); 
   
    image.src = itemTel[0]; 
    link.href = itemTel[1]; 
    image.style.width = "300px"; 
    image.style.height = "250px"; 
  } 
  //funkcja sprawdza szerokość ekranu użytownika 
  function changeWidth(){ 
    if(window.innerWidth >= 700){ 
        adsPC(); 
    } 
    else{ 
        adsMobile(); 
    } 
   } 
  changeWidth();

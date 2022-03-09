$('a').click(function (event) {
  event.preventDefault();
});
  function openSignup() {
    document.querySelector(".form-sec").style.display = "block";
  }
 
  // function closeSignup() {
  //   document.querySelector(".form-sec").style.display = "none";
  // }
  var formSec= document.querySelector('.form-sec')
  function closeSignup(event) {
    if (event.target === formSec) {
        formSec.style.display='none'
    }
}

  function openSignin() {
    document.querySelector(".form-sec2").style.display = "block";
  }
  
  // function closeSignin() {
  //   document.querySelector(".form-sec2").style.display = "none";
  // }
  var formSec2= document.querySelector('.form-sec2')
  function closeSignin(event) {
    
    if (event.target === formSec2) {
        formSec2.style.display='none'
    }
}

  function searchFunc(){
    document.querySelector(".search-sec").style.display = "block";
    

  }
  // function searchFuncClose(){
  //   document.querySelector(".search-sec").style.display = "none";

  // }
  var searchSec= document.querySelector('.search-sec')
  function searchFuncClose(event) {
    if (event.target === searchSec) {
        searchSec.style.display='none'
    }
}
// $(function() {
//     var canvas = document.createElement("canvas");
//     canvas.width = 24;
//     canvas.height = 24;
//     //document.body.appendChild(canvas);
//     var ctx = canvas.getContext("2d");
//     ctx.fillStyle = "#000000";
//     ctx.font = "24px FontAwesome";
//     ctx.textAlign = "center";
//     ctx.textBaseline = "middle";
//     ctx.fillText("\uf002", 12, 12);
//     var dataURL = canvas.toDataURL('image/png')
//     $('body').css('cursor', 'url('+dataURL+'), auto');
// });
 


let t;
const css = window.document.styleSheets[0];

/*
if (window.matchMedia("(max-width: 630px)").matches) {
  document.getElementById('test').style.display = 'default';
  document.getElementById('test').style.width = '100%';
  document.getElementById('space').style.display = 'none';
  document.getElementById('testr').style.display = 'default';
  document.getElementById('testr').style.width = '100%';
  t = document.body.scrollWidth;
  // alert(t)
  document.getElementById('hp').style.width = t + 'px';
  //document.write("this is a mobile device");
  // document.getElementById('rightMargin').style.display = 'inline-block';
  // document.getElementById('h1').style.display = 'none';
  // document.getElementById('thisWebsite').style.margin = '0';
  // document.getElementById('thisWebsite').style.maxWidth = 'none';
  $("#thisWebsite,#intro,#lagrangePolynomial,#myArtworks").css({ "margin": "0", "max-width": "none" });
} else {
  //document.write("this is a desktop device")
  document.getElementById('test').style.display = 'inline-block';
  document.getElementById('test').style.width = '45%';
  document.getElementById('space').style.display = 'inline-block';
  document.getElementById('space').style.width = '10px';
  document.getElementById('testr').style.display = 'inline-block';
  document.getElementById('testr').style.width = '45%';
  t = document.body.scrollWidth;
  // alert(t)
  document.getElementById('hp').style.width = t + 'px';
  // document.getElementById('rightMargin').style.display = 'none';
  // document.getElementById('h1').style.display = 'inline-block';
  /// $("#thisWebsite,#intro,#lagrangePolynomial,#myArtworks").css({ "margin": "0 0 0 0", "max-width": "80%" });
  // document.getElementById('intro').style.margin = '0 13% 0 13%';
  // document.getElementById('intro').style.maxWidth = '80%';
}
window.addEventListener('resize', init);
function init() {
  if (window.matchMedia("(max-width: 630px)").matches) {
    document.getElementById('hp').style.width = '100%';
    document.getElementById('test').style.display = 'default';
    document.getElementById('test').style.width = '100%';
    document.getElementById('space').style.display = 'none';
    document.getElementById('testr').style.display = 'default';
    document.getElementById('testr').style.width = '100%';
    // document.getElementById('content').style.width = '100%';
    //document.write("this is a mobile device");
    t = document.body.scrollWidth;
    // console.log(t)
    document.getElementById('hp').style.width = t + 'px';
    // document.getElementById('rightMargin').style.display = 'inline-block';
    // document.getElementById('h1').style.display = 'none';
    // document.getElementById('thisWebsite').style.margin = '0';
    // document.getElementById('thisWebsite').style.maxWidth = 'none';
    $("#thisWebsite,#intro,#lagrangePolynomial,#myArtworks").css({ "margin": "0", "max-width": "none" });
  } else {
    //document.write("this is a desktop device")
    document.getElementById('hp').style.width = "100%";
    document.getElementById('test').style.display = 'inline-block';
    document.getElementById('test').style.width = '45%';
    document.getElementById('space').style.display = 'inline-block';
    document.getElementById('space').style.width = '10px';
    document.getElementById('testr').style.display = 'inline-block';
    document.getElementById('testr').style.width = '47%';
    t = document.body.scrollWidth;
    // console.log(t)
    // document.getElementById('hp').style.width = t + 'px'; document.getElementById('rightMargin').style.display = 'none';
    // document.getElementById('h1').style.display = 'inline-block';
    /// $("#thisWebsite,#intro,#lagrangePolynomial,#myArtworks").css({ "margin": "0 0 0 0", "max-width": "80%" });
    // document.getElementById('intro').style.margin = '0 13% 0 13%';
    // document.getElementById('intro').style.maxWidth = '80%';
  }
}*/

if (window.matchMedia("(max-width: 630px)").matches) {
  $(".sec").css("padding", "20px 30px");
} else {
  $(".sec").css("padding", "20px 100px");
}

if (document.getElementById("nav1").offsetWidth < 210) {
  document.getElementById("email").style.display = "none";
  document.getElementById("resume").style.display = "none";
} else {
  document.getElementById("email").style.display = "inline";
  document.getElementById("resume").style.display = "inline";
}

window.addEventListener('resize', init2);
function init2() {
  // Icon();
  document.getElementById('hp').style.display = 'none';
  document.getElementById('hp2').style.display = 'none';
  if (window.matchMedia("(max-width: 630px)").matches) {
    $(".sec").css("padding", "20px 30px");
  } else {
    $(".sec").css("padding", "20px 100px");
  }
  $("#assistor .sec").css("padding", "20px");
  t = document.body.scrollWidth;
  document.getElementById('hp').style.width = t + 'px';
  document.getElementById('hp').style.display = 'block';
  document.getElementById('hp2').style.width = t + 'px';
  document.getElementById('hp2').style.display = 'block';

  /*
  $("#video1Description").css({"height":"null","opacity":"0"})
  let vd1 = document.getElementById('video1Description').offsetHeight;
  $("#video1Description").css({"height":"0","opacity":"0"})
  // console.log(vd1+"px")
  v1Danimation(vd1);
  */

  if (document.getElementById("nav1").offsetWidth < 210) {
    document.getElementById("email").style.display = "none";
    document.getElementById("resume").style.display = "none";
  } else {
    document.getElementById("email").style.display = "inline";
    document.getElementById("resume").style.display = "inline";
  }
}
$("#assistor .sec").css("padding", "20px");
t = document.body.scrollWidth;
// document.getElementById('hp').style.width = t + 'px';


document.getElementById('assistor').style.animation = 'navBarR 1s';
document.getElementById('assistor').style.animationFillMode = 'forwards';


$("#video1Description, #video2Description").css({ "height": "null", "opacity": "0" })
let vd1 = document.getElementById('video1Description').offsetHeight;
let vd2 = document.getElementById('video2Description').offsetHeight;
$("#video1Description, #video2Description").css({ "height": "0", "opacity": "0" })
// console.log(vd2+"px")
v1Danimation(vd1);
v2Danimation(vd2);

function v1Danimation(vd1) {
  css.insertRule(`
  @keyframes v1D {
  0%{
    opacity: 0;
    height: 0;
  }
  100%{
    opacity: 1;
    height: ${vd1 + "px"};
  }
  }`, css.cssRules.length);
  css.insertRule(`
  @keyframes v1DR {
  0%{
    opacity: 1;
    height: ${vd1 + "px"};
  }
  100%{
    opacity: 0;
    height: 0;
  }
  }`, css.cssRules.length);
}
function v2Danimation(vd2) {
  css.insertRule(`
  @keyframes v2D {
  0%{
    opacity: 0;
    height: 0;
  }
  100%{
    opacity: 1;
    height: ${vd2 + "px"};
  }
  }`, css.cssRules.length);
  css.insertRule(`
  @keyframes v2DR {
  0%{
    opacity: 1;
    height: ${vd2 + "px"};
  }
  100%{
    opacity: 0;
    height: 0;
  }
  }`, css.cssRules.length);
}


window.onload = function() {
  // Icon();
  
  document.getElementById('hp').style.width = t + 'px';
  document.getElementById('hp2').style.width = t + 'px';
  document.getElementById('loading').style.animation = 'ini 1s 1';
}

var element = document.getElementById('loading');
element.addEventListener("animationend", function() {
  element.remove();
  document.getElementById('myArtworks').style.animation = 'fadeIn2 1s';
  document.getElementById('myArtworks').style.display = 'block';
  document.getElementById('intro').style.display = 'none';
  document.getElementById('hybridPiano').style.display = 'none';
  document.getElementById('lagrangePolynomial').style.display = 'none';
  document.getElementById('thisWebsite').style.display = 'none';
  document.getElementById('cover').style.animation = 'ini 2s 1';
  document.getElementById('document').style.animation = 'fadeIn 2s 1';
  scrollTo(0,0);
});

var element2 = document.getElementById('cover');
element2.addEventListener("animationend", function() {
  element2.remove();
  document.getElementById('banner').style.animation = 'hpBannerR 2s';
  document.getElementById('banner').style.animationFillMode = 'forwards';
  document.getElementById('headPic').style.animation = 'headPicR 1s';
  document.getElementById('headPic').style.animationFillMode = 'forwards';
  
});

var hp = document.getElementById('hp');
var banner = document.getElementById('banner');
hp.addEventListener("mouseover", function() {
  document.getElementById('banner').style.animation = 'hpBanner 1s';
  document.getElementById('banner').style.animationFillMode = 'forwards';
  document.getElementById('headPic').style.animation = 'headPic 0.5s';
  document.getElementById('headPic').style.animationFillMode = 'forwards';
});
hp.addEventListener("mouseout", function() {
  document.getElementById('banner').style.animation = 'hpBannerR 1s';
  document.getElementById('banner').style.animationFillMode = 'forwards';
  document.getElementById('headPic').style.animation = 'headPicR 0.5s';
  document.getElementById('headPic').style.animationFillMode = 'forwards';
});


window.addEventListener("scroll", function() {

  // console.log('scrollY: ' + window.scrollY);
  var navTop;
  if (window.scrollY >= document.getElementById("headPic").height) {
    navTop = 0 - document.getElementById("headPic").height;
  } else {
    navTop = 0 - window.scrollY;
  }
  // console.log('navTop: ' + navTop);
  document.getElementById('assistor').style.top = navTop + 'px';
  // document.getElementById('assistor').style.transform = 'translateY(' + navTop/2 + 'px)';

  // console.log(document.getElementById("content").offsetLeft - document.getElementById("assistor").offsetWidth);


  /*
  if (window.scrollX < document.getElementById("content").offsetLeft - document.getElementById("assistor").offsetWidth) {
    document.getElementById('assistor').style.animation = 'navBarR 0.5s';
    document.getElementById('assistor').style.animationFillMode = 'forwards';
  } else {
    document.getElementById('assistor').style.animation = 'navBar 0.5s';
    document.getElementById('assistor').style.animationFillMode = 'forwards';
  }
  */
  if (window.scrollX < 42) {
    document.getElementById('assistor').style.animation = 'navBarR 0.5s';
    document.getElementById('assistor').style.animationFillMode = 'forwards';
  } else {
    document.getElementById('assistor').style.animation = 'navBar 0.5s';
    document.getElementById('assistor').style.animationFillMode = 'forwards';
  }
});



/* background random
var body = document.getElementById('body');
body.addEventListenr("mouseover",function(){
  var ttt='linear-gradient('+randomDirection()+','+randomColor()+','+randomColor()+','+randomColor()+')';
  alert(ttt);
  document.getElementById('body').style.background = ttt;
});
 
function randomColor(){
  return 'hsl('+Math.floor(Math.random()*361)+',50%,80%)';
}
function randomDirection(){
  return Math.floor(Math.random()*361)+'deg';
}
*/

// ScrollReveal().reveal('.item', {
//   distance: '50px',
//   // 	duration: 1500,
//   easing: 'ease-out',
//   interval: 100,
//   // 	// opacity: 0,
//   //      cleanup:true,
//   reset: true,
//   viewOffset: {
//     top: 0,
//     right: 0,
//     bottom: 0,
//     left: 0,
//   }
// });


// /* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
// particlesJS.load('particles-js', 'assets/particles.json', function() {
//   console.log('callback - particles.js config loaded');
// });



function toTop() {
  scrollTo(0, document.getElementById("hp").offsetHeight - 70);
}
document.getElementById("toTop").addEventListener("click", toTop);
//nav bar on-click?
document.getElementById("navIntro").onclick = function() {
  document.getElementById('intro').style.animation = 'fadeIn2 1s';
  document.getElementById('intro').style.display = 'block';
  document.getElementById('thisWebsite').style.display = 'none';
  document.getElementById('hybridPiano').style.display = 'none';
  document.getElementById('lagrangePolynomial').style.display = 'none';
  document.getElementById('myArtworks').style.display = 'none';
  // init2();
  toTop();
}
document.getElementById("navWeb").onclick = function() {
  document.getElementById('intro').style.display = 'none';
  document.getElementById('thisWebsite').style.animation = 'fadeIn2 1s';
  document.getElementById('thisWebsite').style.display = 'block';
  document.getElementById('hybridPiano').style.display = 'none';
  document.getElementById('lagrangePolynomial').style.display = 'none';
  document.getElementById('myArtworks').style.display = 'none';
  // init2();
  toTop();
}
document.getElementById("navPiano").onclick = function() {
  document.getElementById('intro').style.display = 'none';
  document.getElementById('thisWebsite').style.display = 'none';
  document.getElementById('hybridPiano').style.animation = 'fadeIn2 1s';
  document.getElementById('hybridPiano').style.display = 'block';
  document.getElementById('lagrangePolynomial').style.display = 'none';
  document.getElementById('myArtworks').style.display = 'none';
  // init2();
  toTop();
}
document.getElementById("navCalc").onclick = function() {
  document.getElementById('intro').style.display = 'none';
  document.getElementById('thisWebsite').style.display = 'none';
  document.getElementById('hybridPiano').style.display = 'none';
  document.getElementById('lagrangePolynomial').style.animation = 'fadeIn2 1s';
  document.getElementById('lagrangePolynomial').style.display = 'block';
  document.getElementById('myArtworks').style.display = 'none';
  // init2();
  toTop();
}
document.getElementById("navArts").onclick = function() {
  document.getElementById('intro').style.display = 'none';
  document.getElementById('thisWebsite').style.display = 'none';
  document.getElementById('hybridPiano').style.display = 'none';
  document.getElementById('lagrangePolynomial').style.display = 'none';
  document.getElementById('myArtworks').style.animation = 'fadeIn2 1s';
  document.getElementById('myArtworks').style.display = 'block';
  // init2();
  toTop();
}


/*
to do:
 
ok dropdown video description bug
ok font colors changing different section
context revise
particle js
top bar stays
artwork images max height?
collapsed nav bar for phone?
expected loading duration?
scrolling animation?
*/




// ----------------gallery-----------------
var gallery = document.querySelector('#gallery');
var getVal = function(elem, style) { return parseInt(window.getComputedStyle(elem).getPropertyValue(style)); };
var getHeight = function(item) { return item.querySelector('.content').getBoundingClientRect().height; };
var resizeAll = function() {
  var altura = getVal(gallery, 'grid-auto-rows');
  var gap = getVal(gallery, 'grid-row-gap');
  gallery.querySelectorAll('.gallery-item').forEach(function(item) {
    var el = item;
    el.style.gridRowEnd = "span " + Math.ceil((getHeight(item) + gap) / (altura + gap));
  });
};
gallery.querySelectorAll('img').forEach(function(item) {
  item.classList.add('byebye');
  if (item.complete) {
    console.log(item.src);
  }
  else {
    item.addEventListener('load', function() {
      var altura = getVal(gallery, 'grid-auto-rows');
      var gap = getVal(gallery, 'grid-row-gap');
      var gitem = item.parentElement.parentElement;
      gitem.style.gridRowEnd = "span " + Math.ceil((getHeight(gitem) + gap) / (altura + gap));
      item.classList.remove('byebye');
    });
  }
});
window.addEventListener('resize', resizeAll);
gallery.querySelectorAll('.gallery-item').forEach(function(item) {
  item.addEventListener('click', function() {
    item.classList.toggle('full');
  });
});

// ---------------gallery picture hover----------------
const imgContent = document.querySelectorAll('.galleryContent');
function showImgContent(e) {
  for (var i = 0; i < imgContent.length; i++) {
    x = e.pageX;
    y = e.pageY;
    // console.log($('#gallery').offset().left);
    // console.log('x:' + x + ' , y:' + y);
    imgContent[i].style.transform = `translate3d(${x}px, ${y}px, 0)`;
  }
};
document.addEventListener('mousemove', showImgContent);


// --------------zoom picture-----------------------

// if(window.innerWidth<window.innerHeight){
//   $(".zoomContainer").each(function(){
//     $(this).css({ "width": window.innerWidth+'px', height: "auto"});
//     $(this).css("position", "fixed");
//   })
// }else{
//   $(".zoomContainer").each(function(){
//     $(this).css({ "height": window.innerHeight+'px', width: "auto"});
//     $(this).css("position", "fixed");
//   })
// }

$(".galleryContainer").each(function() {
  $(this).click(function() {
    // console.log('aa');
    document.getElementById('galleryCover').style.display = 'block';
    $(this).find('.zoomContainer').css("display", "block");
    $(".galleryContent").each(function() {
      $(this).css("opacity", "0");
    })
  })
});

document.getElementById('galleryCover').onclick = function() {
  document.getElementById('galleryCover').style.display = 'none';
  $(".zoomContainer").each(function() {
    $(this).css("display", "none");
    $(".galleryContent").each(function() {
      $(this).css("opacity", "1");
    })
  })
}


// // drop down animation
//let j = 1;
// $(".dropDown").each(function() {
//   $(this).click(function() {
//     // console.log('aa');
//     if (j == 1) {
//       $(".videoDescription").each(function() {
//         $(this).css({ "display": "block", "animation": "dropDown" });
//         j = 0;
//       })
//     } else {
//       $(".videoDescription").each(function() {
//         $(this).css({ "animation": "dropDownR", "animationFillMode": "forwards" });
//         j = 1;
//       })
//     }

//   })
// });


$("#dropDown1").mouseover(function() {
  $("#video1Description").css({ "animation": "v1D 1s", "animation-fill-mode": "forwards" });
  $("#description1").css({ "animation": "d 1s", "animation-fill-mode": "forwards" });
  // document.documentElement.style.overflowY = 'hidden';
});
$("#AoiTori").mouseout(function() {
  $("#video1Description").css({ "animation": "v1DR 1s", "animation-fill-mode": "forwards" });
  $("#description1").css({ "animation": "dR 1s", "animation-fill-mode": "forwards" });
  // window.scrollTo({top:winY,behavior:'null'});
  // document.documentElement.style.overflowY = 'scroll';
})
$("#dropDown2").mouseover(function() {
  document.getElementById("Swordland").style.animation = "none";
  $("#video2Description").css({ "animation": "v2D 1s", "animation-fill-mode": "forwards" });
  $("#description2").css({ "animation": "d 1s", "animation-fill-mode": "forwards" });
  // document.documentElement.style.overflowY = 'hidden'; 


  /*for(i=0;i<50000;i++){
  }
  console.log("loop finished");
  $("#Swordland").mouseout(function() {
    $("#video2Description").css({ "animation": "v2DR 1s", "animation-fill-mode": "forwards" });
    $("#description2").css({ "animation": "dR 1s", "animation-fill-mode": "forwards" });
    // document.documentElement.style.overflowY = 'scroll'; 
  })*/

});

// document.getElementById("video2Description").addEventListener("animationend", function() {
// console.log('a');
$("#Swordland").mouseout(function() {
  console.log('a');
  $("#video2Description").css({ "animation": "v2DR 1s", "animation-fill-mode": "forwards" });
  $("#description2").css({ "animation": "dR 1s", "animation-fill-mode": "forwards" });
  // document.documentElement.style.overflowY = 'scroll'; 
})
// });


// $(".componentList").each(function(){
//   $(this).mouseover(function(){
//     alert("a");
//     $(this> ".detail").css({"display":"block"});
//   })
// })

// const detail = document.querySelectorAll('.detail');
// function showDetail(e) {
//   for (var i = 0; i < detail.length; i++) {
//     x = e.pageX;
//     y = e.pageY;
//     // console.log($('#gallery').offset().left);
//     // console.log('x:' + x + ' , y:' + y);
//     detail[i].style.transform = `translate3d(${x}px, ${y}px, 0)`;
//   }
// };
// document.addEventListener('mousemove', showDetail);
/*
*This file regulates the navigation with  Ctrl. +  ←,→,↑,↓
*/
$(document).ready(function() {
    var map = [];
    onkeydown = onkeyup = function(e){
      e = e || event;
      map[e.keyCode] = e.type == 'keydown';
      if (map[17]){
        if(map[37]){ //LEFT-Arrowkey
          if (isElementInViewport($('#divCenter'))) {
            swipe("center", "right");
            includeHTML();
          } else if (isElementInViewport($('#divRight'))) {
            swipe("right", "left");
          }
        } else if(map[39]){ //RIGHT--Arrowkey
          if (isElementInViewport($('#divCenter'))) {
            swipe("center", "left");
            includeHTML();
          } else if (isElementInViewport($('#divLeft'))) {
            swipe("left", "right");
          }
        } else if(map[38]){ //UP--Arrowkey
          if (isElementInViewport($('#divCenter'))) {
            swipe("center", "down");
            includeHTML();
          } else if (isElementInViewport($('#divBottom'))) {
            swipe("bottom", "down");
          }
        } else if(map[40]){ //DOWN--Arrowkey
          if (isElementInViewport($('#divCenter'))) {
            swipe("center", "up");
            includeHTML();
          } else if(isElementInViewport($('#divTop'))){
            swipe("top", "down");
          }
        }
      }
    }
});


/**
 * this function handles the slide effect of the two affected sites
 * @param  {[string]} actualPage [the name of the actal page without the ending]
 * @param  {[string]} arrow      [the direction of the arrow]
 * @return {[type]}            [description]
 */
function swipe(actualPage, arrow){
  switch (actualPage+"-"+arrow) {
    // ## CENTER, ← → ↑ ↓
    case 'center-left':
      $("#divCenter").toggle("slide", {direction: "left"}, 500);
      $("#divRight").toggle("slide", {direction: "right"}, 500);
      break;
    case 'center-right':
      $("#divCenter").toggle("slide", {direction: "right"}, 500);
      $("#divLeft").toggle("slide", {direction: "left"}, 500);
      break;
    case 'center-up':
      $("#divCenter").toggle("slide", {direction: "up"}, 500);
      $("#divBottom").toggle("slide", {direction: "down"}, 500);
      break;
    case 'center-down':
      $("#divCenter").toggle("slide", {direction: "down"}, 500);
      $("#divTop").toggle("slide", {direction: "up"}, 500);
      break;
    // ## RIGHT, ←
    case 'right-left':
      $("#divCenter").toggle("slide", {direction: "left"}, 500);
      $("#divRight").toggle("slide", {direction: "right"}, 500);
      break;
    // ## LEFT, →
    case 'left-right':
      $("#divCenter").toggle("slide", {direction: "right"}, 500);
      $("#divLeft").toggle("slide", {direction: "left"}, 500);
      break;
    // ## TOP, ↓
    case 'top-down':
      $("#divCenter").toggle("slide", {direction: "down"}, 500);
      $("#divTop").toggle("slide", {direction: "up"}, 500);
      break;
    // ## BOTTOM, ↑
    case 'bottom-down':
      $("#divCenter").toggle("slide", {direction: "up"}, 500);
      $("#divBottom").toggle("slide", {direction: "down"}, 500);
      break;
    default:
      console.log("something went wrong");
  }
}

function isElementInViewport (el) {
    //because of JQuery
    if (typeof jQuery === "function" && el instanceof jQuery) {
        el = el[0];
    }
    var rect = el.getBoundingClientRect();
    return (
      rect.top == 0 &&
      rect.left == 0 &&
      rect.bottom == (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right == (window.innerWidth || document.documentElement.clientWidth)
    );
}

/*
$(document).ready(function(){
  $(".imgArrowRight").on("click", function(){
    console.log("click");
    swipe("center", "left");
  });
});
*/

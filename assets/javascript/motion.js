function getStyle(id, name) {
  var element = document.getElementById(id);
  return element.currentStyle? element.currentStyle[name]: 
         window.getComputedStyle? window.getComputedStyle(element, null).getPropertyValue(name): null;
}

function showBBT() {
  var x = getStyle('bbt', 'display');
  var show = document.getElementById('bbt');
  var but = document.getElementById('but_hob');

  if (x == 'none') {
      show.style.display = 'block';
      but.value = "Click me to close";
  } else {
      show.style.display = 'none';
      but.value = "Click me to find out!";
  }
}

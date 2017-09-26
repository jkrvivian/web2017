function showBBT() {
  var x = document.getElementById('bbt');
  var but = document.getElementById('but_hob');
  if (x.style.display === 'none') {
      x.style.display = 'block';
      but.value = "Click me to close";
  } else {
      x.style.display = 'none';
      but.value = "Click me to find out!";
  }
}

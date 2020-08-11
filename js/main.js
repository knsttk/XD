  var rellax = new Rellax('.circleleft');
  var rellax = new Rellax('.circleright');
  
  if(document.body.clientWidth < 576)
  {
    rellax.destroy();
  }
  AOS.init();

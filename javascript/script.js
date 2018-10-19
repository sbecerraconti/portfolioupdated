window.onload = () => {
  checkPosition = () => {
    setTimeout(() => {
      var url = window.location.hash;
      compareSection(url);
    }, 50);
  };

  window.onscroll = function() {
    var section = document.getElementsByClassName("section");
    var bScroll = document.body.scrollTop;
    for (var i = 0; i < section.length; i++) {
      var sHeight = section[i].offsetHeight;
      var offsets = section[i].offsetTop;
      if (bScroll+80 > offsets && bScroll < offsets + sHeight) {
        var currentSection = `#${section[i].id}`;
        compareSection(currentSection);
      }
    }
};

compareSection = (currentSection) => {
  var elements = document.querySelectorAll('.nav-link');
  for(i=0; i < elements.length; i++) {
    if(elements[i].getAttribute('name') == currentSection) elements[i].classList.add('active');
    else elements[i].classList.remove('active');
  }
};
};

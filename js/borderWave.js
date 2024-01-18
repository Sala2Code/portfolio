document.addEventListener('scroll', function() {
    var scrollPosition = window.scrollY;
  
    var speed_back = 0.005;
    var speed_mid = 0.009;
    var speed_top = 0.019;


    var borderWave_back = document.getElementsByClassName('borderWave_back');
    var borderWave_mid = document.getElementsByClassName('borderWave_mid');
    var borderWave_top = document.getElementsByClassName('borderWave_top');


    for (var i = 0; i < 2; i++) {
      borderWave_back[i].style.transform = `translateY(-${scrollPosition * speed_back}vh)`;
      borderWave_mid[i].style.transform = `translateY(-${scrollPosition * speed_mid}vh)`;
      borderWave_top[i].style.transform = `translateY(-${scrollPosition * speed_top}vh)`;
    }

  });

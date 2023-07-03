$(function() {
  // // Typewriter
  // new Typewriter('#typewriter', {
  //   strings: [
  //     'skjorter',
  //     'jakkesæt',
  //     'vintertøj',
  //     'rensetøj',
  //     'vasketøj',
  //     'sengetøj',
  //   ],
  //   autoStart: true,
  //   loop: true,
  // });

  // Initialize Flickity
  if (xs) {
    $('#carousel').flickity({
      freeScroll: false,
      cellAlign: 'center',
      prevNextButtons: false,
    });
  } else {
    $('#carousel').flickity({
      freeScroll: true,
      cellAlign: 0.25,
    });
  }

  // // Initialize Glider (Handle)
  // $('#we-handle-content-glide').flickity({
  //   freeScroll: false,
  //   cellAlign: 'center',
  //   prevNextButtons: false,
  // });
});

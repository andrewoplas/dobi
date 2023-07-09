$(function () {
	// Typewriter
	new Typewriter('#typewriter', {
		strings: ['word 1', 'word 2', 'word 3', 'word 4', 'word 5', 'word 6'],
		autoStart: true,
		loop: true,
	});

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
});

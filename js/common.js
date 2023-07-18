$(function () {
	// Initialize navbar sticky
	const sticky = xs ? 30 : 117;
	const onScroll = function () {
		if (window.pageYOffset >= sticky) {
			$('#sticky-navbar').addClass('active');
		} else {
			$('#sticky-navbar').removeClass('active');
		}
	};
	window.onscroll = onScroll;
	onScroll();

	// Initialize menu toggle
	$('.menu-toggle').click(function () {
		$('.menu-xs').toggleClass('active');
	});

	// Change collapse icon
	$('.collapse').on('show.bs.collapse hide.bs.collapse', function () {
		$(this).parent().find('.header').find('.rotate').toggleClass('rotate-90');
	});

	// Lazy load
	new LazyLoad();

	// Show more / less prices button
	$('.see-more-prices button').click(function () {
		const searchResultsList = $('.search-results-list');

		if (searchResultsList.hasClass('active')) {
			searchResultsList.css('max-height', '100vh');
			$(this).text('Se flere priser');
		} else {
			const links = searchResultsList.find('a');
			const height = links.eq(0).outerHeight(true);
			const length = links.length;

			searchResultsList.css('max-height', height * length + 'px');
			$(this).text('Se færre priser');
		}

		searchResultsList.toggleClass('active');
	});

	// Filter prices hover animation
	const animation = $('.filter-wrapper .animation');
	$('.filter-wrapper button').hover(
		function () {
			const width = $(this).outerWidth();
			const left = $(this).position().left;
			animation.css('width', width + 'px');
			animation.css('left', left + 'px');
		},
		function () {
			const activeElement = $('.filter-wrapper button.active');
			const width = activeElement.outerWidth();
			const left = activeElement.position().left;
			animation.css('width', width + 'px');
			animation.css('left', left + 'px');
		},
	);
});

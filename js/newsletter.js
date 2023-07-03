$(function() {
  // Initialize navbar sticky
  const stickyOverride = xs ? 0 : 10;
  const onScrollOverride = function() {
    if (window.pageYOffset >= stickyOverride) {
      $('#sticky-navbar').addClass('active');
    } else {
      $('#sticky-navbar').removeClass('active');
    }
  };
  window.onscroll = onScrollOverride;
  onScrollOverride();
});

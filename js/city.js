$(function() {
  $('.tabs li').click(function() {
    const tabs = $('.tabs li');
    const content = $('.tabs-contents');

    tabs.removeClass('active');
    $(this).addClass('active');
    const index = $(this).index();

    content.find('.tab-content').removeClass('active');
    content
      .find('.tab-content')
      .eq(index)
      .addClass('active');
  });
});

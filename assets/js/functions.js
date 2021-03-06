function smoothScroll (duration) {
  $('a[href^="#"]').on('click', function(event) {

    var target = $( $(this).attr('href') );

    if( target.length ) {
      event.preventDefault();
      $('html, body').animate({
          scrollTop: target.offset().top
      }, duration);
    }
  });
}

function workBelt() {

  $('.thumb-unit').click(function() {
    $('.work-belt').css('left', '-100%');
    $('.work-container').show(300);
  });

  $('.work-return').click(function(){
    $('.work-belt').css('left', '0%');
    $('.work-container').hide(300);
  });
}

function workLoad() {

  $.ajaxSetup({ cache: false });

  $('.thumb-unit').click(function() {

    var $this = $(this),
        newTitle = $this.find('strong').text(),
        newFolder = $this.data('folder'),
        spinner = '<div class="loader">Loading...</div>',
        newHTML = '/work/'+ newFolder +'.html';
    $('.project-load').html(spinner).load(newHTML);
    $('.work-headline').text(newTitle);
  });

}

$(function(){
  smoothScroll(400);
  workBelt();
  workLoad();
})
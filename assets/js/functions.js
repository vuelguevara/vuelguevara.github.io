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

function clientSlide() {
  $('.client-logo').click(function() {
    var $this = $(this),
        $siblings = $this.parent().children(),
        position = $siblings.index($this);
        
    $('.client-slide').removeClass('client-slide--active animated flipInY').eq(position).addClass('client-slide--active animated flipInY');
    $siblings.removeClass('client-logo--active');
    $this.addClass('client-logo--active');        
  });

  $('.next-button, .back-button').click(function() {
    var $this = $(this),
        curActiveClient = $('.client-slides-container').find('.client-slide--active', '.client-logo--active'),
        position = $('.client-slides-container').children().index(curActiveClient),
        clientNum = $('.client-slide').length;

      if($this.hasClass('next-button')) {
        if(position < clientNum -1){
          $('.client-slide--active').removeClass('client-slide--active animated flipInY').next().addClass('client-slide--active animated flipInY');
          $('.client-logo--active').removeClass('client-logo--active').next().addClass('client-logo--active');
      } else {
          $('.client-slide').removeClass('client-slide--active animated flipInY').first().addClass('client-slide--active animated flipInY');
          $('.client-logo').removeClass('client-logo--active').first().addClass('client-logo--active');
      }
    } else {

      if(position === 0){
        $('.client-slide').removeClass('client-slide--active animated flipInY').last().addClass('client-slide--active animated flipInY');
        $('.client-logo').removeClass('client-logo--active').last().addClass('client-logo--active');
    } else {
        $('.client-slide--active').removeClass('client-slide--active animated flipInY').prev().addClass('client-slide--active animated flipInY');
        $('.client-logo--active').removeClass('client-logo--active').prev().addClass('client-logo--active');
    }
    }
  });

}

$(function(){
  smoothScroll(400);
  workBelt();
  workLoad();
  clientSlide();
})
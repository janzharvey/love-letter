$(document).ready(function() {
    var envelope = $('#envelope');
    var parrot = $('#parrot')
    var stamp = $('#stamp');
    var close_button = $('#close_button');
    var letter = $('#letter');
    var popup = $('#popup');
    var overlay = $('#overlay');
    var show_button = $('#show');
    var words = $('.words')
  
    stamp.click(function() {
        open();
    });

    letter.click(function(){
        read();
    })
  
    show_button.click(function() {
        show();
    });
    
    function open() {
        envelope.addClass('open')
            .removeClass('close');
    }
    function close() {
        envelope.addClass('close')
            .removeClass('open');
    }

    function read(){
        letter.addClass('read');
        setTimeout(function() {
            parrot.removeClass('hidden')
            words.addClass('hidden')
            letter.css('transform', 'translateY(0px)');
            letter.css('z-index', 10);
            letter.css('height', '450px')
            letter.css('top', '-120px') 
        }, 1000);
    }

    function show(){    
        popup.addClass('show');
        overlay.css('display', 'block')
    }
})
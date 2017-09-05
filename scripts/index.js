$(window).scroll(
    {
        previousTop: 0
    },
    function () {
    var currentTop = $( window ).scrollTop();
    if ( currentTop < this.previousTop ) {
        $( "#menu" ).fadeIn( 200 );
    }
    else {
        $( "#menu" ).fadeOut( 400 );
    }
    this.previousTop = currentTop;
    });

// we want when humberger menu click ==> shoiw the items and some css design for beauty
var humberger = $('.humberger');
humberger.click(function(){
    // change humberger to (X)
    humberger.toggleClass('combine-nav-humberger');
    // show navbar
    var navbar = $('nav');
    navbar.toggleClass('show');
});
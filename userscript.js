(function() {
    var a = {
        b: function() {
            if (typeof API !== 'undefined' && API.enabled)
                this.c();
            else
                setTimeout(function() { a.b(); }, 100);
        },
        c: function() {
            console.log('Dub X loader enabled!');
            $.getScript('https://rawgit.com/sinfulBA/DubX-Script/master/beta.js');
        }
    };
    a.b();
})();

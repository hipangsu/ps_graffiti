;(function(){
    window.common = {};

    common = {

        mode: {
            target: document.querySelector('.mode-btn'),

            click: function() {
                const html = document.querySelector('html');
    
                html.classList.toggle('dark');
                console.log('ez');
            },
            init: function() {
                const o = this;

                o.target.addEventListener('click', function() {
                    o.click();
                    console.log(this);
                })
            },
        },


    }

    document.addEventListener('DOMContentLoaded', function(){
        common.mode.init();
    });
    
})(window, document);

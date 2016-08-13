
class DisqusManager {

    constructor ( disqus_shortname = '//https-github-com-danilobabovic') {

        this.disqus_shortname = disqus_shortname
        this.loaded = false
        this.lang = "en";
        this.enabled = true
    }

    loadDisqusScrpt ( _disqus_identifier, newUrl, newTitle ) {

        var disqus_shortname = this.disqus_shortname
        var disqus_identifier = _disqus_identifier

        var disqus_url = newUrl
        console.log ( "loadDisqusScrpt", disqus_identifier, newUrl, newTitle )
        var disqus_config = function () {
    	  this.language = "en";
    	};

        /* * * DON'T EDIT BELOW THIS LINE * * */
        (function() {
            var dsq = document.createElement('script');
            dsq.type = 'text/javascript';
            dsq.async = true;
            dsq.src = disqus_shortname + '.disqus.com/embed.js';
            (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(dsq);
            console.log("init",dsq.page);
        })();

        console.log ('loadDisqusScrpt:disqus_config:' + disqus_config)
        this.loaded = true
    }

    insert ( disqus_identifier, newUrl, newTitle ) {

        if (this.enabled == false) return

        if ( this.loaded == false ) {

            this.loadDisqusScrpt ( disqus_identifier, newUrl, newTitle )

        } else {

            console.log ( "reset", disqus_identifier, newUrl, newTitle )
            DISQUS.reset({
                reload: true,
                config: function () {
                    this.page.identifier = disqus_identifier;
                    this.page.url = newUrl;
                    //this.page.title = newTitle;
                    this.language = this.lang;
                }
            });
        }
    }
}

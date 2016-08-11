
class DisqusManager {

    constructor ( disqus_shortname = '//https-github-com-danilobabovic') {

        this.disqus_shortname = disqus_shortname
        this.loaded = false
        this.lang = "en";
        this.enabled = true
    }

    loadDisqusScrpt ( ) {

        var disqus_shortname = this.disqus_shortname
        var disqus_identifier = this.disqus_identifier

        var disqus_url = this.disqus_url
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
        })();

        this.loaded = true
    }

    insert ( disqus_identifier, newUrl, newTitle ) {

        if (this.enabled == false) return
        
        this.disqus_identifier = disqus_identifier
        this.disqus_url = newUrl
        this.newTitle = newTitle

        if ( this.loaded ) {

            DISQUS.reset({
                reload: true,
                config: function () {
                    this.page.identifier = newIdentifier;
                    this.page.url = newUrl;
                    this.page.title = newTitle;
                    this.language = newLanguage;
                }
            });

        } else {

            this.loadDisqusScrpt ( )
        }
    }
}

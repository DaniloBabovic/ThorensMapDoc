class Page_1 extends PageContent{

    constructor(siteGen) {

        super(siteGen)
        this.page.makeTitle("Live", 'rgba(50, 100, 230, 1)')

        let disqus_identifier = "thorens_map_doc_live"
        let newTitle = "Thorens Live Page"

        this.disqus ( disqus_identifier, newTitle )
    }
}

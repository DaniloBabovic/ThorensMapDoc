class Page_1 extends PageContent{

    constructor(siteGen) {

        super(siteGen)
        this.page.makeTitle("Live", 'rgba(50, 100, 230, 1)')
        this.disqus ( )
    }

    disqus ( ) {

        const onDivInserted = ( ) => {

            let disqus_identifier = "ThorensMapDocLive"

            let newUrl = this.siteGen.siteURL + "index.html?page=1"

            let newTitle = "Thorens Doc Live"

            this.siteGen.disqus.insert ( disqus_identifier, newUrl, newTitle  )
        }
        let post = this.page.makePostSimple('', 40)
        let {t, l, c, nl, div, para} = new TextBuilder().allMethods()
        t('<div id="disqus_thread"></div>'); nl()
        post.addText(para())
        this.page.onInsert = () => onDivInserted ( )
    }
}

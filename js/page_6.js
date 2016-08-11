class Page_6 extends PageContent{

    constructor(siteGen) {

        super(siteGen)
        this.page.makeTitle("Support", 'rgba(0, 80, 80, 1)')

        this.disqus ( "Support", 6 )
    }

    disqus ( name, pageNumber) {

        const onDivInserted = ( ) => {

            let disqus_identifier = "ThorensMapDoc" + name

            let newUrl = this.siteGen.siteURL + "index.html?page=" + pageNumber

            let newTitle = "Thorens Doc " + name

            this.siteGen.disqus.insert ( disqus_identifier, newUrl, newTitle  )
        }
        let post = this.page.makePostSimple('', 40)
        let {t, l, c, nl, div, para} = new TextBuilder().allMethods()
        t('<div id="disqus_thread"></div>'); nl()
        post.addText(para())
        this.page.onInsert = () => onDivInserted ( )
    }
}

class SiteGen {

    constructor(pageNames) {

        this.headerDiv = document.getElementById("header_div");
        this.pageDiv = document.getElementById("page_div");
        this.bottomDiv = document.getElementById("bottom_div");

        this.pageNames = pageNames
        this.pages = []
        this.footer = null

        this.sitePath = ''

        this.setPath()
        this.header = null
        this.sourceIsFile = false
        switch(window.location.protocol) {
           case 'http:':
           case 'https:':
             //remote file over http or https
             break;
           case 'file:':
             this.sourceIsFile = true
             break;
           default:
             //some other protocol
        }
    }


    setPath() {

        this.filename = ''


        this.url = document.location.toString()
        let index  = this.url.lastIndexOf("/");

        if (index > 0) {

            this.filename = this.url.substring(index + 1)
            this.sitePath = this.url.substring(0, index + 1)
            setGlobalSitePath ( this.sitePath )

        } else {

            this.filename = this.url

        }
        let indexRight  = this.filename.lastIndexOf("?");

        if (indexRight > 0) {

            this.filename = this.filename.substring(0, indexRight);

        }
    }

    createHeader(
                    logoRelativePath = null,
                    backgroundImage = 'url("img/earth_background.png")',
                    siteName = "Python stuff",
                    logoWidth = -1,
                    logoHeight = -1
                )
    {
        this.header = new Header(
                                    this,
                                    logoRelativePath,
                                    backgroundImage,
                                    siteName,
                                    logoWidth,
                                    logoHeight
                                )
        this.createFooter()
        return this.header
    }

    createFooter() {

        this.footer = new Footer(this)
    }

    makePage(pageName) {

        if(this.header == null) {

            alert("Error creeate page. Create header with this page name first ")
            return null
        }
        for(let i = 0; i < this.header.pages.length; i++)
        {
            if (this.header.pages[i] == pageName)
            {
                var page = new Page(this, pageName)
                this.pages.push(page)
                return page
            }
        }
        alert("Error creeate page. Create header with this page name first ")
        return null
    }

    showPage()
    {
        function show(header, currentPage, footer)
        {
            header.insert()
            currentPage.insert()
            footer.insert()
        }
        let pageNumber = location.search.split('page=')[1]
        if(pageNumber === undefined) pageNumber = "-1"

        this.currentPageIndex = parseInt(pageNumber)

        if (this.currentPageIndex < 1) {

            this.currentPageIndex = 0
            this.currentPage = this.pages[0]
            show(this.header, this.currentPage, this.footer)
        }
        else {
            if (this.currentPageIndex > (this.pages.length-1)) {
                alert("Page index out of range")
            }
            else {
                this.currentPage = this.pages[pageNumber]
                show(this.header, this.currentPage, this.footer)
            }
        }
    }

    pageChanged(pageName) {

        for (let i = 0; i < this.pageNames.length; i++)
        {
            if (pageName == this.pageNames[i])
            {
                this.pageDiv.innerHTML = ''
                this.currentPageIndex = i
                this.currentPage = this.pages[i]
                this.currentPage.insert()

                break
            }
        }

        this.header.updateSelected(this.currentPageIndex)
        this.footer.updateSelected(this.currentPageIndex)

        Rainbow.color();

        if (this.sourceIsFile == false) {

            if (window.history.state) {
                window.history.pushState(

					'index.html',
					'index.html',
                    'index.html?page=' + this.currentPageIndex
                )
            }
        }
        else {
            console.log( "this.sourceIsFile == true")
            //window.location.href = 'index.html?page=' + this.currentPageIndex;
        }
    }
}

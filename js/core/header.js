class Header {

    constructor(siteGen, logoRelativePath, backgroundImage, siteName, logoWidth, logoHeight) {

        this.pages = siteGen.pageNames
        this.siteGen = siteGen
        this.headerDiv = siteGen.headerDiv
        this.siteName = siteName
        document.title = siteName

        this.logoRelativePath = logoRelativePath
        this.backgroundImage = backgroundImage

        this.logoWidth = logoWidth
        this.logoHeight = logoHeight

        this.links = ''

    }

    makeHeaderBody()
    {
        // max-width: 100%
        this.html = `
            <div class="grid" style="margin-top: 0px; max-width: 100%">
                <nav class="main-nav hide-on-mobiles" style="width: 100%; text-align: center; ">
                    <ul id="header_ul" style="margin-top: 142px; width: 100%; text-align: center; ">
                        ` + this.links + `
                    </ul>
                </nav>
                <div class="clear"></div>
            </div>`
    }

    onImageLoad()
    {

        let logoImgElement = document.getElementById("logo_img")
        let logo_img_div = document.getElementById("logo_img_div")
        logoImgElement.src = this.logo_img.src

        if ((this.logoWidth == -1) && (this.logoHeight == -1)){
            this.logoWidth = this.logo_img.width
            this.logoHeight = this.logo_img.height
        }
        else {
            logo_img_div.style.width = this.logoWidth + 'px'
            logo_img_div.style.height = this.logoHeight + 'px'

            logoImgElement.style.width = this.logoWidth + 'px'
            logoImgElement.style.height = this.logoHeight + 'px'
        }
    }

    loadLogo() {

        if ( this.logoRelativePath == null ) return
        this.logo_img = new Image();
        this.logo_img.src = this.logoRelativePath;
        this.logo_img.onload = () => this.onImageLoad();
    }

    setPage(pageName) {

        this.pages.push(pageName)
    }

    onPageClick(pageName)
    {
        siteGen.pageChanged(pageName)
    }

    updateSelected(newPageIndex) {

        let oldIndex = this.currentPageIndex
        let oldID = "header_link_" + oldIndex

        this.currentPageIndex = newPageIndex
        let newID = "header_link_" + newPageIndex

        let ulElementOld = document.getElementById(oldID)
        let ulElementNew = document.getElementById(newID)

        ulElementOld.setAttribute("class", "notCurrent");
        ulElementNew.setAttribute("class", "current");
    }

    insert() {

        this.makeHeaderBody()
        this.header  = document.createElement("header");
        this.header.setAttribute("role", "banner");
        this.header.style["width"] = '100%'
        //this.header.style["height"] = '180px'

        this.header.style["background-image"] = this.backgroundImage
        this.header.style["background-repeat"] = "no-repeat"


        this.header.innerHTML = this.html
        this.headerDiv.appendChild(this.header);

        this.loadLogo()

        this.ulElement = document.getElementById("header_ul")
        const insertPage = (ul, pageName, index, onClick, filename) => {

            var li  = document.createElement("li");
            //let href = filename + '?page=' + index
            let href = ''
            let linkID = ' id = "header_link_' + index + '" '
            if (index == siteGen.currentPageIndex) {

                li.innerHTML = `<li ` + linkID + ` class="current">
                    <a >` + pageName + `</a>
                    </li>`
            }
            else {

                li.innerHTML = `<li ` + linkID + ` class="">
                    <a >` + pageName + `</a>
                    </li>`
            }
            li.onclick = () => (onClick(pageName))
            li.style.cursor = 'pointer'
            ul.appendChild(li)
        }

        for(let i = 0; i < this.pages.length; i++)
        {
            let pageName = this.pages[i]
            insertPage  (   this.ulElement,
                            pageName,
                            i,
                            this.onPageClick,
                            this.siteGen.filename
                        )
        }
        this.currentPageIndex = siteGen.currentPageIndex
    }
}

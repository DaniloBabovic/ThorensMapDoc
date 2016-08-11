class Footer {

    constructor(siteGen) {

        this.pages = siteGen.pageNames
        this.siteGen = siteGen
        this.bottomDiv = siteGen.bottomDiv
        this.backgroundColor = '#222222'

        this.siteName = siteGen.header.siteName

        this.logoRelativePath = siteGen.header.logoRelativePath
        this.logoWidth = siteGen.header.logoWidth
        this.logoHeight = siteGen.header.logoHeight
        this.image_scale = 0.64
        this.links = ''
    }

    makefooterBody()
    {

        //style="max-width: 90%"
        this.html = `
            <div class="grid" style="max-width: 100%">

                <nav class="main-nav unit half hide-on-mobiles" style="width:100%; text-align: center;"">
                    <ul id="footer_ul">
                        ` + this.links + `
                    </ul>
                </nav>

            </div>
            <div style="width: 100%; text-align: center; padding-bottom: 30px; padding-top: 30px">
                © 2016 MapAlchemy
            </div>
            `


    }

    onImageLoad()
    {

        let logoImgElement = document.getElementById("logo_img_footer")
        let logo_img_div = document.getElementById("logo_img_div_footer")
        logoImgElement.src = this.logo_img.src

        if ((this.logoWidth == -1) && (this.logoHeight == -1)){
            this.logoWidth = this.logo_img.width
            this.logoHeight = this.logo_img.height
        }
        else {
            logo_img_div.style.width = (this.logoWidth * this.image_scale) + 'px'
            logo_img_div.style.height = (this.logoHeight * this.image_scale) + 'px'

            logoImgElement.style.width = (this.logoWidth * this.image_scale) + 'px'
            logoImgElement.style.height = (this.logoHeight * this.image_scale) + 'px'
        }
    }

    loadLogo() {

        return
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
        document.body.scrollTop = document.documentElement.scrollTop = 0;
    }

    updateSelected(newPageIndex) {

        let oldIndex = this.currentPageIndex
        let oldID = "footer_link_" + oldIndex

        this.currentPageIndex = newPageIndex
        let newID = "footer_link_" + newPageIndex

        let ulElementOld = document.getElementById(oldID)
        let ulElementNew = document.getElementById(newID)

        ulElementOld.setAttribute("class", "notCurrent");
        ulElementNew.setAttribute("class", "current");
    }

    insert() {

        this.makefooterBody()
        this.footer  = document.createElement("footer");
        this.footer.setAttribute("role", "banner");
        this.footer.style["width"] = '100%'

        this.footer.style["background-color"] = this.backgroundColor

        this.footer.innerHTML = this.html
        this.bottomDiv.appendChild(this.footer);

        this.loadLogo()

        this.ulElement = document.getElementById("footer_ul")
        function insertPage(ul, pageName, index, onClick, filename)
        {
            var li  = document.createElement("li");
            //let href = filename + '?page=' + index
            let href = ''
            let linkID = ' id = "footer_link_' + index + '" '

            if (index == siteGen.currentPageIndex) {

                li.innerHTML = `<li  ` + linkID + ` class="current">
                    <a>` + pageName + `</a>
                    </li>`
            }
            else {

                li.innerHTML = `<li  ` + linkID + ` class="">
                    <a>` + pageName + `</a>
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
        Rainbow.color();
    }
}

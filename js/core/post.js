function htmlToElement(html)
{
    var template = document.createElement('template');
    template.innerHTML = html;
    return template.content.firstChild;
}

class PostBase {

    constructor(page) {

        this.page = page
        this.siteGen = page.siteGen
        this.pageDiv = this.siteGen.pageDiv
        this.texts = []
    }

    addText(text = '') {

        this.texts.push(text)
    }

    insert() {

        this.html = ''
        for(let i = 0; i < this.texts.length; i++)
        {
            this.html += this.texts[i] + ' '
        }

        this.element = htmlToElement('<section>' + this.html + '</section>')
        this.pageDiv.appendChild(this.element)
    }
}

class Post extends PostBase {

    constructor(page) {

        super(page)
    }

    createPostBody() {

        this.bodyHTML = ''
        for(let i = 0; i < this.texts.length; i++)
        {
            this.bodyHTML += this.texts[i] + ' '
        }

        this.html = `<section class="free-hosting">
            <div class="grid">
                <div class="unit whole">
                    <div class="unit whole center-on-mobiles">
                    <article style="box-shadow: 5px 5px 20px #444444;">
                        <h2>
                            <a href="` + this.titleUrl + `">
                            ` + this.titleText + `
                            </a>
                        </h2>
                        <span class="post-category">
                            <span class="label">
                                ` + this.infoText + `
                            </span>
                        </span>
                        <div class="post-meta">
                            <span class="post-date">
                                ` + this.dateString + `
                            </span>
                            <a href="` + this.autorLink + `" class="post-author">
                                ` + this.autor + `
                            </a>
                        </div>
                        <div class="post-content">
                            <br>
                            ` + this.bodyHTML + `
                        </div>
                        </article>
                    </div>
                    <div class="clear"></div>
                </div>
            </div>
        </section>
        `
    }

    setTitle(titleText = 'Title', titleUrl = '') {

        this.titleText = titleText
        this.titleUrl = titleUrl
    }

    setPostInfo(infoText = "infoText", dateString = '', autor = '', autorLink = '') {

        this.infoText = infoText
        this.dateString = dateString
        this.autor = autor
        this.autorLink = autorLink
    }

    insert() {

        this.createPostBody()
        this.element = htmlToElement(this.html)
        this.pageDiv.appendChild(this.element)
    }
}

class PostSimple {

    constructor(page, titleText = 'Title', marginTop = 20) {

        this.titleText = titleText
        this.marginTop = marginTop
        this.page = page
        this.siteGen = page.siteGen
        this.pageDiv = this.siteGen.pageDiv
        this.texts = []
    }


    createPostBody() {

        this.bodyHTML = ''
        for(let i = 0; i < this.texts.length; i++)
        {
            this.bodyHTML += this.texts[i] + ' '
        }

        this.html = `<section class="free-hosting" style="margin-top: ` + this.marginTop + `px">
                        <div class="grid">
                            <div class="unit whole">
                                <article style="box-shadow: 5px 5px 20px #444444; margin: 0px">
                                    <div class="pane-content" style="margin: 0px">
                                        <h2 class="center-on-mobiles">` + this.titleText + `</h2>
                                        ` + this.bodyHTML + `
                                    </div>
                                    <div class="clear"></div>
                                </<article>
                            </div>
                            <div class="clear"></div>
                        </div>
                    </section>
        `
    }

    addText(text = '') {

        this.texts.push(text)
    }

    insert() {

        this.createPostBody()
        this.element = htmlToElement(this.html)
        this.pageDiv.appendChild(this.element)
    }
}

class PostThreeColums {

    constructor(    page,
                    titleOne = 'Title One',
                    titleTwo = 'Title Two',
                    titleThree = 'Title Three'
                ) {

        this.page = page
        this.siteGen = page.siteGen
        this.pageDiv = this.siteGen.pageDiv

        this.titleOne = titleOne
        this.titleTwo = titleTwo
        this.titleThree = titleThree

        this.textOne = []
        this.textTwo = []
        this.textThree = []

        this.textBuilderOne = new TextBuilder()
        this.textBuilderTwo = new TextBuilder()
        this.textBuilderThree = new TextBuilder()

        this.marginTop =0
        this.backgroundColor = "#004444"
    }

    getTextBuilderOne()
    {
        return this.textBuilderOne
    }

    getTextBuilderTwo()
    {
        return this.textBuilderTwo
    }

    getTextBuilderThree()
    {
        return this.textBuilderThree
    }

    createPostBody() {

        this.html = `<section class="features"
            style="margin-top: ` + this.marginTop + `px;
            background-color: ` + this.backgroundColor + `">

            <div class="grid">
                <div class="unit one-third">
                    <h2>` + this.titleOne + `</h2>
                    <p>
                        ` + this.textBuilderOne.getText() + `
                    </p>
                    <div class="clear"></div>
                </div>
                <div class="unit one-third">
                    <h2>` + this.titleTwo + `</h2>
                    <p>
                        ` + this.textBuilderTwo.getText() + `
                    </p>
                    <div class="clear"></div>
                </div>
                <div class="unit one-third">
                    <h2>` + this.titleThree + `</h2>
                    <p>
                        ` + this.textBuilderThree.getText() + `
                    </p>
                    <div class="clear"></div>
                </div>
                <div class="clear"></div>
            </div>
        </section>
        `
    }

    insert() {

        this.createPostBody()
        this.element = htmlToElement(this.html)
        this.pageDiv.appendChild(this.element)
    }
}


class PostFancyCode {

    constructor(page, titleText = 'Title', formTitle = 'Title for form') {

        this.page = page
        this.titleText = titleText
        this.formTitle = formTitle
        this.siteGen = page.siteGen
        this.pageDiv = this.siteGen.pageDiv
        this.texts = []
    }

    createPostBody() {

        this.bodyHTML = ''
        for(let i = 0; i < this.texts.length; i++)
        {
            this.bodyHTML += this.texts[i]
        }

        this.html = `<section class="quickstart" style="background-color: #004444">
            <div class="grid" >
                <div class="unit golden-small center-on-mobiles">
                    <h3>` + this.titleText + `</h3>
                </div>
                <div class="unit golden-large code" >
                    <p class="title">` + this.formTitle + `</p>
                    <div class="shell">
                        ` + this.bodyHTML + `
                    </div>
                </div>
                <div class="clear"></div>
            </div>
        </section>
        `
    }

    addLine(blueText = '', brownText = '', whiteText = '')
    {
        let text = `<p class="line">
            <span class="path">` + blueText + `</span>
            <span class="prompt">` + brownText + `</span>
            <span class="command">` + whiteText + `</span>
        </p>`
        this.texts.push(text)
    }

    addComment(text = '')
    {
        let txt = `<p class="line">
            <span class="output">` + text + `</span>
        </p>`
        this.texts.push(txt)
    }

    insert() {

        this.createPostBody()
        this.element = htmlToElement(this.html)
        this.pageDiv.appendChild(this.element)
    }
}

class Code {

    constructor(lang) {

        this.lang = lang
        this.texts = []
    }

    add(codeText) {

        this.texts.push(codeText)
    }

    getText() {

        let text = '<p><pre class="prettyprint shadowInner" style="width: 100%"><code data-language="javascript">'
        for( let i = 0; i < this.texts.length; i++)
        {
            text += this.texts[i]
        }
        text += '</pre></code></p>'
        return text
    }
}

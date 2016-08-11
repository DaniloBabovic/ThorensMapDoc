class TextBuilder {

    constructor() {
        this.parts = []
    }

    text(text) {

        let part =  {
                        type: "text",
                        text: text
                    }
        this.parts.push(part)
    }

    methodText()
    {
        var t = (t) => (this.text(t))
        return t
    }

    allMethods()
    {
        let t = (text) => (this.text(text))
        let l = (text, url, new_tab, style) => (this.link(text, url, new_tab, style))
        let c = (text) => (this.code(text))
        let nl = () => (this.newLine())
        let div = () => (this.getText())
        let para = () => (this.getTextAsParagraph())
        let ul = (list) => (this.list(list))
        let tb = this

        return {t, l, c, nl, div, para, ul, tb}
    }

    clear() {

        this.parts = []
    }

    para(text) {

        let part =  {
                        type: "para",
                        text: text
                    }
        this.parts.push(part)
    }

    code(text) {

        let part =  {
                        type: "code",
                        text: text
                    }
        this.parts.push(part)
    }

    newLine() {

        let part =  {
                        type: "br",
                        text: ''
                    }
        this.parts.push(part)
    }

    list(arr) {

        let part =  {
                        type: "list",
                        list: arr
                    }
        this.parts.push(part)
    }

    link(text, url, inNewTab = 'new', style='') {

        let part =  {
                        type: "link",
                        text: text,
                        url: url,
                        inNewTab : inNewTab,
                        style: style
                    }
        this.parts.push(part)
    }

    listToUl(list) {

        let text = '<ul style="margin: 0px">'
        for (let i = 0; i < list.length; i++)
        {
            text += '<li style="margin-bottom: 10px; line-height: 1.4em; font-size: 0.9em;">' + list[i] + '</li>'
        }
        text += '</ul>'
        return text
    }

    getText() {

        let text = ''
        for(let i = 0; i < this.parts.length; i++)
        {
            let part = this.parts[i]
            if (part.type == "text"){

                text += ' ' + part.text + ' '
            }
            if (part.type == "list"){

                text += ' ' + this.listToUl(part.list) + ' '
            }
            if (part.type == "para"){

                text += '<p style="padding: 0px; margin: 0px;"> ' + part.text + ' </p>'
            }
            else if (part.type == "br") {

                text += '<br>'
            }
            else if (part.type == "code") {

                text += ' <code>' + part.text + '</code> '
            }
            else if (part.type == "link") {

                if (part.style != '')
                {
                    part.style = ' style="' + part.style + '"'
                }
                if (part.inNewTab == 'new') {
                    text += '<a ' + part.style + ' target="_blank" href="' + part.url + '"> ' + part.text + ' </a>'
                }
                else {
                    text += '<a ' + part.style + ' href="' + part.url + '"> ' + part.text + ' </a>'
                }
            }
        }
        return text
    }

    getTextAsParagraph() {

        var text = this.getText()
        return '<p> ' + text + ' </p>';
    }
}

class Note extends TextBuilder {

    constructor(noteType = 'info', titleText = 'Title') {

        super()
        this.noteType = noteType
        this.titleText = titleText
    }

    getText() {

        if (this.noteType == 'info'){

            this.noteType = "note info"
        }
        else if (this.noteType == 'tip') {

            this.noteType = "note"
        }
        else if (this.noteType == 'warning') {

            this.noteType = "note warning"
        }
        else if (this.noteType == 'tool') {

            this.noteType = "note unreleased"
        }
        else {

            this.noteType = "note info"
        }

        let text = `<div class="` + this.noteType + `">
        <h5>` + this.titleText + `</h5>
        <div>` + super.getText() + `</div>
        </div>`

        return text
    }
}

class MetodExplain  extends TextBuilder {

    constructor(titleLeft = 'METHOD', titleRight = 'DESCRIPTION') {
        super();
        this.titleLeft = titleLeft
        this.titleRight = titleRight
        this.codeLines = []
    }

    addCodeLine(text) {

        this.codeLines.push(text)
    }

    getText() {

        let codeLines = ''
        for( let i = 0; i < this.codeLines.length; i++)
        {
            codeLines += this.codeLines[i] + '<br>'
        }
        let text = `
        <div class="mobile-side-scroller">
        <table>
          <thead>
            <tr>
              <th>` + this.titleLeft + `</th>
              <th>` + this.titleRight + `</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <p><code>` + codeLines + `</code></p>
              </td>
              <td><p>` + super.getText() + `</p></td>
            </tr>

          </tbody>
        </table>
        </div>`
        return text
    }
}

class ImageAndText extends TextBuilder{

    constructor(    imageUrl = '',
                    width = '200',
                    height = '200',
                    side = 'left',
                    title = '',
                    leftPercent = -1
                ) {

        super();
        this.imageUrl = imageUrl
        this.width = width + 'px'
        this.height = height + 'px'
        this.side = side
        this.title = title
        this.leftPercent = leftPercent + '%'
        this.rightPercent = (100 - leftPercent) + '%'
    }

    getText() {

        let txt = super.getText()
        txt = '<div>' + txt + '</div>'

        let img = '<div class="shadow" style="width: ' + this.width + '; height: ' + this.height + '; background-image: url(' + this.imageUrl + '); margin: 0 auto; background-size: contain;" ></div>';

        let left = ''
        let right = ''

        if(this.side == 'left') {

            left = img
            right = txt
        }
        else {

            left = txt
            right = img
        }

        let text = `

            <div class="grid" style="padding-bottom: 0px; margin-bottom: 0px;">
                <div class="unit" style="width: ` + this.leftPercent + `; padding: 0px; margin: 0px;">
                    ` + left + `
                </div>
                <div class="unit"  style="width: ` + this.rightPercent + `; padding: 0px; margin: 0px;">
                    ` + right + `
                </div>
            </div>
            <div class="clear"></div>

        `
        return text
    }
}

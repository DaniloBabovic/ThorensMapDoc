class TitleBig
{
    constructor(siteGen, titleText = 'Title', backgroundColor = 'rgba(0, 63, 63, 0.8)') {

        this.siteGen = siteGen
        this.titleText = titleText
        this.backgroundColor = backgroundColor
    }

    insert() {
        //#6f0d0d;
        //#3F1F1F;
        let text = `<section class="quickstart align-center"
            style="padding-top: 20px;
            padding-bottom: 0px;
            margin : 0px; background-color: ` + this.backgroundColor + `;">
            <section class="intro">
              <div class="grid align-center">
                <div class="unit whole center-on-mobiles align-center">
                  <p >` + this.titleText + `</p>
                </div>
              </div>
            </section>
        </section>`

        this.element = htmlToElement(text)
        this.siteGen.pageDiv.appendChild(this.element)
    }
}

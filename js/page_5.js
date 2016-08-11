class Page_5 extends PageContent{

    constructor(siteGen) {

        super(siteGen)
        this.page.makeTitle("Elevation", 'rgba(50, 100, 230, 1)')
        this.terrainParty()
        this.infojs()
        this.imageData()
        this.elevationForTile()
    }

    terrainParty() {

        let post = this.page.makePostBase()
        let scale = 1
        let imgAndTxt = new ImageAndText(   'img/terrain_party.png',
                                            498 * scale,
                                            415 * scale,
                                            'left',
                                            "Locate, chat and share",
                                            60 )

        let {t, l, c, nl, div, para, ul} = new TextBuilder().allMethods()


        t('<h2>Elevation data source</h2>'); nl()
        t('Thorens 3D uses Terrain Party free service for downloading elevation images.')
        t('Elevation file comes with README.txt file with necessary data:'); nl(); nl()

        ul([
            `URL: http://terrain.party/api/export?<br>name=top_left_val_thorens&box=<br>
            <strong>6.596151,45.359689,6.493874,45.287823</strong>`,
            `The original elevation models for this area contain elevations ranging from
            <strong>1449 through 2993</strong> meters.`,
            `<strong>1081 x 1081 px</strong>`
        ])

        t('Data marked as bold are used in the map component.'); nl()

        imgAndTxt.text('<div style="color: #444444; margin: 0 auto;  text-align: left; width: 500px;">' + para() + '</div>')

        post.addText(`<div style="margin-bottom: 0px; text-align: center; color: #444444">
                            <h3> </h3><br>`
                            + imgAndTxt.getText() +
                            `</div><br><br>
        `)
    }

    infojs() {

        let post = this.page.makePostSimple('info.js', 40)
        let scale = 1.24

        let {t, l, c, nl, div, para, tb} = new TextBuilder().allMethods()

        c('map_component/elevation/info.js');
        t('file is used to describe elevation images.'); nl()

        post.addText(para())
        tb.clear()


        var code = new Code('js')
        let code_txt = `let files_info = {

    "top_left": {

        friendlyName:  "Top-left Val Thorens",
        file_name: "top_left_val_thorens.png",
        point_1: "45.359689 6.596151",
        point_2: "45.287823 6.493874",
        url: 'http://terrain.party/api/export?name=top_left_val_thorens&box=6.596151,45.359689,6.493874,45.287823',
        widthPX:  1081,
        heightPX:  1081,
        fromMeter: 1449,
        toMeter: 2993

    },

    "top_right": {

        ...
`

        code.add(code_txt)
        var txt = code.getText()

        post.addText(txt)

        t('So, everything we need to make maps work is described in terrain party README.txt file.'); nl()
        post.addText(para())
    }

    imageData ( ) {


        let post = this.page.makePostSimple('Elevation image pixel', 40)
        let scale = 1.24

        let {t, l, c, nl, div, para, tb} = new TextBuilder().allMethods()

        t('Elevation file')
        c('top_left_val_thorens.png')
        t('contains grayscale pixels. Every pixel represents elevation in meters.'); nl()
        t('This is an explanation of how to get altitude in meters from a single pixel.'); nl()
        post.addText(para())
        tb.clear()

        const imageAndText = () => {

            let scale = 1
            let imgAndTxt = new ImageAndText(   'img/pixels.png',
                                                328 * scale,
                                                273 * scale,
                                                'left',
                                                "Locate, chat and share",
                                                50 )
            let {t, l, c, nl, div, para, ul} = new TextBuilder().allMethods()
            t('Every pixel contains 4 bytes (RGBA). Transparency value is always 255.')
            t('Since the image is in grayscale, the first, the second and the third byte are always the same.'); nl ( )
            t('So we have 4 bytes, with three bytes we have 256 * 256 * b1 + 256 * b2 + b3, but the actual range is 256 (0-255)'); nl ( ); nl ( )
            t('<strong>That is sad.</strong>'); nl ( ); nl ( )
            t('This elevation file contains altitudes from 1449 to 2993 meters. The meter range is 2993 - 1449 = 1544 m'); nl ( )

            imgAndTxt.text( para ( ) )
            post.addText( imgAndTxt.getText() )
        }
        imageAndText()

        t('<strong>How we get meters from pixels where meter range is 1544m and we have byte range 256 ? </strong>'); nl ( ); nl ( )

        t('If we loop over every pixel in the image we will find that 246 is max byte value in the file:')
        c('top_left_val_thorens.png'); nl ( )

        t('So, a byte with value 0 is 1449 meters.'); nl ( )
        t('A byte with value 246 is 2993 meters.'); nl ( )
        t('A byte with value 42 is 1449 + 42*(2993 - 1449)/246 = 1762 meters.'); nl ( )

        post.addText(para())
    }

    elevationForTile() {

        let post = this.page.makePostBase()
        let scale = 1
        let imgAndTxt = new ImageAndText(   'img/elevation_file.svg',
                                            420 * scale,
                                            580 * scale,
                                            'left',
                                            "Locate, chat and share",
                                            50 )

        let {t, l, c, nl, div, para, ul} = new TextBuilder().allMethods()


        nl();
        t('<h2>Elevations for tiles</h2>'); nl()
        ul([
            'One elevation file contains pixels that contain altitudes',
            'One elevation file contains altitudes for many tiles',
            'One elevation file contains altitudes for many zoom levels',
            'Every zoom level contains different set of tiles',
            'Every tile has the size 256 x 256 px',
            'Every tile has the lat-long bound box'
        ]); nl()

        t ( `Using the proportion between: <br><br>
            1. the elevation file lat-long bound box <br>
            2. the tile lat-long bound box <br><br>
            we can get elevations for every tile.` )
        imgAndTxt.text('<div style="color: #444444; margin: 0 auto;  text-align: left; width: 500px;">' + para() + '</div>')

        post.addText(`<div style="margin-bottom: 0px; text-align: center; color: #444444">
                            <h3> </h3><br>`
                            + imgAndTxt.getText() +
                            `</div><br><br>
        `)
    }
}

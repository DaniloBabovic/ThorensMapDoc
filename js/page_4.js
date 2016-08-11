class Page_4 extends PageContent{

    constructor(siteGen) {

        super(siteGen)
        this.page.makeTitle(`<p class="place_title">Tile tools</p>`, 'rgba(140, 140, 140, 0.4)')
        this.tileImage()
        this.tile()
        this.disqus ( "Tile_tools", 4)
    }

    tileImage() {

        let post = this.page.makePostBase()
        let scale = 1
        let imgAndTxt = new ImageAndText(   'img/tile.png',
                                            764 * scale,
                                            498 * scale,
                                            'left',
                                            "Locate, chat and share",
                                            99 )



        post.addText(`<div style="margin-bottom: 0px; text-align: center; color: #444444">
                            <br><br>
                            <h3>Small map images - tiles  </h3><br>`
                            + imgAndTxt.getText() +
                            `</div><br><br>
        `)
    }

    tile ( ) {


        let post = this.page.makePostSimple('Get tiles', 40)
        let scale = 1.24

        let {t, l, c, nl, div, para, ul, tb} = new TextBuilder().allMethods()

        t(`If you don't want to use third-party services and serve your tiles on your server you need to get map tiles and save them to your server. <strong>Tile tool</strong> does that.`); nl ( )
        t(`Tile tool needs "end of the world" lat-long bounds and paths. `); nl ( )
        t(`We can get "End of the world" bounds from elevation bounds. `); nl ( )

        t(`There are two map sources:`); nl ( )
        ul([
            'OSM',
            'MapBox'
        ])

        t(`To start the tool you need to run node.js server side application:`)
        c(`map_component/box.js`); nl ( )
        post.addText(para())
        tb.clear()

        var code = new Code('js')
        let code_txt = `let elevation_path = 'map_component/elevation/'
//Destination path
let map_path = 'map_component/simonmap.023dca42/'
//OSM path:
let osm_path = 'https://a.tile.openstreetmap.org/'
//MapBox path:
let boxURL =  'http://a.tiles.mapbox.com/v4/simonmap.023dca42/'
let isMapBox = true
let access_token = 'access_token=pk.eyJ1Ijoic2ltb...'

let level = 14
let report = new TileMissingReport (

    map_path,   elevation_path, elevation_info,
    level, boxURL, access_token, isMapBox
)

report.print ( )

let download = new Download ( map_path, report.missingTiles )

`

        code.add(code_txt)
        var txt = code.getText()

        post.addText(txt)

        t(`Tile tool will create JSON report in: `)
        c(`map_component/js/tools/downloadTilesFromMapBox.js`); nl ( )
        t(`and start to download tiles one by one.`); nl ( ); nl ( )

        t(`You need to repeat this procedure for every level you want to download to your server.`)
        post.addText(para())
        tb.clear()
    }

    disqus ( name, pageNumber) {

        if ( this.siteGen.disqus.enabled == false )  return
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

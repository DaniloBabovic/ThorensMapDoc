let siteGen = new SiteGen([

    "Home", "Live", "Config",
    "Marker", "Tile tool", "Elevation"
])

let logoPath = 'img/mapalchemy_logo_2016.svg'
logoPath = null // TODO make logo



function setGlobalSitePath ( _sitePath) {

    sitePath = _sitePath
}

siteGen.createHeader(   logoPath,
                        'url("img/earth_background.png")',
                        'Thorens Map',
                        280,
                        228
                    )
new Page_0(siteGen)
new Page_1(siteGen)
new Page_2(siteGen)
new Page_3(siteGen)
new Page_4(siteGen)
new Page_5(siteGen)

siteGen.showPage()

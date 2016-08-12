
siteGen = new SiteGen([

    "Home", "Live", "Config", "Marker",
    "Tile tool", "Elevation", "Support"
])

let logoPath = 'img/mapalchemy_logo_2016.svg'
logoPath = null // TODO make logo

let siteURL = "http://htmlpreview.github.io/?"
siteURL +=  "https://raw.githubusercontent.com/DaniloBabovic/"
siteURL +=  "ThorensMapDoc/master/"
siteGen.siteURL = siteURL

siteGen.disqus = new DisqusManager ( )
siteGen.disqus.enabled = true

if ( siteGen.sourceIsFile == true ) {

    siteGen.disqus.enabled = false

}

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
new Page_6(siteGen)

siteGen.showPage()

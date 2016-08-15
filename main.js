
siteGen = new SiteGen([

    "Home", "Live", "Config", "Marker",
    "Tile tool", "Elevation", "Support"
])

let logoPath = 'img/mapalchemy_logo_2016.svg'
logoPath = null // TODO make logo

let siteURL = location.protocol + '//' + location.host;

siteGen.siteURL = siteURL

siteGen.disqus = new DisqusManager ( )
siteGen.disqus.enabled = true

if ( siteGen.sourceIsFile == true ) {

    siteGen.disqus.enabled = false
}

function setGlobalSitePath ( _sitePath) { sitePath = _sitePath }


thorens_map = null

siteGen.createHeader(   logoPath,
                        'url("img/earth_background.png")',
                        'Thorens Map',
                        280,
                        228
                    )
new Page_home(siteGen)
new Page_live(siteGen)
new Page_config(siteGen)
new Page_marker(siteGen)
new Page_tile_tool(siteGen)
new Page_tile_elevation(siteGen)
new Page_tile_support(siteGen)

siteGen.showPage()

window.scrollTo(0, 0);

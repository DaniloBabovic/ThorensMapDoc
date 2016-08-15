
siteGen = new SiteGen([

    "Home", "Live", "Config", "Marker",
    "Tile tool", "Elevation", "Support"
])

let logoPath = 'img/mapalchemy_logo_2016.svg'
logoPath = null // TODO make logo

// let siteURL = "http://htmlpreview.github.io/?"
// siteURL +=  "https://raw.githubusercontent.com/DaniloBabovic/"
// siteURL +=  "ThorensMapDoc/master/"

let siteURL = location.protocol + '//' + location.host;

siteGen.siteURL = siteURL

siteGen.disqus = new DisqusManager ( )
siteGen.disqus.enabled = false

if ( siteGen.sourceIsFile == true ) {

    siteGen.disqus.enabled = false
}

function setGlobalSitePath ( _sitePath) { sitePath = _sitePath }
function onThorensLoaded ( _map, _ThorensAppClass ) {

    thorens_map = _map
    ThorensAppClass = _ThorensAppClass
}

const setZipCallBack = ( callBack ) => { _zipCallBack = callBack }
const onZipCallBack = (  ) => { _zipCallBack () }

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

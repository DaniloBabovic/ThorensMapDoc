let siteGen = new SiteGen(["Home", "Live", "Config", "Marker"])

siteGen.createHeader(  'img/mapalchemy_logo_2016.svg',
                        'url("img/earth_background.png")',
                        'Thorens Map',
                        280,
                        228
                    )
new Page_0(siteGen)
new Page_1(siteGen)
new Page_2(siteGen)
new Page_3(siteGen)

siteGen.showPage()

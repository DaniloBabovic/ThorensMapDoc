class Page_config extends PageContent{

    constructor(siteGen) {

        super(siteGen)
        this.page.makeTitle(`<p class="place_title">config.json</p>`, 'rgba(140, 140, 140, 0.4)')
        this.intro ( )
        this.base_params ( )
        this.component_visibility ( )
        this.paths ( )
        this.tile_range ( )
        this.elevations ( )

        let disqus_identifier = "thorens_map_doc_config"
        let newTitle = "Thorens Config Page"

        this.disqus ( disqus_identifier, newTitle )
    }

    intro ( ) {

        let post = this.page.makePostSimple('Map configuration parameters', 20)
        let {ul, t, l, c, nl, div, para} = new TextBuilder().allMethods()

        t(`Config parameters are stored in`)
        c(`map_component/config.json`)
        t(`file.`)

        post.addText(para())
        var code = new Code('js')
         let code_txt = `
 {
     "name": "Val Thorens",

     // Base params
     "levels" : [ 16, 15, 14 ],
     "ambientLight" : "#BBBBBB",
     "heightOffset" : -2400,
     "scale_14" : 0.20, "scale_15" : 0.5, "scale_16" : 0.6,

     // Component visibility
     "haveStats" : true,
     "showLocationInfo" : true,
     "showNavigationButtons" : true,
     "showSnowAnimation" : false,
     "showWireframeButton" : true,

     // Paths
     "font_path" : "map_component/fonts/",
     "map_path" : "map_component/map_tiles/",
     "elevation_path" : "map_component/elevation/",

     // OSM tile range
     "tile_range" : {

         "_14": {

             "fromX":  8488, "toX":    8494,
             "fromY":  5871, "toY":    5877
         },

         "_15": {

             "fromX":  16976, "toX":    16990,
             "fromY":  11742, "toY":    11755
         },
        // ... other levels
     },


     "elevation_files_info" : {

         // NASA elevation data stored into image grayscale file
         "top_left": {

             "friendlyName":  "Top-left Val Thorens",
             "file_name": "top_left_val_thorens.png",
             "point_1": "45.359689 6.596151",
             "point_2": "45.287823 6.493874",
             "url": "http://terrain.party/api/export?name=top_left_val_thorens&box=6.596151,45.359689,6.493874,45.287823",
             "widthPX":  1081, "heightPX":  1081,
             "fromMeter": 1449, "toMeter": 2993
         },

         "top_right": {

             "friendlyName":  "Top-right Val Thorens",
             "file_name" : "top_right_val_thorens.png",
             "point_1": "45.359930 6.669966",
             "point_2": "45.288065 6.567689",
             "url": "http://terrain.party/api/export?name=top_right_val_thorens&box=6.669966,45.359930,6.567689,45.288065",
             "widthPX":  1081, "heightPX":  1081,
             "fromMeter": 1698, "toMeter": 3346
         },
         // ... other elevation files
         // NOTE! You can not comment like this in the real JSON file.
     }
 }
 `
         code.add(code_txt)
         var txt = code.getText()

         post.addText(txt)
    }

    base_params ( ) {

        let post = this.page.makePostSimple('Base parameters', 20)
        let {ul, t, l, c, nl, div, para} = new TextBuilder().allMethods()

        c(`"levels" : [ 16, 15, 14 ]`)
        t(` - Here is a list with every level you support in range from 19 to 0.`); nl ( )
        t(`19 - bottom level, 0 - whole world`); nl ( ); nl ( )

        c(`"ambientLight" : "#BBBBBB"`)
        t(` - The main map light. Setting up lights in the map is art work.
            In combination with marker lights and reflector, setting up the right
            ambientLight value can be time consuming. But, a map has always
            been a combination of science and art.`); nl ( ); nl ( )

        c(`"heightOffset" : -2400`)
        t(` - Internal scene height positioning by Y axis.`); nl ( ); nl ( )


        c(`"scale_14" : 0.20, "scale_15" : 0.5, "scale_16" : 0.6,`)
        t(` - Elevation scale by level.
            If we want to represent realistic height in the map on some levels,
            even the biggest mountain will be flat.
            With these parameters you can tweak that.`); nl ( ); nl ( )

        post.addText( para ( ) )
    }

    component_visibility ( ) {

        let post = this.page.makePostSimple('Component visibility', 20)
        let {ul, t, l, c, nl, div, para} = new TextBuilder().allMethods()

        c(`"haveStats" : true,
"showLocationInfo" : true,
"showNavigationButtons" : true,
"showSnowAnimation" : false,
"showWireframeButton" : true,`)
        t(` - To set component invisible set value to false.`); nl ( )
        post.addText( para ( ) )
    }

    paths ( ) {

        let post = this.page.makePostSimple('Paths', 20)
        let {ul, t, l, c, nl, div, para} = new TextBuilder().allMethods()

        c(`"font_path" : "map_component/fonts/",
"map_path" : "map_component/map_tiles/",
"elevation_path" : "map_component/elevation/",`); nl ( ); nl ( )

        t(`Folder `)
        c(`map_component`)
        t(`must be located at the root of the web site.`)
        t(`You can rename "map_component" subfolders,
        but you need to update these paths.`)
        post.addText( para ( ) )
    }

    tile_range ( ) {

        let post = this.page.makePostSimple('Tile range', 20)
        let {ul, t, l, c, nl, div, para} = new TextBuilder().allMethods()

        t(`A small map with  256 x 256px images - tiles, has the same naming
            convention in OSM, MapBox and Thorens map.`); nl ( )

        t(`A tile is an array of 3 numbers: X, Y, Z where X and Y represent
            horizontal and vertical position.
            Z represents level.`); nl ( )

        t(`A tile range helps Torens Map Component to mark "end of the world"
            boundaries and not to load tiles
            out of boundaries.`); nl ( ); nl ( )

        t(`For every level you need to describe the tile range.`); nl ( )
        t(`If you use our tool for tiles, this range is set automatically.`)
        post.addText( para ( ) )
    }

    elevations ( ) {

        let post = this.page.makePostSimple('Elevation', 20)
        let {ul, t, l, c, nl, div, para} = new TextBuilder().allMethods()

        t(`NASA elevation data are free and available in numerious sites.`); nl ( )
        t(`Elevation in the Thorens map is described `)
        l(
            "here.",
            "index.html?page=5",
            ""
        )
        post.addText( para ( ) )
    }
}

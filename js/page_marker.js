class Page_marker extends PageContent{

    constructor(siteGen) {

        super(siteGen)
        this.page.makeTitle(`<p class="place_title">Markers</p>`, 'rgba(140, 140, 140, 0.4)')
        this.marker ( )
        this.markerStyle ( )

        let disqus_identifier = "thorens_map_doc_markers"
        let newTitle = "Thorens Markers Page"

        this.disqus ( disqus_identifier, newTitle )
    }

    marker ( ) {

        let post = this.page.makePost()
        post.setTitle("Marker JSON file")
        post.setPostInfo(
            "Marker data",
            '',
            '<a style="visibility: hidden">.</a>',
            ''
        )
        let {ul, t, l, c, nl, div, para, tb} = new TextBuilder().allMethods()

        t(`Markers are inserted in the map automatically on map load.
            Markers data are stored in the file:`)
        c(`map_component/markers/marker_list.json`); nl()

        post.addText(para())

        var code = new Code('js')
         let code_txt = `
 {
    "_1": {
        "text": "Val Thorens",
        "lat": 45.2978426,
        "long": 6.5826052,
        "type": "place",
        "haveLight": true
    },

    "_2": {
        "text": "Les Menuires",
        "lat": 45.3240723,
        "long": 6.5382696,
        "type": "place",
        "haveLight": true
    },

    "_4": {
        "text": "Altiport de Val Thorens",
        "lat": 45.2816025,
        "long": 6.5736936,
        "type": "airport",
        "haveLight": true
    },
    // ...
`
         code.add(code_txt)
         var txt = code.getText()

         post.addText(txt)

         tb.clear ( )

         c(`"_1"`)
         t(`Marker ID. Must be unique.`); nl ( ); nl ( )

         c(`"text": "Val Thorens"`)
         t(`This text will be displayed on the marker.`); nl ( ); nl ( )

         c(`"lat": 45.3240723
"long": 6.5382696`)
         t(`You can grab these positions from top-left position
             control.`); nl ( ); nl ( )

         c(`"type": "airport"`)
         t(`Each marker type has a different look.
             You can create marker types and style them.`); nl ( ); nl ( )

         c(`"haveLight": true`)
         t(`A marker can have spot light`); nl ( ); nl ( )


         post.addText(para())
    }

    markerStyle ( ) {

        let post = this.page.makePost()
        post.setTitle("Marker Types and Styling")
        post.setPostInfo(
            "Type - Style",
            '',
            '<a style="visibility: hidden">.</a>',
            ''
        )
        let {ul, t, l, c, nl, div, para, tb} = new TextBuilder().allMethods()

        t(`Markers type-styles are stored in the file:`)
        c(`map_component/markers/marker_style.json`); nl()

        post.addText(para())

        var code = new Code('js')
         let code_txt = `
 {
     "place": {
         "text_color": "#DDDDDD",
         "stick_color": "#444444",
         "stickHeight": 80,
         "bg_color": "#222222",
         "bg_opacity": 0.7,
         "level_range": [14, 16],
         "scale": 0.9,
         "lightColor": "#FFFFFF",
         "lightIntensity": 1,
         "lightDecay": 1.5
     },
     "place_small": {
         "text_color": "#DDDDDD",
         "stick_color": "#888888",
         "stickHeight": 70,
         "bg_color": "#444444",
         "bg_opacity": 0.7,
         "level_range": [15, 16],
         "scale": 0.7,
         "lightColor": "#FFFFFF",
         "lightIntensity": 1,
         "lightDecay": 2
     },
     // ...
`
         code.add(code_txt)
         var txt = code.getText()

         post.addText(txt)

         tb.clear ( )

         c(`"place":`)
         t(`Marker type-ID. Must be unique string.`); nl ( ); nl ( )

         c(`"text_color": "#DDDDDD"`)
         t(`Self explained.`); nl ( ); nl ( )


         c(`"stick_color": "#888888",
"stickHeight": 70,`);nl ( )
         t(`Color and size for all three elements of the stick.`)
         t(` Sticks are composed of two tubes and one sphere.
             Marker elements above the sphere are movable.
             `); nl ( ); nl ( )

         c(`"bg_color": "#444444",
"bg_opacity": 0.7,`)
         t(`A plane behind text.`); nl ( ); nl ( )

         c(`"level_range": [14, 16]`)
         t(`The marker will be displayed only in levels
             14, 15 and 16.`); nl ( ); nl ( )

         c(`"scale": 0.7`)
         t(`Scales every element of the marker
             excluding light params`); nl ( ); nl ( )

         c(`"lightColor": "#FFFFFF",
"lightIntensity": 1,
"lightDecay": 2`); nl ( )
         t(`Default lightIntensity is 1.
             If you don't want to illuminate the floor,
             increase the lightDecay value.`); nl ( ); nl ( )

         post.addText(para())
    }
}

class Page_0 extends PageContent{

    constructor(siteGen) {

        super(siteGen)
        this.page.makeTitle("Thorens Map", 'rgba(0, 80, 80, 1)')

        this.post_1 ( )
        this.post_2 ( )
        this.screenshot ( )
        this.position ( )
        this.marker ( )
        this.zoom ( )
        this.navigation ( )
        this.compass ( )
        this.mr_doob ( )
        this.snow ( )
        this.reflector ( )
        this.wireframe ( )
        this.keyboard ( )

        let disqus_identifier = "thorens_doc_home"
        let newTitle = "Thorens Documentation"
        this.disqus ( disqus_identifier, newTitle)
    }

    post_1 ( ) {

        let threePost =  this.page.makePostThreeColums(

            'Continual map',
            'Tiles',
            'Custom markers'
        )

        let tb_1 = threePost.getTextBuilderOne()
        tb_1.text('&#8226; OSM map data <br>')
        tb_1.text('&#8226; NASA elevation data <br>')
        tb_1.text('&#8226; Hardware 3D rendering <br>')

        let tb_2 = threePost.getTextBuilderTwo()

        tb_2.text('&#8226; MapBox or OSM tiles <br>')
        tb_2.text('&#8226; Self serving tiles <br>')
        tb_2.text('&#8226; Directional tile loads <br>')

        let tb_3 = threePost.getTextBuilderThree()
        tb_3.text('&#8226; JSON or dynamic loads<br>')
        tb_3.text('&#8226; CSS like styling<br>')
        tb_3.text('&#8226; Marker level range<br>')
    }

    post_2 ( ) {

        let post = this.page.makePostSimple('Thorens Map Documentation', 20)
        let {ul, t, l, c, nl, div, para} = new TextBuilder().allMethods()

        t(`Thorens Map is JavaScript map component for Web applications.`)
        t(`For small map areas up to 100 x 100 km you can serve map tiles
           on your server and use
           <strong>Thorens Map</strong> component to display it.`)

        t(`Hardware 3D rendering is enabled by
            WebGL using three.js library.`); nl ()

        t(`This map component is optimized for computers with average GPU for
            fast rendering (> 40 FPS). Responsivness is achived by reducing the
            map cover size ( 3 x 5 = 15 tiles ) and by avoiding loading and
            displaying tiles behind the camera.
            Tile loading paterns are prepared for configuration,
            so in the next version you will be enabled to set the map
            cover size in the config file.`); nl ()

        //t(`You can try live demo on the`)
        t(`To see map in action visit `)
        l("live page.", "index.html?page=1", "")
        //t(`to see map in action.`)
        t(`Then, you can get familiar with map elements.`)
        post.addText(para())
    }

    screenshot() {

        let post = this.page.makePostBase()
        let scale = 0.8
        let imgAndTxt = new ImageAndText(

            'img/screenshot_1.png',
            1090 * scale,
            732 * scale,
            'left',
            "Thorens screenshot",
            100
        )

        let {t, l, c, nl, div, para, ul} = new TextBuilder().allMethods()

        imgAndTxt.text('<gray>' + para() + '</gray>')

        let title = `
        <div style="width: 100%; text-align: center; padding-bottom: 30px; padding-top: 30px; color: #006262">
            <strong style="font-size: 28px" >
                Map elements
            </strong>
        </div>
        `
        post.addText(title)
        post.addText('<div style="margin-top: 10px">' + imgAndTxt.getText() + '</div><br>')
    }

    position ( ) {

       let post = this.page.makePost()
       post.setTitle("Get position manually and programmatically")
       post.setPostInfo(

           "1. Position",
           '',
           '<a style="visibility: hidden">.</a>',
           ''
       )
       let {ul, t, l, c, nl, div, para} = new TextBuilder().allMethods()

       t(`When you left click on the map, position data will be changed.`)
       t(`You can use longitude and latitude to create marker.`)
       t(`Otherwise you should hide location controll by setting`)
       c(`"showLocationInfo" : "false"`)
       t(`in the`)
       c(`config.json`)
       t(`file.`); nl()
       t(`<h3>Programmatically get and set position</h3>`)

       post.addText(para())

       var code = new Code('js')
        let code_txt = `
// Return { lat, long, alt } of the last clicked point on the map
let geoPoint = thorens_map.getSelectedGeoPoint ( )

// Return scene { x, y, z } of the last clicked map point
let scenePoint = thorens_map.getSelectedScenePoint (  )

// Center map component to given latitude and longitude
thorens_map.selectGeoPoint ( lat, lng )

// Center map component to given scene xyz point
thorens_map.selectScenePoint ( x, y, z )
`

        code.add(code_txt)
        var txt = code.getText()

        post.addText(txt)
   }

   marker ( ) {

       let post = this.page.makePost()
       post.setTitle("Insert and select marker")
       post.setPostInfo(
           "2. Marker",
           '',
           '<a style="visibility: hidden">.</a>',
           ''
       )
       let {ul, t, l, c, nl, div, para} = new TextBuilder().allMethods()

       t(`Markers are inserted in the map automatically on map load.
           Markers data are stored in the file`)
       c(`map_component/markers/marker_list.json`); nl()
       t(`Files `)
       c(`marker_list.json`); t(`and`);c(`marker_style.json`)
       t(`are described in the `)
       l("marker", "index.html?page=3", "");t(`page.`); nl()

       t(`Here is a description of how to add marker programmatically.`); nl()
       t(`<h3>Programmatically insert, select and remove marker</h3>`)

       post.addText(para())

       var code = new Code('js')
        let code_txt = `
//insert and center marker on the map
//return unique marker ID
let str_id = thorens_map.insertMarker ( text, lat, lng, type,  haveLight)

// Center marker on the map
// you need unique marker ID as input param
thorens_map.selectMarkerByID ( str_id )

// Remove
thorens_map.removeMarkerByID ( str_id )
`

        code.add(code_txt)
        var txt = code.getText()

        post.addText(txt)
   }

   zoom ( ) {

       let post = this.page.makePost()
       post.setTitle("Zoom and level")
       post.setPostInfo(
           "3. Zoom ctrl",
           '',
           '<a style="visibility: hidden">.</a>',
           ''
       )
       let {ul, t, l, c, nl, div, para} = new TextBuilder().allMethods()

       t(`Zoom total range is defined by level count.
           Each level is defined in range 0-1.`); nl ( )
       t(`To set zoom programmatically you need to provide
           zoom level and 0 to 1 decimal number.`)

       post.addText(para())

       var code = new Code('js')
        let code_txt = `
// Get level
let level = thorens_map.getCurrentLevel ( )

// Before you change level you should check level range
thorens_map.changeLevel ( newLevel )

// percent param is decimal val in range 0-1
thorens_map.setZoom ( level, percent ) {
`

        code.add(code_txt)
        var txt = code.getText()

        post.addText(txt)
   }

   navigation ( ) {

       let post = this.page.makePost()
       post.setTitle("Map navigation")
       post.setPostInfo(
           "4. Navigation ctrl",
           '',
           '<a style="visibility: hidden">.</a>',
           ''
       )
       let {ul, t, l, c, nl, div, para} = new TextBuilder().allMethods()

       t(`Every button from the navigation controll
           can be triggered programmatically.  `); nl ( )

       post.addText(para())

       var code = new Code('js')
        let code_txt = `
// Same as clicking on map navigation buttons
thorens_map.moveFordward ( )

// Same as clicking on map navigation buttons
thorens_map.moveBackward ( )

// Same as clicking on map navigation buttons
thorens_map.moveLeft ()

// Same as clicking on map navigation buttons
thorens_map.moveRight ()

// Same as clicking on map navigation buttons
thorens_map.rotateLeft ( )

// Same as clicking on map navigation buttons
thorens_map.rotateRight ( )

// Center map to first geoPoint for level
thorens_map.center ( )

`

        code.add(code_txt)
        var txt = code.getText()

        post.addText(txt)

   }

   compass ( ) {

       let post = this.page.makePost()
       post.setTitle("Camera direction")
       post.setPostInfo(
           "5. Compass",
           '',
           '<a style="visibility: hidden">.</a>',
           ''
       )
       let {ul, t, l, c, nl, div, para} = new TextBuilder().allMethods()

       t(`In 2D world, compass angle is all we need for orientation.
           In 3D world with camera, we have camera direction vector
           for orientation. This vector is a base for every movement,
           animation and for dynamic tile loads.`); nl ( )
       t(`To get this vector programmatically, use this method:`)

       post.addText(para())

       var code = new Code('js')
        let code_txt = `
// Return normalized vector THREE.Vector3
// { x, y, z }
let camera_vector = thorens_map.getCameraDirection ( )
`

        code.add(code_txt)
        var txt = code.getText()

        post.addText(txt)
   }

   mr_doob ( ) {

       let post = this.page.makePost()
       post.setTitle("ThreeJS")
       post.setPostInfo(
           "6. Mr.doob inside",
           '',
           '<a style="visibility: hidden">.</a>',
           ''
       )
       let {ul, t, l, c, nl, div, para} = new TextBuilder().allMethods()

       t(`By far, I have been using a few desktop 3d api's.`); nl ( )
       t(`Now, I can confirm that three.js is more stable and that
           it has a better documentation than most of them.`); nl ( )
       t(`<strong>Long live and prosper three.js community! V</strong>`)
       post.addText(para())
   }

   snow ( ) {

       let post = this.page.makePost()
       post.setTitle("Starting snow animations")
       post.setPostInfo(
           "7. Snow animation",
           '',
           '<a style="visibility: hidden">.</a>',
           ''
       )
       let {ul, t, l, c, nl, div, para} = new TextBuilder().allMethods()

       t(`Snow animations are 40 000 snow flakes which are randomly approaching,
           in ~10 sec, exact points with elevations on the map surface.`)
       t(`The second animation is snow fading.`); nl ( )
       t(`To start animation programmatically use this method:`)
       post.addText(para())

       var code = new Code('js')
        let code_txt = `
// Start snow animation
thorens_map.snow ( )

`
        code.add(code_txt)
        var txt = code.getText()

        post.addText(txt)
   }

   reflector ( ) {

       let post = this.page.makePost()
       post.setTitle("Map lights")
       post.setPostInfo(
           "8. Reflector",
           '',
           '<a style="visibility: hidden">.</a>',
           ''
       )
       let {ul, t, l, c, nl, div, para} = new TextBuilder().allMethods()

       t(`There are three types of lights in the map.`); nl ( )
       ul([
            `<strong> Ambient light </strong>
            - the main light is set for
            evening atmosphere #BBBBBB. To change this value use
            the ambientLight param from the config file.`,

            `<strong>Marker spot light </strong>
             - there are max 6 spot lights dedicated to markers.
            Marker lights are described in the marker page.
            `,
            '<strong>Reflector point light </strong> - can be helpfull when evening ambient is set.'
        ])

       t(`To switch on/off reflector programmatically, use this method:`)
       post.addText(para())

       var code = new Code('js')
        let code_txt = `
// Turn on-off reflector
thorens_map.reflector ( )
`
        code.add(code_txt)
        var txt = code.getText()

        post.addText(txt)
   }

   wireframe ( ) {

       let post = this.page.makePost()
       post.setTitle("Display odd tiles in wireframe mode")
       post.setPostInfo(
           "9. Wireframe tiles",
           '',
           '<a style="visibility: hidden">.</a>',
           ''
       )
       let {ul, t, l, c, nl, div, para} = new TextBuilder().allMethods()

       t(`This option is useful when you want to see tile edges.`); nl ( )
       t(`Otherwise you should hide wireframe controll by setting`)
       c(`"showWireframeButton" : "false"`)
       t(`in the`)
       c(`config.json`)
       t(`file.`); nl()

       t(`To switch on/off wireframe mode programmatically use this method:`)
       post.addText(para())

       var code = new Code('js')
        let code_txt = `
// Same as clicking on map wireframe tiles buttons
thorens_map.wireframeTiles ( )
`
        code.add(code_txt)
        var txt = code.getText()

        post.addText(txt)
   }

   keyboard ( ) {

       let post = this.page.makePost()
       post.setTitle("Show mouse and keyboard commands")
       post.setPostInfo(
           "10. keyboard",
           '',
           '<a style="visibility: hidden">.</a>',
           ''
       )
       let {ul, t, l, c, nl, div, para} = new TextBuilder().allMethods()

       t(`<white>Our recommendation is to open this form after the map is loaded.
           There are a lot of useful commands for better user experience.</white>
           `); nl ( )
       //post.addText(para())


        let scale = 0.8
        let imgAndTxt = new ImageAndText(

            'img/keyboard_commands.png',
            780 * scale,
            400 * scale,
            'left',
            "Thorens screenshot",
            70
        )

        imgAndTxt.text('<gray>' + para() + '</gray>')
        post.addText('<div style="margin-top: 10px">' + imgAndTxt.getText() + '</div><br>')


        var code = new Code('js')
         let code_txt = `
// Open form with keyboard commands
thorens_map.keyboard ()
`
         code.add(code_txt)
         var txt = code.getText()

         post.addText(txt)
   }
}

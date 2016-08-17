class Page_live extends PageContent{

    constructor(siteGen) {

        super(siteGen)

        let disqus_identifier = "thorens_map_doc_live"
        let newTitle = "Thorens Live Page"

        this.div_buttons_desc = null
        this.youtube          = null

        this.setTitle ( )
        this.thorens ( )
        this.setInstruction ( )

        this.disqus ( disqus_identifier, newTitle )
    }

    setTitle ( ) {

        let post = this.page.makePostBase()

        let title = `
        <header role="banner">
        <div class="grid"
            style="
            background-color: rgba(0, 142, 142, 0.42);
            margin-top: 0px;
            max-width: 100%;
            height: 80px;
        ">
            <nav class="main-nav hide-on-mobiles"
                style="width: 100%; text-align: center; margin-top: 0px;">
                <ul id="header_ul" style="margin-top: 20px; width: 100%; text-align: center; ">
                    <li id="a_insert_below">
                        <a class="insertMap"> Insert Thorens Map below</a>
                    </li>

                    <li id="a_goto_react">
                        <a  class="insertMap"> Thorens-React Live map</a>
                    </li>

                    <li id="a_insert_video">
                        <a id="a_insert_video" class="insertMap"> Video</a>
                    </li>
                </ul>
            </nav>
            <div class="clear"></div>
        </div>
        </header>
        `
        post.addText(title)
    }

    thorens ( ) {

        let post = this.page.makePostBase()

        let title = `
        <div    style=" width: 100%;
                        text-align: center;
                        padding-bottom: 30px;
                        padding-top: 30px;
                        color: #006262;"
        >

            <div    id="map_div"
                    style=" display: inline-block;
                            width: 1100px; height: 580px;
                            background-color: rgba(0, 142, 142, 0.68);
                            color: #FFFFFF;"
            >
                <div id="div_buttons_desc" style="text-align: left; margin: 10px">

                    <br>
                    <div id="button_here" class="button_title">
                        <strong>1. INSERT THORENS MAP HERE</strong><br>
                    </div>
                    <p style="padding-left: 20px">
                        This button  inserts the map component into this view.
                        All map Javascript files are packed into one .zip file.
                        <br>
                        That file will be automatically downloaded, unpacked,
                        added as script into the document and it will insert
                        the map component into div with id "map_id".

                        <br><br>

                        This is a recommended way to use Thorens map component.
                    </p>

                    <br>
                    <div id="button_react" class="button_title">
                        <strong>2. THORENS-REACT LIVE MAP</strong><br>
                    </div>
                    <p style="padding-left: 20px">
                        WebGL (three.js) and React are the fastest Web renderers.
                        It's just nice to see them together.
                    </p>

                    <br>
                    <div id="button_video" class="button_title">
                        <strong>3. VIDEO</strong><br>
                    </div>
                    <p style="padding-left: 20px">
                        This button inserts a video player
                        and starts the video with Thorens Map in action.
                    </p>

                </div>
            </div>

        </div>
        `
        post.addText(title)
        this.page.onReadyForInsert = () => this.setEvents ( )
    }

    setEvents ( ) {

        this.a_insert_below     = document.getElementById("a_insert_below")
        this.button_here        = document.getElementById("button_here")

        this.a_goto_react       = document.getElementById("a_goto_react")
        this.button_react        = document.getElementById("button_react")

        this.a_insert_video     = document.getElementById("a_insert_video")
        this.button_video        = document.getElementById("button_video")

        this.map_div            = document.getElementById("map_div")
        this.div_buttons_desc   = document.getElementById("div_buttons_desc")


        this.a_insert_below.onclick = () => this.onClickInsert_below ( )
        this.button_here.onclick    = () => this.onClickInsert_below ( )

        this.a_goto_react.onclick = () => this.onClickReact ( )
        this.button_react.onclick = () => this.onClickReact ( )

        this.a_insert_video.onclick = () => this.onClickVideo ( )
        this.button_video.onclick   = () => this.onClickVideo ( )
    }

    onClickInsert_below ( ) {

        this.a_insert_below.style.opacity = "0.4";
        this.a_insert_below.onclick = null
        this.removePrevious ( )
        this.loadMapJavaScript ( )
    }

    onClickReact ( ) {

        //let url = 'http://htmlpreview.github.io/?https://cdn.rawgit.com/DaniloBabovic/ThorensReactExample/master/index.html'
        let url = 'http://htmlpreview.github.io/?https://github.com/DaniloBabovic/ThorensReactExample/blob/master/index.html'
        var win = window.open(url, '_blank');
        win.focus();
    }

    onClickVideo ( ) {

        //https://www.youtube.com/watch?v=70LfrN8zUoM
        let url = 'https://www.youtube.com/embed/70LfrN8zUoM'
        this.a_insert_video.style.opacity = "0.4";
        this.a_insert_video.onclick = null
        this.removePrevious ( )

        let html = `<iframe width="100%" height="100%"
src="https://www.youtube.com/embed/70LfrN8zUoM">
</iframe>`
        this.youtube = document.createElement("iframe");
        this.youtube.style["width"] = "100%"
        this.youtube.style["height"] = "100%"
        this.youtube.setAttribute("src", url)
        this.map_div.appendChild ( this.youtube )
    }

    loadMapJavaScript ( ) {

        let callBack = ( ) => this.onMapScriptLoaded ( )
        new LoadZipJavaScript ( 'map3d.js.zip', "map3d.js", callBack )
    }

    removePrevious() {

        if (this.div_buttons_desc != null) {
            this.map_div.removeChild(this.div_buttons_desc)
            this.div_buttons_desc.innerHTML = ""
            this.div_buttons_desc = null
        }

        if (this.youtube != null) {

            this.map_div.removeChild(this.youtube)
            this.youtube.innerHTML = ""
            this.youtube = null
        }
        while (this.map_div.firstChild) {
            this.map_div.removeChild(this.map_div.firstChild);
        }
    }

    onMapScriptLoaded ( ) {

        window.scrollTo(0, 230);

    }

    setInstruction ( ) {

        let post = this.page.makePostBase()

        let title = `
        <header role="banner">
        <div class="grid"
            style="

            margin-top: 0px;
            max-width: 100%;
            height: 100%;
            text-align: center;
            text-size: 28px;
            padding: 15px;
            color: #FFFFFF;

        ">
            <div
                style="
                display: inline-block;
                width: 1100px;
                padding: 40px;
                padding-left: 20px;
                text-align: left;
                background-color: rgba(0, 142, 142, 0.42);"
                text-size: 28px;
            >
                <strong>Note:</strong><br><br>
                To learn how to navigate click on the keyboard button when map loads.
                <br>
                Use RIGHT mouse drag for panning for start.

            </div>
            <div class="clear"></div>
        </div>
        </header>
        `
        post.addText(title)
    }
}

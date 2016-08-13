class Page_1 extends PageContent{

    constructor(siteGen) {

        super(siteGen)
        //this.page.makeTitle("Live", 'rgba(0, 142, 142, 0.42)')

        let disqus_identifier = "thorens_map_doc_live"
        let newTitle = "Thorens Live Page"

        this.setTitle ( )
        this.thorens ( )

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
                            width: 1100px; height: 600px;
                            background-color: rgba(0, 142, 142, 0.42);
                            color: #FFFFFF;"
            >

            </div>

        </div>
        `
        post.addText(title)
        this.page.onReadyForInsert = () => this.setEvents ( )

    }

    setEvents ( ) {



        this.a_insert_below     = document.getElementById("a_insert_below")
        this.a_goto_react       = document.getElementById("a_goto_react")
        this.a_insert_video     = document.getElementById("a_insert_video")

        this.a_insert_below.onclick = () => this.onClickInsert_below ( )
        this.a_goto_react.onclick = () => this.onClickReact ( )
        this.a_insert_video.onclick = () => this.onClickVideo ( )
    }

    onClickInsert_below ( ) {

        //console.log ( "onClickInsert_below" )
        this.a_insert_below.style.opacity = "0.4";
        this.a_insert_below.onclick = null
        this.loadMapJavaScript ( )
    }

    onClickReact ( ) {


        alert ('Work In Progress, check out for few hours.')
        this.a_goto_react.style.opacity = "0.4";
        this.a_goto_react.onclick = null

    }

    onClickVideo ( ) {

        alert ('Work In Progress, check out for few hours.')
        this.a_insert_video.style.opacity = "0.4";
        this.a_insert_video.onclick = null

    }

    loadMapJavaScript ( ) {

        let callBack = ( ) => this.onMapScriptLoaded ( )

        new LoadZipJavaScript ( 'map3d.js.zip', "map3d.js", callBack )
    }

    onMapScriptLoaded ( ) {

        window.scrollTo(0, 230);

    }
}

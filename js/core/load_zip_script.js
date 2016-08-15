document.onThorensLoaded = function ( _map, _ThorensAppClass ) {

    thorens_map = _map
    ThorensAppClass = _ThorensAppClass
}

const setZipCallBack = ( callBack ) => { _zipCallBack = callBack }
const onZipCallBack = (  ) => { _zipCallBack () }

class LoadZipJavaScript {

    constructor ( url_zip, js_file_name, callBack ) {

        this.url_zip = url_zip
        this.js_file_name = js_file_name
        this.callBack = callBack

        let exist = this.isInsertedAlready ( )

        if ( exist )   this.reload ()
        else           this.start ()
    }

    reload () {

        console.log("Reloading Thorens component");

        let thorensApp = new ThorensAppClass ( )
        thorens_map = thorensApp.map
        this.callBack ()
    }

    isInsertedAlready ( ) {

        let scriptNode = document.getElementById("thorens_script")
        if ( scriptNode == null)  return false
        return true
    }

    start ( ) {

        let insertScript = ( text ) => this.insertScript ( text )
        let js_file_name = this.js_file_name
        JSZipUtils.getBinaryContent(

            this.url_zip,
            (err, data) => {

                if(err) {

                    console.log ( 'JSZipUtils error', err )

                } else {

                    JSZip.loadAsync(data).then (

                        (zip) => {

                            return zip.file( js_file_name ).async("string")
                        }

                    ).then (

                        ( text )=> insertScript ( text )
                    )
                }
            }
        )
    }

    insertScript ( text ) {

        const finish = ( ) => {

            this.callBack ( )
        }
        setZipCallBack ( finish )

        console.log ( 'map3d.zip decompress done.' )
        var script = document.createElement('script');

        script.type = "text/javascript";
        script.appendChild(document.createTextNode(text + "; onZipCallBack (  )"));
        script.setAttribute ( "id", "thorens_script" )
        document.body.appendChild(script)
    }
}

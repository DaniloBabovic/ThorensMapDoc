
class LoadZipJavaScript {

    constructor ( url_zip, js_file_name, callBack ) {

        this.url_zip = url_zip
        this.js_file_name = js_file_name
        this.callBack = callBack

        this.start ()
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

                    JSZip.loadAsync(data).
                    then(

                        function (zip) {

                            return zip.file( js_file_name ).async("string");
                        }
                    ).
                    then( ( text )=> insertScript ( text ) )
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
        document.body.appendChild(script)
    }
}

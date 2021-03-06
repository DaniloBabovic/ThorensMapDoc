class Page {

    constructor(siteGen, pageName) {

        this.siteGen = siteGen
        this.pageName = pageName
        this.posts = []
        this.onInsert = null
        this.onReadyForInsert = null
    }

    loadXMLDoc(filename, onDone)
    {
    	this.xhttp = new XMLHttpRequest();
    	this.xhttp.open("GET", filename, true);
    	this.xhttp.onload = function (e)
    	{
    		if (this.xhttp.readyState === 4)
    		{
    			if (this.xhttp.status === 200)
    			{
    				onDone(false, this.xhttp.responseText);
    			}
    			else
    			{
    				onDone(true, this.xhttp.responseText);
    			}
    		}
    	};
    	this.xhttp.onerror = function (e)
    	{
    		onDone(true, this.xhttp.responseText);
    	};
    	this.xhttp.send(null);
    }

    makePostBase() {

        let post = new PostBase(this)
        this.posts.push(post)
        return post
    }

    makePost() {

        let post = new Post(this)
        this.posts.push(post)
        return post
    }

    makePostSimple(title = 'Title', marginTop = 20) {

        let post = new PostSimple(this, title, marginTop)
        this.posts.push(post)
        return post
    }

    makePostFancyCode(title = 'Title', formTitle = '') {

        let post = new PostFancyCode(this, title, formTitle)
        this.posts.push(post)
        return post
    }

    makePostThreeColums(    titleOne = 'Title One',
                            titleTwo = 'Title Two',
                            titleThree = 'Title Three') {

        let post = new PostThreeColums(this, titleOne, titleTwo, titleThree)
        this.posts.push(post)
        return post
    }

    makeTitle(titleText = 'Title', backgroundColor = 'rgba(0, 63, 63, 0.8)') {
        let title = new TitleBig(this.siteGen, titleText, backgroundColor)
        this.posts.push(title)
        return title
    }

    insert() {

        for (let i = 0; i < this.posts.length; i++)
        {
            this.posts[i].insert()
        }
    }

    onPageInsert ( ) {

        if (this.onReadyForInsert != null) this.onReadyForInsert ( )
        if (this.onInsert != null) this.onInsert ( )
    }
}

class PageContent {

    constructor(siteGen) {

        this.siteGen = siteGen
        this.pageNumber = siteGen.pages.length
        this.pageName = siteGen.pageNames[siteGen.pages.length]
        this.page = siteGen.makePage(this.pageName)
        this.page.pageNumber = this.pageNumber
    }

    disqus ( disqus_identifier, newTitle) {


        if ( this.siteGen.disqus.enabled == false )  return

        this.disqus_identifier = disqus_identifier
        this.newTitle = newTitle

        const onDivInserted = ( ) => {

            let newUrl = this.siteGen.siteURL + 'index.html?page=' + this.pageNumber
            this.siteGen.disqus.insert ( this.disqus_identifier, newUrl, this.newTitle )
        }
        this.page.onInsert = ( ) => onDivInserted ( )
    }
}

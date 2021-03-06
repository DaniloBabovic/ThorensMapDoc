class Page_tile_support extends PageContent{

    constructor(siteGen) {

        super(siteGen)
        this.page.makeTitle("Support", 'rgba(0, 80, 80, 1)')

        this.support ( )

        let disqus_identifier = "thorens_map_doc_support"
        let newTitle = "Thorens Support Page"

        this.disqus ( disqus_identifier, newTitle )
    }

    support ( ) {

        let post = this.page.makePostSimple('Implement Thorens Map into your Web site', 20)
        let {ul, t, l, c, nl, div, para} = new TextBuilder().allMethods()

        t(`Send us quick info:`); nl ( )

        ul([
            "Use case and location",
            "Map area size (km) - if you want self serving",
            "Front end description",
            "Back end description"
        ]); nl ( )

        t(`E-mail us and we will contact you ASAP.
            You will get all info you need.`); nl ( );
        t(`In a day or two we can make Thorens Map up and running at your
            Web site.`); nl ( ); nl ( )

        t('<h3>Links:</h3>');


        t('<div style="line-height: 150%">')
        t('E-mail: mapalchemy@gmail.com'); nl()

        t('Skype name: mapalchemy'); nl()

        t('Twitter:'); l('@MapAlchemy', 'https://twitter.com/MapAlchemy');nl()

        t('Documentation download:'); l('GitHub', 'https://github.com/DaniloBabovic/ThorensMapDoc');nl()

        t('Thorens - React example:'); l('GitHub', 'https://github.com/DaniloBabovic/ThorensReactExample');nl()

        t('EditThreeJS - 3D Editor for starting three.js project:'); l('GitHub', 'https://github.com/DaniloBabovic/EditThreeJS');nl()

        t('Small projects that have led to this:'); l('PlaygroundThreed', 'http://playgroundthreed.appspot.com/doc/index.html');nl()

        t('SiteGenJS - Tool for this documentation:'); l('GitHub', 'https://github.com/DaniloBabovic/SiteGenJS');nl()

        t('Boilerplate for map demonstration:'); l('react-static-boilerplate - GitHub', 'https://github.com/kriasoft/react-static-boilerplate');nl()

        t('Advanced boilerplate + mobx + material-ui:'); l('simonjoom - GitHub', 'https://github.com/simonjoom/react-app-ssr/');nl()

        t('three.js - Javascript 3D library:'); l('Mr.doob', 'http://threejs.org/');nl()

        t('Skiscool site:'); l('Skiscool', 'http://www.skiscool.eu/');nl()

        t('Website:'); l('www.mapalchemy.com', 'http://www.mapalchemy.com');nl()

        t('</div>')

        post.addText(para())
    }
}

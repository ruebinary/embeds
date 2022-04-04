import fetch from 'node-fetch';

export class DiscordEmbed {
    constructor () {
    }

    title = null;
    description = null;
    url = null;
    color = null;
    fields= [ ];
    thumbnail = { url: null };
    image = { url: null };
    author = { name: null, url: null, icon_url: null };
    footer = { text: null, icon_url: null };

    addTitle( str ) {
        if ( !str || str.length > 256 ) throw new Error( "Title string must be between 1 and 256 characters" )
        this.title = str
        return this;
    };
    addDescription( str ) {
        if ( !str || str.length > 4096) throw new Error( "Description string must be between 1 and 4096 characters" )
        this.description = str
        return this;
    };
    addUrl( url ) {
        if ( !url || !isValidUrl( url ) ) throw new Error( "Must provide valid URL" )
        this.url = url
        return this;
    };
    addColor( num ) {

        return this;
    };
    addThumbnail( url ) {
        if ( !url || !isValidUrl( url ) ) throw new Error( "Must provide valid thumbnail URL" )
        this.thumbnail.url = url
        return this;
    };
    addImage( url ) {
        if ( !url || !isValidUrl( url ) ) throw new Error( "Must provide valid image URL" )
        this.image.url = url
        return this;
    };
    addAuthor( name, url = null, icon_url = null ) {
        if ( !name || name.length > 256 ) throw new Error( "Author name must be between 1 and 256 characters" )
        if ( url && !isValidUrl( url ) ) throw new Error( "Must provide valid author URL" )
        if ( icon_url && !isValidUrl( icon_url ) ) throw new Error( "Must provide valid author icon URL" )
        this.author.name = name
        this.author.url = url
        this.author.icon_url = icon_url
        return this;
    };
    addFooter( text, icon_url = null ) {
        if ( !text || text.length > 2048 ) throw new Error( "Footer text must be between 1 and 2048 characters" )
        if ( icon_url && !isValidUrl( icon_url ) ) throw new Error( "Must provide valid footer icon URL" )
        this.footer.text = text
        this.footer.icon_url = icon_url
        return this;
    };
    addField( name, value, inline = false ) {
        if ( !name || name.length > 256 ) throw new Error( "Field name must be between 1 and 256 characters" )
        if ( !value || value.length > 1024) throw new Error( "Field value must be between 1 and 1024 characters" )
        if ( inline && typeof inline !== "boolean") throw new Error( "Field inline argument must be a valid boolean" )
        let newfield = { name: name, value: value, inline: inline }
        this.fields.push( newfield )
        return this;
    };
    json( ) {
        return JSON.stringify( this )
    };
    object( ) {
        return JSON.parse(JSON.stringify( this ))
    }
}

export function buildJSON( e ) {
    let exports = { embeds: [ e ] }
    return JSON.stringify( exports )
}

export function buildObject( e ) {
    let exports = { embeds: [ e ] }
    return JSON.parse( JSON.stringify( exports ) )
}

function isValidUrl( string ) {
    let url;

    try {
        url = new URL( string );
    } catch ( _ ) {
        return false;
    }

    return url.protocol === "http:" || url.protocol === "https:";
}

export default DiscordEmbed
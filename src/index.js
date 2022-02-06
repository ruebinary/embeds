class Embed {
    fields = [ ]
    constructor( ) {}
    isValidUrl( str ) {
        let url;
        try { url = new URL( str ) } catch ( _ ) { return false }
        return url.protocol === "http:" || url.protocol === "https:";
    }
    title( str ) {
        if ( str.length <= 256 ) {
            this.title = str
        } else {
            throw new Error( "Title string longer than 256" )
        }
        return this;
    }
    description( str ) {
        if ( str.length <= 4096 ) {
            this.description = str
        } else {
            throw new Error( "Description string longer than 4096" )
        }
        return this;
    }
    url( str ) {
        if ( this.isValidUrl( str ) ) {
            this.url = str
        } else {
            throw new Error( "Provided URL wasn't valid." );
        }
        return this;
    }
    color( int ) {
        if ( typeof 10 === 'number' ) {
            this.color = int
        } else {
            throw new Error( "Provided color wasn't integer" )
        }
        return this;
    }
    footer( text, url ) {
        const footerObject = new Footer( text, url )
        this.footer = footerObject
        return this;
    }
    image( url ) {
        const imageObject = new embedImage( url )
        this.image = imageObject
        return this;
    }
    author( name, url, icon_url ) {
        const authorObject = new Author( name, url, icon_url )
        this.author = authorObject
        return this;
    }
    addfield( name, value, inline ) {
        if ( this.fields.length < 25 ) {
            if ( !inline || inline == null ) {
                this.fields.push( new Fields( name, value ) )
            } else if ( typeof inline !== 'boolean' ) {
                throw new Error( "Inline argument of addfield must be boolean" )
            } else if ( inline == true ) {
                this.fields.push( new Fields( name, value, inline ) )
            } else {
                throw new Error( "Unhandled exception while building new field" )
            }
        } else {
            throw new Error( "Amount of fields cannot exceed 25!" )
        }
        return this;
    }
    buildObject( ) {
        return JSON.parse( JSON.stringify( this ) );
    }
    buildJSON( ) {
        return JSON.stringify( this );
    }
}
class Footer {
    constructor( text, url ) {
        if ( !text ) throw new Error( 'You must provide footer text' );
        if ( text.length > 2048 ) throw new Error( 'Footer text must not exceed 2048 characters' );
        if ( url == null ) {
            if ( text.length <= 2048 ) {
                this.text = text
            } else {
                throw new Error( 'Unhandled exception while building footer, please open issue at https://github.com/franceees/embedder/issues' )
            }
        } else if ( url ) {
            if ( text.length <= 2048 && this.isValidUrl( url ) ) {
                this.text = text
                this.url = url
            } else if ( !this.isValidUrl( url ) ) {
                throw new Error( "Provided footer URL wasn't valid." );
            } else {
                throw new Error( 'Unhandled exception while building footer, please open issue at https://github.com/franceees/embedder/issues' )
            }
        }
        return this;
    }
    isValidUrl( str ) {
        let url;
        try { url = new URL( str ) } catch ( _ ) { return false }
        return url.protocol === "http:" || url.protocol === "https:";
    }
}
class embedImage {
    constructor( url ) {
        if ( this.isValidUrl( url ) ) {
            this.url = url
        } else if ( !this.isValidUrl( url ) ) {
            throw new Error( "Provided image URL wasn't valid." );
        } else {
            throw new Error( "Unhandled exception while building image, please open issue at https://github.com/franceees/embedder/issues" )
        }
        return this;
    }
    isValidUrl( str ) {
        let url;
        try { url = new URL( str ) } catch ( _ ) { return false }
        return url.protocol === "http:" || url.protocol === "https:";
    }
}
class Author {
    constructor( str, url, icon_url ) {
        if ( str.length <= 256 && this.isValidUrl( url ) && this.isValidUrl( icon_url ) ) {
            this.name = str
            this.url = url
            this.icon_url = icon_url
        } else if ( str.length <= 256 && !icon_url || !url ) {
            this.name = str
            this.url = !url ? null : url
            this.icon_url = !icon_url ? null : icon_url
        } else if ( !str ) {
            throw new Error( "Author text must be provided" )
        } else if ( !this.isValidUrl( url ) || !this.isValidUrl( icon_url ) ) {
            throw new Error( "An author URL wasn't valid." );
        } else if ( text.length > 256 ) {
            throw new Error( "Author text longer than 256" )
        } else {
            throw new Error( "Unhandled exception while building author, please open issue at https://github.com/franceees/embedder/issues" )
        }
        return this;
    }
    isValidUrl( str ) {
        let url;
        try { url = new URL( str ) } catch ( _ ) { return false }
        return url.protocol === "http:" || url.protocol === "https:";
    }
}
class Fields {
    constructor( name, value, inline ) {
        if ( !name || !value ) {
            throw new Error( "You need to specify a name AND a value for a field" )
        }
        if ( name.length > 256 ) {
            throw new Error( "Field name cannot exceed 256 characters!" )
        } else if ( value.length > 1024 ) {
            throw new Error( "Field value cannot exceed 1024 characters!" )
        } else if ( !inline || typeof inline != "boolean" ) {
            this.name = name
            this.value = value
        } else if ( inline && typeof inline == "boolean" ) {
            this.name = name
            this.value = value
            this.inline = inline
        } else {
            throw new Error( "Unhandled exception while building field, please open issue at https://github.com/franceees/embedder/issues" )
        }
        return this;
    }
}

console.log( new Embed( ).title( 'asd' ).description( 'asd' ).url( 'http://..' ).color( 12 ).footer( 'Author', 'https://..' ).image( 'http://..' ).author( 'asd', null, 'http://..' ).addfield( 'yo', 'nah', true ).addfield( 'asd', 'E' ).wrap( ).buildJSON() )
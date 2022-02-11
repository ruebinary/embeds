## 📝 embeds
>small JavaScript module that builds Discord embed objects

embeds includes a validation layer for embed properties, so you never send malformed objects. also includes three functions to build your embed for production.

```js
const { createEmbed } = require('@ruebinary/embeds')

const myembed = createEmbed()
.addTitle('Embed title')
.addDescription('Embed description')

console.log(myembed)

//output will be {title: 'Embed title', description: 'Embed description'}
```
**Details**

*Constructors will be added here soon*

<details>
    <summary>
        <b>
            <code>
                .buildObject()
            </code>
        </b>
    </summary>
    Wraps the instance of the embed in a new object's "embeds" array, thus making it ready for POST.

    const myembed = createEmbed()
    .addTitle('Embed title')
    .buildObject()
    console.log(myembed)
    
    //output {embeds: [{title: 'Embed Title'}]}
</details>
<details>
    <summary>
        <b>
            <code>
                .buildJson()
            </code>
        </b>
    </summary>
    Wraps the instance of the embed in a new object's "embeds" array, thus making it ready for POST; then stringifies so you can use it as JSON.

    const myembed = createEmbed()
    .addTitle('Embed title')
    .buildJson()
    console.log(myembed)
    
    //output {"embeds": [{"title": "Embed Title"}]}
</details>
<details>
    <summary>
        <b>
            <code>
                .jsonify()
            </code>
        </b>
    </summary>
    Stringifies your embed

    const myembed = createEmbed()
    .addTitle('Embed title')
    .jsonify()
    console.log(myembed)
    
    //output {"title": "Embed Title"}
</details>

**Roadmap**

- [ ] Finish readme

copyright (c) ruebinary 2022 
*embeds* is released under isc license
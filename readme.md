## 📝Embedder

> JS module that builds Discord Embed objects.

```diff
$ npm i @ruebinary/embeds
```

```js
const { createEmbed } = require('@ruebinary/embeds')

const myembed = createEmbed()
.addTitle('Embed title')
.addDescription('Embed description')

console.log(myembed)
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
    
    //output:
    {embeds: [{title: 'Embed Title'}]}
</details>

**Roadmap**

- [ ] Finish readme
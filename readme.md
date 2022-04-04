## 📝 embeds
>small JavaScript module that builds Discord embed objects

embeds includes a validation layer for embed properties, so you never send malformed objects. also includes two functions to build your embed for production.

```js
import DiscordEmbed from '@ruebinary/embeds'

const yourembed = new DiscordEmbed()
.addTitle('Embed title')
.addDescription('Embed description')

console.log(yourembed)
```
**Details**

<details>
    <summary>
        <b>
            <code>
                buildObject(embed)
            </code>
        </b>
    </summary>
    Wraps the instance of the embed in a new object's "embeds" array, thus making it ready for POST.

    const yourembed = new DiscordEmbed()
    .addTitle('Embed title')
    .addDescription('Embed description')

    console.log(buildObject(yourembed))
</details>
<details>
    <summary>
        <b>
            <code>
                buildJSON()
            </code>
        </b>
    </summary>
    Wraps the instance of the embed in a new object's "embeds" array, thus making it ready for POST; then stringifies so you can use it as JSON.

    const yourembed = new DiscordEmbed()
    .addTitle('Embed title')
    .addDescription('Embed description')

    console.log(buildJSON(yourembed))    
</details>

**Roadmap**

- [ ] Finish readme

copyright (c) 2022 @ruebinary

*embeds* is released under isc license
## Embedder

JS module that builds Discord Embed objects.

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

<details>
  <summary>
    <b>
      <code>
      .addTitle(string)
      </code>
    </b>
  </summary>
  Adds a title to your embed
</details>

**Roadmap**

- [ ] Finish readme
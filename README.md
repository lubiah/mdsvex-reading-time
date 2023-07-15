# mdsvex-reading-time

A remark plugin which calculates the reading time for your mdsvex files. I created this plugin because [remark-reading-time](https://www.npmjs.com/package/remark-reading-time) doesn't work with mdsvex.


## Install

* pnpm  
`pnpm add -D mdsvex-reading-time`

* npm  
`npm i -D mdsvex-reading-time`

* yarn  
`yarn add -D mdsvex-reading-time`

## Usage

After installing the package, you can import it into your `mdsvex.config.js` file.

```js
import { defineMDSveXConfig as defineConfig } from "mdsvex";

import readingTime from "mdsvex-reading-time";

const config = defineConfig({
	remarkPlugins: [
		readingTime
	],
	rehypePlugins: []
});

export default config;

```

By default, it adds a new property `readingTime` to your frontmatter. The property contains an object of this format. 
```
 { text: '3 min read', minutes: 2.97, time: 178200, words: 594 }
```

## Configuring

Most of the time, you wouldn't need to configure anything but there are two options available to configure.

* `attribute`
The default attribute is `readingTime` but you can replace it with any name.

```javascript
import { defineMDSveXConfig as defineConfig } from "mdsvex";

import readingTime from "mdsvex-reading-time";

const config = defineConfig({
	extensions: [".md"],

	smartypants: {
		dashes: "oldschool"
	},

	remarkPlugins: [
		[readingTime, { attribute: "reading"}]
	],
	rehypePlugins: []
});

export default config;

```

* wpm

This option allows you to change the default word per minute. This value refers to the average number of words which a person can read. By default it's 200 but you can change it.

```javascript
import { defineMDSveXConfig as defineConfig } from "mdsvex";

import readingTime from "mdsvex-reading-time";

const config = defineConfig({
	extensions: [".md"],

	smartypants: {
		dashes: "oldschool"
	},

	remarkPlugins: [
		[readingTime, { wpm: 350 }]
	],
	rehypePlugins: []
});

export default config;

```
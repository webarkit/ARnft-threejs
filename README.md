# ARnft-threejs
**ARnft-threejs** is the new rendering engine for [ARnft](https://github.com/webarkit/ARnft).
It is based on [Three.js](https://github.com/mrdoob/three.js) !!

## Use the library

You can clone with git:

`git clone https://github.com/webarkit/ARnft-threejs`

and then get the library in the dist folder:
```html
<script src="path/to/ARnftThreejs.js"></script>
```
or load with raw.githack:

```html
<script src="https://raw.githack.com/webarkit/ARnft-threejs/main/dist/ARnftThreejs.js"></script>
```

or you can install from npm:

```
npm install @webarkit/arnft-threejs
```

or yarn:

```
yarn add @webarkit/arnft-threejs
```

and use it as a module:

```javascript
import ARnftThreejs from '@webarkit/arnft-threejs'
```

## Features
The library has **ES6** and typescript support. Type definitions are in the types folder.

## Build the docs
If you want to read the API doc run in the console:

```
yarn docs
```
and then access the generated html pages with a localhost server.

## Build the project
If you make changes to the project to the source code , then you need to build it again:

```
yarn dev-ts // for a development build

yarn build-ts // for a production build
```
## Contributing to the project

Contributions are very welcome! if you want to contribute read our [CONTRIBUTING](https://github.com/webarkit/ARnft-threejs/blob/main/CONTRIBUTING.md) page.
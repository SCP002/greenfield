# Greenfield

> Small react + mobx based puzzle game.
<https://scp002.github.io/greenfield/>

## Game rules

To win, mark all cells green.

Click on the cell will invert colors of all neighbors except for diagonals.

## Build setup

``` bash
# Install dependencies
npm install

# Serve with hot reload at localhost:3000
npm start

# Build for production with minification
npm run build
```

## Notes

Production build does not work with `file://` protocol.

Use HTTP server, for example:

``` bash
npm install -g serve
serve -s build
```

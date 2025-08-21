
# p5-epi-colors
Helper for color operations and palette management for js, p5js (uses color())

## Features

- Provides a set of curated color palettes
- Easily select and randomize palettes
- Interpolate between palette colors
- Adjust color saturation and brightness
- Compute average color of a palette

## EpiColors Class API

### Constructor
`new EpiColors(palettes = null)`
- `palettes` (optional): Array of palettes to use. If not provided, uses built-in palettes.

### Methods

- `getRandomPalette(randomize = false)`
	- Sets a random palette as the current palette. If `randomize` is true, shuffles the palette colors.
	- Also sets `FG` (foreground) and `BG` (background) colors based on the palette.

- `randomizePalette()`
	- Shuffles the current palette in place.

- `getColor(clr)`
	- Converts a color input (hex string, int, or p5 color object) to a p5 color object.

- `getLerpedColorFromPalette(f, arr = null)`
	- Returns a color interpolated between two colors in the palette.
	- `f`: Interpolation factor (0-1)
	- `arr`: Palette array to use (defaults to current palette)

- `getAdjustedSaturation(clr, f = 1)`
	- Adjusts the saturation of a color.
	- `f`: Saturation factor (0-1: less saturated, >1: more saturated)

- `getAdjustedBrightness(clr, f = 1)`
	- Adjusts the brightness of a color.
	- `f`: Brightness factor (0-1: darker, >1: brighter)

- `getAverageClr(pal, lmt = 255)`
	- Returns the average color of a palette, optionally limiting the max channel value.
	- `pal`: Palette array
	- `lmt`: Maximum channel value

## Usage Example

In OpenProcessing, go to Sketch > Libraries > Add .js File and paste URL:
```html
https://cdn.jsdelivr.net/gh/epibyte/p5-epi-colors@v0.0.4/dist/p5-epi-colors.js
```
or include via <script src="">

```js
// In your p5.js sketch:
let epiColors;

function setup() {
	createCanvas(400, 400);
  
  const { EpiColors } = EpiColorsPckg;
	epiColors = new EpiColors();
	// epiColors.getRandomPalette(); // optional, part of the constructor
	background(epiColors.BG);
	noStroke();
	for (let i = 0; i < epiColors.palette.length; i++) {
		fill(epiColors.palette[i]);
		ellipse(60 + i * 60, height / 2, 50, 50);
	}
	// Interpolated color example
	let lerped = epiColors.getLerpedColorFromPalette(0.5);
	fill(lerped);
	ellipse(width / 2, height - 60, 60, 60);
}
```

## Notes
- Requires p5.js and its color utilities (color, lerpColor, etc.)

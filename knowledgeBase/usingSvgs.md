# Using SVGs

## Things to consider

### Requirements

In order to use SVGs, make sure `react-native-svg` library is present. If not, install it by running `expo install react-native-svg` in an appropriate directory. For more information about this library, visit `https://github.com/react-native-svg/react-native-svg`.

### How and where to store SVGs

It is best to have SVGs in inline form, contained in separate component files, because:

- It gives you precise control over an SVG,
- But at the same time, they don't clutter your view component (or other components of any kind)

For example, I'm making a cookie selling app and my cookie image SVG markup is in a component file named `MyCookie.js`, which is then linked in another component file titled `MainView.js`

Example directory structure:

```
cookie-app
|--src
|  `--ui
|     `--components
|        |--MyCookie.js
|        `--MainView.js
...
```

## The Process

### Optimizing SVGs

If you make an SVG in a vector graphics editor like InkScape/Illustrator, or download an image that's been made in one from Figma, it's going to contain unnecessary markup, which is unfavorable, because:

- It makes the markup less readable
- It needlessly increases the file size

There are many tools for slimming down an SVG, the one I would recommend is SVGOMG, an online GUI for SVG Optimizer, which itself is a command line tool. SVGOMG allows you to see a preview of the optimized image and the resulting markup.

SVGOMG: `https://jakearchibald.github.io/svgomg/`

Here's a comparison of an SVG markups, that result in a nearly identical image:

- Straight out of Inkscape:

```xml
<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!-- Created with Inkscape (http://www.inkscape.org/) -->

<svg xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:cc="http://creativecommons.org/ns#" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns:svg="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/2000/svg" xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd" xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape" width="100" height="100" viewBox="0 0 26.458333 26.458334" version="1.1" id="svg8" inkscape:version="0.92.5 (2060ec1f9f, 2020-04-08)" sodipodi:docname="drawing.svg">
  <defs id="defs2" />
  <sodipodi:namedview id="base" pagecolor="#ffffff" bordercolor="#666666" borderopacity="1.0" inkscape:pageopacity="0.0" inkscape:pageshadow="2" inkscape:zoom="2.8" inkscape:cx="0.65587017" inkscape:cy="74.777417" inkscape:document-units="mm" inkscape:current-layer="layer1" showgrid="false" units="px" inkscape:window-width="1366" inkscape:window-height="699" inkscape:window-x="0" inkscape:window-y="0" inkscape:window-maximized="1" />
  <metadata id="metadata5">
    <rdf:RDF>
      <cc:Work rdf:about="">
        <dc:format>image/svg+xml</dc:format>
        <dc:type rdf:resource="http://purl.org/dc/dcmitype/StillImage" />
        <dc:title></dc:title>
      </cc:Work>
    </rdf:RDF>
  </metadata>
  <g inkscape:label="Layer 1" inkscape:groupmode="layer" id="layer1" transform="translate(0,-270.54165)">
    <circle style="fill:#e6cea0;stroke:#000000;stroke-width:0.26458332" id="path1368" cx="13.361458" cy="283.63852" r="10.583333" />
    <circle style="fill:#5f4336;stroke:#000000;stroke-width:0.26458332" id="path1438" cx="9.3927088" cy="280.19894" r="1.8520833" />
    <circle style="fill:#5f4336;stroke:#000000;stroke-width:0.26458332" id="path1438-3" cx="17.330208" cy="283.63852" r="1.8520833" />
    <circle style="fill:#5f4336;stroke:#000000;stroke-width:0.26458332" id="path1438-6" cx="9.3927088" cy="289.72394" r="1.8520833" />
  </g>
</svg>
```

<svg xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:cc="http://creativecommons.org/ns#" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns:svg="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/2000/svg" xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd" xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape" width="100" height="100" viewBox="0 0 26.458333 26.458334" version="1.1" id="svg8" inkscape:version="0.92.5 (2060ec1f9f, 2020-04-08)" sodipodi:docname="drawing.svg">
  <defs id="defs2" />
  <sodipodi:namedview id="base" pagecolor="#ffffff" bordercolor="#666666" borderopacity="1.0" inkscape:pageopacity="0.0" inkscape:pageshadow="2" inkscape:zoom="2.8" inkscape:cx="0.65587017" inkscape:cy="74.777417" inkscape:document-units="mm" inkscape:current-layer="layer1" showgrid="false" units="px" inkscape:window-width="1366" inkscape:window-height="699" inkscape:window-x="0" inkscape:window-y="0" inkscape:window-maximized="1" />
  <metadata id="metadata5">
    <rdf:RDF>
      <cc:Work rdf:about="">
        <dc:format>image/svg+xml</dc:format>
        <dc:type rdf:resource="http://purl.org/dc/dcmitype/StillImage" />
        <dc:title></dc:title>
      </cc:Work>
    </rdf:RDF>
  </metadata>
  <g inkscape:label="Layer 1" inkscape:groupmode="layer" id="layer1" transform="translate(0,-270.54165)">
    <circle style="fill:#e6cea0;stroke:#000000;stroke-width:0.26458332" id="path1368" cx="13.361458" cy="283.63852" r="10.583333" />
    <circle style="fill:#5f4336;stroke:#000000;stroke-width:0.26458332" id="path1438" cx="9.3927088" cy="280.19894" r="1.8520833" />
    <circle style="fill:#5f4336;stroke:#000000;stroke-width:0.26458332" id="path1438-3" cx="17.330208" cy="283.63852" r="1.8520833" />
    <circle style="fill:#5f4336;stroke:#000000;stroke-width:0.26458332" id="path1438-6" cx="9.3927088" cy="289.72394" r="1.8520833" />
  </g>
</svg>

- Optimized with SVGOMG:

```xml
<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 27 27">
  <g stroke="#000" stroke-width=".3" transform="translate(0 -271)">
    <circle cx="13.4" cy="283.6" r="10.6" fill="#e6cea0"/>
    <circle cx="9.4" cy="280.2" r="1.9" fill="#5f4336"/>
    <circle cx="17.3" cy="283.6" r="1.9" fill="#5f4336"/>
    <circle cx="9.4" cy="289.7" r="1.9" fill="#5f4336"/>
  </g>
</svg>
```

<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 27 27">
  <g stroke="#000" stroke-width=".3" transform="translate(0 -271)">
    <circle cx="13.4" cy="283.6" r="10.6" fill="#e6cea0"/>
    <circle cx="9.4" cy="280.2" r="1.9" fill="#5f4336"/>
    <circle cx="17.3" cy="283.6" r="1.9" fill="#5f4336"/>
    <circle cx="9.4" cy="289.7" r="1.9" fill="#5f4336"/>
  </g>
</svg>

- Written by hand

```xml
<svg width="100" height="100" xmlns="http://www.w3.org/2000/svg">
  <circle stroke="black" fill="#E6CEA0" cx="50" cy="50" r="40" />
  <circle stroke="black" fill="#5F4336" cx="35" cy="37" r="7" />
  <circle stroke="black" fill="#5F4336" cx="65" cy="50" r="7" />
  <circle stroke="black" fill="#5F4336" cx="35" cy="73" r="7" />
</svg>
```

<svg width="100" height="100" xmlns="http://www.w3.org/2000/svg">
  <circle stroke="black" fill="#E6CEA0" cx="50" cy="50" r="40" />
  <circle stroke="black" fill="#5F4336" cx="35" cy="37" r="7" />
  <circle stroke="black" fill="#5F4336" cx="65" cy="50" r="7" />
  <circle stroke="black" fill="#5F4336" cx="35" cy="73" r="7" />
</svg>

### Converting SVG markup to a React Native component

SVGR is a command line tool for converting SVGs to React Native components.

- Install it with `yarn add --dev @svgr/cli`.
- Then, covert the selected SVG with the following command `npx @svgr/cli --native <path to svg> > <path to resulting component file>`, which takes:
	* an option `--native`, so that the output is a React Native component
	* and a path to an SVG file as an argument.
- It prints out the resulting component to the standard output, so redirect it to a corresponding file

Now the SVG is ready for use.

You can experiment with SVGR's online playground at it's official website, where you can paste SVG markup and see the resulting component code, which you can alter with options through a panel located on the right side of the website. `https://react-svgr.com/playground/`

## Things to take into account when using images from Figma

These images have clipping applied, which results in the image having rounded corners. This is not desirable when using such an image as a background for example. One should edit such an image in InkScape, where One would remove the initial clipping and replace it with a rectangular one (if desired).

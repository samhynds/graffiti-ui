# Colour

The Graffiti theme includes a range of colours which you can use in your app. There are two main groups of colours: the palette and the accents.

The palette group includes a full range of colours which are based on [Tailwind](https://tailwindcss.com/docs/customizing-colors). The accents are a set of colours that you want to use throughout your app to maintain consistency. For example, the primary accent colour which is used for primary buttons, form inputs, loading spinners and links. The "heading" accent is the colour used for heading text and so on.

If you wish, you use any colours you like, by [extending the styles](../overview/styling#extending-the-component-styles) of the components.

## Palette

<script setup>
  import { palette } from "../../src/themes/default";
  
  delete palette.white;
  delete palette.black;

  const paletteKeys = Object.keys(palette);
</script>

<div v-for="colorSet in paletteKeys">
  <h3 style="text-transform: capitalize; display: flex; flex-direction: row; gap: 1rem; margin-bottom: 1rem;">{{ colorSet }}</h3>
  <div style="display: flex; flex-direction: row; gap: 1rem; flex-wrap: wrap;">
    <div v-for="(color, shade) in palette[colorSet]">
      <div :style="{ backgroundColor: color, width: '4rem', height: '3rem', borderRadius: '0.25rem', border: '1px solid rgba(0, 0, 0, 0.1)' }"></div>
      <span style="font-size: 0.9rem;">{{ shade }}</span>
      <br />
      <span style="font-family: monospace; font-size: 0.7rem;">{{ color }}</span>
    </div>
  </div>
</div>

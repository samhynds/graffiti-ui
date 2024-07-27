import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Graffiti UI",
  description:
    "UI and component library for creating web applications with React",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "Get Started", link: "/overview/getting-started" },
      { text: "Theme", link: "/theme/overview" },
      { text: "Components", link: "/components/button" },
      { text: "Live Demos", link: "/examples" },
    ],

    sidebar: [
      {
        text: "Overview",
        items: [
          { text: "Getting Started", link: "/overview/getting-started" },
          { text: "Layout", link: "/overview/layout" },
          { text: "Styling", link: "/overview/styling" },
          { text: "Release Notes", link: "/overview/release-notes" },
        ],
      },
      {
        text: "Theme",
        items: [
          { text: "Overview", link: "/theme/overview" },
          { text: "Colour", link: "/theme/colour" },
          { text: "Global Styles", link: "/theme/global-styles" },
        ],
      },
      {
        text: "Components",
        items: [
          { text: "Button", link: "/components/button" },
          { text: "Button (Icon)", link: "/components/icon-button" },
          { text: "Card", link: "/components/card" },
          { text: "Checkbox", link: "/components/checkbox" },
          { text: "Dropdown", link: "/components/dropdown" },
          { text: "Label", link: "/components/label" },
          { text: "Radio", link: "/components/radio" },
          { text: "Radio Group", link: "/components/radio-group" },
          { text: "Text Input", link: "/components/text-input" },
          { text: "Form Wrapper", link: "/components/form-wrapper" },
          { text: "Container", link: "/components/container" },
          { text: "Row", link: "/components/row" },
          { text: "Column", link: "/components/column" },
          { text: "Loading Spinner", link: "/components/loading-spinner" },
          { text: "Profile Picture", link: "/components/profile-pic" },
          { text: "Video", link: "/components/video" },
          { text: "Modal", link: "/components/modal" },
          {
            text: "Navigation (Horizontal)",
            link: "/components/navigation-horizontal",
          },
          {
            text: "Navigation (Vertical)",
            link: "/components/navigation-vertical",
          },
          { text: "Navigation Link", link: "/components/navigation-link" },
          { text: "Overlay", link: "/components/overlay" },
          { text: "Table", link: "/components/table" },
          { text: "Tag", link: "/components/tag" },
          { text: "Time", link: "/components/time" },
          { text: "Toast", link: "/components/toast" },
          { text: "Typography", link: "/components/typography" },
        ],
      },
    ],

    logo: "/img/logo-sm.png",
    socialLinks: [
      { icon: "github", link: "https://github.com/samhynds/graffiti-ui" },
    ],
  },
});

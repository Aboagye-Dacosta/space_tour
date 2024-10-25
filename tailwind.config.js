/** @type {import('tailwindcss').Config} */

const defUrl = "/assets";
const crewDefUrl = `${defUrl}/crew`;
const destinationDefUrl = `${defUrl}/destination`;
const homeDefUrl = `${defUrl}/home`;
const technologyDefUrl = `${defUrl}/technology`;

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        crewMobile: `url(${crewDefUrl}/background-crew-mobile.jpg)`,
        crewTablet: `url(${crewDefUrl}/background-crew-tablet.jpg)`,
        crewDesktop: `url(${crewDefUrl}/background-crew-desktop.jpg)`,
        destinationMobile: `url(${destinationDefUrl}/background-destination-mobile.jpg)`,
        destinationTablet: `url(${destinationDefUrl}/background-destination-tablet.jpg)`,
        destinationDesktop: `url(${destinationDefUrl}/background-destination-desktop.jpg)`,
        homeMobile: `url(${homeDefUrl}/background-home-mobile.jpg)`,
        homeTablet: `url(${homeDefUrl}/background-home-tablet.jpg)`,
        homeDesktop: `url(${homeDefUrl}/background-home-desktop.jpg)`,
        technologyMobile: `url(${technologyDefUrl}/background-technology-mobile.jpg)`,
        technologyTablet: `url(${technologyDefUrl}/background-technology-tablet.jpg)`,
        technologyDesktop: `url(${technologyDefUrl}/background-technology-desktop.jpg)`,
      },
      lineHeight: {
        lnSmall: "0.5 !important",
      }
    },
  },
  plugins: [],
};

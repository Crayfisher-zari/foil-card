import "./style.css";
import { createApp, ref } from "./vue.esm-browser.js";
createApp({
  setup() {
    const isFoil = ref(true);
    const isAnimation = ref(true);
    return {
      isFoil,
      isAnimation,
    };
  },
}).mount("#app");

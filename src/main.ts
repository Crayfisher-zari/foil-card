import "./style.css";
import {
  createApp,
  ref,
} from "https://unpkg.com/vue@3/dist/vue.esm-browser.js";
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

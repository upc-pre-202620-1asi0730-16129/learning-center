import { createApp } from 'vue'
import App from './App.vue'
import PrimeVue from 'primevue/config'
import Material from '@primeuix/themes/material'
import 'primeflex/primeflex.css'
import 'primeicons/primeicons.css'
import {SelectButton} from "primevue";
import i18n from "@/i18n.js";

const primeUiLicenseKey = import.meta.env.VITE_PRIME_UI_LICENSE_KEY;
createApp(App)
    .use(i18n)
    .use(PrimeVue, {
        ripple: true,
        license: primeUiLicenseKey,
        theme: {
            preset: Material
        }
    })
    .component('pv-select-button', SelectButton)
    .mount('#app')

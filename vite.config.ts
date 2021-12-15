import {defineConfig} from "laravel-vite"
import vue from "@vitejs/plugin-vue"
import tailwind from 'tailwindcss'
import autoprefixer from 'autoprefixer'
//import svgLoader from 'vite-svg-loader'

export default defineConfig()
    .withPostCSS([
        tailwind,
        autoprefixer
    ])
    .withPlugin(vue)
    //.withPlugin(svgLoader)

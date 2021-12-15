import {createApp, h} from "vue"
import {createInertiaApp, Head, Link} from "@inertiajs/inertia-vue3"
import {InertiaProgress} from "@inertiajs/progress"
import "../css/app.css"

const appName = window.document.getElementsByTagName("title")[0]?.innerText || import.meta.env.APP_NAME
const pages = import.meta.glob('./Pages/**/*.vue')

// @ts-ignore
createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: async (name) => {
        if (import.meta.env.DEV) {
            // @ts-ignore
            return (await import(`./Pages/${name}.vue`)).default
        } else {
            const importPage = pages[`./Pages/${name}.vue`]
            return importPage().then(module => module.default)
        }
    },
    setup({el, app, props, plugin}) {
        return createApp({render: () => h(app, props)})
            .use(plugin)
            .component('Link', Link)
            .component('Head', Head)
            .mount(el)
    },
})

InertiaProgress.init({color: "#4B5563"})

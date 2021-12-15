export { }

declare global {
    interface Window {
        route: Function,
        axios: Object,
    }
}

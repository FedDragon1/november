export function runOnLoad(fn: () => void) {
    if (document.readyState === "complete") {
        fn()
        return
    }

    setTimeout(() => runOnLoad(fn), 100)
}
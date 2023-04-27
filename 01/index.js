function big () {
    const view = document.getElementById("view")

    view.classList.remove("small")
    view.classList.remove("medium")
}

function medium () {
    const view = document.getElementById("view")

    if (!view.classList.contains("medium")) {
        view.classList.add("medium")
    }
    
    view.classList.remove("small")
}

function small () {
    const view = document.getElementById("view")

    if (!view.classList.contains("medium")) {
        view.classList.add("medium")
    }

    view.classList.add("small")
}
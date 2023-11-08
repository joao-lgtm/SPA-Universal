export class Router {
    routes = {}
    background ={}
    add(routerName, page, background) {
        this.routes[routerName] = page
        this.background[routerName] = background
       
    }

    route(event) {
        event = event || window.event
        event.preventDefault()

        window.history.pushState({}, "", event.target.href)

        this.handle()
    }

    handle() {
        const { pathname } = window.location

        console.log(pathname)
        const routes = this.routes[pathname]
        const background = this.background[pathname]// Recupere o plano de fundo para o pathname atual
        console.log(routes)
        fetch(routes)
            .then(data => data.text())
            .then(html => {
                document.querySelector('#app').innerHTML = html
                document.body.style.cssText = `background:url(${background});  background-repeat: no-repeat; background-position: bottom; background-size: cover; transition: 2s`; // Atualiza o plano de fundo
            })
    }
}


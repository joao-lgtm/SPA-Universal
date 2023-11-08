import { Router } from "./router.js"

const router = new Router()

router.add('/', "/pages/Home.html","/assets/mountains-universe-1.svg")
router.add('/Universo', "/pages/Universo.html","/assets/mountains-universe-2.svg")
router.add('/Exploracao', "/pages/Exploracao.html","/assets/mountains-universe-3.svg")


router.handle()

window.onpopstate = () => router.handle()
window.route = () => router.route()
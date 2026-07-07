import './style.css'
import './style.css'
import confetti from 'canvas-confetti'

const app = document.querySelector('#app')

const frases = [
  "Una mas? Xd",
  "¿Segura? 🥺",
  "Piénsalo otra vez :P",
  "No seas así :V",
  "Dame otra oportunidad 🥹",
  "Y sigues? 😂",
  "Más rápido que no lo coges😝",
  "Casi me atrapas :,)",
  "No podras 😜",
  "Nunca podrás 😎",
]

let intentos = 0
let escalaSi = 1

inicio()

function inicio() {

  app.innerHTML = `
  <div class="contenedor">

      <h1 class="titulo"> Me perdonas? 🥺 </h1>

      <p class="subtitulo">
        Solo si quieres jeje 😝🥹 
      </p>

      <div class="botones">

          <button id="si">
              Esta bien putito ❤️
          </button>

          <button id="no">
              No 😒
          </button>

      </div>

  </div>
  `

  const botonSi = document.getElementById("si")
  const botonNo = document.getElementById("no")

  botonNo.addEventListener("mouseenter", moverNo)
  botonNo.addEventListener("mouseover", moverNo)
  botonNo.addEventListener("touchstart", moverNo, { passive:false })

  botonSi.addEventListener("click", aceptar)

  function moverNo(e){

      if(e){
          e.preventDefault()
      }

      intentos++

      botonNo.textContent =
          frases[intentos % frases.length]

      escalaSi += 0.10

      botonSi.style.transform =
          `scale(${escalaSi})`

      botonSi.style.transition =
          ".25s"

      const ancho =
          window.innerWidth -
          botonNo.offsetWidth -
          30

      const alto =
          window.innerHeight -
          botonNo.offsetHeight -
          30

      const x =
          Math.random()*ancho

      const y =
          Math.random()*alto

      botonNo.style.position="fixed"

      botonNo.style.left=x+"px"

      botonNo.style.top=y+"px"

      botonNo.style.transform=
      `
      rotate(${Math.random()*50-25}deg)
      scale(${0.9+Math.random()*0.4})
      `

  }

  function aceptar(){

      lanzarCorazones()

      if(navigator.vibrate){

          navigator.vibrate([150,60,150])

      }

      setTimeout(()=>{

          mostrarGracias()

      },1800)

  }

}

function lanzarCorazones(){

    for(let i=0;i<70;i++){

        const corazon =
        document.createElement("div")

        corazon.className="corazon"

        corazon.innerHTML="💖"

        corazon.style.left=
        Math.random()*100+"vw"

        corazon.style.top="-50px"

        corazon.style.fontSize=
        (20+Math.random()*35)+"px"

        corazon.style.animationDuration=
        (2+Math.random()*3)+"s"

        document.body.appendChild(corazon)

        setTimeout(()=>{

            corazon.remove()

        },5000)

    }

}

function mostrarGracias(){

    app.innerHTML=`

    <div class="contenedor">

        <h1>❤️</h1>

        <h2>

        Casi que no me atrapas 😝🥹

        </h2>

        <p>

        Prometo hacerlo
        mucho mejor.

        </p>

        <button
        id="carta"
        class="carta">

        💌 Tocame aca XD

        </button>

    </div>

    `

    document
    .getElementById("carta")
    .addEventListener(
        "click",
        abrirCarta
    )

}

function abrirCarta(){

    app.innerHTML=`

    <div class="sobre">

        <div class="emoji">

        ✉️

        </div>

        <h2>

       LLego una carta para sumerce ❤️

        </h2>

        <button
        id="abrirSobre"
        class="carta">

        Abrime ps :V

        </button>

    </div>

    `

    document
    .getElementById("abrirSobre")
    .addEventListener(
        "click",
        mostrarCarta
    )

}

function mostrarCarta(){

    app.innerHTML = `

    <div class="contenedor cartaFinal">

        <h1>💌</h1>

        <h2>Para ti ❤️</h2>

        <p class="textoCarta">

        Desde el primer momento
        quise pedirte perdón.

        Sé que cometí errores.

        No puedo cambiar el pasado,
        se que soy frio pero lo que siento por ti es real.
        No quiero perderte asi.
        
        Te quiero Laurita 🥹️

        Quiero verte feliz y ayudarte en lo que pueda

        ❤️

        </p>

        <button
        id="abrazo"
        class="carta">

        ❤️ Dame un abrazo ❤️

        </button>

        <button
        id="reiniciar"
        class="volver">

        🔄 Volver al inicio

        </button>

    </div>

    `

    document
    .getElementById("abrazo")
    .addEventListener(
        "click",
        abrazoFinal
    )

    document
    .getElementById("reiniciar")
    .addEventListener(
        "click",
        ()=>{

            intentos=0
            escalaSi=1

            inicio()

        }
    )

}

function abrazoFinal(){

    lanzarCorazones()

    confetti({
    particleCount: 200,
    spread: 180,
    origin: { y: 0.6 }
})

setTimeout(() => {
    confetti({
        particleCount: 120,
        angle: 60,
        spread: 80,
        origin: { x: 0 }
    })

    confetti({
        particleCount: 120,
        angle: 120,
        spread: 80,
        origin: { x: 1 }
    })
}, 400)

    if(navigator.vibrate){

        navigator.vibrate([250,80,250])

    }

    app.innerHTML = `

    <div class="contenedor final">

        <h1 class="gracias">

        ❤️

        </h1>

        <h1>

        TQM ❤️

        </h1>

        <p>

        Te quiero morder :V jsjs.

        Espero que entiendas todo lo que siento.

        🥹❤️

        </p>

        <button
        id="otra"
        class="volver">

        Volver al inicio

        </button>

    </div>

    `

    document
    .getElementById("otra")
    .addEventListener(
        "click",
        ()=>{

            intentos=0
            escalaSi=1

            inicio()

        }
    )

    lluviaContinua()

}

function lluviaContinua(){

    let cantidad = 0

    const intervalo = setInterval(()=>{

        const c =
        document.createElement("div")

        c.className="corazon"

        c.innerHTML="💖"

        c.style.left=
        Math.random()*100+"vw"

        c.style.top="-40px"

        c.style.fontSize=
        (20+Math.random()*40)+"px"

        c.style.animationDuration=
        (2+Math.random()*2)+"s"

        document.body.appendChild(c)

        setTimeout(()=>{

            c.remove()

        },5000)

        cantidad++

        if(cantidad>80){

            clearInterval(intervalo)

        }

    },120)

}

window.addEventListener(

    "resize",

    ()=>{

        const no =
        document.getElementById("no")

        if(!no) return

        no.style.left=""

        no.style.top=""

        no.style.position=""

    }

)
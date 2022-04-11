document.getElementById('start').addEventListener('click', start)

        function start(){
            if (time == undefined){
                alert('escolha o tempo antes de começar')
            } else {
                sortearOrdem()
                openTime()
            }
        }
    

const txt = document.getElementById('txt')
let imgs = document.querySelectorAll('.imgs')
var box = document.querySelectorAll('.box')
var contador
const arr = []
const ids = []
const vetor = [
    './img/atleticogo.png', // 0
    './img/atleticomg.png', // 01
    './img/atleticopr.png', // 02
    './img/avai.png', // 03
    './img/botafogo.png', // 04
    './img/corinthias.png', // 05
    './img/coritiba.jpeg', // 06
    './img/cuiaba.png', // 07
    './img/flamengo.png', // 08
    './img/americamg.png' // 09
]

// box[0] = arr[9]

function sortearOrdem(){
    

    while(arr.length < 10){
        contador = Math.floor(Math.random() * 10)

        if (arr.indexOf(contador) === -1){
            arr.push(contador)
        }
        
    }
    console.log(arr)

       
    for (let i = 0; i < arr.length; i++){
        imgs[i].style.display = 'block'
        imgs[arr[i]].src = vetor[i]
        ids.push(imgs[arr[i]].src)
    }
    console.log('arr ids: ' + ids)
    console.log('arr: ' + arr)
}

var time;

function openTime(){
    const timing = setInterval(()=>{
        txt.innerHTML = 'Tempo restante, preste atenção!'
        time--
        document.getElementById('timing').innerHTML = time
    }, 1000)

    

    setTimeout(perguntar, time * 1000 + 1000)

    function perguntar(){
        txt.innerHTML = 'Agora adivinhe onde tá'

        clearInterval(timing)
        document.getElementById('timing').innerHTML = 00

        for (let i = 0; i < vetor.length; i++){
            imgs[i].src = './img/i2.webp'
        }

        revelar()
    }


}

const imgI = document.getElementById('img-one')
let idImgI
let arrBox = Array.from(box)
let idImgSelect;

function revelar(){
    imgI.style= 'display: block; width: 140px; height: 140px;'
   var contador = Math.floor(Math.random() * 10)

   if (contador < 1)                 {imgI.src = vetor[0]; idImgI =vetor[0]}
   if (contador >= 1 && contador < 2){imgI.src = vetor[1]; idImgI =vetor[1]}
   if (contador >= 2 && contador < 3){imgI.src = vetor[2]; idImgI =vetor[2]}
   if (contador >= 3 && contador < 4){imgI.src = vetor[3]; idImgI =vetor[3]}
   if (contador >= 4 && contador < 5){imgI.src = vetor[4]; idImgI =vetor[4]}
   if (contador >= 5 && contador < 6){imgI.src = vetor[5]; idImgI =vetor[5]}
   if (contador >= 6 && contador < 7){imgI.src = vetor[6]; idImgI =vetor[6]}
   if (contador >= 7 && contador < 8){imgI.src = vetor[7]; idImgI =vetor[7]}
   if (contador >= 8 && contador < 9){imgI.src = vetor[8]; idImgI =vetor[8]}
   if (contador >= 9 && contador < 10){imgI.src = vetor[9]; idImgI =vetor[9]}

   escolherImagem()
   atribuirValores()
   console.log('id: ' + idImgI)
   console.log('ids: ' +  ids)
}

function atribuirValores(){

    for (let i = 0; i < arr.length; i++) {
       
        arrBox[arr[i]] = vetor[i]
        
    }


    console.log('box: ' + arrBox)
    console.log('type box: ' + typeof(arrBox))

}

//  vetor[i] --> box[arr[i]]
// box[1] = vetor[5]



var contadorErro = 0

function escolherImagem(){



    for (let i = 0; i < arr.length; i++){

        box[i].addEventListener('click', ()=>{
            console.log('arr box: ' + arrBox[i])
            console.log('o id 1; ' + idImgI)
            imgs[i].src = arrBox[i]
            if (arrBox[i] == idImgI){

                document.getElementById('box-vitoria').style.display = 'flex'
                
            } else{
               
                contadorErro++
                if(contadorErro > 2){
                    document.getElementById('box-erro').style.display = 'flex'
                }
            }
        })

    }

    

}

setInterval(( )=>{document.getElementById('tentativas').innerHTML = 3 - contadorErro}, 10)

/*
let btnRes = document.querySelectorAll('.restart')

btnRes.forEach((e)=>{
    e.addEventListener('click', ()=>{
        document.getElementById('box-vitoria').style.display = 'none'
        document.getElementById('box-erro').style.display = 'none'

        sortearOrdem()
    })
})
*/

const btn1 = document.getElementById('time-5')
const btn2 = document.getElementById('time-10')
const btn3 = document.getElementById('time-15')

btn1.addEventListener('click', ()=>{
    btn1.style = 'border-radius: 40%; transform: scale(1.1);'
    btn2.style = 'border-radius: 0px; transform: scale(0.8);'
    btn3.style = 'border-radius: 0%; transform: scale(0.8);'

    time = 6
})
btn2.addEventListener('click', ()=>{
    btn1.style = 'border-radius: 0%; transform: scale(0.8);'
    btn2.style = 'border-radius: 40%; transform: scale(1.1);'
    btn3.style = 'border-radius: 0%; transform: scale(0.8);'


    time = 11
})
btn3.addEventListener('click', ()=>{
    btn1.style = 'border-radius: 0%; transform: scale(0.8);'
    btn2.style = 'border-radius: 0%; transform: scale(0.8);'
    btn3.style = 'border-radius: 40%; transform: scale(1.1);'

    time = 16
})
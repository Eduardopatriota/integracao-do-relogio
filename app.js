
function carregar (){

let msg = window.document.getElementById('msg')
let img = window.document.getElementById('imagem')
let data = new Date()
let hora = data.getHours()
let min = data.getMinutes()
let mensagem   

    if (hora >= 5 && hora < 12){
        img.src = 'img/foto_manha.png'
        mensagem = 'bom dia'
              
        
    }
    else if (hora >= 12 && hora < 18){
        img.src = 'img/foto_tarde.png'
        document.body.style.background = 'orange'
        mensagem = 'boa tarde'
        
        
    }
    else{
        img.src = 'img/foto_noite.png'
        document.body.style.background = 'gray'
        mensagem = 'boa noite'
    }

msg.innerHTML = `Agora são ${hora} horas e ${min} min. <br> ${mensagem}`

}

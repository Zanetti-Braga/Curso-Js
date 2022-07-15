function carregar(){
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var con = document.getElementById('compr')
    var data = new Date()
    var hrs = data.getHours()
    msg.innerHTML = `Agora são ${hrs} Horas.`
    if(hrs >= 0 && hrs < 12){
        img.innerHTML = '<img src = "img-manha.png">'
        document.body.style.background = "#DBA53A"
        con.innerHTML = 'Bom dia!'
    } else if(hrs >= 12 && hrs <= 18 ){
        img.innerHTML = '<img src = "img-tarde.png">'
        document.body.style.background = "#DF6617"
        con.innerHTML = 'Boa Tarde!'
    } else{
        img.innerHTML = '<img src = "img-noite.png">'
        document.body.style.background = "#000"
        con.innerHTML = 'Boa Noite!'
        
    }
}
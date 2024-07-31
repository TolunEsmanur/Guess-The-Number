const input = document.querySelector("#kutu")
const btn = document.querySelector("#btn")
const cevap = document.querySelector(".cevap")


function rasgele(min,max){
    let sayi = Math.ceil(Math.random()* (max - min));
    return sayi
}
let random
random = rasgele(0,100)

btn.addEventListener("click",()=>{
    if(kutu.value===random){
      cevap.textContent = "Tebrikler, doğru cevap verdiniz!" + random
    }

    else if(kutu.value > random){
      cevap.textContent = "Yanlış cevap verdiniz!Tahmininiz sayıdan büyük sayı:" + random
    }

    else if(kutu.value < random){
        cevap.textContent = "Yanlış cevap verdiniz!Tahmininiz sayıdan küçük sayı:" + random
      }

    kutu.focus()
})


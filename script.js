document.querySelector(".hesapyap").addEventListener("click" , function(){
    const yaricapDeger = Number(document.querySelector(".yaricap").value);
    const cevreSonuc = (Math.PI*2)*yaricapDeger;
    const cevreSonucFix = cevreSonuc.toFixed(2);
    const alanSonuc = Math.PI*yaricapDeger*yaricapDeger;
    const alanSonucFix = alanSonuc.toFixed(2);
    document.querySelector(".alan").style.color="black";
    document.querySelector(".cevre").style.color="black";
    document.querySelector(".alan").textContent = alanSonucFix;  
    document.querySelector(".cevre").textContent = cevreSonucFix;
    if (yaricapDeger < 0) {
        alert("Lütfen Pozitif Bir Tam Sayı Giriniz...")
        document.querySelector(".alan").textContent = "!";
        document.querySelector(".alan").style.color="red";
        document.querySelector(".cevre").textContent = "!";
        document.querySelector(".cevre").style.color="red";
    }
});
document.querySelector(".clear").addEventListener("click" , function(){
   document.querySelector(".yaricap").value = "";
   document.querySelector(".alan").textContent = "";
   document.querySelector(".cevre").textContent = "";
});
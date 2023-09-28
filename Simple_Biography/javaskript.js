
//validacija forme
function provera() {
    var x=document.getElementById("ime").value;
    var y=document.getElementById("prezime").value;
    var z=document.getElementById("e-mejl").value;
    var v=document.getElementById("lozinka").value;
    var b=document.getElementById("lozinka1").value;


    if(x==='') {
        alert("Morate uneti ime!");
        document.getElementById("ime").style.borderColor = "red";
        return false;
    }

    if(y==='') {
        alert("Morate uneti prezime");
        document.getElementById("prezime").style.borderColor = "red";
        return false;
    }

    if(z===""){
        alert("Morate uneti email");
        document.getElementById("e-mejl").style.borderColor = "red";
        return false; 
    }

    if(z.indexOf("@")==-1 && z!="") {
        alert("Morate uneti validnu email");
        document.getElementById("e-mejl").style.borderColor = "red";
        return false;
    }
    
    if(v===""){
        alert("Morate uneti šifru");
        document.getElementById("lozinka").style.borderColor = "red";
        return false;
    }

    if(b===""){
        alert("Morate uneti potvrdu za šifru");
        document.getElementById("lozinka1").style.borderColor = "red";
        return false;
    }

    if(v!=b){
        alert("Niste fino potvrdili šifru");
        document.getElementById("lozinka").style.borderColor = "red";
        document.getElementById("lozinka1").style.borderColor = "red";
        return false;
    }
}
function prikazivreme(){
    var date = new Date();
    var h = date.getHours(); // 0 - 23
    var m = date.getMinutes(); // 0 - 59
    var s = date.getSeconds(); // 0 - 59
    
   
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;
    
    var time = h + ":" + m + ":" + s + " " ;
    document.getElementById("sat").innerText = time;
    document.getElementById("sat").textContent = time;
    
    setTimeout(prikazivreme, 1000);
    
}

prikazivreme();

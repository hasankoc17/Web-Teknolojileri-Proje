function control(){
    var isim = document.getElementById("isim").value;
    var soyisim = document.getElementById("soyisim").value;
    var email = document.getElementById("email");
    var mesaj=document.getElementById("floatingTextarea2").value;

    if (isim  == "")
    {
      alert("İsim girmelisiniz!");
      return false;
    }
    if (soyisim == "")
    {
      alert("Soyisim girmelisiniz!");
      return false;
    }
    if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value)))
    {
      alert("Geçerli bir E-Mail adresi girmelisiniz!");
      return false;
    }
    if(mesaj==""){
      alert("Lütfen mesajınızı giriniz!");
      return false;
    }
  }
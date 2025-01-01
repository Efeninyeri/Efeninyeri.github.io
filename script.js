function hesapla() {
    // Kullanıcıdan alınan sınav notlarını sayıya çevirme
    var matematik1 = parseFloat(document.getElementById("matematik1").value);
    var matematik2 = parseFloat(document.getElementById("matematik2").value);
    var fen1 = parseFloat(document.getElementById("fen1").value);
    var fen2 = parseFloat(document.getElementById("fen2").value);
    var tr1 = parseFloat(document.getElementById("tr1").value);
    var tr2 = parseFloat(document.getElementById("tr2").value);
    var sos1 = parseFloat(document.getElementById("sos1").value);
    var sos2 = parseFloat(document.getElementById("sos2").value);

    // Geçersiz notlar veya 100'ün üzerindeki notlar için uyarı kontrolü
    if (matematik1 > 100 || matematik2 > 100 || fen1 > 100 || fen2 > 100 || tr1 > 100 || tr2 > 100 || sos1 > 100 || sos2 > 100) {
        alert("Notlar 100'ü geçemez! Lütfen geçerli bir not giriniz.");
        return;
    }

    // Eğer herhangi bir değer NaN (geçersiz sayı) ise uyarı göster
    if (isNaN(matematik1) || isNaN(matematik2) || isNaN(fen1) || isNaN(fen2) || isNaN(tr1) || isNaN(tr2) || isNaN(sos1) || isNaN(sos2)) {
        alert("Lütfen geçerli bir sayı giriniz.");
        return;
    }

    // Ortalama hesaplama işlemi (her ders için ayrı ayrı)
    var ortalamaMatematik = (matematik1 + matematik2) / 2;
    var ortalamaFen = (fen1 + fen2) / 2;
    var ortalamaTürkçe = (tr1 + tr2) / 2;
    var ortalamaSosyal = (sos1 + sos2) / 2;
    var ortalama = (ortalamaFen+ ortalamaMatematik + ortalamaSosyal + ortalamaTürkçe) / 4;
    // Sonuçları gösterme
    document.getElementById("sonucMatematik").innerText = "Matematik Ortalaması: " + ortalamaMatematik.toFixed(2);
    document.getElementById("sonucFen").innerText = "Fen Ortalaması: " + ortalamaFen.toFixed(2);
    document.getElementById("sonucTürkçe").innerText = "Türkçe Ortalaması: " + ortalamaTürkçe.toFixed(2);
    document.getElementById("sonucSos").innerText = "Sosyal Ortalaması: " + ortalamaSosyal.toFixed(2);
    document.getElementById("ortalama").innerText = "GENEL ORTALAMA:"+ ortalama.toFixed(2);

}

const axios = require("axios");
const Tablar = (konu) => {
  // GÖREV 3
  // ---------------------
  // Tek argümanı bir dizi ("konu") olan bu fonksiyonu uygulayın.
  // Örnek olarak, konu dizisi şu şekilde deklare edilmişse ['javascript', 'bootstrap', 'teknoloji']
  // fonksiyon aşağıdaki şekilde bir DOM öğesi döndürecek.
  // Kullanılan etiketler, öğelerin hiyerarşisi ve öznitelikleri sağlanan işaretlemeyle eşleşmelidir!
  // Öğelerin içindeki metin, "textContent" özelliği kullanılarak ayarlanacaktır ("innerText" DEĞİL).
  //
  // <div class="topics">
  //   <div class="tab">javascript</div>
  //   <div class="tab">bootstrap</div>
  //   <div class="tab">teknoloji</div>
  // </div>
  //
  const topicsDiv = document.createElement("div");
  topicsDiv.classList.add("topics");

  konu.forEach((k) => {
    const tabDiv = document.createElement("div");
    tabDiv.classList.add("tab");
    tabDiv.textContent = k;
    topicsDiv.appendChild(tabDiv);
  });

  return topicsDiv;
};

const tabEkleyici = (secici) => {
  // GÖREV 4
  // ---------------------
  // Tek argümanı olarak bir css seçici alan bu işlevi uygulayın.
  // Konuları bu uç noktadan almalıdır: `http://localhost:5001/api/konular` (console.log ile test edin!).
  // Yanıtın içindeki konu dizisini bulun ve Tablar bileşenini kullanarak tabları oluşturun.
  // Tabları, fonksiyona iletilen seçiciyle eşleşen DOM'daki öğeye ekleyin.
  //
  //Burada bir hata var.
  axios
    .get("http://localhost:5001/api/konular")
    .then((response) => {
      if (response.status === 200) {
        const konuData = response.data;
        const konuArray = konuData.konu;
        const tablar = Tablar(konuArray);
        const targetElement = document.querySelector(secici);
        targetElement.appendChild(tablar);
      } else {
        console.error("API'den veri alınamadı.");
      }
    })
    .catch((error) => {
      console.error("API'ye istek gönderilirken hata oluştu: " + error);
    });
};
export { Tablar, tabEkleyici };

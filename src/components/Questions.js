import { useState,useEffect } from 'react'
import { FaArrowDown, FaArrowUp } from 'react-icons/fa'
import './Questions.css'
import { useTranslation, Trans } from 'react-i18next';
const data1 = [
  {
    question: 'Kavvay nedir?',
    answer:
      'Kavvay, Türkiye’den yurt dışına satış yapa e-ticaret sitelerinin kullana bileceği E-gönderi yazılım hizmetidir. Size özel Kavvay hesabı üzerinden siparişlerinizi ve gönderilerinizi yöneterek, Kavvay E-Gönderi yazılım teknolojisi üzerinden gönderilerinizi müşterilerinize ulaşmasını sağlaya bilirsiniz.',
  },
  {
    question: 'Kavvay’yı kullanmak ücretli mi?',
    answer:
      'Sipariş gönderimini kendi kargo anlaşmalarıyla yapan, sadece Kavvay yazılım ve entegrasyon hizmetini kullanmak isteyen müşterilerimiz için küçük bir ücretlendirme yapmaktayız. Ücret hesaplama ve daha detaylı bilgi için https://Kavvay.com/uyelik-planlari',
  },
  {
    question: 'Kavvay fiyat hesaplama nasıl çalışır? ',
    answer: `Kavvay hesabınızdan Fiyat hespalama menüsüne geçiş yapa bilirsiniz. Geçiş yaptığınız sayfada gönderinizin en, boy ve yükseklik ve ağırlık bilgilerini girildikten sonra ülke seçimi yaparak gönderi ücretini göre bilirsiniz. Sipariş gönderilerinin ağırlığı hesaplanırken fiziksel ağırlık ve hacimsel ağırlık hesaplanıyor. İki ağırlıktan yüksek olan ücretlendirilecek ağırlıktır.
    Hacimsel ağırlık (desi ağırlığı); gönderinin en, boy ve yükseklik değerlerinin birbiri ile çarpılmasının 5000 ile bölünmesi ile alınır. (Uzunluk * Genişlik * Yükseklik) / 5000 = Hacimsel ağırlık.`,
  },
  {
    question: 'Mağazalarımı entegre etmeden sadece gönderi yapa bilirmiyim?',
    answer:
      'Mağazalarınızı entegre etmeden gönderi yapa bilirsiniz. Tüm siparişleriniz için ayrılıkta gönderi oluşturmanız gerekmektedir.',
  },
  {
    question: 'Kavvay ile hangi bilgiler paylaşılmaktadır?',
    answer:
      'Kavvay; tüm pazar yerlerinin izni ve bilgisi dahilinde müşteri adı, adresi, varsa telefon numarası, ürün içeriği ve fiyatına erişebiliyor. Bu bilgiler kolay gönderi oluşturulması için gereklidir.',
  },
  {
    question: `Kargolarımı Kavvay'ya nasıl gönderebilirim?`,
    answer: `Kavvay hesabınızdan gönderileriniz için etiketlerinizi oluşturduktan sonra siparişlerinizin üzerine Kavvay etiketlerinizi ekleyerek gönderime hazır ede bilirsiniz.
    Daha sonra Size en yakın MNG veya Yurtiçi şubelerinden anlaşma kodlarımızı ekleyerek (MNG Kargo anlaşma Kodu: 390931124, Yurtiçi kargo anlaşma kodu: 646123168) ücretsiz olarak bize iletebilirsiniz.`,
  },
  {
    question: 'Kavvay bakiyemi nasıl artıra bilirim?',
    answer:
      'Kavvay hesabınızın bakiyesinin artırmak için aşağıdakı linkten bilgi edine bilir veya bizimle tüm müteri destek kanalları üzerinden iletişime geçe bilirsiniz.https://Kavvay.com/blog/Kavvay-uzerinde-bakiye-yukleme/',
  },
  {
    question: 'Kargo takip nasıl yapa bilrim?',
    answer:
      'Gönderileriniz için hazırladığınız etiketle basılan sipariş no üzerinden gönderilerinizin hareket durumunu hesabınızdan yenilenecektir.',
  },
  {
    question:
      'Gönderim gümrüğe işlemleri sırasında çıkışına izin verilmeye bilirmi?',
    answer:
      'Gönderileriniz Kavvay ofisinden çııktıktan sonra müşteriye teslim edilmesine kadar tüm operasyon bizim tarafımızdan yönetiliyor. Her bir ülkenin gümrük prosedürü ve gümrük limitleri olabilmektedir. Örnek: Avrupa Birliği için sınır 22 Euro, ABD için 800 USD’dır, Azerbaycan için aylık 300 USD, Özbekistan için her çeyrek için 1000 USD-dir. Gönderinizin değeri bu tutarları aştığı takdirde alıcınızın gümrük vergisi ödemesi gerekiyor. Alıcı gümrük vergisin ödemediği zaman, bu verginin sizin tarafınızdan ödenilmesi gerektiğini iletmiş olalım.',
  },
  {
    question: 'Ağır ve hacimli gönderilerde sınırlamalar var mı?',
    answer: `Gönderinin ağırlığı, hacimsel ağırlığı ve ebatları olmak üzere sınırlamalar uygulanmaktadır.
    Paketler en fazla 30 kg olabilir`,
  },
  {
    question: 'Yurt dışına gönderilerinde hangi bilgiler gereklidir?',
    answer:
      'Türkiye’den yurt dışına yapacağınız gönderilerde, paketler gümrük işlemlerine tabi tutulacağı için gönderiye ait bazı bilgilerin esksiksiz doldurulması gerekli.',
  },
  {
    question: 'Gönderilmesi yasak olan ürünler hangileridir?',
    answer: `- Canlı hayvan
    - Antikalar (hassas ve/veya kırılabilir)
    - Asbest/Amyant
    - Değerli madenler, külçe olarak
    - Nakit para
    - Ateşli silahlar ve bunların parçaları ve mühimmat
    - Tehlikeli veya yanıcı maddeler (IATA yönetmeliği tarafından belirlenmiş)
    - İnsan beden parçaları veya külleri
    - Mücevherler, değerli metaller ve değerli taşlar
    - Narkotik maddeler (yasa dışı)`,
  },
]



const data2 = [
  {
    question: 'What is Kavvay?',
    answer:
      'Kavvay is a courrier software service that can be used by e-commerce sites selling abroad from Turkey. You can manage your orders and shipments through your special Kavvay account and ensure that your shipments reach your customers via Kavvay courrier software technology.',
  },
  {
    question: 'Is there a fee to use Kavvay?',
    answer:
      'We charge a small fee for our customers who send their orders with their own courrier agreements and who only want to use the Kavvay software and integration service. For fee calculation you need to visit our Price calculation menu.',
  },
  {
    question: 'How does Kavvay price calculation work? ',
    answer: `You can switch to the price calculation menu from your Kavvay account. After entering the width, height, height and weight information of your shipment on the page you are passing through, you can see the shipping fee by selecting the country. When calculating the weight of order shipments, physical weight and volumetric weight are calculated. The higher of the two weights is the weight to be charged.
    volumetric weight (deci weight); It is obtained by multiplying the width, height and height values of the shipment with each other and dividing by 5000. (Length * Width * Height) / 5000 = Volumetric weight.`,
  },
  {
    question: 'Can I just ship without integrating my stores?',
    answer:
      'You can ship without integrating your stores. You need to create a separate shipment for all your orders.',
  },
  {
    question: 'What information is shared with Kavvay?',
    answer:
      'Kavvay; With the permission and knowledge of all marketplaces, the customer can access their name, address, phone number, if any, product content and price. This information is required for easy shipment creation.',
  },
  {
    question: `How can I top up my Kavvay balance?`,
    answer: `In order to increase the balance of your Kavvay account, you can perform the necessary actions from the Profile interface.`,
  },
  {
    question: 'How can I send my cargo to Kavvay?',
    answer:
      'After you create your labels for your shipments from your Kavvay account, you can add your Kavvay labels to your orders and make them ready for shipping. Then you can send it to the address on the label from the nearest courier company branches.',
  },
  {
    question: 'How can I track my shipping?',
    answer:
      'The tracking status of your shipments will be updated from your account via the order number printed with the label you have prepared for your shipments.',
  },
  {
    question:
      'Can the shipment not be allowed to exit during customs clearance?',
    answer:
      'The Last mile delivery process managing by our side, from the time your shipments leave the Kavvay warehouse until they are delivered to the customer. Each country may have customs procedures and customs limits. Example: The limit for the European Union is 22 Euros, for the USA it is 800 USD, for Azerbaijan it is 300 USD per month, for Uzbekistan it is 1000 USD per quarter. If the value of your shipment exceeds these amounts, your buyer is required to pay customs duty. Let us convey that when the buyer does not pay the customs duty, this tax should be paid by you.',
  },
  {
    question: 'Are there restrictions on heavy and bulky shipments?',
    answer: `Limitations apply to the weight, volumetric weight and dimensions of the shipment.
    Packages can be up to 30 kg.`,
  },
  {
    question: 'What information is required for shipments abroad?',
    answer:
      'For shipments from Turkey to abroad, since the packages will be subject to customs procedures, some information about the shipment must be filled in completely.',
  },
  {
    question: 'Which products are prohibited to be sent?',
    answer: `- Live animal
    - Antiques (delicate and/or breakable)
    - Asbestos/Asbestos
    - Precious metals as bullion
    - Cash Money
    - Firearms and their parts and ammunition
    - Hazardous or flammable substances (determined by IATA regulation)
    - Human body parts or ashes
    - Jewels, precious metals and gems
    - Narcotic substances (illegal)`,
  },
]


const Questions = () => {
  const { i18n } = useTranslation();
  const [expandedIndex, setExpandedIndex] = useState(-1)

  const toggleAnswer = (index) => {
    if (index === expandedIndex) {
      setExpandedIndex(-1)
    } else {
      setExpandedIndex(index)
    }
  }


  const [data,setdata]=useState(data1)

 useEffect(()=>{

  if ( i18n.language === 'en'){
    setdata(data2)
  }
  else{
    setdata(data1)
  }
  
 },[i18n.language])

  return (
    <div className="questionmain" id="faq-form-section">
      <h4><Trans i18nKey="description.homepart8">FREQUENTLY ASKED QUESTIONS</Trans></h4>
      <div className="question_border">
        {data.map((item, index) => (
          <div key={index} className="question-container">
            <div className="question">
              <h4>{item.question}</h4>
              <div>
                <span
                  className="arrow-icon"
                  onClick={() => toggleAnswer(index)}
                >
                  {index === expandedIndex ? (
                    <FaArrowUp className="icons" />
                  ) : (
                    <FaArrowDown className="icons" />
                  )}
                </span>
              </div>
            </div>
            {index === expandedIndex && (
              <div className="answer">{item.answer}</div>
            )}
            <div className="line"></div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Questions

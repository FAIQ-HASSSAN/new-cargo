import React from 'react'
import './css/privacypolicy.css'
import Footer from '../Footer'
import { useTranslation,Trans } from 'react-i18next';
function Privacypolicy() {
  const { t, i18n } = useTranslation();
  return (
    <div className='privacypolicy'>
    <h2><Trans>KAVVAY TİCARİ İLETİŞİM VE TİCARİ ELEKTRONİK İLETİ ONAY METNİ</Trans></h2>
      <div className='p_para'>
       <p>
       Hyrkan Group İç ve Dış Ticaret Danışmanlık Limited Şirketi (“<b>Şirket</b>”), www.kavvay.com adresli internet sitesi (“<b>Site</b>”) üzerinden, Kullanıcı Sözleşmesi'nde tanımlanan hizmetler (“<b>Hizmetler</b>”) kapsamında, ziyaretçiler ve kullanıcılardan (“<b>Kullanıcı/lar</b>”, “<b>Siz</b>”) kişisel veri ve iletişim bilgileri toplamaktadır. Bu metne onay vermeniz halinde 6563 Sayılı Elektronik Ticaretin Düzenlenmesi Hakkında Kanun ve 15 Temmuz 2015 tarihli 29417 sayılı Resmi Gazete’de yayınlanan Ticari İletişim ve Ticari Elektronik İletiler Hakkında Yönetmelik kapsamında Şirket tarafından veyahut Şirket’in iş ortakları tarafından, Site’de veyahut Site dışında sunulan ürünler ve hizmetlere ilişkin, telefon, çağrı merkezleri, otomatik arama makineleri, akıllı ses kaydedici sistemler, elektronik posta, kısa mesaj hizmeti gibi vasıtalar kullanılarak elektronik ortamda gerçekleştirilen ve ticari amaçlarla gönderilen veri, ses ve görüntü içerikli her türlü ticari elektronik ileti ile yapılacak tüm tanıtım, kampanya ve bilgilendirme mesajı gönderimini kabul etmektesiniz.
       <br/>
       Bu metne onay vermeniz dahilinde bu onayınız, reddetme hakkınızı kullanıncaya kadar geçerli olacaktır. Metne onay vermemeniz Şirket tarafından sağlanan Hizmetler’i etkilemeyecektir. Kullanıcılar iletişime geçilen her türlü elektronik iletişim kanalı içerisinde, Kullanıcılar’a onayı geri çekme yöntemi tanınacaktır. Bu yöntemi kullanarak tarafınızla ticari amaçla iletişime geçilmesini ücretsiz bir şekilde durdurabilirsiniz.

       </p>
      </div>
<div className='p_footer'></div>
<div className='p_foot'>
<Footer faqID={'/'} supportID={'/contact'}/>
</div>

    </div>
  )
}

export default Privacypolicy
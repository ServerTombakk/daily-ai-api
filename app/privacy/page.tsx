export default function Privacy() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-black py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white dark:bg-zinc-900 rounded-lg shadow-lg p-8">
        <h1 className="text-4xl font-bold text-black dark:text-white mb-2">
          Gizlilik Politikası
        </h1>
        <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-8">
          Son güncelleme: 22 Kasım 2025
        </p>

        <div className="prose prose-invert max-w-none space-y-6 text-zinc-700 dark:text-zinc-300">
          <p>
            <span className="font-semibold">Günlük Yapay Zeka Koçu </span>
            kullanıcılarımızın gizliliğine önem verir. Bu gizlilik politikası, kullanıcılarımızdan 
            topladığımız bilgileri, bu bilgileri nasıl kullandığımızı ve koruduğumuzu açıklar.
          </p>

          <section>
            <h2 className="text-2xl font-semibold text-black dark:text-white mt-8 mb-4">
              1. Topladığımız Bilgiler
            </h2>
            <p>Uygulamamız aşağıdaki bilgileri toplayabilir:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>
                <span className="font-semibold">Kişisel bilgiler:</span> Ad, e-posta adresi, telefon numarası (varsa).
              </li>
              <li>
                <span className="font-semibold">Cihaz bilgileri:</span> Cihaz modeli, işletim sistemi, IP adresi.
              </li>
              <li>
                <span className="font-semibold">Kullanım verileri:</span> Uygulama içi etkinlikler, tercih edilen ayarlar.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-black dark:text-white mt-8 mb-4">
              2. Bilgilerin Kullanımı
            </h2>
            <p>Topladığımız bilgiler aşağıdaki amaçlarla kullanılabilir:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Uygulamanın düzgün çalışmasını sağlamak.</li>
              <li>Kullanıcı deneyimini geliştirmek.</li>
              <li>Teknik destek ve bildirimler göndermek.</li>
              <li>Analitik ve istatistik çalışmaları yapmak.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-black dark:text-white mt-8 mb-4">
              3. Bilgilerin Paylaşımı
            </h2>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Kullanıcı bilgileriniz üçüncü taraflarla paylaşılmaz, satılmaz veya kiralanmaz.</li>
              <li>
                Yalnızca yasal yükümlülükler veya güvenlik gerekçeleri nedeniyle yetkili mercilerle paylaşılabilir.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-black dark:text-white mt-8 mb-4">
              4. Çocukların Gizliliği
            </h2>
            <p>
              Uygulamamız 13 yaşından küçük çocuklara yönelik değildir. 13 yaşından küçük bir çocuğun 
              kişisel bilgilerini bilerek toplamıyoruz.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-black dark:text-white mt-8 mb-4">
              5. Güvenlik
            </h2>
            <p>
              Kullanıcı bilgilerinin güvenliği için uygun teknik ve idari önlemler alınmaktadır. 
              Ancak internet üzerinden veri iletiminin tamamen güvenli olduğunu garanti edemeyiz.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-black dark:text-white mt-8 mb-4">
              6. Kullanıcı Hakları
            </h2>
            <p>
              Kullanıcılar, topladığımız kişisel verilerine erişebilir, bunları güncelleyebilir veya silebilir. 
              Taleplerinizi{" "}
              <span className="font-semibold">server78135@gmail.com</span> adresine iletebilirsiniz.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-black dark:text-white mt-8 mb-4">
              7. Değişiklikler
            </h2>
            <p>
              Gizlilik politikamız zaman zaman güncellenebilir. Güncellemeler bu sayfada yayınlanır 
              ve "Son güncelleme" tarihi değiştirilir.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-black dark:text-white mt-8 mb-4">
              8. İletişim
            </h2>
            <p>
              Gizlilik politikamızla ilgili sorularınız için bize{" "}
              <span className="font-semibold">server78135@gmail.com</span> üzerinden ulaşabilirsiniz.
            </p>
          </section>
        </div>

        {/* <div className="mt-12 pt-8 border-t border-zinc-200 dark:border-zinc-700">
          <a
            href="/"
            className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-black dark:bg-white text-white dark:text-black font-medium hover:opacity-90 transition-opacity"
          >
            Ana Sayfaya Dön
          </a>
        </div> */}
      </div>
    </div>
  );
}

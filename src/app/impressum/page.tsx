export default function Impressum() {
  return (
    <main className="min-h-screen bg-forest-dark text-warm-white px-4 py-20 sm:px-6">
      <div className="max-w-3xl mx-auto">
        <a href="/" className="text-copper hover:text-copper/80 text-sm mb-8 inline-block">← Zurück zur Startseite</a>
        <h1 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl font-bold mb-8">Impressum</h1>

        <div className="space-y-6 text-warm-white/80 leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold text-warm-white mb-2">Angaben gemäß § 5 TMG</h2>
            <p>
              Alexander Schäfer &amp; Viktor Schönhals GbR<br />
              Schlesierstraße 30<br />
              96215 Lichtenfels
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-warm-white mb-2">Kontakt</h2>
            <p>
              Telefon: <a href="tel:+4915222759872" className="text-copper hover:underline">+49 15222 759872</a><br />
              Telefon: <a href="tel:+491786559417" className="text-copper hover:underline">+49 178 6559417</a><br />
              E-Mail: <a href="mailto:schaefer-schoenhals-wohnmobile@web.de" className="text-copper hover:underline">schaefer-schoenhals-wohnmobile@web.de</a>
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-warm-white mb-2">Steuernummer</h2>
            <p>230/266/20171</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-warm-white mb-2">Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h2>
            <p>
              Alexander Schäfer<br />
              Schlesierstraße 30<br />
              96215 Lichtenfels
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-warm-white mb-2">Haftungsausschluss</h2>
            <h3 className="font-semibold text-warm-white mt-4 mb-1">Haftung für Inhalte</h3>
            <p>
              Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen. Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
            </p>

            <h3 className="font-semibold text-warm-white mt-4 mb-1">Haftung für Links</h3>
            <p>
              Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-warm-white mb-2">Urheberrecht</h2>
            <p>
              Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}

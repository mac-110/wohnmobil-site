export default function Datenschutz() {
  return (
    <main className="min-h-screen bg-forest-dark text-warm-white px-4 py-20 sm:px-6">
      <div className="max-w-3xl mx-auto">
        <a href="/" className="text-copper hover:text-copper/80 text-sm mb-8 inline-block">← Zurück zur Startseite</a>
        <h1 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl font-bold mb-8">Datenschutzerklärung</h1>

        <div className="space-y-6 text-warm-white/80 leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold text-warm-white mb-2">1. Verantwortlicher</h2>
            <p>
              Alexander Schäfer &amp; Viktor Schönhals GbR<br />
              Schlesierstraße 30<br />
              96215 Lichtenfels<br />
              E-Mail: <a href="mailto:schaefer-schoenhals-wohnmobile@web.de" className="text-copper hover:underline">schaefer-schoenhals-wohnmobile@web.de</a>
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-warm-white mb-2">2. Allgemeines zur Datenverarbeitung</h2>
            <p>
              Wir nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend der gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.
            </p>
            <p className="mt-2">
              Die Nutzung unserer Webseite ist in der Regel ohne Angabe personenbezogener Daten möglich. Soweit auf unseren Seiten personenbezogene Daten erhoben werden, erfolgt dies stets auf freiwilliger Basis.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-warm-white mb-2">3. Hosting</h2>
            <p>
              Diese Webseite wird bei <strong>Vercel Inc.</strong> (340 S Lemon Ave #4133, Walnut, CA 91789, USA) gehostet. Beim Besuch unserer Webseite werden automatisch Informationen in sogenannten Server-Log-Dateien gespeichert, die Ihr Browser automatisch übermittelt:
            </p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>Browsertyp und Browserversion</li>
              <li>Verwendetes Betriebssystem</li>
              <li>Referrer URL</li>
              <li>IP-Adresse (anonymisiert)</li>
              <li>Uhrzeit der Serveranfrage</li>
            </ul>
            <p className="mt-2">
              Diese Daten werden nicht mit anderen Datenquellen zusammengeführt. Die Datenverarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an einem technisch fehlerfreien Betrieb der Webseite).
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-warm-white mb-2">4. Cookies</h2>
            <p>
              Diese Webseite verwendet <strong>keine Cookies</strong> und setzt keine Tracking-Technologien ein. Es werden keine Analyse-Tools wie Google Analytics oder vergleichbare Dienste verwendet.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-warm-white mb-2">5. Kontaktaufnahme</h2>
            <p>
              Wenn Sie uns per Telefon oder E-Mail kontaktieren, werden Ihre Angaben (Name, Telefonnummer, E-Mail-Adresse, Inhalt der Anfrage) zum Zweck der Bearbeitung Ihrer Anfrage bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter. Die Verarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO (Vertragsanbahnung bzw. Vertragserfüllung).
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-warm-white mb-2">6. SSL-/TLS-Verschlüsselung</h2>
            <p>
              Diese Seite nutzt aus Sicherheitsgründen eine SSL- bzw. TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie daran, dass die Adresszeile des Browsers von „http://" auf „https://" wechselt und an dem Schloss-Symbol in Ihrer Browserzeile.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-warm-white mb-2">7. Ihre Rechte</h2>
            <p>Sie haben jederzeit das Recht auf:</p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li><strong>Auskunft</strong> über Ihre bei uns gespeicherten personenbezogenen Daten (Art. 15 DSGVO)</li>
              <li><strong>Berichtigung</strong> unrichtiger Daten (Art. 16 DSGVO)</li>
              <li><strong>Löschung</strong> Ihrer bei uns gespeicherten Daten (Art. 17 DSGVO)</li>
              <li><strong>Einschränkung</strong> der Datenverarbeitung (Art. 18 DSGVO)</li>
              <li><strong>Datenübertragbarkeit</strong> (Art. 20 DSGVO)</li>
              <li><strong>Widerspruch</strong> gegen die Verarbeitung (Art. 21 DSGVO)</li>
            </ul>
            <p className="mt-2">
              Zur Ausübung Ihrer Rechte wenden Sie sich bitte an die oben genannte Kontaktadresse.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-warm-white mb-2">8. Beschwerderecht</h2>
            <p>
              Sie haben das Recht, sich bei der zuständigen Aufsichtsbehörde zu beschweren, wenn Sie der Ansicht sind, dass die Verarbeitung Ihrer personenbezogenen Daten gegen die DSGVO verstößt. Die zuständige Aufsichtsbehörde ist das Bayerische Landesamt für Datenschutzaufsicht (BayLDA).
            </p>
          </section>

          <section>
            <p className="text-sm text-warm-white/50 mt-8">Stand: Februar 2026</p>
          </section>
        </div>
      </div>
    </main>
  );
}

import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, Info, Mail, Lock } from "lucide-react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    salutation: "frau",
    firstName: "Vanessa",
    lastName: "Schmidt",
    email: "v.schmidt99@email.com",
    countryCode: "+49",
    phoneNumber: "",
    message: "Sehr geehrte Damen und Herren,\n\nich interessiere mich für Ihr Angebot.\nBitte kontaktieren Sie mich.\n\nMit freundlichen Grüßen",
    options: {
      financing: false,
      leasing: false,
      tradeIn: false,
      appointment: false,
      delivery: false,
    }
  });

  const handleInputChange = (field: string, value: string | boolean) => {
    if (field.startsWith("options.")) {
      const optionKey = field.split(".")[1];
      setFormData(prev => ({
        ...prev,
        options: { ...prev.options, [optionKey]: value }
      }));
    } else {
      setFormData(prev => ({ ...prev, [field]: value }));
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white border-b border-mobile-border">
        <div className="flex items-center justify-between px-4 py-4">
          <div className="flex items-center gap-2">
            {/* Mobile.de Logo */}
            <svg width="170" height="25" viewBox="0 0 300 26" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M169.661 13.8293C169.661 14.3378 169.632 14.7611 169.549 15.2694H155.403C156.022 17.4711 157.945 18.9697 160.372 18.9697C162.01 18.9697 163.45 18.2083 164.438 16.936L168.138 19.5901C166.16 22.1032 163.308 23.3172 160.232 23.3172C154.753 23.3172 150.629 19.1668 150.629 13.8293C150.629 8.49181 154.668 4.3682 160.146 4.3682C165.625 4.3682 169.664 8.37736 169.664 13.8293H169.661ZM155.54 11.8247H164.972C164.295 9.79084 162.46 8.55014 160.229 8.55014C157.999 8.55014 156.22 9.82 155.54 11.8247ZM143.511 6.20486V1.29069H148.311V22.9499H143.764V21.1982C142.521 22.4974 140.742 23.3172 138.456 23.3172C133.258 23.3172 129.25 19.3079 129.25 13.8293C129.25 8.3507 133.258 4.3682 138.456 4.3682C140.515 4.3682 142.297 5.04695 143.511 6.2025V6.20486ZM138.964 18.7994C141.789 18.7994 143.904 16.6806 143.904 13.7442C143.904 10.8078 141.786 8.74472 138.964 8.74472C136.142 8.74472 134.079 10.8346 134.079 13.7442C134.079 16.6537 136.225 18.7994 138.964 18.7994ZM124.874 23.3172C123.179 23.3172 121.822 21.9621 121.822 20.2664C121.822 18.5708 123.178 17.2449 124.874 17.2449C126.568 17.2449 127.895 18.6 127.895 20.2664C127.895 21.9329 126.567 23.3172 124.874 23.3172ZM121.006 13.8293C121.006 14.3378 120.949 14.7611 120.864 15.2694H106.717C107.338 17.4711 109.26 18.9697 111.688 18.9697C113.325 18.9697 114.765 18.2083 115.753 16.936L119.453 19.5901C117.475 22.1032 114.624 23.3172 111.546 23.3172C106.068 23.3172 101.945 19.1668 101.945 13.8293C101.945 8.49181 105.982 4.3682 111.461 4.3682C116.94 4.3682 121.006 8.37736 121.006 13.8293ZM106.856 11.8247H116.288C115.608 9.79084 113.775 8.55014 111.545 8.55014C109.313 8.55014 107.535 9.82 106.856 11.8247ZM94.8251 1.29069V22.9499H99.6251V1.29069H94.8251ZM89.1793 5.89347C87.6265 5.89347 86.4404 4.67958 86.4404 3.21014C86.4404 1.74069 87.6265 0.5 89.1793 0.5C90.7321 0.5 91.9182 1.71403 91.9182 3.21014C91.9182 4.70625 90.7043 5.89347 89.1793 5.89347ZM91.5807 22.9499H86.7515V7.36292H91.5807V22.9499ZM75.2001 4.3682C80.3974 4.3682 84.3765 8.40653 84.3765 13.8293C84.3765 19.2519 80.3946 23.3172 75.2001 23.3172C72.914 23.3172 71.1057 22.4974 69.8626 21.1982V22.9207H65.3446V1.29069H70.1182V6.20486C71.3876 5.04694 73.1113 4.37056 75.2001 4.37056V4.3682ZM74.6654 18.7994C77.4598 18.7994 79.5501 16.6806 79.5501 13.7442C79.5501 10.8078 77.4598 8.74472 74.6654 8.74472C71.8696 8.74472 69.7515 10.8346 69.7515 13.7442C69.7515 16.6537 71.8973 18.7994 74.6654 18.7994ZM53.4848 23.3172C48.0362 23.3172 43.8834 19.3079 43.8834 13.8293C43.8834 8.3507 48.0335 4.3682 53.4848 4.3682C58.9376 4.3682 63.0293 8.40653 63.0293 13.8293C63.0293 19.2519 58.9348 23.3172 53.4848 23.3172ZM53.4848 18.8554C56.2251 18.8554 58.314 16.7657 58.314 13.8293C58.314 10.8929 56.196 8.77389 53.4848 8.77389C50.7751 8.77389 48.6265 10.8638 48.6265 13.8293C48.6265 16.7949 50.6876 18.8554 53.4848 18.8554Z" fill="#350051"/>
              <path d="M41.6529 8.23623C41.6529 6.14637 40.382 4.42401 38.0931 4.42401C36.3709 4.42401 35.0417 5.38498 34.3376 7.16332L30.4126 16.8483V8.23623C30.4126 6.14637 29.1986 4.42401 26.9389 4.42401C25.075 4.42401 23.9167 5.49679 23.2389 7.16332L19.2292 17.0186V4.7354H15.0209V22.9497H20.7528L26.3153 9.81748V19.7019C26.3153 21.7625 27.4445 23.2611 29.5084 23.2611C31.2862 23.2611 32.2473 22.2442 32.8973 20.6921L37.4432 9.73471V22.9497H41.6529V8.23623Z" fill="#350051"/>
              <path d="M3.98339 4.73346L11.7778 4.73596V22.9503H3.98339C1.78061 22.9503 0 21.1718 0 18.9678V8.71596C0 6.51429 1.77923 4.73346 3.98339 4.73346Z" fill="#FA3C00"/>
            </svg>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="px-4 py-4 max-w-md mx-auto lg:max-w-2xl space-y-4">
        {/* Car Tile */}
        <div className="border border-mobile-border rounded-xl bg-white overflow-hidden">
          <div className="flex items-center">
            <div className="w-30 h-24 bg-gray-200 flex-shrink-0">
              <img 
                src="https://cdn.builder.io/api/v1/image/assets%2F56e00476de5548699f969c856b566849%2F7c7a407d62904aa99d9d29fd2561694f"
                alt="Ford Bronco"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1 p-3">
              <div className="space-y-1">
                <h3 className="text-base font-bold text-mobile-text-primary font-mobile-base line-clamp-1">
                  Ford Bronco
                </h3>
                <p className="text-sm text-mobile-text-secondary font-mobile-base line-clamp-2">
                  Outer Banks 4x4 PDC*...
                </p>
              </div>
            </div>
            <ChevronDown className="w-5 h-5 text-mobile-text-muted mr-3" />
          </div>
          
          <div className="border-t border-mobile-border p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <span className="text-base font-bold text-mobile-text-primary font-mobile-base">
                  69.810 €
                </span>
                <div className="flex items-center gap-1.5">
                  <div className="flex items-center gap-1">
                    <div className="w-4 h-2 bg-mobile-success rounded-sm"></div>
                    <div className="w-4 h-2 bg-mobile-success rounded-sm"></div>
                    <div className="w-4 h-2 bg-mobile-success rounded-sm"></div>
                    <div className="w-4 h-2 bg-mobile-success rounded-sm"></div>
                    <div className="w-4 h-2 bg-mobile-border rounded-sm"></div>
                  </div>
                  <span className="text-xs text-mobile-text-secondary font-mobile-base">
                    Guter Preis
                  </span>
                  <Info className="w-4 h-4 text-mobile-text-secondary" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="space-y-4">
          <div className="space-y-1">
            <h1 className="text-2xl font-mobile-hero font-medium text-mobile-text-primary">
              Deine Nachricht
            </h1>
            <p className="text-sm text-mobile-text-secondary font-mobile-base">
              Teile <span className="font-gibson">Volkswagen Automobile Dresden</span> mit, was Dich an diesem Fahrzeug interessiert.
            </p>
          </div>

          {/* Salutation */}
          <div className="space-y-3">
            <label className="text-sm font-medium text-mobile-text-primary font-gibson">
              Anrede
            </label>
            <div className="flex gap-18">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 flex items-center justify-center">
                  <div className={`w-5 h-5 rounded-full border ${formData.salutation === "herr" ? "border-mobile-text-muted bg-white" : "border-mobile-text-muted bg-white"}`}>
                    {formData.salutation === "herr" && <div className="w-2 h-2 bg-white rounded-full mx-auto"></div>}
                  </div>
                </div>
                <button 
                  onClick={() => handleInputChange("salutation", "herr")}
                  className="text-sm text-mobile-text-primary font-mobile-base"
                >
                  Herr
                </button>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 flex items-center justify-center">
                  <div className={`w-5 h-5 rounded-full border-2 ${formData.salutation === "frau" ? "border-mobile-purple bg-mobile-purple" : "border-mobile-text-muted bg-white"}`}>
                    {formData.salutation === "frau" && <div className="w-2 h-2 bg-white rounded-full mx-auto"></div>}
                  </div>
                </div>
                <button 
                  onClick={() => handleInputChange("salutation", "frau")}
                  className="text-sm text-mobile-text-primary font-mobile-base"
                >
                  Frau
                </button>
              </div>
            </div>
          </div>

          {/* Name Fields */}
          <div className="flex gap-18">
            <div className="flex-1 space-y-1">
              <label className="text-sm font-medium text-mobile-text-primary font-mobile-base">
                Vorname
              </label>
              <div className="border border-mobile-text-muted rounded-lg px-3.5 py-3 bg-white focus-within:border-mobile-secondary-purple">
                <input
                  type="text"
                  value={formData.firstName}
                  onChange={(e) => handleInputChange("firstName", e.target.value)}
                  className="w-full text-sm font-mobile-base text-mobile-text-primary bg-transparent outline-none focus:outline-none"
                  placeholder="Vorname eingeben"
                />
              </div>
            </div>
            <div className="flex-1 space-y-1">
              <label className="text-sm font-medium text-mobile-text-primary font-mobile-base">
                Nachname
              </label>
              <div className="border border-mobile-text-muted rounded-lg px-3.5 py-3 bg-white focus-within:border-mobile-secondary-purple">
                <input
                  type="text"
                  value={formData.lastName}
                  onChange={(e) => handleInputChange("lastName", e.target.value)}
                  className="w-full text-sm font-mobile-base text-mobile-text-primary bg-transparent outline-none focus:outline-none"
                  placeholder="Nachname eingeben"
                />
              </div>
            </div>
          </div>

          {/* Email Field */}
          <div className="space-y-1">
            <div className="flex items-center gap-1">
              <label className="text-sm font-medium text-mobile-text-primary font-mobile-base">
                E-Mail-Adresse
              </label>
              <Info className="w-4 h-4 text-mobile-text-secondary" />
            </div>
            <div className="border border-mobile-text-muted rounded-lg px-3.5 py-3 bg-mobile-text-light opacity-50">
              <input
                type="email"
                value={formData.email}
                disabled
                className="w-full text-sm font-mobile-base text-mobile-text-primary bg-transparent outline-none"
              />
            </div>
          </div>

          {/* Phone Fields */}
          <div className="flex gap-18">
            <div className="w-28 space-y-1">
              <label className="text-sm font-medium text-mobile-text-primary font-mobile-base">
                Ländervorwahl
              </label>
              <div className="flex items-center border border-mobile-text-muted rounded-lg bg-mobile-text-light">
                <div className="flex-1 px-3.5 py-3 text-sm text-mobile-text-primary font-mobile-base">
                  +49
                </div>
                <div className="w-10 h-11 flex items-center justify-center border-l border-mobile-text-muted">
                  <ChevronDown className="w-3 h-2 text-mobile-text-primary" />
                </div>
              </div>
            </div>
            <div className="flex-1 space-y-1">
              <label className="text-sm font-medium text-mobile-text-primary font-mobile-base">
                Telefonnummer (optional)
              </label>
              <div className="border border-mobile-text-muted rounded-lg px-3.5 py-3">
                <input
                  type="text"
                  placeholder="z.B. 17612345678"
                  value={formData.phoneNumber}
                  onChange={(e) => handleInputChange("phoneNumber", e.target.value)}
                  className="w-full text-sm font-mobile-base text-mobile-text-muted bg-transparent outline-none placeholder-mobile-text-muted"
                />
              </div>
            </div>
          </div>

          {/* Message Field */}
          <div className="space-y-1">
            <label className="text-sm font-medium text-mobile-text-primary font-mobile-base">
              Deine Nachricht
            </label>
            <div className="border border-mobile-text-muted rounded-lg p-3.5">
              <textarea
                value={formData.message}
                onChange={(e) => handleInputChange("message", e.target.value)}
                rows={6}
                className="w-full text-sm font-mobile-base text-mobile-text-primary bg-transparent outline-none resize-none"
              />
            </div>
          </div>

          {/* Options Section */}
          <div className="space-y-2">
            <div className="flex items-center gap-1.5">
              <div className="bg-mobile-text-primary text-white text-xs px-1 py-0.5 rounded font-medium italic uppercase tracking-wide">
                NEU
              </div>
              <span className="text-sm font-medium text-mobile-text-primary font-mobile-base">
                Unverbindlich anfragen:
              </span>
            </div>

            {/* Financing Option */}
            <div className="border border-mobile-border rounded-lg p-4">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 flex items-center justify-center">
                  <div className="w-5 h-5 rounded border border-mobile-text-muted bg-white"></div>
                </div>
                <div className="flex-1">
                  <div className="text-sm font-medium text-mobile-text-primary font-mobile-base">
                    Finanzierung
                  </div>
                  <div className="text-sm text-mobile-text-secondary font-mobile-base">
                    Anzahlung · Wunschlaufzeit · Wunschrate <span className="underline">Eingeben</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Leasing Option */}
            <div className="border border-mobile-border rounded-lg p-4">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 flex items-center justify-center">
                  <div className="w-5 h-5 rounded border border-mobile-text-muted bg-white"></div>
                </div>
                <div className="flex-1">
                  <div className="text-sm font-medium text-mobile-text-primary font-mobile-base">
                    Leasing ab 264 € mtl.
                  </div>
                  <div className="text-sm text-mobile-text-secondary font-mobile-base">
                    0 € Anzahlung · 48 Monate · 10.000 km pro Jahr · 6,30 % eff. Jahreszins
                  </div>
                </div>
              </div>
            </div>

            {/* Trade-in Option */}
            <div className="border border-mobile-border rounded-lg p-4">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 flex items-center justify-center">
                  <div className="w-5 h-5 rounded border border-mobile-text-muted bg-white"></div>
                </div>
                <div className="flex-1">
                  <div className="text-sm font-medium text-mobile-text-primary font-mobile-base">
                    NEU: Inzahlungnahme mit Preisschätzung
                  </div>
                  <div className="text-sm text-mobile-text-secondary font-mobile-base">
                    Marke · Modell · Erstzulassung · Kilometerstand <span className="underline">Eingeben</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Appointment Option */}
            <div className="border border-mobile-border rounded-lg p-4">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 flex items-center justify-center">
                  <div className="w-5 h-5 rounded border border-mobile-text-muted bg-white"></div>
                </div>
                <div className="flex-1">
                  <div className="text-sm font-medium text-mobile-text-primary font-mobile-base">
                    Vor-Ort-Termin
                  </div>
                  <div className="text-sm text-mobile-text-secondary font-mobile-base">
                    Datum · Uhrzeit <span className="underline">Eingeben</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Delivery Option */}
            <div className="border border-mobile-border rounded-lg p-4">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 flex items-center justify-center">
                  <div className="w-5 h-5 rounded border border-mobile-text-muted bg-white"></div>
                </div>
                <div className="flex-1">
                  <div className="text-sm font-medium text-mobile-text-primary font-mobile-base">
                    Lieferung
                  </div>
                  <div className="text-sm text-mobile-text-secondary font-mobile-base">
                    PLZ · Ort <span className="underline">Eingeben</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Person */}
          <div className="flex items-center gap-2 border-t border-mobile-border pt-3">
            <img 
              src="https://api.builder.io/api/v1/image/assets/TEMP/6229798984879349ccc32d20a4161e1013b7dcf9?width=96"
              alt="Benjamin Müller"
              className="w-12 h-12 rounded-full"
            />
            <div className="text-sm text-mobile-text-primary font-mobile-base">
              An: Benjamin Müller<br />
              Verkaufsberater Gebrauchtwagen
            </div>
          </div>

          {/* Send Button */}
          <div className="space-y-1.5 pt-2">
            <button className="w-full flex items-center justify-center gap-2 bg-mobile-red text-white py-3 px-4 rounded-lg font-bold text-sm font-mobile-base hover:bg-red-700 transition-colors">
              <Mail className="w-4 h-4" />
              E-Mail senden
            </button>
            <div className="flex items-center justify-center gap-1 text-xs text-mobile-text-primary font-mobile-base">
              <Lock className="w-4 h-4 text-mobile-success" />
              Wir schützen Deine Daten nach DSGVO-Standards.
            </div>
          </div>

          {/* Legal Text */}
          <div className="text-xs text-mobile-text-secondary font-mobile-base leading-relaxed">
            Deine Daten werden dem Anbieter übermittelt und bei zukünftigen Anfragen automatisch vorausgefüllt. <span className="underline">Mehr</span>
            <br /><br />
            Deine Nachricht wird von mobile.de zum Schutz vor verbotenen Aktivitäten vor der Weiterleitung an den Empfänger geprüft und ggf. blockiert. Im Anschluss erhältst Du eine Email zu der gewünschten Finanzierungsmöglichkeit des Fahrzeugs. Du erhältst ggf. eine E-Mail-Einladung zur Teilnahme an einer Händlerbewertung. Du kannst dem Erhalt jederzeit widersprechen. Mit Absenden dieser Nachricht erklärst Du Dich mit diesem Vorgehen und dem Erhalt der E-Mail-Einladung einverstanden. Für weitere Informationen lies bitte unsere <span className="underline">Datenschutzerklärung</span>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-mobile-bg-dark px-4 py-8 space-y-4">
        <div className="space-y-2 pb-4">
          {["Impressum", "AGB", "Datenschutz", "Datenschutzeinstellungen", "Kontakt", "Careers (Englisch)"].map((link) => (
            <div key={link} className="text-sm text-mobile-text-light font-gibson">
              {link}
            </div>
          ))}
        </div>
        
        <hr className="border-mobile-border" />
        
        <div className="space-y-4">
          <div className="flex items-center border border-mobile-text-muted rounded-lg bg-mobile-bg-field">
            <div className="flex-1 px-3 py-2 text-sm text-mobile-text-light font-mobile-base">
              Deutsch
            </div>
            <div className="w-8 h-9 flex items-center justify-center border-l border-mobile-text-muted">
              <ChevronDown className="w-2.5 h-1.5 text-mobile-text-light" />
            </div>
          </div>
          
          <div className="flex items-center border border-mobile-text-muted rounded-lg bg-mobile-bg-field">
            <div className="flex-1 px-3 py-2 text-sm text-mobile-text-light font-mobile-base">
              System-Darstellung
            </div>
            <div className="w-8 h-9 flex items-center justify-center border-l border-mobile-text-muted">
              <ChevronDown className="w-2.5 h-1.5 text-mobile-text-light" />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, Info, AlertCircle } from "lucide-react";

export default function PersonalDataForm() {
  const [formData, setFormData] = useState({
    birthDate: "",
    street: "",
    houseNumber: "",
    postalCode: "",
    city: "",
  });

  const [errors, setErrors] = useState({
    birthDate: "",
    street: "",
    houseNumber: "",
    postalCode: "",
    city: "",
  });

  const [hasSubmitted, setHasSubmitted] = useState(false);

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));

    // Clear error when user starts typing
    if (hasSubmitted && errors[field]) {
      setErrors(prev => ({ ...prev, [field]: "" }));
    }
  };

  const validateBirthDate = (birthDate: string) => {
    if (!birthDate.trim()) {
      return "Geburtsdatum ist erforderlich";
    }

    const dateRegex = /^(\d{1,2})\.(\d{1,2})\.(\d{4})$/;
    if (!dateRegex.test(birthDate)) {
      return "Bitte geben Sie das Datum im Format TT.MM.JJJJ ein";
    }

    const [, day, month, year] = birthDate.match(dateRegex) || [];
    const date = new Date(parseInt(year), parseInt(month) - 1, parseInt(day));
    const now = new Date();

    if (date > now) {
      return "Geburtsdatum darf nicht in der Zukunft liegen";
    }

    const age = now.getFullYear() - date.getFullYear();
    if (age < 18 || age > 100) {
      return "Sie müssen zwischen 18 und 100 Jahre alt sein";
    }

    return "";
  };

  const validateStreet = (street: string) => {
    if (!street.trim()) {
      return "Straße ist erforderlich";
    }
    if (street.trim().length < 2) {
      return "Straße muss mindestens 2 Zeichen lang sein";
    }
    return "";
  };

  const validateHouseNumber = (houseNumber: string) => {
    if (!houseNumber.trim()) {
      return "Hausnummer ist erforderlich";
    }
    return "";
  };

  const validatePostalCode = (postalCode: string) => {
    if (!postalCode.trim()) {
      return "Postleitzahl ist erforderlich";
    }
    if (!/^\d{5}$/.test(postalCode)) {
      return "Postleitzahl muss aus 5 Ziffern bestehen";
    }
    return "";
  };

  const validateCity = (city: string) => {
    if (!city.trim()) {
      return "Ort ist erforderlich";
    }
    if (city.trim().length < 2) {
      return "Ort muss mindestens 2 Zeichen lang sein";
    }
    return "";
  };

  const validateForm = () => {
    const newErrors = {
      birthDate: validateBirthDate(formData.birthDate),
      street: validateStreet(formData.street),
      houseNumber: validateHouseNumber(formData.houseNumber),
      postalCode: validatePostalCode(formData.postalCode),
      city: validateCity(formData.city),
    };

    setErrors(newErrors);
    return Object.values(newErrors).every(error => error === "");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setHasSubmitted(true);

    if (validateForm()) {
      // Form is valid, proceed with submission
      console.log("Form submitted successfully:", formData);
      // Add your submission logic here
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
          <div className="text-right">
            <p className="text-xs text-mobile-text-secondary font-mobile-base">In Kooperation mit</p>
            <img src="https://api.builder.io/api/v1/image/assets/TEMP/c462b7b571359b1258522f9c229c027793c004d7?width=78" alt="BDK Logo" className="w-10 h-4 ml-auto" />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="px-4 py-6 min-h-[calc(100vh-200px)] flex flex-col justify-between max-w-md mx-auto lg:max-w-2xl">
        <div className="space-y-4">
          {/* Title Section */}
          <div className="space-y-2">
            <h1 className="text-xl font-mobile-hero font-medium text-mobile-text-primary">
              Benötigte persönliche Daten (2/2)
            </h1>
          </div>

          {/* Form Fields */}
          <div className="space-y-4">
            {/* Birth Date */}
            <div className="space-y-1">
              <label className="text-sm font-medium text-mobile-text-primary font-mobile-base">
                Geburtsdatum *
              </label>
              <div className={`border rounded-lg px-3.5 py-3 ${
                errors.birthDate ? "border-mobile-red" : "border-mobile-text-muted"
              }`}>
                <input
                  type="text"
                  placeholder="z.B. 15.12.1999"
                  value={formData.birthDate}
                  onChange={(e) => handleInputChange("birthDate", e.target.value)}
                  className={`w-full text-sm font-mobile-base bg-transparent outline-none placeholder-mobile-text-muted ${
                    formData.birthDate ? "text-mobile-text-primary" : "text-mobile-text-muted"
                  }`}
                />
              </div>
              {errors.birthDate && (
                <div className="flex items-center gap-1.5 mt-1">
                  <AlertCircle className="w-4 h-4 text-mobile-red flex-shrink-0" />
                  <span className="text-xs text-mobile-red font-mobile-base">
                    {errors.birthDate}
                  </span>
                </div>
              )}
            </div>

            {/* Street and House Number Row */}
            <div className="flex gap-18">
              <div className="flex-1 space-y-1">
                <label className="text-sm font-medium text-mobile-text-primary font-mobile-base">
                  Straße *
                </label>
                <div className={`border rounded-lg px-3.5 py-3 ${
                  errors.street ? "border-mobile-red" : "border-mobile-text-muted"
                }`}>
                  <input
                    type="text"
                    placeholder="z.B. Musterstraße"
                    value={formData.street}
                    onChange={(e) => handleInputChange("street", e.target.value)}
                    className={`w-full text-sm font-mobile-base bg-transparent outline-none placeholder-mobile-text-muted ${
                      formData.street ? "text-mobile-text-primary" : "text-mobile-text-muted"
                    }`}
                  />
                </div>
                {errors.street && (
                  <div className="flex items-center gap-1.5 mt-1">
                    <AlertCircle className="w-4 h-4 text-mobile-red flex-shrink-0" />
                    <span className="text-xs text-mobile-red font-mobile-base">
                      {errors.street}
                    </span>
                  </div>
                )}
              </div>
              <div className="w-[101px] space-y-1">
                <label className="text-sm font-medium text-mobile-text-primary font-mobile-base">
                  Nr. *
                </label>
                <div className={`border rounded-lg px-3.5 py-3 ${
                  errors.houseNumber ? "border-mobile-red" : "border-mobile-text-muted"
                }`}>
                  <input
                    type="text"
                    placeholder="z.B. 12a"
                    value={formData.houseNumber}
                    onChange={(e) => handleInputChange("houseNumber", e.target.value)}
                    className={`w-full text-sm font-mobile-base bg-transparent outline-none placeholder-mobile-text-muted ${
                      formData.houseNumber ? "text-mobile-text-primary" : "text-mobile-text-muted"
                    }`}
                  />
                </div>
                {errors.houseNumber && (
                  <div className="flex items-center gap-1.5 mt-1">
                    <AlertCircle className="w-4 h-4 text-mobile-red flex-shrink-0" />
                    <span className="text-xs text-mobile-red font-mobile-base">
                      {errors.houseNumber}
                    </span>
                  </div>
                )}
              </div>
            </div>

            {/* Postal Code and City Row */}
            <div className="flex gap-18">
              <div className="w-[101px] space-y-1">
                <label className="text-sm font-medium text-mobile-text-primary font-mobile-base">
                  PLZ
                </label>
                <div className="border border-mobile-text-muted rounded-lg px-3.5 py-3">
                  <input
                    type="text"
                    placeholder="z.B. 10245"
                    value={formData.postalCode}
                    onChange={(e) => handleInputChange("postalCode", e.target.value)}
                    className="w-full text-sm font-mobile-base text-mobile-text-muted bg-transparent outline-none placeholder-mobile-text-muted"
                  />
                </div>
              </div>
              <div className="flex-1 space-y-1">
                <label className="text-sm font-medium text-mobile-text-primary font-mobile-base">
                  Ort
                </label>
                <div className="border border-mobile-text-muted rounded-lg px-3.5 py-3">
                  <input
                    type="text"
                    placeholder="z.B. Berlin"
                    value={formData.city}
                    onChange={(e) => handleInputChange("city", e.target.value)}
                    className="w-full text-sm font-mobile-base text-mobile-text-muted bg-transparent outline-none placeholder-mobile-text-muted"
                  />
                </div>
              </div>
            </div>

            {/* Info Section */}
            <div className="pt-2 space-y-3">
              <button className="flex items-center gap-1.5 text-left">
                <Info className="w-4 h-4 text-mobile-text-secondary flex-shrink-0" />
                <span className="text-sm text-mobile-text-secondary font-mobile-base underline">
                  Warum fragen wir nach Deinen persönlichen Daten?
                </span>
              </button>
              
              <p className="text-xs text-mobile-text-secondary font-mobile-base leading-relaxed">
                Wir senden deine Daten an die [Bank Name] für Privatkunden und Handel GmbH und an den inserierenden Händler, um deine Anfrage zu beantworten und für weitere Zwecke zu verarbeiten. Als Teil unserer Vermittlungsleistung erinnern wir dich per E-Mail an die Möglichkeit zum Finanzierungsabschluss. <span className="underline">Datenschutzhinweis</span>
              </p>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-4 pt-6">
          <Link
            to="/"
            className="px-4 py-3 rounded-lg border-2 border-mobile-secondary-purple bg-white text-sm font-medium text-mobile-text-primary font-mobile-base min-h-[44px] flex items-center justify-center"
          >
            Abbrechen
          </Link>
          <button className="flex-1 px-4 py-3 rounded-lg bg-mobile-red border border-mobile-red text-sm font-bold text-white font-mobile-base text-center min-h-[44px] flex items-center justify-center">
            Hinzufügen
          </button>
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
          <div>
            <label className="block text-sm font-medium text-mobile-text-light font-mobile-base mb-1">
              Language
            </label>
            <div className="flex items-center border border-mobile-text-muted rounded-lg bg-mobile-bg-field">
              <div className="flex-1 px-3 py-2 text-sm text-mobile-text-light font-mobile-base">
                Deutsch
              </div>
              <div className="w-8 h-9 flex items-center justify-center border-l border-mobile-text-muted">
                <ChevronDown className="w-2.5 h-1.5 text-mobile-text-light" />
              </div>
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-mobile-text-light font-mobile-base mb-1">
              Appearance
            </label>
            <div className="flex items-center border border-mobile-text-muted rounded-lg bg-mobile-bg-field">
              <div className="flex-1 px-3 py-2 text-sm text-mobile-text-light font-mobile-base">
                System-Darstellung
              </div>
              <div className="w-8 h-9 flex items-center justify-center border-l border-mobile-text-muted">
                <ChevronDown className="w-2.5 h-1.5 text-mobile-text-light" />
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

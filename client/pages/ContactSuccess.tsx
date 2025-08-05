import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";

export default function ContactSuccess() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Header */}
      <header className="bg-white border-b border-mobile-border">
        <div className="flex items-center justify-between px-4 py-4">
          <div className="flex items-center gap-2">
            {/* Mobile.de Logo */}
            <svg width="170" height="25" viewBox="0 0 300 26" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M169.661 13.8293C169.661 14.3378 169.632 14.7611 169.549 15.2694H155.403C156.022 17.4711 157.945 18.9697 160.372 18.9697C162.01 18.9697 163.45 18.2083 164.438 16.936L168.138 19.5901C166.16 22.1032 163.308 23.3172 160.232 23.3172C154.753 23.3172 150.629 19.1668 150.629 13.8293C150.629 8.49181 154.668 4.3682 160.146 4.3682C165.625 4.3682 169.664 8.37736 169.664 13.8293H169.661ZM155.54 11.8247H164.972C164.295 9.79084 162.46 8.55014 160.229 8.55014C157.999 8.55014 156.22 9.82 155.54 11.8247ZM143.511 6.20486V1.29069H148.311V22.9499H143.764V21.1982C142.521 22.4974 140.742 23.3172 138.456 23.3172C133.258 23.3172 129.25 19.3079 129.25 13.8293C129.25 8.3507 133.258 4.3682 138.456 4.3682C140.515 4.3682 142.297 5.04695 143.511 6.2025V6.20486ZM138.964 18.7994C141.789 18.7994 143.904 16.6806 143.904 13.7442C143.904 10.8078 141.786 8.74472 138.964 8.74472C136.142 8.74472 134.079 10.8346 134.079 13.7442C134.079 16.6537 136.225 18.7994 138.964 18.7994ZM124.874 23.3172C123.179 23.3172 121.822 21.9621 121.822 20.2664C121.822 18.5708 123.178 17.2449 124.874 17.2449C126.568 17.2449 127.895 18.6 127.895 20.2664C127.895 21.9329 126.567 23.3172 124.874 23.3172ZM121.006 13.8293C121.006 14.3378 120.949 14.7611 120.864 15.2694H106.717C107.338 17.4711 109.26 18.9697 111.688 18.9697C113.325 18.9697 114.765 18.2083 115.753 16.936L119.453 19.5901C117.475 22.1032 114.624 23.3172 111.546 23.3172C106.068 23.3172 101.945 19.1668 101.945 13.8293C101.945 8.49181 105.982 4.3682 111.461 4.3682C116.94 4.3682 121.006 8.37736 121.006 13.8293ZM106.856 11.8247H116.288C115.608 9.79084 113.775 8.55014 111.545 8.55014C109.313 8.55014 107.535 9.82 106.856 11.8247ZM94.8251 1.29069V22.9499H99.6251V1.29069H94.8251ZM89.1793 5.89347C87.6265 5.89347 86.4404 4.67958 86.4404 3.21014C86.4404 1.74069 87.6265 0.5 89.1793 0.5C90.7321 0.5 91.9182 1.71403 91.9182 3.21014C91.9182 4.70625 90.7043 5.89347 89.1793 5.89347ZM91.5807 22.9499H86.7515V7.36292H91.5807V22.9499ZM75.2001 4.3682C80.3974 4.3682 84.376..." fill="#350051"/>
              <path d="M41.6529 8.23623C41.6529 6.14637 40.382 4.42401 38.0931 4.42401C36.3709 4.42401 35.0417 5.38498 34.3376 7.16332L30.4126 16.8483V8.23623C30.4126 6.14637 29.1986 4.42401 26.9389 4.42401C25.075 4.42401 23.9167 5.49679 23.2389 7.16332L19.2292 17.0186V4.7354H15.0209V22.9497H20.7528L26.3153 9.81748V19.7019C26.3153 21.7625 27.4445 23.2611 29.5084 23.2611C31.2862 23.2611 32.2473 22.2442 32.8973 20.6921L37.4432 9.73471V22.9497H41.6529V8.23623Z" fill="#350051"/>
              <path d="M3.98339 4.73346L11.7778 4.73596V22.9503H3.98339C1.78061 22.9503 0 21.1718 0 18.9678V8.71596C0 6.51429 1.77923 4.73346 3.98339 4.73346Z" fill="#FA3C00"/>
            </svg>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 px-8 py-8 flex flex-col">
        <div className="max-w-md mx-auto w-full flex flex-col items-center gap-4">
          {/* Success Content */}
          <div className="flex flex-col items-center gap-4 text-center">
            {/* High-five Illustration */}
            <div className="w-48 h-48 mb-1">
              <svg width="192" height="192" viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* SVG content for high-five hands illustration */}
                <g>
                  {/* Left hand */}
                  <path d="M100 150C100 130 120 110 140 110C160 110 180 130 180 150L180 200C180 220 160 240 140 240C120 240 100 220 100 200Z" fill="#E8A882"/>
                  <path d="M90 120L110 100L125 115L105 135Z" fill="#E8A882"/>
                  <path d="M85 140L105 120L120 135L100 155Z" fill="#E8A882"/>
                  <path d="M85 160L105 140L120 155L100 175Z" fill="#E8A882"/>
                  <path d="M90 180L110 160L125 175L105 195Z" fill="#E8A882"/>
                  <path d="M95 200L115 180L130 195L110 215Z" fill="#E8A882"/>
                  
                  {/* Right hand */}
                  <path d="M200 150C200 130 180 110 160 110C140 110 120 130 120 150L120 200C120 220 140 240 160 240C180 240 200 220 200 200Z" fill="#E8A882"/>
                  <path d="M210 120L190 100L175 115L195 135Z" fill="#E8A882"/>
                  <path d="M215 140L195 120L180 135L200 155Z" fill="#E8A882"/>
                  <path d="M215 160L195 140L180 155L200 175Z" fill="#E8A882"/>
                  <path d="M210 180L190 160L175 175L195 195Z" fill="#E8A882"/>
                  <path d="M205 200L185 180L170 195L190 215Z" fill="#E8A882"/>
                  
                  {/* Cuffs */}
                  <rect x="90" y="230" width="60" height="15" rx="7.5" fill="#FA3C00"/>
                  <rect x="150" y="230" width="60" height="15" rx="7.5" fill="#4A90E2"/>
                  
                  {/* Sparkles */}
                  <circle cx="150" cy="70" r="3" fill="#FFD700"/>
                  <circle cx="130" cy="80" r="2" fill="#FFD700"/>
                  <circle cx="170" cy="85" r="2" fill="#FFD700"/>
                  <path d="M150 50L152 58L160 56L152 64L150 72L148 64L140 56L148 58Z" fill="#FFD700"/>
                  <path d="M110 90L112 95L117 93L112 98L110 103L108 98L103 93L108 95Z" fill="#FFD700"/>
                  <path d="M190 95L192 100L197 98L192 103L190 108L188 103L183 98L188 100Z" fill="#FFD700"/>
                </g>
              </svg>
            </div>

            {/* Success Message */}
            <div className="space-y-2">
              <h1 className="text-xl font-bold text-mobile-text-primary font-mobile-base leading-7">
                Deine Nachricht wurde erfolgreich gesendet
              </h1>
              <p className="text-base text-mobile-text-primary font-mobile-base leading-6">
                Damit Du dieses Inserat schnell wiederfindest, haben wir es automatisch für Dich auf Deinem{" "}
                <span className="underline">Parkplatz</span> gespeichert.
              </p>
            </div>
          </div>

          {/* Return Button */}
          <button className="w-full max-w-[303px] h-11 border-[1.5px] border-mobile-secondary-purple bg-transparent rounded-lg flex items-center justify-center mt-4">
            <span className="text-sm font-medium text-mobile-secondary-purple font-mobile-base">
              Zurück zum Inserat
            </span>
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
          {/* Language Selector */}
          <div>
            <label className="text-sm text-mobile-text-light font-mobile-base mb-1 block">
              Sprache
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
          
          {/* Display Selector */}
          <div>
            <label className="text-sm text-mobile-text-light font-mobile-base mb-1 block">
              Darstellung
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

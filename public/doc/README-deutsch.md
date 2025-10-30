# 🚀 Bootstrap NW.js Desktop Anwendung (Deutsch)

Eine vollständige plattformübergreifende Desktop-Anwendung mit Node.js, Express, EJS, Bootstrap und NW.js. Läuft auf Windows, macOS und Linux.

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Node](https://img.shields.io/badge/node-%3E%3D18.x-brightgreen.svg)
![NW.js](https://img.shields.io/badge/NW.js-latest-orange.svg)

## 📋 Inhaltsverzeichnis

- [Features](#-features)
- [Voraussetzungen](#-voraussetzungen)
- [Schritt-für-Schritt Anleitung](#-schritt-für-schritt-anleitung)
- [Kompletter Code](#-kompletter-code)
- [Entwicklung](#-entwicklung)
- [Als .nw Paket ausführen](#-als-nw-paket-ausführen)
- [Build & Distribution](#-build--distribution)
- [Troubleshooting](#-troubleshooting)
- [Lizenz](#-lizenz)

## ✨ Features

- 🖥️ **Plattformübergreifend**: Windows, macOS, Linux
- 🎨 **Bootstrap 5.3**: Modernes, responsives UI-Design
- ⚡ **Express Server**: Schneller HTTP-Server
- 📄 **EJS Templates**: Dynamische HTML-Vorlagen mit Partials
- 🌐 **CDN-basiert**: Alle Frontend-Bibliotheken via CDN
- 📦 **NW.js Integration**: Native Desktop-App
- 🗜️ **Portables Paket**: Kann als einzelne .nw-Datei verpackt werden

## 🧩 Voraussetzungen

- [Node.js](https://nodejs.org) ≥ 18.x
- [NW.js](https://nwjs.io) (wird automatisch installiert)
- Texteditor (VS Code, Notepad++, nano, vim)
- ZIP-Programm (auf den meisten Systemen vorinstalliert)

## 🏗️ Schritt-für-Schritt Anleitung

### Schritt 1: Projektstruktur erstellen

**Linux / macOS:**
```bash
mkdir -p bootstrap-nwjs-app/views/pages bootstrap-nwjs-app/views/partials bootstrap-nwjs-app/public
cd bootstrap-nwjs-app
```

**Windows (PowerShell):**
```powershell
mkdir bootstrap-nwjs-app
cd bootstrap-nwjs-app
mkdir views\pages
mkdir views\partials
mkdir public
```

**Endgültige Struktur:**
```
bootstrap-nwjs-app/
├── package.json
├── server.js
├── public/
├── views/
│   ├── pages/
│   │   ├── index.ejs
│   │   └── about.ejs
│   └── partials/
│       ├── head.ejs
│       ├── header.ejs
│       └── footer.ejs
└── README.md
```

### Schritt 2: Dateien erstellen

Erstelle nun nacheinander alle benötigten Dateien mit dem unten aufgeführten Code.

## 📄 Kompletter Code

### `package.json`

```json
{
  "name": "bootstrap-nwjs-app",
  "version": "1.0.0",
  "private": true,
  "dependencies": {
    "express": "^4.18.2",
    "ejs": "^3.1.9",
    "serve-favicon": "^2.5.0",
    "jquery": "*",
    "bootstrap": "*",
    "bootstrap-icons": "*",
    "@popperjs/core": "*"
  },
  "description": "Bootstrap NW.js Desktop Anwendung",
  "node-main": "server.js",
  "main": "http://localhost:8080",
  "window": {
    "toolbar": true,
    "width": 1000,
    "height": 600,
    "resizable": true,
    "min_width": 800,
    "min_height": 600
  },
  "scripts": {
    "start": "nw .",
    "dev": "node server.js",
    "build:win": "nwbuild --mode=build --platforms win64 .",
    "build:mac": "nwbuild --mode=build --platforms osx64 .",
    "build:linux": "nwbuild --mode=build --platforms linux64 .",
    "build:all": "nwbuild --mode=build --platforms win64,osx64,linux64 ."
  },
  "author": "Martin Imle",
  "license": "MIT"
}
```

### `server.js`

```javascript
var express = require('express');
var app = express();

// Template Engine konfigurieren
app.set('view engine', 'ejs');

// Statische Dateien aus public/ bereitstellen
app.use(express.static('public'));

// Routen definieren
app.get('/', function(req, res) {
  res.render('pages/index');
});

app.get('/about', function(req, res) {
  res.render('pages/about');
});

// Server starten
app.listen(8080, function() {
  console.log('🚀 Server läuft auf http://localhost:8080');
  console.log('🎯 Drücke Strg+C zum Beenden');
});
```

### `views/partials/head.ejs`

```html
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Bootstrap NW.js App</title>

<!-- jQuery -->
<script src="https://code.jquery.com/jquery-3.7.1.min.js"></script>

<!-- Popper.js -->
<script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js"></script>

<!-- Bootstrap JS Bundle -->
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>

<!-- Bootstrap CSS -->
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">

<!-- Bootstrap Icons -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.css">
```

### `views/partials/header.ejs`

```html
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="/">
      <i class="bi bi-laptop"></i> Desktop App
    </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav me-auto">
        <li class="nav-item">
          <a class="nav-link" href="/">
            <i class="bi bi-house"></i> Home
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/about">
            <i class="bi bi-info-circle"></i> Über
          </a>
        </li>
      </ul>
    </div>
  </div>
</nav>
```

### `views/partials/footer.ejs`

```html
<footer class="footer mt-auto py-3 bg-light">
  <div class="container text-center">
    <span class="text-muted">
      © 2025 Bootstrap NW.js App | 
      <i class="bi bi-github"></i> 
      <a href="https://github.com" target="_blank">GitHub</a>
    </span>
  </div>
</footer>
```

### `views/pages/index.ejs`

```html
<!DOCTYPE html>
<html lang="de">
<head>
  <%- include('../partials/head'); %>
</head>
<body class="d-flex flex-column min-vh-100">
  
  <header>
    <%- include('../partials/header'); %>
  </header>
  
  <main class="container flex-grow-1 my-4">
    <div class="row">
      <div class="col-12">
        <div class="jumbotron bg-light p-5 rounded-3">
          <h1 class="display-4">
            <i class="bi bi-rocket-takeoff"></i> Willkommen!
          </h1>
          <p class="lead">
            Dies ist eine Bootstrap NW.js Desktop-Anwendung mit Express und EJS.
          </p>
          <hr class="my-4">
          <p>Teste die jQuery-Funktionalität mit den Buttons unten:</p>
        </div>
      </div>
    </div>

    <div class="row mt-4">
      <div class="col-12">
        <div class="card">
          <div class="card-header">
            <h5><i class="bi bi-gear"></i> Interaktive Demo</h5>
          </div>
          <div class="card-body">
            <p id="demo-text" class="alert alert-info">
              <i class="bi bi-eye"></i> Dieser Text kann ein- und ausgeblendet werden!
            </p>
            <button type="button" class="btn btn-success" id="show-btn">
              <i class="bi bi-eye"></i> Zeigen
            </button>
            <button type="button" class="btn btn-danger" id="hide-btn">
              <i class="bi bi-eye-slash"></i> Verbergen
            </button>
            <button type="button" class="btn btn-primary" id="toggle-btn">
              <i class="bi bi-arrow-repeat"></i> Umschalten
            </button>
          </div>
        </div>
      </div>
    </div>

    <div class="row mt-4">
      <div class="col-md-4">
        <div class="card text-center">
          <div class="card-body">
            <i class="bi bi-window-desktop display-1 text-primary"></i>
            <h5 class="card-title mt-3">Plattformübergreifend</h5>
            <p class="card-text">Windows, macOS und Linux</p>
          </div>
        </div>
      </div>
      <div class="col-md-4">
        <div class="card text-center">
          <div class="card-body">
            <i class="bi bi-bootstrap-fill display-1 text-primary"></i>
            <h5 class="card-title mt-3">Bootstrap 5</h5>
            <p class="card-text">Modernes, responsives Design</p>
          </div>
        </div>
      </div>
      <div class="col-md-4">
        <div class="card text-center">
          <div class="card-body">
            <i class="bi bi-code-square display-1 text-primary"></i>
            <h5 class="card-title mt-3">Node.js & Express</h5>
            <p class="card-text">Leistungsstarkes Backend</p>
          </div>
        </div>
      </div>
    </div>
  </main>
  
  <footer>
    <%- include('../partials/footer'); %>
  </footer>

  <script>
    $(document).ready(function() {
      // Button-Handler
      $("#show-btn").click(function() { 
        $("#demo-text").slideDown(500); 
      });
      
      $("#hide-btn").click(function() { 
        $("#demo-text").slideUp(500); 
      });
      
      $("#toggle-btn").click(function() { 
        $("#demo-text").slideToggle(500); 
      });
    });
  </script>
</body>
</html>
```

### `views/pages/about.ejs`

```html
<!DOCTYPE html>
<html lang="de">
<head>
  <%- include('../partials/head'); %>
</head>
<body class="d-flex flex-column min-vh-100">
  
  <header>
    <%- include('../partials/header'); %>
  </header>
  
  <main class="container flex-grow-1 my-4">
    <div class="row">
      <div class="col-md-8">
        <div class="card">
          <div class="card-header bg-primary text-white">
            <h2><i class="bi bi-info-circle"></i> Über diese Anwendung</h2>
          </div>
          <div class="card-body">
            <h4>Bootstrap NW.js Desktop App</h4>
            <p class="lead">
              Eine vollständige plattformübergreifende Desktop-Anwendung mit modernen Web-Technologien.
            </p>
            
            <h5 class="mt-4">🛠️ Technologie-Stack</h5>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">
                <strong>Node.js:</strong> JavaScript-Laufzeitumgebung
              </li>
              <li class="list-group-item">
                <strong>Express:</strong> Web-Framework & HTTP-Server
              </li>
              <li class="list-group-item">
                <strong>EJS:</strong> Template-Engine für dynamisches HTML
              </li>
              <li class="list-group-item">
                <strong>Bootstrap 5.3:</strong> CSS-Framework für responsives Design
              </li>
              <li class="list-group-item">
                <strong>jQuery 3.7:</strong> DOM-Manipulation und Event-Handling
              </li>
              <li class="list-group-item">
                <strong>NW.js:</strong> Desktop-App-Wrapper (Chromium + Node.js)
              </li>
            </ul>

            <h5 class="mt-4">✨ Features</h5>
            <div class="row">
              <div class="col-md-6">
                <ul>
                  <li>Plattformübergreifend (Win/Mac/Linux)</li>
                  <li>Responsives Design</li>
                  <li>CDN-basierte Ressourcen</li>
                </ul>
              </div>
              <div class="col-md-6">
                <ul>
                  <li>Template-basierte Views</li>
                  <li>Express Backend</li>
                  <li>Bootstrap Icons</li>
                </ul>
              </div>
            </div>

            <div class="alert alert-success mt-4">
              <i class="bi bi-check-circle"></i>
              <strong>Open Source:</strong> MIT-Lizenz
            </div>
          </div>
        </div>
      </div>
      
      <div class="col-md-4">
        <div class="card mb-3">
          <div class="card-header bg-secondary text-white">
            <h5><i class="bi bi-laptop"></i> System-Info</h5>
          </div>
          <div class="card-body">
            <p><strong>Version:</strong> 1.0.0</p>
            <p><strong>Lizenz:</strong> MIT</p>
            <p><strong>Autor:</strong> Martin Imle</p>
          </div>
        </div>

        <div class="card">
          <div class="card-header bg-info text-white">
            <h5><i class="bi bi-link-45deg"></i> Nützliche Links</h5>
          </div>
          <div class="card-body">
            <ul class="list-unstyled">
              <li class="mb-2">
                <a href="https://nwjs.io" target="_blank" class="btn btn-sm btn-outline-primary w-100">
                  <i class="bi bi-box-arrow-up-right"></i> NW.js
                </a>
              </li>
              <li class="mb-2">
                <a href="https://nodejs.org" target="_blank" class="btn btn-sm btn-outline-success w-100">
                  <i class="bi bi-box-arrow-up-right"></i> Node.js
                </a>
              </li>
              <li class="mb-2">
                <a href="https://getbootstrap.com" target="_blank" class="btn btn-sm btn-outline-info w-100">
                  <i class="bi bi-box-arrow-up-right"></i> Bootstrap
                </a>
              </li>
              <li>
                <a href="https://expressjs.com" target="_blank" class="btn btn-sm btn-outline-dark w-100">
                  <i class="bi bi-box-arrow-up-right"></i> Express
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </main>
  
  <footer>
    <%- include('../partials/footer'); %>
  </footer>
</body>
</html>
```

## 🚀 Entwicklung

### Installation

```bash
# Ins Projektverzeichnis wechseln
cd bootstrap-nwjs-app

# Abhängigkeiten installieren
npm install

# NW.js global installieren (einmalig)
npm install -g nw
```

### Im Browser testen

```bash
npm run dev
```

Öffne: **http://localhost:8080**

### Als Desktop-App starten

```bash
npm start
```

## 🗜️ Als .nw Paket ausführen

Eines der mächtigsten Features von NW.js ist die Möglichkeit, deine gesamte Anwendung als einzelne `.nw`-Datei zu verpacken. Das macht die Verteilung unglaublich einfach!

### Was ist eine .nw-Datei?

Eine `.nw`-Datei ist einfach ein ZIP-Archiv, das deinen Anwendungscode enthält und mit der `.nw`-Endung umbenannt wurde. NW.js kann diese Dateien direkt ohne Entpacken ausführen.

### Ein .nw Paket erstellen

**Methode 1: Kommandozeile verwenden**

**Linux / macOS:**
```bash
# Ins Projektverzeichnis wechseln
cd bootstrap-nwjs-app

# Zuerst Abhängigkeiten installieren (WICHTIG!)
npm install

# ZIP-Archiv aller Dateien erstellen
zip -r ../meineapp.zip * -x "*.git*" -x "node_modules/.cache/*"

# In .nw umbenennen
mv ../meineapp.zip ../meineapp.nw
```

**Windows (PowerShell):**
```powershell
# Ins Projektverzeichnis wechseln
cd bootstrap-nwjs-app

# Zuerst Abhängigkeiten installieren (WICHTIG!)
npm install

# ZIP-Archiv erstellen (mit Windows-Komprimierung)
Compress-Archive -Path * -DestinationPath ..\meineapp.zip

# In .nw umbenennen
Rename-Item ..\meineapp.zip meineapp.nw
```

**Methode 2: GUI verwenden**

1. NPM-Abhängigkeiten installieren: `npm install`
2. Alle Dateien im Projektordner auswählen (inklusive `node_modules/`)
3. Rechtsklick → "Komprimieren" / "Senden an" → "ZIP-komprimierter Ordner"
4. Die resultierende `.zip`-Datei in `.nw` umbenennen

### Wichtige Hinweise

⚠️ **KRITISCH**: Führe immer `npm install` aus, bevor du das .nw-Paket erstellst! Der `node_modules`-Ordner MUSS im ZIP/NW-File enthalten sein.

✅ **Im .nw-Paket enthalten:**
- package.json
- server.js
- Alle View-Dateien (views/)
- Alle statischen Dateien (public/)
- **node_modules/** (kompletter Ordner!)

❌ **Vom .nw-Paket ausschließen:**
- .git/ Ordner
- .gitignore
- node_modules/.cache/
- README.md (optional)
- Entwicklungs-Dateien

### Das .nw Paket ausführen

Sobald du deine `.nw`-Datei erstellt hast, kannst du sie direkt mit NW.js ausführen:

**Alle Plattformen:**
```bash
nw meineapp.nw
```

**Oder Drag & Drop:**
Ziehe einfach die `meineapp.nw`-Datei auf die NW.js-Executable:
- Windows: `nw.exe`
- macOS: `nwjs.app`
- Linux: `nw`

### Distribution

Du kannst diese einzelne `.nw`-Datei jetzt an Benutzer verteilen, die NW.js installiert haben. Für Endbenutzer ohne NW.js siehe den Abschnitt "Build & Distribution" für eigenständige Executables.

### Dein .nw Paket testen

```bash
# Paket erstellen
cd bootstrap-nwjs-app
npm install
zip -r ../meineapp.zip *
mv ../meineapp.zip ../meineapp.nw

# Testen
nw ../meineapp.nw
```

Die Anwendung sollte genau so starten wie mit `npm start`!

## 📦 Build & Distribution

Für die Verteilung an Endbenutzer ohne NW.js-Installation erstelle plattformspezifische Executables:

### NW-Builder installieren

```bash
npm install -g nw-builder
```

### Builds erstellen

```bash
# Windows
npm run build:win

# macOS
npm run build:mac

# Linux
npm run build:linux

# Alle Plattformen
npm run build:all
```

Die kompilierten Builds befinden sich im `build/`-Verzeichnis. Dies sind eigenständige Executables, die NW.js und dein `.nw`-Paket enthalten.

### Build-Prozess erklärt

Der Build-Prozess:
1. Erstellt ein `.nw`-Paket aus deinem Source
2. Lädt die entsprechenden NW.js-Binaries herunter
3. Kombiniert dein `.nw`-Paket mit NW.js
4. Erstellt eine verteilbare Anwendung

**Windows Build Output:**
- `meineapp.exe` - Hauptprogramm
- `nw.dll`, `ffmpeg.dll` - Benötigte Bibliotheken
- Weitere NW.js-Laufzeitdateien

**macOS Build Output:**
- `meineapp.app` - Anwendungsbundle (Doppelklick zum Starten)

**Linux Build Output:**
- `meineapp` - Ausführbare Binärdatei
- Benötigte Shared Libraries

## 🐛 Troubleshooting

### Port 8080 bereits belegt

**Linux/macOS:**
```bash
lsof -i :8080
kill -9 <PID>
```

**Windows:**
```powershell
netstat -ano | findstr :8080
taskkill /PID <PID> /F
```

Oder ändere den Port in `server.js`:
```javascript
app.listen(3000); // Statt 8080
```

### NW.js startet nicht

- Prüfe, ob `node-main` in `package.json` auf `server.js` zeigt
- Stelle sicher, dass `main` auf `http://localhost:8080` zeigt
- Überprüfe, ob alle npm-Pakete installiert sind: `npm install`

### .nw Paket startet nicht

- **Hast du `npm install` ausgeführt, bevor du das ZIP erstellt hast?** Der `node_modules`-Ordner muss enthalten sein!
- Überprüfe, ob das ZIP alle benötigten Dateien enthält
- Stelle sicher, dass die Dateiendung `.nw` ist (nicht `.nw.zip`)
- Verifiziere, dass NW.js korrekt installiert ist: `nw --version`

### Module Not Found Fehler

```bash
# Das bedeutet, node_modules fehlt in deinem .nw-Paket
# Lösung: Paket neu erstellen mit node_modules
cd bootstrap-nwjs-app
npm install
zip -r ../meineapp.zip * 
mv ../meineapp.zip ../meineapp.nw
```

### ZIP/NW-Datei zu groß

Der `node_modules`-Ordner kann groß sein. Das ist normal. Ein typisches Paket kann 50-150 MB groß sein aufgrund von Express, EJS und deren Abhängigkeiten.

Um die Größe zu reduzieren:
- Entferne ungenutzte Abhängigkeiten aus `package.json`
- Führe `npm install --production` aus (schließt Dev-Dependencies aus)
- Verwende Tools wie `npm prune`, um überflüssige Pakete zu entfernen

### Build-Fehler

- Stelle sicher, dass NW-Builder global installiert ist: `npm install -g nw-builder`
- Überprüfe, ob alle Dateien in den richtigen Verzeichnissen sind
- Verifiziere, dass `package.json` die korrekte Konfiguration hat
- Stelle sicher, dass du `npm install` im Projektverzeichnis ausgeführt hast

## 🎯 Vergleich der Verteilungsoptionen

| Methode | Vorteile | Nachteile | Am besten für |
|---------|----------|-----------|---------------|
| **Quellcode** | Volle Kontrolle, einfache Updates | Benötigt Node.js & NW.js | Entwickler |
| **.nw Paket** | Kleine Datei, plattformübergreifend | Benötigt installiertes NW.js | Power User |
| **Gebaute Executables** | Eigenständig, keine Abhängigkeiten | Große Dateigröße (100-200 MB) | Endbenutzer |

## 📚 Technologie-Details

### Verwendete CDN-Ressourcen

- **jQuery 3.7.1** - DOM-Manipulation und Event-Handling
- **Bootstrap 5.3.3** - CSS-Framework und Komponenten
- **Popper.js 2.11.8** - Tooltip- und Popover-Positionierung
- **Bootstrap Icons 1.11.3** - Icon-Bibliothek

### Wichtige Abhängigkeiten

| Paket | Version | Zweck |
|-------|---------|-------|
| express | ^4.18.2 | Webserver-Framework |
| ejs | ^3.1.9 | Template-Engine |
| serve-favicon | ^2.5.0 | Favicon-Middleware |

## 🤝 Mitwirken

Beiträge sind willkommen! Erstelle gerne Pull Requests oder öffne Issues.

1. Forke das Repository
2. Erstelle deinen Feature-Branch (`git checkout -b feature/TollesFeature`)
3. Committe deine Änderungen (`git commit -m 'Füge tolles Feature hinzu'`)
4. Pushe zum Branch (`git push origin feature/TollesFeature`)
5. Öffne einen Pull Request

## 📝 Lizenz

MIT License © 2025 Martin Imle
**Support:** m.imle@gmx.net (PayPal)

Hiermit wird unentgeltlich jeder Person, die eine Kopie der Software und der zugehörigen Dokumentationen (die "Software") erhält, die Erlaubnis erteilt, sie uneingeschränkt zu nutzen, inklusive und ohne Ausnahme mit dem Recht, sie zu verwenden, zu kopieren, zu ändern, zusammenzufügen, zu veröffentlichen, zu verbreiten, zu unterlizenzieren und/oder zu verkaufen, und Personen, denen diese Software überlassen wird, diese Rechte zu verschaffen, unter den folgenden Bedingungen:

Der obige Urheberrechtsvermerk und dieser Erlaubnisvermerk sind in allen Kopien oder Teilkopien der Software beizulegen.

DIE SOFTWARE WIRD OHNE JEDE AUSDRÜCKLICHE ODER IMPLIZIERTE GARANTIE BEREITGESTELLT, EINSCHLIEẞLICH DER GARANTIE ZUR BENUTZUNG FÜR DEN VORGESEHENEN ODER EINEM BESTIMMTEN ZWECK SOWIE JEGLICHER RECHTSVERLETZUNG, JEDOCH NICHT DARAUF BESCHRÄNKT. IN KEINEM FALL SIND DIE AUTOREN ODER COPYRIGHTINHABER FÜR JEGLICHEN SCHADEN ODER SONSTIGE ANSPRÜCHE HAFTBAR ZU MACHEN, OB INFOLGE DER ERFÜLLUNG EINES VERTRAGES, EINES DELIKTES ODER ANDERS IM ZUSAMMENHANG MIT DER SOFTWARE ODER SONSTIGER VERWENDUNG DER SOFTWARE ENTSTANDEN.

## 📧 Kontakt

Für Fragen oder Anregungen öffne bitte ein Issue auf GitHub.

---

**⭐ Wenn du dieses Projekt nützlich findest, gib ihm einen Stern!

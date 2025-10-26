# nwjs-app
A complete cross-platform desktop application built with Node.js, Express, EJS, Bootstrap, and NW.js. Runs on Windows, macOS, and Linux.

<img width="2532" height="1227" alt="Bildschirmfoto_20251026_140337" src="https://github.com/user-attachments/assets/023f8642-870c-4191-8738-f84c1db7eef3" />


# 🚀 Bootstrap NW.js Desktop Application (English)

A complete cross-platform desktop application built with Node.js, Express, EJS, Bootstrap, and NW.js. Runs on Windows, macOS, and Linux.

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Node](https://img.shields.io/badge/node-%3E%3D18.x-brightgreen.svg)
![NW.js](https://img.shields.io/badge/NW.js-latest-orange.svg)

## 📋 Table of Contents

- [Features](#-features)
- [Prerequisites](#-prerequisites)
- [Step-by-Step Guide](#-step-by-step-guide)
- [Complete Code](#-complete-code)
- [Development](#-development)
- [Packaging as .nw File](#-packaging-as-nw-file)
- [Build & Distribution](#-build--distribution)
- [Troubleshooting](#-troubleshooting)
- [License](#-license)

## ✨ Features

- 🖥️ **Cross-platform**: Windows, macOS, Linux
- 🎨 **Bootstrap 5.3**: Modern, responsive UI design
- ⚡ **Express Server**: Fast HTTP server
- 📄 **EJS Templates**: Dynamic HTML templates with partials
- 🌐 **CDN-based**: All frontend libraries via CDN
- 📦 **NW.js Integration**: Native desktop app wrapper
- 🗜️ **Simple Packaging**: Package as .nw file for easy distribution

## 🧩 Prerequisites

- [Node.js](https://nodejs.org) ≥ 18.x
- [NW.js](https://nwjs.io) (installed automatically)
- Text editor (VS Code, Notepad++, nano, vim)
- ZIP utility (built-in on most systems)

## 🏗️ Step-by-Step Guide

### Step 1: Create Project Structure

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

**Final Structure:**
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

### Step 2: Create Files

Now create all required files with the code listed below.

## 📄 Complete Code

### `package.json`

```json
{
  "name": "bootstrap-nwjs-app",
  "version": "1.0.0",
  "private": true,
  "dependencies": {
    "express": "^4.18.2",
    "ejs": "^3.1.9",
    "serve-favicon": "^2.5.0"
  },
  "description": "Bootstrap NW.js Desktop Application",
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

// Configure template engine
app.set('view engine', 'ejs');

// Serve static files from public/
app.use(express.static('public'));

// Define routes
app.get('/', function(req, res) {
  res.render('pages/index');
});

app.get('/about', function(req, res) {
  res.render('pages/about');
});

// Start server
app.listen(8080, function() {
  console.log('🚀 Server running on http://localhost:8080');
  console.log('🎯 Press Ctrl+C to stop');
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
            <i class="bi bi-info-circle"></i> About
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
<html lang="en">
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
            <i class="bi bi-rocket-takeoff"></i> Welcome!
          </h1>
          <p class="lead">
            This is a Bootstrap NW.js desktop application built with Express and EJS.
          </p>
          <hr class="my-4">
          <p>Test the jQuery functionality with the buttons below:</p>
        </div>
      </div>
    </div>

    <div class="row mt-4">
      <div class="col-12">
        <div class="card">
          <div class="card-header">
            <h5><i class="bi bi-gear"></i> Interactive Demo</h5>
          </div>
          <div class="card-body">
            <p id="demo-text" class="alert alert-info">
              <i class="bi bi-eye"></i> This text can be shown and hidden!
            </p>
            <button type="button" class="btn btn-success" id="show-btn">
              <i class="bi bi-eye"></i> Show
            </button>
            <button type="button" class="btn btn-danger" id="hide-btn">
              <i class="bi bi-eye-slash"></i> Hide
            </button>
            <button type="button" class="btn btn-primary" id="toggle-btn">
              <i class="bi bi-arrow-repeat"></i> Toggle
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
            <h5 class="card-title mt-3">Cross-Platform</h5>
            <p class="card-text">Windows, macOS and Linux</p>
          </div>
        </div>
      </div>
      <div class="col-md-4">
        <div class="card text-center">
          <div class="card-body">
            <i class="bi bi-bootstrap-fill display-1 text-primary"></i>
            <h5 class="card-title mt-3">Bootstrap 5</h5>
            <p class="card-text">Modern, responsive design</p>
          </div>
        </div>
      </div>
      <div class="col-md-4">
        <div class="card text-center">
          <div class="card-body">
            <i class="bi bi-code-square display-1 text-primary"></i>
            <h5 class="card-title mt-3">Node.js & Express</h5>
            <p class="card-text">Powerful backend</p>
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
      // Button handlers
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
<html lang="en">
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
            <h2><i class="bi bi-info-circle"></i> About This Application</h2>
          </div>
          <div class="card-body">
            <h4>Bootstrap NW.js Desktop App</h4>
            <p class="lead">
              A complete cross-platform desktop application built with modern web technologies.
            </p>
            
            <h5 class="mt-4">🛠️ Technology Stack</h5>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">
                <strong>Node.js:</strong> JavaScript runtime environment
              </li>
              <li class="list-group-item">
                <strong>Express:</strong> Web framework & HTTP server
              </li>
              <li class="list-group-item">
                <strong>EJS:</strong> Embedded JavaScript templating
              </li>
              <li class="list-group-item">
                <strong>Bootstrap 5.3:</strong> CSS framework for responsive design
              </li>
              <li class="list-group-item">
                <strong>jQuery 3.7:</strong> Fast DOM manipulation library
              </li>
              <li class="list-group-item">
                <strong>NW.js:</strong> Desktop application wrapper (Chromium + Node.js)
              </li>
            </ul>

            <h5 class="mt-4">✨ Features</h5>
            <div class="row">
              <div class="col-md-6">
                <ul>
                  <li>Cross-platform (Win/Mac/Linux)</li>
                  <li>Responsive design</li>
                  <li>CDN-based resources</li>
                </ul>
              </div>
              <div class="col-md-6">
                <ul>
                  <li>Template-based views</li>
                  <li>Express backend</li>
                  <li>Bootstrap icons</li>
                </ul>
              </div>
            </div>

            <div class="alert alert-success mt-4">
              <i class="bi bi-check-circle"></i>
              <strong>Open Source:</strong> MIT License
            </div>
          </div>
        </div>
      </div>
      
      <div class="col-md-4">
        <div class="card mb-3">
          <div class="card-header bg-secondary text-white">
            <h5><i class="bi bi-laptop"></i> System Info</h5>
          </div>
          <div class="card-body">
            <p><strong>Version:</strong> 1.0.0</p>
            <p><strong>License:</strong> MIT</p>
            <p><strong>Author:</strong> Martin Imle</p>
          </div>
        </div>

        <div class="card">
          <div class="card-header bg-info text-white">
            <h5><i class="bi bi-link-45deg"></i> Useful Links</h5>
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

## 🚀 Development

### Installation

```bash
# Navigate to project directory
cd bootstrap-nwjs-app

# Install dependencies
npm install

# Install NW.js globally (one-time setup)
npm install -g nw
```

### Test in Browser

```bash
npm run dev
```

Open: **http://localhost:8080**

### Run as Desktop App

```bash
npm start
```

## 🗜️ Packaging as .nw File

NW.js can run applications packaged as `.nw` files, which are simply renamed ZIP archives. This is a quick way to distribute your app.

### Step-by-Step: Create .nw Package

**Important:** Before packaging, make sure `node_modules` is installed!

#### Method 1: Command Line

**Linux / macOS:**
```bash
# Navigate to your project directory
cd bootstrap-nwjs-app

# Install dependencies if not already done
npm install

# Create ZIP archive of all project files
zip -r ../myapp.zip .

# Rename .zip to .nw
mv ../myapp.zip ../myapp.nw

# Run the .nw file
nw ../myapp.nw
```

**Windows (PowerShell):**
```powershell
# Navigate to your project directory
cd bootstrap-nwjs-app

# Install dependencies if not already done
npm install

# Create ZIP archive (using Compress-Archive)
Compress-Archive -Path * -DestinationPath ..\myapp.zip

# Rename .zip to .nw
Rename-Item ..\myapp.zip myapp.nw

# Run the .nw file
nw ..\myapp.nw
```

**Windows (Command Prompt with 7-Zip):**
```cmd
cd bootstrap-nwjs-app
npm install
7z a -tzip ..\myapp.zip *
ren ..\myapp.zip myapp.nw
nw ..\myapp.nw
```

#### Method 2: GUI (All Platforms)

1. **Ensure dependencies are installed:**
   ```bash
   cd bootstrap-nwjs-app
   npm install
   ```

2. **Create ZIP archive:**
   - Select all files and folders in `bootstrap-nwjs-app/`
   - Right-click → "Compress" / "Send to → Compressed folder" / "Add to archive"
   - Name it `myapp.zip`

3. **Rename the file:**
   - Change extension from `.zip` to `.nw`
   - On Windows: Make sure "File name extensions" is visible in File Explorer
   - Result: `myapp.nw`

4. **Run the package:**
   ```bash
   nw myapp.nw
   ```

### What to Include in .nw Package

✅ **Must include:**
- `package.json` (required!)
- `server.js`
- `node_modules/` (with all dependencies installed)
- `views/` folder (all EJS templates)
- `public/` folder (static files)

❌ **Exclude (optional):**
- `README.md`
- `.git/` directory
- `build/` directory
- `.gitignore`
- Development files

### Distribution Options

**Option 1: Standalone .nw file**
- Share the `.nw` file
- Users need NW.js installed
- Small file size
- Run with: `nw myapp.nw`

**Option 2: Bundle with NW.js executable**
- Combine `.nw` with NW.js binary
- No separate NW.js installation needed
- Larger file size
- Platform-specific

**Linux / macOS:**
```bash
cat /path/to/nw myapp.nw > myapp && chmod +x myapp
```

**Windows:**
```cmd
copy /b nw.exe+myapp.nw myapp.exe
```

## 📦 Build & Distribution (Production)

For production-ready builds with proper executables:

### Install NW-Builder

```bash
npm install -g nw-builder
```

### Create Platform-Specific Builds

```bash
# Windows
npm run build:win

# macOS
npm run build:mac

# Linux
npm run build:linux

# All platforms
npm run build:all
```

The compiled builds will be in the `build/` directory with complete executables.

## 🐛 Troubleshooting

### .nw File Won't Run

**Problem:** Double-clicking `.nw` file doesn't work

**Solution:**
- Ensure NW.js is installed: `npm install -g nw`
- Run from command line: `nw myapp.nw`
- Check that `package.json` exists in the .nw archive
- Verify `node_modules` is included and complete

### Missing Dependencies Error

**Problem:** App crashes with "Cannot find module" error

**Solution:**
```bash
# Re-install dependencies before packaging
cd bootstrap-nwjs-app
rm -rf node_modules
npm install
# Then create .nw package again
```

### Port 8080 Already in Use

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

Or change the port in `server.js`:
```javascript
app.listen(3000); // Instead of 8080
```

### ZIP Archive Too Large

**Solution:** Exclude unnecessary files:
```bash
# Linux / macOS - exclude files when creating ZIP
zip -r myapp.zip . -x "*.git*" "*.md" "build/*"
```

### NW.js Not Found

**Solution:**
```bash
# Install NW.js globally
npm install -g nw

# Or install locally in project
npm install nw --save-dev
```

## 🎯 Quick Reference

### Development Workflow

```bash
# 1. Create project
npm install

# 2. Test in browser
npm run dev

# 3. Test as desktop app
npm start

# 4. Create .nw package
zip -r myapp.zip .
mv myapp.zip myapp.nw

# 5. Run .nw package
nw myapp.nw

# 6. Build for production (optional)
npm run build:all
```

### File Size Comparison

| Method | Size | Pros | Cons |
|--------|------|------|------|
| .nw file | ~5-20 MB | Small, portable | Requires NW.js |
| Bundled .nw + NW.js | ~100-150 MB | Standalone | Larger |
| nw-builder output | ~100-200 MB | Production-ready | Largest |

## 📝 License

MIT License © 2025 Martin Imle

**Support:** m.imle@gmx.net (PayPal)

---

**⭐ If you find this project useful, please give it a star!**

Eine vollständige deutsche Anleitung finden Sie in der Datei `README_DE.md`.

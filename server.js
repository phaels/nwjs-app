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

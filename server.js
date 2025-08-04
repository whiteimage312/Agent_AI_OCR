const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware pentru servirea fișierelor statice
app.use(express.static(path.join(__dirname, 'public')));

// Ruta principală
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Ruta pentru verificarea stării serverului
app.get('/health', (req, res) => {
    res.json({ 
        status: 'OK', 
        message: 'Agent AI OCR funcționează corect!',
        timestamp: new Date().toISOString()
    });
});

// Middleware pentru gestionarea erorilor 404
app.use((req, res) => {
    res.status(404).json({ 
        error: 'Pagina nu a fost găsită',
        message: 'Te rugăm să accesezi pagina principală'
    });
});

// Pornirea serverului
app.listen(PORT, () => {
    console.log(`🚀 Agent AI OCR rulează pe portul ${PORT}`);
    console.log(`📱 Acces local: http://localhost:${PORT}`);
    console.log(`🌐 Aplicația este gata pentru deployment pe Render.com`);
});

module.exports = app;
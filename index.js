const express = require('express');
const app = express();
const PORT = 5000;
const db = require('./models');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));


db.sequelize.sync()
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Server started on port ${PORT}`);
        });
    })
    .catch((err) => {
        console.log('Database connection error:', err);
    });



app.post('/kandang', async (req, res) => {
    try {
        const kandang = await db.kandang.create(req.body);
        res.status(201).json(kandang);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});


app.get('/kandang', async (req, res) => {
    try {
        const kandang = await db.kandang.findAll();
        res.json(kandang);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});


app.put('/kandang/:id', async (req, res) => {
    try {
        const kandang = await db.kandang.findByPk(req.params.id);
        if (!kandang) return res.status(404).json({ message: 'kandang tidak ditemukan' });

        await kandang.update(req.body);
        res.json({ message: 'kandang berhasil diupdate', kandang });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});


app.delete('/kandang/:id', async (req, res) => {
    try {
        const kandang = await db.kandang.findByPk(req.params.id);
        if (!kandang) return res.status(404).json({ message: 'kandang tidak ditemukan' });

        await kandang.destroy();
        res.json({ message: 'kandang berhasil dihapus' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});


app.get('/', (req, res) => {
    res.send('Server berjalan dan siap CRUD data kandang');
});

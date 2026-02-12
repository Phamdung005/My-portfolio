const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json()); // đọc dữ liệu JSON từ request body

// route kiểm tra server
app.get('/', (req, res) => {
    res.send('backend đang chạy');
});

app.listen(PORT, () => {
    console.log(`Server đang chạy trên cổng - ${PORT}`);
});
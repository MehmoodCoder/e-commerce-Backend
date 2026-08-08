import app from "./app.js";


import dotenv from 'dotenv'

dotenv.config({ path: './config/config.env' });

const PORT = process.dotenv.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
})
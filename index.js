const express = require("express");
const cors = require("cors");  
const app  = express();
const PORT = 3000;

app.use(cors());
app.get("/api/data", (req, res) => {
res.json({message: "hello from Express Backend", time: new Date() });
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
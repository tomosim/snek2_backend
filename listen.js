const app = require("./app");
const PORT = process.env.PORT || 9090;
app.listen(9090, () => console.log(`listening on port ${PORT}`));

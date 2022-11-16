import express from "express";
import about from "./pages/about";
import activity from "./pages/activity";
import project from "./pages/project";
import site from "./pages/site";
import bodyParser from "body-parser";

const app = express();
const PORT = 8080;

app.use(bodyParser.urlencoded({ extended: false }));

app.use("/about", about);
app.use("/activity", activity);
app.use("/project", project);
app.use("/site", site);

app.listen(PORT, () => {
    console.log(`Express server running on http://localhost:${PORT}`);
});

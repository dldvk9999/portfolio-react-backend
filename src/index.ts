import express from "express";
import about from "./pages/about";
import activity from "./pages/activity";
import project from "./pages/project";
import site from "./pages/site";
import bodyParser from "body-parser";
import cors from "cors";

let corsOptions = {
    origin: "https://portfolio-react-next-dldvk9999.vercel.app/", // 출처 허용 옵션
    credential: true, // 사용자 인증이 필요한 리소스(쿠키 ..등) 접근
};

const app = express();
const PORT = 8080;

app.use(bodyParser.urlencoded({ extended: false }));

app.use(cors(corsOptions));
app.use("/about", about);
app.use("/activity", activity);
app.use("/project", project);
app.use("/site", site);

app.listen(process.env.PORT || PORT, () => {
    console.log(`Express server running on http://localhost:${PORT}`);
});

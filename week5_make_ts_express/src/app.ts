import express from "express";

const app: express.Express = express();

const port: number = 3001;
// const {
//   getRestaurants,
//   getRestaurantsByName,
//   createRestaurant,
//   deleteRestaurantByName,
//   updateRestaurantByName,
// } = require("./restaurant/restaurant.router");

//초기 미들웨어 설정
// app.use((req, res, next) => {
//   console.log("logging for routes");
//   next();
// });

//json읽을 수 있는 미들웨어 추가
// app.use(express.json());

// app.get("/restaurants", getRestaurants); //당연히 () 실행하면 안됨
// app.get("/restaurants/:restname", getRestaurantsByName);
// app.post("/restaurants", createRestaurant);
// app.delete("/restaurants/:restname", deleteRestaurantByName);
// app.put("/restaurants/:restname", updateRestaurantByName);

app.use((req, res, next) => {
  res.send("ERROR: 404 Not Found Error");
});
app.listen(port, () => {
  console.log(`server is running on ${port}`);
});
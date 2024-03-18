import express from "express";
import { json } from "express";
const app = express();
app.use(express.json());
let odd_number = [];
let even_number = [];
let alphabets = [];

app.get("/",(req,res)=>{
  res.send("Hi there")
})

app.post("/bfhl", (req, res) => {
  const arr = req.body.data;
  for (let i of arr) {
    if ((i >= "A" && i <= "Z") || (i >= "a" && i <= "z")) {
      alphabets.push(i.toUpperCase());
    } else if (i % 2 == 0) {
      even_number.push(i);
    } else {
      odd_number.push(i);
    }
  }
  const user_id = "Samarth_jain_30032003";
  const email = "samarthjain@gmail.com";
  const roll = "2110991248";

  const data = { user_id, email, roll, odd_number, even_number, alphabets };
  console.log(data);
  res.send(data);
});

app.listen(8000, () => {
  console.log("Server is running on port 8000");
});

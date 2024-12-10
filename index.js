import express from "express";
import { Student } from "./schema.js";

const app = express();

app.use("/", express.static("public", { index: ["index.html"] }));
app.use(express.json());

app.get("/students", async (req, res) => {
	const data = await Student.find();
	res.send(data);
});

app.post("/students", async (req, res) => {
	const data = new Student(req.body);
	const inserted = await data.save();
	res.send(inserted);
});

app.delete("/students/:id", async (req, res) => {
	const id = req.params.id;
	const deleted = await Student.findByIdAndDelete(id);
	res.send(deleted);
});

app.put("/students/:id", async (req, res) => {
	const id = req.params.id;
	const body = req.body;
	const updatedData = await Student.findByIdAndUpdate(id, body);
	res.send(updatedData);
});

app.listen(3000, () => console.log("Server is ready"));

import mongoose, { Schema } from "mongoose";
mongoose.connect(
	process.env.DBURL
);

const studentSchema = new Schema({
	name: {
		type: String,
		require: true,
	},
	age: {
		type: Number,
		require: true,
	},
	grade: {
		type: String,
		require: true,
	},
});

export const Student = mongoose.model("Student", studentSchema);

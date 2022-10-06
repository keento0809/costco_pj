import mongoose from "mongoose";

interface Schedule {
    scheduleId: string,
    borrowerId: string,
    holderId: string,
    date: Date,
    costcoPlace: string
}

const scheduleSchema = new mongoose.Schema<Schedule>(
    {
        scheduleId: {
            type: String,
            required: true,
        },
        borrowerId: {
            type: String,
            required: true
        },
        holderId: {
            type: String,
            required: true
        },
        date: {
            type: Date,
            required: true
        },
        costcoPlace: {
            type: String,
            required: true
        }
    }
);

export default mongoose.model("Schedule", scheduleSchema)
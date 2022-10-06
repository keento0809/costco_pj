import mongoose from "mongoose";

interface Review {
    reviewId: string;
    holderId: string;
    date: Date;
    description: string;
    rating: number;
}

const reviewSchema = new mongoose.Schema<Review>(
    {
        reviewId: {
            type: String,
            required: true
        },
        holderId: {
            type: String,
            required: true
        },
        date: {
            type: Date,
            required: [true, "Please fill in the date you went to Costco"]
        },
        description: {
            type: String,
            trim: true,
            minlength: [5, "description must be above 5 characters"]
        },
        rating: {
            type: Number,
            min: [1, 'Rating must be above 1.0'],
            max: [5, 'Rating must be below 5.0'],
            required: true
        }
    }
);

export  default mongoose.model('Review', reviewSchema)
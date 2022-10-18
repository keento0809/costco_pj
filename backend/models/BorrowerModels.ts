import {User} from "./AuthModels"
import mongoose from "mongoose";
import {genSalt, hash} from "bcrypt";

const borrowerSchema = new mongoose.Schema<User>(
    {
        _id: {
            type: mongoose.Schema.Types.ObjectId,
            require: true,
        },
        name: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
        },
        password: {
            type: String,
            required: true,
        },
        confirmPassword: {
            type: String,
            required: true,
            validate: {
                validator: function(this: User, item: String): boolean{
                    return this.password === item
                },
                message: "Password don't match."
            }
        },
        avatar: {
            type: String,
            required: false,
        },
        socialMediaLinks: {
            type: [],
            required: false,
        },
        histories: {
            type: [],
            required: false,
        },
        type: {
            type: String,
            required: true
        }
    },
    {timestamps: true}
);

borrowerSchema.pre("save", async function(next) {
    if(!this.isModified("password")) return next();
    const salt = await genSalt(12)
    const hashedPassword = await hash(this.password, salt)
    this.password = hashedPassword;
    this.confirmPassword = undefined;
    next();
})


export default mongoose.model("Borrower", borrowerSchema);

import {User} from "./AuthModels"
import mongoose, {Document, Schema} from "mongoose";
import bcrypt, {genSalt, hash} from "bcrypt";

const borrowerSchema = new mongoose.Schema<User>(
    {
        // _id: {
        //     type: mongoose.Types.ObjectId,
        //     require: true,
        // },
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
                validator: function (this: User, item: String): boolean {
                    return this.password === item
                },
                message: "Password don't match."
            }
        },
        avatar: {
            type: String,
            required: false,
        },
        passwordChangedAt: Date,
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


borrowerSchema.pre("save", async function (next) {
    if (!this.isModified("password")) return next();
    const salt = await genSalt(12)
    const hashedPassword = await hash(this.password, salt)
    this.password = hashedPassword;
    this.confirmPassword = undefined;
    next();
})

borrowerSchema.methods.checkPassword = async function (userPassword: string): Promise<boolean> {
    const result = await bcrypt.compare(userPassword, this.password);
    return result;
}

borrowerSchema.methods.passwordChanged = function (tokenIat: any): boolean {
    if (this.passwordChangedAt) {
        const changeTimestamp = parseInt(
            (this.passwordChangedAt.getTime() / 1000).toString(),
            10
        );
        //True = password Changed after token issued
        return tokenIat < changeTimestamp
    }
    return false;
}

export default mongoose.model<User>("Borrower", borrowerSchema);

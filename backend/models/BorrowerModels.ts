import {User} from "./AuthModels"
import mongoose from "mongoose";
import bcrypt, {genSalt, hash} from "bcrypt";
import Borrower from "./Borrower.i";
import crypto from "crypto";


const borrowerSchema = new mongoose.Schema<Borrower>(
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
        passwordChangedAt: Number,
        passwordResetToken: String,
        passwordResetExpires: Date,
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
            enum: ["borrower", "holder"],
            required: true
        },
        nextSchedules: {
            type: [],
            required: false
        },
        favourite: {
            type: [],
            required: false
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

borrowerSchema.pre("save", function(next){
    if(!this.isModified("password" || this.isNew)) return next();
    this.passwordChangedAt = Date.now();
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

borrowerSchema.methods.issuePasswordResetToken = function () {
    const resetToken = crypto.randomBytes(32).toString('hex');

    this.passwordResetToken = crypto
        .createHash('sha256')
        .update(resetToken)
        .digest('hex');

    console.log(resetToken)

    this.passwordResetExpires = Date.now() + 10 * 60 * 1000;
    return resetToken;
}

export default mongoose.model<User>("Borrower", borrowerSchema);

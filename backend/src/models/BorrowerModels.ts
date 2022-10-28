import {User} from "./UserModel"
import mongoose from "mongoose";
import bcrypt, {genSalt, hash} from "bcrypt";

import crypto from "crypto";

const borrowerSchema = new mongoose.Schema<User>(
    {
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
        active: {
            type: Boolean,
            default: true,
            // select: false
        },
        passwordChangedAt: Date,
        passwordResetToken: String,
        passwordResetExpires: Date,
        socialMediaLinks: {
            type: [],
            required: false,
        },
        histories: {
            type: [],
        },
        type: {
            type: String,
            enum: ["borrower", "holder"],
            required: true
        },
        schedules: {
            type: [],
            required: false
        },
        favourites: {
            type: [],
            required: false
        }
    },
    {timestamps: true}
)

borrowerSchema.pre("save", async function (next) {
    if (!this.isModified("password")) return next();
    const salt = await genSalt(12)
    const hashedPassword = await hash(this.password, salt)
    this.password = hashedPassword;
    this.confirmPassword = hashedPassword;
    next();
})

borrowerSchema.pre("save", function (next) {
    if (!this.isModified("password" || this.isNew)) return next();
    this.passwordChangedAt = new Date();
    next();
})

/**
 * TODO: modify method to accept all function which starts with "find"
 */

borrowerSchema.pre("find",  function(next) {
    this.find({active : true});
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

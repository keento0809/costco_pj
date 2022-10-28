import mongoose, {model, Schema, Types} from "mongoose";
import {User} from "./UserModel";
import bcrypt, {genSalt, hash} from "bcrypt";
import crypto from "crypto";
import {validateEmail} from "../helpers/auth_helper";


const userSchema = new Schema<User>({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        validate: [validateEmail, "invalid email."]
    },
    phone: {
        type: String,
        required: true,
        unique: true
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
    type: {
        type: String,
        enum: ["borrower", "holder"],
        required: true
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
    histories: {
        type: [],
    },
    socialMediaLinks: {
        type: Object
    },
    schedules: [
        {
            type: Types.ObjectId,
            ref: "Schedules"
        }
    ],
    description: String,
    location: Object,
    followers:[
        {
            type: Types.ObjectId,
            ref: "borrowers"
        }
    ],
    reviews: [
        {
            type: Types.ObjectId,
            ref: "Reviews"
        }
    ],
    favourites: [
        {
            type: Types.ObjectId,
            ref: "holders"
        }
    ]
}, {timestamps: true})

userSchema.pre("save", async function (next) {
    if (!this.isModified("password")) return next();
    const salt = await genSalt(12)
    const hashedPassword = await hash(this.password, salt)
    this.password = hashedPassword;
    this.confirmPassword = hashedPassword;
    next();
})

userSchema.pre("save", function (next) {
    if (!this.isModified("password" || this.isNew)) {
        return next();
    }
    this.passwordChangedAt = new Date();
    next();
})

/**
 * TODO: modify method to accept all function which starts with "find"
 */

// userSchema.pre(/^find/,  function(next) {
//     this.find({active : true});
//     next();
// })

userSchema.methods.checkPassword = async function (userPassword: string): Promise<boolean> {
    const result = await bcrypt.compare(userPassword, this.password);
    return result;
}

userSchema.methods.passwordChanged = function (tokenIat: any): boolean {
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

userSchema.methods.issuePasswordResetToken = function () {
    const resetToken = crypto.randomBytes(32).toString('hex');

    this.passwordResetToken = crypto
        .createHash('sha256')
        .update(resetToken)
        .digest('hex');

    console.log(resetToken)

    this.passwordResetExpires = Date.now() + 10 * 60 * 1000;
    return resetToken;
}

export const borrowers = model<User>("Borrowers", userSchema);
export const holders = model<User>("Holder", userSchema);
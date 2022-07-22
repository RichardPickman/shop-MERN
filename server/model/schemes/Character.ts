import mongoose from "mongoose";

const characterSchema = new mongoose.Schema({
    name: String,
    surname: String,
    shortcut: String,
    thumbnail: String,
    bornDate: Number,
    nicknames: [String],
    status: String,
    season: [Number]
});

const charModel = mongoose.model('characters', characterSchema)

export default charModel;

import { InferSchemaType, model, Schema } from "mongoose";

const urlSchema = new Schema({
    urlId: { type: String, required: true, unique: true },
    longUrl: { type: String, required: true, unique: true },
    shortUrl: { type: String, required: true, unique: true },

}, {
    timestamps: true,
});

export type Url = InferSchemaType<typeof urlSchema>;

export default model<Url>("ShortUrl", urlSchema);
import { InferSchemaType, model, Schema } from "mongoose";

const urlSchema = new Schema({
    urlId: { type: String, required: true, unique: true, index: true },
    longUrl: { type: String, required: true, unique: true },
    shortUrl: { type: String, required: true, unique: true },

}, {
    timestamps: true,
});
urlSchema.index({urlId: 1});
export type Url = InferSchemaType<typeof urlSchema>;

export default model<Url>("ShortUrl", urlSchema);
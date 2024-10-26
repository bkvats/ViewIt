import mongoose from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";
const videoSchema = new mongoose.Schema({
    videoFiles: {
        type: [
            {
                url: {
                    type: String
                },
                language: {
                    type: String,
                    required: true,
                    default: "Not Available"
                }
            }
        ],
        required: true
    },
    thumbnail: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    duration: {
        type: Number,
        required: true
    },
    comment: {
        type: [
            {
                content: {
                    type: String,
                    required: true
                },
                owner: {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: "User"
                },
                language: {
                    type: String,
                    required: true,
                    default: "Not Available"
                },
                replies: {
                    type: [String]
                }
            }
        ]
    },
    views: {
        type: Number,
        required: true,
        default: 0
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    isPublished: {
        type: Boolean,
        required: true,
        default: true
    }
}, {timestamps: true});
videoSchema.plugin(mongooseAggregatePaginate)
export const Video = mongoose.model("Video", videoSchema);
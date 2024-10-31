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
                },
                likes: {
                    type: Number,
                    required: true,
                    default: 0
                }
            }
        ]
    },
    views: {
        type: [
            {
                viewedBy: {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: "User"
                },
                viewedAt: {
                    type: Date,
                    required: true,
                    default: Date.now()
                },
                viewedTill: {
                    type: Number,
                    required: true,
                    default: 0
                }
            }
        ]
    },
    likes: {
        type: [
            {
                likedBy: {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: "User"
                }
            }
        ]
    },
    owners: {
        type: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "User"
            }
        ]
    },
    visibility: {
        type: String,
        enum: ["Private","Unlisted", "Public"],
        required: true
    }
}, { timestamps: true });
videoSchema.plugin(mongooseAggregatePaginate)
export const Video = mongoose.model("Video", videoSchema);
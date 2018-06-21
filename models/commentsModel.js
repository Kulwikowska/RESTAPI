import mongoose from 'mongoose';

const commentsSchema = mongoose.Schema({
    text: String,
    movie: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Movie'
    }
})

export default mongoose.model('Comment', commentsSchema);
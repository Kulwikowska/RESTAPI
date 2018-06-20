import mongoose from('mongoose');

const commentsSchema = mongoose.Schema({
    text: String,
})

export default mongoose.model('Comments', commentsSchema);
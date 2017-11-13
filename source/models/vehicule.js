import mongoose from 'mongoose'

const Schema = mongoose.Schema

const vehicleSchema = new Schema({
  brand: {
    type: String,
    required: true
  },
  model: {
    type: String,
    required: true
  },
  licensePlate: {
    type: String,
    required: true
  },
  color: {
    type: String,
    required: true
  },
  amount: {
    type: Number,
    required: false
  }
}, {
  collection: 'vehicle',
  timestamps: true
})

export default mongoose.model('vehicle', vehicleSchema)

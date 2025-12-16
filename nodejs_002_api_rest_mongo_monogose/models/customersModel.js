const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//5. modelo customers
const customersSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
    unique: true,
    match: [/.+@.+\..+/, 'Correo inválido'],
  },
  tel: {
    type: String,
    trim: true,
  },
  address: {
    type: String,
    trim: true,
  },
  kind: {
    type: String,
    enum: ['persona', 'empresa'],
    default: 'persona',
  },
  category: {
    type: String,
    enum: ['normal', 'vip', 'premium'],
    default: 'normal',
  },
  registerDate: {
    type: Date,
    default: Date.now,
  },
}, {
  versionKey: false,
  timestamps: true,
});

module.exports = mongoose.model('Customer', customersSchema);


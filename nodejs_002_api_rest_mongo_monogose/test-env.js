const dotenv = require('dotenv');

const result = dotenv.config();

if (result.error) {
  console.error('❌ Error cargando .env:', result.error);
} else {
  console.log('✅ Archivo .env cargado correctamente:', result.parsed);
  console.log('MONGO_URI:', process.env.MONGO_URI);
}

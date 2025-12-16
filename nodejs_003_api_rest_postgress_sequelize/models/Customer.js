import {DataTypes} from "sequelize";
import {sequelize} from "../config/db.js";


//5 modelo de customers
export const Customer = sequelize.define('Customer', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING(100),
    allowNull: false
  },
  email: {
    type: DataTypes.STRING(150),
    allowNull: false,
    unique: true
  },
  tel: {
    type: DataTypes.STRING(20),
    allowNull: true
  },
  address: {
    type: DataTypes.STRING(200),
    allowNull: true
  },
  kind: {
    type: DataTypes.STRING(20),
    defaultValue: 'persona',
    validate: {
      isIn: [['persona', 'empresa']]
    }
  },
  category: {
    type: DataTypes.STRING(20),
    defaultValue: 'normal',
    validate: {
      isIn: [['normal', 'vip', 'premium']]
    }
  },
  registerDate: {
    type: DataTypes.DATE,
    field: 'register_date',
    defaultValue: DataTypes.NOW
  }
}, {
  tableName: 'customers',      
  timestamps: false             
});
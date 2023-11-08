import { Model, DataTypes } from 'sequelize';
import sequelize from '../db/connection'; // This would be your Sequelize connection file

export class User extends Model {
    public id!: number; // Note that the `null assertion` `!` is used in typescript
    public role!: string;
    public email!: string;
    public password!: string; // Make sure to hash passwords before storage
    // ... other fields like name, etc.
}

User.init({
    id: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
    },
    role: {
        type: new DataTypes.STRING(128),
        allowNull: false,
    },
    email: {
        type: new DataTypes.STRING(128),
        allowNull: false,
        unique: true,
    },
    password: {
        type: new DataTypes.STRING(128),
        allowNull: false,
    },
    // ... other fields
}, {
    tableName: 'users',
    sequelize: sequelize, // passing the `sequelize` instance is required
});

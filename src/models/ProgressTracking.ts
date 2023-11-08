import { Model, DataTypes } from 'sequelize';
import sequelize from '../db/connection';
import { User } from './User';

export class ProgressTracking extends Model {
    public id!: number;
    public userId!: number; // Foreign key to User model
    public flashCardSetId!: number; // Foreign key to FlashCardSet model
    public score?: number;
    // ... other relevant fields like timestamps, etc.
}

ProgressTracking.init({
    id: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
    },
    userId: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
    },
    flashCardSetId: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
    },
    score: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: true,
    },
    // ... other relevant fields
}, {
    tableName: 'progressTracking',
    sequelize: sequelize,
});

// Relations
ProgressTracking.belongsTo(User, { foreignKey: 'userId' });
ProgressTracking.belongsTo(FlashCardSet, { foreignKey: 'flashCardSetId' });
User.hasMany(ProgressTracking, { foreignKey: 'userId' });
FlashCardSet.hasMany(ProgressTracking, { foreignKey: 'flashCardSetId' });

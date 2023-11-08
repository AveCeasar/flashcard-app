import { Model, DataTypes } from 'sequelize';
import sequelize from '../db/connection';
import { User } from './User'; // Assuming you have a User model defined

export class FlashCardSet extends Model {
    public id!: number;
    public title!: string;
    public description?: string;
    public isPublic!: boolean;
    public userId!: number; // Foreign key to User model
    // ... other relevant fields
}

FlashCardSet.init({
    id: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
    },
    title: {
        type: new DataTypes.STRING(128),
        allowNull: false,
    },
    description: {
        type: new DataTypes.STRING(255),
        allowNull: true,
    },
    isPublic: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
    },
    userId: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
    },
    // ... other relevant fields
}, {
    tableName: 'flashCardSets',
    sequelize: sequelize,
});

// Relations
FlashCardSet.belongsTo(User, { foreignKey: 'userId' });
User.hasMany(FlashCardSet, { foreignKey: 'userId' });

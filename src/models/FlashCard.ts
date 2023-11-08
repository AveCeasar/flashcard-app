import { Model, DataTypes } from 'sequelize';
import sequelize from '../db/connection';
import { FlashCardSet } from './FlashCardSet'; // Assuming you have a FlashCardSet model defined

export class FlashCard extends Model {
    public id!: number;
    public term!: string;
    public definition!: string;
    public flashCardSetId!: number; // Foreign key to FlashCardSet model
    // ... other relevant fields
}

FlashCard.init({
    id: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
    },
    term: {
        type: new DataTypes.STRING(128),
        allowNull: false,
    },
    definition: {
        type: new DataTypes.STRING(255),
        allowNull: false,
    },
    flashCardSetId: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
    },
    // ... other relevant fields
}, {
    tableName: 'flashCards',
    sequelize: sequelize,
});

// Relations
FlashCard.belongsTo(FlashCardSet, { foreignKey: 'flashCardSetId' });
FlashCardSet.hasMany(FlashCard, { foreignKey: 'flashCardSetId' });

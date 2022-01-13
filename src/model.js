
export const User = (sequelize, type) => {
    return sequelize.define('users',{    
        id:{
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },    
        name:{
            type:type.STRING,
            allowNull: false
        },
        age:{
            type:type.INTEGER,
            allowNull: false
        }        
    },{
        timestamps: true,
        paranoid: true,
        // tableName: 
    })
};
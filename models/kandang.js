module.exports = (sequelize, DataTypes) => {
    const kandang = sequelize.define('kandang', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        nama_hewan: {
            type: DataTypes.STRING,
            allowNull: false
        },
        nama_petugas: {
            type: DataTypes.STRING,
            allowNull: false
        },
        usia_hewan: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        jenis_hewan: {
            type: DataTypes.STRING,
            allowNull: false
        },
        tahun_lahir: {
            type: DataTypes.DATE,
            allowNull: false
        }
    }, {
        tableName: 'kandang',
        timestamps: true
    });
    return kandang;
};

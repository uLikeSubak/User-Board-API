const Sequelize = require('sequelize');

module.exports = class Post extends Sequelize.Model {
    static init(sequelize) {
      return super.init({
        title: {
          type: Sequelize.STRING(40),
          allowNull: false,
        },
        content: {
          type: Sequelize.STRING(220),
          allowNull: false,
        },
        imgUrl: {
          type: Sequelize.STRING(40),
          allowNull: true,
        },
        videoUrl: {
          type: Sequelize.STRING(40),
          allowNull: true,
        },
        // img: {
        //   type: Sequelize.STRING(200),
        //   allowNull: true,
        // },
      }, {
        sequelize,
        timestamps: true,
        underscored: false,
        modelName: 'Post',
        tableName: 'posts',
        paranoid: false,
        charset: 'utf8mb4',
        collate: 'utf8mb4_general_ci',
      });
    }
  
    static associate(db) {
      db.Post.belongsTo(db.User);
    //   db.Post.belongsToMany(db.Hashtag, { through: 'PostHashtag' });
      db.Post.hasMany(db.Comment);
    }
  };
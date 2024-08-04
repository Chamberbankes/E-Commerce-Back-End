// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Product.belongsTo(Category, {
  foreignKey: 'categoryId',
  as: 'products'
});
// Categories have many Products
Category.hasMany(Product, {
  foreignKey: 'categoryId',
  as: 'products'
});
// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, {
  through: ProductTag,
  foreignKey: 'productId',
  as: 'tags',
});
// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, {
  through: ProductTag,
  foreignKey: 'tagId',
  as: 'products',
});
module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};

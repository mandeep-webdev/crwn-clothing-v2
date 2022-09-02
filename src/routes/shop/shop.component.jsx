import { useContext } from 'react';

import ProductCard from '../../components/product-card/product-card.component';

import { ProductsContext } from '../../contexts/products.context';

import './shop.styles.scss';

const Shop = () => {
  const { products } = useContext(ProductsContext);

  return (
    <div className="products-container">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Shop;
// import { Routes, Route } from 'react-router-dom';

// import CategoriesPreview from '../categories-preview/categories-preview.component';
// import Category from '../category/category.component';

// import './shop.styles.scss';

// const Shop = () => {
//   return (
//     <Routes>
//       <Route index element={<CategoriesPreview />} />
//       <Route path=":category" element={<Category />} />
//     </Routes>
//   );
// };

// export default Shop;

// import { useEffect } from 'react';
// import { Routes, Route } from 'react-router-dom';
// import { useDispatch } from 'react-redux';
// import { getCategoriesAndDocuments } from '../../utils/firebase/firebase.utils';

// import { setCategories } from '../../store/categories/categories.action';

// import CategoriesPreview from '../categories-preview/categories-preview.component';
// import Category from '../category/category.component';

// const Shop = () => {
//   const dispatch = useDispatch();

//   useEffect(() => {
//     const getCategories = async () => {
//       const categoriesArray = await getCategoriesAndDocuments('categories');
//       dispatch(setCategories(categoriesArray));
//     };

//     getCategories();
//   }, []);

//   return (
//     <Routes>
//       <Route index element={<CategoriesPreview />} />
//       <Route path=":category" element={<Category />} />
//     </Routes>
//   );
// };

// export default Shop;

import React, { useState } from 'react'
import ProductsCardHeader from './ProductsCardHeader'
import ProductsList from './ProductsList'
const products = [
  {
    id: 1,
    image: 'https://www.apple.com/newsroom/images/product/iphone/standard/Apple_iphone13_design_09142021.jpg.og.jpg?202310101607',
    title: 'iPhone 13',
    info: 'Latest model',
    stock: 10,
    price: 999.99,
    sales: 50
  },
  {
    id: 2,
    image: 'https://images.news18.com/ibnlive/uploads/2021/02/1613657806_samsung-galaxy-s21-1-2.jpg?im=FitAndFill=(1200,675)',
    title: 'Samsung Galaxy S21',
    info: 'Flagship phone',
    stock: 5,
    price: 799.99,
    sales: 30
  },
  {
    id: 3,
    image: 'https://m.media-amazon.com/images/I/81L7xr3NeHL.jpg',
    title: 'Sony 65" 4K Smart TV',
    info: 'Limited stock',
    stock: 3,
    price: 799.99,
    sales: 20
  },
  {
    id: 4,
    image: 'https://www.apple.com/newsroom/images/product/mac/standard/Apple-MacBook-Pro-M2-Pro-and-M2-Max-hero-230117.jpg.og.jpg?202310101641',
    title: 'Apple MacBook Pro',
    info: 'Bestseller',
    stock: 15,
    price: 1499.99,
    sales: 100
  },
  {
    id: 5,
    image: 'https://m.media-amazon.com/images/I/51MsRttoBnL.jpg',
    title: 'Bose Noise-Cancelling Headphones',
    info: 'Premium audio',
    stock: 8,
    price: 299.99,
    sales: 10
  },
  {
    id: 6,
    image: 'https://www.digitaltrends.com/wp-content/uploads/2017/04/Canon-Rebel-T7i-Product-10.jpg?resize=625%2C417&p=1',
    title: 'Canon EOS Rebel T7i',
    info: 'DSLR camera',
    stock: 7,
    price: 699.99,
    sales: 15
  },
  {
    id: 7,
    image: 'https://images.jdmagicbox.com/quickquotes/images_main/dell-laptops-22-02-2022-056-270824238-quvdlqck.jpg',
    title: 'Dell XPS 13 Laptop',
    info: 'Ultra-thin design',
    stock: 12,
    price: 1199.99,
    sales: 25
  },
  {
    id: 8,
    image: 'https://i.gadgets360cdn.com/products/large/1549526400_635_nintendo_switch_db.jpg?downsize=*:360',
    title: 'Nintendo Switch',
    info: 'Gaming console',
    stock: 20,
    price: 299.99,
    sales: 40
  },
  {
    id: 9,
    image: 'https://m.media-amazon.com/images/I/61EXU8BuGZL._AC_UF700,800_QL80_.jpg',
    title: 'Amazon Echo Dot',
    info: 'Smart speaker',
    stock: 30,
    price: 49.99,
    sales: 60
  },
  {
    id: 10,
    image: 'https://www.fitbit.com/global/content/dam/fitbit/english-metric/pdp/devices/versa-3/desktop/sep21-b-features-heart-fitness-en.jpg',
    title: 'Fitbit Versa 3',
    info: 'Fitness smartwatch',
    stock: 8,
    price: 199.99,
    sales: 18
  }
];
const ProductsCard = () => {
  const [fProducts, setFProducts] = useState(products)
  const [term, setTerm] = useState('')

  const onTermChange = (value) => {
    setTerm(value)
    setFProducts(() => {
      if(!value){
        return products
      }
      const newVal = products.filter(item => {
        if(item.title.toLowerCase().includes(value.toLowerCase()) || item.info.toLowerCase().includes(value.toLowerCase())){
          return true
        }
        return false
      })
      return newVal
    })
  }

  return (
    <div className='bg-white rounded-md mb-10'>
        <ProductsCardHeader term={term} setTerm={onTermChange} />
        <div className='w-full overflow-x-auto'>
          <ProductsList products={fProducts} />
        </div>
    </div>
  )
}

export default ProductsCard
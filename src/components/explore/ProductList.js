import React,{useEffect, useState} from 'react'
import ProductCard from './ProductCard'
import img1 from '../../assets/img/micon/1.png'
import img2 from '../../assets/img/micon/2.png'
import img3 from '../../assets/img/micon/3.png'
import img4 from '../../assets/img/micon/4.png'
import img5 from '../../assets/img/micon/5.png'
import img6 from '../../assets/img/micon/6.png'
// SVG ICON 
import svg from '../../assets/img/micon/1.svg'
import svg2 from '../../assets/img/micon/2.svg'
import svg3 from '../../assets/img/micon/3.svg'
import svg4 from '../../assets/img/micon/4.svg'
import svg5 from '../../assets/img/micon/5.svg'
import svg6 from '../../assets/img/micon/6.svg'


function ProductList() {

  const productArray = [
    {
      id:1,
      title:"Antique",
      rate:"0.234wETH",
      dis:"Highest bid 1/20",
      bgImage:require('../../assets/img/3/1.png'),
      catagory: 'product4'
    },
    {
      id:2,
      title:"Antique",
      rate:"0.234wETH",
      dis:"Highest bid 1/20",
      bgImage:require('../../assets/img/3/2.png'),
      catagory: 'product1'
    },
    {
      id:3,
      title:"Antique",
      rate:"0.234wETH",
      dis:"Highest bid 1/20",
      bgImage:require('../../assets/img/3/3.png'),
      catagory: 'product1'
    },
    {
      id:4,
      title:"Antique",
      rate:"0.234wETH",
      dis:"Highest bid 1/20",
      bgImage:require('../../assets/img/3/4.png'),
      catagory: 'product3'
    },
    {
      id:5,
      title:"Antique",
      rate:"0.234wETH",
      dis:"Highest bid 1/20",
      bgImage:require('../../assets/img/3/5.png'),
      catagory: 'product2'
    },
    {
      id:6,
      title:"Antique",
      rate:"0.234wETH",
      dis:"Highest bid 1/20",
      bgImage:require('../../assets/img/3/6.png'),
      catagory: 'product1'
    },
    {
      id:7,
      title:"Antique",
      rate:"0.234wETH",
      dis:"Highest bid 1/20",
      bgImage:require('../../assets/img/3/3.png'),
      catagory: 'product1'
    },
    {
      id:8,
      title:"Antique",
      rate:"0.234wETH",
      dis:"Highest bid 1/20",
      bgImage:require('../../assets/img/3/4.png'),
      catagory: 'product3'
    },
  
    {
      id:9,
      title:"Antique",
      rate:"0.234wETH",
      dis:"Highest bid 1/20",
      bgImage:require('../../assets/img/3/4.png'),
      catagory: 'product5'
    },
  
  ]

  const [ProductItem, setProductItem] = useState(productArray);

  const [selectCategory, setSelectCategory] = useState('')

  useEffect(function(){
    if(selectCategory !== '') {
      let filteredProduct = productArray;
      return setProductItem( filteredProduct.filter(el => { return el.catagory === selectCategory}))
    } else {
      return setProductItem(productArray)
    } 
  },[selectCategory]);

  return (

    <>
        <div className='grid grid-flow-row xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 xm:grid-cols-2 2xl:gap-8 sm:gap-6 xm:gap-4'>
          <div className="col-start-1 col-span-1 row-start-1 xl:row-span-3 lg:row-span-5 lg:col-span-1 md:col-span-2 sm:col-span-2 xm:col-span-2">
            <ul className="lg:mt-10 lg:block md:mt-0 md:mb-10 sm:mb-10 xm:mb-6 w-fit xm:grid xm:grid-flow-row md:grid-cols-3 xm:grid-cols-2 sm:grid-cols-2">
            <li className={`product-menu group ${selectCategory === '' && 'active'}`} onClick={() => setSelectCategory('')}>
              <img className='main-image' src={img1} alt='' />
              <img className='hover-image' src={svg} alt='' />
               All
               </li>
              <li className={`product-menu group ${selectCategory === 'product4' && 'active'}`} onClick={() => setSelectCategory('product4')}>
              <img className='main-image' src={img2} alt='' />
              <img className='hover-image' src={svg2} alt='' />
              Games
              </li>
              <li className={`product-menu group ${selectCategory === 'product3' && 'active'}`} onClick={() => setSelectCategory('product3')}>
              <img className='main-image' src={img3} alt='' />
              <img className='hover-image' src={svg3} alt='' />
              Music
              </li>
              <li className={`product-menu group ${selectCategory === 'product2' && 'active'}`} onClick={() => setSelectCategory('product2')}>
              <img className='main-image' src={img4} alt='' />
              <img className='hover-image' src={svg4} alt='' />
              Art
              </li>
              <li className={`product-menu group ${selectCategory === 'product5' && 'active'}`} onClick={() => setSelectCategory('product5')}>
              <img className='main-image' src={img5} alt='' />
              <img className='hover-image' src={svg5} alt='' />
              Photograph
              </li>
              <li className={`product-menu group ${selectCategory === 'product1' && 'active'}`} onClick={() => setSelectCategory('product1')}>
              <img className='mr-2 mt-[-6px] xm:w-10 xl:w-14 group-hover:invisible' src={img6} alt='' />
              <img className='hover-image' src={svg6} alt='' />
              Domain
              </li>
            </ul>
          </div>

          {ProductItem.map((item,id)=>{
            return(
              <div key={item.id}>
                  <ProductCard singleProductLink={item.id} title={item.title} rate={item.rate} dis={item.dis} bgImage={item.bgImage} item={item} key={item.id+id}/>
              </div>
            )
          })}
        
        </div>
    </>
  )
}

export default ProductList
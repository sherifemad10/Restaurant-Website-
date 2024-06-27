import './gallary.css'
import GrilledChickenBreast from '../../assets/Grilled Chicken Breast.jpg'
import ChickenCurry from '../../assets/Chicken Curry.jpg'
import SteakFrites from '../../assets/Steak Frites.jpg'
import GrilledSalmon from '../../assets/Grilled Salmon.jpg'
import FishTacos from '../../assets/Fish Tacos.jpg'
import BeefStroganoff from '../../assets/Beef Stroganoff.jpg'

// Drinks

import SoftDrinks from '../../assets/Soft Drinks.jpg'
import Lemonade from '../../assets/Lemonade.webp'
import FruitJuice from '../../assets/FruitJuice.jpg'
import Coffee from '../../assets/Coffee.jpg'
import HotTea from '../../assets/HotTea.jpg'
import HotChocolate from '../../assets/HotChocolate.jpg'

// Snacks

import MozzarellaSticks from '../../assets/Mozzarella Sticks.jpg'
import Nachos from '../../assets/Nachos.jpg'
import OnionRings from '../../assets/Onion Rings.jpg'
import Bruschetta from '../../assets/Bruschetta.jpg'
import SpringRolls from '../../assets/Spring Rolls.jpg'
import MiniTacos from '../../assets/Mini Tacos.jpg'

// Dessert

import Cheesecake from '../../assets/Cheesecake.jpg'
import ApplePie from '../../assets/Apple Pie.jpg'
import ChocolateMousse from '../../assets/Chocolate Mousse.jpg'
import FruitTart from '../../assets/Fruit Tart.jpg'
import CarrotCake from '../../assets/Carrot Cake.jpg'
import LemonSorbet from '../../assets/Lemon Sorbet.jpg'


const Gallary = () => {
  return (
    <div className='gallary' id='gallary'>

<h2>ـــــ Gallary ـــــ</h2>


<h3>Main Food</h3>

 <div className='gallaryCard'>

 <div className='cards'>
    <img src={GrilledChickenBreast} alt='Grilled Chicken Breast' loading="lazy"/>
    <h3 className='cardTittle1'>Grilled Chicken Breast</h3>
  </div>

  <div className='cards'>
  <img src= {ChickenCurry} alt='Chicken Curry' loading="lazy"/>
    <h3 className='cardTittle1'>Chicken Curry</h3>
  </div> 

  <div className='cards'>
  <img src= {SteakFrites} alt='Steak Frites' loading="lazy"/>
    <h3 className='cardTittle1'>Steak Frites</h3>
  </div>

  <div className='cards'>
  <img src= {GrilledSalmon} alt='Grilled Salmon' loading="lazy"/>
    <h3 className='cardTittle1'>Grilled Salmon</h3>
  </div>

  <div className='cards'>
  <img src= {FishTacos} alt='Fish Tacos' loading="lazy"/>
  <h3 className='cardTittle1'>Fish Tacos</h3>
  </div>

  <div className='cards'>
  <img  src= {BeefStroganoff} alt='Beef Stroganoff' loading="lazy"/>
  <h3 className='cardTittle1'>Beef Stroganoff</h3>
  </div>

  <div className='line'></div>

     
 <h3>Drinks</h3>

  {/* drinks */}

  <div className='cards'>
  <img src= {SoftDrinks} alt='Soft Drinks' loading="lazy"/>
  <h3 className='cardTittle1'>Soft Drinks</h3>
  </div>

  <div className='cards'>
  <img src= {Lemonade} alt='Nachos' loading="lazy"/>
  <h3 className='cardTittle1'>Lemonade</h3>
  </div>

  <div className='cards'>
  <img src= {FruitJuice} alt='Fruit Juice' loading="lazy"/>
  <h3 className='cardTittle1'>Fruit Juice</h3>
  </div>

  <div className='cards'>
  <img src= {Coffee} alt='Coffee' loading="lazy"/>
  <h3 className='cardTittle1'>Coffee</h3>
  </div>

  <div className='cards'>
  <img src= {HotTea} alt='Hot Tea' loading="lazy"/>
  <h3 className='cardTittle1'>Hot Tea</h3>
  </div>

  <div className='cards'>
  <img src= {HotChocolate} alt='Hot Chocolate' loading="lazy"/>
  <h3 className='cardTittle1'>Hot Chocolate</h3>
  </div>

  <div className='line'></div>

  <h3>Snacks</h3>


{/* Snacks */}

<div className='cards'>
<img src= {MozzarellaSticks} alt='Mozzarella Sticks' loading="lazy"/>
<h3 className='cardTittle1'>Mozzarella Sticks</h3>
  </div>

  <div className='cards'>
  <img src= {Nachos} alt='Nachos' loading="lazy"/>
  <h3 className='cardTittle1'>Nachos</h3>
  </div>

  <div className='cards'>
  <img src= {OnionRings} alt='Onion Rings'loading="lazy"/>
  <h3 className='cardTittle1'>Onion Rings</h3>
  </div>

  <div className='cards'>
  <img src= {Bruschetta} alt='Bruschetta' loading="lazy"/>
  <h3 className='cardTittle1'>Bruschetta</h3>
  </div>

  <div className='cards'>
  <img src= {SpringRolls} alt='Spring Rolls' loading="lazy"/>
  <h3 className='cardTittle1'>Spring Rolls</h3>
  </div>

  <div className='cards'>
  <img src= {MiniTacos} alt='Mini Tacos' loading="lazy"/>
  <h3 className='cardTittle1'>Mini Tacos</h3>
  </div>


  <div className='line'></div>

  <h3>Dessert</h3>


{/* Dessert */}

<div className='cards'>
<img src= {Cheesecake} alt='Cheese cake' loading="lazy"/>
<h3 className='cardTittle1'>Cheese cake</h3>
  </div>

  <div className='cards'>
  <img src= {ApplePie} alt='Apple Pie' loading="lazy"/>
  <h3 className='cardTittle1'>Apple Pie</h3>
  </div>

  <div className='cards'>
  <img src= {ChocolateMousse} alt='Chocolate Mousse' loading="lazy"/>
  <h3 className='cardTittle1'>Chocolate Mousse</h3>
  </div>

  <div className='cards'>
  <img src= {FruitTart} alt='Fruit Tart' loading="lazy"/>
  <h3 className='cardTittle1'>Fruit Tart</h3>
  </div>

  <div className='cards'>
  <img src= {CarrotCake} alt='Carrot Cake' loading="lazy"/>
  <h3 className='cardTittle1'>Carrot Cake</h3>
  </div>

  <div className='cards'>
  <img src= {LemonSorbet} alt='Lemon Sorbet' loading="lazy"/>
  <h3 className='cardTittle1'>Lemon Sorbet</h3>
  </div>
  

 </div>


        
    </div>
  )
}

export default Gallary

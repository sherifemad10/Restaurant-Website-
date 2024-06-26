import './menu.css'
import { MainFood } from './mainFood/MainFood'
import { Dessert } from './Dessert/Dessert'
import { Snacks } from './Snacks/Snacks'
import { Drinks } from './Drinks/Drinks'

export const Menu = () => {
  return (
    <div className='menu' id='menu'>
      <h2>ـــــ Menu ـــــ</h2>


      <div className='menuCard'>

        <MainFood/>

        <Dessert/>

        <Snacks/>

        <Drinks/>

    


      </div>

      {/* //////////////// */}


    </div>
  )
}

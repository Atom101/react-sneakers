function Drawer(){
   return(
      <>
      <div style = {{display: 'none'}}className = 'overlay'>
      <div className = 'drawer'>
            <h2 className = 'mb-30 d-flex justify-between'>Корзина <img className = 'removeBtn' src="/img/btn-remove.svg" alt="Remove" /></h2>

            <div className = 'items'>
            <div className = 'cartItem d-flex align-center mb-20'>
               <div style  = {{backgroundImage: 'url(/img/sneakers/1.jpg)'}} className = 'cartItemImg'></div>
               <div className = 'mr-20 flex'>
                  <p className = 'mb-5'>Чоловічі кросівки Nike Blazer Mid Suede</p>
                  <b>1 499 грн.</b>
               </div>
               <img className = 'removeBtn' src="/img/btn-remove.svg" alt="Remove" />
            </div>
            
            <div className = 'cartItem d-flex align-center mb-20'>
               <div style  = {{backgroundImage: 'url(/img/sneakers/2.jpg)'}} className = 'cartItemImg'></div>
               <div className = 'mr-20 flex'>
                  <p className = 'mb-5'>Чоловічі кросівки Nike Blazer Mid Suede</p>
                  <b>1 499 грн.</b>
               </div>
               <img className = 'removeBtn' src="/img/btn-remove.svg" alt="Remove" />
            </div>

            <div className = 'cartItem d-flex align-center mb-20'>
               <div style  = {{backgroundImage: 'url(/img/sneakers/3.jpg)'}} className = 'cartItemImg'></div>
               <div className = 'mr-20 flex'>
                  <p className = 'mb-5'>Чоловічі кросівки Nike Blazer Mid Suede</p>
                  <b>1 499 грн.</b>
               </div>
               <img className = 'removeBtn' src="/img/btn-remove.svg" alt="Remove" />
            </div>
            </div>

            <div className = 'cartTotalBlock'>
            <ul>
               
                  <li>
                     <span>Підсумок</span>
                     <div></div>
                     <b> 8 300 грн</b>
                  </li>
                  <li>
                     <span>Податок 5%</span>
                     <div></div>
                     <b> 7200</b>
                  </li>
               </ul>
            <button className = 'greenButton'>Оформити замовлення <img src = '/img/arrow.svg' alt = 'Arrow' /></button>   
            </div>
         </div>
      </div>
      </>
   );
}
export default Drawer;
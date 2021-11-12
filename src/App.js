import Card from "./components/Card";
import Header from "./components/Header";
import Drawer from "./components/Drawer";
function App() {
  return (
    <div className = 'wrapper clear'>
      <Drawer />
      <Header />

      <div className = 'content p-40'>
          <div className = 'd-flex align-center justify-between mb-40'>
             <h1>Всі кросівки</h1>
             <div className = 'search-block d-flex'>
               <img src = '/img/search.svg' alt = 'Search'/>
               <input placeholder = 'Пошук...'/>
             </div>
            </div>

         <div className = 'd-flex'>
         <Card />
         <div className = 'card'>
            <img  width = {133} height = {112} src = '/img/sneakers/2.jpg' alt = 'Sneakers'/>
            <h5>Чоловічі кросівки Nike Blazer Mid Suede</h5>
            <div className = 'd-flex justify-between align-center'>
               <div className = 'd-flex flex-column'>
                  <span>Ціна:</span>
                  <b>2 999 грн.</b>
               </div>
               <button className = 'button'>
                  <img width = {11} height = {11} src="/img/plus.svg" alt="Plus"/>
               </button>
            </div>
         </div>

         <div className = 'card'>
            <img  width = {133} height = {112} src = '/img/sneakers/3.jpg' alt = 'Sneakers'/>
            <h5>Чоловічі кросівки Nike Blazer Mid Suede</h5>
            <div className = 'd-flex justify-between align-center'>
               <div className = 'd-flex flex-column'>
                  <span>Ціна:</span>
                  <b>1 999 грн.</b>
               </div>
               <button className = 'button'>
                  <img width = {11} height = {11} src="/img/plus.svg" alt="Plus"/>
               </button>
            </div>
         </div>

         <div className = 'card'>
            <img  width = {133} height = {112} src = '/img/sneakers/4.jpg' alt = 'Sneakers'/>
            <h5>Чоловічі кросівки Nike Blazer Mid Suede</h5>
            <div className = 'd-flex justify-between align-center'>
               <div className = 'd-flex flex-column'>
                  <span>Ціна:</span>
                  <b>3 999 грн.</b>
               </div>
               <button className = 'button'>
                  <img width = {11} height = {11} src="/img/plus.svg" alt="Plus"/>
               </button>
            </div>
         </div>
         
         </div>
      </div>
    </div>
  );
}

export default App;

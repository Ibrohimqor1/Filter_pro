import React from 'react'
import Top_Nav from "../topNav/topNav";
import Navbar from "../Navbar/Navbar";

const about = () => {
  return (
    <>
    <Top_Nav/>
<Navbar/>

<div class="div">
    <h1 class="h">Ремонт, установка фильтров для воды</h1>
    <h1 class="h1">Установка, ремонт, замена запасных частей фильтров для воды c выездом по городу Бишкек.
</h1>
</div>
<div class="container">
<div class="cards">
    <div class="card">
        <img src="https://delux.kg/wp-content/uploads/2020/07/2.png" alt=""/>
        <h2>Диагностика и замена картриджей</h2>
        <h3>Диагностика фильтра для воды, <br/> замена сменных картриджей </h3>
    </div>
    <div class="card">
        <img src="https://delux.kg/wp-content/uploads/2020/07/3-1.png" alt=""/>
        <h2>Несложный ремонт фильтра</h2>
        <h3>Вызов мастера (замена фитингов, смесителя, замена колбы)</h3>
    </div>
    <div class="card">
        <img src="https://delux.kg/wp-content/uploads/2020/07/4.png" alt=""/>
        <h2>Сложный ремонт</h2>
        <h3>Восстановление и модернизация фильтров для воды на дому</h3>
    </div>
    <div class="card">
        <img src="https://delux.kg/wp-content/uploads/2020/07/5.png" alt=""/>
        <h2>Установка фильтра</h2>
        <h3>Монтаж и установка фильтров для воды под мойку</h3>
    </div>
</div>
</div>




    </>
  )
}

export default about
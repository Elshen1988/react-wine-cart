function Products(user) {
    
    return (
       
      <div className="Products">
       <div className="secondDiv">
        <div className="thidDiv">
              <div>id:{user.id}</div>
    <div>produktName:{user.produktName}</div>
    {user.inStock?<img className="heart" src="https://i0.wp.com/crast.net/img/2022/06/SFWCC73475DDZHDKIPLRFG6TR4.jpg?resize=980%2C528&ssl=1"/>:<div>stokda yoxdur</div>}
       </div>
        </div>
       
   
      </div>
    );
  }
  
  export default Products;
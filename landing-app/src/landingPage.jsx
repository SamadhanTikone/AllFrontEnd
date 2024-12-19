// import React from 'react'

export default function LandingPage() {
  return (
    <div>
      <nav>

        <div>
          <h2> Hello, Coders</h2>
        </div>

<div className="links">
  
        <a href="">Menu</a>
        <a href="">Location</a>
        <a href="">Contact</a>
        <a href="">Service</a>
        <a href="">Connect</a>
</div>
        
        <div>
          <button>Login</button>
        </div>
      </nav>
      <div className="main-content">
        <div className="heading">
          <h1 className="h1">YOUR FEET DESERVE THE BEST</h1>
          <p className="info">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor ullam reiciendis corporis, ad suscipit fugit.</p>
          <div className="buttons">
            <button className='btn1'>Shop Now</button>
            <button className='btn2'>Category</button>
          </div>
          <p className='span'>Also Available on</p>
          <div className="logos">
            <img src="./public/Images/flipkart.png" alt="" />
            <img src="./public/Images/amazon.png" alt="" />
          </div>
        </div>

        <div className="image">
          <img src="./public/Images/shoe_image.png" alt="" />
        </div>
      </div>
    </div>

  )
}

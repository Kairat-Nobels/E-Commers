import React, { useState } from 'react'
import './Product.scss'
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import BalanceIcon from "@mui/icons-material/Balance";

const Product = () =>
{
    const [selectedImg, setSelectedImg] = useState(0)
    const [quantity, setQuantity] = useState(1)
    const images = [
        "https://www.pivotalmoments.co.uk/wp-content/uploads/2022/05/success.jpg",
        "https://www.speexx.com/wp-content/uploads/goal-setting-basics.jpg"
    ]
    return (
        <div className='product'>
            <div className="left">
                <div className="images">
                    <img src={images[0]} onClick={e => setSelectedImg(0)} alt="" />
                    <img src={images[1]} onClick={e => setSelectedImg(1)} alt="" />
                </div>
                <div className="mainImg">
                    <img src={images[selectedImg]} alt="" />
                </div>
            </div>
            <div className="right">
                <h1>Title</h1>
                <span>$199</span>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore temporibus eos ab deleniti ratione laboriosam eveniet, pariatur, ipsa accusantium obcaecati inventore! Unde est similique consequatur ut officiis ducimus, maxime laboriosam!</p>
                <div className="quantity">
                    <button onClick={() => setQuantity(prev => prev === 1 ? 1 : prev - 1)}>-</button>
                    {quantity}
                    <button onClick={() => setQuantity(prev => prev + 1)}>+</button>
                </div>
                <button className="add">
                    <AddShoppingCartIcon /> ADD TO CART
                </button>
                <div className="links">
                    <div className="item">
                        <FavoriteBorderIcon /> ADD TO WISH LIST
                    </div>
                    <div className="item">
                        <BalanceIcon /> ADD TO COMPARE
                    </div>
                </div>

                <div className="info">
                    <span>Vendor: Polo</span>
                    <span>Product Type: T-Shirt</span>
                    <span>Tag: T-Shirt, Women, Top</span>
                </div>
                <hr />
                <div className="details">
                    <span>DESCRIPTION</span>
                    <hr />
                    <span>ADDITIONAL INFORMATION</span>
                    <hr />
                    <span>FAQ</span>
                </div>
            </div>
        </div>
    )
}

export default Product
import React from 'react'
import './Cart.scss'
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";

const Cart = () =>
{
    const data = [
        {
            id: 1,
            img: "https://png.pngtree.com/thumb_back/fw800/background/20230321/pngtree-a-young-and-beautiful-boxer-puppy-photo-image_1966345.jpg",
            title: "Product 1",
            img2: "https://www.kino-teatr.ru/acter/album/410143/968742.jpg",
            isNew: true,
            desc: "Long sleeve Graphic T-Shirt",
            oldPrice: 100,
            price: 79.99
        },
        {
            id: 2,
            img: "https://png.pngtree.com/thumb_back/fw800/background/20230321/pngtree-a-young-and-beautiful-boxer-puppy-photo-image_1966345.jpg",
            title: "Product 2",
            desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere, rerum.",
            oldPrice: 75,
            price: 59.99
        }
    ];

    return (
        <div className='cart'>
            <h1>Products in your cart</h1>
            {data?.map(item =>
            {
                <div className="item" key={item.id}>
                    <img src={item.img} alt="" />
                    <div className="details">
                        <h1>{item.title}</h1>
                        <p>{item.desc?.substring(0, 100)}</p>
                        <div className="price">1 x ${item.price}</div>
                    </div>
                    <DeleteOutlinedIcon className='delete' />
                </div>
            })}
            <div className="total">
                <span>SUBTOTAL</span>
                <span>$123</span>
            </div>
            <button>PROCCED TO CHECKOUT</button>
            <span className="reset">Reset Cart</span>
        </div>
    )
}

export default Cart
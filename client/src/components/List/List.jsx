import React from 'react'
import './List.scss'
import Card from '../Card/Card';

const List = () =>
{
    const data = [
        {
            id: 1,
            img: "https://png.pngtree.com/thumb_back/fw800/background/20230321/pngtree-a-young-and-beautiful-boxer-puppy-photo-image_1966345.jpg",
            title: "Product 1",
            img2: "https://www.kino-teatr.ru/acter/album/410143/968742.jpg",
            isNew: true,
            oldPrice: 100,
            price: 79.99
        },
        {
            id: 2,
            img: "https://png.pngtree.com/thumb_back/fw800/background/20230321/pngtree-a-young-and-beautiful-boxer-puppy-photo-image_1966345.jpg",
            title: "Product 2",
            oldPrice: 75,
            price: 59.99
        },
        {
            id: 3,
            img: "https://png.pngtree.com/thumb_back/fw800/background/20230321/pngtree-a-young-and-beautiful-boxer-puppy-photo-image_1966345.jpg",
            title: "Product 3",
            oldPrice: 120,
            price: 99.99
        },
        {
            id: 4,
            img: "https://png.pngtree.com/thumb_back/fw800/background/20230321/pngtree-a-young-and-beautiful-boxer-puppy-photo-image_1966345.jpg",
            title: "Product 4",
            oldPrice: 90,
            price: 69.99
        }
    ];
    return (
        <div className='list'>
            {data.map(item => <Card item={item} key={item.id} />)}
        </div>
    )
}

export default List
import React from "react";
import Card from "../Card/Card";
import "./FeaturedProducts.scss";
// import useFetch from "../../hooks/useFetch";

const FeaturedProducts = ({ type }) =>
{
    // const { data, loading, error } = useFetch(
    //     `/products?populate=*&[filters][type][$eq]=${type}`
    // );
    const data = [
        {
            id: 1,
            img: "https://png.pngtree.com/thumb_back/fw800/background/20230321/pngtree-a-young-and-beautiful-boxer-puppy-photo-image_1966345.jpg",
            title: "Product 1",
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
        <div className="featuredProducts">
            <div className="top">
                <h1>{type} products</h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum
                    suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan
                    lacus vel facilisis labore et dolore magna aliqua. Quis ipsum
                    suspendisse ultrices gravida. Risus commodo viverra maecenas.
                </p>
            </div>
            <div className="bottom">
                {/* {error
                    ? "Something went wrong!"
                    : loading
                        ? "loading"
                        : data?.map((item) => <Card item={item} key={item.id} />)} */}
                {
                    data.map((item) => <Card item={item} key={item.id} />)
                }
            </div>
        </div>
    );
};

export default FeaturedProducts;
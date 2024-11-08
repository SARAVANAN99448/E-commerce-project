import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext';
import { useParams } from 'react-router-dom';
import RelatedProducts from '../components/RelatedProducts';

const reviewsData = [
    {
        name: "Samantha D.",
        date: "August 14, 2023",
        rating: 4.5,
        review:
            "I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. It’s become my favorite go-to shirt.",
    },
    {
        name: "Alex M.",
        date: "August 15, 2023",
        rating: 5,
        review:
            "The t-shirt exceeded my expectations! The colors are vibrant and the print quality is top-notch. Being a UI/UX designer myself, I'm quite picky about aesthetics, and this t-shirt definitely gets a thumbs up from me.",
    },
    {
        name: "Ethan R.",
        date: "August 16, 2023",
        rating: 4,
        review:
            "This t-shirt is a must-have for anyone who appreciates good design. The minimalistic yet stylish pattern caught my eye, and the fit is perfect. I can see the designer’s touch in every aspect of this shirt.",
    },
    {
        name: "Olivia P.",
        date: "August 17, 2023",
        rating: 4.5,
        review:
            "As a UI/UX enthusiast, I value simplicity and functionality. This t-shirt not only represents those principles but also feels great to wear. It’s evident that the designer poured their creativity into making this t-shirt stand out.",
    },
    {
        name: "Liam K.",
        date: "August 18, 2023",
        rating: 5,
        review:
            "This t-shirt is a fusion of comfort and creativity. The fabric is soft, and the design speaks volumes about the designer's skill. It's like wearing a piece of art that reflects my passion for both design and fashion.",
    },
    {
        name: "Ava H.",
        date: "August 19, 2023",
        rating: 4.5,
        review:
            "I'm not just wearing a t-shirt; I'm wearing a piece of design philosophy. The intricate details and thoughtful layout of the design make this shirt a conversation starter.",
    },
];

const faqs = [
    {
        question: "What is the return policy?",
        answer: "You can return any product within 30 days of purchase if it remains in its original condition.",
    },
    {
        question: "Do you offer international shipping?",
        answer: "Yes, we ship worldwide. Delivery times may vary depending on the destination.",
    },
    {
        question: "How do I track my order?",
        answer: "Once your order has shipped, we will provide you with a tracking number via email.",
    },
];

const Product = () => {

    const { productID } = useParams()
    const { products, currency, addToCart } = useContext(ShopContext);
    const [productData, setProductData] = useState(false);
    const [image, setImage] = useState('')
    const [size, setSize] = useState('')
    const [quantity, setQuantity] = useState(1);

    const fetchProductData = async () => {

        products.map((item) => {
            if (item._id === productID) {
                setProductData(item)
                setImage(item.image[0])
                return null;
            }
        })

    }

    const [activeSection, setActiveSection] = useState("ProductDetails");
    const [reviews, setReviews] = useState(reviewsData);
    const [showReviewForm, setShowReviewForm] = useState(false);
    const [newReview, setNewReview] = useState({
        name: "",
        rating: 0,
        review: "",
    });

    const handleReviewSubmit = (e) => {
        e.preventDefault();
        const today = new Date();
        const date = today.toLocaleDateString("en-US", {
            month: "long",
            day: "numeric",
            year: "numeric",
        });
        const reviewToAdd = { ...newReview, date };
        setReviews([reviewToAdd, ...reviews]);
        setNewReview({ name: "", rating: 0, review: "" });
        setShowReviewForm(false);
    };

    useEffect(() => {
        fetchProductData();
    }, [productID, products])

    return productData ? (
        <div className='border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100 w-full m-auto md:w-[90%] px-4'>
            {/*----------- Product Data-------------- */}
            <div className='flex gap-12 sm:gap-12 flex-col sm:flex-row'>

                {/*---------- Product Images------------- */}
                <div className='flex-1 flex flex-col-reverse gap-6 md:gap-0 sm:flex-row'>
                    <div className='flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-evenly sm:justify-normal sm:w-[17.8%] w-full'>
                        {
                            productData.image.map((item, index) => (
                                <img onClick={() => setImage(item)} src={item} key={index} className='w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer' alt="" />
                            ))
                        }
                    </div>
                    <div className='w-full sm:w-[80%]'>
                        <img className='w-[70%] m-auto h-auto' src={image} alt="" />
                    </div>
                </div>

                {/* -------- Product Info ---------- */}
                <div className='flex-1 text-[14px] md:text-[16px]'>
                    <h1 className='font-black text-2xl md:text-3xl mt-2'>{productData.name}</h1>
                    <p className='text-sm pt-4'><i className="mr-1 fa-solid fa-star text-yellow-400" ></i><i className="mr-1 fa-solid fa-star text-yellow-400" ></i><i className="mr-1 fa-solid fa-star text-yellow-400" ></i><i className="mr-1 fa-solid fa-star text-yellow-400" ></i><i className="mr-1 fa-solid fa-star-half text-yellow-400" ></i>4.5/5</p>
                    <p className='mt-5 text-3xl font-medium'>{currency}{productData.price}</p>
                    <p className='mt-5 text-gray-500 md:w-4/5'>{productData.description}</p>
                    <div className='flex flex-col gap-4 my-8'>
                        <p>Choose Size</p>
                        <div className='flex gap-2'>
                            {productData.sizes.map((item, index) => (
                                <button onClick={() => setSize(item)} className={`border rounded-full py-2 px-4 bg-gray-100 ${item === size ? 'bg-gray-900 text-white' : ''}`} key={index}>{item}</button>
                            ))}
                        </div>
                    </div>
                    <hr className='my-8 sm:w-4/5' />
                    <div className='flex justify-between md:mr-32'>
                        <div className='flex border-none px-6 py-2 bg-gray-200 rounded-full text-2xl items-center gap-8'>
                            <p onClick={() => setQuantity(prev => Math.max(1, prev - 1))} className='cursor-pointer'>-</p> {/* Decrease quantity */}
                            <p>{quantity}</p> {/* Display current quantity */}
                            <p onClick={() => setQuantity(prev => prev + 1)} className='cursor-pointer'>+</p> {/* Increase quantity */}
                        </div>
                        <div>
                            <button onClick={() => addToCart(productData._id, size)} className='bg-black text-white px-12 md:px-24 rounded-full py-3 text-sm active:bg-gray-700'>ADD TO CART</button>
                        </div>
                    </div>
                </div>

            </div>

            {/* product details three sections */}

            <div className="max-w-6xl mx-auto p-4 my-8 text-[12px] md:text-[16px]">
                {/* Navigation Tabs */}
                <div className="flex justify-evenly border-b">
                    <button
                        className={`py-2 px-4 focus:outline-none ${activeSection === "ProductDetails" ? "border-b-2 border-black" : ""
                            }`}
                        onClick={() => setActiveSection("ProductDetails")}
                    >
                        Product Details
                    </button>
                    <button
                        className={`py-2 px-4 focus:outline-none ${activeSection === "RatingReviews" ? "border-b-2 border-black" : ""
                            }`}
                        onClick={() => setActiveSection("RatingReviews")}
                    >
                        Rating & Reviews
                    </button>
                    <button
                        className={`py-2 px-4 focus:outline-none ${activeSection === "FAQs" ? "border-b-2 border-black" : ""
                            }`}
                        onClick={() => setActiveSection("FAQs")}
                    >
                        FAQs
                    </button>
                </div>

                {/* Content Area */}
                <div className="mt-4">
                    {activeSection === "ProductDetails" && (
                        <div>
                            <h2 className="text-xl font-bold">Product Details</h2>
                            <p className="mt-2 text-gray-600">
                                An e-commerce website is an online platform that facilitates the
                                buying and selling of products or services over the internet. It
                                serves as a virtual marketplace where businesses and individuals
                                can showcase their products, interact with customers, and conduct
                                transactions without the need for a physical presence. E-commerce
                                websites have gained immense popularity due to their convenience,
                                accessibility, and the global reach they offer.
                                <br />
                                <br />
                                E-commerce websites typically display products or services along
                                with detailed descriptions, images, prices, and any available
                                variations (e.g., sizes, colors). Each product usually has its own
                                dedicated page with relevant information.
                            </p>
                        </div>
                    )}

                    {activeSection === "RatingReviews" && (
                        <div>
                            <div className="flex justify-between py-4 items-center">
                                <h2 className="text-xl font-bold">Rating & Reviews</h2>
                                <button
                                    className="px-6 py-3 bg-black rounded-full text-white"
                                    onClick={() => setShowReviewForm(!showReviewForm)}
                                >
                                    Write a Review
                                </button>
                            </div>

                            {/* Review Form */}
                            {showReviewForm && (
                                <form onSubmit={handleReviewSubmit} className="mt-4 space-y-4">
                                    <div>
                                        <label className="block text-sm font-medium">Name</label>
                                        <input
                                            type="text"
                                            className="border rounded-lg p-2 w-full"
                                            value={newReview.name}
                                            onChange={(e) =>
                                                setNewReview({ ...newReview, name: e.target.value })
                                            }
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium">Rating</label>
                                        <select
                                            className="border rounded-lg p-2 w-full"
                                            value={newReview.rating}
                                            onChange={(e) =>
                                                setNewReview({ ...newReview, rating: parseFloat(e.target.value) })
                                            }
                                            required
                                        >
                                            <option value="">Select rating</option>
                                            <option value="1">1 - Poor</option>
                                            <option value="2">2 - Fair</option>
                                            <option value="3">3 - Good</option>
                                            <option value="4">4 - Very Good</option>
                                            <option value="5">5 - Excellent</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium">Review</label>
                                        <textarea
                                            className="border rounded-lg p-2 w-full"
                                            rows="3"
                                            value={newReview.review}
                                            onChange={(e) =>
                                                setNewReview({ ...newReview, review: e.target.value })
                                            }
                                            required
                                        ></textarea>
                                    </div>
                                    <button
                                        type="submit"
                                        className="px-4 py-2 bg-blue-600 text-white rounded-lg"
                                    >
                                        Submit
                                    </button>
                                </form>
                            )}

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 mt-4">
                                {reviews.slice(0, 6).map((review, index) => (
                                    <div
                                        key={index}
                                        className="p-4 border rounded-lg shadow-sm bg-white"
                                    >
                                        <div className="flex items-center mb-2">
                                            <h3 className="font-semibold">{review.name}</h3>
                                            <span className="ml-auto text-sm text-gray-500">
                                                {review.date}
                                            </span>
                                        </div>
                                        <div className="flex items-center mb-2">
                                            <div className="flex text-yellow-400">
                                                {Array(Math.floor(review.rating))
                                                    .fill(null)
                                                    .map((_, i) => (
                                                        <svg
                                                            key={i}
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            fill="currentColor"
                                                            viewBox="0 0 24 24"
                                                            strokeWidth="1.5"
                                                            stroke="currentColor"
                                                            className="w-5 h-5"
                                                        >
                                                            <path
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                                d="M12 17.27l6.18 3.73-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
                                                            />
                                                        </svg>
                                                    ))}
                                                {review.rating % 1 !== 0 && (
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        fill="none"
                                                        viewBox="0 0 24 24"
                                                        strokeWidth="1.5"
                                                        stroke="currentColor"
                                                        className="w-5 h-5 text-yellow-400"
                                                    >
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            d="M12 17.27l6.18 3.73-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
                                                        />
                                                    </svg>
                                                )}
                                            </div>
                                            <span className="ml-2 text-gray-600">
                                                {review.rating.toFixed(1)} Stars
                                            </span>
                                        </div>
                                        <p>{review.review}</p>
                                    </div>
                                ))}
                            </div>
                            <div className='flex justify-center'>
                                <button className='border border-black px-6 py-3 rounded-full mt-8'>Load more Reviews</button>
                            </div>
                        </div>
                    )}

                    {activeSection === "FAQs" && (
                        <div>
                            <h2 className="text-xl font-bold">FAQs</h2>
                            {faqs.map((faq, index) => (
                                <div key={index} className="mt-4">
                                    <h3 className="font-semibold">{faq.question}</h3>
                                    <p className="text-gray-600">{faq.answer}</p>
                                </div>
                            ))}
                        </div>
                    )}

                </div>
            </div>

            {/* Related products */}

            <RelatedProducts category={productData.category} subCategory={productData.subCategory} />
        </div>
    ) : <div className=' opacity-0'></div>
}

export default Product

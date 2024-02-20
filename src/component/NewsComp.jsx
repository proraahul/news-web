import axios from 'axios'
import { useState } from 'react';
import { useEffect } from 'react';

const NewsComp = ({ category }) => {
    const [apiData, setApiData] = useState();

    const fetchData = async () => {
        await axios.get(
            category ? `https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=98ba8c44a2274002acb1162387e4c7c6`
                : 'https://newsapi.org/v2/top-headlines?country=in&apiKey=98ba8c44a2274002acb1162387e4c7c6').then((res) => {
                    setApiData(res.data.articles);
                    // console.log(res.data.articles);
                });
    }

    useEffect(() => {
        fetchData();
    }, [category]);

    return (
        <div className='m-10 mx-12'>
            {
                category ? <h1  className='text-2xl uppercase underline font-bold'>News on {category}</h1> : <h1 className='text-2xl'><u>TOP HEADLINES</u></h1>
            }
            <div className='flex flex-wrap justify-center min-h-[100vh]'>
                {
                    apiData ? apiData.map((item, index) => {
                        return (
                            <div className='w-[400px] h-fit border m-3 p-5 flex flex-col gap-2 shadow-md' key={index}>
                                <h2 className='font-semibold text-lg'>{item.title}</h2>
                                <img src={item.urlToImage} alt={item.source.name} className='w-auto h-[300px] object-cover' />
                                {/* <p>{item.content}</p> */}
                                <p>{item.content}</p>
                                <div className='flex justify-between items-center mt-3'>
                                    <div>
                                        <a href={item.url} target='_blank' className="border rounded px-3 py-2 w-fit bg-teal-700 text-white font-semibold hover:text-black hover:bg-transparent">
                                            <button>View More</button>
                                        </a>
                                    </div>
                                    <div>
                                        <p className='text-[13px]'>{item.publishedAt}</p>
                                    </div>
                                </div>
                            </div>
                        )
                    }) : 'Loading...'
                }
            </div>
        </div>
    )
}

export default NewsComp
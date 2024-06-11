/* eslint-disable no-unused-vars */
import React from 'react';
import { Row, Col } from 'react-bootstrap';
import '../css/OpenTrip.css'
import img1 from '../assets/9.jpeg'
import img2 from '../assets/18.jpeg'
import img3 from '../assets/30.jpeg'
import img4 from '../assets/29.jpeg'
import img5 from '../assets/17.jpeg'
import img6 from '../assets/27.jpeg'
import img7 from '../assets/15.jpeg'
import img8 from '../assets/5.jpeg'
import { useNavigate } from 'react-router-dom';


const OpenTrip = () => {
    const items = [
        { img: img1, alt: 'Pantai Tanjung Bira', kata1: 'Pantai', kata2: 'Tanjung Bira', price: '1.5', detailPrice: 'JT', duration: '3 Hari' },
        { img: img2, alt: 'Tebing Apparalang', kata1: 'Tebing', kata2: ' Apparalang', price: '1.3', detailPrice: 'JT', duration: '3 Hari' },
        { img: img3, alt: 'Pantai Panrang Luhu', kata1: 'Pantai', kata2: ' Panrang Luhu', price: '2.1', detailPrice: 'JT', duration: '3 Hari' },
        { img: img4, alt: 'Pantai Marumasa', kata1: 'Pantai', kata2: ' Marumasa', price: '1.5', detailPrice: 'JT', duration: '3 Hari' },
        { img: img5, alt: 'Pantai Kasuso', kata1: 'Pantai', kata2: ' Kasuso', price: '1.3', detailPrice: 'JT', duration: '3 Hari' },
        { img: img6, alt: 'Pantai Mandala Ria', kata1: 'Pantai', kata2: ' Mandala Ria', price: '2.1', detailPrice: 'JT', duration: '3 Hari' },
        { img: img7, alt: 'Pantai Pasir Putih', kata1: 'Pantai', kata2: ' Pasir Putih', price: '1.5', detailPrice: 'JT', duration: '3 Hari' },
        { img: img8, alt: 'Pantai Bara', kata1: 'Pantai', kata2: ' Bara', price: '1.5', detailPrice: 'JT', duration: '3 Hari' },
    ];

    const navigate = useNavigate();

    const handleClick = (tripId) => {
        history.push(`/OTPages/${tripId}`);
    };


    return (
        // <div className="container mt-10">
        //     <div className='justify-content-md-center'>
        //         <h1 className='text-uppercase text-center' style={
        //             {
        //                 color: '#FF6600', fontSize: '71px', fontFamily: 'Poppins',
        //                 fontWeight: '900', lineHeight: '100px', wordWrap: 'break-word',
        //                 boxShadow: 'unset'
        //             }
        //         }>Open trip</h1>
        //         <p className='text-center' style={
        //             { color: '#577CFF', fontWeight: 'bold' }
        //         }>Khusus kamu yang ingin menghabiskan Weekend bersama keluarga</p>
        //     </div>
        //     <Row className="flex flex-wrap justify-center mb-10">
        //         {items.map((item, index) => ( 
        //             <Col key={index} xs={6} md={4} lg={3} className="p-4"  onClick={() => handleClick('pantai-tanjung-bira')} >
        //                 <div className="text-center">
        //                     <img src={item.img} alt={item.alt} className="rounded-lg img-card border border-primary border-opacity-20" />
        //                     <div className='bungkus1 border border-primary d-flex justify-content-between border my-2 px-2 py-2'>
        //                         <div className="grup1 text-left">
        //                             <span className="kata1 text-left">{item.kata1}</span> <br />
        //                             <span className="kata2 text-left">{item.kata2}</span>
        //                         </div>
        //                         <div className="grup2 d-flex justify-content-end">
        //                             <div className="text-center font-bold price">{item.price}</div>
        //                             <div className="text-center detail-price">{item.detailPrice}</div>
        //                         </div>
        //                     </div>
        //                     <div className="box-duration">
        //                         <div className="rectangle">
        //                             <span className="duration">{item.duration}</span>
        //                         </div>
        //                     </div>
        //                     {/* <div className="text-center bg-red-600 rounded-full w-16 mx-auto">{item.duration}</div> */}
        //                 </div>
        //             </Col>
        //         ))}
        //     </Row>
        // </div>
        <>
            <div className="self-center px-5 mt-8 w-full max-w-[1302px] max-md:max-w-full">
                <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                    <div className="flex flex-col w-3/12 max-md:ml-0 max-md:w-full">
                        <img
                            loading="lazy"
                            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/0006db1b3b8115592e8ac96517404d3e3ad14ff67ccf7bd0ec81cd1b5c8178d8?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/0006db1b3b8115592e8ac96517404d3e3ad14ff67ccf7bd0ec81cd1b5c8178d8?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/0006db1b3b8115592e8ac96517404d3e3ad14ff67ccf7bd0ec81cd1b5c8178d8?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/0006db1b3b8115592e8ac96517404d3e3ad14ff67ccf7bd0ec81cd1b5c8178d8?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/0006db1b3b8115592e8ac96517404d3e3ad14ff67ccf7bd0ec81cd1b5c8178d8?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/0006db1b3b8115592e8ac96517404d3e3ad14ff67ccf7bd0ec81cd1b5c8178d8?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/0006db1b3b8115592e8ac96517404d3e3ad14ff67ccf7bd0ec81cd1b5c8178d8?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/0006db1b3b8115592e8ac96517404d3e3ad14ff67ccf7bd0ec81cd1b5c8178d8?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&"
                            className="grow shrink-0 max-w-full aspect-[0.8] w-[295px] max-md:mt-10"
                        />
                    </div>
                    <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
                        <img
                            loading="lazy"
                            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/1fa6db5d26d59fd0147aab54b6967ba0a2850947112dd62284a2822603ec5951?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/1fa6db5d26d59fd0147aab54b6967ba0a2850947112dd62284a2822603ec5951?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/1fa6db5d26d59fd0147aab54b6967ba0a2850947112dd62284a2822603ec5951?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/1fa6db5d26d59fd0147aab54b6967ba0a2850947112dd62284a2822603ec5951?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/1fa6db5d26d59fd0147aab54b6967ba0a2850947112dd62284a2822603ec5951?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/1fa6db5d26d59fd0147aab54b6967ba0a2850947112dd62284a2822603ec5951?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/1fa6db5d26d59fd0147aab54b6967ba0a2850947112dd62284a2822603ec5951?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/1fa6db5d26d59fd0147aab54b6967ba0a2850947112dd62284a2822603ec5951?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&"
                            className="grow shrink-0 max-w-full aspect-[0.8] w-[295px] max-md:mt-10"
                        />
                    </div>
                    <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
                        <img
                            loading="lazy"
                            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/d2375f47bd17a9196fbf9a71ac3a72769fb44c12a3ca19347510ae8ca0704289?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/d2375f47bd17a9196fbf9a71ac3a72769fb44c12a3ca19347510ae8ca0704289?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/d2375f47bd17a9196fbf9a71ac3a72769fb44c12a3ca19347510ae8ca0704289?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/d2375f47bd17a9196fbf9a71ac3a72769fb44c12a3ca19347510ae8ca0704289?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/d2375f47bd17a9196fbf9a71ac3a72769fb44c12a3ca19347510ae8ca0704289?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/d2375f47bd17a9196fbf9a71ac3a72769fb44c12a3ca19347510ae8ca0704289?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/d2375f47bd17a9196fbf9a71ac3a72769fb44c12a3ca19347510ae8ca0704289?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/d2375f47bd17a9196fbf9a71ac3a72769fb44c12a3ca19347510ae8ca0704289?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&"
                            className="grow shrink-0 max-w-full aspect-[0.8] w-[295px] max-md:mt-10"
                        />
                    </div>
                    <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
                        <img
                            loading="lazy"
                            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/9d1f32031e4fa80bf863a8ffbe9cc28dc7fce0fc3e883717bafb8f822c09d5cd?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/9d1f32031e4fa80bf863a8ffbe9cc28dc7fce0fc3e883717bafb8f822c09d5cd?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/9d1f32031e4fa80bf863a8ffbe9cc28dc7fce0fc3e883717bafb8f822c09d5cd?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/9d1f32031e4fa80bf863a8ffbe9cc28dc7fce0fc3e883717bafb8f822c09d5cd?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/9d1f32031e4fa80bf863a8ffbe9cc28dc7fce0fc3e883717bafb8f822c09d5cd?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/9d1f32031e4fa80bf863a8ffbe9cc28dc7fce0fc3e883717bafb8f822c09d5cd?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/9d1f32031e4fa80bf863a8ffbe9cc28dc7fce0fc3e883717bafb8f822c09d5cd?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/9d1f32031e4fa80bf863a8ffbe9cc28dc7fce0fc3e883717bafb8f822c09d5cd?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&"
                            className="grow shrink-0 max-w-full aspect-[0.8] w-[295px] max-md:mt-10"
                        />
                    </div>
                </div>
            </div>
            <div className="self-center px-5 mt-8 w-full max-w-[1302px] max-md:max-w-full">
                <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                    <div className="flex flex-col w-3/12 max-md:ml-0 max-md:w-full">
                        <img
                            loading="lazy"
                            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/0006db1b3b8115592e8ac96517404d3e3ad14ff67ccf7bd0ec81cd1b5c8178d8?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/0006db1b3b8115592e8ac96517404d3e3ad14ff67ccf7bd0ec81cd1b5c8178d8?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/0006db1b3b8115592e8ac96517404d3e3ad14ff67ccf7bd0ec81cd1b5c8178d8?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/0006db1b3b8115592e8ac96517404d3e3ad14ff67ccf7bd0ec81cd1b5c8178d8?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/0006db1b3b8115592e8ac96517404d3e3ad14ff67ccf7bd0ec81cd1b5c8178d8?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/0006db1b3b8115592e8ac96517404d3e3ad14ff67ccf7bd0ec81cd1b5c8178d8?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/0006db1b3b8115592e8ac96517404d3e3ad14ff67ccf7bd0ec81cd1b5c8178d8?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/0006db1b3b8115592e8ac96517404d3e3ad14ff67ccf7bd0ec81cd1b5c8178d8?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&"
                            className="grow shrink-0 max-w-full aspect-[0.8] w-[295px] max-md:mt-10"
                        />
                    </div>
                    <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
                        <img
                            loading="lazy"
                            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/1fa6db5d26d59fd0147aab54b6967ba0a2850947112dd62284a2822603ec5951?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/1fa6db5d26d59fd0147aab54b6967ba0a2850947112dd62284a2822603ec5951?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/1fa6db5d26d59fd0147aab54b6967ba0a2850947112dd62284a2822603ec5951?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/1fa6db5d26d59fd0147aab54b6967ba0a2850947112dd62284a2822603ec5951?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/1fa6db5d26d59fd0147aab54b6967ba0a2850947112dd62284a2822603ec5951?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/1fa6db5d26d59fd0147aab54b6967ba0a2850947112dd62284a2822603ec5951?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/1fa6db5d26d59fd0147aab54b6967ba0a2850947112dd62284a2822603ec5951?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/1fa6db5d26d59fd0147aab54b6967ba0a2850947112dd62284a2822603ec5951?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&"
                            className="grow shrink-0 max-w-full aspect-[0.8] w-[295px] max-md:mt-10"
                        />
                    </div>
                    <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
                        <img
                            loading="lazy"
                            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/d2375f47bd17a9196fbf9a71ac3a72769fb44c12a3ca19347510ae8ca0704289?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/d2375f47bd17a9196fbf9a71ac3a72769fb44c12a3ca19347510ae8ca0704289?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/d2375f47bd17a9196fbf9a71ac3a72769fb44c12a3ca19347510ae8ca0704289?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/d2375f47bd17a9196fbf9a71ac3a72769fb44c12a3ca19347510ae8ca0704289?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/d2375f47bd17a9196fbf9a71ac3a72769fb44c12a3ca19347510ae8ca0704289?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/d2375f47bd17a9196fbf9a71ac3a72769fb44c12a3ca19347510ae8ca0704289?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/d2375f47bd17a9196fbf9a71ac3a72769fb44c12a3ca19347510ae8ca0704289?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/d2375f47bd17a9196fbf9a71ac3a72769fb44c12a3ca19347510ae8ca0704289?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&"
                            className="grow shrink-0 max-w-full aspect-[0.8] w-[295px] max-md:mt-10"
                        />
                    </div>
                    <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
                        <img
                            loading="lazy"
                            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/9d1f32031e4fa80bf863a8ffbe9cc28dc7fce0fc3e883717bafb8f822c09d5cd?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/9d1f32031e4fa80bf863a8ffbe9cc28dc7fce0fc3e883717bafb8f822c09d5cd?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/9d1f32031e4fa80bf863a8ffbe9cc28dc7fce0fc3e883717bafb8f822c09d5cd?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/9d1f32031e4fa80bf863a8ffbe9cc28dc7fce0fc3e883717bafb8f822c09d5cd?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/9d1f32031e4fa80bf863a8ffbe9cc28dc7fce0fc3e883717bafb8f822c09d5cd?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/9d1f32031e4fa80bf863a8ffbe9cc28dc7fce0fc3e883717bafb8f822c09d5cd?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/9d1f32031e4fa80bf863a8ffbe9cc28dc7fce0fc3e883717bafb8f822c09d5cd?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/9d1f32031e4fa80bf863a8ffbe9cc28dc7fce0fc3e883717bafb8f822c09d5cd?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&"
                            className="grow shrink-0 max-w-full aspect-[0.8] w-[295px] max-md:mt-10"
                        />
                    </div>
                </div>
            </div>
        </>


    );
};

export default OpenTrip;
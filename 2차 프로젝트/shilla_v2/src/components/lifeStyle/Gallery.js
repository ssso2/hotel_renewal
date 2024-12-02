

const Gallery = ({ propImages }) => {
    return (
        <div className="gallery">
            <div style={{'--swiper-navigation-color': '#fff', '--swiper-pagination-color': '#fff'}} className="swiper mySwiper2">
                <div className="swiper-wrapper">
                    {propImages.map((img, index)=> (
                        <div className="swiper-slide" key={index}>
                            <img src={img} alt={`gallery-img-${index}`} />
                        </div>
                    ))}
                </div>
                <div className="swiper-button-next"></div>
                <div className="swiper-button-prev"></div>
            </div>
            <div thumbsSlider="" className="swiper mySwiper">
                <div className="swiper-wrapper">
                    {propImages.map((img, index)=>(
                        <div className="swiper-slide" key={index}>
                            <img src={img} alt={`gallery-img-${index}`} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Gallery;
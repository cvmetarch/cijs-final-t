import { useState } from 'react';
import ReactSimplyCarousel from 'react-simply-carousel';
import { Link } from 'react-router-dom';
import ban1 from '../assets/banner-top0.png';
import ban2 from '../assets/banner-top1.png';
import ban3 from '../assets/banner-top2.png';
import ban4 from '../assets/banner-top3.jpg';
import ban5 from '../assets/banner-top4.png';

function ReactSimplyCarouselExample() {
    const [activeSlideIndex, setActiveSlideIndex] = useState(0);

    return (
        <div style={{ marginBottom: '5%' }}>
            <ReactSimplyCarousel
                activeSlideIndex={activeSlideIndex}
                onRequestChange={setActiveSlideIndex}
                itemsToShow={1}
                itemsToScroll={1}
                forwardBtnProps={{
                    //here you can also pass className, or any other button element attributes
                    style: {
                        alignSelf: 'center',
                        background: 'black',
                        border: 'none',
                        borderRadius: '50%',
                        color: 'white',
                        cursor: 'pointer',
                        fontSize: '20px',
                        height: 30,
                        lineHeight: 1,
                        textAlign: 'center',
                        width: 30,
                    },
                    children: <span>{`>`}</span>,
                }}
                backwardBtnProps={{
                    //here you can also pass className, or any other button element attributes
                    style: {
                        alignSelf: 'center',
                        background: 'black',
                        border: 'none',
                        borderRadius: '50%',
                        color: 'white',
                        cursor: 'pointer',
                        fontSize: '20px',
                        height: 30,
                        lineHeight: 1,
                        textAlign: 'center',
                        width: 30,
                    },
                    children: <span>{`<`}</span>,
                }}
                responsiveProps={[
                    {
                        itemsToShow: 1,
                        itemsToScroll: 1,
                        minWidth: 768,
                    },
                ]}
                speed={400}
                easing="linear"
            >
                {/* here you can also pass any other element attributes. Also, you can use your custom components as slides */}
                <Link to="product">
                    <div style={{ backgroundSize: 'cover', width: '65vw', height: 350, backgroundImage: `url(${ban1})` }}>                    
                    </div>
                </Link>
                <Link to="product">
                    <div style={{ backgroundSize: 'cover', width: '65vw', height: 350, backgroundImage: `url(${ban2})` }}>
                    </div>
                </Link>
                <Link to="product">
                    <div style={{ backgroundSize: 'cover', width: '65vw', height: 350, backgroundImage: `url(${ban3})` }}>
                    </div>
                </Link>
                <Link to="product">
                    <div style={{ backgroundSize: 'cover', width: '65vw', height: 350, backgroundImage: `url(${ban4})` }}>
                    </div>
                </Link>
                <Link to="product">
                    <div style={{ backgroundSize: 'cover', width: '65vw', height: 350, backgroundImage: `url(${ban5})` }}>
                    </div>                
                </Link>
            </ReactSimplyCarousel>
        </div>
    );
}

export default ReactSimplyCarouselExample;
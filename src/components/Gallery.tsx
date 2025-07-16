import LightGallery from 'lightgallery/react';

// import styles
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';



// import plugins if you need
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';


import Gallery1 from "../assets/Gallery1 (1).webp"
import Gallery2 from "../assets/Gallery1 (2).webp"
import Gallery3 from "../assets/Gallery1 (3).webp"
import Gallery4 from "../assets/Gallery1 (4).jpg"
import Gallery5 from "../assets/Gallery1 (5).jpg"
import Gallery6 from "../assets/Gallery1 (6).jpg"
import Gallery7 from "../assets/Gallery1 (7).jpg"
import Gallery8 from "../assets/Gallery1 (8).jpg"
import Gallery9 from "../assets/Gallery1 (9).jpg"
import Gallery10 from "../assets/Gallery1 (10).jpg"
import Gallery11 from "../assets/Gallery1 (11).jpg"
import Gallery12 from "../assets/Gallery1 (12).jpg"
import Gallery13 from "../assets/Gallery1 (13).jpg"
import Gallery14 from "../assets/Gallery1 (14).jpg"
import Gallery15 from "../assets/Gallery1 (15).jpg"
import Gallery16 from "../assets/Gallery1 (16).jpg"
import Gallery17 from "../assets/Gallery1 (17).jpg"

function Gallery() {
    const onInit = () => {
        console.log('lightGallery has been initialized');
    };
    return (
        <div id="gallery" className="container mx-auto md:px-4 py-8">
            <LightGallery
                onInit={onInit}
                speed={500}
                plugins={[lgThumbnail, lgZoom]}
                elementClassNames="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 md:px-2 "
            >
                <a href={Gallery1}>
                    <img alt="Gallery1" src={Gallery1} className="w-full h-48 object-cover rounded-lg" />
                </a>
                <a href={Gallery2}>
                    <img alt="Gallery2" src={Gallery2} className="w-full h-48 object-cover rounded-lg" />
                </a>
                <a href={Gallery3}>
                    <img alt="Gallery3" src={Gallery3} className="w-full h-48 object-cover rounded-lg" />
                </a>
                <a href={Gallery4}>
                    <img alt="Gallery4" src={Gallery4} className="w-full h-48 object-cover rounded-lg" />
                </a>
                <a href={Gallery5}>
                    <img alt="Gallery5" src={Gallery5} className="w-full h-48 object-cover rounded-lg" />
                </a>
                <a href={Gallery6}>
                    <img alt="Gallery6" src={Gallery6} className="w-full h-48 object-cover rounded-lg" />
                </a>
                <a href={Gallery7}>
                    <img alt="Gallery7" src={Gallery7} className="w-full h-48 object-cover rounded-lg"/>
                </a>
                <a href={Gallery8}>
                    <img alt="Gallery8" src={Gallery8} className="w-full h-48 object-cover rounded-lg" />
                </a>
                <a href={Gallery9}>
                    <img alt="Gallery9" src={Gallery9} className="w-full h-48 object-cover rounded-lg" />
                </a>
                <a href={Gallery10}>
                    <img alt="Gallery10" src={Gallery10}  className="w-full h-48 object-cover rounded-lg"/>
                </a>
                <a href={Gallery11}>
                    <img alt="Gallery11" src={Gallery11} className="w-full h-48 object-cover rounded-lg" />
                </a>
                <a href={Gallery12}>
                    <img alt="Gallery12" src={Gallery12} className="w-full h-48 object-cover rounded-lg" />
                </a>
                <a href={Gallery13}>
                    <img alt="Gallery13" src={Gallery13} className="w-full h-48 object-cover rounded-lg" />
                </a>
               
                <a href={Gallery15}>
                    <img alt="Gallery15" src={Gallery15} className="w-full h-48 object-cover rounded-lg" />
                </a>
                <a href={Gallery16}>
                    <img alt="Gallery16" src={Gallery16} className="w-full h-48 object-cover rounded-lg" />
                </a>
                <a href={Gallery17}>
                    <img alt="Gallery17" src={Gallery17} className="w-full h-48 object-cover rounded-lg" />
                </a>
                ...
            </LightGallery>
        </div>
    );
}

export default Gallery;
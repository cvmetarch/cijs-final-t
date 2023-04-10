import ReactSimplyCarouselExample from "../components/slider";
import { useState } from "react";
import { Link } from 'react-router-dom';
import useStyles from "./styles";

import bgInfo from "../assets/bginfo.jpg";
import bgInfo2 from "../assets/bginfo2.jpg";
import tinChonlactay from "../assets/bi-quyet-chon-lac-tay-510x383.jpg";
import tinQuatang from "../assets/qua-tang-83-510x383.jpg";
import tinDaibang from "../assets/dai-bang-510x383.jpg";
import baoChi from "../assets/vtc.png";

const Home = () => {
    const classes = useStyles(); 
    const [isHovering, setIsHovering] = useState(false);

    const handleMouseEnter = () => {
        setIsHovering(true);
    };

    const handleMouseLeave = () => {
        setIsHovering(false);
    };

    return (
        <main className={classes.content}>
            <div className={classes.toolbar} />
            <ReactSimplyCarouselExample/>

            <section style={{width: '80%', display:'flex', justifyContent: 'center'}}>
                <div className={classes.midContainer}>
                    <div className={classes.abLeft} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                        <img src={bgInfo} alt=''
                            style={{ width: '100%', objectFit: 'contain', opacity: isHovering ? '50%':'100%'}}
                                />
                        <div className={classes.abUs} style={{ display: isHovering ? '' : 'none' }}>
                                <h1>
                                    Cyber Silver – Vị thế dẫn đầu trong thị trường trang sức vàng phong thủy
                                </h1>
                                <p style={{fontSize: 'small'}}>
                                    Xuất hiện trên thị
                                    trường với một cái tên thuần Việt, Cyber Silver mang những khao khát kết nối
                                    truyền bá văn hoá Á Đông nói chung và văn hoá Việt Nói riêng đến với thế
                                    giới. Các hình ảnh hoạ tiết trên sản phẩm của Cyber Silver là biểu tượng của
                                    truyền thống, đức tin và suy nghĩ của người sử dụng… Tất cả đều gợi lên hình
                                    ảnh những con người hiện đại nhưng không đánh mất đi giá trị truyền
                                    thống.
                                </p>
                                <button
                                style={{border: 'none', background:'transparent', padding: '5px'}}>
                                    <Link to="kt-trangsuc" style={{fontWeight: 'bolder'}}>
                                        Xem thêm
                                    </Link>
                                </button>
                            </div>
                    </div>
                    <div className={classes.abRight}>
                        <img src={bgInfo2} alt=''
                            style={{width: '100%', objectFit: 'contain'}}/>
                    </div>
                </div>
            </section>

            <section style={{ width: '80%'}} className={classes.bottomContainer}>
                <h3>TIN TỨC</h3>
                <div className={classes.bottomContainer}>
                    <section className={classes.preFooter}>
                        <nav>
                            <Link to="kt-trangsuc">
                                <img width="100%" height="" src={tinChonlactay}
                                    alt="" sizes="(max-width: 510px) 100vw, 510px"/>
                            </Link>
                            <div>
                                <h4>
                                    <Link to="kt-trangsuc" style={{textDecoration:'none'}}>
                                        Bí Quyết Chọn Lắc Tay Bạn Gái Nên Biết
                                    </Link>
                                </h4>
                                <i>11/04/2023</i>
                                <div>
                                    Lắc tay nữ là một trong những món đồ phụ kiện
                                        phố biển mà bất cứ cô gái cũng sở hữu ít
                                        nhất một chiếc
                                </div>
                                <Link to="kt-trangsuc" style={{ textDecoration: 'none' }}>
                                    Xem thêm »
                                </Link>
                            </div>
                        </nav>

                        <nav>
                            <Link to="kt-trangsuc">
                                <div>
                                    <img width="100%" height="" src={tinQuatang} alt=""
                                        sizes="(max-width: 510px) 100vw, 510px"/>
                                </div>
                            </Link>
                            <div>
                                <h4>
                                    <Link to="kt-trangsuc" style={{ textDecoration: 'none' }}>
                                        Gợi Ý Mẫu Trang Sức Tặng
                                        Bạn Gái , Người Yêu, Vợ Trong Ngày 8/3
                                    </Link>
                                </h4>
                                <i>10/03/2023</i>
                                <div>
                                    Ngày 8/3 hàng năm là ngày mà phái mạnh thể
                                        hiện tình cảm, sự quan tâm của mình đến một
                                        nửa thế giới. Hãy dành...
                                </div>
                                <Link to="kt-trangsuc">Xem thêm »</Link>
                            </div>
                        </nav>

                        <nav>
                            <Link to="kt-phongthuy">
                                <div>
                                    <img width="100%" height="" src={tinDaibang} alt=""
                                        loading="lazy" sizes="(max-width: 510px) 100vw, 510px"/>
                                </div>
                            </Link>
                            <div>
                                <h4>
                                    <Link to="kt-phongthuy" style={{ textDecoration: 'none' }}>
                                        Tìm hiểu về Đại bàng – Biểu
                                        tượng của sức mạnh và sự kiên cường
                                        </Link>
                                </h4>
                                <i>09/04/2023</i>
                                <div>
                                    Chúng ta thường được nghe nhiều về hình ảnh đại
                                        bàng tung cánh, là loài chim được mệnh danh: ”
                                        Chúa tể của bầu trời”.
                                </div>
                                <Link to="kt-phongthuy">Xem thêm »</Link>
                            </div>
                        </nav>
                    </section>
                </div>
            </section>

            <section style={{ width: '80%' }} className={classes.bottomContainer}>
                <h3>BÁO CHÍ NÓI VỀ CYBER SILVER</h3>
                <div className={classes.bottomContainer}>
                    <div className={classes.newsReview}
                        style={{opacity: isHovering ? '50%' : '100%'}}
                        onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                        <Link to="tintuc" style={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignContent: 'center',
                            alignItems: 'center',
}}>
                            <img src={baoChi} width="100%" height="" 
                                alt="" sizes="(max-width: 510px) 100vw, 510px" />
                            <div className={classes.overLay} style={{ opacity: isHovering ? '100%' : '0%' }}>
                                Đọc tiếp
                            </div>
                        </Link>
                    </div>
                </div>                
            </section>            
        </main>
        );
};

export default Home;
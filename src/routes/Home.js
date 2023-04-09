import ReactSimplyCarouselExample from "../components/slider";
import { Link } from 'react-router-dom';
import useStyles from "./styles";

import facebook from "../assets/fb-banner.png";
import youtube from "../assets/VCB-OUTRO-FN.00_00_00_00.Still001-1024x576.png";
import shopee from "../assets/banner-shopep-vcb-1024x528.png";
import bgInfo from "../assets/bginfo.jpg";
import bgInfo2 from "../assets/bginfo2.jpg";

const Home = () => {
    const classes = useStyles(); 

    return (
        <main className={classes.content}>
            <div className={classes.toolbar} />
            <ReactSimplyCarouselExample/>

            <section style={{ display:'flex', justifyContent: 'center'}}>
                <div className={classes.midContainer}>
                    <div className={classes.abLeft}>
                        <img src={bgInfo}
                            style={{width: '100%', objectFit: 'contain'}}
                                />
                            <div className={classes.abUs}>
                                <h1 style={{color: 'whitesmoke'}}>
                                    Cyber Silver – Vị thế dẫn đầu trong thị trường trang sức vàng phong thủy
                                </h1>
                                <p style={{color: 'whitesmoke'}}>
                                    Xuất hiện trên thị
                                    trường với một cái tên thuần Việt, Cyber Silver mang những khao khát kết nối
                                    truyền bá văn hoá Á Đông nói chung và văn hoá Việt Nói riêng đến với thế
                                    giới. Các hình ảnh hoạ tiết trên sản phẩm của Cyber Silver là biểu tượng của
                                    truyền thống, đức tin và suy nghĩ của người sử dụng… Tất cả đều gợi lên hình
                                    ảnh những con người hiện đại nhưng không đánh mất đi giá trị truyền
                                    thống.
                                </p>
                                <button
                                style={{border: '1px solid white', background:'transparent', padding: '5px'}}>
                                    <Link to="/" style={{fontWeight: 'bolder', color:'whitesmoke'}}>
                                        Xem thêm
                                    </Link>
                                </button>
                            </div>
                    </div>
                    <div className={classes.abRight}>
                        <img src={bgInfo2}
                            style={{width: '100%', objectFit: 'contain'}}/>
                    </div>
                </div>
            </section>

            <section>
                <h3>TIN TỨC</h3>
                <div className={classes.bottomContainer}>
                    <section className={classes.preFooter}>
                        <nav>
                            <a>
                                <img width="100%" height="100%" src="./images/bi-quyet-chon-lac-tay-510x383.jpg"
                                    alt="" sizes="(max-width: 510px) 100vw, 510px"/>
                            </a>
                            <div>
                                <h4>
                                    <a href="./product.html">Bí Quyết Chọn Lắc Tay Bạn Gái Nên Biết</a>
                                </h4>
                                <i>01/06/2022</i>
                                <div>
                                    <p>Lắc tay nữ là một trong những món đồ phụ kiện
                                        phố biển mà bất cứ cô gái cũng sở hữu ít
                                        nhất một chiếc</p>
                                </div>
                                <a>Xem thêm »</a>
                            </div>
                        </nav>

                        <nav>
                            <a>
                                <div>
                                    <img width="100%" height="100%" src="./images/qua-tang-83-510x383.jpg" alt=""
                                        sizes="(max-width: 510px) 100vw, 510px"/>
                                </div>
                            </a>
                            <div>
                                <h4>
                                    <a>
                                        Gợi Ý Mẫu Trang Sức Tặng
                                        Bạn Gái , Người Yêu, Vợ Trong Ngày 8/3
                                    </a>
                                </h4>
                                <i>01/06/2022</i>
                                <div>
                                    <p>Ngày 8/3 hàng năm là ngày mà phái mạnh thể
                                        hiện tình cảm, sự quan tâm của mình đến một
                                        nửa thế giới. Hãy dành...</p>
                                </div>
                                <a>Xem thêm »</a>
                            </div>
                        </nav>

                        <nav>
                            <a>
                                <div>
                                    <img width="100%" height="100%" src="./images/dai-bang-510x383.jpg" alt=""
                                        loading="lazy" sizes="(max-width: 510px) 100vw, 510px"/>
                                </div>
                            </a>
                            <div>
                                <h4>
                                    <a>Tìm hiểu về Đại bàng – Biểu
                                        tượng của sức mạnh và sự kiên cường</a>
                                </h4>
                                <i>01/06/2022</i>
                                <div>
                                    <p>Chúng ta thường được nghe nhiều về hình ảnh đại
                                        bàng tung cánh, là loài chim được mệnh danh :”
                                        Chúa tể của bầu trời”.</p>
                                </div>
                                <a>Xem thêm »</a>
                            </div>
                        </nav>
                    </section>
                </div>
            </section>

            <section>
                <h3>BÁO CHÍ NÓI VỀ CYBER SILVER</h3>
                <div className={classes.bottomContainer}>
                    <div className={classes.newsReview}>
                        <a>
                            <img src='./images/vtc.png'/>
                                <div>Đọc tiếp</div>
                        </a>
                    </div>
                </div>
            </section>

            <section className={classes.bottomContainer}>
                <div className={classes.preFooter}>
                    <nav>
                        <h4>FANPAGE</h4>
                        <div className={classes.ban3}>
                            <Link className={classes.link} to="https://fb.com/chanhdeptrai">
                                <img width="100%" height="100%" src={facebook} alt=""
                                sizes="(max-width: 1020px) 100vw, 1020px"/>
                            </Link>
                        </div>
                    </nav>
                    <nav>
                        <h4>YOUTUBE</h4>
                        <div className={classes.ban3}>
                            <Link className={classes.link} to="https://fb.com/chanhdeptrai">
                            <img width="100%" height="100%" src={youtube} alt=""
                                sizes="(max-width: 1020px) 100vw, 1020px"/>
                            </Link>
                        </div>
                    </nav>
                    <nav>
                        <h4>SHOPEE</h4>
                        <div className={classes.ban3}>
                            <Link className={classes.link} to="https://fb.com/chanhdeptrai">
                            <img width="100%" height="100%" src={shopee} alt=""
                                sizes="(max-width: 1020px) 100vw, 1020px"/>
                            </Link>
                        </div>
                    </nav>
                </div>
            </section>
        </main>
        );
};

export default Home;
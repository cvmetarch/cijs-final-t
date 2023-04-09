import React from "react";
import { AppBar } from "@material-ui/core";
import useStyles from "./styles";

import bct from "../../assets/logoSaleNoti.png";

const Footer = () => {
    const classes = useStyles();

    return (
        <>
            <AppBar position="relative" className={classes.appBar} color="inherit">
                <header className={classes.footer}>
                    <ul className={classes.ul} >
                        <li>
                            <strong>LIÊN HỆ VỚI CHÚNG TÔI</strong>                            
                        </li>
                        <li style={{ color: 'red' }}>
                            <a style={{ textDecoration: 'none' }} href='tel:+84984320841'>Hotline mua hàng 1: <strong>098 43 20841</strong></a>
                        </li>
                        <li style={{ color: 'red' }}>
                            <a style={{ textDecoration: 'none' }} href='tel:+84986363131'>Hotline mua hàng 2: <strong>098 63 63131</strong></a>
                        </li>
                        <li>
                            (Tư vẫn miễn phí từ 8h30-22h các ngày trong tuần)
                        </li>
                        <br/>
                        <li>
                            <strong>HỖ TRỢ KHÁCH HÀNG</strong>
                        </li>
                        <li>
                            <a style={{textDecoration:'none'}} href='/'>Điều khoản sử dụng</a>
                        </li>
                        <li>
                            <a style={{ textDecoration: 'none' }} href='/'>Chính sách đổi và bảo hành</a>                            
                        </li>
                        <li>
                            <a style={{ textDecoration: 'none' }} href='/'>Chính sách vận chuyển &amp; thanh toán</a>                            
                        </li>
                        <li>
                            <a style={{ textDecoration: 'none' }} href='/'>Chính sách bảo mật</a>
                        </li>
                    </ul>

                    <ul className={classes.ul} >
                        <li>
                            <strong>© CÔNG TY TNHH TRANG SỨC CYBER SILVER</strong>
                        </li>
                        <li>
                            Showroom:
                            <br/>12A Nhiêu Tứ - Phường 7 - Phú Nhuận - TP HCM
                        </li>
                        <br/>
                        <li>
                            Tel: 098.63.63131
                        </li>
                        <li>
                            <a style={{ textDecoration: 'none' }} href="mailto:chanhvokts@gmail.com">Email: chanhvokts@gmail.com</a>
                        </li>
                        <li>
                            Đã chứng nhận đăng ký kinh doanh: 0107994675
                        </li>
                    </ul>

                    <ul className={classes.ul} >
                        <li>
                            <div style={{display: 'flex', justifyContent: 'center'}}>
                                <img src={bct} alt="BoCongThuong" height="65px" className={classes.image}/>
                            </div>
                        </li>
                    </ul>               
                </header>
            </AppBar>
        </>
    )
}

export default Footer;
import { Col, Image, Row } from 'antd';
import React from 'react';

import "./Footer.css";

export default function Footer(){
    return(
        <footer>
            <nav
                style={{
                        backgroundColor: "#2C2C2C",
                        color: "white",
                        margin: 0,
                        paddingBottom: 50,
                        paddingLeft: '5%',
                        paddingRight: '5%',
                        paddingTop: 50
                    }} 
            >
                <Row>
                    <Col xs={24} xl={9}>
                        <Image
                            fallback=""
                            src="error"
                            width={50}
                            height={50}
                            style={{ marginTop: -5}}
                        />
                        <label style={{ paddingLeft: 10, fontSize: 25}}>Toflyn</label>
                    </Col>
                    <Col span={24} style={{ paddingTop: 12}}>
                        <span>แหล่งรวมร้านขายของเล่น ทั้งมือหนึ่ง มือสอง ที่มากที่สุดในประเทศ</span>
                    </Col>
                </Row>
            </nav>
        </footer>
    )
}
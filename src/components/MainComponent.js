import React, { Component } from 'react';

class MainComponent extends Component {
    render() {
        return (
            <>
                <main id="main">
                    <section id="section1">
                        <div class="container">
                            <span class="ani ani1"><img src="./img/2022_NewYear_main_slogan.png" alt=""/></span>
                            <span class="ani ani2"><img src="./img/2022_NewYear_main_new_year_citrus_tea.png" alt=""/></span>
                            <span class="ani ani3"><img src="./img/2022_NewYear_main_lavender_beige_oat_latte.png" alt=""/></span>
                            <span class="ani ani4"><img src="./img/2022_NewYear_main_dolce_black_milk_tea.png" alt=""/></span>
                            <span class="ani ani5"><a href="#" class="more-btn">자세히 보기</a></span>
                        </div>
                    </section>
                    <section id="section2">
                        <div class="container">
                            <div class="left">{/* <!-- 공지사항  550  relative --> */}
                                <div class="left-box"> {/* <!-- 높이24 --> */}
                                    <div class="notice-title">
                                        <h2 class="blind">공지사항</h2>
                                    </div> {/* <!--  65 --> */}
                                    <div class="notice-list">
                                        <ul>
                                            <li class="notice-slide"><a href="#">Gift배송하기 서비스 배송지연 안내</a></li>
                                            <li class="notice-slide"><a href="#">홈페이지 이용약관 / 스타벅스 카드 이용약관 개정 안내</a></li>
                                            <li class="notice-slide"><a href="#">제25기 정기주주총회 권리행사 기준일 공고</a></li>
                                            <li class="notice-slide"><a href="#">시스템 개선 및 점검 안내</a></li>
                                            <li class="notice-slide"><a href="#">스타벅스커피 코리아 원산지 오표시 관련 고객설명문</a></li>
                                        </ul>
                                    </div>  {/* <!-- 485  -->  */}
                                    {/* <!-- 더보기 --> */}
                                    <div class="notice-more">{/* <!-- absolute 62*62 --> */}
                                        <a href="#" class="more-btn" title="Notice More View">
                                            <img src="./img/btn_notice_plus.png" alt=""/>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div class="right">{/* <!-- 프로모션 550 --> */}
                                <div class="promotion">{/* <!--  234*36 --> */}
                                    <a href="#" class="promotion-btn blind" title="스타벅스 프로모션">스타벅스 프로모션</a>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section id="section3">
                        <div class="container">

                            <div class="slide-container">
                                <div class="slide-view">
                                    <ul class="slide-wrap">
                                        <li class="slide slide3"><div><img src="./img/slide_03.jpg" alt=""/></div></li>
                                        <li class="slide slide1"><div><img src="./img/slide_01.jpg" alt=""/></div></li>
                                        <li class="slide slide2"><div><img src="./img/slide_02.jpg" alt=""/></div></li>
                                        <li class="slide slide3"><div><img src="./img/slide_03.jpg" alt=""/></div></li>
                                        <li class="slide slide1"><div><img src="./img/slide_01.jpg" alt=""/></div></li>
                                    </ul>
                                </div>                    
                            </div>

                            {/* <!-- 페이지버튼 --> */}
                            <ul class="page-btn-box">
                                <li><a href="#" class="play-btn"></a></li>
                                <li><a href="#" class="page-btn addPage"></a></li>
                                <li><a href="#" class="page-btn"></a></li>
                                <li><a href="#" class="page-btn"></a></li>
                            </ul>

                            {/* <!-- 좌우화살버튼 --> */}
                            <span class="prev-btn-arrow">
                                <a href="#" class="prev-btn blind">prev-btn</a>
                            </span>    

                            <span class="next-btn-arrow">
                                <a href="#" class="next-btn blind">next-btn</a>
                            </span>    



                        </div>
                    </section>
                    <section id="section4">
                        <div class="container">
                            <div class="left">
                                <img src="./img/rewards-logo.png" alt=""/>
                            </div>
                            <div class="right">
                                <div class="top">
                                    <h2>
                                        <span>스타벅스만의 특별한 혜택,</span> <strong>스타벅스 리워드</strong>
                                    </h2>
                                    <div>
                                        <h3 class="pc">
                                            <strong>스타벅스 회원이세요?</strong><span>로그인을 통해 나만의 리워드를 확인해보세요.</span><br/>
                                            <strong>스타벅스 회원이 아니세요?</strong><span>가입을 통해 리워드 혜택을 즐기세요.</span>
                                        </h3>
                                        <h3 class="mobile">
                                            <strong>스타벅스 회원이세요?</strong><span>로그인을 통해<br/> 나만의 리워드를 확인해보세요.</span><br/>
                                            <strong>스타벅스 회원이 아니세요?</strong><br/><span>가입을 통해 리워드 혜택을 즐기세요.</span>
                                        </h3>
                                        <span>
                                            <a href="#" class="sign-up">회원가입</a>
                                            <a href="#" class="sign-in">로그인</a>
                                        </span>
                                    </div>
                                </div>
                                <div class="bottom">
                                    <h4 class="pc">
                                        <span>회원 가입 후, 스타벅스 e-Gift Card를</span> <stong>"나에게 선물하기"로 구매하시고, 편리하게 등록하세요!</stong><br/>
                                        <span>카드를 등록하여 스타벅스 리워드 회원이 되신 후, 첫 구매를 하시면 무료 음료쿠폰을 드립니다!</span>
                                    </h4>
                                    <h4 class="mobile">
                                        <span>회원 가입 후, 스타벅스 e-Gift Card를</span><br/> <stong>"나에게 선물하기"로 구매하시고, 편리하게 등록하세요!</stong><br/>
                                        <span>카드를 등록하여 스타벅스 리워드 회원이 되신 후,<br/> 첫 구매를 하시면 무료 음료쿠폰을 드립니다!</span>
                                    </h4>
                                    <span>
                                        <a href="#" class="gift-card">e-Gift Card 선물하기</a>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section id="section5">
                        <div class="container">
                            <div class="left">
                                <img src="./img/2022_NewYear_bean_bean.png" alt=""/>
                            </div>
                            <div class="right">
                                <span>
                                    <img class='pc' src="./img/2022_NewYear_bean_txt.png" alt="활기찬 새해와..." />
                                    <img class='mobile' src="./img/2022_m_NewYear_bean_txt.png" alt="활기찬 새해와..." />
                                    <a href="#" class="more-btn">자세히 보기</a>
                                </span>
                            </div>
                        </div>
                    </section>
                    <section id="section6"><div class="container"></div></section>
                    <section id="section7"><div class="container"></div></section>
                    <section id="section8"><div class="container"></div></section>
                    <section id="section9"><div class="container"></div></section>
                </main>
            </>
        );
    }
}

export default MainComponent;
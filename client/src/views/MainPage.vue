<template>
    <div>
        <Header />
        <body>
            <!--상단배경-->
            <div class="hero">
                <div class="hero-slide">
                    <div class="img overlay" :style="{'background-image': `url(${require('../images/hero_bg_3.jpg')})`}"></div>
                    <div class="img overlay" :style="{'background-image': `url(${require('../images/hero_bg_2.jpg')})`}"></div>
                    <div class="img overlay" :style="{'background-image': `url(${require('../images/hero_bg_1.jpg')})`}"></div>
                </div>

                <div class="container">
                    <div class="row justify-content-center align-items-center">
                        <div class="col-lg-9 text-center">
                            <h1 class="heading" data-aos="fade-up">파인홈에서 원하는 집을 찾아보세요!</h1>
                            <form action="#" class="narrow-w form-search d-flex align-items-stretch mb-3" data-aos="fade-up" data-aos-delay="200">
                                <input type="text" class="form-control px-4" placeholder="원하시는 지역명,지하철역을 입력해주세요.">
                                <button type="submit" class="btn btn-primary">✓</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            <!-- 하우스 찾기 전체 내역 -->
            <div class="section">
                <div class="container">
                    <div class="row mb-5 align-items-center">
                        <div class="col-lg-6">
                            <h2 class="font-weight-bold text-primary heading">쉐어하우스</h2>
                        </div>
                        <div class="col-lg-6 text-lg-end">
                            <p><a href="properties.html" target="_blank" class="btn btn-primary text-white py-3 px-4">더보기</a></p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-12">
                            <div class="property-slider-wrap">
                                <div class="property-slider">

                                    <div class="property-item">
                                        <a href="property-single.html" class="img">
                                            <img src="../images/img_1.jpg" alt="Image" class="img-fluid">
                                        </a>

                                        <div class="property-content">
                                            <div class="price mb-2"><span>$1,291,000</span></div>
                                            <div>
                                                <span class="d-block mb-2 text-black-50">5232 California Fake, Ave. 21BC</span>
                                                <span class="city d-block mb-3">California, USA</span>

                                                <div class="specs d-flex mb-4">
                                                    <span class="d-block d-flex align-items-center me-3">
                                                        <span class="icon-bed me-2"></span>
                                                    <span class="caption">2 beds</span>
                                                    </span>
                                                    <span class="d-block d-flex align-items-center">
                                                        <span class="icon-bath me-2"></span>
                                                    <span class="caption">2 baths</span>
                                                    </span>
                                                </div>

                                                <a href="property-single.html" class="btn btn-primary py-2 px-3">See details</a>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- .item -->

                                    <div class="property-item">

                                        <a href="property-single.html" class="img">
                                            <img src="../images/img_2.jpg" alt="Image" class="img-fluid">
                                        </a>

                                        <div class="property-content">
                                            <div class="price mb-2"><span>$1,291,000</span></div>
                                            <div>
                                                <span class="d-block mb-2 text-black-50">5232 California Fake, Ave. 21BC</span>
                                                <span class="city d-block mb-3">California, USA</span>

                                                <div class="specs d-flex mb-4">
                                                    <span class="d-block d-flex align-items-center me-3">
                                                        <span class="icon-bed me-2"></span>
                                                    <span class="caption">2 beds</span>
                                                    </span>
                                                    <span class="d-block d-flex align-items-center">
                                                        <span class="icon-bath me-2"></span>
                                                    <span class="caption">2 baths</span>
                                                    </span>
                                                </div>

                                                <a href="property-single.html" class="btn btn-primary py-2 px-3">See details</a>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- .item -->

                                    <div class="property-item">

                                        <a href="property-single.html" class="img">
                                            <img src="../images/img_3.jpg" alt="Image" class="img-fluid">
                                        </a>

                                        <div class="property-content">
                                            <div class="price mb-2"><span>$1,291,000</span></div>
                                            <div>
                                                <span class="d-block mb-2 text-black-50">5232 California Fake, Ave. 21BC</span>
                                                <span class="city d-block mb-3">California, USA</span>

                                                <div class="specs d-flex mb-4">
                                                    <span class="d-block d-flex align-items-center me-3">
                                                        <span class="icon-bed me-2"></span>
                                                    <span class="caption">2 beds</span>
                                                    </span>
                                                    <span class="d-block d-flex align-items-center">
                                                        <span class="icon-bath me-2"></span>
                                                    <span class="caption">2 baths</span>
                                                    </span>
                                                </div>

                                                <a href="property-single.html" class="btn btn-primary py-2 px-3">See details</a>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- .item -->

                                    <div class="property-item">

                                        <a href="property-single.html" class="img">
                                            <img src="../images/img_4.jpg" alt="Image" class="img-fluid">
                                        </a>

                                        <div class="property-content">
                                            <div class="price mb-2"><span>$1,291,000</span></div>
                                            <div>
                                                <span class="d-block mb-2 text-black-50">5232 California Fake, Ave. 21BC</span>
                                                <span class="city d-block mb-3">California, USA</span>

                                                <div class="specs d-flex mb-4">
                                                    <span class="d-block d-flex align-items-center me-3">
                                                        <span class="icon-bed me-2"></span>
                                                    <span class="caption">2 beds</span>
                                                    </span>
                                                    <span class="d-block d-flex align-items-center">
                                                        <span class="icon-bath me-2"></span>
                                                    <span class="caption">2 baths</span>
                                                    </span>
                                                </div>

                                                <a href="property-single.html" class="btn btn-primary py-2 px-3">See details</a>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- .item -->

                                    <div class="property-item">

                                        <a href="property-single.html" class="img">
                                            <img src="../images/img_5.jpg" alt="Image" class="img-fluid">
                                        </a>

                                        <div class="property-content">
                                            <div class="price mb-2"><span>$1,291,000</span></div>
                                            <div>
                                                <span class="d-block mb-2 text-black-50">5232 California Fake, Ave. 21BC</span>
                                                <span class="city d-block mb-3">California, USA</span>

                                                <div class="specs d-flex mb-4">
                                                    <span class="d-block d-flex align-items-center me-3">
                                                        <span class="icon-bed me-2"></span>
                                                    <span class="caption">2 beds</span>
                                                    </span>
                                                    <span class="d-block d-flex align-items-center">
                                                        <span class="icon-bath me-2"></span>
                                                    <span class="caption">2 baths</span>
                                                    </span>
                                                </div>

                                                <a href="property-single.html" class="btn btn-primary py-2 px-3">See details</a>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- .item -->

                                    <div class="property-item">

                                        <a href="property-single.html" class="img">
                                            <img src="../images/img_6.jpg" alt="Image" class="img-fluid">
                                        </a>

                                        <div class="property-content">
                                            <div class="price mb-2"><span>$1,291,000</span></div>
                                            <div>
                                                <span class="d-block mb-2 text-black-50">5232 California Fake, Ave. 21BC</span>
                                                <span class="city d-block mb-3">California, USA</span>

                                                <div class="specs d-flex mb-4">
                                                    <span class="d-block d-flex align-items-center me-3">
                                                        <span class="icon-bed me-2"></span>
                                                    <span class="caption">2 beds</span>
                                                    </span>
                                                    <span class="d-block d-flex align-items-center">
                                                        <span class="icon-bath me-2"></span>
                                                    <span class="caption">2 baths</span>
                                                    </span>
                                                </div>

                                                <a href="property-single.html" class="btn btn-primary py-2 px-3">See details</a>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- .item -->

                                    <div class="property-item">

                                        <a href="property-single.html" class="img">
                                            <img src="../images/img_7.jpg" alt="Image" class="img-fluid">
                                        </a>

                                        <div class="property-content">
                                            <div class="price mb-2"><span>$1,291,000</span></div>
                                            <div>
                                                <span class="d-block mb-2 text-black-50">5232 California Fake, Ave. 21BC</span>
                                                <span class="city d-block mb-3">California, USA</span>

                                                <div class="specs d-flex mb-4">
                                                    <span class="d-block d-flex align-items-center me-3">
                                                        <span class="icon-bed me-2"></span>
                                                    <span class="caption">2 beds</span>
                                                    </span>
                                                    <span class="d-block d-flex align-items-center">
                                                        <span class="icon-bath me-2"></span>
                                                    <span class="caption">2 baths</span>
                                                    </span>
                                                </div>

                                                <a href="property-single.html" class="btn btn-primary py-2 px-3">See details</a>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- .item -->

                                    <div class="property-item">

                                        <a href="property-single.html" class="img">
                                            <img src="../images/img_8.jpg" alt="Image" class="img-fluid">
                                        </a>

                                        <div class="property-content">
                                            <div class="price mb-2"><span>$1,291,000</span></div>
                                            <div>
                                                <span class="d-block mb-2 text-black-50">5232 California Fake, Ave. 21BC</span>
                                                <span class="city d-block mb-3">California, USA</span>

                                                <div class="specs d-flex mb-4">
                                                    <span class="d-block d-flex align-items-center me-3">
                                                        <span class="icon-bed me-2"></span>
                                                    <span class="caption">2 beds</span>
                                                    </span>
                                                    <span class="d-block d-flex align-items-center">
                                                        <span class="icon-bath me-2"></span>
                                                    <span class="caption">2 baths</span>
                                                    </span>
                                                </div>

                                                <a href="property-single.html" class="btn btn-primary py-2 px-3">See details</a>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- .item -->

                                    <div class="property-item">

                                        <a href="property-single.html" class="img">
                                            <img src="../images/img_1.jpg" alt="Image" class="img-fluid">
                                        </a>

                                        <div class="property-content">
                                            <div class="price mb-2"><span>$1,291,000</span></div>
                                            <div>
                                                <span class="d-block mb-2 text-black-50">5232 California Fake, Ave. 21BC</span>
                                                <span class="city d-block mb-3">California, USA</span>

                                                <div class="specs d-flex mb-4">
                                                    <span class="d-block d-flex align-items-center me-3">
                                                        <span class="icon-bed me-2"></span>
                                                    <span class="caption">2 beds</span>
                                                    </span>
                                                    <span class="d-block d-flex align-items-center">
                                                        <span class="icon-bath me-2"></span>
                                                    <span class="caption">2 baths</span>
                                                    </span>
                                                </div>

                                                <a href="property-single.html" class="btn btn-primary py-2 px-3">See details</a>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- .item -->
                                </div>
                                <div id="property-nav" class="controls" tabindex="0" aria-label="Carousel Navigation">
                                    <span class="prev" data-controls="prev" aria-controls="property" tabindex="-1">🡸</span>
                                    <span class="next" data-controls="next" aria-controls="property" tabindex="-1">🡺</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!--파인홈 설명-->
            <div class="section section-4 bg-light">
                <div class="container">
                    <div class="row justify-content-center  text-center mb-5">
                        <div class="col-lg-5">
                            <h2 class="font-weight-bold heading text-primary mb-4">프리미엄 주거 검색 플랫폼</h2>
                            <p class="text-black-50">거주 가능한 주요위치의 주거 공간을 제공합니다.<br>전문 공인중개사와 안전하게 주거공간을 만날 수 있습니다. </p>
                        </div>
                    </div>
                    <div class="row justify-content-between mb-5">
                        <div class="col-lg-7 mb-5 mb-lg-0 order-lg-2">
                            <div class="img-about dots">
                                <img src="../images/hero_bg_3.jpg" alt="Image" class="img-fluid">
                            </div>
                        </div>
                        <div class="col-lg-4">
                            <div class="d-flex feature-h">
                                <span class="wrap-icon me-3">
                                    <span class="icon-home2"></span>
                                </span>
                                <div class="feature-text">
                                    <h3 class="heading">2M Properties</h3>
                                    <p class="text-black-50">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum iste.</p>
                                </div>
                            </div>

                            <div class="d-flex feature-h">
                                <span class="wrap-icon me-3">
                                    <span class="icon-person"></span>
                                </span>
                                <div class="feature-text">
                                    <h3 class="heading">Top Rated Agents</h3>
                                    <p class="text-black-50">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum iste.</p>
                                </div>
                            </div>

                            <div class="d-flex feature-h">
                                <span class="wrap-icon me-3">
                                    <span class="icon-security"></span>
                                </span>
                                <div class="feature-text">
                                    <h3 class="heading">Legit Properties</h3>
                                    <p class="text-black-50">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum iste.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!--내방찾기-->
            <div class="section">
                <div class="row justify-content-center footer-cta" data-aos="fade-up">
                    <div class="col-lg-7 mx-auto text-center">
                        <h2 class="mb-4 ">손쉽게 찾고 계약해보세요! </h2>
                        <p><a href="#" target="_blank" class="btn btn-primary text-white py-3 px-4">내 방 찾아보기</a></p>
                    </div>
                    <!-- /.col-lg-7 -->
                </div>
                <!-- /.row -->
            </div>
        </body>
        <Footer />
    </div>
    
</template>

<script>
import Header from '../layouts/Header'
import Footer from '../layouts/Footer'

export default {
    name : 'MainPage',
    components: {
        Header,
        Footer
    }
}
</script>

<style scoped>
  @import '../css/style.css';
</style>

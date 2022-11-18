<template>
    <body>
        <Header />

        <div :style="{'background-image': `url(${require('../images/hero_bg_1.jpg')})`}" class="hero page-inner overlay">
            <div class="container">
                <div class="row justify-content-center align-items-center">
                    <div class="col-lg-9 text-center mt-5">
                        <h1 class="heading" data-aos="fade-up">1:1 문의</h1>

                        <nav aria-label="breadcrumb" data-aos="fade-up" data-aos-delay="200">
                            <ol class="breadcrumb text-center justify-content-center">
                                <li class="breadcrumb-item "><a href="#">운영</a></li>
                                <li class="breadcrumb-item active text-white-50" aria-current="page">1:1로 문의하세요!</li>
                            </ol>
                        </nav>
                    </div>
                </div>
            </div>
        </div>

        <div class="section">
            <div class="container">
                <div class="row">
                    <div class="col-lg-4 mb-5 mb-lg-0" data-aos="fade-up" data-aos-delay="100">
                        <div class="contact-info">
                            <div class="open-hours mt-4">
                                <i class="icon-clock-o"></i>
                                <h4 class="mb-2">운영시간</h4>
                                <p>
                                    월요일 ~ 금요일:<br>
                                    10:00 AM - 18:00 PM
                                </p>
                            </div>

                            <div class="email mt-4">
                                <i class="icon-envelope"></i>
                                <h4 class="mb-2">Email:</h4>
                                <p>info@findHome.co.kr</p>
                            </div>

                            <div class="phone mt-4">
                                <i class="icon-phone"></i>
                                <h4 class="mb-2">상담전화:</h4>
                                <p>111-0444</p>
                            </div>

                        </div>
                    </div>
                    <div class="col-lg-8" data-aos="fade-up" data-aos-delay="200">
                        <form action="#">
                            <div class="row">
                                <div class="col-6 mb-3">
                                    <input type="text" class="form-control" placeholder="이름">
                                </div>
                                <div class="col-6 mb-3">
                                    <input type="email" class="form-control" placeholder="메일주소">
                                </div>
                                <div class="col-12 mb-3">
                                    <input type="text" class="form-control" placeholder="제목">
                                </div>
                                <div class="col-12 mb-3">
                                    <textarea name="" id="" cols="30" rows="7" class="form-control" placeholder="문의내용"></textarea>
                                </div>

                                <div class="col-12">
                                    <input type="submit" value="보내기" class="btn btn-primary">
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div> <!-- /.untree_co-section -->

        <Footer />
    </body>
</template>

<script>
import Header from '../layouts/Header'
import Footer from '../layouts/Footer'

export default {
    name : 'ContactPage',
    components: {
        Header,
        Footer
    }
}
</script>

<style scoped>
  @import '../css/style.css';
</style>
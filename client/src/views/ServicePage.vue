<template>
    <body>
        <Header />
        <!--상단 이미지 및 내용-->
        <div :style="{'background-image': `url(${require('../images/hero_bg_1.jpg')})`}" class="hero page-inner overlay">
            <div class="container">
                <div class="row justify-content-center align-items-center">
                    <div class="col-lg-9 text-center mt-5">
                        <h1 class="heading" data-aos="fade-up">이용안내</h1>

                        <nav aria-label="breadcrumb" data-aos="fade-up" data-aos-delay="200">
                            <ol class="breadcrumb text-center justify-content-center">
                                <li class="breadcrumb-item "><a href="#">쉐어하우스</a></li>
                                <li class="breadcrumb-item active text-white-50" aria-current="page">원룸</li>
                            </ol>
                        </nav>
                    </div>
                </div>
            </div>
        </div>

        <div class="section bg-light">
            <div class="container">
                <div class="row">
                    <div class="col-6 col-lg-3"  data-aos="fade-up" data-aos-delay="300">
                        <div class="box-feature mb-4">
                            <span class="flaticon-house mb-4 d-block"></span>
                            <h3 class="text-black mb-3 font-weight-bold">투어신청</h3>
                            <p class="text-black-50">신청을 하시면 지점투어가 가능합니다.<br>투어신청은 현재 공실인 경우만 신청받습니다.<br>개인정보를 내 계정에서 확인 후 신청바랍니다.</p>
                            <p><a href="#" class="learn-more">Read more</a></p>
                        </div>
                    </div>
                    <div class="col-6 col-lg-3"  data-aos="fade-up" data-aos-delay="600">
                        <div class="box-feature mb-4">
                            <span class="flaticon-house-3 mb-4 d-block-1"></span>
                            <h3 class="text-black mb-3 font-weight-bold">홈뷰잉/인터뷰</h3>
                            <p class="text-black-50">파인홈 매니저의 안내에 따라 집을 투어하는 절차입니다.<br>매니저를 통해 해당 지점에서 집을 둘러보고 자세한 안내를 받으시게 됩니다.</p>
                            <p><a href="#" class="learn-more">Read more</a></p>
                        </div>
                    </div>	
                    <div class="col-6 col-lg-3"  data-aos="fade-up" data-aos-delay="500">
                        <div class="box-feature mb-4">
                            <span class="flaticon-building mb-4 d-block"></span>
                            <h3 class="text-black mb-3 font-weight-bold">계약서 작성/이용료 납부</h3>
                            <p class="text-black-50">대면으로 계약서를 작성합니다.<br>계약시 중개수수료는 일체 받지 않습니다.<br>계약금으로 보증금을 수령하며, 계약종료 후 퇴실시 반환됩니다.</p>
                            <p><a href="#" class="learn-more">Read more</a></p>
                        </div>
                    </div>
                    <div class="col-6 col-lg-3"  data-aos="fade-up" data-aos-delay="300">
                        <div class="box-feature mb-4">
                            <span class="flaticon-house-4 mb-4 d-block"></span>
                            <h3 class="text-black mb-3 font-weight-bold">입주완료</h3>
                            <p class="text-black-50">입주를 환영합니다! <br>입주 날짜에 맞춰서 입주해주세요!<br>계약금으로 보증금을 수령하며, 계약종료 후 퇴실시 반환됩니다.<br></p>
                            <p><a href="#" class="learn-more">Read more</a></p>
                        </div>
                    </div>
                    <div class="col-6 col-lg-3"  data-aos="fade-up" data-aos-delay="400">
                        <div class="box-feature mb-4">
                            <span class="flaticon-house-2 mb-4 d-block-3"></span>
                            <h3 class="text-black mb-3 font-weight-bold">Top Rated Agent</h3>
                            <p class="text-black-50">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                            <p><a href="#" class="learn-more">Read more</a></p>
                        </div>
                    </div>

                    <div class="col-6 col-lg-3"  data-aos="fade-up" data-aos-delay="400">
                        <div class="box-feature mb-4">
                            <span class="flaticon-building mb-4 d-block-3"></span>
                            <h3 class="text-black mb-3 font-weight-bold">Top Rated Agent</h3>
                            <p class="text-black-50">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                            <p><a href="#" class="learn-more">Read more</a></p>
                        </div>
                    </div>
                    <div class="col-6 col-lg-3"  data-aos="fade-up" data-aos-delay="500">
                        <div class="box-feature mb-4">
                            <span class="flaticon-house mb-4 d-block"></span>
                            <h3 class="text-black mb-3 font-weight-bold">Property for Sale</h3>
                            <p class="text-black-50">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                            <p><a href="#" class="learn-more">Read more</a></p>
                        </div>
                    </div>
                    <div class="col-6 col-lg-3"  data-aos="fade-up" data-aos-delay="600">
                        <div class="box-feature mb-4">
                            <span class="flaticon-house-1 mb-4 d-block-1"></span>
                            <h3 class="text-black mb-3 font-weight-bold">House for Sale</h3>
                            <p class="text-black-50">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                            <p><a href="#" class="learn-more">Read more</a></p>
                        </div>
                    </div>	

                </div>
            </div>
        </div>
        <Footer />
    </body>
</template>

<script>
import Header from '../layouts/Header'
import Footer from '../layouts/Footer'

export default {
    name : 'ServicePage',
    components: {
        Header,
        Footer
    }
}
</script>

<style scoped>
  @import '../css/style.css';
</style>
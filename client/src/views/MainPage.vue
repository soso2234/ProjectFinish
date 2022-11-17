<template>
    <div>
        <div>
            <Header />
        </div>

        <!--상단배경-->
        <div class="hero">
            <div class="hero-slide">
                <div class="img overlay" style="background-image: url('../images/hero_bg_3.jpg')"></div>
                <div class="img overlay" style="background-image: url('../images/hero_bg_2.jpg')"></div>
                <div class="img overlay" style="background-image: url('../images/hero_bg_1.jpg')"></div>
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
        
    </div>
    
</template>

<script>
import Header from '../layouts/Header'

export default {
    name : 'MainPage',
    components: {
        Header
    }
}
</script>

<template>
    <header>
        <!--네비게이션-->
        <nav class="site-nav">
            <div class="container">
                <div class="menu-bg-wrap">
                    <div class="site-navigation">
                        <a href="/" class="logo m-0 float-start">파인홈</a>
                        <!-- <img src="images/logo.png" style="width: 5%;"> -->

                        <ul class="js-clone-nav d-none d-lg-inline-block text-start site-menu float-end">
                            <li><a href="/">Home</a></li>
                            <li class="has-children active">
                                <router-link to="/about">
                                    <a>서비스소개</a>
                                </router-link>
                                <ul class="dropdown">
                                    <li>
                                        <router-link to="/about">
                                            <a>소개</a>
                                        </router-link>
                                    </li>
                                    <li>
                                        <router-link to="/service">
                                            <a>이용방법</a>
                                        </router-link>
                                    </li>
                                    <li>
                                        <router-link to="/contact">
                                            <a>1:1문의</a>
                                        </router-link>
                                    </li>
                                </ul>
                            </li>
                            <li class="has-children active">
                                <a href="#">하우스찾기</a>
                                <ul class="dropdown">
                                    <li class="has-children">
                                        <a href="#">서울</a>
                                        <ul class="dropdown">
                                            <li><a href="#">역삼역</a></li>
                                            <li><a href="#">강남역</a></li>
                                            <li><a href="#">광화문역</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="#">인천</a></li>
                                </ul>
                            </li>
                            <li><a href="#">회원가입/로그인</a></li>
                        </ul>
                        <a href="#" class="burger light me-auto float-end mt-1 site-menu-toggle js-menu-toggle d-inline-block d-lg-none" data-toggle="collapse" data-target="#main-navbar">
                            <span></span>
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    </header>
</template>
<script>
export default {
    name : 'HeaderMenu'
}

</script>

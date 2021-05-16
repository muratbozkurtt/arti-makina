<template>
    <div class="block about-us">
        <div class="about-us__image" :style="imageStyle" />
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-12 col-xl-10">
                    <div class="about-us__body">
                        <h1 class="about-us__title">
                            Hakkımızda
                        </h1>
                        <div class="about-us__text typography">
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Cras lacus metus, convallis ut leo nec, tincidunt
                                eleifend justo. Ut felis orci, hendrerit a pulvinar et,
                                gravida ac lorem. Sed vitae molestie sapien, at
                                sollicitudin tortor.
                            </p>
                            <p>
                                Duis id volutpat libero, id vestibulum purus.Donec euismod
                                accumsan felis,egestas lobortis velit tempor vitae. Integer
                                eget velit fermentum, dignissim odio non, bibendum velit.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">

import { Vue, Component } from 'vue-property-decorator'
import { SwiperOptions } from 'swiper/types/swiper-options'
import AppLink from '~/components/shared/app-link.vue'
import Carousel from '~/components/shared/carousel.vue'
import CarouselSlide from '~/components/shared/carousel-slide.vue'

@Component({
    components: { AppLink, Carousel, CarouselSlide },
    head () {
        return {
            title: 'Hakkımızda'
        }
    }
})
export default class SitePageAboutUs extends Vue {
    imageStyle = {
        backgroundImage: `url("${this.$url.img('/images/aboutus.jpg')}")`
    }

    teammates = [
        {
            avatar: '/images/teammates/teammate-1.jpg',
            name: 'Michael Russo',
            position: 'Chief Executive Officer'
        },
        {
            avatar: '/images/teammates/teammate-2.jpg',
            name: 'Katherine Miller',
            position: 'Marketing Officer'
        },
        {
            avatar: '/images/teammates/teammate-3.jpg',
            name: 'Anthony Harris',
            position: 'Finance Director'
        }
    ]

    carouselOptions: SwiperOptions = {
        slidesPerView: 1,
        spaceBetween: 24,
        breakpoints: {
            768: { slidesPerView: 3, spaceBetween: 32 },
            380: { slidesPerView: 2, spaceBetween: 24 }
        }
    }
}

</script>

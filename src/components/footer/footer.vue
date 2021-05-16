<template>
    <div class="site-footer">
        <div class="container">
            <div class="site-footer__widgets">
                <div class="row">
                </div>
            </div>

            <div class="site-footer__bottom">
                <div class="site-footer__copyright">
                    <!-- copyright -->
                    Design by <a :href="theme.author.profile_url" target="_blank">{{ theme.author.name }}</a>
                    <!-- copyright / end -->
                </div>
                <div class="site-footer__payments">
                    <img :src="$url.img('/images/payments.png')" alt="">
                </div>
            </div>
        </div>
        <ToTop />
    </div>
</template>

<script lang="ts">

import { Vue, Component } from 'vue-property-decorator'
import FooterLinks from '~/components/footer/footer-links.vue'
import FooterNewsletter from '~/components/footer/footer-newsletter.vue'
import ToTop from '~/components/footer/to-top.vue'
import theme from '~/data/theme'

@Component({
    components: { ToTop, FooterNewsletter, FooterLinks }
})
export default class Footer extends Vue {
    theme = theme
}

</script>

<template>
    <div
        :class="[
            'nav-panel',
            {'nav-panel--sticky': stickyMode}
        ]"
    >
        <div class="nav-panel__container container">
            <div class="nav-panel__row">
                <div v-if="layout === 'compact'" class="nav-panel__logo">
                    <AppLink to="/">
                        <!-- logo -->
                        <LogoSmallSvg />
                        <!-- logo / end -->
                    </AppLink>
                </div>

                <!-- .nav-links -->
                <NavLinks ref="nav" class="nav-panel__nav-links" />
                <!-- .nav-links / end -->

                <div class="nav-panel__indicators">
                    <SearchScope>
                        <Indicator
                            v-if="layout === 'compact'"
                            ref="searchIndicator"
                            trigger="click"
                            @open="search.focus()"
                        >
                            <template v-slot:icon>
                                <Search20Svg class="indicator__icon" />
                                <Cross20Svg class="indicator__icon indicator__icon--open" />
                            </template>

                            <Search
                                ref="search"
                                location="indicator"
                                @close="searchIndicator.close()"
                            />
                        </Indicator>
                    </SearchScope>

                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">

import { Vue, Component, Prop, Ref } from 'vue-property-decorator'
import { State } from 'vuex-class'
import { RootState } from '~/store'
import { WishlistState } from '~/store/wishlist'
import { DropcartType } from '~/store/options'
import Sticky from '~/services/sticky'
import departments from '~/services/departments'

import NavLinks from '~/components/header/nav-links.vue'

import Indicator from '~/components/header/indicator.vue'
import Dropcart from '~/components/header/dropcart.vue'
import AppLink from '~/components/shared/app-link.vue'
import Search from '~/components/header/search.vue'
import SearchScope from '~/components/header/search-scope.vue'

import LogoSmallSvg from '~/svg/logo-small.svg'
import Heart20Svg from '~/svg/heart-20.svg'
import Cart20Svg from '~/svg/cart-20.svg'
import Person20Svg from '~/svg/person-20.svg'
import Search20Svg from '~/svg/search-20.svg'
import Cross20Svg from '~/svg/cross-20.svg'

type Layout = 'default' | 'compact';

type StickyMode = 'pullToShow' | 'alwaysOnTop' | false

@Component({
    components: {
        SearchScope,
        Dropcart,
        Indicator,
        NavLinks,
        LogoSmallSvg,
        Heart20Svg,
        Cart20Svg,
        Person20Svg,

AppLink,
        Search20Svg,
        Cross20Svg,
        Search
    }
})
export default class NavPanel extends Vue {
    @Prop({ type: String, default: () => 'default' }) readonly layout!: Layout
    @Prop({ type: [String, Boolean], default: () => false }) readonly stickyMode!: StickyMode

    @State((state: RootState) => state.options.dropcartType) dropcartType!: DropcartType
    @State((state: RootState) => state.wishlist) wishlist!: WishlistState

    @Ref() readonly nav: NavLinks | undefined
    @Ref() readonly searchIndicator: Indicator | undefined
    @Ref() readonly cartIndicator: Indicator | undefined
    @Ref() readonly accountIndicator: Indicator | undefined
    @Ref() readonly search: Search | undefined

    sticky: Sticky | null = null

    mounted () {
        const element = this.$el as HTMLElement

        this.sticky = new Sticky(element, {
            stuck: 'nav-panel--stuck',
            show: 'nav-panel--show'
        })

        this.sticky.on('hide', () => {
    
            if (this.nav) {
                this.nav.closeSubmenu()
            }
            if (this.searchIndicator) {
                this.searchIndicator.close(true)
            }
            if (this.cartIndicator) {
                this.cartIndicator.close(true)
            }
            if (this.accountIndicator) {
                this.accountIndicator.close(true)
            }
        })

        this.sticky.start()
        this.sticky.calc(element, departments.element ? [departments.element] : [])
    }

    beforeDestroy () {
        if (this.sticky) {
            this.sticky.destroy()
        }
    }

    onSetDepartmentsArea (area: Element) {
        const element = this.$el as Element

        if (this.sticky) {
            this.sticky.calc(element, area ? [area] : [])
        }
    }

    onCartClick () {
        if (this.$store.state.options.dropcartType === 'offcanvas') {
            this.$store.commit('offcanvasCart/open')
        }
    }
}

</script>

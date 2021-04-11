<template>
    <!-- .topbar -->
    <div class="site-header__topbar topbar">
        <div class="topbar__container container">
            <div class="topbar__row">
                <div class="topbar__item topbar__item--link">
                    <AppLink :to="$url.about()" class="topbar-link">
                        {{ $t('header.topbar.aboutUs') }}
                    </AppLink>
                </div>
                <div class="topbar__item topbar__item--link">
                    <AppLink :to="$url.contacts()" class="topbar-link">
                        Contacts
                    </AppLink>
                </div>
            </div>
        </div>
    </div>
    <!-- .topbar / end -->
</template>

<script lang="ts">

import { Vue, Component } from 'vue-property-decorator'
import { Getter, Mutation, State } from 'vuex-class'
import { RootState } from '~/store'
import { ICurrency } from '~/interfaces/currency'
import { ILanguage } from '~/interfaces/language'
import Dropdown from '~/components/header/dropdown.vue'
import AppLink from '~/components/shared/app-link.vue'
import dataLanguages from '~/data/languages'
import dataShopCurrencies from '~/data/shopCurrencies'

@Component({
    components: { Dropdown, AppLink }
})
export default class Topbar extends Vue {
    @State((state: RootState) => state.currency.current) currency!: ICurrency
    @Getter('locale/language') language!: ILanguage
    @Mutation('currency/set') setCurrency!: (currency: ICurrency) => void

    currencies = dataShopCurrencies.map((currency) => {
        return {
            title: `${currency.symbol} ${currency.name}`,
            currency
        }
    })

    languages= dataLanguages.map((language) => {
        return {
            title: language.name,
            icon: language.icon,
            locale: language.locale
        }
    })

    setLanguage (locale: string) {
        const fullPath = this.$route.fullPath
        const re = new RegExp('^/(' + dataLanguages.map(x => x.locale).join('|') + ')(/|$)')
        const path = fullPath.replace(re, '/')

        this.$router.push(`/${locale}${path}`)
    }
}

</script>

<template>
    <div>
        <BlockSlideshow />

        <BlockFeatures />

        <BlockProductsCarouselContainer
            v-slot:default="{ products, isLoading, tabs, handleTabChange }"
            :tabs="[
                { id: 1, name: 'All', categorySlug: undefined },
                { id: 2, name: 'Power Tools', categorySlug: 'power-tools' },
                { id: 3, name: 'Hand Tools', categorySlug: 'hand-tools' },
                { id: 4, name: 'Plumbing', categorySlug: 'plumbing' }
            ]"
            :initial-data="featuredProducts"
            :data-source="featuredProductsSource"
        >
            <BlockProductsCarousel
                title="Featured Products"
                layout="grid-4"
                :products="products"
                :loading="isLoading"
                :groups="tabs"
                @groupClick="handleTabChange"
            />
        </BlockProductsCarouselContainer>

    </div>
</template>

<script lang="ts">

import { Vue, Component } from 'vue-property-decorator'
import { Context } from '@nuxt/types'
import { runOnlyOnServer } from '~/services/helpers'
import { IProduct } from '~/interfaces/product'
import { ICategory } from '~/interfaces/category'
import { IPost } from '~/interfaces/post'
import { BlockProductColumnsItem } from '~/interfaces/components'
import shopApi from '~/api/shop'
import BlockSlideshow from '~/components/blocks/block-slideshow.vue'
import BlockFeatures from '~/components/blocks/block-features.vue'
import BlockProductsCarousel from '~/components/blocks/block-products-carousel.vue'
import BlockProductsCarouselContainer from '~/components/blocks/block-products-carousel-container.vue'
import BlockProducts from '~/components/blocks/block-products.vue'
import BlockCategories from '~/components/blocks/block-categories.vue'
import BlockPosts from '~/components/blocks/block-posts.vue'
import BlockBrands from '~/components/blocks/block-brands.vue'
import BlockProductColumns from '~/components/blocks/block-product-columns.vue'
import dataShopBlockCategories from '~/data/shopBlockCategories'
import dataBlogPosts from '~/data/blogPosts'

@Component({
    components: {
        BlockSlideshow,
        BlockFeatures,
        BlockProductsCarousel,
        BlockProductsCarouselContainer,
        BlockProducts,
        BlockCategories,
        BlockPosts,
        BlockBrands,
        BlockProductColumns
    },
    async asyncData (context: Context) {
        context.store.commit('options/setHeaderLayout', 'default')
        context.store.commit('options/setDropcartType', 'dropdown')

        const featuredProducts = runOnlyOnServer(() => shopApi.getFeaturedProducts({ limit: 8 }), null)
        const latestProducts = runOnlyOnServer(() => shopApi.getLatestProducts({ limit: 8 }), null)

        return {
            featuredProducts: await featuredProducts,
            latestProducts: await latestProducts,
        }
    },
    head () {
        return {
            title: 'Home Page One'
        }
    }
})
export default class HomePageOne extends Vue {
    shopApi = shopApi

    featuredProducts: IProduct[] | null = []

    categories: ICategory[] = dataShopBlockCategories

    latestProducts: IProduct[] | null = []

    posts: IPost[] = dataBlogPosts

    columns: BlockProductColumnsItem[] | null = []

   
    featuredProductsSource (tab: {categorySlug: string}): Promise<IProduct[]> {
        return shopApi.getFeaturedProducts({ limit: 8, category: tab.categorySlug })
    }

    latestProductsSource (tab: {categorySlug: string}): Promise<IProduct[]> {
        return shopApi.getLatestProducts({ limit: 8, category: tab.categorySlug })
    }
}

</script>

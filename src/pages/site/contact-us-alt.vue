<template>
    <div>
        <PageHeader
            title="Contact Us"
            :breadcrumb="[
                { title: 'Home', url: '' },
                { title: 'İletişim Bilgileri', url: '' },
            ]"
        />

        <div class="block">
            <div class="container">
                <div class="card mb-0 contact-us">
                    <div class="contact-us__map">
                        <iframe
                            title="Google Map"
                            src="https://maps.google.com/maps?q=Holbrook-Palmer%20Park&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=&amp;output=embed"
                        />
                    </div>
                    <div class="card-body">
                        <div class="contact-us__container">
                            <div class="row">
                                <div class="col-12 col-lg-6 pb-4 pb-lg-0">
                                    <h4 class="contact-us__header card-title">
                                        Our Address
                                    </h4>

                                    <div class="contact-us__address">
                                        <p>
                                            715 Fake Ave, Apt. 34, New York, NY 10021 USA
                                            <br>
                                            Email: stroyka@example.com
                                            <br>
                                            Phone Number: +1 754 000-00-00
                                        </p>

                                        <p>
                                            <strong>Opening Hours</strong>
                                            <br>
                                            Monday to Friday: 8am-8pm
                                            <br>
                                            Saturday: 8am-6pm
                                            <br>
                                            Sunday: 10am-4pm
                                        </p>

                                        <p>
                                            <strong>Comment</strong>
                                            <br>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing
                                            elit. Curabitur suscipit suscipit mi, non tempor
                                            nulla finibus eget. Lorem ipsum dolor sit amet,
                                            consectetur adipiscing elit.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">

import { Vue, Component } from 'vue-property-decorator'
import PageHeader from '~/components/shared/page-header.vue'

@Component({
    components: { PageHeader },
    head () {
        return {
            title: 'Contact Us Alt'
        }
    }
})
export default class SitePageContactUsAlt extends Vue { }

</script>

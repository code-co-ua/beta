<template>
    <Link :href="'/'">
        <svg class="w-16 h-16"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 480 480">
            <path d="M176 392h128v-24H176v24z" fill="#726658"/>
            <path
                d="M156.6 315.4c12.1 9.1 19.3 23.4 19.4 38.5V368h128v-14.1c.1-15.1 7.2-29.2 19.2-38.4 59.4-46 70.3-131.4 24.3-190.8s-131.4-70.2-190.8-24.3-70.3 131.4-24.3 190.8c7 9 15.1 17.2 24.1 24.2h.1zm186.6-120.5c-4.7-37.1-28.9-68.8-63.4-83.1 34.5 14.4 58.7 46.1 63.4 83.1zm-90.9-90.2c-4.1-.5-8.2-.7-12.3-.7 4.1 0 8.2.2 12.3.7z"
                fill="#B2D7F4"/>
            <path d="M176 408c0 35.3 28.7 64 64 64 1.4 0 2.8 0 4.2-.1 34.1-3 60.2-31.8 59.8-66V392H176v16z" fill="#726658"/>
            <path
                d="M343.2 202.9c-4 0-7.4-3-7.9-7-4.3-34.2-26.7-63.5-58.6-76.7-4.1-1.7-6-6.4-4.2-10.5 1.7-4 6.3-5.9 10.4-4.3 37.2 15.4 63.3 49.6 68.3 89.5.5 4.4-2.7 8.4-7.1 8.9-.3 0-.6 0-.8.1h-.1zM252.3 112.7h-.9c-3.8-.4-7.6-.7-11.4-.7-4.4 0-8-3.6-8-8s3.6-8 8-8 8.8.3 13.2.8c4.4.5 7.5 4.5 7 8.9-.5 4-3.9 7-7.9 7.1v-.1zM240 48c-4.4 0-8-3.6-8-8V8c0-4.4 3.6-8 8-8s8 3.6 8 8v32c0 4.4-3.6 8-8 8zM152 71.6c-2.9 0-5.5-1.5-6.9-4l-16-27.7c-2.2-3.8-.8-8.7 3-10.9 3.8-2.2 8.6-.9 10.9 2.9l16 27.7c2.2 3.8.9 8.7-2.9 10.9-1.3.7-2.7 1.1-4.1 1.1zM87.6 136c-1.4 0-2.8-.4-4-1.1l-27.7-16c-3.8-2.2-5.1-7.1-2.9-10.9 2.2-3.8 7.1-5.1 10.9-2.9l27.7 16c3.8 2.2 5.1 7.1 2.9 10.9-1.4 2.5-4.1 4-6.9 4zM64 224H32c-4.4 0-8-3.6-8-8s3.6-8 8-8h32c4.4 0 8 3.6 8 8s-3.6 8-8 8zM59.9 328c-4.4 0-8-3.6-8-8 0-2.9 1.5-5.5 4-6.9l27.7-16c3.8-2.2 8.7-1 10.9 2.9 2.2 3.8 1 8.7-2.9 10.9 0 0-.1 0-.1.1l-27.7 16c-1.1.6-2.5 1-3.9 1zM420.1 328c-1.4 0-2.8-.4-4-1.1l-27.7-16c-3.8-2.2-5.2-7.1-3-10.9 2.2-3.8 7.1-5.2 10.9-3 0 0 .1 0 .1.1l27.7 16c3.8 2.2 5.1 7.1 2.9 10.9-1.4 2.5-4 4-6.9 4zM448 224h-32c-4.4 0-8-3.6-8-8s3.6-8 8-8h32c4.4 0 8 3.6 8 8s-3.6 8-8 8zM392.4 136c-4.4 0-8-3.6-8-8 0-2.9 1.5-5.5 4-6.9l27.7-16c3.8-2.2 8.7-.8 10.9 3 2.2 3.8.9 8.6-2.9 10.9l-27.7 16c-1.2.6-2.6 1-4 1zM328 71.6c-4.4 0-8-3.6-8-8 0-1.4.4-2.8 1.1-4l16-27.7c2.2-3.8 7.1-5.1 10.9-2.9 3.8 2.2 5.1 7.1 2.9 10.9l-16 27.7c-1.4 2.5-4 4-6.9 4z"
                fill="#231f20"/>
            <path
                d="M382.9 190.2C374.5 124.5 322.6 72.9 256.8 65c-79-9.4-150.6 47.1-159.9 126.1-5.9 50.2 14.8 99.8 54.8 130.7 10.1 7.6 16.2 19.5 16.3 32.2v54c0 19.9 8.3 38.9 22.8 52.5 13.3 12.6 30.9 19.5 49.2 19.5 1.6 0 3.2 0 4.8-.2 38.4-3.2 67.8-35.5 67.3-74v-51.9c.1-12.6 6.1-24.4 16.1-32 40.3-31.1 61.2-81.2 54.7-131.7zM296 384H184v-8h112v8zm-109.7 40h106.8c-.9 2.7-1.9 5.4-3.2 8H189.4c-1.2-2.6-2.2-5.3-3.1-8zM296 405.8c0 .7-.1 1.4-.1 2.2H184v-8h112v5.8zm-52.3 58.1c-15.5 1.1-30.7-4.4-42-15-.3-.3-.5-.6-.8-.9h77.7c-9.3 9.3-21.7 15-34.9 15.9zm74.6-154.7c-14 10.6-22.3 27.1-22.3 44.7v6.1H184v-6.1c-.1-17.6-8.4-34.2-22.5-44.8-55.9-43.3-66-123.7-22.7-179.6C163 98.3 200.3 80 239.8 80c5.1 0 10.2.3 15.2.9 70.2 8.3 120.4 71.9 112.1 142.1-4 34.1-21.6 65.2-48.8 86.2z"
                fill="#231f20" />
        </svg>
    </Link>
</template>

<script>
import {defineComponent} from 'vue'
import {Link} from '@inertiajs/inertia-vue3';

export default defineComponent({
    components: {
        Link,
    },
})
</script>

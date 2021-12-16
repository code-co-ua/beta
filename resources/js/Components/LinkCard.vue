<template>
    <div
        class="relative rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm flex items-center space-x-3 hover:border-gray-400 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
    >
        <div class="flex-shrink-0">
            <img class="h-10 w-10" :src="imageUrl" :alt="title"/>
        </div>
        <div class="flex-1 min-w-0">
            <a :href="url" class="focus:outline-none">
                <span class="absolute inset-0" aria-hidden="true"/>
                <p class="text-sm font-medium text-gray-900">
                    {{ title }}
                </p>
                <p v-if="subtext" class="text-sm text-gray-500 truncate">
                    {{ subtext }}
                </p>
            </a>
        </div>
    </div>
</template>

<script setup>
defineProps({
    imageUrl: String,
    title: String,
    url: String,
    subtext: String,
})
</script>

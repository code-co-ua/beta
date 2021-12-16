<template>
    <AppLayout title="Курси">
        <template #header>
            <h2 class="font-semibold text-xl text-gray-800 leading-tight">
                Доступні курси
            </h2>
        </template>
        <div class="py-12">
            <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div class="grid grid-cols-1 gap-4 sm:grid-cols-4">
                    <LinkCard
                        v-for="course in courses"
                        :title="course.title"
                        :image-url="course.image"
                        :url="'#'"
                    />
                </div>
            </div>
        </div>
    </AppLayout>
</template>

<script setup>
import AppLayout from "@/Layouts/AppLayout.vue";
import LinkCard from "@/Components/LinkCard.vue";

defineProps({
    courses: Array,
});
</script>

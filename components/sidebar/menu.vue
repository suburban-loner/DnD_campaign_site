<script setup>
const loading = ref([
    {
        title: "Characters",
        path: "/characters",
        icon: "bitcoin-icons:contacts-filled"
    }, {
        title: "Continents",
        path: "/continents",
        icon: "game-icons:world"
    }, {
        title: "Contacts",
        path: "/contacts",
        icon: "typcn:contacts"
    },
])
</script>

<template>
    <div>
        <header class="flex items-center gap-2 p-4 hover:scale-[101%] transition cursor-pointer">
            <Logo/>
            <p class="font-bold">Overview of Vīlībāzma</p>
        </header>
        <div class="px-4 grow">
            <div class="grid gap-2">
                <div v-for="(item, index) in items" :key="index" class="flex items-center gap-2 px-2 py-1 transition cursor-pointer hover:bg-neutral-100">
                    <Icon size="20" :name="item.icon" colour="black"/>
                    <span>{{ item.title }}</span>
                </div>
            </div>
        </div>
    </div>
</template>

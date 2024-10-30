<script setup>
const open = ref(true)
</script>

<template>
    <div class="relative">
        <div class="hidden lg:flex w-[250px] h-screen flex flex-col justify-between border-r">
            <SidebarMenu/>
            <div>
                UserItem
            </div>
        </div>
    </div>
</template>

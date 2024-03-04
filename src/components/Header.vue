<script setup lang="ts">
import logo from '../assets/logo.svg';
import vietnam from '../assets/images/vn.png';
import english from '../assets/images/en.png';
import menu from '../assets/images/menus.png';
import { onMounted, ref } from "vue";

interface props {
  nav: {
    title: string;
    url: string;
  }[];
  lang: "vn" | "en";
}

defineProps<props>();
const emit = defineEmits(['onChangeLang']);
const isMenuOpen = ref(false);
const menuRef = ref<HTMLElement | null>(null);

const handleChangLang = (lang: "vn" | "en") => {
  emit("onChangeLang", lang);
};

onMounted(() => {
  const handleClickOutside = (event: MouseEvent) => {
    if(menuRef.value && !menuRef.value.contains(event.target as Node)) {
      isMenuOpen.value = false;
    }
  }
  document.addEventListener("click", handleClickOutside);
});

const handleClickIconMenu = (e: MouseEvent) => {
  e.stopPropagation();
  isMenuOpen.value = !isMenuOpen.value;
}

</script>

<template>
  <div class="h-20 backdrop-blur-md bg-[#222222]/70 shadow-black/10 fixed z-30 left-0 right-0 top-0">
    <div
        class="w-full laptop:w-[810px] relative mx-auto flex items-center h-full justify-center laptop:justify-between">
      <div class="w-32">
        <a class="w-full" href="#">
          <img class="w-full object-contain relative top-1.5" :src="logo" alt="logo"/>
        </a>
      </div>
      <div class="hidden laptop:block">
        <ul class="flex gap-10">
          <li class="py-1" v-for="item in nav" :key="item.title">
            <a :href="item.url" class="hover:text-amber-300 text-white font-medium text-base">{{ item.title }}</a>
          </li>
        </ul>
      </div>
      <div class="hidden laptop:flex gap-2.5">
        <div @click="() => handleChangLang('vn')"
             :class="lang === 'vn' ? 'opacity-100 w-7 h-7 rounded-full overflow-hidden cursor-pointer' : 'w-7 h-7 rounded-full overflow-hidden cursor-pointer opacity-50'">
          <img class="w-full h-full object-contain" :src="vietnam" alt="vn">
        </div>
        <div @click="() => handleChangLang('en')"
             :class="lang === 'en' ? 'opacity-100 w-7 h-7 rounded-full overflow-hidden cursor-pointer' : 'w-7 h-7 rounded-full overflow-hidden cursor-pointer opacity-50'">
          <img class="w-full h-full object-contain" :src="english" alt="en">
        </div>
      </div>
      <div @click="handleClickIconMenu"
           :class="isMenuOpen ? 'w-8 h-8 absolute top-6 left-6 laptop:hidden cursor-pointer rotate-[135deg] transition-all' : 'w-8 h-8 absolute top-6 left-6 laptop:hidden cursor-pointer transition-all'">
        <img class="w-full h-full object-contain" :src="menu" alt="menu">
      </div>
      <div ref="menuRef"
           :class="isMenuOpen ? 'absolute left-0 transition-all top-20 w-[200px] py-8 backdrop-blur-md bg-black/70 laptop:hidden rounded-br' : 'absolute transition-all top-20 w-[200px] py-8 backdrop-blur-md bg-black/70 laptop:hidden rounded-br -left-[200px]'">
        <div class="flex gap-2.5 ml-6">
          <div @click="() => handleChangLang('vn')"
               :class="lang === 'vn' ? 'opacity-100 w-7 h-7 rounded-full overflow-hidden cursor-pointer' : 'w-7 h-7 rounded-full overflow-hidden cursor-pointer opacity-50'">
            <img class="w-full h-full object-contain" :src="vietnam" alt="vn">
          </div>
          <div @click="() => handleChangLang('en')"
               :class="lang === 'en' ? 'opacity-100 w-7 h-7 rounded-full overflow-hidden cursor-pointer' : 'w-7 h-7 rounded-full overflow-hidden cursor-pointer opacity-50'">
            <img class="w-full h-full object-contain" :src="english" alt="en">
          </div>
        </div>
        <ul class="mt-5 flex flex-col gap-2">
          <li @click="isMenuOpen = false" class="py-1 hover:bg-white/10 px-6" v-for="item in nav" :key="item.title">
            <a :href="item.url" class="text-white font-medium text-base">{{ item.title }}</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
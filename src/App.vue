<script setup lang="ts">
import { reactive, ref, watch } from 'vue'
import * as vn from './assets/lang/vn.json';
import * as en from './assets/lang/en.json';
import Header from "./components/Header.vue";
import avatar from './assets/images/avatar.svg';
import IconArrow from './assets/images/icon-arrow.svg';
import IconMail from './assets/images/icon-mail.svg';
import IconFaceBook from './assets/images/icon-facebook.svg';
import IconInstagram from './assets/images/icon-instagram.svg';
import IconGithub from './assets/images/github.svg';
import cv from './assets/DoCongSon_CV.pdf';
import { expentsiveLists, projectLists, workLists } from "./constants";

const langCode = ref<'vn' | 'en'>('en');
const language: LanguageType = reactive({title: '', nav: [], description: ''} as LanguageType);

watch(langCode, () => {
  if(langCode.value === 'vn') {
    Object.assign(language, vn as LanguageType);
  } else {
    Object.assign(language, en as LanguageType);
  }
}, {immediate: true});

</script>

<template>
  <div class="pt-20 z-10 relative">
    <Header :nav="language.nav" @onChangeLang="value => langCode = value" :lang="langCode"/>
    <div class="flex flex-col items-center gap-[60px] mt-[60px] w-full px-2.5 laptop:w-[810px] laptop:px-0 mx-auto">
      <div class="flex items-center flex-col gap-10">
        <div class="w-56 h-56">
          <img class="w-full h-full object-contain" :src="avatar" alt="avatar"/>
        </div>
        <h1 class="hidden laptop:block bg-gradient-to-r from-[#FF8660] to-[#9A33FF] bg-clip-text text-transparent font-extrabold text-[55px] text-balance text-center">
          {{ language.title }}</h1>
        <p class="font-light text-lg text-primaryText text-center">{{ language.description }}</p>
        <a :href="cv" download
           class="text-white text-xl font-medium py-4 px-8 border-2 border-white/60 rounded-[50px] cursor-pointer hover:bg-white/60 hover:text-black transition-all">
          {{ langCode === 'vn' ? 'Tải về CV' : 'Download CV' }}
        </a>
      </div>
      <div class="flex items-center flex-col gap-10">
        <h1 class="text-2xl text-primaryText font-bold tracking-[2.4px] uppercase">
          {{ langCode === 'vn' ? 'Có kinh nghiệm với' : 'EXPERIENCE WITH' }}
        </h1>
        <div class="flex gap-8 flex-wrap justify-center">
          <div class="w-12 h-12" v-for="item in expentsiveLists">
            <a :href="item.link">
              <img class="w-full h-full object-contain drop-shadow" :src="item.image"
                   :alt="item.link">
            </a>
          </div>
        </div>
      </div>
      <div id="projects" class="flex items-center flex-col gap-10">
        <h1 class="text-[35px] text-primaryText font-extrabold tracking-[2.4px] uppercase bg-gradient-to-b from-[#FF8660] to-[#D5491D] bg-clip-text text-transparent">
          {{ langCode === 'vn' ? 'Dự án cá nhân' : 'personal project' }}
        </h1>
        <div class="flex gap-5 flex-wrap justify-center">
          <div class="w-[250px] bg-gray-800/80 rounded-2xl overflow-hidden" v-for="item in projectLists">
            <div class="w-full h-[200px]">
              <img class="w-full h-full object-cover" :src="item.thumbnail" alt="">
            </div>
            <a class="p-3 flex items-center justify-between w-full" :href="item.link">
              <div>
                <p class="text-xs font-bold uppercase text-primaryText">{{
                    langCode === 'vn' ? 'click vào đây để xem' : 'Click here to visit'
                  }}</p>
                <h3 class="text-base font-bold uppercase text-white truncate">{{ item.name }}</h3>
              </div>
              <div class="size-6">
                <img class="w-full h-full object-contain" :src="IconArrow" alt="">
              </div>
            </a>
          </div>
        </div>
      </div>
      <div id="experience" class="flex items-center flex-col gap-10">
        <h1 class="text-[35px] text-primaryText font-extrabold tracking-[2.4px] uppercase bg-gradient-to-b from-[#5BADFF] to-[#1373D1] bg-clip-text text-transparent">
          {{ langCode === 'vn' ? 'Kinh nghiệm làm việc' : 'Experience' }}
        </h1>
        <div class="flex gap-10 flex-wrap justify-center items-center">
          <div class="flex flex-col gap-2.5 items-center w-full laptop:gap-6" v-for="item in workLists">
            <div class="w-full flex items-center flex-col gap-2.5 laptop:flex-row laptop:justify-between">
              <div class="flex items-center flex-col laptop:flex-row laptop:gap-4 gap-2.5">
                <div class="w-9 h-9">
                  <img class="w-full h-full object-contain" :src="item.logo" alt="">
                </div>
                <h3 class="text-[22px] font-bold text-white text-center">
                  {{ langCode === 'vn' ? item.title.vn : item.title.en }}
                </h3>
              </div>
              <p class="text-sm text-amber-300 font-normal text-center">
                {{ langCode === 'vn' ? item.time.vn : item.time.en }}
              </p>
            </div>
            <p class="text-sm text-primaryText font-normal text-center laptop:text-justify">
              {{ langCode === 'vn' ? item.description.vn : item.description.en }}
            </p>
          </div>
        </div>
      </div>
    </div>
    <div id="contact" class="bg-black/20 mt-20">
      <div class="pt-20 pb-24 w-full px-2.5 laptop:w-[810px] laptop:px-0 mx-auto">
        <h2 class="text-2xl font-bold text-white">{{ langCode === 'vn' ? 'Liên hệ' : 'Contact' }}</h2>
        <p class="font-light text-sm text-primaryText text-justify mt-10">{{ language.description }}</p>
        <div class="flex items-center gap-2 mt-4">
          <div class="w-6 h-6">
            <img class="w-full h-full object-contain" :src="IconMail" alt="">
          </div>
          <a href="mailto:sonanhson99@gmail.com"
             class="font-medium text-base text-primaryText">sonanhson99@gmail.com</a>
        </div>
        <div class="flex items-center gap-4 mt-10">
          <a class="block w-8 h-8" href="https://www.facebook.com/docongson2001">
            <img class="w-full h-full object-contain" :src="IconFaceBook" alt="">
          </a>
          <a class="block w-8 h-8" href="https://www.instagram.com/congson.2001/">
            <img class="w-full h-full object-contain" :src="IconInstagram" alt="">
          </a>
          <a class="block w-8 h-8" href="https://github.com/DoCongSon">
            <img class="w-full h-full object-contain" :src="IconGithub" alt="">
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>

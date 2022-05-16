
<template>
  <div style="margin-top: 15px;">
    <div>
        <input type="file" @change="changeFile" id="" />
    </div>


    <textarea v-model="result"></textarea>
  </div>
</template>

<script setup lang="ts">

import { ref } from 'vue'


import { htmlFileToBlob } from "@qsyjlib/js-utils";

const result = ref('')


interface InputChangeFile extends Event {
    target:EventTarget & { files : FileList }
}

console.log('htmlFileToBlob',htmlFileToBlob);



const changeFile = (e:InputChangeFile) => {

    const file = e.target.files[0]

    result.value = htmlFileToBlob(file)
  
};
</script>


<template>
  <div style="margin-top: 15px;">
    <div>
        <input type="file" @change="changeFile" id="" />
    </div>


    <textarea v-model="base64Result"></textarea>
  </div>
</template>

<script setup lang="ts">

import { ref } from 'vue'
import { htmlFileToBase64 } from "@qsyjlib/js-utils";



const base64Result = ref('')


interface InputChangeFile extends Event {
    target:EventTarget & { files : FileList }
}


const changeFile = (e:InputChangeFile) => {

    const file = e.target.files[0]

    htmlFileToBase64(file).then(base64=>{
        if(base64) base64Result.value = base64
    })
    
    
    
    // htmlFileToBase64(file).then(base64=>{

    //     if(!base64) return
    //     htmlCompressImage(base64).then(image =>{

    //         console.log('压缩后的image',image);
            
    //     })
        
    // })
};
</script>

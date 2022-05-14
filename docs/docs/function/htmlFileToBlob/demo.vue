
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

    // console.log('files',file);
    

    // htmlFileToBlob(file).then( blob =>{
    //     if(blob) result.value = blob
    // })
    
    
    
    // htmlFileToBase64(file).then(base64=>{

    //     if(!base64) return
    //     htmlCompressImage(base64).then(image =>{

    //         console.log('压缩后的image',image);
            
    //     })
        
    // })
};
</script>

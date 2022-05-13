<template>
  <div>
    <input type="file" @change="changeFile" id="" />
  </div>
</template>

<script setup lang="ts">
import { htmlFileToBase64, htmlCompressImage, htmlFileToBlob} from "@qsyjlib/js-utils";



interface InputChangeFile extends Event {
    target:EventTarget & { files : FileList }
}


const changeFile = (e:InputChangeFile) => {

    const file = e.target.files[0]
    
    console.log('file to blob',htmlFileToBlob(file));
    
    
    htmlFileToBase64(file).then(base64=>{

        if(!base64) return
        htmlCompressImage(base64).then(image =>{

            console.log('压缩后的image',image);
            
        })
        
    })
};
</script>

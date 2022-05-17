<template>
  <div>
    <input type="file" @change="changeFile" id="" />
  </div>
</template>

<script setup lang="ts">
import { htmlFileToBase64, htmlCompressImage, htmlFileToBlob, toTypeString } from "@qsyjlib/js-utils";




// console.log('type',toTypeString(new Date()));
// console.log('type',toTypeString(''));
// console.log('type',toTypeString(undefined));
// console.log('type',toTypeString(null));

// console.log('type',toTypeString(Symbol()));

// console.log('typoe',toTypeString(new Map([])) );
// console.log('typoe',toTypeString(new Set([])) );

// console.log('typoessss', toType(new Set([])).toString() );
// console.log('toTypeString',toType('').isObject());


// console.log('toRawType',isObject(new Date()));

console.log('RegExp', toTypeString(Math.cos) );




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

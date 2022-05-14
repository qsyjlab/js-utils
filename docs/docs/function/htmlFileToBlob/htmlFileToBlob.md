### htmlFileToBlob

- 描述：
  文件 转 Blob

- 参数
  - file { File } 文件
  
- 返回值
    
    Promise<string | null>

#### Usage

```js
import { htmlFileToBlob } from "@qsyjlib/js-utils";

htmlFileToBlob(file).then(blob => {});
```

#### Typescript

```ts
declare function htmlFileToBase64(blob: File | Blob): Promise<string | null>;
```

#### Demo

<Demo />

<script>

import Demo from './demo.vue'
export default {
  components: {
    Demo
  }
}


</script>

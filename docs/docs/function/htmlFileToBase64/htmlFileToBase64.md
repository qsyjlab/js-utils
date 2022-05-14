### htmlFileToBase64

- 描述：
  文件或 Blob 类型 转换成 base64 字符串

- 参数
  - file { File | Blob } 文件
  
- 返回值
    
    Promise<string | null>

#### Usage

```js
import { htmlFileToBase64 } from "@qsyjlib/js-utils";

htmlFileToBase64(file).then(base64 => {});
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

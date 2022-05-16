### htmlFileToBase64

- 描述：
  文件或 Blob 类型 转换成 base64 字符串

- 参数
  
  
  
  **Parameters**
  
  | 参数名 | 说明 | 类型        | 可选值 | 默认值 |
  | ------ | ---- | ----------- | ------ | ------ |
  | file   | 文件 | File / Blob |        |        |
  
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

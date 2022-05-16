### htmlFileToBlob

- 描述：
  文件 转 Blob

- 参数
  
  **Parameters**
  
  | 参数名 | 说明 | 类型 | 可选值 | 默认值 |
  | ------ | ---- | ---- | ------ | ------ |
  | file   | 文件 | File |        |        |
  
  
  
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
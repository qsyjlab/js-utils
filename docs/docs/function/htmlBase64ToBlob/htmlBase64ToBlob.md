### htmlFileToBlob

- 描述：
  文件 转 Blob

- 参数
  
  **Parameters**
  
  | 参数名 | 说明 | 类型 | 可选值 | 默认值 |
  | ------ | ---- | ---- | ------ | ------ |
  | base64   | base64字符串 |  |        |        |
  
  
  
- 返回值
  
    Blob

#### Usage

```js
import { htmlBase64ToBlob } from "@qsyjlib/js-utils";

htmlBase64ToBlob(file).then(blob => {});
```

#### Typescript

```ts
declare function htmlBase64ToBlob(base64: string): Blob;
```


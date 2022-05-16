### htmlCompressImage

- 描述：
  压缩图片

- 参数
  
  
  
  **Parameters**
  
  | 参数名  | 说明     | 类型                     | 可选值      | 默认值 |
  | ------- | -------- | ------------------------ | ----------- | ------   |
  | url     | 文件路径 | string                   | base64/blob | blob   |
  | options | 配置参数 | HtmlCompressImageOptions |             |        |
  
  **options**

  | 参数名    | 说明     | 类型   | 可选值      | 默认值 |
  | --------- | -------- | ------ | ----------- | ------ |
  | toType    | 文件路径 | string | base64/blob | blob   |
  | imageType | 图片类型 | string | image/*     |        |
  | quality   | 压缩质量 | number |             | 1      |
  
  
  
- 返回值
  
    Promise<string | null>

#### Usage

```js
import { htmlCompressImage } from "@qsyjlib/js-utils";

htmlCompressImage(image).then(result=>{})
```

#### Typescript

```ts

declare function htmlCompressImage(url: string, options?: HtmlCompressImageOptions): Promise<string | null>;

export interface HtmlCompressImageOptions {
    toType?: "blob" | "base64";
    imageType?: string;
    quality?: number;
}
```

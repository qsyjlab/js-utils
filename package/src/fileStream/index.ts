/**
 * html blob to base64
 * @param blob
 * @returns
 */
function htmlFileToBase64(blob: File | Blob): Promise<string | null> {
  const fileRender = new FileReader();

  return new Promise((resolve, reject) => {
    if (!blob) resolve(null);
    try {
      fileRender.readAsDataURL(blob);

      fileRender.onload = () => {
        if (fileRender.result) {
          resolve(fileRender.result as string);
        } else {
          resolve(null);
        }
      };
    } catch (err) {
      console.warn(err);

      reject(err);
    }
  });
}

/**
 * compress image
 * @param {*} url
 * @returns
 */
function htmlCompressImage(
  url: string,
  options: HtmlCompressImageOptions = {}
): Promise<string | null> {
  const { toType = "blob", imageType = "image/jpeg", quality = 1 } = options;

  return new Promise((resolve, reject) => {
    const canvasInstance = document.createElement("canvas");
    const imageObject = document.createElement("img");
    const canvas2DInstance = canvasInstance.getContext("2d");

    imageObject.src = url;

    imageObject.onerror = (err) => {
      reject(err);
    };

    imageObject.onload = () => {
      canvasInstance.width = imageObject.width;
      canvasInstance.height = imageObject.height;

      canvas2DInstance?.clearRect(0, 0, imageObject.width, imageObject.height);

      canvas2DInstance?.drawImage(
        imageObject,
        0,
        0,
        imageObject.width,
        imageObject.height
      );

      if (toType === "blob") {
        canvasInstance.toBlob(
          (blobResult) => {
            if (blobResult) {
              resolve(URL.createObjectURL(blobResult));
            }

            resolve(null);
          },
          imageType,
          quality
        );
      } else if (toType === "base64") {
        resolve(canvasInstance.toDataURL(imageType, quality));
      } else {
        reject(null);
      }
    };
  });
}

function htmlFileToBlob(file: File) {
  return URL.createObjectURL(file);
}

export interface HtmlCompressImageOptions {
  toType?: "blob" | "base64";
  imageType?: string;
  quality?: number;
}



/**
 * base64 to blob
 * @param {String} base64 
 * @returns 
 */
function htmlBase64ToBlob(base64:string) {
    // base64 解码
    const byteString = window.atob(base64.split(',')[1])
    const mimeString = base64.split(',')[0].split(':')[1].split(';')[0]
    const ab = new ArrayBuffer(byteString.length)
    const ia = new Uint8Array(ab)
    for (let i = 0; i < byteString.length; i++) {
        ia[i] = byteString.charCodeAt(i)
    }
    return new Blob([ab], {
        type: mimeString
    })
}



export { htmlFileToBase64, htmlCompressImage, htmlFileToBlob ,htmlBase64ToBlob};

export default {
  htmlFileToBase64,
  htmlCompressImage,
  htmlFileToBlob,
  htmlBase64ToBlob
};

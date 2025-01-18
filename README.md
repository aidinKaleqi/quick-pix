# quick-pix

#### WSA Image Processor

Welcome to quick-pix - WSA Image Processor! This is a WebAssembly-based image processing tool built using Rust,
WebAssembly, and
JavaScript. It allows users to upload PNG images and apply image transformations like grayscale and blur directly in the
browser. All transformations are processed using Rust compiled to WebAssembly, making the app fast and efficient.

## Features 🌟

- **Grayscale Transformation**: Convert your images to grayscale with a click. 🖤
- **Blur Effect**: Apply a blur effect to your images with adjustable intensity. 🌫️
- **Base64 Encoding/Decoding**: Images are processed through Base64 encoding/decoding for seamless client-side
  interaction. 🔐
- **Download Processed Image**: Save your transformed images in PNG format. ⬇️
- **Lightweight & Fast**: Utilizes WebAssembly for quick image processing. ⚡

## Tech Stack 🛠️

- **Rust**: For high-performance image processing via WebAssembly. 🦀
- **WebAssembly**: For running Rust code in the browser. 🌐
- **JavaScript**: To handle the DOM and user interactions. 💻
- **Webpack**: For bundling the application and managing WebAssembly modules. ⚙️
- **Base64 Encoding/Decoding**: To handle image data efficiently. 🔄

## Setup & Installation ⚙️

### Prerequisites 📝

Ensure you have the following installed on your system:

- [Node.js](https://nodejs.org/) (with npm) 🟩
- [Rust](https://www.rust-lang.org/) and [wasm-pack](https://rustwasm.github.io/wasm-pack/installer/) 🦀
- [Webpack](https://webpack.js.org/) and [webpack-cli](https://webpack.js.org/api/webpack-cli/) ⚙️

### Steps 👣

1. **Clone the repository**:
   ```bash
   git clone https://github.com/yourusername/wsa-image-processor.git
   cd wsa-image-processor
   ```
2. **Install dependencies**:

```bash
npm install
```

3. **Build and start the development server**:

```bash
npm run serve
```

This will build the Rust code, bundle the application with Webpack, and start a development server
at http://localhost:8080. 🌍 

(You will be able to define a custom port in the future. 😅)

4. **Build for production**:

```bash
npm run build
```

This command generates an optimized production build of the app in the dist folder. 📦

### Usage 👨‍💻

1. Open the app in your browser. 🌐
2. Upload a PNG image by clicking the "Upload PNG Image" button. 📤
3. Choose one of the transformation buttons:
4. Gray Scale: Converts the image to grayscale. 🖤
5. Blur: Applies a blur effect to the image. 🌫️
6. Reset: Reverts to the original image. 🔄
7. Download the transformed image by clicking the "Download" button. ⬇️

### How It Works 🔧

- **Image Upload**: When you upload an image, it is encoded to Base64 format and sent to the Rust WebAssembly module for
  processing. 📸
- **Image Transformation**: The image is decoded and processed in Rust, using libraries like image for applying
  transformations such as grayscale and blur. 🎨
- **Base64 Encoding**: Once processed, the image is re-encoded to Base64 and displayed in the browser. 🖥️
- **Download**: The processed image can be downloaded as a PNG file. 💾

### Contributing 🤝

Feel free to fork this repository and submit pull requests for improvements! If you find any issues or bugs, please
create an issue on GitHub. 🐛
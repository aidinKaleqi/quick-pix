use wasm_bindgen::prelude::*;
use web_sys::console::log_1 as log;
use base64::{encode, decode};
use image::{DynamicImage, load_from_memory, ImageOutputFormat::Png};

#[wasm_bindgen]
pub struct ImageProcessor;

impl ImageProcessor {
    fn decode_base64(encoded_file: &str) -> Result<DynamicImage, JsValue> {
        log(&"Decoding base64 string".into());
        let base64_to_vector = decode(encoded_file).map_err(|e| {
            let error_message = format!("Failed to decode base64: {}", e);
            log(&error_message.clone().into());
            JsValue::from_str(&error_message)
        })?;
        log(&"Image decoded successfully".into());

        let img = load_from_memory(&base64_to_vector).map_err(|e| {
            let error_message = format!("Failed to load image: {}", e);
            log(&error_message.clone().into());
            JsValue::from_str(&error_message)
        })?;
        log(&"Image loaded successfully".into());

        Ok(img)
    }

    fn encode_to_base64(img: &DynamicImage) -> Result<String, JsValue> {
        log(&"Encoding image to base64".into());
        let mut buffer = Vec::new();
        img.write_to(&mut buffer, Png).map_err(|e| {
            let error_message = format!("Failed to write image: {}", e);
            log(&error_message.clone().into());
            JsValue::from_str(&error_message)
        })?;

        let encoded_img = encode(&buffer);
        let data_url = format!("data:image/png;base64,{}", encoded_img);
        log(&"Image encoding completed".into());

        Ok(data_url)
    }
}

#[wasm_bindgen]
impl ImageProcessor {
    #[wasm_bindgen]
    pub fn grayscale(encoded_file: &str) -> Result<String, JsValue> {
        let img = Self::decode_base64(encoded_file)?;
        let grayscale_img = img.grayscale();
        Self::encode_to_base64(&grayscale_img)
    }

    #[wasm_bindgen]
    pub fn blur(encoded_file: &str, sigma: f32) -> Result<String, JsValue> {
        let img = Self::decode_base64(encoded_file)?;
        let blurred_img = img.blur(sigma);
        Self::encode_to_base64(&blurred_img)
    }
}

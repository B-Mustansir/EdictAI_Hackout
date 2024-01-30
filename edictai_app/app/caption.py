import google.generativeai as genai
import PIL.Image

def get_caption(img_path):
    img = PIL.Image.open(img_path)

    genai.configure(api_key="AIzaSyCs8uC60b6p7j4OCRGSNpXnZ7rW2fHP4DU")

    # Set up the model
    generation_config = {
        "temperature": 0.4,
        "top_p": 1,
        "top_k": 32,
        "max_output_tokens": 4096,
    }

    model = genai.GenerativeModel(model_name="gemini-pro-vision",generation_config=generation_config)

    prompt_parts = [
        "Describe this image with its entities, action, and other factors\n", img
    ]

    response = model.generate_content(prompt_parts)
    print(response.text)

# Example usage:
# get_caption("path/to/your/image.jpg")

import numpy as np
import cv2
import os
import json
from sklearn.metrics.pairwise import cosine_similarity

OUTPUT_DIR = "public/processed_frames"
os.makedirs(OUTPUT_DIR, exist_ok=True)

def extract_color_gradient(image_path):
    """Extracts the dominant color gradient from an image."""
    image = cv2.imread(image_path)

    if image is None:
        print(f"🚨 ERROR: Could not load image: {image_path}")
        return None  # Skip this image

    # Convert to grayscale for gradient analysis
    gray = cv2.cvtColor(image, cv2.COLOR_BGR2GRAY)
    
    # Compute gradients
    grad_x = cv2.Sobel(gray, cv2.CV_64F, 1, 0, ksize=5)
    grad_y = cv2.Sobel(gray, cv2.CV_64F, 0, 1, ksize=5)
    
    # Combine gradients
    gradient = np.sqrt(grad_x**2 + grad_y**2)

    # Handle division by zero by adding a small epsilon value
    min_val, max_val = np.min(gradient), np.max(gradient)
    if max_val - min_val == 0:
        print(f"⚠️ Warning: Zero variance in {image_path}")
        return None  # Skip this image

    normalized_gradient = (gradient - min_val) / (max_val - min_val + 1e-8)  # Add epsilon

    return normalized_gradient.flatten()  # Convert to 1D for similarity analysis

def find_top_similar_gradients(frame_paths):
    """Finds the top 5 most visually similar frames based on color gradients."""
    gradients = {}
    
    for frame in frame_paths:
        grad = extract_color_gradient(frame)
        if grad is not None:
            gradients[frame] = grad
    
    # Convert gradients to a matrix for similarity analysis
    gradient_matrix = np.array(list(gradients.values()))

    if len(gradient_matrix) < 5:
        print("⚠️ Not enough valid frames to compare.")
        return {}

    # Compute cosine similarity
    similarity_matrix = cosine_similarity(gradient_matrix)

    # Identify the top 5 most similar frames (excluding self-similarity)
    avg_similarities = np.mean(similarity_matrix, axis=1)
    top_indices = np.argsort(avg_similarities)[-5:]  # Top 5 most similar frames

    top_similar_frames = {os.path.basename(frame_paths[i]): os.path.join(OUTPUT_DIR, os.path.basename(frame_paths[i])) for i in top_indices}
    
    return top_similar_frames

def process_images():
    """Processes all frames and saves the most visually similar ones."""
    frame_paths = [os.path.join("public/Nolan", f) for f in os.listdir("public/Nolan") if f.endswith(".jpg")]

    if not frame_paths:
        print("🚨 ERROR: No frames found in public/Nolan")
        return {}

    print(f"✅ Found {len(frame_paths)} frames.")
    print("🚀 Finding visually similar gradients...")

    top_similar_frames = find_top_similar_gradients(frame_paths)

    # Save results as JSON
    json_output_path = os.path.join(OUTPUT_DIR, "top_similar_frames.json")
    with open(json_output_path, "w") as f:
        json.dump(top_similar_frames, f)

    print(f"✅ Saved results to {json_output_path}")
    return top_similar_frames

# Run the processing function
if __name__ == "__main__":
    print(process_images())

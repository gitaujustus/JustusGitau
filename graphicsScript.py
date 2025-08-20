# import os
# import json
# from PIL import Image

# # Path to the graphics folder
# GRAPHICS_DIR = r'G:\Files\Projects\iamjustus\public\graphics'

# # Output JSON file path
# OUTPUT_FILE = r'G:\Files\Projects\iamjustus\lib\graphicsSamples.json'

# images = []
# id_counter = 1

# for filename in os.listdir(GRAPHICS_DIR):
#     if filename.lower().endswith(('.jpg', '.jpeg', '.png', '.webp')):
#         filepath = os.path.join(GRAPHICS_DIR, filename)
#         with Image.open(filepath) as img:
#             width, height = img.size

#             # Clean name for alt/title
#             name = filename.rsplit('.', 1)[0]
#             clean_name = name.replace('-', ' ').replace('_', ' ')
#             title = clean_name.title()

#             images.append({
#                 "id": id_counter,
#                 "src": f"/graphics/{filename}",
#                 "alt": clean_name,
#                 "title": title,
#                 "width": width,
#                 "height": height
#             })
#             id_counter += 1

# # Save as pretty JSON
# with open(OUTPUT_FILE, 'w') as json_file:
#     json.dump(images, json_file, indent=2)

# print(f"✅ Done! graphicsSamples.json created at {OUTPUT_FILE}")


import os
import re
import json
from PIL import Image

# Path to the graphics folder
GRAPHICS_DIR = r'G:\Files\Projects\iamjustus\public\graphics'

# Output JSON file path
OUTPUT_FILE = r'G:\Files\Projects\iamjustus\lib\graphicsSamples.json'

# Dictionary to group related images
groups = {}
id_counter = 1

# Regex to detect trailing numbers (e.g., "Birthday Poster 1", "Birthday Poster 2")
pattern = re.compile(r"(.*?)(?:\s*\d+)?$", re.IGNORECASE)

for filename in os.listdir(GRAPHICS_DIR):
    if filename.lower().endswith(('.jpg', '.jpeg', '.png', '.webp')):
        filepath = os.path.join(GRAPHICS_DIR, filename)
        with Image.open(filepath) as img:
            width, height = img.size

            # Remove file extension
            name = filename.rsplit('.', 1)[0]
            clean_name = name.replace('-', ' ').replace('_', ' ').strip()

            # Match base name without trailing number
            match = pattern.match(clean_name)
            base_name = match.group(1).strip() if match else clean_name

            # Format title (capitalize nicely)
            title = base_name.title()

            # Add to the correct group
            if base_name not in groups:
                groups[base_name] = {
                    "id": None,  # we'll assign ids later
                    "title": title,
                    "images": []
                }

            groups[base_name]["images"].append({
                "src": f"/graphics/{filename}",
                "alt": clean_name,
                "width": width,
                "height": height
            })

# Assign IDs and convert to list
output = []
for base_name, data in groups.items():
    data["id"] = id_counter
    id_counter += 1
    output.append(data)

# Save JSON
with open(OUTPUT_FILE, 'w') as json_file:
    json.dump(output, json_file, indent=2)

print(f"✅ Done! graphicsSamples.json created at {OUTPUT_FILE}")

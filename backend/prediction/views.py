from django.shortcuts import render
from django.http import HttpResponse
from ultralytics import YOLO
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from PIL import Image
from io import BytesIO
import base64

model = YOLO("best.pt")

@csrf_exempt
def yolov8_prediction(request):
    if request.method == 'POST':
       
        image = "guns.jpg"
        results = model.predict(source=image, conf=0.5)
        
        detected_classes = []

        for result in results:
            boxes = result.boxes.cpu().numpy()
            for box in boxes:
                detected_class = result.names[int(box.cls[0])]
                detected_classes.append(detected_class)

        return JsonResponse({"classes": detected_classes})
    return JsonResponse({"error": "Invalid request"})

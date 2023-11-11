from django.apps import AppConfig
import pandas as pd
import os
import numpy as np
import cv2
from ultralytics import YOLO


class PredictionConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'prediction'

    BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
    MLMODEL_FOLDER = os.path.join(BASE_DIR, 'prediction/mlModel/')
    MLMODEL_FILE = os.path.join(MLMODEL_FOLDER, 'best.pt')
    mlmodel = YOLO(MLMODEL_FILE)



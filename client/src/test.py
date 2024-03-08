import requests
from datetime import datetime


def send_info_to_web():
    current_time = datetime.now().strftime("%Y-%m-%d %H:%M:%S")
    expected_time = "2024-03-08 18:00:00"
    medication_info = False
    data = {
        "origin_time" : expected_time,
        "time": current_time,
        "medication_info": medication_info
    }

    try:
        # 假設您的網頁端接受 POST 請求並處理相關資料
        response = requests.post("http://localhost:4000/medtime", json=data)
        response.raise_for_status()  # 如果請求失敗，拋出異常
        print("資料傳送成功")
    except requests.exceptions.RequestException as err:
        print(f"資料傳送失敗，錯誤訊息: {err}")


weight = 0 # 模擬接收到模型組資料

# 在 run_chat 函數中添加
if weight == 0:
    send_info_to_web()
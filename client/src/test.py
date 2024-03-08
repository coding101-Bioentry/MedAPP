# import requests
# from datetime import datetime


# def send_info_to_web():
#     current_time = datetime.now().strftime("%Y-%m-%d %H:%M:%S")
#     expected_time = "2024-03-08 18:00:00"
#     medication_info = False
#     data = {
#         "origin_time" : expected_time,
#         "time": current_time,
#         "medication_info": medication_info
#     }

#     try:
#         # 假設您的網頁端接受 POST 請求並處理相關資料
#         response = requests.post("http://localhost:4000/medtime", json=data)
#         response.raise_for_status()  # 如果請求失敗，拋出異常
#         print("資料傳送成功")
#     except requests.exceptions.RequestException as err:
#         print(f"資料傳送失敗，錯誤訊息: {err}")


# weight = 0 # 模擬接收到模型組資料

# # 在 run_chat 函數中添加
# if weight == 0:
#     send_info_to_web()


from datetime import datetime, timedelta, time
import requests


# 用API傳送用藥資料給web app
# 設定用藥時刻
daily_intake = False

def send_info_to_web(weight):
    global daily_intake  
    current_time = datetime.now()
    morning_time = datetime.combine(datetime.now().date(), time(8, 0))
    afternoon_time = datetime.combine(datetime.now().date(), time(13, 0))
    evening_time = datetime.combine(datetime.now().date(), time(18, 0))
    night_time = datetime.combine(datetime.now().date(), time(23, 0))
    #current_time = "08:05" # 模擬現在時間->超過早上用藥五分鐘
    
    # 確認現在時刻與用藥時刻關係
    if current_time < afternoon_time:
        medication_time = morning_time
    elif current_time < evening_time:
        medication_time = afternoon_time
    elif current_time < night_time:
        medication_time = evening_time
    else:
        medication_time = night_time

    # 傳送是否實際用藥
    data = {}
    if weight == "eaten":
        daily_intake = True
        data = {
            "origin_time" : medication_time.strftime("%Y-%m-%d %H:%M:%S"),
            "time": current_time.strftime("%Y-%m-%d %H:%M:%S"),
            "medication_info": True
        }
    elif weight == "not eaten":
        data = {
            "origin_time" : medication_time.strftime("%Y-%m-%d %H:%M:%S"),
            "time": current_time.strftime("%Y-%m-%d %H:%M:%S"),
            "medication_info": False
        }
    try:
        response = requests.post("http://localhost:4000/medtime", json=data)
        response.raise_for_status()
        print("資料傳送成功")
    except requests.exceptions.RequestException as err:
        print(f"資料傳送失敗，錯誤訊息: {err}")

weight = 0
if weight == 0:
    send_info_to_web("eaten") #傳送資料給web
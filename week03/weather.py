import requests
import json

city = "Fukuoka"
apikey = "3242e927b5b39f2eaf41f24b7b04659d"
lang = "kr"

api = f"https://api.openweathermap.org/data/2.5/weather?q={city}&appid={apikey}&lang={lang}&units=metric"
seoulapi = f"https://api.openweathermap.org/data/2.5/weather?q={"Seoul"}&appid={apikey}&lang={lang}&units=metric"

result = requests.get(api)
seoulresult = requests.get(seoulapi)

data = json.loads(result.text)
seouldata = json.loads(seoulresult.text)

#print(type(result.text))
#print(type(data))
#print(result.text)

seoulminuscity = seouldata["main"]["temp"] - data["main"]["temp"]

print("<%s>의 날씨입니다." %data["name"])
print()
print("날씨는", data["weather"][0]["description"], "입니다.")
if (data["weather"][0]["main"]=="Rain"):
    print("최근 1시간 강수량은", data["rain"]["1h"], "입니다.")
print("----------------------------------------------")
print("현재 온도는", data["main"]["temp"], "입니다.")
if (seoulminuscity>0): print("현재 서울보다 온도가 %.2f 낮습니다." %(seoulminuscity))
elif (seoulminuscity==0): print("현재 서울과 온도가 같습니다")
else: print("현재 서울보다 온도가 %d 높습니다" %(-seoulminuscity))
print("하지만 체감 온도는", data["main"]["feels_like"], "입니다.")
print("최저 기온은", data["main"]["temp_min"], "입니다.")
print("최고 기온은", data["main"]["temp_max"], "입니다.")
print("----------------------------------------------")
print("기압은", data["main"]['pressure'], "입니다.")
print("습도는", data["main"]["humidity"], "입니다.")
print("풍속은", data["wind"]["speed"], "이고, 풍향은", data["wind"]["deg"], "입니다.")
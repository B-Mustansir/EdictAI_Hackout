key = ""

import requests

url = 'https://api.flaticon.com/v3/search/icons/{orderBy}'
headers = {
    'Accept': 'application/json',
    'Authorization': 'string'
}
params = {'q': 'string'}

response = requests.get(url, params=params, headers=headers)

if response.status_code == 200:
    data = response.json()
    print(data)
else:
    print(f"Request failed with status code {response.status_code}")

import os
import requests
from PIL import Image
from io import BytesIO
from bs4 import BeautifulSoup
import time
import re

def scrap_content(url):
    response = requests.get(url)

    if response.status_code == 200:
        
        soup = BeautifulSoup(response.text, 'html.parser')
        content_div = soup.find('div', class_='innner-page-main-about-us-content-right-part')
        # print(content_div)
        
        ministry_name = soup.find('div', class_='MinistryNameSubhead text-center').text.strip()
        title = soup.find('div', class_='text-center').text.strip()
        posted_on = soup.find('div', class_='ReleaseDateSubHeaddateTime text-center pt20').text.strip()
        
        all_text = content_div.get_text().strip()

        content = re.sub(r'\s+', ' ', '\n'.join(all_text.split('\n')[3:])).strip()
        
        release_id = soup.find('span', id='ReleaseId').text.strip()
        visitor_count = soup.find('span', id='lblViews').text.strip()
        release_lang = soup.find('div', class_='ReleaseLang').text.strip()
        release_lang= re.sub(r'\s+', ' ', '\n'.join(release_lang.split('\n')[3:])).strip()
        
        formatted_data = f"ministry name: {ministry_name}\n" \
                        f"title: {title}\n" \
                        f"postedon: {posted_on}\n" \
                        f"content:\n{content}\n" \
                        f"releaseid: {release_id}\n" \
                        f"visitorcount: {visitor_count}\n" \
                        f"releaseLang: {release_lang}\n"

        print(formatted_data)

        links_with_text = [(a.text.strip(), a['href']) for a in content_div.find_all('a', href=True)]
        print("\nLinks:")
        for text, link in links_with_text:
            print(f"{text}: {link}")

        all_images = [img['src'] for img in content_div.find_all('img', src=True)]
        print("\nImages:")
        for img_url in all_images:
            print(img_url)
        
        content = re.sub(r'\*\*\* DS.*', '', content)
        data = {"ministry name": ministry_name,
            "title":title,
            "postedon": posted_on,
            "content" : content,
            "releaseid":release_id,
            "visitorcount":visitor_count,
            "releaseLang":release_lang,
            "links_with_text":links_with_text,
            "all_images":all_images
            }
        return data

    

# url = "https://pib.gov.in/PressReleasePage.aspx?PRID=1959538"
# print(scrap_content(url)['content'])

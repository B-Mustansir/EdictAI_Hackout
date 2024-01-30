from selenium.webdriver.chrome.options import Options
from selenium.webdriver.common.by import By
from selenium import webdriver
from bs4 import BeautifulSoup
import urllib.request
import pandas as pd
import requests
import os
import json


def coindesk_single(url):

    response = requests.get(url)

    if response.status_code == 200:
        soup = BeautifulSoup(response.content, 'html.parser')
        headline = soup.find('div', class_='at-headline').find('h1').get_text().strip()
        subheadline = soup.find('div', class_='at-subheadline').find('h2').get_text().strip()
        content_div = soup.find('div', class_='at-content-wrapper')
        content = ' '.join([p.get_text().strip() for p in content_div.find_all('p')])
    else:
        print("Request failed with status code:", response.status_code)

    media_div = soup.find('div', class_='media')
    if media_div:
        image_urls = [img['src'] for img in media_div.find_all('img')]
        for j, url in enumerate(image_urls):
            img_data = requests.get(url).content
            file_extension = url.split(".")[-1]
            image_path = f"images/coindesk_single_{j}.{file_extension}"
            if file_extension in ['jpg', 'jpeg', 'png']:
                with open(image_path, "wb") as f:
                    f.write(img_data)
    else:
        media_div = soup.find('div', class_='at-img')
        if media_div:
            image_urls = [img['src'] for img in media_div.find_all('img')]
            for j, url in enumerate(image_urls):
                img_data = requests.get(url).content
                file_extension = url.split(".")[-1]
                image_path = f"images/coindesk_single_{j}.{file_extension}"
                if file_extension in ['jpg', 'jpeg', 'png']:
                    with open(image_path, "wb") as f:
                        f.write(img_data)
        else:
            image_path = ""
            print("No images found.")

    data = {
        "headline": headline,
        "subheadline": subheadline,
        "content": content,
    }

    return data 


def the_hindu_single(url):

    getData = requests.get(url)
    getHtml = BeautifulSoup(getData.content, "html.parser")

    # scraping the title of article
    title = getHtml.find("h1", {"class" :"title"}).getText().replace("\n", "").replace("\\", "")

    subtitle = getHtml.find('h3', {"class" : "sub-title"}).getText().replace("\n", "").replace("\\", "")

    scraped_content = ""

    div = getHtml.find("div", {"class" : "articlebodycontent col-xl-9 col-lg-12 col-md-12 col-sm-12 col-12"})

    # (Byfind.XPATH,'//div[@class="articlebodycontent col-xl-9 col-lg-12 col-md-12 col-sm-12 col-12"]/p')

    p_tags = div.findAll("p")

    for i in p_tags:
        scraped_content += i.getText()
        
    ind = scraped_content.find("COMMents")
    scraped_content = scraped_content[:ind]

    scraped_content = scraped_content.replace("\n", "").replace("\\", "")

    # scraping images

    image_url = getHtml.find("img", {"class" : "lead-img"})["src"]

    data = {
        "headline" :title,
        "subheadline" : subtitle,
        "content" : scraped_content
    }

    return(data)


def ndtv_single(url):

    getData = requests.get(url)
    getHtml = BeautifulSoup(getData.content, "html.parser")

    # scraping the title of article
    title = getHtml.find("h1", {"class" :"sp-ttl"}).getText()

    subtitle =""
    try:
        subtitle = getHtml.find('h3', {"class" : "sp-descp"}).getText()
    except Exception as e:
        pass

    scraped_content = ""

    div = getHtml.find("div", {"class" : "sp-cn ins_storybody"})

    # (Byfind.XPATH,'//div[@class="articlebodycontent col-xl-9 col-lg-12 col-md-12 col-sm-12 col-12"]/p')

    p_tags = div.findAll("p")

    for i in p_tags:
        scraped_content += i.getText()+" "

    data = {
        "headline" :title,
        "subheadline" : subtitle,
        "content" : scraped_content,
    }

    return(data)


def url_select(url):

    if("https://www.coindesk.com/" in url):
        data = coindesk_single(url)
    elif("https://www.ndtv.com/" in url):
        data = ndtv_single(url)
    elif("https://www.thehindu.com/" in url):
        data = the_hindu_single(url)
    return(data)


# url = input("Enter URL : ")
# data = url_select(url)
# print(data)
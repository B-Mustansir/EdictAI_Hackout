import requests

def search_videos(query, max_results=10):
    api_key = ""
    url = f"https://www.googleapis.com/youtube/v3/search?part=snippet&q={query}&type=video&order=relevance&maxResults={max_results}&key={api_key}"

    response = requests.get(url)
    if response.status_code == 200:
        data = response.json()
        videos = []
        for item in data["items"]:
            title = item["snippet"]["title"]
            videos.append({"title": title})
        return videos
    else:
        return []

def get_top_keywords(topic, limit=10):
    videos = search_videos(topic)
    if not videos:
        return []
    keywords = []
    for video in videos:
        title = video["title"]
        words = title.split(" ")
        keywords.extend(words)
    return keywords

# if keywords:
#     print("Top keywords:", keywords)
# else:
#     print("No keywords found.")
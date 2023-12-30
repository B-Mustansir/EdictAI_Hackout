import os, uuid
from azure.identity import DefaultAzureCredential
from azure.storage.blob import BlobServiceClient, BlobClient, ContainerClient

import json
with open('config.json', 'r') as c:
    config_data = json.load(c)
    upload_blob_api_key = config_data['upload_blob_api_key']

blob_service_client = BlobServiceClient.from_connection_string(f"DefaultEndpointsProtocol=https;AccountName=mentormeestorage;AccountKey=/{upload_blob_api_key}/GJ0lsRDkRgZf+AStG+6wlA==;EndpointSuffix=core.windows.net")
container_client = blob_service_client.get_container_client(container= "images")

def get_file_extension(file_name):
    # Split the file name by '.' to separate the base name and extension
    parts = file_name.split('.')
    
    # Check if there is at least one period in the file name
    if len(parts) > 1:
        # The file extension is the last part of the split
        extension = parts[-1]
        return extension
    else:
        # If there's no period, return an empty string to indicate no extension
        return ""

def blob_file_upload(upload_file_path):
    # local_file_name =  "chunk_1.jpg"
    # upload_file_path = f"images/{local_file_name}"
    uniID=uuid.uuid1()
    blob_client = blob_service_client.get_blob_client(container="images", blob=str(uniID))
    print("\nUploading to Azure Storage as blob:\n\t" + str(uniID))
    with open(file=upload_file_path, mode="rb") as data:
        blob_client.upload_blob(data)
    return str(uniID)
    
def list_blobs():
    print("\nListing blobs...")
    blob_list = container_client.list_blobs()
    for blob in blob_list:
        print("\t" + blob.name)
        
def download_blobs():
    print("\nDownloading blob to \n\t" + "blob_images")
    blob_list = container_client.list_blobs()
    for blob in blob_list: 
        with open(file=f"blob_images/{blob.name}", mode="wb") as download_file:
            download_file.write(container_client.download_blob(blob.name).readall())

# try:
#     print("Azure Blob Storage Python quickstart sample")
#     blob_file_upload()
#     # list_blobs()
#     # download_blobs()

# except Exception as ex:
#     print('Exception:')
#     print(ex)
    

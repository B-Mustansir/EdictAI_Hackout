import os, uuid
from azure.identity import DefaultAzureCredential
from azure.storage.blob import BlobServiceClient, BlobClient, ContainerClient

try:
    print("Azure Blob Storage Python quickstart sample")

    # Quickstart code goes here
    blob_service_client = BlobServiceClient.from_connection_string("DefaultEndpointsProtocol=https;AccountName=mentormeestorage;AccountKey=/xO4hIxojReXRKuUqeTUIZXR4Cg0H3QVA9idqmTEKNvV5BpJpdGWpTmjTtaMEzu/GJ0lsRDkRgZf+AStG+6wlA==;EndpointSuffix=core.windows.net")
    # Create a unique name for the container
    # container_name = str(uuid.uuid4())
    # Create the container
    # container_client = blob_service_client.create_container(container_name)
    container_name = "images"
    # Create a local directory to hold blob data
    local_path = "./blob"
    # os.mkdir(local_path)
    # Create a file in the local data directory to upload and download
    # local_file_name = str(uuid.uuid4()) + ".txt"
    local_file_name = "lavda.txt"
    # upload_file_path = os.path.join(local_path, local_file_name)
    upload_file_path = "blob/lavda.txt"

    # Write text to the file
    # file = open(file=upload_file_path, mode='w')
    # file.write("Hello, World!")
    # file.close()

    # Create a blob client using the local file name as the name for the blob
    blob_client = blob_service_client.get_blob_client(container=container_name, blob=local_file_name)

    print("\nUploading to Azure Storage as blob:\n\t" + local_file_name)

    # Upload the created file
    with open(file=upload_file_path, mode="rb") as data:
        blob_client.upload_blob(data)

except Exception as ex:
    print('Exception:')
    print(ex)
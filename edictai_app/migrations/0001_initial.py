# Generated by Django 4.2.5 on 2023-09-20 14:30

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Videos',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('video', models.FileField(upload_to='video/')),
                ('name', models.CharField(max_length=100)),
                ('script', models.TextField()),
            ],
        ),
        migrations.CreateModel(
            name='Media',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('image', models.FileField(upload_to='images/')),
                ('audio', models.FileField(upload_to='audios/')),
                ('video', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='edictai_app.videos')),
            ],
        ),
    ]

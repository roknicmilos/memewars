# Generated by Django 4.2.2 on 2023-07-08 08:55

from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ("wars", "0007_war_meme_upload_limit"),
    ]

    operations = [
        migrations.AddConstraint(
            model_name="vote",
            constraint=models.UniqueConstraint(fields=("user", "meme"), name="unique_user_meme"),
        ),
    ]

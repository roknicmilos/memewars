# Generated by Django 4.1.5 on 2023-01-04 05:14

from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ("wars", "0001_initial"),
    ]

    operations = [
        migrations.AddField(
            model_name="war",
            name="requires_meme_approval",
            field=models.BooleanField(default=False, verbose_name="requires meme approval"),
        ),
    ]

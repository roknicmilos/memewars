# Generated by Django 4.1.5 on 2023-01-04 08:34

import django.db.models.deletion
from django.db import migrations, models

import apps.common.utils
import apps.wars.validators


class Migration(migrations.Migration):
    dependencies = [
        ("wars", "0003_meme_is_approved"),
    ]

    operations = [
        migrations.AlterField(
            model_name="meme",
            name="image",
            field=models.ImageField(upload_to=apps.common.utils.FilePath("wars/meme/"), verbose_name="image"),
        ),
        migrations.AlterField(
            model_name="meme",
            name="war",
            field=models.ForeignKey(
                on_delete=django.db.models.deletion.PROTECT,
                related_name="memes",
                to="wars.war",
                validators=[apps.wars.validators.WarPhaseValidator("submission")],
                verbose_name="war",
            ),
        ),
        migrations.AlterField(
            model_name="war",
            name="phase",
            field=models.CharField(
                choices=[
                    ("preparation", "Preparation"),
                    ("submission", "Submission"),
                    ("voting", "Voting"),
                    ("finished", "Finished"),
                ],
                default="preparation",
                max_length=12,
                verbose_name="phase",
            ),
        ),
    ]

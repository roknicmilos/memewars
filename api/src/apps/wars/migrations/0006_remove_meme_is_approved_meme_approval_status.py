# Generated by Django 4.1.5 on 2023-02-04 10:33

from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ("wars", "0005_alter_meme_war_alter_vote_meme"),
    ]

    operations = [
        migrations.RemoveField(
            model_name="meme",
            name="is_approved",
        ),
        migrations.AddField(
            model_name="meme",
            name="approval_status",
            field=models.CharField(
                choices=[("pending", "Pending"), ("rejected", "Rejected"), ("approved", "Approved")],
                default="pending",
                max_length=10,
                verbose_name="approval status",
            ),
        ),
    ]

# Generated by Django 4.2.5 on 2023-10-04 18:18

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('portfolio', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='work',
            name='job_title',
            field=models.CharField(default='', max_length=255),
        ),
    ]

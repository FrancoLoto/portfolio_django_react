# Generated by Django 4.2.5 on 2023-10-30 01:24

import ckeditor_uploader.fields
from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('portfolio', '0016_portfolio_content_alter_portfolio_description'),
    ]

    operations = [
        migrations.AlterField(
            model_name='portfolio',
            name='content',
            field=ckeditor_uploader.fields.RichTextUploadingField(blank=True, null=True),
        ),
    ]
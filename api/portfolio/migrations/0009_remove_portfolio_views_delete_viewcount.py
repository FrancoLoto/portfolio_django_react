# Generated by Django 4.2.5 on 2023-10-25 16:20

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('portfolio', '0008_remove_viewcount_proyect_viewcount_project'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='portfolio',
            name='views',
        ),
        migrations.DeleteModel(
            name='ViewCount',
        ),
    ]

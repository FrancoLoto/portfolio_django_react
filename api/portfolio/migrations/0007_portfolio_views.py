# Generated by Django 4.2.5 on 2023-10-25 15:28

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('portfolio', '0006_alter_portfolio_options_alter_portfolio_image_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='portfolio',
            name='views',
            field=models.IntegerField(blank=True, default=0),
        ),
    ]
# Generated by Django 4.1.1 on 2022-09-21 02:53

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('healthMetrics', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='user',
            name='hearRate',
            field=models.DecimalField(decimal_places=4, max_digits=100),
        ),
        migrations.AlterField(
            model_name='user',
            name='oxygenSaturation',
            field=models.DecimalField(decimal_places=4, max_digits=100),
        ),
        migrations.AlterField(
            model_name='user',
            name='stressLevel',
            field=models.DecimalField(decimal_places=4, max_digits=100),
        ),
    ]

from django.db import models

# Create your models here.
class Education(models.Model):
    title = models.CharField(max_length=255, default='')
    school = models.CharField(max_length=255)
    degree = models.CharField(max_length=255)
    url = models.URLField(default='')
    years = models.CharField(max_length=25)
    description = models.TextField()
    ordinal = models.IntegerField()

    class Meta:
        verbose_name = "Educación"
        verbose_name_plural = "Educación"

    def __str__(self):
        return self.title

class Work(models.Model):
    company = models.CharField(max_length=255)
    job_title = models.CharField(max_length=255, default='')
    years = models.CharField(max_length=25)
    description = models.TextField()
    ordinal = models.IntegerField()

    class Meta:
        verbose_name = "Trabajo"
        verbose_name_plural = "Trabajos"

    def __str__(self):
        return self.job_title


class Portfolio(models.Model):
    title = models.CharField(max_length=255)
    description = models.TextField()
    image = models.ImageField(upload_to='uploads/')
    url = models.URLField()
    ordinal = models.IntegerField()

    class Meta:
        verbose_name = "Portafolio"
        verbose_name_plural = "Portafolio"

    def __str__(self):
        return self.title


    
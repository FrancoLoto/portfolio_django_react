from django.db import models
from datetime import date


def proyect_image_directory(instance, filename):
    return "portfolio/{0}/{1}".format(instance.title, filename)


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


class TechnologyTag(models.Model):
    name = models.CharField(max_length=50)

    def __str__(self):
        return self.name


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
    image = models.ImageField(
        upload_to=proyect_image_directory, max_length=500, blank=True, null=True)
    github_url = models.URLField()
    web_url = models.URLField()
    ordinal = models.IntegerField()
    views = models.IntegerField(default=0, blank=True)
    tech_tags = models.ManyToManyField(TechnologyTag)
    created_at = models.DateField(default=date.today)

    class Meta:
        verbose_name = "Portafolio"
        verbose_name_plural = "Portafolio"
        ordering = ('-ordinal',)

    def __str__(self):
        return self.title

    def get_view_count(self):
        views = ViewCount.objects.filter(project=self).count()
        return views

    def get_image_url(self):
        if self.image:
            return self.image.url
        return ''


class ViewCount(models.Model):
    project = models.ForeignKey(
        Portfolio, related_name="blogpost_view_count", on_delete=models.CASCADE)
    ip_address = models.CharField(max_length=255)

    def __str__(self):
        return f"{self.ip_address}"

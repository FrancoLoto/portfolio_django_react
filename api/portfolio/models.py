from datetime import date

from ckeditor_uploader.fields import RichTextUploadingField
from django.db import models


def proyect_image_directory(instance, filename):
    return "portfolio/{0}".format(filename)


class Education(models.Model):
    title = models.CharField(max_length=255, default='')
    school = models.CharField(max_length=255)
    degree = models.CharField(max_length=255)
    url = models.URLField(blank=True, null=True)
    years = models.CharField(max_length=25)
    description = models.TextField()

    class Meta:
        verbose_name = "Educación"
        verbose_name_plural = "Educación"
        ordering = ('-id',)

    def __str__(self):
        return self.title


class TechnologyTag(models.Model):
    name = models.CharField(max_length=50)

    def __str__(self):
        return self.name


class Category(models.Model):
    class Meta:
        verbose_name = "Categoría"
        verbose_name_plural = "Categorías"

    name = models.CharField(max_length=255)

    def __str__(self):
        return self.name


class Portfolio(models.Model):
    title = models.CharField(max_length=255)
    description = models.CharField(max_length=255)
    content = RichTextUploadingField(blank=True, null=True)
    image = models.ImageField(
        upload_to=proyect_image_directory,
        max_length=500,
        blank=True,
        null=True
    )
    github_url = models.URLField(blank=True, null=True)
    web_url = models.URLField(blank=True, null=True)
    ordinal = models.IntegerField()
    views = models.IntegerField(default=0, blank=True)
    tech_tags = models.ManyToManyField(TechnologyTag)
    created_at = models.DateField(default=date.today)
    category = models.ForeignKey(Category,
                                 on_delete=models.PROTECT,
                                 null=True,
                                 blank=True
                                 )

    class Meta:
        verbose_name = "Proyecto"
        verbose_name_plural = "Proyectos"
        ordering = ('-created_at',)

    def __str__(self):
        return self.title

    def get_view_count(self):
        views = ViewCount.objects.filter(project=self).count()
        return views


class ViewCount(models.Model):
    project = models.ForeignKey(
        Portfolio, related_name="blogpost_view_count",
        on_delete=models.CASCADE)
    ip_address = models.CharField(max_length=255)

    def __str__(self):
        return f"{self.ip_address}"

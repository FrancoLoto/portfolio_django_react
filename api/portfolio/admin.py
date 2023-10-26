from django.contrib import admin

from .models import Education, Portfolio, Work, TechnologyTag


class EducationAdmin(admin.ModelAdmin):
    list_display = ("id", "title", "school", "degree", "ordinal")
    list_display_links = ("title",)
    list_per_page = 25
    search_fields = ("title", "school")


class WorkAdmin(admin.ModelAdmin):
    list_display = ("id", "job_title", "company", "years", "ordinal")
    list_display_links = ("job_title",)
    list_per_page = 25
    search_fields = ("job_title", "company")


class PortfolioAdmin(admin.ModelAdmin):
    list_display = ("id", "title", "github_url", "web_url", "ordinal")
    list_display_links = ("title",)
    list_per_page = 25
    search_fields = ("title",)


class TechnologyTagAdmin(admin.ModelAdmin):
    list_display = ("name",)
    list_display_links = ("name",)
    list_per_page = 25
    search_fields = ("name",)


admin.site.register(Education, EducationAdmin)
admin.site.register(Work, WorkAdmin)
admin.site.register(Portfolio, PortfolioAdmin)
admin.site.register(TechnologyTag, TechnologyTagAdmin)

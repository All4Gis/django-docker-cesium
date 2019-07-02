from __future__ import unicode_literals

from django.views.generic import TemplateView


class CesiumView(TemplateView):
    template_name = 'viewer.html'

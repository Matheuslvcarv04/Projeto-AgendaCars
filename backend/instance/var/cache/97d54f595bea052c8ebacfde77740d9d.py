# -*- coding: utf-8 -*-
__filename = 'C:\\Users\\matheus.lcarvalho\\Documents\\agend-veic\\backend\\venv\\Lib\\site-packages\\plone\\app\\layout\\viewlets\\searchbox.pt'

__tokens = {122: ('view/navigation_root_url', 4, 27), 207: ("python: view.livesearch and 'pat-livesearch'", 9, 24), 255: ("python: view.show_images and 'show_images'", 9, 72), 421: ('string:${navigation_root_url}/@@search', 14, 17), 490: (' string:ajaxUrl:${navigation_root_url}/@@ajax-searc', 15, 29), 980: ('request/form/SearchableText|nothing', 33, 19), 1439: ('string:${navigation_root_url}/@@search', 51, 16)}
from chameleon.tales import DEFAULT_MARKER as _DEFAULT_MARKER
from chameleon.tales import DEFAULT_MARKER as _DEFAULT_MARKER
from chameleon.tales import DEFAULT_MARKER as _DEFAULT_MARKER
from chameleon.tales import DEFAULT_MARKER as _DEFAULT_MARKER
from chameleon.tales import DEFAULT_MARKER as _DEFAULT_MARKER
from chameleon.tales import DEFAULT_MARKER as _DEFAULT_MARKER
from chameleon.tales import DEFAULT_MARKER as _DEFAULT_MARKER
from chameleon.tales import DEFAULT_MARKER as _DEFAULT_MARKER
from chameleon.tales import DEFAULT_MARKER as _DEFAULT_MARKER
from chameleon.tales import DEFAULT_MARKER as _DEFAULT_MARKER
from chameleon.tales import DEFAULT_MARKER as _DEFAULT_MARKER
from chameleon.tales import DEFAULT_MARKER as _DEFAULT_MARKER
from chameleon.tales import DEFAULT_MARKER as _DEFAULT_MARKER
from chameleon.tales import DEFAULT_MARKER as _DEFAULT_MARKER
from sys import exc_info as _exc_info
from Products.PageTemplates.engine import _compile_zt_expr as __compile_zt_expr
from Products.PageTemplates.engine import _C2ZContextWrapper as __C2ZContextWrapper
_static_1696141401232 = {'class': 'd-flex flex-column position-relative', 'id': 'portal-searchbox'}
_static_1696162671184 = __compile_zt_expr
_static_1696162955856 = __C2ZContextWrapper
_static_1696162970000 = {'class': "d-flex ${python: view.livesearch and 'pat-livesearch'} ${python: view.show_images and 'show_images'}", 'id': 'searchGadget_form', 'action': '@@search', 'role': 'search', 'data-pat-livesearch': 'string:ajaxUrl:${navigation_root_url}/@@ajax-search'}
_static_1696163584336 = __compile_zt_expr
_static_1696163581840 = __C2ZContextWrapper
_static_1696163555024 = __compile_zt_expr
_static_1696163546320 = __C2ZContextWrapper
_static_1696163317648 = __compile_zt_expr
_static_1696163325456 = __C2ZContextWrapper
_static_1696162467216 = __compile_zt_expr
_static_1696162472400 = __C2ZContextWrapper
_static_1696163231760 = {'class': 'hiddenStructure', 'for': 'searchGadget'}
_static_1696163218896 = {'class': 'searchField form-control me-2', 'id': 'searchGadget', 'name': 'SearchableText', 'placeholder': 'Search Site', 'size': '18', 'title': 'Search Site', 'type': 'text', 'value': ''}
_static_1696163452688 = __compile_zt_expr
_static_1696163450064 = __C2ZContextWrapper
_static_1696163447952 = {'class': 'searchButton btn btn-outline-light', 'type': 'submit'}
_static_1696164006416 = {'class': 'hiddenStructure', 'id': 'portal-advanced-search'}
_static_1696163223760 = {'href': '#'}
_static_1696163448400 = __compile_zt_expr
_static_1696163448336 = __C2ZContextWrapper
import re
import functools
from itertools import chain as __chain
from sys import intern
__default = intern('__default__')
__marker = object()
g_re_amp = re.compile('&(?!([A-Za-z]+|#[0-9]+);)')
g_re_needs_escape = re.compile('[&<>\\"\\\']').search
__re_whitespace = functools.partial(re.compile('\\s+').sub, ' ')

def initialize(modules, nothing, tales, zope_version_6_2_0_):

    def render(__stream, econtext, rcontext, __i18n_domain=None, __i18n_context=None, target_language=None):
        __append = __stream.append
        __re_amp = g_re_amp
        __token = None
        __re_needs_escape = g_re_needs_escape

        def __convert(target):
            if target is None:
                return
            __tt = type(target)
            if __tt is bytes:
                target = decode(target)
            elif __tt is not str:
                if __tt is int or __tt is float:
                    target = str(target)
                else:
                    __markup = getattr(target, '__html__', None)
                    if __markup is None:
                        __converted = translate(target, domain=__i18n_domain, context=__i18n_context, target_language=target_language)
                        target = str(target) if target is __converted else __converted
                    else:
                        target = __markup()
            return target

        def __quote(target, quote, quote_entity, default, default_marker):
            if target is None:
                return
            if target is default_marker:
                return default
            __tt = type(target)
            if __tt is bytes:
                target = decode(target)
            elif __tt is not str:
                if __tt is int or __tt is float:
                    return str(target)
                __markup = getattr(target, '__html__', None)
                if __markup is None:
                    __converted = translate(target, domain=__i18n_domain, context=__i18n_context, target_language=target_language)
                    target = str(target) if target is __converted else __converted
                else:
                    return __markup()
            if target is not None:
                try:
                    escape = __re_needs_escape(target) is not None
                except TypeError:
                    pass
                else:
                    if escape:
                        if '&' in target:
                            target = target.replace('&', '&amp;')
                        if '<' in target:
                            target = target.replace('<', '&lt;')
                        if '>' in target:
                            target = target.replace('>', '&gt;')
                        if quote is not None and quote in target:
                            target = target.replace(quote, quote_entity)
            return target
        translate = econtext['__translate']
        decode = econtext['__decode']
        on_error_handler = econtext['__on_error_handler']
        try:
            getname = econtext.get_name
            get = econtext.get
            # <Static value=Dict(keys=[Constant(value='class', kind=None), Constant(value='id', kind=None)], values=[Constant(value='d-flex flex-column position-relative', kind=None), Constant(value='portal-searchbox', kind=None)]) name=None at 18aeb326e50> -> __attrs_1696163063632
            __attrs_1696163063632 = _static_1696141401232
            __backup_navigation_root_url_1696099760640 = get('navigation_root_url', __marker)
            # <Value 'view/navigation_root_url' (4:27)> -> __value
            __token = 122
            try:
                __zt_tmp = __attrs_1696163063632
            except NameError:
                __zt_tmp = None
            __value = _static_1696162671184('path', 'view/navigation_root_url', econtext=econtext)(_static_1696162955856(econtext, __zt_tmp))
            econtext['navigation_root_url'] = __value
            __previous_i18n_domain_1696163058576 = __i18n_domain
            __i18n_domain = 'plone'
            # <div ... (0:0)
            # --------------------------------------------------------
            __append('<div class="d-flex flex-column position-relative" id="portal-searchbox" >\n\n  ')
            # <Static value=Dict(keys=[Constant(value='class', kind=None), ..., Constant(value='data-pat-livesearch', kind=None)], values=[Constant(value="d-flex ${python: view.livesearch and 'pat-livesearch'} ${python: view.show_images and 'show_images'}", kind=None), ..., Constant(value='string:ajaxUrl:${navigation_root_url}/@@ajax-search', kind=None)]) name=None at 18aeb327590> -> __attrs_1696162733328
            __attrs_1696162733328 = _static_1696162970000
            # <form ... (0:0)
            # --------------------------------------------------------
            __append('<form')
            # <Symbol value=<DEFAULT> at 18ae1f94a10> -> __default_1696163065296
            __default_1696163065296 = _DEFAULT_MARKER
            # <Interpolation value=<Substitution "d-flex ${python: view.livesearch and 'pat-livesearch'} ${python: view.show_images and 'show_images'}" (9:15)> braces_required=True translation=False default='"?"' default_marker='"?"' at 18aeb325250> -> __attr_class
            __token = 207
            try:
                __zt_tmp = __attrs_1696162733328
            except NameError:
                __zt_tmp = None
            __attr_class = _static_1696163584336('python', " view.livesearch and 'pat-livesearch'", econtext=econtext)(_static_1696163581840(econtext, __zt_tmp))
            __attr_class = __quote(__attr_class, '"', '&quot;', None, _DEFAULT_MARKER)
            __token = 255
            try:
                __zt_tmp = __attrs_1696162733328
            except NameError:
                __zt_tmp = None
            __attr_class_253 = _static_1696163555024('python', " view.show_images and 'show_images'", econtext=econtext)(_static_1696163546320(econtext, __zt_tmp))
            __attr_class_253 = __quote(__attr_class_253, '"', '&quot;', None, _DEFAULT_MARKER)
            __attr_class = '%s%s%s%s' % ('d-flex ', __attr_class if __attr_class is not None else '', ' ', __attr_class_253 if __attr_class_253 is not None else '')
            if __attr_class is None:
                pass
            elif __attr_class is _DEFAULT_MARKER:
                __attr_class = None
            else:
                __tt = type(__attr_class)
                if __tt is bytes:
                    __attr_class = decode(__attr_class)
                elif __tt is not str:
                    if __tt is int or __tt is float:
                        __attr_class = str(__attr_class)
                    else:
                        __markup = getattr(__attr_class, '__html__', None)
                        if __markup is None:
                            __converted = translate(__attr_class, domain=__i18n_domain, context=__i18n_context, target_language=getname('target_language'))
                            __attr_class = str(__attr_class) if __attr_class is __converted else __converted
                        else:
                            __attr_class = __markup()
            if __attr_class is not None:
                __append(' class="%s"' % __attr_class)
            __append(' id="searchGadget_form"')
            # <Symbol value=<DEFAULT> at 18ae1f94a10> -> __default_1696162728912
            __default_1696162728912 = _DEFAULT_MARKER
            # <Substitution 'string:${navigation_root_url}/@@search' (14:17)> -> __attr_action
            __token = 421
            try:
                __zt_tmp = __attrs_1696162733328
            except NameError:
                __zt_tmp = None
            __attr_action = _static_1696163317648('string', '${navigation_root_url}/@@search', econtext=econtext)(_static_1696163325456(econtext, __zt_tmp))
            __attr_action = __quote(__attr_action, '"', '&quot;', '@@search', _DEFAULT_MARKER)
            if __attr_action is not None:
                __append(' action="%s"' % __attr_action)
            __append(' role="search"')
            # <Symbol value=<DEFAULT> at 18ae1f94a10> -> __default_1696162731088
            __default_1696162731088 = _DEFAULT_MARKER
            # <Substitution 'string:ajaxUrl:${navigation_root_url}/@@ajax-search' (15:29)> -> __attr_data_pat_livesearch
            __token = 490
            try:
                __zt_tmp = __attrs_1696162733328
            except NameError:
                __zt_tmp = None
            __attr_data_pat_livesearch = _static_1696162467216('string', 'ajaxUrl:${navigation_root_url}/@@ajax-search', econtext=econtext)(_static_1696162472400(econtext, __zt_tmp))
            __attr_data_pat_livesearch = __quote(__attr_data_pat_livesearch, '"', '&quot;', None, _DEFAULT_MARKER)
            if __attr_data_pat_livesearch is not None:
                __append(' data-pat-livesearch="%s"' % __attr_data_pat_livesearch)
            __append(' >\n\n    ')
            # <Static value=Dict(keys=[Constant(value='class', kind=None), Constant(value='for', kind=None)], values=[Constant(value='hiddenStructure', kind=None), Constant(value='searchGadget', kind=None)]) name=None at 18aeb2d6b90> -> __attrs_1696162736592
            __attrs_1696162736592 = _static_1696163231760
            # <label ... (0:0)
            # --------------------------------------------------------
            __append('<label class="hiddenStructure" for="searchGadget" >')
            __stream_1696162729936 = []
            __append_1696162729936 = __stream_1696162729936.append
            __append_1696162729936('Search Site')
            __msgid_1696162729936 = __re_whitespace(''.join(__stream_1696162729936)).strip()
            __append(translate('text_search', mapping=None, default=__msgid_1696162729936, domain=__i18n_domain, context=__i18n_context, target_language=target_language))
            __append('</label>\n\n    ')
            # <Static value=Dict(keys=[Constant(value='class', kind=None), ..., Constant(value='value', kind=None)], values=[Constant(value='searchField form-control me-2', kind=None), ..., Constant(value='', kind=None)]) name=None at 18aeb2d7350> -> __attrs_1696163841552
            __attrs_1696163841552 = _static_1696163218896
            # <input ... (0:0)
            # --------------------------------------------------------
            __append('<input class="searchField form-control me-2" id="searchGadget" name="SearchableText"')
            # <Symbol value=<DEFAULT> at 18ae1f94a10> -> __default_1696163841296
            __default_1696163841296 = _DEFAULT_MARKER
            # <Translate msgid='title_search_site' node=Constant(value='Search Site', kind=None) at 18aeb3e7450> -> __attr_placeholder
            __attr_placeholder = 'Search Site'
            __attr_placeholder = translate('title_search_site', default=__attr_placeholder, domain=__i18n_domain, context=__i18n_context, target_language=getname('target_language'))
            if __attr_placeholder is not None:
                __append(' placeholder="%s"' % __attr_placeholder)
            __append(' size="18"')
            # <Symbol value=<DEFAULT> at 18ae1f94a10> -> __default_1696163840848
            __default_1696163840848 = _DEFAULT_MARKER
            # <Translate msgid='title_search_site' node=Constant(value='Search Site', kind=None) at 18aeb3e6050> -> __attr_title
            __attr_title = 'Search Site'
            __attr_title = translate('title_search_site', default=__attr_title, domain=__i18n_domain, context=__i18n_context, target_language=getname('target_language'))
            if __attr_title is not None:
                __append(' title="%s"' % __attr_title)
            __append(' type="text"')
            # <Symbol value=<DEFAULT> at 18ae1f94a10> -> __default_1696163855760
            __default_1696163855760 = _DEFAULT_MARKER
            # <Substitution 'request/form/SearchableText|nothing' (33:19)> -> __attr_value
            __token = 980
            try:
                __zt_tmp = __attrs_1696163841552
            except NameError:
                __zt_tmp = None
            __attr_value = _static_1696163452688('path', 'request/form/SearchableText|nothing', econtext=econtext)(_static_1696163450064(econtext, __zt_tmp))
            __attr_value = __quote(__attr_value, '"', '&quot;', '', _DEFAULT_MARKER)
            if __attr_value is not None:
                __append(' value="%s"' % __attr_value)
            __append(' />\n\n    ')
            # <Static value=Dict(keys=[Constant(value='class', kind=None), Constant(value='type', kind=None)], values=[Constant(value='searchButton btn btn-outline-light', kind=None), Constant(value='submit', kind=None)]) name=None at 18aeb427450> -> __attrs_1696164104976
            __attrs_1696164104976 = _static_1696163447952
            # <button ... (0:0)
            # --------------------------------------------------------
            __append('<button class="searchButton btn btn-outline-light" type="submit" >')
            __stream_1696164108048 = []
            __append_1696164108048 = __stream_1696164108048.append
            __append_1696164108048('\n      Search\n    ')
            __msgid_1696164108048 = __re_whitespace(''.join(__stream_1696164108048)).strip()
            __append(translate('label_search', mapping=None, default=__msgid_1696164108048, domain=__i18n_domain, context=__i18n_context, target_language=target_language))
            __append('</button>\n\n    ')
            # <Static value=Dict(keys=[Constant(value='class', kind=None), Constant(value='id', kind=None)], values=[Constant(value='hiddenStructure', kind=None), Constant(value='portal-advanced-search', kind=None)]) name=None at 18aeb427150> -> __attrs_1696164109584
            __attrs_1696164109584 = _static_1696164006416
            # <div ... (0:0)
            # --------------------------------------------------------
            __append('<div class="hiddenStructure" id="portal-advanced-search" >\n      ')
            # <Static value=Dict(keys=[Constant(value='href', kind=None)], values=[Constant(value='#', kind=None)]) name=None at 18aeb2c4890> -> __attrs_1696162666960
            __attrs_1696162666960 = _static_1696163223760
            # <a ... (0:0)
            # --------------------------------------------------------
            __append('<a')
            # <Symbol value=<DEFAULT> at 18ae1f94a10> -> __default_1696162665936
            __default_1696162665936 = _DEFAULT_MARKER
            # <Substitution 'string:${navigation_root_url}/@@search' (51:16)> -> __attr_href
            __token = 1439
            try:
                __zt_tmp = __attrs_1696162666960
            except NameError:
                __zt_tmp = None
            __attr_href = _static_1696163448400('string', '${navigation_root_url}/@@search', econtext=econtext)(_static_1696163448336(econtext, __zt_tmp))
            __attr_href = __quote(__attr_href, '"', '&quot;', '#', _DEFAULT_MARKER)
            if __attr_href is not None:
                __append(' href="%s"' % __attr_href)
            __append(' >')
            __stream_1696162663632 = []
            __append_1696162663632 = __stream_1696162663632.append
            __append_1696162663632('\n          Advanced Search&hellip;\n      ')
            __msgid_1696162663632 = __re_whitespace(''.join(__stream_1696162663632)).strip()
            __append(translate('label_advanced_search', mapping=None, default=__msgid_1696162663632, domain=__i18n_domain, context=__i18n_context, target_language=target_language))
            __append('</a>\n    </div>\n\n  </form>\n\n</div>')
            __i18n_domain = __previous_i18n_domain_1696163058576
            if __backup_navigation_root_url_1696099760640 is __marker:
                del econtext['navigation_root_url']
            else:
                econtext['navigation_root_url'] = __backup_navigation_root_url_1696099760640
            __append('\n')
        except:
            if __token is not None:
                rcontext.setdefault('__error__', []).append(__tokens[__token] + (__filename, _exc_info()[1]))
            raise
    return {'render': render}
# -*- coding: utf-8 -*-
__filename = 'C:\\Users\\matheus.lcarvalho\\Documents\\agend-veic\\backend\\venv\\Lib\\site-packages\\plone\\app\\layout\\viewlets\\keywords.pt'

__tokens = {75: ('context/Subject|nothing', 3, 22), 120: (' nocall:modules/Products.PythonScripts.standard/url_quot', 4, 20), 214: ('categories', 6, 24), 481: ('categories', 18, 37), 627: ('python:url_quote(category)', 23, 21), 708: ('string:${context/@@plone_portal_state/navigation_root_url}/@@search?Subject%3Alist=${quotedCat}', 26, 16), 851: ('category', 29, 27)}
from chameleon.tales import DEFAULT_MARKER as _DEFAULT_MARKER
from chameleon.tales import DEFAULT_MARKER as _DEFAULT_MARKER
from chameleon.tales import DEFAULT_MARKER as _DEFAULT_MARKER
from chameleon.tales import DEFAULT_MARKER as _DEFAULT_MARKER
from sys import exc_info as _exc_info
from Products.PageTemplates.engine import _compile_zt_expr as __compile_zt_expr
from Products.PageTemplates.engine import _C2ZContextWrapper as __C2ZContextWrapper
_static_1696162972752 = {'id': 'section-category'}
_static_1696125953552 = __compile_zt_expr
_static_1696125952208 = __C2ZContextWrapper
_static_1696164514256 = __compile_zt_expr
_static_1696164526736 = __C2ZContextWrapper
_static_1696164454608 = __compile_zt_expr
_static_1696164448912 = __C2ZContextWrapper
_static_1696162830608 = {'class': 'viewlet keywords-viewlet'}
_static_1696162826640 = {'class': 'card-title section-heading d-none'}
_static_1696162830480 = {}
_static_1696164594064 = __compile_zt_expr
_static_1696164604112 = __C2ZContextWrapper
_static_1696162995536 = {'class': 'btn btn-sm btn-outline-primary', 'href': '#', 'rel': 'nofollow'}
_static_1696164037200 = __compile_zt_expr
_static_1696164043280 = __C2ZContextWrapper
_static_1696163840208 = __compile_zt_expr
_static_1696163847120 = __C2ZContextWrapper
_static_1696163848080 = {}
_static_1696162769616 = __compile_zt_expr
_static_1696162758928 = __C2ZContextWrapper
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
            # <Static value=Dict(keys=[Constant(value='id', kind=None)], values=[Constant(value='section-category', kind=None)]) name=None at 18aeb39e190> -> __attrs_1696163555408
            __attrs_1696163555408 = _static_1696162972752
            __backup_categories_1696060404160 = get('categories', __marker)
            # <Value 'context/Subject|nothing' (3:22)> -> __value
            __token = 75
            try:
                __zt_tmp = __attrs_1696163555408
            except NameError:
                __zt_tmp = None
            __value = _static_1696125953552('path', 'context/Subject|nothing', econtext=econtext)(_static_1696125952208(econtext, __zt_tmp))
            econtext['categories'] = __value
            __backup_url_quote_1696099564096 = get('url_quote', __marker)
            # <Value 'nocall:modules/Products.PythonScripts.standard/url_quote' (4:20)> -> __value
            __token = 120
            try:
                __zt_tmp = __attrs_1696163555408
            except NameError:
                __zt_tmp = None
            __value = _static_1696164514256('nocall', 'modules/Products.PythonScripts.standard/url_quote', econtext=econtext)(_static_1696164526736(econtext, __zt_tmp))
            econtext['url_quote'] = __value
            # <Value 'categories' (6:24)> -> __condition
            __token = 214
            try:
                __zt_tmp = __attrs_1696163555408
            except NameError:
                __zt_tmp = None
            __condition = _static_1696164454608('path', 'categories', econtext=econtext)(_static_1696164448912(econtext, __zt_tmp))
            if __condition:
                __previous_i18n_domain_1696163547984 = __i18n_domain
                __i18n_domain = 'plone'
                # <section ... (0:0)
                # --------------------------------------------------------
                __append('<section id="section-category" >\n\n  ')
                # <Static value=Dict(keys=[Constant(value='class', kind=None)], values=[Constant(value='viewlet keywords-viewlet', kind=None)]) name=None at 18aeb39e410> -> __attrs_1696163549008
                __attrs_1696163549008 = _static_1696162830608
                # <div ... (0:0)
                # --------------------------------------------------------
                __append('<div class="viewlet keywords-viewlet">\n\n    ')
                # <Static value=Dict(keys=[Constant(value='class', kind=None)], values=[Constant(value='card-title section-heading d-none', kind=None)]) name=None at 18aeb39dc50> -> __attrs_1696163547600
                __attrs_1696163547600 = _static_1696162826640
                # <header ... (0:0)
                # --------------------------------------------------------
                __append('<header class="card-title section-heading d-none" >')
                __stream_1696163559888 = []
                __append_1696163559888 = __stream_1696163559888.append
                __append_1696163559888('\n      Keywords\n    ')
                __msgid_1696163559888 = __re_whitespace(''.join(__stream_1696163559888)).strip()
                __append(translate('section_keywords_heading', mapping=None, default=__msgid_1696163559888, domain=__i18n_domain, context=__i18n_context, target_language=target_language))
                __append('</header>\n\n    ')
                # <Static value=Dict(keys=[], values=[]) name=None at 18ae201bf90> -> __attrs_1696124619792
                __attrs_1696124619792 = _static_1696162830480
                __backup_category_1696100583808 = get('category', __marker)
                # <Value 'categories' (18:37)> -> __iterator
                __token = 481
                try:
                    __zt_tmp = __attrs_1696124619792
                except NameError:
                    __zt_tmp = None
                __iterator = _static_1696164594064('path', 'categories', econtext=econtext)(_static_1696164604112(econtext, __zt_tmp))
                __iterator, ____index_1696124621520 = getname('repeat')('category', __iterator)
                econtext['category'] = None
                for __item in __iterator:
                    econtext['category'] = __item
                    __append('\n      ')
                    # <Static value=Dict(keys=[Constant(value='class', kind=None), ..., Constant(value='rel', kind=None)], values=[Constant(value='btn btn-sm btn-outline-primary', kind=None), ..., Constant(value='nofollow', kind=None)]) name=None at 18ae8e7c190> -> __attrs_1696163255952
                    __attrs_1696163255952 = _static_1696162995536
                    __backup_quotedCat_1696101315904 = get('quotedCat', __marker)
                    # <Value 'python:url_quote(category)' (23:21)> -> __value
                    __token = 627
                    try:
                        __zt_tmp = __attrs_1696163255952
                    except NameError:
                        __zt_tmp = None
                    __value = _static_1696164037200('python', 'url_quote(category)', econtext=econtext)(_static_1696164043280(econtext, __zt_tmp))
                    econtext['quotedCat'] = __value
                    # <a ... (0:0)
                    # --------------------------------------------------------
                    __append('<a class="btn btn-sm btn-outline-primary"')
                    # <Symbol value=<DEFAULT> at 18ae1f94a10> -> __default_1696163261456
                    __default_1696163261456 = _DEFAULT_MARKER
                    # <Substitution 'string:${context/@@plone_portal_state/navigation_root_url}/@@search?Subject%3Alist=${quotedCat}' (26:16)> -> __attr_href
                    __token = 708
                    try:
                        __zt_tmp = __attrs_1696163255952
                    except NameError:
                        __zt_tmp = None
                    __attr_href = _static_1696163840208('string', '${context/@@plone_portal_state/navigation_root_url}/@@search?Subject%3Alist=${quotedCat}', econtext=econtext)(_static_1696163847120(econtext, __zt_tmp))
                    __attr_href = __quote(__attr_href, '"', '&quot;', '#', _DEFAULT_MARKER)
                    if __attr_href is not None:
                        __append(' href="%s"' % __attr_href)
                    __append(' rel="nofollow" >\n        ')
                    # <Static value=Dict(keys=[], values=[]) name=None at 18ae201bf90> -> __attrs_1696162738896
                    __attrs_1696162738896 = _static_1696163848080
                    # <span ... (0:0)
                    # --------------------------------------------------------
                    __append('<span>')
                    # <Symbol value=<DEFAULT> at 18ae1f94a10> -> __default_1696162736464
                    __default_1696162736464 = _DEFAULT_MARKER
                    # <Value 'category' (29:27)> -> __cache_1696162726480
                    __token = 851
                    try:
                        __zt_tmp = __attrs_1696162738896
                    except NameError:
                        __zt_tmp = None
                    __cache_1696162726480 = _static_1696162769616('path', 'category', econtext=econtext)(_static_1696162758928(econtext, __zt_tmp))
                    # <BinOp left=<Value 'category' (29:27)> op=<class 'chameleon.nodes.Is'> right=<Symbol value=<DEFAULT> at 18ae1f94a10> at 18aeb2d7d50> -> __condition
                    __expression = __cache_1696162726480
                    # <Symbol value=<DEFAULT> at 18ae1f94a10> -> __value
                    __value = _DEFAULT_MARKER
                    __condition = __expression is __value
                    if __condition:
                        pass
                    else:
                        __content = __cache_1696162726480
                        __content = __quote(__content, None, '\xad', None, None)
                        if __content is not None:
                            __append(__content)
                    __append('</span>\n      </a>')
                    if __backup_quotedCat_1696101315904 is __marker:
                        del econtext['quotedCat']
                    else:
                        econtext['quotedCat'] = __backup_quotedCat_1696101315904
                    __append('\n    ')
                    ____index_1696124621520 -= 1
                    if ____index_1696124621520 > 0:
                        __append('')
                if __backup_category_1696100583808 is __marker:
                    del econtext['category']
                else:
                    econtext['category'] = __backup_category_1696100583808
                __append('\n\n  </div>\n\n</section>')
                __i18n_domain = __previous_i18n_domain_1696163547984
            if __backup_url_quote_1696099564096 is __marker:
                del econtext['url_quote']
            else:
                econtext['url_quote'] = __backup_url_quote_1696099564096
            if __backup_categories_1696060404160 is __marker:
                del econtext['categories']
            else:
                econtext['categories'] = __backup_categories_1696060404160
            __append('\n')
        except:
            if __token is not None:
                rcontext.setdefault('__error__', []).append(__tokens[__token] + (__filename, _exc_info()[1]))
            raise
    return {'render': render}
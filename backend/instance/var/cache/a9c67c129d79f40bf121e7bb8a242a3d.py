# -*- coding: utf-8 -*-
__filename = 'C:\\Users\\matheus.lcarvalho\\Documents\\agend-veic\\backend\\venv\\Lib\\site-packages\\plone\\app\\layout\\links\\author.pt'

__tokens = {193: ('view/navigation_root_url', 5, 27), 386: ('string:${navigation_root_url}/author/${context/Creator|nothing}', 14, 15)}
from chameleon.tales import DEFAULT_MARKER as _DEFAULT_MARKER
from chameleon.tales import DEFAULT_MARKER as _DEFAULT_MARKER
from chameleon.tales import DEFAULT_MARKER as _DEFAULT_MARKER
from sys import exc_info as _exc_info
from Products.PageTemplates.engine import _compile_zt_expr as __compile_zt_expr
from Products.PageTemplates.engine import _C2ZContextWrapper as __C2ZContextWrapper
_static_1696032176528 = {'xmlns': 'http://www.w3.org/1999/xhtml'}
_static_1696162744208 = __compile_zt_expr
_static_1696162744912 = __C2ZContextWrapper
_static_1696162749648 = {'href': '', 'rel': 'author', 'title': 'Author information'}
_static_1696096250064 = __compile_zt_expr
_static_1696068187600 = __C2ZContextWrapper
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
            # <Static value=Dict(keys=[Constant(value='xmlns', kind=None)], values=[Constant(value='http://www.w3.org/1999/xhtml', kind=None)]) name=None at 18ae57aa990> -> __attrs_1696101586960
            __attrs_1696101586960 = _static_1696032176528
            __backup_navigation_root_url_1696163251968 = get('navigation_root_url', __marker)
            # <Value 'view/navigation_root_url' (5:27)> -> __value
            __token = 193
            try:
                __zt_tmp = __attrs_1696101586960
            except NameError:
                __zt_tmp = None
            __value = _static_1696162744208('path', 'view/navigation_root_url', econtext=econtext)(_static_1696162744912(econtext, __zt_tmp))
            econtext['navigation_root_url'] = __value
            __previous_i18n_domain_1696101594896 = __i18n_domain
            __i18n_domain = 'plone'
            __append('\n  ')
            # <Static value=Dict(keys=[Constant(value='href', kind=None), ..., Constant(value='title', kind=None)], values=[Constant(value='', kind=None), ..., Constant(value='Author information', kind=None)]) name=None at 18ae7885f50> -> __attrs_1696101596176
            __attrs_1696101596176 = _static_1696162749648
            # <link ... (0:0)
            # --------------------------------------------------------
            __append('<link')
            # <Symbol value=<DEFAULT> at 18ae1f94a10> -> __default_1696101581072
            __default_1696101581072 = _DEFAULT_MARKER
            # <Substitution 'string:${navigation_root_url}/author/${context/Creator|nothing}' (14:15)> -> __attr_href
            __token = 386
            try:
                __zt_tmp = __attrs_1696101596176
            except NameError:
                __zt_tmp = None
            __attr_href = _static_1696096250064('string', '${navigation_root_url}/author/${context/Creator|nothing}', econtext=econtext)(_static_1696068187600(econtext, __zt_tmp))
            __attr_href = __quote(__attr_href, '"', '&quot;', '', _DEFAULT_MARKER)
            if __attr_href is not None:
                __append(' href="%s"' % __attr_href)
            __append(' rel="author"')
            # <Symbol value=<DEFAULT> at 18ae1f94a10> -> __default_1696101587664
            __default_1696101587664 = _DEFAULT_MARKER
            # <Translate msgid='title_author_info' node=Constant(value='Author information', kind=None) at 18ae99fe590> -> __attr_title
            __attr_title = 'Author information'
            __attr_title = translate('title_author_info', default=__attr_title, domain=__i18n_domain, context=__i18n_context, target_language=getname('target_language'))
            if __attr_title is not None:
                __append(' title="%s"' % __attr_title)
            __append(' />\n')
            __i18n_domain = __previous_i18n_domain_1696101594896
            if __backup_navigation_root_url_1696163251968 is __marker:
                del econtext['navigation_root_url']
            else:
                econtext['navigation_root_url'] = __backup_navigation_root_url_1696163251968
            __append('\n')
        except:
            if __token is not None:
                rcontext.setdefault('__error__', []).append(__tokens[__token] + (__filename, _exc_info()[1]))
            raise
    return {'render': render}
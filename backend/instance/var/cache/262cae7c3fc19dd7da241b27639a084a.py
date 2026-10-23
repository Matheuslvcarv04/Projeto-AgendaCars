# -*- coding: utf-8 -*-
__filename = 'C:\\Users\\matheus.lcarvalho\\Documents\\agend-veic\\backend\\venv\\Lib\\site-packages\\plone\\app\\layout\\links\\rsslink.pt'

__tokens = {28: ('view/rsslinks', 1, 28), 60: ('link/url', 2, 16), 112: ('link/title', 4, 17)}
from chameleon.tales import DEFAULT_MARKER as _DEFAULT_MARKER
from chameleon.tales import DEFAULT_MARKER as _DEFAULT_MARKER
from chameleon.tales import DEFAULT_MARKER as _DEFAULT_MARKER
from chameleon.tales import DEFAULT_MARKER as _DEFAULT_MARKER
from chameleon.tales import DEFAULT_MARKER as _DEFAULT_MARKER
from chameleon.tales import DEFAULT_MARKER as _DEFAULT_MARKER
from sys import exc_info as _exc_info
from Products.PageTemplates.engine import _compile_zt_expr as __compile_zt_expr
from Products.PageTemplates.engine import _C2ZContextWrapper as __C2ZContextWrapper
_static_1696095604432 = {}
_static_1696099340048 = __compile_zt_expr
_static_1696164121424 = __C2ZContextWrapper
_static_1696096004816 = {'href': '${link/url}', 'rel': 'alternate', 'title': '${link/title}', 'type': 'application/rss+xml'}
_static_1696164345808 = __compile_zt_expr
_static_1696162751632 = __C2ZContextWrapper
_static_1696163094096 = __compile_zt_expr
_static_1696163097808 = __C2ZContextWrapper
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
            # <Static value=Dict(keys=[], values=[]) name=None at 18ae201bf90> -> __attrs_1696163963344
            __attrs_1696163963344 = _static_1696095604432
            __backup_link_1696125261120 = get('link', __marker)
            # <Value 'view/rsslinks' (1:28)> -> __iterator
            __token = 28
            try:
                __zt_tmp = __attrs_1696163963344
            except NameError:
                __zt_tmp = None
            __iterator = _static_1696099340048('path', 'view/rsslinks', econtext=econtext)(_static_1696164121424(econtext, __zt_tmp))
            __iterator, ____index_1696163957136 = getname('repeat')('link', __iterator)
            econtext['link'] = None
            for __item in __iterator:
                econtext['link'] = __item
                __append('\n  ')
                # <Static value=Dict(keys=[Constant(value='href', kind=None), ..., Constant(value='type', kind=None)], values=[Constant(value='${link/url}', kind=None), ..., Constant(value='application/rss+xml', kind=None)]) name=None at 18aeb402090> -> __attrs_1696127194384
                __attrs_1696127194384 = _static_1696096004816
                # <link ... (0:0)
                # --------------------------------------------------------
                __append('<link')
                # <Symbol value=<DEFAULT> at 18ae1f94a10> -> __default_1696096029456
                __default_1696096029456 = _DEFAULT_MARKER
                # <Interpolation value=<Substitution '${link/url}' (2:14)> braces_required=True translation=False default='"?"' default_marker='"?"' at 18aeb400d10> -> __attr_href
                __token = 60
                try:
                    __zt_tmp = __attrs_1696127194384
                except NameError:
                    __zt_tmp = None
                __attr_href = _static_1696164345808('path', 'link/url', econtext=econtext)(_static_1696162751632(econtext, __zt_tmp))
                __attr_href = __quote(__attr_href, '"', '&quot;', None, _DEFAULT_MARKER)
                __attr_href = __attr_href
                if __attr_href is None:
                    pass
                elif __attr_href is _DEFAULT_MARKER:
                    __attr_href = None
                else:
                    __tt = type(__attr_href)
                    if __tt is bytes:
                        __attr_href = decode(__attr_href)
                    elif __tt is not str:
                        if __tt is int or __tt is float:
                            __attr_href = str(__attr_href)
                        else:
                            __markup = getattr(__attr_href, '__html__', None)
                            if __markup is None:
                                __converted = translate(__attr_href, domain=__i18n_domain, context=__i18n_context, target_language=getname('target_language'))
                                __attr_href = str(__attr_href) if __attr_href is __converted else __converted
                            else:
                                __attr_href = __markup()
                if __attr_href is not None:
                    __append(' href="%s"' % __attr_href)
                __append(' rel="alternate"')
                # <Symbol value=<DEFAULT> at 18ae1f94a10> -> __default_1696127204432
                __default_1696127204432 = _DEFAULT_MARKER
                # <Interpolation value=<Substitution '${link/title}' (4:15)> braces_required=True translation=False default='"?"' default_marker='"?"' at 18ae733aa50> -> __attr_title
                __token = 112
                try:
                    __zt_tmp = __attrs_1696127194384
                except NameError:
                    __zt_tmp = None
                __attr_title = _static_1696163094096('path', 'link/title', econtext=econtext)(_static_1696163097808(econtext, __zt_tmp))
                __attr_title = __quote(__attr_title, '"', '&quot;', None, _DEFAULT_MARKER)
                __attr_title = __attr_title
                if __attr_title is None:
                    pass
                elif __attr_title is _DEFAULT_MARKER:
                    __attr_title = None
                else:
                    __tt = type(__attr_title)
                    if __tt is bytes:
                        __attr_title = decode(__attr_title)
                    elif __tt is not str:
                        if __tt is int or __tt is float:
                            __attr_title = str(__attr_title)
                        else:
                            __markup = getattr(__attr_title, '__html__', None)
                            if __markup is None:
                                __converted = translate(__attr_title, domain=__i18n_domain, context=__i18n_context, target_language=getname('target_language'))
                                __attr_title = str(__attr_title) if __attr_title is __converted else __converted
                            else:
                                __attr_title = __markup()
                if __attr_title is not None:
                    __append(' title="%s"' % __attr_title)
                __append(' type="application/rss+xml" />\n')
                ____index_1696163957136 -= 1
                if ____index_1696163957136 > 0:
                    __append('')
            if __backup_link_1696125261120 is __marker:
                del econtext['link']
            else:
                econtext['link'] = __backup_link_1696125261120
            __append('\n')
        except:
            if __token is not None:
                rcontext.setdefault('__error__', []).append(__tokens[__token] + (__filename, _exc_info()[1]))
            raise
    return {'render': render}
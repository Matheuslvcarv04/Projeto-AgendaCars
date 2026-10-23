# -*- coding: utf-8 -*-
__filename = 'C:\\Users\\matheus.lcarvalho\\Documents\\agend-veic\\backend\\venv\\Lib\\site-packages\\plone\\app\\layout\\viewlets\\social_tags.pt'

__tokens = {22: ('view/tags', 1, 22), 64: ('tag', 3, 8)}
from sys import exc_info as _exc_info
from Products.PageTemplates.engine import _compile_zt_expr as __compile_zt_expr
from Products.PageTemplates.engine import _C2ZContextWrapper as __C2ZContextWrapper
_static_1696094331152 = {}
_static_1696163342160 = __compile_zt_expr
_static_1696101111952 = __C2ZContextWrapper
_static_1696101588816 = __compile_zt_expr
_static_1696094052688 = __C2ZContextWrapper
_static_1696094048656 = set(['compact', 'autofocus', 'shadowrootserializable', 'controls', 'playsinline', 'itemscope', 'reversed', 'loop', 'formnovalidate', 'disabled', 'readonly', 'nomodule', 'noresize', 'checked', 'allowfullscreen', 'defer', 'ismap', 'muted', 'multiple', 'autoplay', 'noshade', 'default', 'novalidate', 'open', 'async', 'selected', 'required', 'shadowrootclonable', 'inert', 'nowrap', 'declare', 'shadowrootdelegatesfocus'])
_static_1696094740880 = set([])
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
            # <Static value=Dict(keys=[], values=[]) name=None at 18ae201bf90> -> __attrs_1696163634896
            __attrs_1696163634896 = _static_1696094331152
            __backup_tag_1696163254272 = get('tag', __marker)
            # <Value 'view/tags' (1:22)> -> __iterator
            __token = 22
            try:
                __zt_tmp = __attrs_1696163634896
            except NameError:
                __zt_tmp = None
            __iterator = _static_1696163342160('path', 'view/tags', econtext=econtext)(_static_1696101111952(econtext, __zt_tmp))
            __iterator, ____index_1696123853136 = getname('repeat')('tag', __iterator)
            econtext['tag'] = None
            for __item in __iterator:
                econtext['tag'] = __item
                # <meta ... (0:0)
                # --------------------------------------------------------
                __append('<meta')
                # <Value 'tag' (3:8)> -> __cache_1696163642640
                __token = 64
                try:
                    __zt_tmp = __attrs_1696163634896
                except NameError:
                    __zt_tmp = None
                __cache_1696163642640 = _static_1696101588816('path', 'tag', econtext=econtext)(_static_1696094052688(econtext, __zt_tmp))
                __attr_1696163627344 = __cache_1696163642640
                for name, value in __attr_1696163627344.items():
                    if name in _static_1696094048656:
                        if not bool(value):
                            continue
                        value = name
                    if name not in _static_1696094740880 and value is not None:
                        if name in _static_1696094048656:
                            if not bool(value):
                                continue
                            value = name
                        __append(' ' + name + '=' + '"' + __quote(value, '"', '&quot;', None, None) + '"')
                __append(' />')
                ____index_1696123853136 -= 1
                if ____index_1696123853136 > 0:
                    __append('\n')
            if __backup_tag_1696163254272 is __marker:
                del econtext['tag']
            else:
                econtext['tag'] = __backup_tag_1696163254272
            __append('\n')
        except:
            if __token is not None:
                rcontext.setdefault('__error__', []).append(__tokens[__token] + (__filename, _exc_info()[1]))
            raise
    return {'render': render}
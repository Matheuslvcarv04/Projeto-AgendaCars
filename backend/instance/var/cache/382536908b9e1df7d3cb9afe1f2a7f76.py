# -*- coding: utf-8 -*-
__filename = 'C:\\Users\\matheus.lcarvalho\\Documents\\agend-veic\\backend\\venv\\Lib\\site-packages\\plone\\app\\layout\\viewlets\\social_tags_body.pt'

__tokens = {141: ('view/body_tags', 6, 24), 243: ('tag/itemprop|nothing', 9, 19), 178: ('tag/content|nothing', 7, 21)}
from chameleon.tales import DEFAULT_MARKER as _DEFAULT_MARKER
from chameleon.tales import DEFAULT_MARKER as _DEFAULT_MARKER
from chameleon.tales import DEFAULT_MARKER as _DEFAULT_MARKER
from chameleon.tales import DEFAULT_MARKER as _DEFAULT_MARKER
from sys import exc_info as _exc_info
from Products.PageTemplates.engine import _compile_zt_expr as __compile_zt_expr
from Products.PageTemplates.engine import _C2ZContextWrapper as __C2ZContextWrapper
_static_1696163224144 = {'id': 'social-tags-body', 'itemscope': '', 'itemtype': 'http://schema.org/WebPage', 'style': 'display: none'}
_static_1696164505936 = {'itemprop': 'tag/itemprop|nothing'}
_static_1696164499024 = __compile_zt_expr
_static_1696162471120 = __C2ZContextWrapper
_static_1696162730448 = __compile_zt_expr
_static_1696162727184 = __C2ZContextWrapper
_static_1696164512144 = __compile_zt_expr
_static_1696162729936 = __C2ZContextWrapper
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
            # <Static value=Dict(keys=[Constant(value='id', kind=None), ..., Constant(value='style', kind=None)], values=[Constant(value='social-tags-body', kind=None), ..., Constant(value='display: none', kind=None)]) name=None at 18ae767d7d0> -> __attrs_1696099457232
            __attrs_1696099457232 = _static_1696163224144
            # <span ... (0:0)
            # --------------------------------------------------------
            __append('<span id="social-tags-body" itemscope itemtype="http://schema.org/WebPage" style="display: none" >\n  ')
            # <Static value=Dict(keys=[Constant(value='itemprop', kind=None)], values=[Constant(value='tag/itemprop|nothing', kind=None)]) name=None at 18aeb345450> -> __attrs_1696163193616
            __attrs_1696163193616 = _static_1696164505936
            __backup_tag_1696094737344 = get('tag', __marker)
            # <Value 'view/body_tags' (6:24)> -> __iterator
            __token = 141
            try:
                __zt_tmp = __attrs_1696163193616
            except NameError:
                __zt_tmp = None
            __iterator = _static_1696164499024('path', 'view/body_tags', econtext=econtext)(_static_1696162471120(econtext, __zt_tmp))
            __iterator, ____index_1696163191440 = getname('repeat')('tag', __iterator)
            econtext['tag'] = None
            for __item in __iterator:
                econtext['tag'] = __item
                # <span ... (0:0)
                # --------------------------------------------------------
                __append('<span')
                # <Symbol value=<DEFAULT> at 18ae1f94a10> -> __default_1696163194448
                __default_1696163194448 = _DEFAULT_MARKER
                # <Substitution 'tag/itemprop|nothing' (9:19)> -> __attr_itemprop
                __token = 243
                try:
                    __zt_tmp = __attrs_1696163193616
                except NameError:
                    __zt_tmp = None
                __attr_itemprop = _static_1696162730448('path', 'tag/itemprop|nothing', econtext=econtext)(_static_1696162727184(econtext, __zt_tmp))
                __attr_itemprop = __quote(__attr_itemprop, '"', '&quot;', None, _DEFAULT_MARKER)
                if __attr_itemprop is not None:
                    __append(' itemprop="%s"' % __attr_itemprop)
                __append(' >')
                # <Symbol value=<DEFAULT> at 18ae1f94a10> -> __default_1696163194704
                __default_1696163194704 = _DEFAULT_MARKER
                # <Value 'tag/content|nothing' (7:21)> -> __cache_1696163200016
                __token = 178
                try:
                    __zt_tmp = __attrs_1696163193616
                except NameError:
                    __zt_tmp = None
                __cache_1696163200016 = _static_1696164512144('path', 'tag/content|nothing', econtext=econtext)(_static_1696162729936(econtext, __zt_tmp))
                # <BinOp left=<Value 'tag/content|nothing' (7:21)> op=<class 'chameleon.nodes.Is'> right=<Symbol value=<DEFAULT> at 18ae1f94a10> at 18ae767cd10> -> __condition
                __expression = __cache_1696163200016
                # <Symbol value=<DEFAULT> at 18ae1f94a10> -> __value
                __value = _DEFAULT_MARKER
                __condition = __expression is __value
                if __condition:
                    pass
                else:
                    __content = __cache_1696163200016
                    __content = __quote(__content, None, '\xad', None, None)
                    if __content is not None:
                        __append(__content)
                __append('</span>')
                ____index_1696163191440 -= 1
                if ____index_1696163191440 > 0:
                    __append('\n  ')
            if __backup_tag_1696094737344 is __marker:
                del econtext['tag']
            else:
                econtext['tag'] = __backup_tag_1696094737344
            __append('\n</span>\n')
        except:
            if __token is not None:
                rcontext.setdefault('__error__', []).append(__tokens[__token] + (__filename, _exc_info()[1]))
            raise
    return {'render': render}
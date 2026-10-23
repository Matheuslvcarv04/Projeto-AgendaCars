# -*- coding: utf-8 -*-
__filename = 'C:\\Users\\matheus.lcarvalho\\Documents\\agend-veic\\backend\\venv\\Lib\\site-packages\\plone\\app\\layout\\viewlets\\globalstatusmessage.pt'

__tokens = {51: ('nocall: context/@@iconresolver', 2, 23), 135: ('python:view.messages', 4, 35), 279: ('message/type | nothing', 10, 15), 324: (' python:view.display_info_for_mtype(mtype', 11, 21), 399: ('mtype', 13, 22), 190: ("python:display_info['cssclass']", 7, 30), 447: ("python:icons.tag(display_info['icon'], tag_alt=display_info['msg'], tag_class='statusmessage-icon mb-1 me-2')", 15, 37), 575: ("python:display_info['msg']", 16, 14), 661: ('message/message | nothing', 18, 23)}
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
_static_1696162771600 = {}
_static_1696164049488 = __compile_zt_expr
_static_1696162960848 = __C2ZContextWrapper
_static_1696162967184 = __compile_zt_expr
_static_1696162993872 = __C2ZContextWrapper
_static_1696162993296 = {'class': "portalMessage ${python:display_info['cssclass']}", 'role': 'alert'}
_static_1696163452560 = __compile_zt_expr
_static_1696163447888 = __C2ZContextWrapper
_static_1696164534096 = __compile_zt_expr
_static_1696162960272 = __C2ZContextWrapper
_static_1696162989776 = __compile_zt_expr
_static_1696162990992 = __C2ZContextWrapper
_static_1696163512784 = __compile_zt_expr
_static_1696163526288 = __C2ZContextWrapper
_static_1696163520016 = {}
_static_1696164010768 = __compile_zt_expr
_static_1696164006672 = __C2ZContextWrapper
_static_1696163060112 = {}
_static_1696163054544 = __compile_zt_expr
_static_1696163327568 = __C2ZContextWrapper
_static_1696141394896 = {'class': 'content'}
_static_1696141402704 = __compile_zt_expr
_static_1696141408464 = __C2ZContextWrapper
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
            # <Static value=Dict(keys=[], values=[]) name=None at 18ae201bf90> -> __attrs_1696164601680
            __attrs_1696164601680 = _static_1696162771600
            __backup_icons_1696099817216 = get('icons', __marker)
            # <Value 'nocall: context/@@iconresolver' (2:23)> -> __value
            __token = 51
            try:
                __zt_tmp = __attrs_1696164601680
            except NameError:
                __zt_tmp = None
            __value = _static_1696164049488('nocall', ' context/@@iconresolver', econtext=econtext)(_static_1696162960848(econtext, __zt_tmp))
            econtext['icons'] = __value
            __backup_message_1696101314368 = get('message', __marker)
            # <Value 'python:view.messages' (4:35)> -> __iterator
            __token = 135
            try:
                __zt_tmp = __attrs_1696164601680
            except NameError:
                __zt_tmp = None
            __iterator = _static_1696162967184('python', 'view.messages', econtext=econtext)(_static_1696162993872(econtext, __zt_tmp))
            __iterator, ____index_1696164609552 = getname('repeat')('message', __iterator)
            econtext['message'] = None
            for __item in __iterator:
                econtext['message'] = __item
                __append('\n\n  ')
                # <Static value=Dict(keys=[Constant(value='class', kind=None), Constant(value='role', kind=None)], values=[Constant(value="portalMessage ${python:display_info['cssclass']}", kind=None), Constant(value='alert', kind=None)]) name=None at 18aeb49e350> -> __attrs_1696164596624
                __attrs_1696164596624 = _static_1696162993296
                __backup_mtype_1696163181824 = get('mtype', __marker)
                # <Value 'message/type | nothing' (10:15)> -> __value
                __token = 279
                try:
                    __zt_tmp = __attrs_1696164596624
                except NameError:
                    __zt_tmp = None
                __value = _static_1696163452560('path', 'message/type | nothing', econtext=econtext)(_static_1696163447888(econtext, __zt_tmp))
                econtext['mtype'] = __value
                __backup_display_info_1696123530816 = get('display_info', __marker)
                # <Value 'python:view.display_info_for_mtype(mtype)' (11:21)> -> __value
                __token = 324
                try:
                    __zt_tmp = __attrs_1696164596624
                except NameError:
                    __zt_tmp = None
                __value = _static_1696164534096('python', 'view.display_info_for_mtype(mtype)', econtext=econtext)(_static_1696162960272(econtext, __zt_tmp))
                econtext['display_info'] = __value
                # <Value 'mtype' (13:22)> -> __condition
                __token = 399
                try:
                    __zt_tmp = __attrs_1696164596624
                except NameError:
                    __zt_tmp = None
                __condition = _static_1696162989776('path', 'mtype', econtext=econtext)(_static_1696162990992(econtext, __zt_tmp))
                if __condition:
                    # <div ... (0:0)
                    # --------------------------------------------------------
                    __append('<div')
                    # <Symbol value=<DEFAULT> at 18ae1f94a10> -> __default_1696164595856
                    __default_1696164595856 = _DEFAULT_MARKER
                    # <Interpolation value=<Substitution "portalMessage ${python:display_info['cssclass']}" (7:14)> braces_required=True translation=False default='"?"' default_marker='"?"' at 18aeb49c8d0> -> __attr_class
                    __token = 190
                    try:
                        __zt_tmp = __attrs_1696164596624
                    except NameError:
                        __zt_tmp = None
                    __attr_class = _static_1696163512784('python', "display_info['cssclass']", econtext=econtext)(_static_1696163526288(econtext, __zt_tmp))
                    __attr_class = __quote(__attr_class, '"', '&quot;', None, _DEFAULT_MARKER)
                    __attr_class = '%s%s' % ('portalMessage ', __attr_class if __attr_class is not None else '')
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
                    __append(' role="alert" >\n    ')
                    # <Static value=Dict(keys=[], values=[]) name=None at 18ae201bf90> -> __attrs_1696163845392
                    __attrs_1696163845392 = _static_1696163520016
                    # <Symbol value=<DEFAULT> at 18ae1f94a10> -> __default_1696164598352
                    __default_1696164598352 = _DEFAULT_MARKER
                    # <Value "python:icons.tag(display_info['icon'], tag_alt=display_info['msg'], tag_class='statusmessage-icon mb-1 me-2')" (15:37)> -> __cache_1696164606032
                    __token = 447
                    try:
                        __zt_tmp = __attrs_1696163845392
                    except NameError:
                        __zt_tmp = None
                    __cache_1696164606032 = _static_1696164010768('python', "icons.tag(display_info['icon'], tag_alt=display_info['msg'], tag_class='statusmessage-icon mb-1 me-2')", econtext=econtext)(_static_1696164006672(econtext, __zt_tmp))
                    # <BinOp left=<Value "python:icons.tag(display_info['icon'], tag_alt=display_info['msg'], tag_class='statusmessage-icon mb-1 me-2')" (15:37)> op=<class 'chameleon.nodes.Is'> right=<Symbol value=<DEFAULT> at 18ae1f94a10> at 18aeb49d510> -> __condition
                    __expression = __cache_1696164606032
                    # <Symbol value=<DEFAULT> at 18ae1f94a10> -> __value
                    __value = _DEFAULT_MARKER
                    __condition = __expression is __value
                    if __condition:
                        pass
                    else:
                        __content = __cache_1696164606032
                        __content = __convert(__content)
                        if __content is not None:
                            __append(__content)
                    __append('\n    ')
                    # <Static value=Dict(keys=[], values=[]) name=None at 18ae201bf90> -> __attrs_1696163846160
                    __attrs_1696163846160 = _static_1696163060112
                    # <strong ... (0:0)
                    # --------------------------------------------------------
                    __append('<strong>')
                    # <Interpolation value=<Substitution "${python:display_info['msg']}" (16:12)> braces_required=True translation=False default='"?"' default_marker='"?"' at 18aeb3e5d10> -> __content_1695946256768
                    __token = 575
                    try:
                        __zt_tmp = __attrs_1696163846160
                    except NameError:
                        __zt_tmp = None
                    __content_1695946256768 = _static_1696163054544('python', "display_info['msg']", econtext=econtext)(_static_1696163327568(econtext, __zt_tmp))
                    __content_1695946256768 = __quote(__content_1695946256768, '\x00', '&#0;', None, None)
                    __content_1695946256768 = __content_1695946256768
                    if __content_1695946256768 is None:
                        pass
                    elif __content_1695946256768 is None:
                        __content_1695946256768 = None
                    else:
                        __tt = type(__content_1695946256768)
                        if __tt is bytes:
                            __content_1695946256768 = decode(__content_1695946256768)
                        elif __tt is not str:
                            if __tt is int or __tt is float:
                                __content_1695946256768 = str(__content_1695946256768)
                            else:
                                __markup = getattr(__content_1695946256768, '__html__', None)
                                if __markup is None:
                                    __converted = translate(__content_1695946256768, domain=__i18n_domain, context=__i18n_context, target_language=getname('target_language'))
                                    __content_1695946256768 = str(__content_1695946256768) if __content_1695946256768 is __converted else __converted
                                else:
                                    __content_1695946256768 = __markup()
                    if __content_1695946256768 is not None:
                        __append(__content_1695946256768)
                    __append('</strong>\n    ')
                    # <Static value=Dict(keys=[Constant(value='class', kind=None)], values=[Constant(value='content', kind=None)]) name=None at 18aeb3e6c10> -> __attrs_1696163848272
                    __attrs_1696163848272 = _static_1696141394896
                    # <Symbol value=<DEFAULT> at 18ae1f94a10> -> __default_1696163849232
                    __default_1696163849232 = _DEFAULT_MARKER
                    # <Value 'message/message | nothing' (18:23)> -> __cache_1696163849488
                    __token = 661
                    try:
                        __zt_tmp = __attrs_1696163848272
                    except NameError:
                        __zt_tmp = None
                    __cache_1696163849488 = _static_1696141402704('path', 'message/message | nothing', econtext=econtext)(_static_1696141408464(econtext, __zt_tmp))
                    # <BinOp left=<Value 'message/message | nothing' (18:23)> op=<class 'chameleon.nodes.Is'> right=<Symbol value=<DEFAULT> at 18ae1f94a10> at 18aeb3e4ad0> -> __condition
                    __expression = __cache_1696163849488
                    # <Symbol value=<DEFAULT> at 18ae1f94a10> -> __value
                    __value = _DEFAULT_MARKER
                    __condition = __expression is __value
                    if __condition:
                        # <span ... (0:0)
                        # --------------------------------------------------------
                        __append('<span class="content" >\n            The status message.\n    </span>')
                    else:
                        __content = __cache_1696163849488
                        __content = translate(__content, default=None, domain=__i18n_domain, context=__i18n_context, target_language=target_language)
                        __content = __quote(__content, None, '\xad', None, None)
                        if __content is not None:
                            __append(__content)
                    __append('\n  </div>')
                if __backup_display_info_1696123530816 is __marker:
                    del econtext['display_info']
                else:
                    econtext['display_info'] = __backup_display_info_1696123530816
                if __backup_mtype_1696163181824 is __marker:
                    del econtext['mtype']
                else:
                    econtext['mtype'] = __backup_mtype_1696163181824
                __append('\n\n')
                ____index_1696164609552 -= 1
                if ____index_1696164609552 > 0:
                    __append('')
            if __backup_message_1696101314368 is __marker:
                del econtext['message']
            else:
                econtext['message'] = __backup_message_1696101314368
            if __backup_icons_1696099817216 is __marker:
                del econtext['icons']
            else:
                econtext['icons'] = __backup_icons_1696099817216
            __append('\n')
        except:
            if __token is not None:
                rcontext.setdefault('__error__', []).append(__tokens[__token] + (__filename, _exc_info()[1]))
            raise
    return {'render': render}
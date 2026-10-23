# -*- coding: utf-8 -*-
__filename = 'C:\\Users\\matheus.lcarvalho\\Documents\\agend-veic\\backend\\venv\\Lib\\site-packages\\plone\\app\\layout\\nextprevious\\nextprevious.pt'

__tokens = {73: ('view/enabled|nothing', 3, 19), 120: (' view/isViewTemplate|nothin', 4, 25), 185: ('python:enabled and isViewTemplate', 6, 24), 300: ('view/site_url', 11, 26), 422: ('view/next', 16, 16), 452: (' view/previou', 17, 19), 503: ('python:previous is not None or next is not None', 19, 24), 696: ('previous', 24, 24), 748: ('previous/url', 26, 16), 1012: ('previous/title', 35, 29), 1240: ('next', 43, 24), 1288: ('next/url', 45, 16), 1500: ('next/title', 53, 29)}
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
_static_1696162896592 = {'id': 'section-next-prev'}
_static_1696162763600 = __compile_zt_expr
_static_1696162313744 = __C2ZContextWrapper
_static_1696162780368 = __compile_zt_expr
_static_1696162786576 = __C2ZContextWrapper
_static_1696099456656 = __compile_zt_expr
_static_1696162305744 = __C2ZContextWrapper
_static_1696162777552 = {}
_static_1696163318928 = __compile_zt_expr
_static_1696163330512 = __C2ZContextWrapper
_static_1696163320208 = {'class': 'pagination justify-content-between'}
_static_1696164523536 = __compile_zt_expr
_static_1696162958160 = __C2ZContextWrapper
_static_1696162957264 = __compile_zt_expr
_static_1696162674128 = __C2ZContextWrapper
_static_1696162665488 = __compile_zt_expr
_static_1696162661456 = __C2ZContextWrapper
_static_1696164581904 = {'class': 'btn btn-sm btn-outline-secondary align-self-start previous', 'title': 'Go to previous item', 'href': 'previous/url'}
_static_1696164588240 = __compile_zt_expr
_static_1696164580496 = __C2ZContextWrapper
_static_1696162844304 = __compile_zt_expr
_static_1696162851536 = __C2ZContextWrapper
_static_1696094573584 = {'class': 'arrow'}
_static_1696164004496 = {'class': 'label'}
_static_1696164014544 = {}
_static_1696095602448 = __compile_zt_expr
_static_1696094049488 = __C2ZContextWrapper
_static_1696164542736 = {'class': 'btn btn-sm btn-outline-secondary align-self-end next', 'title': 'Go to next item', 'href': 'next/url'}
_static_1696164502864 = __compile_zt_expr
_static_1696164345424 = __C2ZContextWrapper
_static_1696164504848 = __compile_zt_expr
_static_1696164504784 = __C2ZContextWrapper
_static_1696141395344 = {'class': 'label'}
_static_1696141408080 = {}
_static_1696164599440 = __compile_zt_expr
_static_1696164594704 = __C2ZContextWrapper
_static_1696037483536 = {'class': 'arrow'}
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
            # <Static value=Dict(keys=[Constant(value='id', kind=None)], values=[Constant(value='section-next-prev', kind=None)]) name=None at 18aeb39ec90> -> __attrs_1696163550800
            __attrs_1696163550800 = _static_1696162896592
            __backup_enabled_1696059818432 = get('enabled', __marker)
            # <Value 'view/enabled|nothing' (3:19)> -> __value
            __token = 73
            try:
                __zt_tmp = __attrs_1696163550800
            except NameError:
                __zt_tmp = None
            __value = _static_1696162763600('path', 'view/enabled|nothing', econtext=econtext)(_static_1696162313744(econtext, __zt_tmp))
            econtext['enabled'] = __value
            __backup_isViewTemplate_1696124256768 = get('isViewTemplate', __marker)
            # <Value 'view/isViewTemplate|nothing' (4:25)> -> __value
            __token = 120
            try:
                __zt_tmp = __attrs_1696163550800
            except NameError:
                __zt_tmp = None
            __value = _static_1696162780368('path', 'view/isViewTemplate|nothing', econtext=econtext)(_static_1696162786576(econtext, __zt_tmp))
            econtext['isViewTemplate'] = __value
            # <Value 'python:enabled and isViewTemplate' (6:24)> -> __condition
            __token = 185
            try:
                __zt_tmp = __attrs_1696163550800
            except NameError:
                __zt_tmp = None
            __condition = _static_1696099456656('python', 'enabled and isViewTemplate', econtext=econtext)(_static_1696162305744(econtext, __zt_tmp))
            if __condition:
                __previous_i18n_domain_1696163559376 = __i18n_domain
                __i18n_domain = 'plone'
                # <section ... (0:0)
                # --------------------------------------------------------
                __append('<section id="section-next-prev" >\n\n  ')
                # <Static value=Dict(keys=[], values=[]) name=None at 18ae201bf90> -> __attrs_1696125956880
                __attrs_1696125956880 = _static_1696162777552
                __backup_portal_url_1696123526528 = get('portal_url', __marker)
                # <Value 'view/site_url' (11:26)> -> __value
                __token = 300
                try:
                    __zt_tmp = __attrs_1696125956880
                except NameError:
                    __zt_tmp = None
                __value = _static_1696163318928('path', 'view/site_url', econtext=econtext)(_static_1696163330512(econtext, __zt_tmp))
                econtext['portal_url'] = __value
                __append('\n\n    ')
                # <Static value=Dict(keys=[Constant(value='class', kind=None)], values=[Constant(value='pagination justify-content-between', kind=None)]) name=None at 18ae8fc3210> -> __attrs_1696125949584
                __attrs_1696125949584 = _static_1696163320208
                __backup_next_1696123527168 = get('next', __marker)
                # <Value 'view/next' (16:16)> -> __value
                __token = 422
                try:
                    __zt_tmp = __attrs_1696125949584
                except NameError:
                    __zt_tmp = None
                __value = _static_1696164523536('path', 'view/next', econtext=econtext)(_static_1696162958160(econtext, __zt_tmp))
                econtext['next'] = __value
                __backup_previous_1696098835008 = get('previous', __marker)
                # <Value 'view/previous' (17:19)> -> __value
                __token = 452
                try:
                    __zt_tmp = __attrs_1696125949584
                except NameError:
                    __zt_tmp = None
                __value = _static_1696162957264('path', 'view/previous', econtext=econtext)(_static_1696162674128(econtext, __zt_tmp))
                econtext['previous'] = __value
                # <Value 'python:previous is not None or next is not None' (19:24)> -> __condition
                __token = 503
                try:
                    __zt_tmp = __attrs_1696125949584
                except NameError:
                    __zt_tmp = None
                __condition = _static_1696162665488('python', 'previous is not None or next is not None', econtext=econtext)(_static_1696162661456(econtext, __zt_tmp))
                if __condition:
                    # <nav ... (0:0)
                    # --------------------------------------------------------
                    __append('<nav class="pagination justify-content-between" >\n\n      ')
                    # <Static value=Dict(keys=[Constant(value='class', kind=None), ..., Constant(value='href', kind=None)], values=[Constant(value='btn btn-sm btn-outline-secondary align-self-start previous', kind=None), ..., Constant(value='previous/url', kind=None)]) name=None at 18ae8fc3d10> -> __attrs_1696098738704
                    __attrs_1696098738704 = _static_1696164581904
                    # <Value 'previous' (24:24)> -> __condition
                    __token = 696
                    try:
                        __zt_tmp = __attrs_1696098738704
                    except NameError:
                        __zt_tmp = None
                    __condition = _static_1696164588240('path', 'previous', econtext=econtext)(_static_1696164580496(econtext, __zt_tmp))
                    if __condition:
                        # <a ... (0:0)
                        # --------------------------------------------------------
                        __append('<a class="btn btn-sm btn-outline-secondary align-self-start previous"')
                        # <Symbol value=<DEFAULT> at 18ae1f94a10> -> __default_1696125953168
                        __default_1696125953168 = _DEFAULT_MARKER
                        # <Translate msgid='title_previous_item' node=Constant(value='Go to previous item', kind=None) at 18ae8fc16d0> -> __attr_title
                        __attr_title = 'Go to previous item'
                        __attr_title = translate('title_previous_item', default=__attr_title, domain=__i18n_domain, context=__i18n_context, target_language=getname('target_language'))
                        if __attr_title is not None:
                            __append(' title="%s"' % __attr_title)
                        # <Symbol value=<DEFAULT> at 18ae1f94a10> -> __default_1696065862736
                        __default_1696065862736 = _DEFAULT_MARKER
                        # <Substitution 'previous/url' (26:16)> -> __attr_href
                        __token = 748
                        try:
                            __zt_tmp = __attrs_1696098738704
                        except NameError:
                            __zt_tmp = None
                        __attr_href = _static_1696162844304('path', 'previous/url', econtext=econtext)(_static_1696162851536(econtext, __zt_tmp))
                        __attr_href = __quote(__attr_href, '"', '&quot;', None, _DEFAULT_MARKER)
                        if __attr_href is not None:
                            __append(' href="%s"' % __attr_href)
                        __append(' >\n        ')
                        # <Static value=Dict(keys=[Constant(value='class', kind=None)], values=[Constant(value='arrow', kind=None)]) name=None at 18aeb307dd0> -> __attrs_1696162929168
                        __attrs_1696162929168 = _static_1696094573584
                        # <span ... (0:0)
                        # --------------------------------------------------------
                        __append('<span class="arrow"></span>\n        ')
                        # <Static value=Dict(keys=[Constant(value='class', kind=None)], values=[Constant(value='label', kind=None)]) name=None at 18aeb307650> -> __attrs_1696059905040
                        __attrs_1696059905040 = _static_1696164004496
                        # <span ... (0:0)
                        # --------------------------------------------------------
                        __append('<span class="label" >')
                        __stream_1696162497024_itemtitle = ''
                        __stream_1696162926992 = []
                        __append_1696162926992 = __stream_1696162926992.append
                        __append_1696162926992('\n              Previous:\n          ')
                        __stream_1696162497024_itemtitle = []
                        __append_1696162497024_itemtitle = __stream_1696162497024_itemtitle.append
                        # <Static value=Dict(keys=[], values=[]) name=None at 18ae201bf90> -> __attrs_1696164046352
                        __attrs_1696164046352 = _static_1696164014544
                        # <Symbol value=<DEFAULT> at 18ae1f94a10> -> __default_1696164052240
                        __default_1696164052240 = _DEFAULT_MARKER
                        # <Value 'previous/title' (35:29)> -> __cache_1696164037776
                        __token = 1012
                        try:
                            __zt_tmp = __attrs_1696164046352
                        except NameError:
                            __zt_tmp = None
                        __cache_1696164037776 = _static_1696095602448('path', 'previous/title', econtext=econtext)(_static_1696094049488(econtext, __zt_tmp))
                        # <BinOp left=<Value 'previous/title' (35:29)> op=<class 'chameleon.nodes.Is'> right=<Symbol value=<DEFAULT> at 18ae1f94a10> at 18aeb417410> -> __condition
                        __expression = __cache_1696164037776
                        # <Symbol value=<DEFAULT> at 18ae1f94a10> -> __value
                        __value = _DEFAULT_MARKER
                        __condition = __expression is __value
                        if __condition:
                            # <span ... (0:0)
                            # --------------------------------------------------------
                            __append_1696162497024_itemtitle('<span ></span>')
                        else:
                            __content = __cache_1696164037776
                            __content = __quote(__content, None, '\xad', None, None)
                            if __content is not None:
                                __append_1696162497024_itemtitle(__content)
                        __append_1696162926992('${itemtitle}')
                        __stream_1696162497024_itemtitle = ''.join(__stream_1696162497024_itemtitle)
                        __append_1696162926992('\n        ')
                        __msgid_1696162926992 = __re_whitespace(''.join(__stream_1696162926992)).strip()
                        __append(translate('label_previous_item', mapping={'itemtitle': __stream_1696162497024_itemtitle}, default=__msgid_1696162926992, domain=__i18n_domain, context=__i18n_context, target_language=target_language))
                        __append('</span>\n      </a>')
                    __append('\n\n      ')
                    # <Static value=Dict(keys=[Constant(value='class', kind=None), ..., Constant(value='href', kind=None)], values=[Constant(value='btn btn-sm btn-outline-secondary align-self-end next', kind=None), ..., Constant(value='next/url', kind=None)]) name=None at 18aeb4176d0> -> __attrs_1696162897744
                    __attrs_1696162897744 = _static_1696164542736
                    # <Value 'next' (43:24)> -> __condition
                    __token = 1240
                    try:
                        __zt_tmp = __attrs_1696162897744
                    except NameError:
                        __zt_tmp = None
                    __condition = _static_1696164502864('path', 'next', econtext=econtext)(_static_1696164345424(econtext, __zt_tmp))
                    if __condition:
                        # <a ... (0:0)
                        # --------------------------------------------------------
                        __append('<a class="btn btn-sm btn-outline-secondary align-self-end next"')
                        # <Symbol value=<DEFAULT> at 18ae1f94a10> -> __default_1696164051664
                        __default_1696164051664 = _DEFAULT_MARKER
                        # <Translate msgid='title_next_item' node=Constant(value='Go to next item', kind=None) at 18aeb415750> -> __attr_title
                        __attr_title = 'Go to next item'
                        __attr_title = translate('title_next_item', default=__attr_title, domain=__i18n_domain, context=__i18n_context, target_language=getname('target_language'))
                        if __attr_title is not None:
                            __append(' title="%s"' % __attr_title)
                        # <Symbol value=<DEFAULT> at 18ae1f94a10> -> __default_1696162892048
                        __default_1696162892048 = _DEFAULT_MARKER
                        # <Substitution 'next/url' (45:16)> -> __attr_href
                        __token = 1288
                        try:
                            __zt_tmp = __attrs_1696162897744
                        except NameError:
                            __zt_tmp = None
                        __attr_href = _static_1696164504848('path', 'next/url', econtext=econtext)(_static_1696164504784(econtext, __zt_tmp))
                        __attr_href = __quote(__attr_href, '"', '&quot;', None, _DEFAULT_MARKER)
                        if __attr_href is not None:
                            __append(' href="%s"' % __attr_href)
                        __append(' >\n        ')
                        # <Static value=Dict(keys=[Constant(value='class', kind=None)], values=[Constant(value='label', kind=None)]) name=None at 18aeb2fd0d0> -> __attrs_1696162890896
                        __attrs_1696162890896 = _static_1696141395344
                        # <span ... (0:0)
                        # --------------------------------------------------------
                        __append('<span class="label" >')
                        __stream_1696162499264_itemtitle = ''
                        __stream_1696162905616 = []
                        __append_1696162905616 = __stream_1696162905616.append
                        __append_1696162905616('\n              Next:\n          ')
                        __stream_1696162499264_itemtitle = []
                        __append_1696162499264_itemtitle = __stream_1696162499264_itemtitle.append
                        # <Static value=Dict(keys=[], values=[]) name=None at 18ae201bf90> -> __attrs_1696164033680
                        __attrs_1696164033680 = _static_1696141408080
                        # <Symbol value=<DEFAULT> at 18ae1f94a10> -> __default_1696093088592
                        __default_1696093088592 = _DEFAULT_MARKER
                        # <Value 'next/title' (53:29)> -> __cache_1696162902608
                        __token = 1500
                        try:
                            __zt_tmp = __attrs_1696164033680
                        except NameError:
                            __zt_tmp = None
                        __cache_1696162902608 = _static_1696164599440('path', 'next/title', econtext=econtext)(_static_1696164594704(econtext, __zt_tmp))
                        # <BinOp left=<Value 'next/title' (53:29)> op=<class 'chameleon.nodes.Is'> right=<Symbol value=<DEFAULT> at 18ae1f94a10> at 18aeb2fc550> -> __condition
                        __expression = __cache_1696162902608
                        # <Symbol value=<DEFAULT> at 18ae1f94a10> -> __value
                        __value = _DEFAULT_MARKER
                        __condition = __expression is __value
                        if __condition:
                            # <span ... (0:0)
                            # --------------------------------------------------------
                            __append_1696162499264_itemtitle('<span ></span>')
                        else:
                            __content = __cache_1696162902608
                            __content = __quote(__content, None, '\xad', None, None)
                            if __content is not None:
                                __append_1696162499264_itemtitle(__content)
                        __append_1696162905616('${itemtitle}')
                        __stream_1696162499264_itemtitle = ''.join(__stream_1696162499264_itemtitle)
                        __append_1696162905616('\n        ')
                        __msgid_1696162905616 = __re_whitespace(''.join(__stream_1696162905616)).strip()
                        __append(translate('label_next_item', mapping={'itemtitle': __stream_1696162499264_itemtitle}, default=__msgid_1696162905616, domain=__i18n_domain, context=__i18n_context, target_language=target_language))
                        __append('</span>\n        ')
                        # <Static value=Dict(keys=[Constant(value='class', kind=None)], values=[Constant(value='arrow', kind=None)]) name=None at 18aeb413210> -> __attrs_1696164025488
                        __attrs_1696164025488 = _static_1696037483536
                        # <span ... (0:0)
                        # --------------------------------------------------------
                        __append('<span class="arrow"></span>\n      </a>')
                    __append('\n\n\n    </nav>')
                if __backup_previous_1696098835008 is __marker:
                    del econtext['previous']
                else:
                    econtext['previous'] = __backup_previous_1696098835008
                if __backup_next_1696123527168 is __marker:
                    del econtext['next']
                else:
                    econtext['next'] = __backup_next_1696123527168
                __append('\n\n  ')
                if __backup_portal_url_1696123526528 is __marker:
                    del econtext['portal_url']
                else:
                    econtext['portal_url'] = __backup_portal_url_1696123526528
                __append('\n\n</section>')
                __i18n_domain = __previous_i18n_domain_1696163559376
            if __backup_isViewTemplate_1696124256768 is __marker:
                del econtext['isViewTemplate']
            else:
                econtext['isViewTemplate'] = __backup_isViewTemplate_1696124256768
            if __backup_enabled_1696059818432 is __marker:
                del econtext['enabled']
            else:
                econtext['enabled'] = __backup_enabled_1696059818432
            __append('\n')
        except:
            if __token is not None:
                rcontext.setdefault('__error__', []).append(__tokens[__token] + (__filename, _exc_info()[1]))
            raise
    return {'render': render}
# -*- coding: utf-8 -*-
__filename = 'C:\\Users\\matheus.lcarvalho\\Documents\\agend-veic\\backend\\venv\\Lib\\site-packages\\Products\\Five\\utilities\\browser\\edit_markers.pt'

__tokens = {803: ('request/ACTUAL_URL', 22, 33), 991: ('view/getInterfaceNames', 27, 34), 1141: ('interface/name', 30, 27), 1226: ('view/getDirectlyProvidedNames', 33, 34), 1416: ('interface/name', 36, 38), 1472: (' interface/nam', 37, 40), 1570: ('interface/name', 40, 27), 1648: ('view/getDirectlyProvidedNames', 43, 27), 2151: ('view/getAvailableInterfaceNames', 57, 34), 2340: ('interface/name', 60, 38), 2396: (' interface/nam', 61, 40), 2494: ('interface/name', 64, 27), 2629: ('view/getAvailableInterfaceNames', 67, 70), 23: ('context/@@standard_macros/page', 1, 23), 23: ('context/@@standard_macros/page', 1, 23)}
from sys import exc_info as _exc_info
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
from chameleon.tales import DEFAULT_MARKER as _DEFAULT_MARKER
from chameleon.tales import DEFAULT_MARKER as _DEFAULT_MARKER
from chameleon.tales import DEFAULT_MARKER as _DEFAULT_MARKER
from chameleon.tales import DEFAULT_MARKER as _DEFAULT_MARKER
from collections import deque as _deque
from Products.PageTemplates.engine import _compile_zt_expr as __compile_zt_expr
from Products.PageTemplates.engine import _C2ZContextWrapper as __C2ZContextWrapper
_static_2616825062096 = {}
_static_2616827625232 = {}
_static_2616821067920 = {}
_static_2616787708944 = {'class': 'form-help formHelp'}
_static_2616823350288 = {}
_static_2616828072528 = {'action': '.', 'method': 'post'}
_static_2616794584912 = __compile_zt_expr
_static_2616794583120 = __C2ZContextWrapper
_static_2616825682384 = {}
_static_2616786264016 = {'class': 'table table-striped table-hover table-sm'}
_static_2616825840528 = {}
_static_2616825852688 = __compile_zt_expr
_static_2616825848528 = __C2ZContextWrapper
_static_2616825844624 = {'class': 'zmi-object-check text-right'}
_static_2616794647120 = {'class': 'zmi-object-id'}
_static_2616782994640 = __compile_zt_expr
_static_2616782994896 = __C2ZContextWrapper
_static_2616782807888 = {}
_static_2616783036304 = __compile_zt_expr
_static_2616826086864 = __C2ZContextWrapper
_static_2616826096912 = {'class': 'zmi-object-check text-right'}
_static_2616826090192 = {'type': 'checkbox', 'id': 'INTERFACE', 'name': 'remove:list', 'value': 'interface/name'}
_static_2616827920464 = __compile_zt_expr
_static_2616827924688 = __C2ZContextWrapper
_static_2616782992080 = __compile_zt_expr
_static_2616821656400 = __C2ZContextWrapper
_static_2616851619216 = {'class': 'zmi-object-id'}
_static_2616828881808 = __compile_zt_expr
_static_2616851358480 = __C2ZContextWrapper
_static_2616821830800 = {}
_static_2616819642704 = __compile_zt_expr
_static_2616819640080 = __C2ZContextWrapper
_static_2616819636560 = {'class': 'zmi-object-check text-right'}
_static_2616819630864 = {'class': 'zmi-controls'}
_static_2616821271504 = {'class': 'btn btn-primary', 'type': 'submit', 'name': 'SAVE', 'value': 'Remove'}
_static_2616821834576 = {}
_static_2616794434704 = {'class': 'table table-striped table-hover table-sm'}
_static_2616852305872 = {}
_static_2616825604304 = __compile_zt_expr
_static_2616825600976 = __C2ZContextWrapper
_static_2616825604368 = {'class': 'zmi-object-check text-right'}
_static_2616788352400 = {'type': 'checkbox', 'id': 'INTERFACE', 'name': 'add:list', 'value': 'interface/name'}
_static_2616786242832 = __compile_zt_expr
_static_2616822345104 = __C2ZContextWrapper
_static_2616827268304 = __compile_zt_expr
_static_2616827274192 = __C2ZContextWrapper
_static_2616794436304 = {'class': 'zmi-object-id'}
_static_2616819637392 = __compile_zt_expr
_static_2616826088720 = __C2ZContextWrapper
_static_2616828651344 = {'class': 'zmi-controls form-group form-inline'}
_static_2616793626832 = __compile_zt_expr
_static_2616793625872 = __C2ZContextWrapper
_static_2616793619728 = {'class': 'btn btn-primary', 'type': 'submit', 'name': 'SAVE', 'value': 'Add'}
_static_2616826927120 = {}
_static_2616826933392 = 'page'
_static_2616786168848 = {}
_static_2616851807120 = __compile_zt_expr
_static_2616826937296 = __C2ZContextWrapper
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

    def render_heading(__stream, econtext, rcontext, __i18n_domain=None, __i18n_context=None, target_language=None):
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
            # <Static value=Dict(keys=[], values=[]) name=None at 2614191fed0> -> __attrs_2616827754576
            __attrs_2616827754576 = _static_2616825062096
            __append('\n    ')
            # <Static value=Dict(keys=[], values=[]) name=None at 2614191fed0> -> __attrs_2616827750416
            __attrs_2616827750416 = _static_2616827625232
            # <h1 ... (0:0)
            # --------------------------------------------------------
            __append('<h1>')
            __stream_2616827755600 = []
            __append_2616827755600 = __stream_2616827755600.append
            __append_2616827755600('Assign Marker Interfaces')
            __msgid_2616827755600 = __re_whitespace(''.join(__stream_2616827755600)).strip()
            __append(translate('heading_edit_marker', mapping=None, default=__msgid_2616827755600, domain=__i18n_domain, context=__i18n_context, target_language=target_language))
            __append('</h1>\n  ')
        except:
            if __token is not None:
                rcontext.setdefault('__error__', []).append(__tokens[__token] + (__filename, _exc_info()[1]))
            raise

    def render_main(__stream, econtext, rcontext, __i18n_domain=None, __i18n_context=None, target_language=None):
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
            # <Static value=Dict(keys=[], values=[]) name=None at 2614191fed0> -> __attrs_2616850101456
            __attrs_2616850101456 = _static_2616821067920
            __append('\n    ')
            # <Static value=Dict(keys=[Constant(value='class', kind=None)], values=[Constant(value='form-help formHelp', kind=None)]) name=None at 261488fa090> -> __attrs_2616852463376
            __attrs_2616852463376 = _static_2616787708944
            # <p ... (0:0)
            # --------------------------------------------------------
            __append('<p class="form-help formHelp">')
            __stream_2616852462608 = []
            __append_2616852462608 = __stream_2616852462608.append
            __append_2616852462608('\n      Change the behavior of this object by adding or removing marker\n      interfaces. You can choose one or more interfaces to be added to the\n      list of provided interfaces for this object.\n      ')
            # <Static value=Dict(keys=[], values=[]) name=None at 2614191fed0> -> __attrs_2616852447504
            __attrs_2616852447504 = _static_2616823350288
            # <br ... (0:0)
            # --------------------------------------------------------
            __append_2616852462608('<br />\n      A marker interface is used to identify an instance of a piece of\n      content. This allows you to enable and disable views based on marker\n      interfaces for example.\n    ')
            __msgid_2616852462608 = __re_whitespace(''.join(__stream_2616852462608)).strip()
            if __msgid_2616852462608:
                __append(translate(__msgid_2616852462608, mapping=None, default=__msgid_2616852462608, domain=__i18n_domain, context=__i18n_context, target_language=target_language))
            __append('</p>\n    \n    ')
            # <Static value=Dict(keys=[Constant(value='action', kind=None), Constant(value='method', kind=None)], values=[Constant(value='.', kind=None), Constant(value='post', kind=None)]) name=None at 261454da390> -> __attrs_2616797792528
            __attrs_2616797792528 = _static_2616828072528
            # <form ... (0:0)
            # --------------------------------------------------------
            __append('<form')
            # <Symbol value=<DEFAULT> at 261418bf450> -> __default_2616797799568
            __default_2616797799568 = _DEFAULT_MARKER
            # <Substitution 'request/ACTUAL_URL' (22:33)> -> __attr_action
            __token = 803
            try:
                __zt_tmp = __attrs_2616797792528
            except NameError:
                __zt_tmp = None
            __attr_action = _static_2616794584912('path', 'request/ACTUAL_URL', econtext=econtext)(_static_2616794583120(econtext, __zt_tmp))
            __attr_action = __quote(__attr_action, '"', '&quot;', '.', _DEFAULT_MARKER)
            if __attr_action is not None:
                __append(' action="%s"' % __attr_action)
            __append(' method="post">\n\n      ')
            # <Static value=Dict(keys=[], values=[]) name=None at 2614191fed0> -> __attrs_2616825775568
            __attrs_2616825775568 = _static_2616825682384
            # <h3 ... (0:0)
            # --------------------------------------------------------
            __append('<h3>')
            __stream_2616825788496 = []
            __append_2616825788496 = __stream_2616825788496.append
            __append_2616825788496('Provided interfaces')
            __msgid_2616825788496 = __re_whitespace(''.join(__stream_2616825788496)).strip()
            __append(translate('legend_provided', mapping=None, default=__msgid_2616825788496, domain=__i18n_domain, context=__i18n_context, target_language=target_language))
            __append('</h3>\n\n      ')
            # <Static value=Dict(keys=[Constant(value='class', kind=None)], values=[Constant(value='table table-striped table-hover table-sm', kind=None)]) name=None at 26146f880d0> -> __attrs_2616819585424
            __attrs_2616819585424 = _static_2616786264016
            # <table ... (0:0)
            # --------------------------------------------------------
            __append('<table class="table table-striped table-hover table-sm">\n        ')
            # <Static value=Dict(keys=[], values=[]) name=None at 2614191fed0> -> __attrs_2616819594832
            __attrs_2616819594832 = _static_2616825840528
            __backup_interface_2616787079936 = get('interface', __marker)
            # <Value 'view/getInterfaceNames' (27:34)> -> __iterator
            __token = 991
            try:
                __zt_tmp = __attrs_2616819594832
            except NameError:
                __zt_tmp = None
            __iterator = _static_2616825852688('path', 'view/getInterfaceNames', econtext=econtext)(_static_2616825848528(econtext, __zt_tmp))
            __iterator, ____index_2616819589840 = getname('repeat')('interface', __iterator)
            econtext['interface'] = None
            for __item in __iterator:
                econtext['interface'] = __item
                # <tr ... (0:0)
                # --------------------------------------------------------
                __append('<tr>\n          ')
                # <Static value=Dict(keys=[Constant(value='class', kind=None)], values=[Constant(value='zmi-object-check text-right', kind=None)]) name=None at 261469a2110> -> __attrs_2616794493648
                __attrs_2616794493648 = _static_2616825844624
                # <td ... (0:0)
                # --------------------------------------------------------
                __append('<td class="zmi-object-check text-right">&nbsp;</td>\n          ')
                # <Static value=Dict(keys=[Constant(value='class', kind=None)], values=[Constant(value='zmi-object-id', kind=None)]) name=None at 26147222f50> -> __attrs_2616794261904
                __attrs_2616794261904 = _static_2616794647120
                # <td ... (0:0)
                # --------------------------------------------------------
                __append('<td class="zmi-object-id">')
                # <Symbol value=<DEFAULT> at 261418bf450> -> __default_2616828494928
                __default_2616828494928 = _DEFAULT_MARKER
                # <Value 'interface/name' (30:27)> -> __cache_2616820598544
                __token = 1141
                try:
                    __zt_tmp = __attrs_2616794261904
                except NameError:
                    __zt_tmp = None
                __cache_2616820598544 = _static_2616782994640('path', 'interface/name', econtext=econtext)(_static_2616782994896(econtext, __zt_tmp))
                # <BinOp left=<Value 'interface/name' (30:27)> op=<class 'chameleon.nodes.Is'> right=<Symbol value=<DEFAULT> at 261418bf450> at 261451b1610> -> __condition
                __expression = __cache_2616820598544
                # <Symbol value=<DEFAULT> at 261418bf450> -> __value
                __value = _DEFAULT_MARKER
                __condition = __expression is __value
                if __condition:
                    __append('Interface Name')
                else:
                    __content = __cache_2616820598544
                    __content = __quote(__content, None, '\xad', None, None)
                    if __content is not None:
                        __append(__content)
                __append('</td>\n        </tr>')
                ____index_2616819589840 -= 1
                if ____index_2616819589840 > 0:
                    __append('\n        ')
            if __backup_interface_2616787079936 is __marker:
                del econtext['interface']
            else:
                econtext['interface'] = __backup_interface_2616787079936
            __append('\n\n        ')
            # <Static value=Dict(keys=[], values=[]) name=None at 2614191fed0> -> __attrs_2616794256464
            __attrs_2616794256464 = _static_2616782807888
            __backup_interface_2616827153600 = get('interface', __marker)
            # <Value 'view/getDirectlyProvidedNames' (33:34)> -> __iterator
            __token = 1226
            try:
                __zt_tmp = __attrs_2616794256464
            except NameError:
                __zt_tmp = None
            __iterator = _static_2616783036304('path', 'view/getDirectlyProvidedNames', econtext=econtext)(_static_2616826086864(econtext, __zt_tmp))
            __iterator, ____index_2616794264912 = getname('repeat')('interface', __iterator)
            econtext['interface'] = None
            for __item in __iterator:
                econtext['interface'] = __item
                # <tr ... (0:0)
                # --------------------------------------------------------
                __append('<tr>\n          ')
                # <Static value=Dict(keys=[Constant(value='class', kind=None)], values=[Constant(value='zmi-object-check text-right', kind=None)]) name=None at 2614517bdd0> -> __attrs_2616794264976
                __attrs_2616794264976 = _static_2616826096912
                # <td ... (0:0)
                # --------------------------------------------------------
                __append('<td class="zmi-object-check text-right">\n            ')
                # <Static value=Dict(keys=[Constant(value='type', kind=None), ..., Constant(value='value', kind=None)], values=[Constant(value='checkbox', kind=None), ..., Constant(value='interface/name', kind=None)]) name=None at 2614698b210> -> __attrs_2616851805648
                __attrs_2616851805648 = _static_2616826090192
                # <input ... (0:0)
                # --------------------------------------------------------
                __append('<input type="checkbox"')
                # <Symbol value=<DEFAULT> at 261418bf450> -> __default_2616819497872
                __default_2616819497872 = _DEFAULT_MARKER
                # <Substitution 'interface/name' (36:38)> -> __attr_id
                __token = 1416
                try:
                    __zt_tmp = __attrs_2616851805648
                except NameError:
                    __zt_tmp = None
                __attr_id = _static_2616827920464('path', 'interface/name', econtext=econtext)(_static_2616827924688(econtext, __zt_tmp))
                __attr_id = __quote(__attr_id, '"', '&quot;', 'INTERFACE', _DEFAULT_MARKER)
                if __attr_id is not None:
                    __append(' id="%s"' % __attr_id)
                __append(' name="remove:list"')
                # <Symbol value=<DEFAULT> at 261418bf450> -> __default_2616851794576
                __default_2616851794576 = _DEFAULT_MARKER
                # <Substitution 'interface/name' (37:40)> -> __attr_value
                __token = 1472
                try:
                    __zt_tmp = __attrs_2616851805648
                except NameError:
                    __zt_tmp = None
                __attr_value = _static_2616782992080('path', 'interface/name', econtext=econtext)(_static_2616821656400(econtext, __zt_tmp))
                __attr_value = __quote(__attr_value, '"', '&quot;', None, _DEFAULT_MARKER)
                if __attr_value is not None:
                    __append(' value="%s"' % __attr_value)
                __append('/>\n          </td>\n          ')
                # <Static value=Dict(keys=[Constant(value='class', kind=None)], values=[Constant(value='zmi-object-id', kind=None)]) name=None at 26148858410> -> __attrs_2616851795472
                __attrs_2616851795472 = _static_2616851619216
                # <td ... (0:0)
                # --------------------------------------------------------
                __append('<td class="zmi-object-id">')
                # <Symbol value=<DEFAULT> at 261418bf450> -> __default_2616851792784
                __default_2616851792784 = _DEFAULT_MARKER
                # <Value 'interface/name' (40:27)> -> __cache_2616851794704
                __token = 1570
                try:
                    __zt_tmp = __attrs_2616851795472
                except NameError:
                    __zt_tmp = None
                __cache_2616851794704 = _static_2616828881808('path', 'interface/name', econtext=econtext)(_static_2616851358480(econtext, __zt_tmp))
                # <BinOp left=<Value 'interface/name' (40:27)> op=<class 'chameleon.nodes.Is'> right=<Symbol value=<DEFAULT> at 261418bf450> at 2614885be90> -> __condition
                __expression = __cache_2616851794704
                # <Symbol value=<DEFAULT> at 261418bf450> -> __value
                __value = _DEFAULT_MARKER
                __condition = __expression is __value
                if __condition:
                    __append('Interface Name')
                else:
                    __content = __cache_2616851794704
                    __content = __quote(__content, None, '\xad', None, None)
                    if __content is not None:
                        __append(__content)
                __append('</td>\n        </tr>')
                ____index_2616794264912 -= 1
                if ____index_2616794264912 > 0:
                    __append('\n        ')
            if __backup_interface_2616827153600 is __marker:
                del econtext['interface']
            else:
                econtext['interface'] = __backup_interface_2616827153600
            __append('\n\n        ')
            # <Static value=Dict(keys=[], values=[]) name=None at 2614191fed0> -> __attrs_2616787281296
            __attrs_2616787281296 = _static_2616821830800
            # <Value 'view/getDirectlyProvidedNames' (43:27)> -> __condition
            __token = 1648
            try:
                __zt_tmp = __attrs_2616787281296
            except NameError:
                __zt_tmp = None
            __condition = _static_2616819642704('path', 'view/getDirectlyProvidedNames', econtext=econtext)(_static_2616819640080(econtext, __zt_tmp))
            if __condition:
                # <tr ... (0:0)
                # --------------------------------------------------------
                __append('<tr>\n          ')
                # <Static value=Dict(keys=[Constant(value='class', kind=None)], values=[Constant(value='zmi-object-check text-right', kind=None)]) name=None at 26144ad3810> -> __attrs_2616787283152
                __attrs_2616787283152 = _static_2616819636560
                # <td ... (0:0)
                # --------------------------------------------------------
                __append('<td class="zmi-object-check text-right">&nbsp;</td>\n          ')
                # <Static value=Dict(keys=[Constant(value='class', kind=None)], values=[Constant(value='zmi-controls', kind=None)]) name=None at 26144ad1f90> -> __attrs_2616820997840
                __attrs_2616820997840 = _static_2616819630864
                # <td ... (0:0)
                # --------------------------------------------------------
                __append('<td class="zmi-controls">\n            ')
                # <Static value=Dict(keys=[Constant(value='class', kind=None), ..., Constant(value='value', kind=None)], values=[Constant(value='btn btn-primary', kind=None), ..., Constant(value='Remove', kind=None)]) name=None at 26147161290> -> __attrs_2616827716880
                __attrs_2616827716880 = _static_2616821271504
                # <input ... (0:0)
                # --------------------------------------------------------
                __append('<input class="btn btn-primary" type="submit" name="SAVE"')
                # <Symbol value=<DEFAULT> at 261418bf450> -> __default_2616827709776
                __default_2616827709776 = _DEFAULT_MARKER
                # <Translate msgid=None node=Constant(value='Remove', kind=None) at 26147161150> -> __attr_value
                __attr_value = 'Remove'
                __attr_value = translate(__attr_value, default=__attr_value, domain=__i18n_domain, context=__i18n_context, target_language=getname('target_language'))
                if __attr_value is not None:
                    __append(' value="%s"' % __attr_value)
                __append('/>\n          </td>\n        </tr>')
            __append('\n      </table>\n\n      ')
            # <Static value=Dict(keys=[], values=[]) name=None at 2614191fed0> -> __attrs_2616827722128
            __attrs_2616827722128 = _static_2616821834576
            # <h3 ... (0:0)
            # --------------------------------------------------------
            __append('<h3>')
            __stream_2616827721680 = []
            __append_2616827721680 = __stream_2616827721680.append
            __append_2616827721680('\n        Available Marker Interfaces\n      ')
            __msgid_2616827721680 = __re_whitespace(''.join(__stream_2616827721680)).strip()
            __append(translate('legend_available_marker', mapping=None, default=__msgid_2616827721680, domain=__i18n_domain, context=__i18n_context, target_language=target_language))
            __append('</h3>\n\n      ')
            # <Static value=Dict(keys=[Constant(value='class', kind=None)], values=[Constant(value='table table-striped table-hover table-sm', kind=None)]) name=None at 26147163ed0> -> __attrs_2616827723152
            __attrs_2616827723152 = _static_2616794434704
            # <table ... (0:0)
            # --------------------------------------------------------
            __append('<table class="table table-striped table-hover table-sm">\n        ')
            # <Static value=Dict(keys=[], values=[]) name=None at 2614191fed0> -> __attrs_2616822217296
            __attrs_2616822217296 = _static_2616852305872
            __backup_interface_2616822658816 = get('interface', __marker)
            # <Value 'view/getAvailableInterfaceNames' (57:34)> -> __iterator
            __token = 2151
            try:
                __zt_tmp = __attrs_2616822217296
            except NameError:
                __zt_tmp = None
            __iterator = _static_2616825604304('path', 'view/getAvailableInterfaceNames', econtext=econtext)(_static_2616825600976(econtext, __zt_tmp))
            __iterator, ____index_2616822212240 = getname('repeat')('interface', __iterator)
            econtext['interface'] = None
            for __item in __iterator:
                econtext['interface'] = __item
                # <tr ... (0:0)
                # --------------------------------------------------------
                __append('<tr>\n          ')
                # <Static value=Dict(keys=[Constant(value='class', kind=None)], values=[Constant(value='zmi-object-check text-right', kind=None)]) name=None at 26146c23890> -> __attrs_2616822209488
                __attrs_2616822209488 = _static_2616825604368
                # <td ... (0:0)
                # --------------------------------------------------------
                __append('<td class="zmi-object-check text-right">\n            ')
                # <Static value=Dict(keys=[Constant(value='type', kind=None), ..., Constant(value='value', kind=None)], values=[Constant(value='checkbox', kind=None), ..., Constant(value='interface/name', kind=None)]) name=None at 261487660d0> -> __attrs_2616782729936
                __attrs_2616782729936 = _static_2616788352400
                # <input ... (0:0)
                # --------------------------------------------------------
                __append('<input type="checkbox"')
                # <Symbol value=<DEFAULT> at 261418bf450> -> __default_2616782729872
                __default_2616782729872 = _DEFAULT_MARKER
                # <Substitution 'interface/name' (60:38)> -> __attr_id
                __token = 2340
                try:
                    __zt_tmp = __attrs_2616782729936
                except NameError:
                    __zt_tmp = None
                __attr_id = _static_2616786242832('path', 'interface/name', econtext=econtext)(_static_2616822345104(econtext, __zt_tmp))
                __attr_id = __quote(__attr_id, '"', '&quot;', 'INTERFACE', _DEFAULT_MARKER)
                if __attr_id is not None:
                    __append(' id="%s"' % __attr_id)
                __append(' name="add:list"')
                # <Symbol value=<DEFAULT> at 261418bf450> -> __default_2616782723472
                __default_2616782723472 = _DEFAULT_MARKER
                # <Substitution 'interface/name' (61:40)> -> __attr_value
                __token = 2396
                try:
                    __zt_tmp = __attrs_2616782729936
                except NameError:
                    __zt_tmp = None
                __attr_value = _static_2616827268304('path', 'interface/name', econtext=econtext)(_static_2616827274192(econtext, __zt_tmp))
                __attr_value = __quote(__attr_value, '"', '&quot;', None, _DEFAULT_MARKER)
                if __attr_value is not None:
                    __append(' value="%s"' % __attr_value)
                __append('/>\n          </td>\n          ')
                # <Static value=Dict(keys=[Constant(value='class', kind=None)], values=[Constant(value='zmi-object-id', kind=None)]) name=None at 26147163b50> -> __attrs_2616828504656
                __attrs_2616828504656 = _static_2616794436304
                # <td ... (0:0)
                # --------------------------------------------------------
                __append('<td class="zmi-object-id">')
                # <Symbol value=<DEFAULT> at 261418bf450> -> __default_2616788132944
                __default_2616788132944 = _DEFAULT_MARKER
                # <Value 'interface/name' (64:27)> -> __cache_2616794262864
                __token = 2494
                try:
                    __zt_tmp = __attrs_2616828504656
                except NameError:
                    __zt_tmp = None
                __cache_2616794262864 = _static_2616819637392('path', 'interface/name', econtext=econtext)(_static_2616826088720(econtext, __zt_tmp))
                # <BinOp left=<Value 'interface/name' (64:27)> op=<class 'chameleon.nodes.Is'> right=<Symbol value=<DEFAULT> at 261418bf450> at 26144ba1110> -> __condition
                __expression = __cache_2616794262864
                # <Symbol value=<DEFAULT> at 261418bf450> -> __value
                __value = _DEFAULT_MARKER
                __condition = __expression is __value
                if __condition:
                    __append('Interface Name')
                else:
                    __content = __cache_2616794262864
                    __content = __quote(__content, None, '\xad', None, None)
                    if __content is not None:
                        __append(__content)
                __append('</td>\n        </tr>')
                ____index_2616822212240 -= 1
                if ____index_2616822212240 > 0:
                    __append('\n        ')
            if __backup_interface_2616822658816 is __marker:
                del econtext['interface']
            else:
                econtext['interface'] = __backup_interface_2616822658816
            __append('\n      </table>\n      ')
            # <Static value=Dict(keys=[Constant(value='class', kind=None)], values=[Constant(value='zmi-controls form-group form-inline', kind=None)]) name=None at 26147169410> -> __attrs_2616788137040
            __attrs_2616788137040 = _static_2616828651344
            # <Value 'view/getAvailableInterfaceNames' (67:70)> -> __condition
            __token = 2629
            try:
                __zt_tmp = __attrs_2616788137040
            except NameError:
                __zt_tmp = None
            __condition = _static_2616793626832('path', 'view/getAvailableInterfaceNames', econtext=econtext)(_static_2616793625872(econtext, __zt_tmp))
            if __condition:
                # <div ... (0:0)
                # --------------------------------------------------------
                __append('<div class="zmi-controls form-group form-inline">\n            ')
                # <Static value=Dict(keys=[Constant(value='class', kind=None), ..., Constant(value='value', kind=None)], values=[Constant(value='btn btn-primary', kind=None), ..., Constant(value='Add', kind=None)]) name=None at 26144ba18d0> -> __attrs_2616788135824
                __attrs_2616788135824 = _static_2616793619728
                # <input ... (0:0)
                # --------------------------------------------------------
                __append('<input class="btn btn-primary" type="submit" name="SAVE"')
                # <Symbol value=<DEFAULT> at 261418bf450> -> __default_2616788127952
                __default_2616788127952 = _DEFAULT_MARKER
                # <Translate msgid=None node=Constant(value='Add', kind=None) at 26144ba2650> -> __attr_value
                __attr_value = 'Add'
                __attr_value = translate(__attr_value, default=__attr_value, domain=__i18n_domain, context=__i18n_context, target_language=getname('target_language'))
                if __attr_value is not None:
                    __append(' value="%s"' % __attr_value)
                __append('/>\n      </div>')
            __append('\n    </form>\n  ')
        except:
            if __token is not None:
                rcontext.setdefault('__error__', []).append(__tokens[__token] + (__filename, _exc_info()[1]))
            raise

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
            # <Static value=Dict(keys=[], values=[]) name=None at 2614191fed0> -> __attrs_2616827417104
            __attrs_2616827417104 = _static_2616826927120
            __backup_macroname_2616827426304 = get('macroname', __marker)
            # <Static value=Constant(value='page', kind=None) name=None at 261471190d0> -> __value
            __value = _static_2616826933392
            econtext['macroname'] = __value

            def __fill_body(__stream, econtext, rcontext, __i18n_domain=__i18n_domain, __i18n_context=__i18n_context, target_language=target_language):
                getname = econtext.get_name
                get = econtext.get
                # <Static value=Dict(keys=[], values=[]) name=None at 2614191fed0> -> __attrs_2616787542928
                __attrs_2616787542928 = _static_2616786168848
                __append('\n\n  ')
                __token = None
                render_heading(__stream, econtext.copy(), rcontext, __i18n_domain, __i18n_context, target_language)
                econtext.update(rcontext)
                __append('\n  \n  ')
                __token = None
                render_main(__stream, econtext.copy(), rcontext, __i18n_domain, __i18n_context, target_language)
                econtext.update(rcontext)
                __append('\n')
            _slots = econtext['__slot_body'] = _deque((__fill_body,))
            # <Value 'context/@@standard_macros/page' (1:23)> -> __macro
            __token = 23
            try:
                __zt_tmp = __attrs_2616827417104
            except NameError:
                __zt_tmp = None
            __macro = _static_2616851807120('path', 'context/@@standard_macros/page', econtext=econtext)(_static_2616826937296(econtext, __zt_tmp))
            __token = 23
            __m = __macro.include
            __m(__stream, econtext.copy(), rcontext, __i18n_domain, __i18n_context, target_language)
            econtext.update(rcontext)
            if __backup_macroname_2616827426304 is __marker:
                del econtext['macroname']
            else:
                econtext['macroname'] = __backup_macroname_2616827426304
            __append('\n')
        except:
            if __token is not None:
                rcontext.setdefault('__error__', []).append(__tokens[__token] + (__filename, _exc_info()[1]))
            raise
    return {'render_heading': render_heading, 'render_main': render_main, 'render': render}
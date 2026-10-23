# -*- coding: utf-8 -*-
__filename = 'manage_main'

__tokens = {27: ('context/manage_page_header', 1, 27), 94: ('context/manage_tabs', 2, 27), 465: ('container/getProperties', 13, 20), 792: ('props/keep_entries', 23, 27), 1152: ('props/copy_to_zlog', 35, 29), 1185: (' not:container/checkEventLogPermission|nothin', 36, 13), 1566: ("python: '\\n'.join(props['ignored_exceptions'])", 48, 18), 1858: ('container/getLogEntries', 62, 26), 1933: ('not:entries', 64, 47), 2071: ('entries', 66, 94), 2337: ('entries', 76, 26), 2426: ("python: modules['DateTime'].DateTime(entry['time']).ISO()", 78, 25), 2579: ('string: ${entry/username} (${entry/userid})', 81, 25), 2731: ('string:showEntry?id=${entry/id}', 84, 47), 2791: ('entry/type', 85, 26), 2857: ('entry/value', 86, 31), 2891: ("python: len(value) &lt; 70 and value or value[:70] + '.", 87, 21), 3075: ('string:${context/absolute_url}/forgetEntry?id=${entry/id}', 91, 42), 3408: ('context/manage_page_footer', 104, 27)}
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
_static_2616819841680 = {}
_static_2616826152912 = __compile_zt_expr
_static_2616826151696 = __C2ZContextWrapper
_static_2616850863376 = {}
_static_2616819709648 = __compile_zt_expr
_static_2616819699216 = __C2ZContextWrapper
_static_2616794442064 = {'class': 'container-fluid'}
_static_2616794441232 = {'class': 'form-help mb-4'}
_static_2616828074384 = {'action': 'setProperties', 'method': 'post'}
_static_2616825968720 = __compile_zt_expr
_static_2616825965840 = __C2ZContextWrapper
_static_2616828648336 = {'class': 'form-group row'}
_static_2616828651472 = {'for': 'keep_entries', 'class': 'form-label col-sm-5 col-md-4'}
_static_2616794447760 = {'class': ' col-sm-7 col-md-8'}
_static_2616828653456 = {'type': 'text', 'id': 'keep_entries', 'class': 'form-control', 'name': 'keep_entries', 'value': 'props/keep_entries'}
_static_2616827932432 = __compile_zt_expr
_static_2616783031760 = __C2ZContextWrapper
_static_2616794375504 = {'class': 'form-group row'}
_static_2616783031120 = {'for': 'copy_to_zlog', 'class': 'form-label col-sm-5 col-md-4'}
_static_2616793615632 = {'class': ' col-sm-7 col-md-8'}
_static_2616793620560 = {'type': 'checkbox', 'id': 'copy_to_zlog', 'class': 'checkbox-list-item', 'name': 'copy_to_zlog', 'checked': 'props/copy_to_zlog', 'disabled': 'not:container/checkEventLogPermission|nothing'}
_static_2616824958352 = __compile_zt_expr
_static_2616758517584 = __C2ZContextWrapper
_static_2616821070736 = __compile_zt_expr
_static_2616821068496 = __C2ZContextWrapper
_static_2616793614928 = {'class': 'form-group row'}
_static_2616758312016 = {'for': 'ignored_exceptions', 'class': 'form-label col-sm-5 col-md-4'}
_static_2616823351888 = {'class': ' col-sm-7 col-md-8'}
_static_2616786270416 = {'id': 'ignored_exceptions', 'class': 'form-control', 'name': 'ignored_exceptions:ulines', 'rows': '3'}
_static_2616782807696 = __compile_zt_expr
_static_2616826096464 = __C2ZContextWrapper
_static_2616758310224 = {'class': 'zmi-controls'}
_static_2616826099088 = {'class': 'btn btn-primary', 'type': 'submit', 'name': 'submit', 'value': 'Save Changes'}
_static_2616824969936 = {}
_static_2616788349584 = {}
_static_2616788759184 = __compile_zt_expr
_static_2616820040016 = __C2ZContextWrapper
_static_2616851615888 = {'class': 'alert alert-info'}
_static_2616782981584 = __compile_zt_expr
_static_2616782995088 = __C2ZContextWrapper
_static_2616786261200 = {'class': 'table table-sm zmi-errorlog-entries', 'style': 'font-size:smaller'}
_static_2616826821520 = __compile_zt_expr
_static_2616786717776 = __C2ZContextWrapper
_static_2616793623312 = {}
_static_2616827924944 = {}
_static_2616794438608 = {'class': 'zmi-time'}
_static_2616786173520 = {'class': 'zmi-username', 'title': 'User Id'}
_static_2616786168976 = {'class': 'zmi-exception'}
_static_2616828996176 = {'class': 'blank'}
_static_2616794369616 = {}
_static_2616849854160 = {}
_static_2616820552656 = __compile_zt_expr
_static_2616820563728 = __C2ZContextWrapper
_static_2616820795920 = {'class': 'zmi-time', 'style': 'white-space:nowrap'}
_static_2616821005200 = {}
_static_2616757874192 = __compile_zt_expr
_static_2616786605840 = __C2ZContextWrapper
_static_2616822082896 = {'class': 'zmi-username'}
_static_2616822082768 = {}
_static_2616827723216 = __compile_zt_expr
_static_2616827707664 = __C2ZContextWrapper
_static_2616782730768 = {'class': 'zmi-exception'}
_static_2616758639248 = {'href': 'showEntry'}
_static_2616820659856 = __compile_zt_expr
_static_2616820653008 = __C2ZContextWrapper
_static_2616682047632 = {}
_static_2616825778320 = __compile_zt_expr
_static_2616826159888 = __C2ZContextWrapper
_static_2616851613904 = {}
_static_2616788032784 = __compile_zt_expr
_static_2616788033488 = __C2ZContextWrapper
_static_2616787309776 = __compile_zt_expr
_static_2616794526480 = __C2ZContextWrapper
_static_2616682044560 = {}
_static_2616758802896 = {'href': '#'}
_static_2616787286160 = __compile_zt_expr
_static_2616787281680 = __C2ZContextWrapper
_static_2616792187024 = {'action': 'manage_main', 'method': 'GET'}
_static_2616792189968 = {'class': 'zmi-controls'}
_static_2616792196304 = {'class': 'btn btn-primary', 'type': 'submit', 'name': 'submit', 'value': 'Refresh'}
_static_2616792192848 = {}
_static_2616849991184 = __compile_zt_expr
_static_2616849992016 = __C2ZContextWrapper
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
            # <Static value=Dict(keys=[], values=[]) name=None at 2614191fed0> -> __attrs_2616851804560
            __attrs_2616851804560 = _static_2616819841680
            # <Symbol value=<DEFAULT> at 261418bf450> -> __default_2616851807824
            __default_2616851807824 = _DEFAULT_MARKER
            # <Value 'context/manage_page_header' (1:27)> -> __cache_2616851806224
            __token = 27
            try:
                __zt_tmp = __attrs_2616851804560
            except NameError:
                __zt_tmp = None
            __cache_2616851806224 = _static_2616826152912('path', 'context/manage_page_header', econtext=econtext)(_static_2616826151696(econtext, __zt_tmp))
            # <BinOp left=<Value 'context/manage_page_header' (1:27)> op=<class 'chameleon.nodes.Is'> right=<Symbol value=<DEFAULT> at 261418bf450> at 26148858c50> -> __condition
            __expression = __cache_2616851806224
            # <Symbol value=<DEFAULT> at 261418bf450> -> __value
            __value = _DEFAULT_MARKER
            __condition = __expression is __value
            if __condition:
                # <h1 ... (0:0)
                # --------------------------------------------------------
                __append('<h1>Header</h1>')
            else:
                __content = __cache_2616851806224
                __content = __convert(__content)
                if __content is not None:
                    __append(__content)
            __append('\n')
            # <Static value=Dict(keys=[], values=[]) name=None at 2614191fed0> -> __attrs_2616827273808
            __attrs_2616827273808 = _static_2616850863376
            # <Symbol value=<DEFAULT> at 261418bf450> -> __default_2616792134544
            __default_2616792134544 = _DEFAULT_MARKER
            # <Value 'context/manage_tabs' (2:27)> -> __cache_2616792130000
            __token = 94
            try:
                __zt_tmp = __attrs_2616827273808
            except NameError:
                __zt_tmp = None
            __cache_2616792130000 = _static_2616819709648('path', 'context/manage_tabs', econtext=econtext)(_static_2616819699216(econtext, __zt_tmp))
            # <BinOp left=<Value 'context/manage_tabs' (2:27)> op=<class 'chameleon.nodes.Is'> right=<Symbol value=<DEFAULT> at 261418bf450> at 26144f71b90> -> __condition
            __expression = __cache_2616792130000
            # <Symbol value=<DEFAULT> at 261418bf450> -> __value
            __value = _DEFAULT_MARKER
            __condition = __expression is __value
            if __condition:
                # <h1 ... (0:0)
                # --------------------------------------------------------
                __append('<h1>Tabs</h1>')
            else:
                __content = __cache_2616792130000
                __content = __convert(__content)
                if __content is not None:
                    __append(__content)
            __append('\n\n')
            # <Static value=Dict(keys=[Constant(value='class', kind=None)], values=[Constant(value='container-fluid', kind=None)]) name=None at 26144b38150> -> __attrs_2616819640912
            __attrs_2616819640912 = _static_2616794442064
            # <main ... (0:0)
            # --------------------------------------------------------
            __append('<main class="container-fluid">\n\t')
            # <Static value=Dict(keys=[Constant(value='class', kind=None)], values=[Constant(value='form-help mb-4', kind=None)]) name=None at 261469acdd0> -> __attrs_2616819630864
            __attrs_2616819630864 = _static_2616794441232
            # <p ... (0:0)
            # --------------------------------------------------------
            __append('<p class="form-help mb-4">\n\t\tThis page lists the exceptions that have occurred in this site\n\t\trecently.  You can configure how many exceptions should be kept\n\t\tand whether the exceptions should be copied to Zope\'s event log\n\t\tfile(s).\n\t</p>\n\n\t')
            # <Static value=Dict(keys=[Constant(value='action', kind=None), Constant(value='method', kind=None)], values=[Constant(value='setProperties', kind=None), Constant(value='post', kind=None)]) name=None at 261469ad190> -> __attrs_2616819633424
            __attrs_2616819633424 = _static_2616828074384
            __backup_props_2616825682560 = get('props', __marker)
            # <Value 'container/getProperties' (13:20)> -> __value
            __token = 465
            try:
                __zt_tmp = __attrs_2616819633424
            except NameError:
                __zt_tmp = None
            __value = _static_2616825968720('path', 'container/getProperties', econtext=econtext)(_static_2616825965840(econtext, __zt_tmp))
            econtext['props'] = __value
            # <form ... (0:0)
            # --------------------------------------------------------
            __append('<form action="setProperties" method="post">\n\n\t\t')
            # <Static value=Dict(keys=[Constant(value='class', kind=None)], values=[Constant(value='form-group row', kind=None)]) name=None at 261469ad350> -> __attrs_2616819642448
            __attrs_2616819642448 = _static_2616828648336
            # <div ... (0:0)
            # --------------------------------------------------------
            __append('<div class="form-group row">\n\t\t\t')
            # <Static value=Dict(keys=[Constant(value='for', kind=None), Constant(value='class', kind=None)], values=[Constant(value='keep_entries', kind=None), Constant(value='form-label col-sm-5 col-md-4', kind=None)]) name=None at 261469af250> -> __attrs_2616883473616
            __attrs_2616883473616 = _static_2616828651472
            # <label ... (0:0)
            # --------------------------------------------------------
            __append('<label for="keep_entries" class="form-label col-sm-5 col-md-4">Number of exceptions to keep</label>\n\t\t\t')
            # <Static value=Dict(keys=[Constant(value='class', kind=None)], values=[Constant(value=' col-sm-7 col-md-8', kind=None)]) name=None at 2614886d0d0> -> __attrs_2616851876048
            __attrs_2616851876048 = _static_2616794447760
            # <div ... (0:0)
            # --------------------------------------------------------
            __append('<div class=" col-sm-7 col-md-8">\n\t\t\t\t')
            # <Static value=Dict(keys=[Constant(value='type', kind=None), ..., Constant(value='value', kind=None)], values=[Constant(value='text', kind=None), ..., Constant(value='props/keep_entries', kind=None)]) name=None at 2614886d210> -> __attrs_2616850798544
            __attrs_2616850798544 = _static_2616828653456
            # <input ... (0:0)
            # --------------------------------------------------------
            __append('<input type="text" id="keep_entries" class="form-control" name="keep_entries"')
            # <Symbol value=<DEFAULT> at 261418bf450> -> __default_2616850800784
            __default_2616850800784 = _DEFAULT_MARKER
            # <Substitution 'props/keep_entries' (23:27)> -> __attr_value
            __token = 792
            try:
                __zt_tmp = __attrs_2616850798544
            except NameError:
                __zt_tmp = None
            __attr_value = _static_2616827932432('path', 'props/keep_entries', econtext=econtext)(_static_2616783031760(econtext, __zt_tmp))
            __attr_value = __quote(__attr_value, '"', '&quot;', None, _DEFAULT_MARKER)
            if __attr_value is not None:
                __append(' value="%s"' % __attr_value)
            __append(' />\n\t\t\t</div>\n\t\t</div>\n\n\t\t')
            # <Static value=Dict(keys=[Constant(value='class', kind=None)], values=[Constant(value='form-group row', kind=None)]) name=None at 26148767ed0> -> __attrs_2616850797776
            __attrs_2616850797776 = _static_2616794375504
            # <div ... (0:0)
            # --------------------------------------------------------
            __append('<div class="form-group row">\n\t\t\t')
            # <Static value=Dict(keys=[Constant(value='for', kind=None), Constant(value='class', kind=None)], values=[Constant(value='copy_to_zlog', kind=None), Constant(value='form-label col-sm-5 col-md-4', kind=None)]) name=None at 261487ee850> -> __attrs_2616851362448
            __attrs_2616851362448 = _static_2616783031120
            # <label ... (0:0)
            # --------------------------------------------------------
            __append('<label for="copy_to_zlog" class="form-label col-sm-5 col-md-4">Copy exceptions to the event log</label>\n\t\t\t')
            # <Static value=Dict(keys=[Constant(value='class', kind=None)], values=[Constant(value=' col-sm-7 col-md-8', kind=None)]) name=None at 261487ef610> -> __attrs_2616794493456
            __attrs_2616794493456 = _static_2616793615632
            # <div ... (0:0)
            # --------------------------------------------------------
            __append('<div class=" col-sm-7 col-md-8">\n\t\t\t\t')
            # <Static value=Dict(keys=[Constant(value='type', kind=None), ..., Constant(value='disabled', kind=None)], values=[Constant(value='checkbox', kind=None), ..., Constant(value='not:container/checkEventLogPermission|nothing', kind=None)]) name=None at 261451b2090> -> __attrs_2616825852560
            __attrs_2616825852560 = _static_2616793620560
            # <input ... (0:0)
            # --------------------------------------------------------
            __append('<input \t\t\t\t\ttype="checkbox" id="copy_to_zlog" class="checkbox-list-item" \t\t\t\t\tname="copy_to_zlog"')
            # <Symbol value=<DEFAULT> at 261418bf450> -> __default_2616819840400
            __default_2616819840400 = _DEFAULT_MARKER
            # <Boolean 'props/copy_to_zlog' (35:29)> -> __attr_checked
            __token = 1152
            try:
                __zt_tmp = __attrs_2616825852560
            except NameError:
                __zt_tmp = None
            __attr_checked = _static_2616824958352('path', 'props/copy_to_zlog', econtext=econtext)(_static_2616758517584(econtext, __zt_tmp))
            if __attr_checked is _DEFAULT_MARKER:
                __attr_checked = None
            elif __attr_checked:
                __attr_checked = 'checked'
            else:
                __attr_checked = None
            if __attr_checked is not None:
                __append(' checked="%s"' % __attr_checked)
            # <Symbol value=<DEFAULT> at 261418bf450> -> __default_2616825853392
            __default_2616825853392 = _DEFAULT_MARKER
            # <Boolean 'not:container/checkEventLogPermission|nothing' (36:13)> -> __attr_disabled
            __token = 1185
            try:
                __zt_tmp = __attrs_2616825852560
            except NameError:
                __zt_tmp = None
            __attr_disabled = _static_2616821070736('not', 'container/checkEventLogPermission|nothing', econtext=econtext)(_static_2616821068496(econtext, __zt_tmp))
            if __attr_disabled is _DEFAULT_MARKER:
                __attr_disabled = None
            elif __attr_disabled:
                __attr_disabled = 'disabled'
            else:
                __attr_disabled = None
            if __attr_disabled is not None:
                __append(' disabled="%s"' % __attr_disabled)
            __append(' />\n\t\t\t</div>\n\t\t</div>\n\n\t\t')
            # <Static value=Dict(keys=[Constant(value='class', kind=None)], values=[Constant(value='form-group row', kind=None)]) name=None at 26146f9a450> -> __attrs_2616825843472
            __attrs_2616825843472 = _static_2616793614928
            # <div ... (0:0)
            # --------------------------------------------------------
            __append('<div class="form-group row">\n\t\t\t')
            # <Static value=Dict(keys=[Constant(value='for', kind=None), Constant(value='class', kind=None)], values=[Constant(value='ignored_exceptions', kind=None), Constant(value='form-label col-sm-5 col-md-4', kind=None)]) name=None at 26146f9bdd0> -> __attrs_2616825844560
            __attrs_2616825844560 = _static_2616758312016
            # <label ... (0:0)
            # --------------------------------------------------------
            __append('<label for="ignored_exceptions" class="form-label col-sm-5 col-md-4">Ignored exception types</label>\n\t\t\t')
            # <Static value=Dict(keys=[Constant(value='class', kind=None)], values=[Constant(value=' col-sm-7 col-md-8', kind=None)]) name=None at 26146f997d0> -> __attrs_2616757992272
            __attrs_2616757992272 = _static_2616823351888
            # <div ... (0:0)
            # --------------------------------------------------------
            __append('<div class=" col-sm-7 col-md-8">\n\t\t\t\t')
            # <Static value=Dict(keys=[Constant(value='id', kind=None), ..., Constant(value='rows', kind=None)], values=[Constant(value='ignored_exceptions', kind=None), ..., Constant(value='3', kind=None)]) name=None at 26142ee1b10> -> __attrs_2616757985744
            __attrs_2616757985744 = _static_2616786270416
            # <textarea ... (0:0)
            # --------------------------------------------------------
            __append('<textarea id="ignored_exceptions" class="form-control" name="ignored_exceptions:ulines" rows="3" >')
            # <Symbol value=<DEFAULT> at 261418bf450> -> __default_2616757982032
            __default_2616757982032 = _DEFAULT_MARKER
            # <Value "python: '\\n'.join(props['ignored_exceptions'])" (48:18)> -> __cache_2616757990800
            __token = 1566
            try:
                __zt_tmp = __attrs_2616757985744
            except NameError:
                __zt_tmp = None
            __cache_2616757990800 = _static_2616782807696('python', " '\\n'.join(props['ignored_exceptions'])", econtext=econtext)(_static_2616826096464(econtext, __zt_tmp))
            # <BinOp left=<Value "python: '\\n'.join(props['ignored_exceptions'])" (48:18)> op=<class 'chameleon.nodes.Is'> right=<Symbol value=<DEFAULT> at 261418bf450> at 26142ee2c90> -> __condition
            __expression = __cache_2616757990800
            # <Symbol value=<DEFAULT> at 261418bf450> -> __value
            __value = _DEFAULT_MARKER
            __condition = __expression is __value
            if __condition:
                pass
            else:
                __content = __cache_2616757990800
                __content = __quote(__content, None, '\xad', None, None)
                if __content is not None:
                    __append(__content)
            __append('</textarea>\n\t\t\t</div>\n\t\t</div>\n\n\n\t\t')
            # <Static value=Dict(keys=[Constant(value='class', kind=None)], values=[Constant(value='zmi-controls', kind=None)]) name=None at 26142ee2490> -> __attrs_2616821654928
            __attrs_2616821654928 = _static_2616758310224
            # <div ... (0:0)
            # --------------------------------------------------------
            __append('<div class="zmi-controls">\n\t\t\t')
            # <Static value=Dict(keys=[Constant(value='class', kind=None), ..., Constant(value='value', kind=None)], values=[Constant(value='btn btn-primary', kind=None), ..., Constant(value='Save Changes', kind=None)]) name=None at 26146b9a950> -> __attrs_2616797518736
            __attrs_2616797518736 = _static_2616826099088
            # <input ... (0:0)
            # --------------------------------------------------------
            __append('<input class="btn btn-primary" type="submit" name="submit" value="Save Changes" />\n\t\t</div>\n\n\t</form>')
            if __backup_props_2616825682560 is __marker:
                del econtext['props']
            else:
                econtext['props'] = __backup_props_2616825682560
            __append('\n\n\n\t')
            # <Static value=Dict(keys=[], values=[]) name=None at 2614191fed0> -> __attrs_2616797514896
            __attrs_2616797514896 = _static_2616824969936
            # <h3 ... (0:0)
            # --------------------------------------------------------
            __append('<h3>Exception Log (most recent first)</h3>\n\t')
            # <Static value=Dict(keys=[], values=[]) name=None at 2614191fed0> -> __attrs_2616786253904
            __attrs_2616786253904 = _static_2616788349584
            __backup_entries_2616788226432 = get('entries', __marker)
            # <Value 'container/getLogEntries' (62:26)> -> __value
            __token = 1858
            try:
                __zt_tmp = __attrs_2616786253904
            except NameError:
                __zt_tmp = None
            __value = _static_2616788759184('path', 'container/getLogEntries', econtext=econtext)(_static_2616820040016(econtext, __zt_tmp))
            econtext['entries'] = __value
            # <div ... (0:0)
            # --------------------------------------------------------
            __append('<div>\n\t\n\t\t')
            # <Static value=Dict(keys=[Constant(value='class', kind=None)], values=[Constant(value='alert alert-info', kind=None)]) name=None at 261449d6950> -> __attrs_2616786242640
            __attrs_2616786242640 = _static_2616851615888
            # <Value 'not:entries' (64:47)> -> __condition
            __token = 1933
            try:
                __zt_tmp = __attrs_2616786242640
            except NameError:
                __zt_tmp = None
            __condition = _static_2616782981584('not', 'entries', econtext=econtext)(_static_2616782995088(econtext, __zt_tmp))
            if __condition:
                # <div ... (0:0)
                # --------------------------------------------------------
                __append('<div class="alert alert-info">No exceptions logged.</div>')
            __append('\n\t\t\n\t\t')
            # <Static value=Dict(keys=[Constant(value='class', kind=None), Constant(value='style', kind=None)], values=[Constant(value='table table-sm zmi-errorlog-entries', kind=None), Constant(value='font-size:smaller', kind=None)]) name=None at 2614727f8d0> -> __attrs_2616828880528
            __attrs_2616828880528 = _static_2616786261200
            # <Value 'entries' (66:94)> -> __condition
            __token = 2071
            try:
                __zt_tmp = __attrs_2616828880528
            except NameError:
                __zt_tmp = None
            __condition = _static_2616826821520('path', 'entries', econtext=econtext)(_static_2616786717776(econtext, __zt_tmp))
            if __condition:
                # <table ... (0:0)
                # --------------------------------------------------------
                __append('<table class="table table-sm zmi-errorlog-entries" style="font-size:smaller">\n\t\t\t')
                # <Static value=Dict(keys=[], values=[]) name=None at 2614191fed0> -> __attrs_2616822344656
                __attrs_2616822344656 = _static_2616793623312
                # <thead ... (0:0)
                # --------------------------------------------------------
                __append('<thead>\n\t\t\t\t')
                # <Static value=Dict(keys=[], values=[]) name=None at 2614191fed0> -> __attrs_2616822340048
                __attrs_2616822340048 = _static_2616827924944
                # <tr ... (0:0)
                # --------------------------------------------------------
                __append('<tr>\n\t\t\t\t\t')
                # <Static value=Dict(keys=[Constant(value='class', kind=None)], values=[Constant(value='zmi-time', kind=None)]) name=None at 26146a10710> -> __attrs_2616820041424
                __attrs_2616820041424 = _static_2616794438608
                # <th ... (0:0)
                # --------------------------------------------------------
                __append('<th class="zmi-time">Time</th>\n\t\t\t\t\t')
                # <Static value=Dict(keys=[Constant(value='class', kind=None), Constant(value='title', kind=None)], values=[Constant(value='zmi-username', kind=None), Constant(value='User Id', kind=None)]) name=None at 26146a12750> -> __attrs_2616820051152
                __attrs_2616820051152 = _static_2616786173520
                # <th ... (0:0)
                # --------------------------------------------------------
                __append('<th class="zmi-username" title="User Id">Username</th>\n\t\t\t\t\t')
                # <Static value=Dict(keys=[Constant(value='class', kind=None)], values=[Constant(value='zmi-exception', kind=None)]) name=None at 26146a12990> -> __attrs_2616793547856
                __attrs_2616793547856 = _static_2616786168976
                # <th ... (0:0)
                # --------------------------------------------------------
                __append('<th class="zmi-exception">Exception</th>\n\t\t\t\t\t')
                # <Static value=Dict(keys=[Constant(value='class', kind=None)], values=[Constant(value='blank', kind=None)]) name=None at 261450cd8d0> -> __attrs_2616793561936
                __attrs_2616793561936 = _static_2616828996176
                # <th ... (0:0)
                # --------------------------------------------------------
                __append('<th class="blank">&nbsp;</th>\n\t\t\t\t</tr>\n\t\t\t</thead>\n\t\t\t')
                # <Static value=Dict(keys=[], values=[]) name=None at 2614191fed0> -> __attrs_2616793561168
                __attrs_2616793561168 = _static_2616794369616
                # <tbody ... (0:0)
                # --------------------------------------------------------
                __append('<tbody>\n\t\t\t\t')
                # <Static value=Dict(keys=[], values=[]) name=None at 2614191fed0> -> __attrs_2616793552912
                __attrs_2616793552912 = _static_2616849854160
                __backup_entry_2616827712320 = get('entry', __marker)
                # <Value 'entries' (76:26)> -> __iterator
                __token = 2337
                try:
                    __zt_tmp = __attrs_2616793552912
                except NameError:
                    __zt_tmp = None
                __iterator = _static_2616820552656('path', 'entries', econtext=econtext)(_static_2616820563728(econtext, __zt_tmp))
                __iterator, ____index_2616793549840 = getname('repeat')('entry', __iterator)
                econtext['entry'] = None
                for __item in __iterator:
                    econtext['entry'] = __item
                    # <tr ... (0:0)
                    # --------------------------------------------------------
                    __append('<tr>\n\t\t\t\t\t')
                    # <Static value=Dict(keys=[Constant(value='class', kind=None), Constant(value='style', kind=None)], values=[Constant(value='zmi-time', kind=None), Constant(value='white-space:nowrap', kind=None)]) name=None at 261450cfd50> -> __attrs_2616793553232
                    __attrs_2616793553232 = _static_2616820795920
                    # <td ... (0:0)
                    # --------------------------------------------------------
                    __append('<td class="zmi-time" style="white-space:nowrap">\n\t\t\t\t\t\t')
                    # <Static value=Dict(keys=[], values=[]) name=None at 2614191fed0> -> __attrs_2616819583568
                    __attrs_2616819583568 = _static_2616821005200
                    # <Symbol value=<DEFAULT> at 261418bf450> -> __default_2616819594448
                    __default_2616819594448 = _DEFAULT_MARKER
                    # <Value "python: modules['DateTime'].DateTime(entry['time']).ISO()" (78:25)> -> __cache_2616793554064
                    __token = 2426
                    try:
                        __zt_tmp = __attrs_2616819583568
                    except NameError:
                        __zt_tmp = None
                    __cache_2616793554064 = _static_2616757874192('python', " modules['DateTime'].DateTime(entry['time']).ISO()", econtext=econtext)(_static_2616786605840(econtext, __zt_tmp))
                    # <BinOp left=<Value "python: modules['DateTime'].DateTime(entry['time']).ISO()" (78:25)> op=<class 'chameleon.nodes.Is'> right=<Symbol value=<DEFAULT> at 261418bf450> at 261450ce7d0> -> __condition
                    __expression = __cache_2616793554064
                    # <Symbol value=<DEFAULT> at 261418bf450> -> __value
                    __value = _DEFAULT_MARKER
                    __condition = __expression is __value
                    if __condition:
                        # <span ... (0:0)
                        # --------------------------------------------------------
                        __append('<span>2022-07-01 11:59:15</span>')
                    else:
                        __content = __cache_2616793554064
                        __content = __quote(__content, None, '\xad', None, None)
                        if __content is not None:
                            __append(__content)
                    __append('\n\t\t\t\t\t</td>\n\t\t\t\t\t')
                    # <Static value=Dict(keys=[Constant(value='class', kind=None)], values=[Constant(value='zmi-username', kind=None)]) name=None at 261469a3ed0> -> __attrs_2616819594640
                    __attrs_2616819594640 = _static_2616822082896
                    # <td ... (0:0)
                    # --------------------------------------------------------
                    __append('<td class="zmi-username">\n\t\t\t\t\t\t')
                    # <Static value=Dict(keys=[], values=[]) name=None at 2614191fed0> -> __attrs_2616819593936
                    __attrs_2616819593936 = _static_2616822082768
                    # <Symbol value=<DEFAULT> at 261418bf450> -> __default_2616819596112
                    __default_2616819596112 = _DEFAULT_MARKER
                    # <Value 'string: ${entry/username} (${entry/userid})' (81:25)> -> __cache_2616819582992
                    __token = 2579
                    try:
                        __zt_tmp = __attrs_2616819593936
                    except NameError:
                        __zt_tmp = None
                    __cache_2616819582992 = _static_2616827723216('string', ' ${entry/username} (${entry/userid})', econtext=econtext)(_static_2616827707664(econtext, __zt_tmp))
                    # <BinOp left=<Value 'string: ${entry/username} (${entry/userid})' (81:25)> op=<class 'chameleon.nodes.Is'> right=<Symbol value=<DEFAULT> at 261418bf450> at 261469a3510> -> __condition
                    __expression = __cache_2616819582992
                    # <Symbol value=<DEFAULT> at 261418bf450> -> __value
                    __value = _DEFAULT_MARKER
                    __condition = __expression is __value
                    if __condition:
                        # <span ... (0:0)
                        # --------------------------------------------------------
                        __append('<span>joe (joe)</span>')
                    else:
                        __content = __cache_2616819582992
                        __content = __quote(__content, None, '\xad', None, None)
                        if __content is not None:
                            __append(__content)
                    __append('\n\t\t\t\t\t</td>\n\t\t\t\t\t')
                    # <Static value=Dict(keys=[Constant(value='class', kind=None)], values=[Constant(value='zmi-exception', kind=None)]) name=None at 26146bc6fd0> -> __attrs_2616821832144
                    __attrs_2616821832144 = _static_2616782730768
                    # <td ... (0:0)
                    # --------------------------------------------------------
                    __append('<td class="zmi-exception">\n\t\t\t\t\t\t')
                    # <Static value=Dict(keys=[Constant(value='href', kind=None)], values=[Constant(value='showEntry', kind=None)]) name=None at 26146bc4e10> -> __attrs_2616821833680
                    __attrs_2616821833680 = _static_2616758639248
                    # <a ... (0:0)
                    # --------------------------------------------------------
                    __append('<a')
                    # <Symbol value=<DEFAULT> at 261418bf450> -> __default_2616821831632
                    __default_2616821831632 = _DEFAULT_MARKER
                    # <Substitution 'string:showEntry?id=${entry/id}' (84:47)> -> __attr_href
                    __token = 2731
                    try:
                        __zt_tmp = __attrs_2616821833680
                    except NameError:
                        __zt_tmp = None
                    __attr_href = _static_2616820659856('string', 'showEntry?id=${entry/id}', econtext=econtext)(_static_2616820653008(econtext, __zt_tmp))
                    __attr_href = __quote(__attr_href, '"', '&quot;', 'showEntry', _DEFAULT_MARKER)
                    if __attr_href is not None:
                        __append(' href="%s"' % __attr_href)
                    __append('>\n\t\t\t\t\t\t\t')
                    # <Static value=Dict(keys=[], values=[]) name=None at 2614191fed0> -> __attrs_2616821841808
                    __attrs_2616821841808 = _static_2616682047632
                    # <Symbol value=<DEFAULT> at 261418bf450> -> __default_2616821836240
                    __default_2616821836240 = _DEFAULT_MARKER
                    # <Value 'entry/type' (85:26)> -> __cache_2616821838032
                    __token = 2791
                    try:
                        __zt_tmp = __attrs_2616821841808
                    except NameError:
                        __zt_tmp = None
                    __cache_2616821838032 = _static_2616825778320('path', 'entry/type', econtext=econtext)(_static_2616826159888(econtext, __zt_tmp))
                    # <BinOp left=<Value 'entry/type' (85:26)> op=<class 'chameleon.nodes.Is'> right=<Symbol value=<DEFAULT> at 261418bf450> at 26146bc6650> -> __condition
                    __expression = __cache_2616821838032
                    # <Symbol value=<DEFAULT> at 261418bf450> -> __value
                    __value = _DEFAULT_MARKER
                    __condition = __expression is __value
                    if __condition:
                        # <span ... (0:0)
                        # --------------------------------------------------------
                        __append('<span>AttributeError</span>')
                    else:
                        __content = __cache_2616821838032
                        __content = __quote(__content, None, '\xad', None, None)
                        if __content is not None:
                            __append(__content)
                    __append(':\n\t\t\t\t\t\t\t')
                    # <Static value=Dict(keys=[], values=[]) name=None at 2614191fed0> -> __attrs_2616787130640
                    __attrs_2616787130640 = _static_2616851613904
                    __backup_value_2616827930112 = get('value', __marker)
                    # <Value 'entry/value' (86:31)> -> __value
                    __token = 2857
                    try:
                        __zt_tmp = __attrs_2616787130640
                    except NameError:
                        __zt_tmp = None
                    __value = _static_2616788032784('path', 'entry/value', econtext=econtext)(_static_2616788033488(econtext, __zt_tmp))
                    econtext['value'] = __value
                    # <span ... (0:0)
                    # --------------------------------------------------------
                    __append('<span >')
                    # <Symbol value=<DEFAULT> at 261418bf450> -> __default_2616821840784
                    __default_2616821840784 = _DEFAULT_MARKER
                    # <Value "python: len(value) < 70 and value or value[:70] + '...'" (87:21)> -> __cache_2616821841552
                    __token = 2891
                    try:
                        __zt_tmp = __attrs_2616787130640
                    except NameError:
                        __zt_tmp = None
                    __cache_2616821841552 = _static_2616787309776('python', " len(value) < 70 and value or value[:70] + '...'", econtext=econtext)(_static_2616794526480(econtext, __zt_tmp))
                    # <BinOp left=<Value "python: len(value) < 70 and value or value[:70] + '...'" (87:21)> op=<class 'chameleon.nodes.Is'> right=<Symbol value=<DEFAULT> at 261418bf450> at 26146bc50d0> -> __condition
                    __expression = __cache_2616821841552
                    # <Symbol value=<DEFAULT> at 261418bf450> -> __value
                    __value = _DEFAULT_MARKER
                    __condition = __expression is __value
                    if __condition:
                        __append('Application object has no attribute "zzope"')
                    else:
                        __content = __cache_2616821841552
                        __content = __quote(__content, None, '\xad', None, None)
                        if __content is not None:
                            __append(__content)
                    __append('</span>')
                    if __backup_value_2616827930112 is __marker:
                        del econtext['value']
                    else:
                        econtext['value'] = __backup_value_2616827930112
                    __append('\n\t\t\t\t\t\t</a>\n\t\t\t\t\t</td>\n\t\t\t\t\t')
                    # <Static value=Dict(keys=[], values=[]) name=None at 2614191fed0> -> __attrs_2616787127952
                    __attrs_2616787127952 = _static_2616682044560
                    # <td ... (0:0)
                    # --------------------------------------------------------
                    __append('<td>')
                    # <Static value=Dict(keys=[Constant(value='href', kind=None)], values=[Constant(value='#', kind=None)]) name=None at 26144aae950> -> __attrs_2616825609552
                    __attrs_2616825609552 = _static_2616758802896
                    # <a ... (0:0)
                    # --------------------------------------------------------
                    __append('<a')
                    # <Symbol value=<DEFAULT> at 261418bf450> -> __default_2616787125840
                    __default_2616787125840 = _DEFAULT_MARKER
                    # <Substitution 'string:${context/absolute_url}/forgetEntry?id=${entry/id}' (91:42)> -> __attr_href
                    __token = 3075
                    try:
                        __zt_tmp = __attrs_2616825609552
                    except NameError:
                        __zt_tmp = None
                    __attr_href = _static_2616787286160('string', '${context/absolute_url}/forgetEntry?id=${entry/id}', econtext=econtext)(_static_2616787281680(econtext, __zt_tmp))
                    __attr_href = __quote(__attr_href, '"', '&quot;', '#', _DEFAULT_MARKER)
                    if __attr_href is not None:
                        __append(' href="%s"' % __attr_href)
                    __append(' >Forget this entry</a></td>\n\t\t\t\t</tr>')
                    ____index_2616793549840 -= 1
                    if ____index_2616793549840 > 0:
                        __append('\n    ')
                if __backup_entry_2616827712320 is __marker:
                    del econtext['entry']
                else:
                    econtext['entry'] = __backup_entry_2616827712320
                __append('\n\t\t\t</tbody>\n\t\t</table>')
            __append('\n\t</div>')
            if __backup_entries_2616788226432 is __marker:
                del econtext['entries']
            else:
                econtext['entries'] = __backup_entries_2616788226432
            __append('\n\n\t')
            # <Static value=Dict(keys=[Constant(value='action', kind=None), Constant(value='method', kind=None)], values=[Constant(value='manage_main', kind=None), Constant(value='GET', kind=None)]) name=None at 26146f5ed50> -> __attrs_2616825604560
            __attrs_2616825604560 = _static_2616792187024
            # <form ... (0:0)
            # --------------------------------------------------------
            __append('<form action="manage_main" method="GET">\n\t\t')
            # <Static value=Dict(keys=[Constant(value='class', kind=None)], values=[Constant(value='zmi-controls', kind=None)]) name=None at 26146f5f0d0> -> __attrs_2616825598736
            __attrs_2616825598736 = _static_2616792189968
            # <div ... (0:0)
            # --------------------------------------------------------
            __append('<div class="zmi-controls">\n\t\t\t')
            # <Static value=Dict(keys=[Constant(value='class', kind=None), ..., Constant(value='value', kind=None)], values=[Constant(value='btn btn-primary', kind=None), ..., Constant(value='Refresh', kind=None)]) name=None at 26146f5e490> -> __attrs_2616787080912
            __attrs_2616787080912 = _static_2616792196304
            # <input ... (0:0)
            # --------------------------------------------------------
            __append('<input class="btn btn-primary" type="submit" name="submit" value="Refresh" />\n\t\t</div>\n\t</form>\n\n')
            # <Static value=Dict(keys=[], values=[]) name=None at 2614191fed0> -> __attrs_2616787090896
            __attrs_2616787090896 = _static_2616792192848
            # <Symbol value=<DEFAULT> at 261418bf450> -> __default_2616787081616
            __default_2616787081616 = _DEFAULT_MARKER
            # <Value 'context/manage_page_footer' (104:27)> -> __cache_2616787087888
            __token = 3408
            try:
                __zt_tmp = __attrs_2616787090896
            except NameError:
                __zt_tmp = None
            __cache_2616787087888 = _static_2616849991184('path', 'context/manage_page_footer', econtext=econtext)(_static_2616849992016(econtext, __zt_tmp))
            # <BinOp left=<Value 'context/manage_page_footer' (104:27)> op=<class 'chameleon.nodes.Is'> right=<Symbol value=<DEFAULT> at 261418bf450> at 26144aa2f90> -> __condition
            __expression = __cache_2616787087888
            # <Symbol value=<DEFAULT> at 261418bf450> -> __value
            __value = _DEFAULT_MARKER
            __condition = __expression is __value
            if __condition:
                # <h1 ... (0:0)
                # --------------------------------------------------------
                __append('<h1>Footer</h1>')
            else:
                __content = __cache_2616787087888
                __content = __convert(__content)
                if __content is not None:
                    __append(__content)
            __append('\n')
        except:
            if __token is not None:
                rcontext.setdefault('__error__', []).append(__tokens[__token] + (__filename, _exc_info()[1]))
            raise
    return {'render': render}
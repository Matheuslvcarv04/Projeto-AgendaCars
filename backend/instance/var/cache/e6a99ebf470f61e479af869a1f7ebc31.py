# -*- coding: utf-8 -*-
__filename = 'C:\\Users\\matheus.lcarvalho\\Documents\\agend-veic\\backend\\venv\\Lib\\site-packages\\plone\\app\\portlets\\browser\\templates\\manage-contextual.pt'

__tokens = {397: ('context/@@plone', 12, 29), 621: ('context/Title', 21, 26), 828: ('string:${context/absolute_url}', 30, 18), 1021: ('context/@@plone_context_state/is_portal_root', 38, 36), 1122: ('not:is_portal_root', 40, 34), 1223: ('plone_view/getParentObject|nothing', 43, 28), 1309: ("python:plone_view.getParentObject().absolute_url()+'/@@manage-portlets'", 45, 20), 1595: ('plone_view/isDefaultPageInFolder|nothing', 56, 28), 2066: ('string:${context/aq_inner/aq_parent/absolute_url}/@@manage-portlets', 68, 22), 3050: ('view/has_legacy_portlets', 92, 28), 3435: ('string:${context/absolute_url}/@@convert-legacy-portlets', 103, 25), 231: ('context/main_template/macros/master', 5, 23), 231: ('context/main_template/macros/master', 5, 23)}
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
from sys import exc_info as _exc_info
from Products.PageTemplates.engine import _compile_zt_expr as __compile_zt_expr
from Products.PageTemplates.engine import _C2ZContextWrapper as __C2ZContextWrapper
_static_1809400808976 = {}
_static_1809433923024 = 'master'
_static_1809425432272 = {}
_static_1809427290448 = __compile_zt_expr
_static_1809432371728 = __C2ZContextWrapper
_static_1809432375440 = {}
_static_1809431234192 = {'class': 'documentFirstHeading'}
_static_1809431244240 = {}
_static_1809434289744 = __compile_zt_expr
_static_1809434292048 = __C2ZContextWrapper
_static_1809434103824 = {'class': 'link-parent d-inline-block mb-3', 'href': ''}
_static_1809434919248 = __compile_zt_expr
_static_1809434922256 = __C2ZContextWrapper
_static_1809426600656 = {}
_static_1809431147408 = __compile_zt_expr
_static_1809431149904 = __C2ZContextWrapper
_static_1809432137424 = __compile_zt_expr
_static_1809432139664 = __C2ZContextWrapper
_static_1809434435920 = {'class': 'link-parent mb-3 ms-3', 'href': "python:plone_view.getParentObject().absolute_url()+'/@@manage-portlets'"}
_static_1809432267024 = __compile_zt_expr
_static_1809432268816 = __C2ZContextWrapper
_static_1809432281040 = __compile_zt_expr
_static_1809428942032 = __C2ZContextWrapper
_static_1809433630224 = {'class': 'alert alert-info', 'role': 'status'}
_static_1809434730320 = __compile_zt_expr
_static_1809434732112 = __C2ZContextWrapper
_static_1809434733200 = {}
_static_1809434035152 = {}
_static_1809434046032 = {'href': ''}
_static_1809427370896 = __compile_zt_expr
_static_1809427377424 = __C2ZContextWrapper
_static_1809388813584 = {'id': 'content-core'}
_static_1809432272464 = {}
_static_1809433902864 = {}
_static_1809431495248 = {}
_static_1809456777040 = __compile_zt_expr
_static_1809456778896 = __C2ZContextWrapper
_static_1809456781776 = {}
_static_1809433456272 = {}
_static_1809431775632 = {'method': 'post', 'action': 'string:${context/absolute_url}/@@convert-legacy-portlets'}
_static_1809435167568 = __compile_zt_expr
_static_1809435171024 = __C2ZContextWrapper
_static_1809431093264 = {'class': 'btn btn-primary', 'name': 'convert', 'type': 'submit', 'value': 'Convert portlets'}
_static_1809433512016 = __compile_zt_expr
_static_1809433520208 = __C2ZContextWrapper
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
            # <Static value=Dict(keys=[], values=[]) name=None at 1a54526ff50> -> __attrs_1809431982672
            __attrs_1809431982672 = _static_1809400808976
            __previous_i18n_domain_1809399649104 = __i18n_domain
            __i18n_domain = 'plone'
            __backup_macroname_1809432019776 = get('macroname', __marker)
            # <Static value=Constant(value='master', kind=None) name=None at 1a54a479010> -> __value
            __value = _static_1809433923024
            econtext['macroname'] = __value

            def __fill_main(__stream, econtext, rcontext, __i18n_domain=__i18n_domain, __i18n_context=__i18n_context, target_language=target_language):
                getname = econtext.get_name
                get = econtext.get
                # <Static value=Dict(keys=[], values=[]) name=None at 1a54526ff50> -> __attrs_1809427406352
                __attrs_1809427406352 = _static_1809425432272
                __backup_plone_view_1809427401216 = get('plone_view', __marker)
                # <Value 'context/@@plone' (12:29)> -> __value
                __token = 397
                try:
                    __zt_tmp = __attrs_1809427406352
                except NameError:
                    __zt_tmp = None
                __value = _static_1809427290448('path', 'context/@@plone', econtext=econtext)(_static_1809432371728(econtext, __zt_tmp))
                econtext['plone_view'] = __value
                __append('\n\n      ')
                # <Static value=Dict(keys=[], values=[]) name=None at 1a54526ff50> -> __attrs_1809427412240
                __attrs_1809427412240 = _static_1809432375440
                # <header ... (0:0)
                # --------------------------------------------------------
                __append('<header>\n        ')
                # <Static value=Dict(keys=[Constant(value='class', kind=None)], values=[Constant(value='documentFirstHeading', kind=None)]) name=None at 1a54838fa90> -> __attrs_1809427400592
                __attrs_1809427400592 = _static_1809431234192
                # <h1 ... (0:0)
                # --------------------------------------------------------
                __append('<h1 class="documentFirstHeading" >')
                __stream_1809472285472_context_title = ''
                __stream_1809432995088 = []
                __append_1809432995088 = __stream_1809432995088.append
                __append_1809432995088('\n        Manage portlets for\n          ')
                __stream_1809472285472_context_title = []
                __append_1809472285472_context_title = __stream_1809472285472_context_title.append
                # <Static value=Dict(keys=[], values=[]) name=None at 1a54526ff50> -> __attrs_1809428886160
                __attrs_1809428886160 = _static_1809431244240
                # <q ... (0:0)
                # --------------------------------------------------------
                __append_1809472285472_context_title('<q >')
                # <Symbol value=<DEFAULT> at 1a54520f4d0> -> __default_1809428877008
                __default_1809428877008 = _DEFAULT_MARKER
                # <Value 'context/Title' (21:26)> -> __cache_1809428996752
                __token = 621
                try:
                    __zt_tmp = __attrs_1809428886160
                except NameError:
                    __zt_tmp = None
                __cache_1809428996752 = _static_1809434289744('path', 'context/Title', econtext=econtext)(_static_1809434292048(econtext, __zt_tmp))
                # <BinOp left=<Value 'context/Title' (21:26)> op=<class 'chameleon.nodes.Is'> right=<Symbol value=<DEFAULT> at 1a54520f4d0> at 1a54a8d9390> -> __condition
                __expression = __cache_1809428996752
                # <Symbol value=<DEFAULT> at 1a54520f4d0> -> __value
                __value = _DEFAULT_MARKER
                __condition = __expression is __value
                if __condition:
                    __append_1809472285472_context_title('title')
                else:
                    __content = __cache_1809428996752
                    __content = __quote(__content, None, '\xad', None, None)
                    if __content is not None:
                        __append_1809472285472_context_title(__content)
                __append_1809472285472_context_title('</q>')
                __append_1809432995088('${context_title}')
                __stream_1809472285472_context_title = ''.join(__stream_1809472285472_context_title)
                __append_1809432995088('\n        ')
                __msgid_1809432995088 = __re_whitespace(''.join(__stream_1809432995088)).strip()
                __append(translate('title_manage_contextual_portlets', mapping={'context_title': __stream_1809472285472_context_title}, default=__msgid_1809432995088, domain=__i18n_domain, context=__i18n_context, target_language=target_language))
                __append('</h1>\n\n\n        ')
                # <Static value=Dict(keys=[Constant(value='class', kind=None), Constant(value='href', kind=None)], values=[Constant(value='link-parent d-inline-block mb-3', kind=None), Constant(value='', kind=None)]) name=None at 1a547f47390> -> __attrs_1809433272912
                __attrs_1809433272912 = _static_1809434103824
                # <a ... (0:0)
                # --------------------------------------------------------
                __append('<a class="link-parent d-inline-block mb-3"')
                # <Symbol value=<DEFAULT> at 1a54520f4d0> -> __default_1809433271952
                __default_1809433271952 = _DEFAULT_MARKER
                # <Substitution 'string:${context/absolute_url}' (30:18)> -> __attr_href
                __token = 828
                try:
                    __zt_tmp = __attrs_1809433272912
                except NameError:
                    __zt_tmp = None
                __attr_href = _static_1809434919248('string', '${context/absolute_url}', econtext=econtext)(_static_1809434922256(econtext, __zt_tmp))
                __attr_href = __quote(__attr_href, '"', '&quot;', '', _DEFAULT_MARKER)
                if __attr_href is not None:
                    __append(' href="%s"' % __attr_href)
                __append(' >')
                __stream_1809433269328 = []
                __append_1809433269328 = __stream_1809433269328.append
                __append_1809433269328('\n      Return\n        ')
                __msgid_1809433269328 = __re_whitespace(''.join(__stream_1809433269328)).strip()
                __append(translate('return_to_view', mapping=None, default=__msgid_1809433269328, domain=__i18n_domain, context=__i18n_context, target_language=target_language))
                __append('</a>\n\n        ')
                # <Static value=Dict(keys=[], values=[]) name=None at 1a54526ff50> -> __attrs_1809433274896
                __attrs_1809433274896 = _static_1809426600656
                __backup_is_portal_root_1809427404992 = get('is_portal_root', __marker)
                # <Value 'context/@@plone_context_state/is_portal_root' (38:36)> -> __value
                __token = 1021
                try:
                    __zt_tmp = __attrs_1809433274896
                except NameError:
                    __zt_tmp = None
                __value = _static_1809431147408('path', 'context/@@plone_context_state/is_portal_root', econtext=econtext)(_static_1809431149904(econtext, __zt_tmp))
                econtext['is_portal_root'] = __value
                # <Value 'not:is_portal_root' (40:34)> -> __condition
                __token = 1122
                try:
                    __zt_tmp = __attrs_1809433274896
                except NameError:
                    __zt_tmp = None
                __condition = _static_1809432137424('not', 'is_portal_root', econtext=econtext)(_static_1809432139664(econtext, __zt_tmp))
                if __condition:
                    __append('\n          ')
                    # <Static value=Dict(keys=[Constant(value='class', kind=None), Constant(value='href', kind=None)], values=[Constant(value='link-parent mb-3 ms-3', kind=None), Constant(value="python:plone_view.getParentObject().absolute_url()+'/@@manage-portlets'", kind=None)]) name=None at 1a54aa0bc10> -> __attrs_1809431885328
                    __attrs_1809431885328 = _static_1809434435920
                    # <Value 'plone_view/getParentObject|nothing' (43:28)> -> __condition
                    __token = 1223
                    try:
                        __zt_tmp = __attrs_1809431885328
                    except NameError:
                        __zt_tmp = None
                    __condition = _static_1809432267024('path', 'plone_view/getParentObject|nothing', econtext=econtext)(_static_1809432268816(econtext, __zt_tmp))
                    if __condition:
                        # <a ... (0:0)
                        # --------------------------------------------------------
                        __append('<a class="link-parent mb-3 ms-3"')
                        # <Symbol value=<DEFAULT> at 1a54520f4d0> -> __default_1809431884176
                        __default_1809431884176 = _DEFAULT_MARKER
                        # <Substitution "python:plone_view.getParentObject().absolute_url()+'/@@manage-portlets'" (45:20)> -> __attr_href
                        __token = 1309
                        try:
                            __zt_tmp = __attrs_1809431885328
                        except NameError:
                            __zt_tmp = None
                        __attr_href = _static_1809432281040('python', "plone_view.getParentObject().absolute_url()+'/@@manage-portlets'", econtext=econtext)(_static_1809428942032(econtext, __zt_tmp))
                        __attr_href = __quote(__attr_href, '"', '&quot;', None, _DEFAULT_MARKER)
                        if __attr_href is not None:
                            __append(' href="%s"' % __attr_href)
                        __append(' >')
                        __stream_1809433274256 = []
                        __append_1809433274256 = __stream_1809433274256.append
                        __append_1809433274256('\n    Go to parent folder\n          ')
                        __msgid_1809433274256 = __re_whitespace(''.join(__stream_1809433274256)).strip()
                        if __msgid_1809433274256:
                            __append(translate(__msgid_1809433274256, mapping=None, default=__msgid_1809433274256, domain=__i18n_domain, context=__i18n_context, target_language=target_language))
                        __append('</a>')
                    __append('\n        ')
                if __backup_is_portal_root_1809427404992 is __marker:
                    del econtext['is_portal_root']
                else:
                    econtext['is_portal_root'] = __backup_is_portal_root_1809427404992
                __append('\n\n\n        ')
                # <Static value=Dict(keys=[Constant(value='class', kind=None), Constant(value='role', kind=None)], values=[Constant(value='alert alert-info', kind=None), Constant(value='status', kind=None)]) name=None at 1a54aa0add0> -> __attrs_1809428316752
                __attrs_1809428316752 = _static_1809433630224
                # <Value 'plone_view/isDefaultPageInFolder|nothing' (56:28)> -> __condition
                __token = 1595
                try:
                    __zt_tmp = __attrs_1809428316752
                except NameError:
                    __zt_tmp = None
                __condition = _static_1809434730320('path', 'plone_view/isDefaultPageInFolder|nothing', econtext=econtext)(_static_1809434732112(econtext, __zt_tmp))
                if __condition:
                    # <div ... (0:0)
                    # --------------------------------------------------------
                    __append('<div class="alert alert-info" role="status" >\n          ')
                    # <Static value=Dict(keys=[], values=[]) name=None at 1a54526ff50> -> __attrs_1809428322960
                    __attrs_1809428322960 = _static_1809434733200
                    # <strong ... (0:0)
                    # --------------------------------------------------------
                    __append('<strong>')
                    __stream_1809428318608 = []
                    __append_1809428318608 = __stream_1809428318608.append
                    __append_1809428318608('\n          Info\n          ')
                    __msgid_1809428318608 = __re_whitespace(''.join(__stream_1809428318608)).strip()
                    if __msgid_1809428318608:
                        __append(translate(__msgid_1809428318608, mapping=None, default=__msgid_1809428318608, domain=__i18n_domain, context=__i18n_context, target_language=target_language))
                    __append('</strong>\n          ')
                    # <Static value=Dict(keys=[], values=[]) name=None at 1a54526ff50> -> __attrs_1809428321488
                    __attrs_1809428321488 = _static_1809434035152
                    __stream_1809472283232_go_here = ''
                    __stream_1809428318480 = []
                    __append_1809428318480 = __stream_1809428318480.append
                    __append_1809428318480('\n          You are managing the portlets of the default view of a container. If\n          you wanted to manage the portlets of the container itself,\n            ')
                    __stream_1809472283232_go_here = []
                    __append_1809472283232_go_here = __stream_1809472283232_go_here.append
                    # <Static value=Dict(keys=[Constant(value='href', kind=None)], values=[Constant(value='', kind=None)]) name=None at 1a548c20390> -> __attrs_1809433051472
                    __attrs_1809433051472 = _static_1809434046032
                    # <a ... (0:0)
                    # --------------------------------------------------------
                    __append_1809472283232_go_here('<a')
                    # <Symbol value=<DEFAULT> at 1a54520f4d0> -> __default_1809404152784
                    __default_1809404152784 = _DEFAULT_MARKER
                    # <Substitution 'string:${context/aq_inner/aq_parent/absolute_url}/@@manage-portlets' (68:22)> -> __attr_href
                    __token = 2066
                    try:
                        __zt_tmp = __attrs_1809433051472
                    except NameError:
                        __zt_tmp = None
                    __attr_href = _static_1809427370896('string', '${context/aq_inner/aq_parent/absolute_url}/@@manage-portlets', econtext=econtext)(_static_1809427377424(econtext, __zt_tmp))
                    __attr_href = __quote(__attr_href, '"', '&quot;', '', _DEFAULT_MARKER)
                    if __attr_href is not None:
                        __append_1809472283232_go_here(' href="%s"' % __attr_href)
                    __append_1809472283232_go_here(' >')
                    __stream_1809428324944 = []
                    __append_1809428324944 = __stream_1809428324944.append
                    __append_1809428324944('go here')
                    __msgid_1809428324944 = __re_whitespace(''.join(__stream_1809428324944)).strip()
                    __append_1809472283232_go_here(translate('label_manage_portlets_default_view_container_go_here', mapping=None, default=__msgid_1809428324944, domain=__i18n_domain, context=__i18n_context, target_language=target_language))
                    __append_1809472283232_go_here('</a>')
                    __append_1809428318480('${go_here}')
                    __stream_1809472283232_go_here = ''.join(__stream_1809472283232_go_here)
                    __append_1809428318480('.\n          ')
                    __msgid_1809428318480 = __re_whitespace(''.join(__stream_1809428318480)).strip()
                    __append(translate('label_manage_portlets_default_view_container', mapping={'go_here': __stream_1809472283232_go_here}, default=__msgid_1809428318480, domain=__i18n_domain, context=__i18n_context, target_language=target_language))
                    __append('\n        </div>')
                __append('\n      </header>\n\n      ')
                # <Static value=Dict(keys=[Constant(value='id', kind=None)], values=[Constant(value='content-core', kind=None)]) name=None at 1a54a323ed0> -> __attrs_1809433053392
                __attrs_1809433053392 = _static_1809388813584
                # <div ... (0:0)
                # --------------------------------------------------------
                __append('<div id="content-core">\n\n        ')
                # <Static value=Dict(keys=[], values=[]) name=None at 1a54526ff50> -> __attrs_1809433055184
                __attrs_1809433055184 = _static_1809432272464
                # <p ... (0:0)
                # --------------------------------------------------------
                __append('<p>')
                __stream_1809433054288 = []
                __append_1809433054288 = __stream_1809433054288.append
                __append_1809433054288('\n        The portlet columns will first display portlets\n        explicitly assigned in this context. Use the buttons on each portlet\n        to move them up or down, delete or edit them. To add a new portlet,\n        use the drop-down list at the top of the column.\n        ')
                __msgid_1809433054288 = __re_whitespace(''.join(__stream_1809433054288)).strip()
                __append(translate('description_manage_contextual_portlets', mapping=None, default=__msgid_1809433054288, domain=__i18n_domain, context=__i18n_context, target_language=target_language))
                __append('</p>\n\n        ')
                # <Static value=Dict(keys=[], values=[]) name=None at 1a54526ff50> -> __attrs_1809433057168
                __attrs_1809433057168 = _static_1809433902864
                # <p ... (0:0)
                # --------------------------------------------------------
                __append('<p>')
                __stream_1809433055760 = []
                __append_1809433055760 = __stream_1809433055760.append
                __append_1809433055760('\n          If you wish to block or unblock certain categories of portlets, you can\n          do so using the drop-down boxes. Portlets that are included by these categories\n          are shown below the selection box.\n        ')
                __msgid_1809433055760 = __re_whitespace(''.join(__stream_1809433055760)).strip()
                __append(translate('description_portlets_block_unblock', mapping=None, default=__msgid_1809433055760, domain=__i18n_domain, context=__i18n_context, target_language=target_language))
                __append('</p>\n\n        ')
                # <Static value=Dict(keys=[], values=[]) name=None at 1a54526ff50> -> __attrs_1809433060688
                __attrs_1809433060688 = _static_1809431495248
                # <Value 'view/has_legacy_portlets' (92:28)> -> __condition
                __token = 3050
                try:
                    __zt_tmp = __attrs_1809433060688
                except NameError:
                    __zt_tmp = None
                __condition = _static_1809456777040('path', 'view/has_legacy_portlets', econtext=econtext)(_static_1809456778896(econtext, __zt_tmp))
                if __condition:
                    # <div ... (0:0)
                    # --------------------------------------------------------
                    __append('<div>\n\n          ')
                    # <Static value=Dict(keys=[], values=[]) name=None at 1a54526ff50> -> __attrs_1809433062672
                    __attrs_1809433062672 = _static_1809456781776
                    # <h2 ... (0:0)
                    # --------------------------------------------------------
                    __append('<h2>')
                    __stream_1809433061712 = []
                    __append_1809433061712 = __stream_1809433061712.append
                    __append_1809433061712('Legacy portlets')
                    __msgid_1809433061712 = __re_whitespace(''.join(__stream_1809433061712)).strip()
                    __append(translate('title_legacy_portlets', mapping=None, default=__msgid_1809433061712, domain=__i18n_domain, context=__i18n_context, target_language=target_language))
                    __append('</h2>\n\n          ')
                    # <Static value=Dict(keys=[], values=[]) name=None at 1a54526ff50> -> __attrs_1809433063568
                    __attrs_1809433063568 = _static_1809433456272
                    # <p ... (0:0)
                    # --------------------------------------------------------
                    __append('<p>')
                    __stream_1809433061584 = []
                    __append_1809433061584 = __stream_1809433061584.append
                    __append_1809433061584('\n          There are legacy portlets defined here. Click the button to\n          convert them to new-style portlets.\n          ')
                    __msgid_1809433061584 = __re_whitespace(''.join(__stream_1809433061584)).strip()
                    __append(translate('action_convert_legacy_portlets', mapping=None, default=__msgid_1809433061584, domain=__i18n_domain, context=__i18n_context, target_language=target_language))
                    __append('</p>\n\n          ')
                    # <Static value=Dict(keys=[Constant(value='method', kind=None), Constant(value='action', kind=None)], values=[Constant(value='post', kind=None), Constant(value='string:${context/absolute_url}/@@convert-legacy-portlets', kind=None)]) name=None at 1a54a9d5b90> -> __attrs_1809393050128
                    __attrs_1809393050128 = _static_1809431775632
                    # <form ... (0:0)
                    # --------------------------------------------------------
                    __append('<form method="post"')
                    # <Symbol value=<DEFAULT> at 1a54520f4d0> -> __default_1809393056784
                    __default_1809393056784 = _DEFAULT_MARKER
                    # <Substitution 'string:${context/absolute_url}/@@convert-legacy-portlets' (103:25)> -> __attr_action
                    __token = 3435
                    try:
                        __zt_tmp = __attrs_1809393050128
                    except NameError:
                        __zt_tmp = None
                    __attr_action = _static_1809435167568('string', '${context/absolute_url}/@@convert-legacy-portlets', econtext=econtext)(_static_1809435171024(econtext, __zt_tmp))
                    __attr_action = __quote(__attr_action, '"', '&quot;', None, _DEFAULT_MARKER)
                    if __attr_action is not None:
                        __append(' action="%s"' % __attr_action)
                    __append(' >\n\n            ')
                    # <Static value=Dict(keys=[Constant(value='class', kind=None), ..., Constant(value='value', kind=None)], values=[Constant(value='btn btn-primary', kind=None), ..., Constant(value='Convert portlets', kind=None)]) name=None at 1a548068250> -> __attrs_1809432166672
                    __attrs_1809432166672 = _static_1809431093264
                    # <input ... (0:0)
                    # --------------------------------------------------------
                    __append('<input class="btn btn-primary" name="convert" type="submit"')
                    # <Symbol value=<DEFAULT> at 1a54520f4d0> -> __default_1809432181520
                    __default_1809432181520 = _DEFAULT_MARKER
                    # <Translate msgid='label_convert_portlets' node=Constant(value='Convert portlets', kind=None) at 1a54a9d7210> -> __attr_value
                    __attr_value = 'Convert portlets'
                    __attr_value = translate('label_convert_portlets', default=__attr_value, domain=__i18n_domain, context=__i18n_context, target_language=getname('target_language'))
                    if __attr_value is not None:
                        __append(' value="%s"' % __attr_value)
                    __append(' />\n\n          </form>\n\n        </div>')
                __append('\n      </div>\n\n    ')
                if __backup_plone_view_1809427401216 is __marker:
                    del econtext['plone_view']
                else:
                    econtext['plone_view'] = __backup_plone_view_1809427401216
            _slots = econtext['__slot_main'] = _deque((__fill_main,))
            # <Value 'context/main_template/macros/master' (5:23)> -> __macro
            __token = 231
            try:
                __zt_tmp = __attrs_1809431982672
            except NameError:
                __zt_tmp = None
            __macro = _static_1809433512016('path', 'context/main_template/macros/master', econtext=econtext)(_static_1809433520208(econtext, __zt_tmp))
            __token = 231
            __m = __macro.include
            __m(__stream, econtext.copy(), rcontext, __i18n_domain, __i18n_context, target_language)
            econtext.update(rcontext)
            if __backup_macroname_1809432019776 is __marker:
                del econtext['macroname']
            else:
                econtext['macroname'] = __backup_macroname_1809432019776
            __i18n_domain = __previous_i18n_domain_1809399649104
            __append('\n')
        except:
            if __token is not None:
                rcontext.setdefault('__error__', []).append(__tokens[__token] + (__filename, _exc_info()[1]))
            raise
    return {'render': render}
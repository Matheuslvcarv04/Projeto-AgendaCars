# -*- coding: utf-8 -*-
__filename = 'C:\\Users\\matheus.lcarvalho\\Documents\\agend-veic\\backend\\venv\\Lib\\site-packages\\plone\\app\\portlets\\browser\\templates/edit-manager-contextual.pt'

__tokens = {324: ('string:portletmanager-${view/normalized_manager_name}', 9, 12), 476: ('context/@@manage-portlets-macros/macros/portlet-add-form', 15, 28), 476: ('context/@@manage-portlets-macros/macros/portlet-add-form', 15, 28), 579: ('context/@@manage-portlets-macros/macros/current-portlets-list', 18, 26), 579: ('context/@@manage-portlets-macros/macros/current-portlets-list', 18, 26), 910: ('view/blacklist_status_action', 29, 21), 1000: ('context/@@authenticator/authenticator', 33, 37), 1161: ('view/manager_name', 37, 23), 1297: ('view/context_blacklist_status', 43, 22), 1710: ("python:status == True and 'selected' or None", 58, 33), 2012: ("python:(status == False or status == None) and 'selected' or None", 67, 33), 2339: ('view/inherited_portlets', 79, 32), 2419: ('portlets', 81, 32), 2479: ('portlets', 84, 37), 2548: ("python:status and 'managedPortlet inheritedPortlet blockedPortlet list-group' or 'managedPortlet inheritedPortlet list-group'", 86, 25), 2834: ('not:portlet/editview', 93, 33), 2918: ('string:${portlet/editview}?referer=${view/url_quote_referer}', 95, 26), 2786: ('portlet/title', 92, 32), 3167: ('status', 101, 37), 3544: ('view/group_blacklist_status', 116, 22), 3906: ("python:status == None and 'selected' or None", 129, 31), 4210: ("python:status == True and 'selected' or None", 138, 31), 4496: ("python:status == False and 'selected' or None", 147, 31), 4773: ('view/group_portlets', 157, 32), 4823: (' python:view.group_blacklist_status(check_parent=True', 158, 29), 4941: ('portlets', 161, 37), 5010: ("python:status and 'managedPortlet inheritedPortlet blockedPortlet' or 'managedPortlet inheritedPortlet'", 163, 25), 5272: ('not:portlet/editview', 170, 33), 5356: ('string:${portlet/editview}?referer=${view/url_quote_referer}', 172, 26), 5224: ('portlet/title', 169, 32), 5605: ('status', 178, 37), 5985: ('view/content_type_blacklist_status', 196, 22), 6375: ("python:status == None and 'selected' or None", 209, 31), 6679: ("python:status == True and 'selected' or None", 218, 31), 6965: ("python:status == False and 'selected' or None", 227, 31), 7241: ('view/content_type_portlets', 236, 32), 7298: (' python:view.content_type_blacklist_status(check_parent=True', 237, 29), 7423: ('portlets', 240, 37), 7492: ("python:status and 'managedPortlet inheritedPortlet blockedPortlet' or 'managedPortlet inheritedPortlet'", 242, 25), 7752: ('not:portlet/editview', 247, 33), 7836: ('string:${portlet/editview}?referer=${view/url_quote_referer}', 249, 26), 7704: ('portlet/title', 246, 32), 8085: ('status', 255, 37)}
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
_static_1809432023952 = {'xmlns': 'http://www.w3.org/1999/xhtml'}
_static_1809457392656 = {'class': 'portlets-manager pat-manage-portlets row', 'id': 'string:portletmanager-${view/normalized_manager_name}'}
_static_1809426443280 = __compile_zt_expr
_static_1809400597136 = __C2ZContextWrapper
_static_1809428167504 = {'class': 'container'}
_static_1809370048784 = {}
_static_1809428319248 = 'portlet-add-form'
_static_1809433822736 = __compile_zt_expr
_static_1809433832720 = __C2ZContextWrapper
_static_1809433835088 = {}
_static_1809386190352 = 'current-portlets-list'
_static_1809432177680 = __compile_zt_expr
_static_1809432182608 = __C2ZContextWrapper
_static_1809400703568 = {'class': 'container portletAssignments'}
_static_1809428115984 = {}
_static_1809433053968 = {'class': 'portlets-settings', 'method': 'post', 'action': 'view/blacklist_status_action'}
_static_1809425424656 = __compile_zt_expr
_static_1809425418768 = __C2ZContextWrapper
_static_1809433453264 = {}
_static_1809393670032 = __compile_zt_expr
_static_1809393664784 = __C2ZContextWrapper
_static_1809432137296 = {'name': 'manager', 'type': 'hidden', 'value': 'view/manager_name'}
_static_1809432265680 = __compile_zt_expr
_static_1809432279504 = __C2ZContextWrapper
_static_1809432275856 = {'class': 'mb-3 portlet-group'}
_static_1809403693136 = __compile_zt_expr
_static_1809435125456 = __C2ZContextWrapper
_static_1809435122256 = {'class': 'mb-3'}
_static_1809431783952 = {}
_static_1809388207312 = {'class': 'form-select', 'name': 'context_status:int', 'size': '1'}
_static_1809434048848 = {'value': '1', 'selected': "python:status == True and 'selected' or None"}
_static_1809434727440 = __compile_zt_expr
_static_1809434737552 = __C2ZContextWrapper
_static_1809434045456 = {'value': '-1', 'selected': "python:(status == False or status == None) and 'selected' or None"}
_static_1809434107472 = __compile_zt_expr
_static_1809433052944 = __C2ZContextWrapper
_static_1809456330832 = {}
_static_1809434176400 = __compile_zt_expr
_static_1809434175888 = __C2ZContextWrapper
_static_1809426604432 = __compile_zt_expr
_static_1809364445392 = __C2ZContextWrapper
_static_1809434044176 = {'class': "python:status and 'managedPortlet inheritedPortlet blockedPortlet list-group' or 'managedPortlet inheritedPortlet list-group'"}
_static_1809432345168 = __compile_zt_expr
_static_1809432339344 = __C2ZContextWrapper
_static_1809428686864 = __compile_zt_expr
_static_1809428691536 = __C2ZContextWrapper
_static_1809458481936 = {'class': 'list-group-item'}
_static_1809458486800 = {'href': 'string:${portlet/editview}?referer=${view/url_quote_referer}'}
_static_1809458038160 = __compile_zt_expr
_static_1809457304400 = __C2ZContextWrapper
_static_1809435060624 = __compile_zt_expr
_static_1809435062672 = __C2ZContextWrapper
_static_1809433991760 = __compile_zt_expr
_static_1809433993296 = __C2ZContextWrapper
_static_1809428378192 = {'class': 'portletBlockedMessage hiddenStructure', 'title': 'Blocked'}
_static_1809428379088 = __compile_zt_expr
_static_1809433988176 = __C2ZContextWrapper
_static_1809432344464 = {'class': 'mb-3 portlet-group'}
_static_1809427099152 = __compile_zt_expr
_static_1809427532944 = __C2ZContextWrapper
_static_1809427536848 = {}
_static_1809364893456 = {'class': 'form-select', 'name': 'group_status:int', 'size': '1'}
_static_1809427183888 = {'value': '0', 'selected': "python:status == None and 'selected' or None"}
_static_1809457022352 = __compile_zt_expr
_static_1809457023888 = __C2ZContextWrapper
_static_1809457091792 = {'value': '1', 'selected': "python:status == True and 'selected' or None"}
_static_1809456958864 = __compile_zt_expr
_static_1809456961232 = __C2ZContextWrapper
_static_1809457206288 = {'value': '-1', 'selected': "python:status == False and 'selected' or None"}
_static_1809434981712 = __compile_zt_expr
_static_1809434975312 = __C2ZContextWrapper
_static_1809457028304 = {}
_static_1809427180880 = __compile_zt_expr
_static_1809364891408 = __C2ZContextWrapper
_static_1809457344528 = __compile_zt_expr
_static_1809457334480 = __C2ZContextWrapper
_static_1809458381328 = {'class': "python:status and 'managedPortlet inheritedPortlet blockedPortlet' or 'managedPortlet inheritedPortlet'"}
_static_1809427680912 = __compile_zt_expr
_static_1809427682448 = __C2ZContextWrapper
_static_1809434375312 = __compile_zt_expr
_static_1809404208208 = __C2ZContextWrapper
_static_1809431268560 = {'class': 'portletHeader'}
_static_1809431275344 = {'href': 'string:${portlet/editview}?referer=${view/url_quote_referer}'}
_static_1809389219344 = __compile_zt_expr
_static_1809389215376 = __C2ZContextWrapper
_static_1809433063952 = __compile_zt_expr
_static_1809400131664 = __C2ZContextWrapper
_static_1809433241360 = __compile_zt_expr
_static_1809457987984 = __C2ZContextWrapper
_static_1809458003600 = {'class': 'portletBlockedMessage hiddenStructure', 'title': 'Blocked'}
_static_1809457902992 = __compile_zt_expr
_static_1809433397584 = __C2ZContextWrapper
_static_1809364448400 = {'class': 'mb-3 portlet-group'}
_static_1809456971344 = __compile_zt_expr
_static_1809459097424 = __C2ZContextWrapper
_static_1809459093840 = {}
_static_1809459848848 = {'class': 'form-select', 'name': 'content_type_status:int', 'size': '1'}
_static_1809459698192 = {'value': '0', 'selected': "python:status == None and 'selected' or None"}
_static_1809456629904 = __compile_zt_expr
_static_1809433713488 = __C2ZContextWrapper
_static_1809459795920 = {'value': '1', 'selected': "python:status == True and 'selected' or None"}
_static_1809458614032 = __compile_zt_expr
_static_1809458621776 = __C2ZContextWrapper
_static_1809457536208 = {'value': '-1', 'selected': "python:status == False and 'selected' or None"}
_static_1809457257744 = __compile_zt_expr
_static_1809457259408 = __C2ZContextWrapper
_static_1809459696400 = {}
_static_1809456040976 = __compile_zt_expr
_static_1809456045776 = __C2ZContextWrapper
_static_1809456053072 = __compile_zt_expr
_static_1809457751568 = __C2ZContextWrapper
_static_1809427614224 = {'class': "python:status and 'managedPortlet inheritedPortlet blockedPortlet' or 'managedPortlet inheritedPortlet'"}
_static_1809459798992 = __compile_zt_expr
_static_1809459801744 = __C2ZContextWrapper
_static_1809458715344 = __compile_zt_expr
_static_1809458719184 = __C2ZContextWrapper
_static_1809460119440 = {'class': 'portletHeader'}
_static_1809460126160 = {'href': 'string:${portlet/editview}?referer=${view/url_quote_referer}'}
_static_1809455956688 = __compile_zt_expr
_static_1809455963984 = __C2ZContextWrapper
_static_1809460087376 = __compile_zt_expr
_static_1809460086352 = __C2ZContextWrapper
_static_1809462240848 = __compile_zt_expr
_static_1809462244176 = __C2ZContextWrapper
_static_1809460898256 = {'class': 'portletBlockedMessage hiddenStructure', 'title': 'Blocked'}
_static_1809462325712 = __compile_zt_expr
_static_1809458793872 = __C2ZContextWrapper
_static_1809459585232 = {}
_static_1809459592784 = {'class': 'formControls'}
_static_1809462892816 = {'class': 'btn btn-primary', 'type': 'submit', 'value': 'Save settings'}
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
            # <Static value=Dict(keys=[Constant(value='xmlns', kind=None)], values=[Constant(value='http://www.w3.org/1999/xhtml', kind=None)]) name=None at 1a54a5ce4d0> -> __attrs_1809433898384
            __attrs_1809433898384 = _static_1809432023952
            __append('\n  ')
            # <Static value=Dict(keys=[Constant(value='class', kind=None), Constant(value='id', kind=None)], values=[Constant(value='portlets-manager pat-manage-portlets row', kind=None), Constant(value='string:portletmanager-${view/normalized_manager_name}', kind=None)]) name=None at 1a54a225550> -> __attrs_1809434927440
            __attrs_1809434927440 = _static_1809457392656
            __previous_i18n_domain_1809434921680 = __i18n_domain
            __i18n_domain = 'plone'
            # <div ... (0:0)
            # --------------------------------------------------------
            __append('<div class="portlets-manager pat-manage-portlets row"')
            # <Symbol value=<DEFAULT> at 1a54520f4d0> -> __default_1809434436048
            __default_1809434436048 = _DEFAULT_MARKER
            # <Substitution 'string:portletmanager-${view/normalized_manager_name}' (9:12)> -> __attr_id
            __token = 324
            try:
                __zt_tmp = __attrs_1809434927440
            except NameError:
                __zt_tmp = None
            __attr_id = _static_1809426443280('string', 'portletmanager-${view/normalized_manager_name}', econtext=econtext)(_static_1809400597136(econtext, __zt_tmp))
            __attr_id = __quote(__attr_id, '"', '&quot;', None, _DEFAULT_MARKER)
            if __attr_id is not None:
                __append(' id="%s"' % __attr_id)
            __append(' >\n\n    ')
            # <Static value=Dict(keys=[Constant(value='class', kind=None)], values=[Constant(value='container', kind=None)]) name=None at 1a54ab9ec90> -> __attrs_1809427852432
            __attrs_1809427852432 = _static_1809428167504
            # <div ... (0:0)
            # --------------------------------------------------------
            __append('<div class="container">\n      ')
            # <Static value=Dict(keys=[], values=[]) name=None at 1a54526ff50> -> __attrs_1809428830480
            __attrs_1809428830480 = _static_1809370048784
            __backup_macroname_1809434434048 = get('macroname', __marker)
            # <Static value=Constant(value='portlet-add-form', kind=None) name=None at 1a54a515b10> -> __value
            __value = _static_1809428319248
            econtext['macroname'] = __value
            # <Value 'context/@@manage-portlets-macros/macros/portlet-add-form' (15:28)> -> __macro
            __token = 476
            try:
                __zt_tmp = __attrs_1809428830480
            except NameError:
                __zt_tmp = None
            __macro = _static_1809433822736('path', 'context/@@manage-portlets-macros/macros/portlet-add-form', econtext=econtext)(_static_1809433832720(econtext, __zt_tmp))
            __token = 476
            __m = __macro.include
            __m(__stream, econtext.copy(), rcontext, __i18n_domain, __i18n_context, target_language)
            econtext.update(rcontext)
            if __backup_macroname_1809434434048 is __marker:
                del econtext['macroname']
            else:
                econtext['macroname'] = __backup_macroname_1809434434048
            __append('\n    </div>\n\n    ')
            # <Static value=Dict(keys=[], values=[]) name=None at 1a54526ff50> -> __attrs_1809428826960
            __attrs_1809428826960 = _static_1809433835088
            __backup_macroname_1809400452288 = get('macroname', __marker)
            # <Static value=Constant(value='current-portlets-list', kind=None) name=None at 1a54a5cf150> -> __value
            __value = _static_1809386190352
            econtext['macroname'] = __value
            # <Value 'context/@@manage-portlets-macros/macros/current-portlets-list' (18:26)> -> __macro
            __token = 579
            try:
                __zt_tmp = __attrs_1809428826960
            except NameError:
                __zt_tmp = None
            __macro = _static_1809432177680('path', 'context/@@manage-portlets-macros/macros/current-portlets-list', econtext=econtext)(_static_1809432182608(econtext, __zt_tmp))
            __token = 579
            __m = __macro.include
            __m(__stream, econtext.copy(), rcontext, __i18n_domain, __i18n_context, target_language)
            econtext.update(rcontext)
            if __backup_macroname_1809400452288 is __marker:
                del econtext['macroname']
            else:
                econtext['macroname'] = __backup_macroname_1809400452288
            __append('\n\n    ')
            # <Static value=Dict(keys=[Constant(value='class', kind=None)], values=[Constant(value='container portletAssignments', kind=None)]) name=None at 1a54a5ccad0> -> __attrs_1809427376464
            __attrs_1809427376464 = _static_1809400703568
            # <div ... (0:0)
            # --------------------------------------------------------
            __append('<div class="container portletAssignments">\n\n      ')
            # <Static value=Dict(keys=[], values=[]) name=None at 1a54526ff50> -> __attrs_1809427379408
            __attrs_1809427379408 = _static_1809428115984
            # <h5 ... (0:0)
            # --------------------------------------------------------
            __append('<h5>')
            __stream_1809427366992 = []
            __append_1809427366992 = __stream_1809427366992.append
            __append_1809427366992('\n        Block/unblock portlets\n      ')
            __msgid_1809427366992 = __re_whitespace(''.join(__stream_1809427366992)).strip()
            __append(translate('heading_un_block_portlets', mapping=None, default=__msgid_1809427366992, domain=__i18n_domain, context=__i18n_context, target_language=target_language))
            __append('</h5>\n\n      ')
            # <Static value=Dict(keys=[Constant(value='class', kind=None), ..., Constant(value='action', kind=None)], values=[Constant(value='portlets-settings', kind=None), ..., Constant(value='view/blacklist_status_action', kind=None)]) name=None at 1a54a468d90> -> __attrs_1809389174544
            __attrs_1809389174544 = _static_1809433053968
            # <form ... (0:0)
            # --------------------------------------------------------
            __append('<form class="portlets-settings" method="post"')
            # <Symbol value=<DEFAULT> at 1a54520f4d0> -> __default_1809427375504
            __default_1809427375504 = _DEFAULT_MARKER
            # <Substitution 'view/blacklist_status_action' (29:21)> -> __attr_action
            __token = 910
            try:
                __zt_tmp = __attrs_1809389174544
            except NameError:
                __zt_tmp = None
            __attr_action = _static_1809425424656('path', 'view/blacklist_status_action', econtext=econtext)(_static_1809425418768(econtext, __zt_tmp))
            __attr_action = __quote(__attr_action, '"', '&quot;', None, _DEFAULT_MARKER)
            if __attr_action is not None:
                __append(' action="%s"' % __attr_action)
            __append(' >\n\n        ')
            # <Static value=Dict(keys=[], values=[]) name=None at 1a54526ff50> -> __attrs_1809433935824
            __attrs_1809433935824 = _static_1809433453264
            # <Symbol value=<DEFAULT> at 1a54520f4d0> -> __default_1809433923792
            __default_1809433923792 = _DEFAULT_MARKER
            # <Value 'context/@@authenticator/authenticator' (33:37)> -> __cache_1809433921232
            __token = 1000
            try:
                __zt_tmp = __attrs_1809433935824
            except NameError:
                __zt_tmp = None
            __cache_1809433921232 = _static_1809393670032('path', 'context/@@authenticator/authenticator', econtext=econtext)(_static_1809393664784(econtext, __zt_tmp))
            # <BinOp left=<Value 'context/@@authenticator/authenticator' (33:37)> op=<class 'chameleon.nodes.Is'> right=<Symbol value=<DEFAULT> at 1a54520f4d0> at 1a54aaab410> -> __condition
            __expression = __cache_1809433921232
            # <Symbol value=<DEFAULT> at 1a54520f4d0> -> __value
            __value = _DEFAULT_MARKER
            __condition = __expression is __value
            if __condition:
                # <span ... (0:0)
                # --------------------------------------------------------
                __append('<span></span>')
            else:
                __content = __cache_1809433921232
                __content = __convert(__content)
                if __content is not None:
                    __append(__content)
            __append('\n        ')
            # <Static value=Dict(keys=[Constant(value='name', kind=None), ..., Constant(value='value', kind=None)], values=[Constant(value='manager', kind=None), ..., Constant(value='view/manager_name', kind=None)]) name=None at 1a54aaa8e90> -> __attrs_1809433922448
            __attrs_1809433922448 = _static_1809432137296
            # <input ... (0:0)
            # --------------------------------------------------------
            __append('<input name="manager" type="hidden"')
            # <Symbol value=<DEFAULT> at 1a54520f4d0> -> __default_1809433930448
            __default_1809433930448 = _DEFAULT_MARKER
            # <Substitution 'view/manager_name' (37:23)> -> __attr_value
            __token = 1161
            try:
                __zt_tmp = __attrs_1809433922448
            except NameError:
                __zt_tmp = None
            __attr_value = _static_1809432265680('path', 'view/manager_name', econtext=econtext)(_static_1809432279504(econtext, __zt_tmp))
            __attr_value = __quote(__attr_value, '"', '&quot;', None, _DEFAULT_MARKER)
            if __attr_value is not None:
                __append(' value="%s"' % __attr_value)
            __append(' />\n\n        ')
            # <Static value=Dict(keys=[Constant(value='class', kind=None)], values=[Constant(value='mb-3 portlet-group', kind=None)]) name=None at 1a54aaab0d0> -> __attrs_1809433934544
            __attrs_1809433934544 = _static_1809432275856
            __backup_status_1809434038080 = get('status', __marker)
            # <Value 'view/context_blacklist_status' (43:22)> -> __value
            __token = 1297
            try:
                __zt_tmp = __attrs_1809433934544
            except NameError:
                __zt_tmp = None
            __value = _static_1809403693136('path', 'view/context_blacklist_status', econtext=econtext)(_static_1809435125456(econtext, __zt_tmp))
            econtext['status'] = __value
            # <div ... (0:0)
            # --------------------------------------------------------
            __append('<div class="mb-3 portlet-group" >\n\n          ')
            # <Static value=Dict(keys=[Constant(value='class', kind=None)], values=[Constant(value='mb-3', kind=None)]) name=None at 1a54aaab810> -> __attrs_1809392272720
            __attrs_1809392272720 = _static_1809435122256
            # <div ... (0:0)
            # --------------------------------------------------------
            __append('<div class="mb-3">\n\n            ')
            # <Static value=Dict(keys=[], values=[]) name=None at 1a54526ff50> -> __attrs_1809425774352
            __attrs_1809425774352 = _static_1809431783952
            # <label ... (0:0)
            # --------------------------------------------------------
            __append('<label>')
            __stream_1809399649104 = []
            __append_1809399649104 = __stream_1809399649104.append
            __append_1809399649104('Parent portlets:')
            __msgid_1809399649104 = __re_whitespace(''.join(__stream_1809399649104)).strip()
            __append(translate('label_portlets_parent_folders', mapping=None, default=__msgid_1809399649104, domain=__i18n_domain, context=__i18n_context, target_language=target_language))
            __append('</label>\n\n            ')
            # <Static value=Dict(keys=[Constant(value='class', kind=None), ..., Constant(value='size', kind=None)], values=[Constant(value='form-select', kind=None), ..., Constant(value='1', kind=None)]) name=None at 1a54a2a8790> -> __attrs_1809425536016
            __attrs_1809425536016 = _static_1809388207312
            # <select ... (0:0)
            # --------------------------------------------------------
            __append('<select class="form-select" name="context_status:int" size="1" >\n\n              ')
            # <Static value=Dict(keys=[Constant(value='value', kind=None), Constant(value='selected', kind=None)], values=[Constant(value='1', kind=None), Constant(value="python:status == True and 'selected' or None", kind=None)]) name=None at 1a54a5811d0> -> __attrs_1809456217360
            __attrs_1809456217360 = _static_1809434048848
            # <option ... (0:0)
            # --------------------------------------------------------
            __append('<option value="1"')
            # <Symbol value=<DEFAULT> at 1a54520f4d0> -> __default_1809456202704
            __default_1809456202704 = _DEFAULT_MARKER
            # <Boolean "python:status == True and 'selected' or None" (58:33)> -> __attr_selected
            __token = 1710
            try:
                __zt_tmp = __attrs_1809456217360
            except NameError:
                __zt_tmp = None
            __attr_selected = _static_1809434727440('python', "status == True and 'selected' or None", econtext=econtext)(_static_1809434737552(econtext, __zt_tmp))
            if __attr_selected is _DEFAULT_MARKER:
                __attr_selected = None
            elif __attr_selected:
                __attr_selected = 'selected'
            else:
                __attr_selected = None
            if __attr_selected is not None:
                __append(' selected="%s"' % __attr_selected)
            __append(' >')
            __stream_1809425544848 = []
            __append_1809425544848 = __stream_1809425544848.append
            __append_1809425544848('\n                    Block\n              ')
            __msgid_1809425544848 = __re_whitespace(''.join(__stream_1809425544848)).strip()
            __append(translate('portlets_value_block', mapping=None, default=__msgid_1809425544848, domain=__i18n_domain, context=__i18n_context, target_language=target_language))
            __append('</option>\n\n              ')
            # <Static value=Dict(keys=[Constant(value='value', kind=None), Constant(value='selected', kind=None)], values=[Constant(value='-1', kind=None), Constant(value="python:(status == False or status == None) and 'selected' or None", kind=None)]) name=None at 1a54bfe3d10> -> __attrs_1809456181520
            __attrs_1809456181520 = _static_1809434045456
            # <option ... (0:0)
            # --------------------------------------------------------
            __append('<option value="-1"')
            # <Symbol value=<DEFAULT> at 1a54520f4d0> -> __default_1809456180560
            __default_1809456180560 = _DEFAULT_MARKER
            # <Boolean "python:(status == False or status == None) and 'selected' or None" (67:33)> -> __attr_selected
            __token = 2012
            try:
                __zt_tmp = __attrs_1809456181520
            except NameError:
                __zt_tmp = None
            __attr_selected = _static_1809434107472('python', "(status == False or status == None) and 'selected' or None", econtext=econtext)(_static_1809433052944(econtext, __zt_tmp))
            if __attr_selected is _DEFAULT_MARKER:
                __attr_selected = None
            elif __attr_selected:
                __attr_selected = 'selected'
            else:
                __attr_selected = None
            if __attr_selected is not None:
                __append(' selected="%s"' % __attr_selected)
            __append(' >')
            __stream_1809456182608 = []
            __append_1809456182608 = __stream_1809456182608.append
            __append_1809456182608('\n                    Do not block\n              ')
            __msgid_1809456182608 = __re_whitespace(''.join(__stream_1809456182608)).strip()
            __append(translate('portlets_value_show', mapping=None, default=__msgid_1809456182608, domain=__i18n_domain, context=__i18n_context, target_language=target_language))
            __append('</option>\n\n            </select>\n\n          </div>\n\n          ')
            # <Static value=Dict(keys=[], values=[]) name=None at 1a54526ff50> -> __attrs_1809456183120
            __attrs_1809456183120 = _static_1809456330832
            __backup_portlets_1809425675392 = get('portlets', __marker)
            # <Value 'view/inherited_portlets' (79:32)> -> __value
            __token = 2339
            try:
                __zt_tmp = __attrs_1809456183120
            except NameError:
                __zt_tmp = None
            __value = _static_1809434176400('path', 'view/inherited_portlets', econtext=econtext)(_static_1809434175888(econtext, __zt_tmp))
            econtext['portlets'] = __value
            # <Value 'portlets' (81:32)> -> __condition
            __token = 2419
            try:
                __zt_tmp = __attrs_1809456183120
            except NameError:
                __zt_tmp = None
            __condition = _static_1809426604432('path', 'portlets', econtext=econtext)(_static_1809364445392(econtext, __zt_tmp))
            if __condition:
                __append('\n\n            ')
                # <Static value=Dict(keys=[Constant(value='class', kind=None)], values=[Constant(value="python:status and 'managedPortlet inheritedPortlet blockedPortlet list-group' or 'managedPortlet inheritedPortlet list-group'", kind=None)]) name=None at 1a54c088890> -> __attrs_1809456872336
                __attrs_1809456872336 = _static_1809434044176
                __backup_portlet_1809364116736 = get('portlet', __marker)
                # <Value 'portlets' (84:37)> -> __iterator
                __token = 2479
                try:
                    __zt_tmp = __attrs_1809456872336
                except NameError:
                    __zt_tmp = None
                __iterator = _static_1809432345168('path', 'portlets', econtext=econtext)(_static_1809432339344(econtext, __zt_tmp))
                __iterator, ____index_1809456871184 = getname('repeat')('portlet', __iterator)
                econtext['portlet'] = None
                for __item in __iterator:
                    econtext['portlet'] = __item
                    # <div ... (0:0)
                    # --------------------------------------------------------
                    __append('<div')
                    # <Symbol value=<DEFAULT> at 1a54520f4d0> -> __default_1809456869328
                    __default_1809456869328 = _DEFAULT_MARKER
                    # <Substitution "python:status and 'managedPortlet inheritedPortlet blockedPortlet list-group' or 'managedPortlet inheritedPortlet list-group'" (86:25)> -> __attr_class
                    __token = 2548
                    try:
                        __zt_tmp = __attrs_1809456872336
                    except NameError:
                        __zt_tmp = None
                    __attr_class = _static_1809428686864('python', "status and 'managedPortlet inheritedPortlet blockedPortlet list-group' or 'managedPortlet inheritedPortlet list-group'", econtext=econtext)(_static_1809428691536(econtext, __zt_tmp))
                    __attr_class = __quote(__attr_class, '"', '&quot;', None, _DEFAULT_MARKER)
                    if __attr_class is not None:
                        __append(' class="%s"' % __attr_class)
                    __append(' >\n\n              ')
                    # <Static value=Dict(keys=[Constant(value='class', kind=None)], values=[Constant(value='list-group-item', kind=None)]) name=None at 1a54c08b190> -> __attrs_1809456867152
                    __attrs_1809456867152 = _static_1809458481936
                    # <div ... (0:0)
                    # --------------------------------------------------------
                    __append('<div class="list-group-item">\n\n                ')
                    # <Static value=Dict(keys=[Constant(value='href', kind=None)], values=[Constant(value='string:${portlet/editview}?referer=${view/url_quote_referer}', kind=None)]) name=None at 1a54c089050> -> __attrs_1809434291344
                    __attrs_1809434291344 = _static_1809458486800
                    # <Negate value=<Value 'not:portlet/editview' (93:33)> at 1a54ab038d0> -> __cache_1809434294480
                    # <Value 'not:portlet/editview' (93:33)> -> __cache_1809434294480
                    __token = 2834
                    try:
                        __zt_tmp = __attrs_1809434291344
                    except NameError:
                        __zt_tmp = None
                    __cache_1809434294480 = _static_1809458038160('not', 'portlet/editview', econtext=econtext)(_static_1809457304400(econtext, __zt_tmp))
                    __cache_1809434294480 = not __cache_1809434294480
                    __condition = __cache_1809434294480
                    if __condition:
                        # <a ... (0:0)
                        # --------------------------------------------------------
                        __append('<a')
                        # <Symbol value=<DEFAULT> at 1a54520f4d0> -> __default_1809456858704
                        __default_1809456858704 = _DEFAULT_MARKER
                        # <Substitution 'string:${portlet/editview}?referer=${view/url_quote_referer}' (95:26)> -> __attr_href
                        __token = 2918
                        try:
                            __zt_tmp = __attrs_1809434291344
                        except NameError:
                            __zt_tmp = None
                        __attr_href = _static_1809435060624('string', '${portlet/editview}?referer=${view/url_quote_referer}', econtext=econtext)(_static_1809435062672(econtext, __zt_tmp))
                        __attr_href = __quote(__attr_href, '"', '&quot;', None, _DEFAULT_MARKER)
                        if __attr_href is not None:
                            __append(' href="%s"' % __attr_href)
                        __append(' >')
                    # <Symbol value=<DEFAULT> at 1a54520f4d0> -> __default_1809456862096
                    __default_1809456862096 = _DEFAULT_MARKER
                    # <Value 'portlet/title' (92:32)> -> __cache_1809456865808
                    __token = 2786
                    try:
                        __zt_tmp = __attrs_1809434291344
                    except NameError:
                        __zt_tmp = None
                    __cache_1809456865808 = _static_1809433991760('path', 'portlet/title', econtext=econtext)(_static_1809433993296(econtext, __zt_tmp))
                    # <BinOp left=<Value 'portlet/title' (92:32)> op=<class 'chameleon.nodes.Is'> right=<Symbol value=<DEFAULT> at 1a54520f4d0> at 1a54c08a150> -> __condition
                    __expression = __cache_1809456865808
                    # <Symbol value=<DEFAULT> at 1a54520f4d0> -> __value
                    __value = _DEFAULT_MARKER
                    __condition = __expression is __value
                    if __condition:
                        pass
                    else:
                        __content = __cache_1809456865808
                        __content = __quote(__content, None, '\xad', None, None)
                        if __content is not None:
                            __append(__content)
                    __condition = __cache_1809434294480
                    if __condition:
                        __append('</a>')
                    __append('\n\n                ')
                    # <Static value=Dict(keys=[Constant(value='class', kind=None), Constant(value='title', kind=None)], values=[Constant(value='portletBlockedMessage hiddenStructure', kind=None), Constant(value='Blocked', kind=None)]) name=None at 1a54ab02390> -> __attrs_1809434294288
                    __attrs_1809434294288 = _static_1809428378192
                    # <Value 'status' (101:37)> -> __condition
                    __token = 3167
                    try:
                        __zt_tmp = __attrs_1809434294288
                    except NameError:
                        __zt_tmp = None
                    __condition = _static_1809428379088('path', 'status', econtext=econtext)(_static_1809433988176(econtext, __zt_tmp))
                    if __condition:
                        # <span ... (0:0)
                        # --------------------------------------------------------
                        __append('<span class="portletBlockedMessage hiddenStructure"')
                        # <Symbol value=<DEFAULT> at 1a54520f4d0> -> __default_1809434290384
                        __default_1809434290384 = _DEFAULT_MARKER
                        # <Translate msgid='title_portlet_blocked' node=Constant(value='Blocked', kind=None) at 1a54ab02990> -> __attr_title
                        __attr_title = 'Blocked'
                        __attr_title = translate('title_portlet_blocked', default=__attr_title, domain=__i18n_domain, context=__i18n_context, target_language=getname('target_language'))
                        if __attr_title is not None:
                            __append(' title="%s"' % __attr_title)
                        __append(' >')
                        __stream_1809434294032 = []
                        __append_1809434294032 = __stream_1809434294032.append
                        __append_1809434294032('\n                  (Blocked)\n                ')
                        __msgid_1809434294032 = __re_whitespace(''.join(__stream_1809434294032)).strip()
                        __append(translate('label_portlet_blocked', mapping=None, default=__msgid_1809434294032, domain=__i18n_domain, context=__i18n_context, target_language=target_language))
                        __append('</span>')
                    __append('\n              </div>\n\n            </div>')
                    ____index_1809456871184 -= 1
                    if ____index_1809456871184 > 0:
                        __append('\n            ')
                if __backup_portlet_1809364116736 is __marker:
                    del econtext['portlet']
                else:
                    econtext['portlet'] = __backup_portlet_1809364116736
                __append('\n          ')
            if __backup_portlets_1809425675392 is __marker:
                del econtext['portlets']
            else:
                econtext['portlets'] = __backup_portlets_1809425675392
            __append('\n\n        </div>')
            if __backup_status_1809434038080 is __marker:
                del econtext['status']
            else:
                econtext['status'] = __backup_status_1809434038080
            __append('\n\n        ')
            # <Static value=Dict(keys=[Constant(value='class', kind=None)], values=[Constant(value='mb-3 portlet-group', kind=None)]) name=None at 1a54ab02910> -> __attrs_1809434288848
            __attrs_1809434288848 = _static_1809432344464
            __backup_status_1809425676352 = get('status', __marker)
            # <Value 'view/group_blacklist_status' (116:22)> -> __value
            __token = 3544
            try:
                __zt_tmp = __attrs_1809434288848
            except NameError:
                __zt_tmp = None
            __value = _static_1809427099152('path', 'view/group_blacklist_status', econtext=econtext)(_static_1809427532944(econtext, __zt_tmp))
            econtext['status'] = __value
            # <div ... (0:0)
            # --------------------------------------------------------
            __append('<div class="mb-3 portlet-group" >\n\n          ')
            # <Static value=Dict(keys=[], values=[]) name=None at 1a54526ff50> -> __attrs_1809386059472
            __attrs_1809386059472 = _static_1809427536848
            # <label ... (0:0)
            # --------------------------------------------------------
            __append('<label>')
            __stream_1809434286800 = []
            __append_1809434286800 = __stream_1809434286800.append
            __append_1809434286800('Group portlets:')
            __msgid_1809434286800 = __re_whitespace(''.join(__stream_1809434286800)).strip()
            __append(translate('label_portlets_group_portlets', mapping=None, default=__msgid_1809434286800, domain=__i18n_domain, context=__i18n_context, target_language=target_language))
            __append('</label>\n\n          ')
            # <Static value=Dict(keys=[Constant(value='class', kind=None), ..., Constant(value='size', kind=None)], values=[Constant(value='form-select', kind=None), ..., Constant(value='1', kind=None)]) name=None at 1a54a7f5c10> -> __attrs_1809431094288
            __attrs_1809431094288 = _static_1809364893456
            # <select ... (0:0)
            # --------------------------------------------------------
            __append('<select class="form-select" name="group_status:int" size="1" >\n\n            ')
            # <Static value=Dict(keys=[Constant(value='value', kind=None), Constant(value='selected', kind=None)], values=[Constant(value='0', kind=None), Constant(value="python:status == None and 'selected' or None", kind=None)]) name=None at 1a54a7f6b50> -> __attrs_1809431101072
            __attrs_1809431101072 = _static_1809427183888
            # <option ... (0:0)
            # --------------------------------------------------------
            __append('<option value="0"')
            # <Symbol value=<DEFAULT> at 1a54520f4d0> -> __default_1809431091152
            __default_1809431091152 = _DEFAULT_MARKER
            # <Boolean "python:status == None and 'selected' or None" (129:31)> -> __attr_selected
            __token = 3906
            try:
                __zt_tmp = __attrs_1809431101072
            except NameError:
                __zt_tmp = None
            __attr_selected = _static_1809457022352('python', "status == None and 'selected' or None", econtext=econtext)(_static_1809457023888(econtext, __zt_tmp))
            if __attr_selected is _DEFAULT_MARKER:
                __attr_selected = None
            elif __attr_selected:
                __attr_selected = 'selected'
            else:
                __attr_selected = None
            if __attr_selected is not None:
                __append(' selected="%s"' % __attr_selected)
            __append(' >')
            __stream_1809431099536 = []
            __append_1809431099536 = __stream_1809431099536.append
            __append_1809431099536('\n                  Use parent settings\n            ')
            __msgid_1809431099536 = __re_whitespace(''.join(__stream_1809431099536)).strip()
            __append(translate('portlets_value_use_parent', mapping=None, default=__msgid_1809431099536, domain=__i18n_domain, context=__i18n_context, target_language=target_language))
            __append('</option>\n\n            ')
            # <Static value=Dict(keys=[Constant(value='value', kind=None), Constant(value='selected', kind=None)], values=[Constant(value='1', kind=None), Constant(value="python:status == True and 'selected' or None", kind=None)]) name=None at 1a54a471110> -> __attrs_1809427399120
            __attrs_1809427399120 = _static_1809457091792
            # <option ... (0:0)
            # --------------------------------------------------------
            __append('<option value="1"')
            # <Symbol value=<DEFAULT> at 1a54520f4d0> -> __default_1809427404624
            __default_1809427404624 = _DEFAULT_MARKER
            # <Boolean "python:status == True and 'selected' or None" (138:31)> -> __attr_selected
            __token = 4210
            try:
                __zt_tmp = __attrs_1809427399120
            except NameError:
                __zt_tmp = None
            __attr_selected = _static_1809456958864('python', "status == True and 'selected' or None", econtext=econtext)(_static_1809456961232(econtext, __zt_tmp))
            if __attr_selected is _DEFAULT_MARKER:
                __attr_selected = None
            elif __attr_selected:
                __attr_selected = 'selected'
            else:
                __attr_selected = None
            if __attr_selected is not None:
                __append(' selected="%s"' % __attr_selected)
            __append(' >')
            __stream_1809399513360 = []
            __append_1809399513360 = __stream_1809399513360.append
            __append_1809399513360('\n                  Block\n            ')
            __msgid_1809399513360 = __re_whitespace(''.join(__stream_1809399513360)).strip()
            __append(translate('portlets_value_block', mapping=None, default=__msgid_1809399513360, domain=__i18n_domain, context=__i18n_context, target_language=target_language))
            __append('</option>\n\n            ')
            # <Static value=Dict(keys=[Constant(value='value', kind=None), Constant(value='selected', kind=None)], values=[Constant(value='-1', kind=None), Constant(value="python:status == False and 'selected' or None", kind=None)]) name=None at 1a54a4734d0> -> __attrs_1809427411856
            __attrs_1809427411856 = _static_1809457206288
            # <option ... (0:0)
            # --------------------------------------------------------
            __append('<option value="-1"')
            # <Symbol value=<DEFAULT> at 1a54520f4d0> -> __default_1809427407312
            __default_1809427407312 = _DEFAULT_MARKER
            # <Boolean "python:status == False and 'selected' or None" (147:31)> -> __attr_selected
            __token = 4496
            try:
                __zt_tmp = __attrs_1809427411856
            except NameError:
                __zt_tmp = None
            __attr_selected = _static_1809434981712('python', "status == False and 'selected' or None", econtext=econtext)(_static_1809434975312(econtext, __zt_tmp))
            if __attr_selected is _DEFAULT_MARKER:
                __attr_selected = None
            elif __attr_selected:
                __attr_selected = 'selected'
            else:
                __attr_selected = None
            if __attr_selected is not None:
                __append(' selected="%s"' % __attr_selected)
            __append(' >')
            __stream_1809399652880 = []
            __append_1809399652880 = __stream_1809399652880.append
            __append_1809399652880('\n                  Do not block\n            ')
            __msgid_1809399652880 = __re_whitespace(''.join(__stream_1809399652880)).strip()
            __append(translate('portlets_value_show', mapping=None, default=__msgid_1809399652880, domain=__i18n_domain, context=__i18n_context, target_language=target_language))
            __append('</option>\n\n          </select>\n\n          ')
            # <Static value=Dict(keys=[], values=[]) name=None at 1a54526ff50> -> __attrs_1809425729680
            __attrs_1809425729680 = _static_1809457028304
            __backup_portlets_1809425673472 = get('portlets', __marker)
            # <Value 'view/group_portlets' (157:32)> -> __value
            __token = 4773
            try:
                __zt_tmp = __attrs_1809425729680
            except NameError:
                __zt_tmp = None
            __value = _static_1809427180880('path', 'view/group_portlets', econtext=econtext)(_static_1809364891408(econtext, __zt_tmp))
            econtext['portlets'] = __value
            __backup_status_1809426731328 = get('status', __marker)
            # <Value 'python:view.group_blacklist_status(check_parent=True)' (158:29)> -> __value
            __token = 4823
            try:
                __zt_tmp = __attrs_1809425729680
            except NameError:
                __zt_tmp = None
            __value = _static_1809457344528('python', 'view.group_blacklist_status(check_parent=True)', econtext=econtext)(_static_1809457334480(econtext, __zt_tmp))
            econtext['status'] = __value
            __append('\n\n            ')
            # <Static value=Dict(keys=[Constant(value='class', kind=None)], values=[Constant(value="python:status and 'managedPortlet inheritedPortlet blockedPortlet' or 'managedPortlet inheritedPortlet'", kind=None)]) name=None at 1a548413bd0> -> __attrs_1809434836560
            __attrs_1809434836560 = _static_1809458381328
            __backup_portlet_1809433893632 = get('portlet', __marker)
            # <Value 'portlets' (161:37)> -> __iterator
            __token = 4941
            try:
                __zt_tmp = __attrs_1809434836560
            except NameError:
                __zt_tmp = None
            __iterator = _static_1809427680912('path', 'portlets', econtext=econtext)(_static_1809427682448(econtext, __zt_tmp))
            __iterator, ____index_1809434836432 = getname('repeat')('portlet', __iterator)
            econtext['portlet'] = None
            for __item in __iterator:
                econtext['portlet'] = __item
                # <div ... (0:0)
                # --------------------------------------------------------
                __append('<div')
                # <Symbol value=<DEFAULT> at 1a54520f4d0> -> __default_1809434832464
                __default_1809434832464 = _DEFAULT_MARKER
                # <Substitution "python:status and 'managedPortlet inheritedPortlet blockedPortlet' or 'managedPortlet inheritedPortlet'" (163:25)> -> __attr_class
                __token = 5010
                try:
                    __zt_tmp = __attrs_1809434836560
                except NameError:
                    __zt_tmp = None
                __attr_class = _static_1809434375312('python', "status and 'managedPortlet inheritedPortlet blockedPortlet' or 'managedPortlet inheritedPortlet'", econtext=econtext)(_static_1809404208208(econtext, __zt_tmp))
                __attr_class = __quote(__attr_class, '"', '&quot;', None, _DEFAULT_MARKER)
                if __attr_class is not None:
                    __append(' class="%s"' % __attr_class)
                __append(' >\n\n              ')
                # <Static value=Dict(keys=[Constant(value='class', kind=None)], values=[Constant(value='portletHeader', kind=None)]) name=None at 1a54ab86a90> -> __attrs_1809434831248
                __attrs_1809434831248 = _static_1809431268560
                # <div ... (0:0)
                # --------------------------------------------------------
                __append('<div class="portletHeader">\n\n                ')
                # <Static value=Dict(keys=[Constant(value='href', kind=None)], values=[Constant(value='string:${portlet/editview}?referer=${view/url_quote_referer}', kind=None)]) name=None at 1a54831cdd0> -> __attrs_1809434573648
                __attrs_1809434573648 = _static_1809431275344
                # <Negate value=<Value 'not:portlet/editview' (170:33)> at 1a54ab44090> -> __cache_1809434558608
                # <Value 'not:portlet/editview' (170:33)> -> __cache_1809434558608
                __token = 5272
                try:
                    __zt_tmp = __attrs_1809434573648
                except NameError:
                    __zt_tmp = None
                __cache_1809434558608 = _static_1809389219344('not', 'portlet/editview', econtext=econtext)(_static_1809389215376(econtext, __zt_tmp))
                __cache_1809434558608 = not __cache_1809434558608
                __condition = __cache_1809434558608
                if __condition:
                    # <a ... (0:0)
                    # --------------------------------------------------------
                    __append('<a')
                    # <Symbol value=<DEFAULT> at 1a54520f4d0> -> __default_1809434571152
                    __default_1809434571152 = _DEFAULT_MARKER
                    # <Substitution 'string:${portlet/editview}?referer=${view/url_quote_referer}' (172:26)> -> __attr_href
                    __token = 5356
                    try:
                        __zt_tmp = __attrs_1809434573648
                    except NameError:
                        __zt_tmp = None
                    __attr_href = _static_1809433063952('string', '${portlet/editview}?referer=${view/url_quote_referer}', econtext=econtext)(_static_1809400131664(econtext, __zt_tmp))
                    __attr_href = __quote(__attr_href, '"', '&quot;', None, _DEFAULT_MARKER)
                    if __attr_href is not None:
                        __append(' href="%s"' % __attr_href)
                    __append(' >')
                # <Symbol value=<DEFAULT> at 1a54520f4d0> -> __default_1809434828880
                __default_1809434828880 = _DEFAULT_MARKER
                # <Value 'portlet/title' (169:32)> -> __cache_1809434829968
                __token = 5224
                try:
                    __zt_tmp = __attrs_1809434573648
                except NameError:
                    __zt_tmp = None
                __cache_1809434829968 = _static_1809433241360('path', 'portlet/title', econtext=econtext)(_static_1809457987984(econtext, __zt_tmp))
                # <BinOp left=<Value 'portlet/title' (169:32)> op=<class 'chameleon.nodes.Is'> right=<Symbol value=<DEFAULT> at 1a54520f4d0> at 1a54ab86210> -> __condition
                __expression = __cache_1809434829968
                # <Symbol value=<DEFAULT> at 1a54520f4d0> -> __value
                __value = _DEFAULT_MARKER
                __condition = __expression is __value
                if __condition:
                    pass
                else:
                    __content = __cache_1809434829968
                    __content = __quote(__content, None, '\xad', None, None)
                    if __content is not None:
                        __append(__content)
                __condition = __cache_1809434558608
                if __condition:
                    __append('</a>')
                __append('\n\n                ')
                # <Static value=Dict(keys=[Constant(value='class', kind=None), Constant(value='title', kind=None)], values=[Constant(value='portletBlockedMessage hiddenStructure', kind=None), Constant(value='Blocked', kind=None)]) name=None at 1a54ab46310> -> __attrs_1809433605712
                __attrs_1809433605712 = _static_1809458003600
                # <Value 'status' (178:37)> -> __condition
                __token = 5605
                try:
                    __zt_tmp = __attrs_1809433605712
                except NameError:
                    __zt_tmp = None
                __condition = _static_1809457902992('path', 'status', econtext=econtext)(_static_1809433397584(econtext, __zt_tmp))
                if __condition:
                    # <span ... (0:0)
                    # --------------------------------------------------------
                    __append('<span class="portletBlockedMessage hiddenStructure"')
                    # <Symbol value=<DEFAULT> at 1a54520f4d0> -> __default_1809434570960
                    __default_1809434570960 = _DEFAULT_MARKER
                    # <Translate msgid='title_portlet_blocked' node=Constant(value='Blocked', kind=None) at 1a54ab47d90> -> __attr_title
                    __attr_title = 'Blocked'
                    __attr_title = translate('title_portlet_blocked', default=__attr_title, domain=__i18n_domain, context=__i18n_context, target_language=getname('target_language'))
                    if __attr_title is not None:
                        __append(' title="%s"' % __attr_title)
                    __append(' >')
                    __stream_1809434574480 = []
                    __append_1809434574480 = __stream_1809434574480.append
                    __append_1809434574480('\n                  (Blocked)\n                ')
                    __msgid_1809434574480 = __re_whitespace(''.join(__stream_1809434574480)).strip()
                    __append(translate('label_portlet_blocked', mapping=None, default=__msgid_1809434574480, domain=__i18n_domain, context=__i18n_context, target_language=target_language))
                    __append('</span>')
                __append('\n\n              </div>\n\n            </div>')
                ____index_1809434836432 -= 1
                if ____index_1809434836432 > 0:
                    __append('\n            ')
            if __backup_portlet_1809433893632 is __marker:
                del econtext['portlet']
            else:
                econtext['portlet'] = __backup_portlet_1809433893632
            __append('\n\n          ')
            if __backup_status_1809426731328 is __marker:
                del econtext['status']
            else:
                econtext['status'] = __backup_status_1809426731328
            if __backup_portlets_1809425673472 is __marker:
                del econtext['portlets']
            else:
                econtext['portlets'] = __backup_portlets_1809425673472
            __append('\n\n        </div>')
            if __backup_status_1809425676352 is __marker:
                del econtext['status']
            else:
                econtext['status'] = __backup_status_1809425676352
            __append('\n\n\n        ')
            # <Static value=Dict(keys=[Constant(value='class', kind=None)], values=[Constant(value='mb-3 portlet-group', kind=None)]) name=None at 1a54a5831d0> -> __attrs_1809433595408
            __attrs_1809433595408 = _static_1809364448400
            __backup_status_1809435754432 = get('status', __marker)
            # <Value 'view/content_type_blacklist_status' (196:22)> -> __value
            __token = 5985
            try:
                __zt_tmp = __attrs_1809433595408
            except NameError:
                __zt_tmp = None
            __value = _static_1809456971344('path', 'view/content_type_blacklist_status', econtext=econtext)(_static_1809459097424(econtext, __zt_tmp))
            econtext['status'] = __value
            # <div ... (0:0)
            # --------------------------------------------------------
            __append('<div class="mb-3 portlet-group" >\n\n          ')
            # <Static value=Dict(keys=[], values=[]) name=None at 1a54526ff50> -> __attrs_1809433596560
            __attrs_1809433596560 = _static_1809459093840
            # <label ... (0:0)
            # --------------------------------------------------------
            __append('<label>')
            __stream_1809433599504 = []
            __append_1809433599504 = __stream_1809433599504.append
            __append_1809433599504('Content type portlets:')
            __msgid_1809433599504 = __re_whitespace(''.join(__stream_1809433599504)).strip()
            __append(translate('label_portlets_content_type_portlets', mapping=None, default=__msgid_1809433599504, domain=__i18n_domain, context=__i18n_context, target_language=target_language))
            __append('</label>\n\n          ')
            # <Static value=Dict(keys=[Constant(value='class', kind=None), ..., Constant(value='size', kind=None)], values=[Constant(value='form-select', kind=None), ..., Constant(value='1', kind=None)]) name=None at 1a54aa58fd0> -> __attrs_1809433792144
            __attrs_1809433792144 = _static_1809459848848
            # <select ... (0:0)
            # --------------------------------------------------------
            __append('<select class="form-select" name="content_type_status:int" size="1" >\n\n            ')
            # <Static value=Dict(keys=[Constant(value='value', kind=None), Constant(value='selected', kind=None)], values=[Constant(value='0', kind=None), Constant(value="python:status == None and 'selected' or None", kind=None)]) name=None at 1a54aa8bf90> -> __attrs_1809433789264
            __attrs_1809433789264 = _static_1809459698192
            # <option ... (0:0)
            # --------------------------------------------------------
            __append('<option value="0"')
            # <Symbol value=<DEFAULT> at 1a54520f4d0> -> __default_1809433791312
            __default_1809433791312 = _DEFAULT_MARKER
            # <Boolean "python:status == None and 'selected' or None" (209:31)> -> __attr_selected
            __token = 6375
            try:
                __zt_tmp = __attrs_1809433789264
            except NameError:
                __zt_tmp = None
            __attr_selected = _static_1809456629904('python', "status == None and 'selected' or None", econtext=econtext)(_static_1809433713488(econtext, __zt_tmp))
            if __attr_selected is _DEFAULT_MARKER:
                __attr_selected = None
            elif __attr_selected:
                __attr_selected = 'selected'
            else:
                __attr_selected = None
            if __attr_selected is not None:
                __append(' selected="%s"' % __attr_selected)
            __append(' >')
            __stream_1809433790416 = []
            __append_1809433790416 = __stream_1809433790416.append
            __append_1809433790416('\n                  Use parent settings\n            ')
            __msgid_1809433790416 = __re_whitespace(''.join(__stream_1809433790416)).strip()
            __append(translate('portlets_value_use_parent', mapping=None, default=__msgid_1809433790416, domain=__i18n_domain, context=__i18n_context, target_language=target_language))
            __append('</option>\n\n            ')
            # <Static value=Dict(keys=[Constant(value='value', kind=None), Constant(value='selected', kind=None)], values=[Constant(value='1', kind=None), Constant(value="python:status == True and 'selected' or None", kind=None)]) name=None at 1a547fa30d0> -> __attrs_1809388811216
            __attrs_1809388811216 = _static_1809459795920
            # <option ... (0:0)
            # --------------------------------------------------------
            __append('<option value="1"')
            # <Symbol value=<DEFAULT> at 1a54520f4d0> -> __default_1809388809936
            __default_1809388809936 = _DEFAULT_MARKER
            # <Boolean "python:status == True and 'selected' or None" (218:31)> -> __attr_selected
            __token = 6679
            try:
                __zt_tmp = __attrs_1809388811216
            except NameError:
                __zt_tmp = None
            __attr_selected = _static_1809458614032('python', "status == True and 'selected' or None", econtext=econtext)(_static_1809458621776(econtext, __zt_tmp))
            if __attr_selected is _DEFAULT_MARKER:
                __attr_selected = None
            elif __attr_selected:
                __attr_selected = 'selected'
            else:
                __attr_selected = None
            if __attr_selected is not None:
                __append(' selected="%s"' % __attr_selected)
            __append(' >')
            __stream_1809434291280 = []
            __append_1809434291280 = __stream_1809434291280.append
            __append_1809434291280('\n                  Block\n            ')
            __msgid_1809434291280 = __re_whitespace(''.join(__stream_1809434291280)).strip()
            __append(translate('portlets_value_block', mapping=None, default=__msgid_1809434291280, domain=__i18n_domain, context=__i18n_context, target_language=target_language))
            __append('</option>\n\n            ')
            # <Static value=Dict(keys=[Constant(value='value', kind=None), Constant(value='selected', kind=None)], values=[Constant(value='-1', kind=None), Constant(value="python:status == False and 'selected' or None", kind=None)]) name=None at 1a547fa1650> -> __attrs_1809388800592
            __attrs_1809388800592 = _static_1809457536208
            # <option ... (0:0)
            # --------------------------------------------------------
            __append('<option value="-1"')
            # <Symbol value=<DEFAULT> at 1a54520f4d0> -> __default_1809388798416
            __default_1809388798416 = _DEFAULT_MARKER
            # <Boolean "python:status == False and 'selected' or None" (227:31)> -> __attr_selected
            __token = 6965
            try:
                __zt_tmp = __attrs_1809388800592
            except NameError:
                __zt_tmp = None
            __attr_selected = _static_1809457257744('python', "status == False and 'selected' or None", econtext=econtext)(_static_1809457259408(econtext, __zt_tmp))
            if __attr_selected is _DEFAULT_MARKER:
                __attr_selected = None
            elif __attr_selected:
                __attr_selected = 'selected'
            else:
                __attr_selected = None
            if __attr_selected is not None:
                __append(' selected="%s"' % __attr_selected)
            __append(' >')
            __stream_1809388809232 = []
            __append_1809388809232 = __stream_1809388809232.append
            __append_1809388809232('\n                  Do not block\n            ')
            __msgid_1809388809232 = __re_whitespace(''.join(__stream_1809388809232)).strip()
            __append(translate('portlets_value_show', mapping=None, default=__msgid_1809388809232, domain=__i18n_domain, context=__i18n_context, target_language=target_language))
            __append('</option>\n          </select>\n\n          ')
            # <Static value=Dict(keys=[], values=[]) name=None at 1a54526ff50> -> __attrs_1809434677200
            __attrs_1809434677200 = _static_1809459696400
            __backup_portlets_1809399648256 = get('portlets', __marker)
            # <Value 'view/content_type_portlets' (236:32)> -> __value
            __token = 7241
            try:
                __zt_tmp = __attrs_1809434677200
            except NameError:
                __zt_tmp = None
            __value = _static_1809456040976('path', 'view/content_type_portlets', econtext=econtext)(_static_1809456045776(econtext, __zt_tmp))
            econtext['portlets'] = __value
            __backup_status_1809433603456 = get('status', __marker)
            # <Value 'python:view.content_type_blacklist_status(check_parent=True)' (237:29)> -> __value
            __token = 7298
            try:
                __zt_tmp = __attrs_1809434677200
            except NameError:
                __zt_tmp = None
            __value = _static_1809456053072('python', 'view.content_type_blacklist_status(check_parent=True)', econtext=econtext)(_static_1809457751568(econtext, __zt_tmp))
            econtext['status'] = __value
            __append('\n\n            ')
            # <Static value=Dict(keys=[Constant(value='class', kind=None)], values=[Constant(value="python:status and 'managedPortlet inheritedPortlet blockedPortlet' or 'managedPortlet inheritedPortlet'", kind=None)]) name=None at 1a54ab61790> -> __attrs_1809434687440
            __attrs_1809434687440 = _static_1809427614224
            __backup_portlet_1809434830528 = get('portlet', __marker)
            # <Value 'portlets' (240:37)> -> __iterator
            __token = 7423
            try:
                __zt_tmp = __attrs_1809434687440
            except NameError:
                __zt_tmp = None
            __iterator = _static_1809459798992('path', 'portlets', econtext=econtext)(_static_1809459801744(econtext, __zt_tmp))
            __iterator, ____index_1809434686032 = getname('repeat')('portlet', __iterator)
            econtext['portlet'] = None
            for __item in __iterator:
                econtext['portlet'] = __item
                # <div ... (0:0)
                # --------------------------------------------------------
                __append('<div')
                # <Symbol value=<DEFAULT> at 1a54520f4d0> -> __default_1809434687824
                __default_1809434687824 = _DEFAULT_MARKER
                # <Substitution "python:status and 'managedPortlet inheritedPortlet blockedPortlet' or 'managedPortlet inheritedPortlet'" (242:25)> -> __attr_class
                __token = 7492
                try:
                    __zt_tmp = __attrs_1809434687440
                except NameError:
                    __zt_tmp = None
                __attr_class = _static_1809458715344('python', "status and 'managedPortlet inheritedPortlet blockedPortlet' or 'managedPortlet inheritedPortlet'", econtext=econtext)(_static_1809458719184(econtext, __zt_tmp))
                __attr_class = __quote(__attr_class, '"', '&quot;', None, _DEFAULT_MARKER)
                if __attr_class is not None:
                    __append(' class="%s"' % __attr_class)
                __append(' >\n              ')
                # <Static value=Dict(keys=[Constant(value='class', kind=None)], values=[Constant(value='portletHeader', kind=None)]) name=None at 1a54ab61b50> -> __attrs_1809434677904
                __attrs_1809434677904 = _static_1809460119440
                # <div ... (0:0)
                # --------------------------------------------------------
                __append('<div class="portletHeader">\n                ')
                # <Static value=Dict(keys=[Constant(value='href', kind=None)], values=[Constant(value='string:${portlet/editview}?referer=${view/url_quote_referer}', kind=None)]) name=None at 1a54ab60b10> -> __attrs_1809435171408
                __attrs_1809435171408 = _static_1809460126160
                # <Negate value=<Value 'not:portlet/editview' (247:33)> at 1a54abd9890> -> __cache_1809435170960
                # <Value 'not:portlet/editview' (247:33)> -> __cache_1809435170960
                __token = 7752
                try:
                    __zt_tmp = __attrs_1809435171408
                except NameError:
                    __zt_tmp = None
                __cache_1809435170960 = _static_1809455956688('not', 'portlet/editview', econtext=econtext)(_static_1809455963984(econtext, __zt_tmp))
                __cache_1809435170960 = not __cache_1809435170960
                __condition = __cache_1809435170960
                if __condition:
                    # <a ... (0:0)
                    # --------------------------------------------------------
                    __append('<a')
                    # <Symbol value=<DEFAULT> at 1a54520f4d0> -> __default_1809435172176
                    __default_1809435172176 = _DEFAULT_MARKER
                    # <Substitution 'string:${portlet/editview}?referer=${view/url_quote_referer}' (249:26)> -> __attr_href
                    __token = 7836
                    try:
                        __zt_tmp = __attrs_1809435171408
                    except NameError:
                        __zt_tmp = None
                    __attr_href = _static_1809460087376('string', '${portlet/editview}?referer=${view/url_quote_referer}', econtext=econtext)(_static_1809460086352(econtext, __zt_tmp))
                    __attr_href = __quote(__attr_href, '"', '&quot;', None, _DEFAULT_MARKER)
                    if __attr_href is not None:
                        __append(' href="%s"' % __attr_href)
                    __append(' >')
                # <Symbol value=<DEFAULT> at 1a54520f4d0> -> __default_1809434677008
                __default_1809434677008 = _DEFAULT_MARKER
                # <Value 'portlet/title' (246:32)> -> __cache_1809434676496
                __token = 7704
                try:
                    __zt_tmp = __attrs_1809435171408
                except NameError:
                    __zt_tmp = None
                __cache_1809434676496 = _static_1809462240848('path', 'portlet/title', econtext=econtext)(_static_1809462244176(econtext, __zt_tmp))
                # <BinOp left=<Value 'portlet/title' (246:32)> op=<class 'chameleon.nodes.Is'> right=<Symbol value=<DEFAULT> at 1a54520f4d0> at 1a54ab61410> -> __condition
                __expression = __cache_1809434676496
                # <Symbol value=<DEFAULT> at 1a54520f4d0> -> __value
                __value = _DEFAULT_MARKER
                __condition = __expression is __value
                if __condition:
                    pass
                else:
                    __content = __cache_1809434676496
                    __content = __quote(__content, None, '\xad', None, None)
                    if __content is not None:
                        __append(__content)
                __condition = __cache_1809435170960
                if __condition:
                    __append('</a>')
                __append('\n\n                ')
                # <Static value=Dict(keys=[Constant(value='class', kind=None), Constant(value='title', kind=None)], values=[Constant(value='portletBlockedMessage hiddenStructure', kind=None), Constant(value='Blocked', kind=None)]) name=None at 1a54abd8350> -> __attrs_1809458220432
                __attrs_1809458220432 = _static_1809460898256
                # <Value 'status' (255:37)> -> __condition
                __token = 8085
                try:
                    __zt_tmp = __attrs_1809458220432
                except NameError:
                    __zt_tmp = None
                __condition = _static_1809462325712('path', 'status', econtext=econtext)(_static_1809458793872(econtext, __zt_tmp))
                if __condition:
                    # <span ... (0:0)
                    # --------------------------------------------------------
                    __append('<span class="portletBlockedMessage hiddenStructure"')
                    # <Symbol value=<DEFAULT> at 1a54520f4d0> -> __default_1809458220880
                    __default_1809458220880 = _DEFAULT_MARKER
                    # <Translate msgid='title_portlet_blocked' node=Constant(value='Blocked', kind=None) at 1a54c1d4510> -> __attr_title
                    __attr_title = 'Blocked'
                    __attr_title = translate('title_portlet_blocked', default=__attr_title, domain=__i18n_domain, context=__i18n_context, target_language=getname('target_language'))
                    if __attr_title is not None:
                        __append(' title="%s"' % __attr_title)
                    __append(' >')
                    __stream_1809427399888 = []
                    __append_1809427399888 = __stream_1809427399888.append
                    __append_1809427399888('\n                  (Blocked)\n                ')
                    __msgid_1809427399888 = __re_whitespace(''.join(__stream_1809427399888)).strip()
                    __append(translate('label_portlet_blocked', mapping=None, default=__msgid_1809427399888, domain=__i18n_domain, context=__i18n_context, target_language=target_language))
                    __append('</span>')
                __append('\n\n              </div>\n            </div>')
                ____index_1809434686032 -= 1
                if ____index_1809434686032 > 0:
                    __append('\n            ')
            if __backup_portlet_1809434830528 is __marker:
                del econtext['portlet']
            else:
                econtext['portlet'] = __backup_portlet_1809434830528
            __append('\n          ')
            if __backup_status_1809433603456 is __marker:
                del econtext['status']
            else:
                econtext['status'] = __backup_status_1809433603456
            if __backup_portlets_1809399648256 is __marker:
                del econtext['portlets']
            else:
                econtext['portlets'] = __backup_portlets_1809399648256
            __append('\n\n        </div>')
            if __backup_status_1809435754432 is __marker:
                del econtext['status']
            else:
                econtext['status'] = __backup_status_1809435754432
            __append('\n\n        ')
            # <Static value=Dict(keys=[], values=[]) name=None at 1a54526ff50> -> __attrs_1809431145360
            __attrs_1809431145360 = _static_1809459585232
            # <noscript ... (0:0)
            # --------------------------------------------------------
            __append('<noscript>\n          ')
            # <Static value=Dict(keys=[Constant(value='class', kind=None)], values=[Constant(value='formControls', kind=None)]) name=None at 1a54a803f10> -> __attrs_1809431148496
            __attrs_1809431148496 = _static_1809459592784
            # <div ... (0:0)
            # --------------------------------------------------------
            __append('<div class="formControls">\n            ')
            # <Static value=Dict(keys=[Constant(value='class', kind=None), ..., Constant(value='value', kind=None)], values=[Constant(value='btn btn-primary', kind=None), ..., Constant(value='Save settings', kind=None)]) name=None at 1a54a803d10> -> __attrs_1809428939920
            __attrs_1809428939920 = _static_1809462892816
            # <input ... (0:0)
            # --------------------------------------------------------
            __append('<input class="btn btn-primary" type="submit"')
            # <Symbol value=<DEFAULT> at 1a54520f4d0> -> __default_1809431136400
            __default_1809431136400 = _DEFAULT_MARKER
            # <Translate msgid='label_save_settings' node=Constant(value='Save settings', kind=None) at 1a54a800d10> -> __attr_value
            __attr_value = 'Save settings'
            __attr_value = translate('label_save_settings', default=__attr_value, domain=__i18n_domain, context=__i18n_context, target_language=getname('target_language'))
            if __attr_value is not None:
                __append(' value="%s"' % __attr_value)
            __append(' />\n          </div>\n        </noscript>\n\n      </form>\n\n    </div>\n\n  </div>')
            __i18n_domain = __previous_i18n_domain_1809434921680
            __append('\n\n')
        except:
            if __token is not None:
                rcontext.setdefault('__error__', []).append(__tokens[__token] + (__filename, _exc_info()[1]))
            raise
    return {'render': render}
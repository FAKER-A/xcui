webpackJsonp([34],{417:function(t,s,a){var n=a(0)(a(507),a(508),null,null,null);t.exports=n.exports},431:function(t,s,a){var n=a(432);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);a(390)("30a4fb3e",n,!0)},432:function(t,s,a){(t.exports=a(389)(!1)).push([t.i,"",""])},507:function(t,s,a){"use strict";Object.defineProperty(s,"__esModule",{value:!0}),a(431),s.default={data:function(){return{checked0:!1,checked1:!0,checked2:!0,checked3:!1,checklist:["已完成","已分配"],checkedRoles:["销售"],indeterminate:!0,checkAll:!1,roleList:["销售","运营","研发","测试"]}},methods:{handleCheckAll:function(t){this.checkedRoles=t.target.checked?this.roleList:[]},handleCheckRole:function(t){var s=t.length;this.checkAll=s===this.roleList.length,this.indeterminate=s>0&&s<this.roleList.length}}}},508:function(t,s){t.exports={render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",[a("h1",[t._v("Checkbox 多选框")]),t._v(" "),a("h2",[t._v("概述")]),t._v(" "),a("p",[t._v("在一组可选项中进行选择时使用。")]),t._v(" "),a("h2",[t._v("基础用法")]),t._v(" "),a("xcui-demo",[a("div",{attrs:{slot:"source"},slot:"source"},[a("x-checkbox",{model:{value:t.checked0,callback:function(s){t.checked0=s},expression:"checked0"}},[t._v("备选项")])],1),t._v(" "),a("span",{attrs:{slot:"info-title"},slot:"info-title"},[t._v("说明")]),t._v(" "),a("div",{attrs:{slot:"info"},slot:"info"},[a("p",[t._v("在"),a("code",[t._v("x-checkbox")]),t._v("中使用"),a("code",[t._v("v-model")]),t._v("绑定变量，默认绑定变量的值是"),a("code",[t._v("Boolean")]),t._v(", 选中时为"),a("code",[t._v("true")]),t._v("。")])]),t._v(" "),a("div",{attrs:{slot:"highlight"},slot:"highlight"},[a("pre",[a("span",{staticClass:"token tag"},[a("span",{staticClass:"token tag"},[a("span",{staticClass:"token punctuation"},[t._v("<")]),t._v("template")]),a("span",{staticClass:"token punctuation"},[t._v(">")])]),t._v("\n    "),a("span",{staticClass:"token tag"},[a("span",{staticClass:"token tag"},[a("span",{staticClass:"token punctuation"},[t._v("<")]),t._v("x-checkbox")]),t._v(" "),a("span",{staticClass:"token attr-name"},[t._v("v-model")]),a("span",{staticClass:"token attr-value"},[a("span",{staticClass:"token punctuation"},[t._v("=")]),a("span",{staticClass:"token punctuation"},[t._v('"')]),t._v("checked0"),a("span",{staticClass:"token punctuation"},[t._v('"')])]),a("span",{staticClass:"token punctuation"},[t._v(">")])]),t._v("备选项"),a("span",{staticClass:"token tag"},[a("span",{staticClass:"token tag"},[a("span",{staticClass:"token punctuation"},[t._v("</")]),t._v("x-checkbox")]),a("span",{staticClass:"token punctuation"},[t._v(">")])]),t._v("\n"),a("span",{staticClass:"token tag"},[a("span",{staticClass:"token tag"},[a("span",{staticClass:"token punctuation"},[t._v("</")]),t._v("template")]),a("span",{staticClass:"token punctuation"},[t._v(">")])]),t._v("\n\n"),a("span",{staticClass:"token tag"},[a("span",{staticClass:"token tag"},[a("span",{staticClass:"token punctuation"},[t._v("<")]),t._v("script")]),a("span",{staticClass:"token punctuation"},[t._v(">")])]),a("span",{staticClass:"token script language-javascript"},[t._v("\n    "),a("span",{staticClass:"token keyword"},[t._v("export")]),t._v(" "),a("span",{staticClass:"token keyword"},[t._v("default")]),t._v(" "),a("span",{staticClass:"token punctuation"},[a("span",{staticClass:"token punctuation"},[t._v("{")])]),t._v("\n        "),a("span",{staticClass:"token function"},[t._v("data")]),a("span",{staticClass:"token punctuation"},[t._v("(")]),a("span",{staticClass:"token punctuation"},[t._v(")")]),t._v(" "),a("span",{staticClass:"token punctuation"},[a("span",{staticClass:"token punctuation"},[t._v("{")])]),t._v("\n            "),a("span",{staticClass:"token keyword"},[t._v("return")]),t._v(" "),a("span",{staticClass:"token punctuation"},[a("span",{staticClass:"token punctuation"},[t._v("{")])]),t._v("\n                checked0"),a("span",{staticClass:"token punctuation"},[t._v(":")]),t._v(" "),a("span",{staticClass:"token boolean"},[t._v("false")]),a("span",{staticClass:"token punctuation"},[t._v(",")]),t._v("\n            "),a("span",{staticClass:"token punctuation"},[a("span",{staticClass:"token punctuation"},[t._v("}")])]),a("span",{staticClass:"token punctuation"},[t._v(";")]),t._v("\n        "),a("span",{staticClass:"token punctuation"},[a("span",{staticClass:"token punctuation"},[t._v("}")])]),t._v("\n    "),a("span",{staticClass:"token punctuation"},[a("span",{staticClass:"token punctuation"},[t._v("}")])]),a("span",{staticClass:"token punctuation"},[t._v(";")]),t._v("\n")]),a("span",{staticClass:"token tag"},[a("span",{staticClass:"token tag"},[a("span",{staticClass:"token punctuation"},[t._v("</")]),t._v("script")]),a("span",{staticClass:"token punctuation"},[t._v(">")])]),t._v("\n\n")])])]),t._v(" "),a("h2",[t._v("禁用状态")]),t._v(" "),a("xcui-demo",[a("div",{attrs:{slot:"source"},slot:"source"},[a("x-checkbox",{attrs:{disabled:!0},model:{value:t.checked2,callback:function(s){t.checked2=s},expression:"checked2"}},[t._v("备选项")]),t._v(" "),a("x-checkbox",{attrs:{disabled:!0},model:{value:t.checked3,callback:function(s){t.checked3=s},expression:"checked3"}},[t._v("备选项")])],1),t._v(" "),a("span",{attrs:{slot:"info-title"},slot:"info-title"},[t._v("说明")]),t._v(" "),a("div",{attrs:{slot:"info"},slot:"info"},[a("p",[t._v("通过使用"),a("code",[t._v("disabled")]),t._v("属性可以设置多选框的禁用状态。")])]),t._v(" "),a("div",{attrs:{slot:"highlight"},slot:"highlight"},[a("pre",[a("span",{staticClass:"token tag"},[a("span",{staticClass:"token tag"},[a("span",{staticClass:"token punctuation"},[t._v("<")]),t._v("template")]),a("span",{staticClass:"token punctuation"},[t._v(">")])]),t._v("\n    "),a("span",{staticClass:"token tag"},[a("span",{staticClass:"token tag"},[a("span",{staticClass:"token punctuation"},[t._v("<")]),t._v("x-checkbox")]),t._v(" "),a("span",{staticClass:"token attr-name"},[t._v("v-model")]),a("span",{staticClass:"token attr-value"},[a("span",{staticClass:"token punctuation"},[t._v("=")]),a("span",{staticClass:"token punctuation"},[t._v('"')]),t._v("checked2"),a("span",{staticClass:"token punctuation"},[t._v('"')])]),t._v(" "),a("span",{staticClass:"token attr-name"},[t._v(":disabled")]),a("span",{staticClass:"token attr-value"},[a("span",{staticClass:"token punctuation"},[t._v("=")]),a("span",{staticClass:"token punctuation"},[t._v('"')]),t._v("true"),a("span",{staticClass:"token punctuation"},[t._v('"')])]),a("span",{staticClass:"token punctuation"},[t._v(">")])]),t._v("备选项"),a("span",{staticClass:"token tag"},[a("span",{staticClass:"token tag"},[a("span",{staticClass:"token punctuation"},[t._v("</")]),t._v("x-checkbox")]),a("span",{staticClass:"token punctuation"},[t._v(">")])]),t._v("\n    "),a("span",{staticClass:"token tag"},[a("span",{staticClass:"token tag"},[a("span",{staticClass:"token punctuation"},[t._v("<")]),t._v("x-checkbox")]),t._v(" "),a("span",{staticClass:"token attr-name"},[t._v("v-model")]),a("span",{staticClass:"token attr-value"},[a("span",{staticClass:"token punctuation"},[t._v("=")]),a("span",{staticClass:"token punctuation"},[t._v('"')]),t._v("checked3"),a("span",{staticClass:"token punctuation"},[t._v('"')])]),t._v(" "),a("span",{staticClass:"token attr-name"},[t._v(":disabled")]),a("span",{staticClass:"token attr-value"},[a("span",{staticClass:"token punctuation"},[t._v("=")]),a("span",{staticClass:"token punctuation"},[t._v('"')]),t._v("true"),a("span",{staticClass:"token punctuation"},[t._v('"')])]),a("span",{staticClass:"token punctuation"},[t._v(">")])]),t._v("备选项"),a("span",{staticClass:"token tag"},[a("span",{staticClass:"token tag"},[a("span",{staticClass:"token punctuation"},[t._v("</")]),t._v("x-checkbox")]),a("span",{staticClass:"token punctuation"},[t._v(">")])]),t._v("\n"),a("span",{staticClass:"token tag"},[a("span",{staticClass:"token tag"},[a("span",{staticClass:"token punctuation"},[t._v("</")]),t._v("template")]),a("span",{staticClass:"token punctuation"},[t._v(">")])]),t._v("\n\n"),a("span",{staticClass:"token tag"},[a("span",{staticClass:"token tag"},[a("span",{staticClass:"token punctuation"},[t._v("<")]),t._v("script")]),a("span",{staticClass:"token punctuation"},[t._v(">")])]),a("span",{staticClass:"token script language-javascript"},[t._v("\n    "),a("span",{staticClass:"token keyword"},[t._v("export")]),t._v(" "),a("span",{staticClass:"token keyword"},[t._v("default")]),t._v(" "),a("span",{staticClass:"token punctuation"},[a("span",{staticClass:"token punctuation"},[t._v("{")])]),t._v("\n        "),a("span",{staticClass:"token function"},[t._v("data")]),a("span",{staticClass:"token punctuation"},[t._v("(")]),a("span",{staticClass:"token punctuation"},[t._v(")")]),t._v(" "),a("span",{staticClass:"token punctuation"},[a("span",{staticClass:"token punctuation"},[t._v("{")])]),t._v("\n            "),a("span",{staticClass:"token keyword"},[t._v("return")]),t._v(" "),a("span",{staticClass:"token punctuation"},[a("span",{staticClass:"token punctuation"},[t._v("{")])]),t._v("\n                checked2"),a("span",{staticClass:"token punctuation"},[t._v(":")]),t._v(" "),a("span",{staticClass:"token boolean"},[t._v("true")]),a("span",{staticClass:"token punctuation"},[t._v(",")]),t._v("\n                checked3"),a("span",{staticClass:"token punctuation"},[t._v(":")]),t._v(" "),a("span",{staticClass:"token boolean"},[t._v("false")]),t._v("\n            "),a("span",{staticClass:"token punctuation"},[a("span",{staticClass:"token punctuation"},[t._v("}")])]),a("span",{staticClass:"token punctuation"},[t._v(";")]),t._v("\n        "),a("span",{staticClass:"token punctuation"},[a("span",{staticClass:"token punctuation"},[t._v("}")])]),t._v("\n    "),a("span",{staticClass:"token punctuation"},[a("span",{staticClass:"token punctuation"},[t._v("}")])]),a("span",{staticClass:"token punctuation"},[t._v(";")]),t._v("\n")]),a("span",{staticClass:"token tag"},[a("span",{staticClass:"token tag"},[a("span",{staticClass:"token punctuation"},[t._v("</")]),t._v("script")]),a("span",{staticClass:"token punctuation"},[t._v(">")])]),t._v("\n\n")])])]),t._v(" "),a("h2",[t._v("多选框组")]),t._v(" "),a("xcui-demo",[a("div",{attrs:{slot:"source"},slot:"source"},[a("x-checkbox-group",{model:{value:t.checklist,callback:function(s){t.checklist=s},expression:"checklist"}},[a("x-checkbox",{attrs:{value:"未开始"}},[t._v("未开始")]),t._v(" "),a("x-checkbox",{attrs:{value:"进行中"}},[t._v("进行中")]),t._v(" "),a("x-checkbox",{attrs:{value:"已完成"}},[t._v("已完成")]),t._v(" "),a("x-checkbox",{attrs:{value:"已分配",disabled:!0}},[t._v("已分配")]),t._v(" "),a("x-checkbox",{attrs:{value:"已废弃",disabled:!0}},[t._v("已废弃")])],1),t._v(" "),a("p",{staticStyle:{"margin-top":"15px"}},[t._v("\n        选中的值数组： "+t._s(t.checklist)+"\n    ")])],1),t._v(" "),a("span",{attrs:{slot:"info-title"},slot:"info-title"},[t._v("说明")]),t._v(" "),a("div",{attrs:{slot:"info"},slot:"info"},[a("p",[t._v("通过将"),a("code",[t._v("x-checkbox")]),t._v("作为"),a("code",[t._v("x-checkbox-group")]),t._v("的直接子元素，可以建立组合的多选框。")])]),t._v(" "),a("div",{attrs:{slot:"highlight"},slot:"highlight"},[a("pre",[a("span",{staticClass:"token tag"},[a("span",{staticClass:"token tag"},[a("span",{staticClass:"token punctuation"},[t._v("<")]),t._v("template")]),a("span",{staticClass:"token punctuation"},[t._v(">")])]),t._v("\n    "),a("span",{staticClass:"token tag"},[a("span",{staticClass:"token tag"},[a("span",{staticClass:"token punctuation"},[t._v("<")]),t._v("x-checkbox-group")]),t._v(" "),a("span",{staticClass:"token attr-name"},[t._v("v-model")]),a("span",{staticClass:"token attr-value"},[a("span",{staticClass:"token punctuation"},[t._v("=")]),a("span",{staticClass:"token punctuation"},[t._v('"')]),t._v("checklist"),a("span",{staticClass:"token punctuation"},[t._v('"')])]),a("span",{staticClass:"token punctuation"},[t._v(">")])]),t._v("\n        "),a("span",{staticClass:"token tag"},[a("span",{staticClass:"token tag"},[a("span",{staticClass:"token punctuation"},[t._v("<")]),t._v("x-checkbox")]),t._v(" "),a("span",{staticClass:"token attr-name"},[t._v("value")]),a("span",{staticClass:"token attr-value"},[a("span",{staticClass:"token punctuation"},[t._v("=")]),a("span",{staticClass:"token punctuation"},[t._v('"')]),t._v("未开始"),a("span",{staticClass:"token punctuation"},[t._v('"')])]),a("span",{staticClass:"token punctuation"},[t._v(">")])]),t._v("未开始"),a("span",{staticClass:"token tag"},[a("span",{staticClass:"token tag"},[a("span",{staticClass:"token punctuation"},[t._v("</")]),t._v("x-checkbox")]),a("span",{staticClass:"token punctuation"},[t._v(">")])]),t._v("\n        "),a("span",{staticClass:"token tag"},[a("span",{staticClass:"token tag"},[a("span",{staticClass:"token punctuation"},[t._v("<")]),t._v("x-checkbox")]),t._v(" "),a("span",{staticClass:"token attr-name"},[t._v("value")]),a("span",{staticClass:"token attr-value"},[a("span",{staticClass:"token punctuation"},[t._v("=")]),a("span",{staticClass:"token punctuation"},[t._v('"')]),t._v("进行中"),a("span",{staticClass:"token punctuation"},[t._v('"')])]),a("span",{staticClass:"token punctuation"},[t._v(">")])]),t._v("进行中"),a("span",{staticClass:"token tag"},[a("span",{staticClass:"token tag"},[a("span",{staticClass:"token punctuation"},[t._v("</")]),t._v("x-checkbox")]),a("span",{staticClass:"token punctuation"},[t._v(">")])]),t._v("\n        "),a("span",{staticClass:"token tag"},[a("span",{staticClass:"token tag"},[a("span",{staticClass:"token punctuation"},[t._v("<")]),t._v("x-checkbox")]),t._v(" "),a("span",{staticClass:"token attr-name"},[t._v("value")]),a("span",{staticClass:"token attr-value"},[a("span",{staticClass:"token punctuation"},[t._v("=")]),a("span",{staticClass:"token punctuation"},[t._v('"')]),t._v("已完成"),a("span",{staticClass:"token punctuation"},[t._v('"')])]),a("span",{staticClass:"token punctuation"},[t._v(">")])]),t._v("已完成"),a("span",{staticClass:"token tag"},[a("span",{staticClass:"token tag"},[a("span",{staticClass:"token punctuation"},[t._v("</")]),t._v("x-checkbox")]),a("span",{staticClass:"token punctuation"},[t._v(">")])]),t._v("\n        "),a("span",{staticClass:"token tag"},[a("span",{staticClass:"token tag"},[a("span",{staticClass:"token punctuation"},[t._v("<")]),t._v("x-checkbox")]),t._v(" "),a("span",{staticClass:"token attr-name"},[t._v("value")]),a("span",{staticClass:"token attr-value"},[a("span",{staticClass:"token punctuation"},[t._v("=")]),a("span",{staticClass:"token punctuation"},[t._v('"')]),t._v("已分配"),a("span",{staticClass:"token punctuation"},[t._v('"')])]),t._v(" "),a("span",{staticClass:"token attr-name"},[t._v(":disabled")]),a("span",{staticClass:"token attr-value"},[a("span",{staticClass:"token punctuation"},[t._v("=")]),a("span",{staticClass:"token punctuation"},[t._v('"')]),t._v("true"),a("span",{staticClass:"token punctuation"},[t._v('"')])]),a("span",{staticClass:"token punctuation"},[t._v(">")])]),t._v("已分配"),a("span",{staticClass:"token tag"},[a("span",{staticClass:"token tag"},[a("span",{staticClass:"token punctuation"},[t._v("</")]),t._v("x-checkbox")]),a("span",{staticClass:"token punctuation"},[t._v(">")])]),t._v("\n        "),a("span",{staticClass:"token tag"},[a("span",{staticClass:"token tag"},[a("span",{staticClass:"token punctuation"},[t._v("<")]),t._v("x-checkbox")]),t._v(" "),a("span",{staticClass:"token attr-name"},[t._v("value")]),a("span",{staticClass:"token attr-value"},[a("span",{staticClass:"token punctuation"},[t._v("=")]),a("span",{staticClass:"token punctuation"},[t._v('"')]),t._v("已废弃"),a("span",{staticClass:"token punctuation"},[t._v('"')])]),t._v(" "),a("span",{staticClass:"token attr-name"},[t._v(":disabled")]),a("span",{staticClass:"token attr-value"},[a("span",{staticClass:"token punctuation"},[t._v("=")]),a("span",{staticClass:"token punctuation"},[t._v('"')]),t._v("true"),a("span",{staticClass:"token punctuation"},[t._v('"')])]),a("span",{staticClass:"token punctuation"},[t._v(">")])]),t._v("已废弃"),a("span",{staticClass:"token tag"},[a("span",{staticClass:"token tag"},[a("span",{staticClass:"token punctuation"},[t._v("</")]),t._v("x-checkbox")]),a("span",{staticClass:"token punctuation"},[t._v(">")])]),t._v("\n    "),a("span",{staticClass:"token tag"},[a("span",{staticClass:"token tag"},[a("span",{staticClass:"token punctuation"},[t._v("</")]),t._v("x-checkbox-group")]),a("span",{staticClass:"token punctuation"},[t._v(">")])]),t._v("\n    "),a("span",{staticClass:"token tag"},[a("span",{staticClass:"token tag"},[a("span",{staticClass:"token punctuation"},[t._v("<")]),t._v("p")]),a("span",{staticClass:"token style-attr language-css"},[a("span",{staticClass:"token attr-name"},[t._v(" "),a("span",{staticClass:"token attr-name"},[t._v("style")])]),a("span",{staticClass:"token punctuation"},[t._v('="')]),a("span",{staticClass:"token attr-value"},[a("span",{staticClass:"token property"},[t._v("margin-top")]),a("span",{staticClass:"token punctuation"},[t._v(":")]),t._v(" 15px"),a("span",{staticClass:"token punctuation"},[t._v(";")])]),a("span",{staticClass:"token punctuation"},[t._v('"')])]),a("span",{staticClass:"token punctuation"},[t._v(">")])]),t._v("\n        选中的值数组： "),a("span",{staticClass:"token punctuation"},[t._v("{")]),a("span",{staticClass:"token punctuation"},[t._v("{")]),t._v("checklist"),a("span",{staticClass:"token punctuation"},[t._v("}")]),a("span",{staticClass:"token punctuation"},[t._v("}")]),t._v("\n    "),a("span",{staticClass:"token tag"},[a("span",{staticClass:"token tag"},[a("span",{staticClass:"token punctuation"},[t._v("</")]),t._v("p")]),a("span",{staticClass:"token punctuation"},[t._v(">")])]),t._v("\n"),a("span",{staticClass:"token tag"},[a("span",{staticClass:"token tag"},[a("span",{staticClass:"token punctuation"},[t._v("</")]),t._v("template")]),a("span",{staticClass:"token punctuation"},[t._v(">")])]),t._v("\n\n"),a("span",{staticClass:"token tag"},[a("span",{staticClass:"token tag"},[a("span",{staticClass:"token punctuation"},[t._v("<")]),t._v("script")]),a("span",{staticClass:"token punctuation"},[t._v(">")])]),a("span",{staticClass:"token script language-javascript"},[t._v("\n    "),a("span",{staticClass:"token keyword"},[t._v("export")]),t._v(" "),a("span",{staticClass:"token keyword"},[t._v("default")]),t._v(" "),a("span",{staticClass:"token punctuation"},[a("span",{staticClass:"token punctuation"},[t._v("{")])]),t._v("\n        "),a("span",{staticClass:"token function"},[t._v("data")]),a("span",{staticClass:"token punctuation"},[t._v("(")]),a("span",{staticClass:"token punctuation"},[t._v(")")]),t._v(" "),a("span",{staticClass:"token punctuation"},[a("span",{staticClass:"token punctuation"},[t._v("{")])]),t._v("\n            "),a("span",{staticClass:"token keyword"},[t._v("return")]),t._v(" "),a("span",{staticClass:"token punctuation"},[a("span",{staticClass:"token punctuation"},[t._v("{")])]),t._v("\n                checklist"),a("span",{staticClass:"token punctuation"},[t._v(":")]),t._v(" "),a("span",{staticClass:"token punctuation"},[t._v("[")]),a("span",{staticClass:"token string"},[t._v("'已完成'")]),a("span",{staticClass:"token punctuation"},[t._v(",")]),t._v(" "),a("span",{staticClass:"token string"},[t._v("'已分配'")]),a("span",{staticClass:"token punctuation"},[t._v("]")]),t._v("\n            "),a("span",{staticClass:"token punctuation"},[a("span",{staticClass:"token punctuation"},[t._v("}")])]),a("span",{staticClass:"token punctuation"},[t._v(";")]),t._v("\n        "),a("span",{staticClass:"token punctuation"},[a("span",{staticClass:"token punctuation"},[t._v("}")])]),t._v("\n    "),a("span",{staticClass:"token punctuation"},[a("span",{staticClass:"token punctuation"},[t._v("}")])]),a("span",{staticClass:"token punctuation"},[t._v(";")]),t._v("\n")]),a("span",{staticClass:"token tag"},[a("span",{staticClass:"token tag"},[a("span",{staticClass:"token punctuation"},[t._v("</")]),t._v("script")]),a("span",{staticClass:"token punctuation"},[t._v(">")])]),t._v("\n\n")])])]),t._v(" "),a("h2",[t._v("全选和部分选中")]),t._v(" "),a("xcui-demo",[a("div",{attrs:{slot:"source"},slot:"source"},[a("x-checkbox",{attrs:{indeterminate:t.indeterminate},on:{change:t.handleCheckAll},model:{value:t.checkAll,callback:function(s){t.checkAll=s},expression:"checkAll"}},[t._v("全选")]),t._v(" "),a("x-checkbox-group",{staticStyle:{display:"inline-block","margin-left":"15px"},on:{change:t.handleCheckRole},model:{value:t.checkedRoles,callback:function(s){t.checkedRoles=s},expression:"checkedRoles"}},[a("x-checkbox",{attrs:{value:"销售"}},[t._v("销售")]),t._v(" "),a("x-checkbox",{attrs:{value:"运营"}},[t._v("运营")]),t._v(" "),a("x-checkbox",{attrs:{value:"研发"}},[t._v("研发")]),t._v(" "),a("x-checkbox",{attrs:{value:"测试"}},[t._v("测试")])],1)],1),t._v(" "),a("span",{attrs:{slot:"info-title"},slot:"info-title"},[t._v("说明")]),t._v(" "),a("div",{attrs:{slot:"info"},slot:"info"},[a("p",[a("code",[t._v("indeterminate")]),t._v("属性表示多选框的不确定状态，常用于实现部分选中功能。本例实现了全选和部分选中功能。")])]),t._v(" "),a("div",{attrs:{slot:"highlight"},slot:"highlight"},[a("pre",[a("span",{staticClass:"token tag"},[a("span",{staticClass:"token tag"},[a("span",{staticClass:"token punctuation"},[t._v("<")]),t._v("template")]),a("span",{staticClass:"token punctuation"},[t._v(">")])]),t._v("\n    "),a("span",{staticClass:"token tag"},[a("span",{staticClass:"token tag"},[a("span",{staticClass:"token punctuation"},[t._v("<")]),t._v("x-checkbox")]),t._v(" "),a("span",{staticClass:"token attr-name"},[t._v(":indeterminate")]),a("span",{staticClass:"token attr-value"},[a("span",{staticClass:"token punctuation"},[t._v("=")]),a("span",{staticClass:"token punctuation"},[t._v('"')]),t._v("indeterminate"),a("span",{staticClass:"token punctuation"},[t._v('"')])]),t._v(" "),a("span",{staticClass:"token attr-name"},[t._v("v-model")]),a("span",{staticClass:"token attr-value"},[a("span",{staticClass:"token punctuation"},[t._v("=")]),a("span",{staticClass:"token punctuation"},[t._v('"')]),t._v("checkAll"),a("span",{staticClass:"token punctuation"},[t._v('"')])]),t._v(" "),a("span",{staticClass:"token attr-name"},[t._v("@change")]),a("span",{staticClass:"token attr-value"},[a("span",{staticClass:"token punctuation"},[t._v("=")]),a("span",{staticClass:"token punctuation"},[t._v('"')]),t._v("handleCheckAll"),a("span",{staticClass:"token punctuation"},[t._v('"')])]),a("span",{staticClass:"token punctuation"},[t._v(">")])]),t._v("全选"),a("span",{staticClass:"token tag"},[a("span",{staticClass:"token tag"},[a("span",{staticClass:"token punctuation"},[t._v("</")]),t._v("x-checkbox")]),a("span",{staticClass:"token punctuation"},[t._v(">")])]),t._v("\n    "),a("span",{staticClass:"token tag"},[a("span",{staticClass:"token tag"},[a("span",{staticClass:"token punctuation"},[t._v("<")]),t._v("x-checkbox-group")]),t._v(" "),a("span",{staticClass:"token attr-name"},[t._v("v-model")]),a("span",{staticClass:"token attr-value"},[a("span",{staticClass:"token punctuation"},[t._v("=")]),a("span",{staticClass:"token punctuation"},[t._v('"')]),t._v("checkedRoles"),a("span",{staticClass:"token punctuation"},[t._v('"')])]),t._v(" "),a("span",{staticClass:"token attr-name"},[t._v("@change")]),a("span",{staticClass:"token attr-value"},[a("span",{staticClass:"token punctuation"},[t._v("=")]),a("span",{staticClass:"token punctuation"},[t._v('"')]),t._v("handleCheckRole"),a("span",{staticClass:"token punctuation"},[t._v('"')])]),a("span",{staticClass:"token style-attr language-css"},[a("span",{staticClass:"token attr-name"},[t._v(" "),a("span",{staticClass:"token attr-name"},[t._v("style")])]),a("span",{staticClass:"token punctuation"},[t._v('="')]),a("span",{staticClass:"token attr-value"},[a("span",{staticClass:"token property"},[t._v("display")]),a("span",{staticClass:"token punctuation"},[t._v(":")]),t._v("inline-block"),a("span",{staticClass:"token punctuation"},[t._v(";")]),t._v(" "),a("span",{staticClass:"token property"},[t._v("margin-left")]),a("span",{staticClass:"token punctuation"},[t._v(":")]),t._v(" 15px"),a("span",{staticClass:"token punctuation"},[t._v(";")])]),a("span",{staticClass:"token punctuation"},[t._v('"')])]),a("span",{staticClass:"token punctuation"},[t._v(">")])]),t._v("\n        "),a("span",{staticClass:"token tag"},[a("span",{staticClass:"token tag"},[a("span",{staticClass:"token punctuation"},[t._v("<")]),t._v("x-checkbox")]),t._v(" "),a("span",{staticClass:"token attr-name"},[t._v("value")]),a("span",{staticClass:"token attr-value"},[a("span",{staticClass:"token punctuation"},[t._v("=")]),a("span",{staticClass:"token punctuation"},[t._v('"')]),t._v("销售"),a("span",{staticClass:"token punctuation"},[t._v('"')])]),a("span",{staticClass:"token punctuation"},[t._v(">")])]),t._v("销售"),a("span",{staticClass:"token tag"},[a("span",{staticClass:"token tag"},[a("span",{staticClass:"token punctuation"},[t._v("</")]),t._v("x-checkbox")]),a("span",{staticClass:"token punctuation"},[t._v(">")])]),t._v("\n        "),a("span",{staticClass:"token tag"},[a("span",{staticClass:"token tag"},[a("span",{staticClass:"token punctuation"},[t._v("<")]),t._v("x-checkbox")]),t._v(" "),a("span",{staticClass:"token attr-name"},[t._v("value")]),a("span",{staticClass:"token attr-value"},[a("span",{staticClass:"token punctuation"},[t._v("=")]),a("span",{staticClass:"token punctuation"},[t._v('"')]),t._v("运营"),a("span",{staticClass:"token punctuation"},[t._v('"')])]),a("span",{staticClass:"token punctuation"},[t._v(">")])]),t._v("运营"),a("span",{staticClass:"token tag"},[a("span",{staticClass:"token tag"},[a("span",{staticClass:"token punctuation"},[t._v("</")]),t._v("x-checkbox")]),a("span",{staticClass:"token punctuation"},[t._v(">")])]),t._v("\n        "),a("span",{staticClass:"token tag"},[a("span",{staticClass:"token tag"},[a("span",{staticClass:"token punctuation"},[t._v("<")]),t._v("x-checkbox")]),t._v(" "),a("span",{staticClass:"token attr-name"},[t._v("value")]),a("span",{staticClass:"token attr-value"},[a("span",{staticClass:"token punctuation"},[t._v("=")]),a("span",{staticClass:"token punctuation"},[t._v('"')]),t._v("研发"),a("span",{staticClass:"token punctuation"},[t._v('"')])]),a("span",{staticClass:"token punctuation"},[t._v(">")])]),t._v("研发"),a("span",{staticClass:"token tag"},[a("span",{staticClass:"token tag"},[a("span",{staticClass:"token punctuation"},[t._v("</")]),t._v("x-checkbox")]),a("span",{staticClass:"token punctuation"},[t._v(">")])]),t._v("\n        "),a("span",{staticClass:"token tag"},[a("span",{staticClass:"token tag"},[a("span",{staticClass:"token punctuation"},[t._v("<")]),t._v("x-checkbox")]),t._v(" "),a("span",{staticClass:"token attr-name"},[t._v("value")]),a("span",{staticClass:"token attr-value"},[a("span",{staticClass:"token punctuation"},[t._v("=")]),a("span",{staticClass:"token punctuation"},[t._v('"')]),t._v("测试"),a("span",{staticClass:"token punctuation"},[t._v('"')])]),a("span",{staticClass:"token punctuation"},[t._v(">")])]),t._v("测试"),a("span",{staticClass:"token tag"},[a("span",{staticClass:"token tag"},[a("span",{staticClass:"token punctuation"},[t._v("</")]),t._v("x-checkbox")]),a("span",{staticClass:"token punctuation"},[t._v(">")])]),t._v("\n    "),a("span",{staticClass:"token tag"},[a("span",{staticClass:"token tag"},[a("span",{staticClass:"token punctuation"},[t._v("</")]),t._v("x-checkbox-group")]),a("span",{staticClass:"token punctuation"},[t._v(">")])]),t._v("\n"),a("span",{staticClass:"token tag"},[a("span",{staticClass:"token tag"},[a("span",{staticClass:"token punctuation"},[t._v("</")]),t._v("template")]),a("span",{staticClass:"token punctuation"},[t._v(">")])]),t._v("\n\n"),a("span",{staticClass:"token tag"},[a("span",{staticClass:"token tag"},[a("span",{staticClass:"token punctuation"},[t._v("<")]),t._v("script")]),a("span",{staticClass:"token punctuation"},[t._v(">")])]),a("span",{staticClass:"token script language-javascript"},[t._v("\n    "),a("span",{staticClass:"token keyword"},[t._v("export")]),t._v(" "),a("span",{staticClass:"token keyword"},[t._v("default")]),t._v(" "),a("span",{staticClass:"token punctuation"},[a("span",{staticClass:"token punctuation"},[t._v("{")])]),t._v("\n        "),a("span",{staticClass:"token function"},[t._v("data")]),a("span",{staticClass:"token punctuation"},[t._v("(")]),a("span",{staticClass:"token punctuation"},[t._v(")")]),t._v(" "),a("span",{staticClass:"token punctuation"},[a("span",{staticClass:"token punctuation"},[t._v("{")])]),t._v("\n            "),a("span",{staticClass:"token keyword"},[t._v("return")]),t._v(" "),a("span",{staticClass:"token punctuation"},[a("span",{staticClass:"token punctuation"},[t._v("{")])]),t._v("\n                checkedRoles"),a("span",{staticClass:"token punctuation"},[t._v(":")]),t._v(" "),a("span",{staticClass:"token punctuation"},[t._v("[")]),a("span",{staticClass:"token string"},[t._v("'销售'")]),a("span",{staticClass:"token punctuation"},[t._v("]")]),a("span",{staticClass:"token punctuation"},[t._v(",")]),t._v("\n                indeterminate"),a("span",{staticClass:"token punctuation"},[t._v(":")]),t._v(" "),a("span",{staticClass:"token boolean"},[t._v("true")]),a("span",{staticClass:"token punctuation"},[t._v(",")]),t._v("\n                checkAll"),a("span",{staticClass:"token punctuation"},[t._v(":")]),t._v(" "),a("span",{staticClass:"token boolean"},[t._v("false")]),a("span",{staticClass:"token punctuation"},[t._v(",")]),t._v("\n                roleList"),a("span",{staticClass:"token punctuation"},[t._v(":")]),t._v(" "),a("span",{staticClass:"token punctuation"},[t._v("[")]),a("span",{staticClass:"token string"},[t._v("'销售'")]),a("span",{staticClass:"token punctuation"},[t._v(",")]),t._v(" "),a("span",{staticClass:"token string"},[t._v("'运营'")]),a("span",{staticClass:"token punctuation"},[t._v(",")]),t._v(" "),a("span",{staticClass:"token string"},[t._v("'研发'")]),a("span",{staticClass:"token punctuation"},[t._v(",")]),t._v(" "),a("span",{staticClass:"token string"},[t._v("'测试'")]),a("span",{staticClass:"token punctuation"},[t._v("]")]),t._v("\n            "),a("span",{staticClass:"token punctuation"},[a("span",{staticClass:"token punctuation"},[t._v("}")])]),a("span",{staticClass:"token punctuation"},[t._v(";")]),t._v("\n        "),a("span",{staticClass:"token punctuation"},[a("span",{staticClass:"token punctuation"},[t._v("}")])]),a("span",{staticClass:"token punctuation"},[t._v(",")]),t._v("\n        methods"),a("span",{staticClass:"token punctuation"},[t._v(":")]),t._v(" "),a("span",{staticClass:"token punctuation"},[a("span",{staticClass:"token punctuation"},[t._v("{")])]),t._v("\n            "),a("span",{staticClass:"token function"},[t._v("handleCheckAll")]),a("span",{staticClass:"token punctuation"},[t._v("(")]),t._v("e"),a("span",{staticClass:"token punctuation"},[t._v(")")]),t._v(" "),a("span",{staticClass:"token punctuation"},[a("span",{staticClass:"token punctuation"},[t._v("{")])]),t._v("\n                "),a("span",{staticClass:"token keyword"},[t._v("this")]),a("span",{staticClass:"token punctuation"},[t._v(".")]),t._v("checkedRoles "),a("span",{staticClass:"token operator"},[t._v("=")]),t._v(" e"),a("span",{staticClass:"token punctuation"},[t._v(".")]),t._v("target"),a("span",{staticClass:"token punctuation"},[t._v(".")]),t._v("checked "),a("span",{staticClass:"token operator"},[t._v("?")]),t._v(" "),a("span",{staticClass:"token keyword"},[t._v("this")]),a("span",{staticClass:"token punctuation"},[t._v(".")]),t._v("roleList "),a("span",{staticClass:"token punctuation"},[t._v(":")]),t._v(" "),a("span",{staticClass:"token punctuation"},[t._v("[")]),a("span",{staticClass:"token punctuation"},[t._v("]")]),a("span",{staticClass:"token punctuation"},[t._v(";")]),t._v("\n            "),a("span",{staticClass:"token punctuation"},[a("span",{staticClass:"token punctuation"},[t._v("}")])]),a("span",{staticClass:"token punctuation"},[t._v(",")]),t._v("\n            "),a("span",{staticClass:"token function"},[t._v("handleCheckRole")]),a("span",{staticClass:"token punctuation"},[t._v("(")]),t._v("val"),a("span",{staticClass:"token punctuation"},[t._v(")")]),t._v(" "),a("span",{staticClass:"token punctuation"},[a("span",{staticClass:"token punctuation"},[t._v("{")])]),t._v("\n                "),a("span",{staticClass:"token keyword"},[t._v("let")]),t._v(" count "),a("span",{staticClass:"token operator"},[t._v("=")]),t._v(" val"),a("span",{staticClass:"token punctuation"},[t._v(".")]),t._v("length"),a("span",{staticClass:"token punctuation"},[t._v(";")]),t._v("\n                "),a("span",{staticClass:"token keyword"},[t._v("this")]),a("span",{staticClass:"token punctuation"},[t._v(".")]),t._v("checkAll "),a("span",{staticClass:"token operator"},[t._v("=")]),t._v(" count "),a("span",{staticClass:"token operator"},[t._v("===")]),t._v(" "),a("span",{staticClass:"token keyword"},[t._v("this")]),a("span",{staticClass:"token punctuation"},[t._v(".")]),t._v("roleList"),a("span",{staticClass:"token punctuation"},[t._v(".")]),t._v("length"),a("span",{staticClass:"token punctuation"},[t._v(";")]),t._v("\n                "),a("span",{staticClass:"token keyword"},[t._v("this")]),a("span",{staticClass:"token punctuation"},[t._v(".")]),t._v("indeterminate "),a("span",{staticClass:"token operator"},[t._v("=")]),t._v(" count "),a("span",{staticClass:"token operator"},[t._v(">")]),t._v(" "),a("span",{staticClass:"token number"},[t._v("0")]),t._v(" "),a("span",{staticClass:"token operator"},[t._v("&&")]),t._v(" count "),a("span",{staticClass:"token operator"},[t._v("<")]),t._v(" "),a("span",{staticClass:"token keyword"},[t._v("this")]),a("span",{staticClass:"token punctuation"},[t._v(".")]),t._v("roleList"),a("span",{staticClass:"token punctuation"},[t._v(".")]),t._v("length"),a("span",{staticClass:"token punctuation"},[t._v(";")]),t._v("\n            "),a("span",{staticClass:"token punctuation"},[a("span",{staticClass:"token punctuation"},[t._v("}")])]),t._v("\n        "),a("span",{staticClass:"token punctuation"},[a("span",{staticClass:"token punctuation"},[t._v("}")])]),t._v("\n    "),a("span",{staticClass:"token punctuation"},[a("span",{staticClass:"token punctuation"},[t._v("}")])]),a("span",{staticClass:"token punctuation"},[t._v(";")]),t._v("\n")]),a("span",{staticClass:"token tag"},[a("span",{staticClass:"token tag"},[a("span",{staticClass:"token punctuation"},[t._v("</")]),t._v("script")]),a("span",{staticClass:"token punctuation"},[t._v(">")])]),t._v("\n\n")])])]),t._v(" "),a("h2",[t._v("Checkbox Props")]),t._v(" "),t._m(0,!1,!1),t._v(" "),a("h2",[t._v("Checkbox Events")]),t._v(" "),t._m(1,!1,!1),t._v(" "),a("h2",[t._v("Checkbox Slot")]),t._v(" "),t._m(2,!1,!1),t._v(" "),a("h2",[t._v("CheckboxGroup Props")]),t._v(" "),t._m(3,!1,!1),t._v(" "),a("h2",[t._v("CheckboxGroup Events")]),t._v(" "),t._m(4,!1,!1)],1)},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("table",{staticClass:"markdown-table"},[s("thead",[s("tr",[s("th",[this._v("名字")]),this._v(" "),s("th",[this._v("类型")]),this._v(" "),s("th",[this._v("默认")]),this._v(" "),s("th",[this._v("描述")]),this._v(" "),s("th",[this._v("是否必选")]),this._v(" "),s("th",[this._v("可选值")])])]),this._v(" "),s("tbody",[s("tr",[s("td",[this._v("v-model")]),this._v(" "),s("td",[this._v("Boolean")]),this._v(" "),s("td"),this._v(" "),s("td",[this._v("绑定值")]),this._v(" "),s("td",[this._v("单选框时必选")]),this._v(" "),s("td",[this._v("true,false")])]),this._v(" "),s("tr",[s("td",[this._v("value")]),this._v(" "),s("td",[this._v("String, Number, Boolean")]),this._v(" "),s("td",[this._v("无")]),this._v(" "),s("td"),this._v(" "),s("td",[this._v("仅在使用多选框组合时起作用，此场景下必填，指定当前选项的"),s("code",[this._v("value")]),this._v("值，会自动判断是否选中")]),this._v(" "),s("td")]),this._v(" "),s("tr",[s("td",[this._v("disabled")]),this._v(" "),s("td",[this._v("Boolean")]),this._v(" "),s("td",[this._v("false")]),this._v(" "),s("td",[this._v("禁用状态")]),this._v(" "),s("td",[this._v("可选")]),this._v(" "),s("td",[s("code",[this._v("true")]),this._v(", "),s("code",[this._v("false")])])]),this._v(" "),s("tr",[s("td",[this._v("interminate")]),this._v(" "),s("td",[this._v("Boolean")]),this._v(" "),s("td",[this._v("false")]),this._v(" "),s("td",[this._v("不确定状态")]),this._v(" "),s("td",[this._v("可选")]),this._v(" "),s("td")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("table",{staticClass:"markdown-table"},[s("thead",[s("tr",[s("th",[this._v("事件名")]),this._v(" "),s("th",[this._v("说明")]),this._v(" "),s("th",[this._v("返回值")]),this._v(" "),s("th",[this._v("设置属性")])])]),this._v(" "),s("tbody",[s("tr",[s("td",[this._v("change")]),this._v(" "),s("td",[this._v("多选框值改变时触发")]),this._v(" "),s("td",[this._v("当前事件"),s("code",[this._v("event")])]),this._v(" "),s("td",[s("code",[this._v("@change")])])])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("table",{staticClass:"markdown-table"},[s("thead",[s("tr",[s("th",[this._v("名称")]),this._v(" "),s("th",[this._v("说明")])])]),this._v(" "),s("tbody",[s("tr",[s("td",[this._v("default")]),this._v(" "),s("td",[this._v("默认内容，放在"),s("code",[this._v("<x-checkbox></x-checkbox>")]),this._v("之间即可")])])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("table",{staticClass:"markdown-table"},[s("thead",[s("tr",[s("th",[this._v("名字")]),this._v(" "),s("th",[this._v("类型")]),this._v(" "),s("th",[this._v("默认")]),this._v(" "),s("th",[this._v("描述")]),this._v(" "),s("th",[this._v("是否必选")]),this._v(" "),s("th",[this._v("可选值")])])]),this._v(" "),s("tbody",[s("tr",[s("td",[this._v("v-model")]),this._v(" "),s("td",[this._v("Array")]),this._v(" "),s("td"),this._v(" "),s("td",[this._v("绑定值")]),this._v(" "),s("td",[this._v("必选")]),this._v(" "),s("td")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("table",{staticClass:"markdown-table"},[s("thead",[s("tr",[s("th",[this._v("事件名")]),this._v(" "),s("th",[this._v("说明")]),this._v(" "),s("th",[this._v("返回值")]),this._v(" "),s("th",[this._v("设置属性")])])]),this._v(" "),s("tbody",[s("tr",[s("td",[this._v("change")]),this._v(" "),s("td",[this._v("多选框值改变时触发")]),this._v(" "),s("td",[this._v("当前事件"),s("code",[this._v("event")])]),this._v(" "),s("td",[s("code",[this._v("@change")])])])])])}]}}});
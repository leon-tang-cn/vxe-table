(window["webpackJsonpVXETable"]=window["webpackJsonpVXETable"]||[]).push([["scroll"],{4467:function(e,t,a){"use strict";a.r(t);var l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("p",[e._v("虚拟滚动渲染，加载 10 万行 1 万列，左右固定列")]),a("p",[e._v("大数据不建议使用双向绑定的 "),a("table-api-link",{attrs:{name:"data"}}),e._v(" 属性（vue 监听会大数据会短暂的卡顿），建议使用 "),a("table-api-link",{attrs:{prop:"loadData"}}),e._v("/"),a("table-api-link",{attrs:{prop:"loadColumn"}}),e._v(" 函数")],1),a("p",[e._v("对于多选 type="),a("table-column-api-link",{attrs:{prop:"selection"}}),e._v(" 当数据量海量时应该绑定 "),a("table-api-link",{attrs:{prop:"checkProp"}}),e._v(" 属性渲染速度更快")],1),a("p",[e._v("数据超大情况下必须使用："),a("table-api-link",{attrs:{prop:"show-overflow"}}),e._v("，"),a("table-api-link",{attrs:{prop:"show-header-overflow"}}),e._v(" 参数以及调整好 "),a("table-api-link",{attrs:{prop:"optimization"}}),e._v(" ：{scrollX,scrollY} 适合的参数可以更加流畅")],1),a("vxe-grid",{ref:"xTable",attrs:{border:"",resizable:"","show-overflow":"","show-header-overflow":"",height:"600",loading:e.loading,"select-config":{checkProp:"checked"},optimization:{scrollX:{gt:20,oSize:4,rSize:10},scrollY:{gt:500,oSize:20,rSize:60}}}})],1)},r=[],o={data:function(){return{loading:!1}},created:function(){var e=this;this.loading=!0,setTimeout(function(){var t=window.MOCK_DATA_LIST.slice(0,1e5),a=window.MOCK_COLUMN_LIST.slice(0,1e4);e.$refs.xTable&&(e.$refs.xTable.loadColumn(a),e.$refs.xTable.loadData(t)),e.loading=!1},300)}},n=o,i=a("2877"),s=Object(i["a"])(n,l,r,!1,null,null,null);t["default"]=s.exports},"9b96":function(e,t,a){"use strict";a.r(t);var l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("p",[e._v("虚拟滚动渲染，加载 1 万行 1 万列")]),a("p",[e._v("大数据不建议使用双向绑定的 "),a("table-api-link",{attrs:{name:"data"}}),e._v(" 属性（vue 监听会大数据会短暂的卡顿），建议使用 "),a("table-api-link",{attrs:{prop:"loadData"}}),e._v("/"),a("table-api-link",{attrs:{prop:"loadColumn"}}),e._v(" 函数")],1),a("vxe-grid",{ref:"xTable",attrs:{border:"",resizable:"","show-overflow":"","show-header-overflow":"",height:"300",loading:e.loading,"select-config":{checkProp:"checked"},optimization:{scrollX:{gt:20,oSize:4,rSize:10},scrollY:{gt:500,oSize:10,rSize:30}}}})],1)},r=[],o={data:function(){return{loading:!1}},created:function(){var e=this;this.loading=!0,setTimeout(function(){var t=window.MOCK_DATA_LIST.slice(0,1e4),a=window.MOCK_COLUMN_LIST.slice(0,1e4).map(function(e){return Object.assign({},e,{fixed:void 0})});e.$refs.xTable&&(e.$refs.xTable.loadColumn(a),e.$refs.xTable.loadData(t)),e.loading=!1},500)}},n=o,i=a("2877"),s=Object(i["a"])(n,l,r,!1,null,null,null);t["default"]=s.exports},ac09:function(e,t,a){"use strict";a.r(t);var l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("p",[e._v("虚拟滚动渲染，加载 10 万行，左右固定列")]),a("p",[e._v("大数据不建议使用双向绑定的 data 属性（vue 监听会大数据会短暂的卡顿），建议使用 "),a("table-api-link",{attrs:{prop:"loadData"}}),e._v("/"),a("table-api-link",{attrs:{prop:"reloadData"}}),e._v(" 函数")],1),a("p",[e._v("对于多选 type="),a("table-column-api-link",{attrs:{prop:"selection"}}),e._v(" 当数据量海量时应该绑定 "),a("table-api-link",{attrs:{prop:"checkProp"}}),e._v(" 属性渲染速度更快")],1),a("p",[e._v("数据超大情况下必须使用："),a("table-api-link",{attrs:{prop:"show-overflow"}}),e._v("，"),a("table-api-link",{attrs:{prop:"show-header-overflow"}}),e._v(" 参数以及调整好 "),a("table-api-link",{attrs:{prop:"optimization"}}),e._v(" ：{scrollX,scrollY} 适合的参数可以更加流畅")],1),a("vxe-table",{ref:"xTable",attrs:{border:"",resizable:"","show-overflow":"",height:"600",loading:e.loading,"select-config":{checkProp:"checked"},optimization:{scrollY:{gt:500,oSize:20,rSize:60}}}},[a("vxe-table-column",{attrs:{type:"selection",width:"60",fixed:"left"}}),a("vxe-table-column",{attrs:{type:"index",width:"100",fixed:"left"}}),a("vxe-table-column",{attrs:{prop:"name",label:"Name",sortable:"",width:"200"}}),a("vxe-table-column",{attrs:{prop:"sex",label:"Sex",width:"200"}}),a("vxe-table-column",{attrs:{prop:"rate",label:"Rate",width:"200"}}),a("vxe-table-column",{attrs:{prop:"region",label:"Region",width:"200"}}),a("vxe-table-column",{attrs:{prop:"time",label:"Time",width:"200"}}),a("vxe-table-column",{attrs:{prop:"address",label:"Address",width:"300"}}),a("vxe-table-column",{attrs:{prop:"updateTime",label:"UpdateTime",width:"200"}}),a("vxe-table-column",{attrs:{prop:"createTime",label:"CreateTime",width:"200"}}),a("vxe-table-column",{attrs:{prop:"attr1",label:"Attr1",width:"200"}}),a("vxe-table-column",{attrs:{prop:"attr2",label:"Attr2",width:"200"}}),a("vxe-table-column",{attrs:{prop:"attr3",label:"Attr3",width:"200"}}),a("vxe-table-column",{attrs:{prop:"attr4",label:"Attr4",width:"200"}}),a("vxe-table-column",{attrs:{prop:"attr5",label:"Attr5",width:"200"}}),a("vxe-table-column",{attrs:{prop:"attr6",label:"Attr6",width:"200"}}),a("vxe-table-column",{attrs:{prop:"attr7",label:"Attr7",width:"200"}}),a("vxe-table-column",{attrs:{prop:"attr8",label:"Attr8",width:"200"}}),a("vxe-table-column",{attrs:{prop:"attr9",label:"Attr9",width:"200"}}),a("vxe-table-column",{attrs:{prop:"createTime",label:"CreateTime",width:"200"}}),a("vxe-table-column",{attrs:{prop:"age",label:"Age",width:"200",fixed:"right"}})],1)],1)},r=[],o={data:function(){return{loading:!1}},created:function(){var e=this;this.loading=!0,setTimeout(function(){var t=window.MOCK_DATA_LIST.slice(0,1e5);e.$refs.xTable&&e.$refs.xTable.reloadData(t),e.loading=!1},300)}},n=o,i=a("2877"),s=Object(i["a"])(n,l,r,!1,null,null,null);t["default"]=s.exports},bba7:function(e,t,a){"use strict";a.r(t);var l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("p",[e._v("虚拟滚动渲染，加载 1 万行，左右固定列")]),a("p",[e._v("大数据不建议使用双向绑定的 "),a("table-api-link",{attrs:{name:"data"}}),e._v(" 属性（vue 监听会大数据会短暂的卡顿），建议使用 "),a("table-api-link",{attrs:{prop:"loadData"}}),e._v("/"),a("table-api-link",{attrs:{prop:"reloadData"}}),e._v(" 函数")],1),a("vxe-table",{ref:"xTable",attrs:{border:"",resizable:"","show-overflow":"",height:"300",loading:e.loading,optimization:{scrollY:{gt:500,oSize:10,rSize:30}}}},[e._v(">\n    "),a("vxe-table-column",{attrs:{type:"index",width:"100"}}),a("vxe-table-column",{attrs:{prop:"name",label:"Name",sortable:"",width:"200"}}),a("vxe-table-column",{attrs:{prop:"age",label:"Age",width:"200"}}),a("vxe-table-column",{attrs:{prop:"sex",label:"Sex",width:"200"}}),a("vxe-table-column",{attrs:{prop:"rate",label:"Rate",width:"200"}}),a("vxe-table-column",{attrs:{prop:"region",label:"Region",width:"200"}}),a("vxe-table-column",{attrs:{prop:"time",label:"Time",width:"200"}}),a("vxe-table-column",{attrs:{prop:"address",label:"Address",width:"300","show-overflow":""}}),a("vxe-table-column",{attrs:{prop:"updateTime",label:"UpdateTime",width:"200"}}),a("vxe-table-column",{attrs:{prop:"createTime",label:"CreateTime",width:"200"}}),a("vxe-table-column",{attrs:{prop:"attr1",label:"Attr1",width:"200"}}),a("vxe-table-column",{attrs:{prop:"attr2",label:"Attr2",width:"200"}}),a("vxe-table-column",{attrs:{prop:"attr3",label:"Attr3",width:"200"}}),a("vxe-table-column",{attrs:{prop:"attr4",label:"Attr4",width:"200"}}),a("vxe-table-column",{attrs:{prop:"attr5",label:"Attr5",width:"200"}}),a("vxe-table-column",{attrs:{prop:"attr6",label:"Attr6",width:"200"}}),a("vxe-table-column",{attrs:{prop:"attr7",label:"Attr7",width:"200"}}),a("vxe-table-column",{attrs:{prop:"attr8",label:"Attr8",width:"200"}}),a("vxe-table-column",{attrs:{prop:"attr9",label:"Attr9",width:"200"}}),a("vxe-table-column",{attrs:{prop:"createTime",label:"CreateTime",width:"200"}})],1)],1)},r=[],o={data:function(){return{loading:!1}},created:function(){var e=this;this.loading=!0,setTimeout(function(){var t=window.MOCK_DATA_LIST.slice(0,1e4);e.$refs.xTable&&e.$refs.xTable.loadData(t),e.loading=!1},300)}},n=o,i=a("2877"),s=Object(i["a"])(n,l,r,!1,null,null,null);t["default"]=s.exports},d291:function(e,t,a){"use strict";a.r(t);var l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("p",[e._v("虚拟滚动渲染，只会渲染可视区域的数据，对于海量数据的性能提升非常大")]),a("p",[e._v("相关参数说明 {seq: 序号, $rowIndex: 获取渲染中的行索引, rowIndex: 获取真实的行索引, row: 获取行数据, column: 获取列配置, columnIndex: 获取真实列索引，$columnIndex:获取渲染中的列索引}")]),a("vxe-table",{attrs:{border:"","highlight-hover-row":"",height:"300",data:e.tableData},on:{"update:data":function(t){e.tableData=t}}},[a("vxe-table-column",{attrs:{type:"index",width:"100"}}),a("vxe-table-column",{attrs:{prop:"name",label:"Name",sortable:""}}),a("vxe-table-column",{attrs:{prop:"sex",label:"Sex"}}),a("vxe-table-column",{attrs:{prop:"age",label:"Age"}}),a("vxe-table-column",{attrs:{prop:"address",label:"Address","show-overflow":""}})],1),a("p",{staticClass:"demo-code"},[e._v(e._s(e.$t("app.body.button.showCode")))]),a("pre",[e._v("    "),a("code",{staticClass:"xml"},[e._v(e._s(e.demoCodes[0]))]),e._v("\n    "),a("code",{staticClass:"javascript"},[e._v(e._s(e.demoCodes[1]))]),e._v("\n  ")]),a("p",[e._v("高级配置项")]),a("p",[e._v("参数 "),a("table-api-link",{attrs:{prop:"scrollX"}}),e._v(": {gt: 16, oSize: 4, rSize: 10},"),a("table-api-link",{attrs:{prop:"scrollY"}}),e._v(": {gt: 500, oSize: 30, rSize: 80}，当数据量过大时请调整到适合的参数可以使渲染更快")],1),a("p",[e._v("数据超大情况下必须使用："),a("table-api-link",{attrs:{prop:"show-overflow"}}),e._v("，"),a("table-api-link",{attrs:{prop:"show-header-overflow"}}),e._v(" 参数以及调整好 "),a("table-api-link",{attrs:{prop:"optimization"}}),e._v(" ：{scrollX,scrollY} 适合的参数可以更加流畅")],1),a("vxe-table",{ref:"xTable",attrs:{border:"","show-overflow":"",height:"300"}},[a("vxe-table-column",{attrs:{type:"index",width:"100"}}),a("vxe-table-column",{attrs:{prop:"name",label:"Name",sortable:""}}),a("vxe-table-column",{attrs:{prop:"sex",label:"Sex"}}),a("vxe-table-column",{attrs:{prop:"age",label:"Age"}}),a("vxe-table-column",{attrs:{prop:"address",label:"Address","show-overflow":""}})],1),a("p",{staticClass:"demo-code"},[e._v(e._s(e.$t("app.body.button.showCode")))]),a("pre",[e._v("    "),a("code",{staticClass:"xml"},[e._v(e._s(e.demoCodes[2]))]),e._v("\n    "),a("code",{staticClass:"javascript"},[e._v(e._s(e.demoCodes[3]))]),e._v("\n  ")])],1)},r=[],o=(a("5df3"),a("1c4c"),a("ac6a"),a("1487")),n=a.n(o),i={data:function(){return{tableData:[],tableData2:[],demoCodes:['\n        <vxe-table\n          border\n          highlight-hover-row\n          height="300"\n          :data.sync="tableData">\n          <vxe-table-column type="index" width="100"></vxe-table-column>\n          <vxe-table-column prop="name" label="Name" sortable></vxe-table-column>\n          <vxe-table-column prop="sex" label="Sex"></vxe-table-column>\n          <vxe-table-column prop="age" label="Age"></vxe-table-column>\n          <vxe-table-column prop="address" label="Address" show-overflow></vxe-table-column>\n        </vxe-table>\n        ',"\n        export default {\n          data () {\n            return {\n              tableData: []\n            }\n          },\n          created () {\n            this.tableData = window.MOCK_DATA_LIST.slice(0, 200)\n          }\n        }\n        ",'\n        <vxe-table\n          ref="xTable"\n          border\n          show-overflow\n          height="300"\n          :data.sync="tableData2">\n          <vxe-table-column type="index" width="100"></vxe-table-column>\n          <vxe-table-column prop="name" label="Name" sortable></vxe-table-column>\n          <vxe-table-column prop="sex" label="Sex"></vxe-table-column>\n          <vxe-table-column prop="age" label="Age"></vxe-table-column>\n          <vxe-table-column prop="address" label="Address" show-overflow></vxe-table-column>\n        </vxe-table>\n        ',"\n        export default {\n          data () {\n            return {\n              tableData2: []\n            }\n          },\n          created () {\n            this.$nextTick(() => {\n              this.$refs.xTable.reloadData(window.MOCK_DATA_LIST.slice(0, 10000))\n            })\n          }\n        }\n        "]}},created:function(){var e=this;this.tableData=window.MOCK_DATA_LIST.slice(0,200),this.$nextTick(function(){e.$refs.xTable.reloadData(window.MOCK_DATA_LIST.slice(0,1e4))})},mounted:function(){Array.from(this.$el.querySelectorAll("pre code")).forEach(function(e){n.a.highlightBlock(e)})}},s=i,p=a("2877"),b=Object(p["a"])(s,l,r,!1,null,null,null);t["default"]=b.exports}}]);
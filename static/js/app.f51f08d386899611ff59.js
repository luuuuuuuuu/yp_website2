webpackJsonp([1],{"+BTi":function(t,e){},"+Rdb":function(t,e){},"/bpg":function(t,e){},"/i/W":function(t,e){},"7J0f":function(t,e){},"7Otq":function(t,e,a){t.exports=a.p+"static/img/logo.46e96d0.png"},DSCY:function(t,e){},GXEp:function(t,e){},H3rH:function(t,e){},"IUI+":function(t,e){},Iun5:function(t,e){},IxJZ:function(t,e){},L5FV:function(t,e){},M9yL:function(t,e){},Mf0D:function(t,e){},NFZi:function(t,e){},NHnr:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});a("hXTu"),a("+BTi");var i=a("y7os"),r=a.n(i),s=(a("vBcO"),a("ARSI")),n=a.n(s),o=(a("jZDA"),a("91Nw")),c=a.n(o),l=(a("d7TW"),a("ajQY")),u=a.n(l),d=(a("ukeg"),a("f65a")),m=a.n(d),p=(a("NOFV"),a("mWcH")),h=a.n(p),g=(a("ZzA9"),a("cgIP")),v=a.n(g),f=(a("H3rH"),a("6mNG")),C=a.n(f),b=(a("Iun5"),a("ttjG")),_=a.n(b),y=(a("Q6SQ"),a("LQMI")),S=a.n(y),P=(a("xBlb"),a("dVA0")),D=a.n(P),A=(a("/bpg"),a("ACGT")),w=a.n(A),x=(a("Mf0D"),a("exT9")),I=a.n(x),L=(a("bwiK"),a("SExR")),B=a.n(L),E=(a("DSCY"),a("LaeV")),k=a.n(E),T=(a("IxJZ"),a("NoPp")),U=a.n(T),M=(a("IUI+"),a("h2ff")),N=a.n(M),F=(a("M9yL"),a("OSLW")),R=a.n(F),H=(a("/i/W"),a("V1RD")),O=a.n(H),V=(a("RWjY"),a("aMwW")),$=a.n(V),G=(a("Zae5"),a("7kP/")),W=a.n(G),q=(a("NFZi"),a("4KUO")),Y=a.n(q),z=(a("V5v9"),a("D8db")),Q=a.n(z),j=(a("GXEp"),a("mtrD")),Z=a.n(j),X=(a("Yq4J"),a("qubY")),K=a.n(X),J=(a("Zki6"),a("0kY3")),tt=a.n(J),et=(a("X+ky"),a("HJMx")),at=a.n(et),it=(a("+Rdb"),a("Mezo")),rt=a.n(it),st=(a("qunJ"),a("vqwl")),nt=a.n(st),ot=(a("cwe7"),a("2X9z")),ct=a.n(ot),lt=(a("oq7i"),a("+TD8")),ut=a.n(lt),dt=a("7+uW"),mt={props:{menuItems:{type:Array,default:function(){return["menu-1","menu-2","menu-3"]}}},data:function(){return{activeIndex:"1"}},created:function(){var t=this.$route.path;this.activeIndex="/index"===t?"1":"/about"===t?"2":"/contact"===t?"6":this.menuItems[0]},watch:{$route:function(t,e){var a=t.path;this.activeIndex="/index"===a?"1":"/about"===a?"2":"/contact"===a?"6":this.menuItems[0]}},methods:{handleSelect:function(t,e){if("3"===e[0]||"4"===e[0]||"5"===e[0]){var a=this.$route.path;"3"===e[0]&&this.resetSetItem("watchStorage",e[1]),"4"===e[0]&&this.resetSetItem("watchStorage","2"),"5"===e[0]&&this.resetSetItem("watchStorage","3"),"/productList"!==a&&this.$router.push({name:"ProductList",params:{keyPath:e}})}}}},pt={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"tab_div"},[a("el-menu",{staticClass:"el-menu-demo",attrs:{"default-active":t.activeIndex,mode:"horizontal","background-color":"#545c64","text-color":"#fff","active-text-color":"#ffd04b"},on:{select:t.handleSelect}},[a("el-menu-item",{attrs:{index:"1"}},[a("router-link",{attrs:{tag:"div",to:"/index"}},[t._v("HOME")])],1),t._v(" "),a("el-menu-item",{attrs:{index:"2"}},[a("router-link",{attrs:{tag:"div",to:"/about"}},[t._v("ABOUT US")])],1),t._v(" "),a("el-submenu",{attrs:{index:"3"}},[a("template",{slot:"title"},[t._v("USB-C CABLE")]),t._v(" "),t._l(t.menuItems,function(e){return a("el-menu-item",{key:e,attrs:{index:e}},[t._v(t._s(e))])})],2),t._v(" "),a("el-menu-item",{attrs:{index:"4"}},[a("router-link",{ref:"tab_4",attrs:{tag:"div",to:"/productList"}},[t._v("HDMI CABLE")])],1),t._v(" "),a("el-menu-item",{attrs:{index:"5"}},[a("router-link",{ref:"tab_5",attrs:{tag:"div",to:"/productList"}},[t._v("DISPLAYPORT CABLE")])],1),t._v(" "),a("el-menu-item",{attrs:{index:"6"}},[a("router-link",{attrs:{tag:"div",to:"/contact"}},[t._v("CONTACT")])],1)],1)],1)},staticRenderFns:[]};var ht={name:"App",components:{Tab:a("VU/8")(mt,pt,!1,function(t){a("L5FV")},"data-v-2300e218",null).exports},data:function(){return{menuItems:["A-C","C-C with E-marker","C-usb3.0 AF"]}},methods:{}},gt={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"app"}},[i("el-container",[i("el-header",{staticStyle:{"margin-top":"-10px"},attrs:{height:"185px"}},[i("el-row",[i("div",{staticClass:"header_top_text"},[t._v("Welcom To Visit Our Web: "),i("a",{attrs:{href:"http://www.corecabe.com"}},[t._v("http://www.corecabe.com")])]),t._v(" "),i("el-divider",{attrs:{"content-position":"left"}}),t._v(" "),i("el-col",{attrs:{span:12}},[i("div",[i("img",{staticStyle:{width:"380px",height:"75px",float:"left"},attrs:{src:a("7Otq")}})])]),t._v(" "),i("el-col",{attrs:{span:12}})],1),t._v(" "),i("Tab",{attrs:{"menu-items":t.menuItems}})],1),t._v(" "),i("el-main",[i("keep-alive",[i("router-view")],1)],1),t._v(" "),i("el-footer",{attrs:{height:"0"}},[i("div",{staticClass:"copyright"})])],1),t._v(" "),i("el-backtop")],1)},staticRenderFns:[]};var vt=a("VU/8")(ht,gt,!1,function(t){a("hpcH")},null,null).exports,ft=a("/ocq"),Ct={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"banner"},[a("el-carousel",{attrs:{interval:3e3,type:"",height:"300px"}},t._l(t.bannerList,function(e,i){return a("el-carousel-item",{key:e},[a("el-image",{staticStyle:{height:"300px",width:"100%"},attrs:{src:e},on:{click:function(e){return t.clickBanner(i)}}})],1)}),1),t._v(" "),a("el-divider")],1)},staticRenderFns:[]};var bt=a("VU/8")({name:"Banner",data:function(){return{bannerList:["static/images/banner/1.png","static/images/banner/2.png","static/images/banner/3.png","static/images/banner/4.png","static/images/banner/5.png"]}},methods:{clickBanner:function(t){0===t?this.resetSetItem("watchStorage","A-C"):1===t?this.resetSetItem("watchStorage","C-C with E-marker"):2===t?this.resetSetItem("watchStorage","C-usb3.0 AF"):3===t?this.resetSetItem("watchStorage","2"):4===t&&this.resetSetItem("watchStorage","3"),this.$router.push({name:"ProductList",params:{bannerIndex:t}})}}},Ct,!1,function(t){a("mcSw")},"data-v-3649fdf9",null).exports,_t={name:"ProductListBox",props:{productList:{type:Array,default:function(){return[{img:"static/images/products/1/1/1.png",name:"static/images/products/1/1/1.png"}]}},isRecommend:{type:Boolean,default:!1}},created:function(){},methods:{clickImg:function(t){this.resetSetItem("watchStorageImageInfo",t),"/productDetail"!==this.$route.path&&this.$router.push({name:"ProductDetail",params:{url:t}})}}},yt={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"product_list_box"},t._l(t.productList,function(e){return i("div",{key:e.img,staticClass:"product_div",style:{height:t.isRecommend?"320px":""}},[i("el-card",{staticClass:"product_card",attrs:{shadow:"hover","body-style":{padding:"0px",marginBottom:"-4px"}}},[i("el-image",{staticClass:"product_image",attrs:{src:e.img,lazy:""},on:{click:function(a){return t.clickImg(e.img)}}},[i("div",{staticClass:"image-slot",attrs:{slot:"error"},slot:"error"},[i("img",{staticClass:"image-slot",attrs:{src:a("7Otq")}})])])],1),t._v(" "),t.isRecommend?i("span",{staticClass:"product_name"},[t._v(t._s(e.name))]):t._e(),t._v(" "),i("div",{staticStyle:{"text-align":"center","font-family":"initial"}},[t.isRecommend?i("span",{staticClass:"product_price"},[t._v("$ "),i("span",{staticStyle:{"font-size":"23px"}},[t._v(t._s(e.price.split(".")[0]))]),t._v("."+t._s(e.price.split(".")[1]))]):t._e()]),t._v(" "),i("div",{staticStyle:{"text-align":"center","margin-top":"5px"}},[t.isRecommend?i("el-button",{attrs:{type:"info",size:"small"},on:{click:function(a){return t.clickImg(e.img)}}},[t._v("View Details")]):t._e(),t._v(" "),t.isRecommend?i("el-button",{attrs:{type:"primary",size:"small"},on:{click:function(a){return t.clickImg(e.img)}}},[t._v("Buy Now")]):t._e()],1)],1)}),0)])},staticRenderFns:[]};var St=a("VU/8")(_t,yt,!1,function(t){a("uqmp")},null,null).exports,Pt={components:{ProductListBox:St,Banner:bt},data:function(){return{recommendProductsList:[{category:1,name:"USB-C CABLE(A-C)",img:"static/images/products/1/1/1.png",price:"7.99"},{category:2,name:"USB-C CABLE(C-C with E-marker)",img:"static/images/products/1/2/1.png",price:"17.99"},{category:3,name:"USB-C CABLE(C-usb3.0 AF)",img:"static/images/products/1/3/1.png",price:"9.99"},{category:4,name:"HDMI CABLE",img:"static/images/products/2/1.png",price:"9.99"},{category:5,name:"DISPLAYPORT CABLE",img:"static/images/products/3/1.png",price:"10.99"}]}},created:function(){},methods:{tabHandleClick:function(t,e){}}},Dt={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"hello"},[a("Banner"),t._v(" "),a("div",{},[a("div",{staticClass:"aboutBox"},[a("router-link",{attrs:{to:"/about"}},[a("a",{staticClass:"aboutMore",attrs:{href:"#"}},[t._v("MORE +")])]),t._v(" "),t._m(0),t._v(" "),t._m(1)],1)]),t._v(" "),a("div",{staticClass:"product_recommend"},[a("div",{staticClass:"product_recommend_tab"},[a("el-tabs",{staticStyle:{"margin-left":"40px"},on:{"tab-click":t.tabHandleClick}},[a("el-tab-pane",{attrs:{label:"Main Products"}})],1),t._v(" "),a("el-link",{staticStyle:{margin:"-40px 30px 0px 0px",float:"right"},attrs:{type:"primary"}},[a("router-link",{attrs:{to:"/productList"}},[t._v("More >>")])],1)],1),t._v(" "),a("ProductListBox",{attrs:{"product-list":t.recommendProductsList,"is-recommend":!0}})],1)],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"aboutTitle"},[e("h1",[this._v("Company Profile")]),this._v(" "),e("span",[this._v("ABOUT US")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("section",[this._v("\n              CoreCabe is a comprehensive enterprise dedicated in Consumer Electronics and Computer Accessories & Peripheral; It combines R&D, production, marketing, and service together. The Company's products include HDMI/DisplayPort /USB/DVI/VGA Cable, Adapters and Automobile Wire Harness. Its self-owned brand UCoreCabe is now popularly Welcome and Recognized by customers. CoreCabe with his own technical strength, integrity services, in the high-tech enterprises maintained a healthy, stable and rapid sustainable development.\n        CoreCabe aims to Environment Protection and Seek Development from Innovation,It aims to continuously improve the User Experience and has a Fundamental Mission to give back to the community.\n        "),e("div",{staticClass:"br_class"}),this._v('\n        -Business Policy: "Quality First and Customer First "\n        '),e("div",{staticClass:"br_class"}),this._v('\n        -Talent Concept: " To teach one how to fish rather than just giving one a fish"\n      ')])}]};var At=a("VU/8")(Pt,Dt,!1,function(t){a("V5Fk")},"data-v-3715e42e",null).exports,wt={name:"LeftMenu",props:{activeIndex:{type:String,default:""}},data:function(){return{user:{username:"May",phone:"18138219389",mail:"Support@corecabe.com",address:"No.6 Yinkeng Road, Shangyuan Village, Qingxi Town,Dongguan, Guangdong,China"},menuItems:["HDMI CABLE","DISPLAYPORT CABLE"]}},methods:{handleSelect:function(t,e){if(this.$emit("change",t),"3"===e[0]||"4"===e[0]||"5"===e[0]){var a=this.$route.path;"3"===e[0]&&this.resetSetItem("watchStorage",e[1]),"4"===e[0]&&this.resetSetItem("watchStorage","2"),"5"===e[0]&&this.resetSetItem("watchStorage","3"),"/productList"!==a&&this.$router.push({name:"ProductList",params:{keyPath:e}})}}}},xt={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",[a("span",{staticStyle:{"margin-left":"27px","font-weight":"600"}},[t._v("Product Menu")]),t._v(" "),a("el-menu",{staticClass:"el-menu-vertical-demo",staticStyle:{width:"80%"},attrs:{"default-active":t.activeIndex},on:{select:t.handleSelect}},[a("el-submenu",{attrs:{index:"3"}},[a("template",{slot:"title"},[a("i",{staticClass:"el-icon-s-promotion"}),t._v(" "),a("span",[t._v("USB-C CABLE")])]),t._v(" "),a("el-menu-item-group",[a("el-menu-item",{attrs:{index:"A-C"}},[t._v("A-C")]),t._v(" "),a("el-menu-item",{attrs:{index:"C-C with E-marker"}},[t._v("C-C with E-marker")]),t._v(" "),a("el-menu-item",{attrs:{index:"C-usb3.0 AF"}},[t._v("C-usb3.0 AF")])],1)],2),t._v(" "),a("el-menu-item",{attrs:{index:"4"}},[a("i",{staticClass:"el-icon-s-promotion"}),t._v(" "),a("span",{attrs:{slot:"title"},slot:"title"},[t._v("HDMI CABLE")])]),t._v(" "),a("el-menu-item",{attrs:{index:"5"}},[a("i",{staticClass:"el-icon-s-promotion"}),t._v(" "),a("span",{attrs:{slot:"title"},slot:"title"},[t._v("DISPLAYPORT CABLE")])])],1)],1),t._v(" "),a("div",{staticClass:"contact_card"},[a("el-card",{staticClass:"box-card"},[a("div",{staticClass:"clearfix"},[a("span",{staticStyle:{"font-style":"oblique","font-family":"-webkit-body","font-weight":"800"}},[t._v("Contact Us")])]),t._v(" "),a("ul",{staticClass:"user-info"},[a("li",[t._v("Contact :"),a("div",{staticClass:"user-right"},[t._v(t._s(t.user.username))])]),t._v(" "),a("li",[t._v("Phone :"),a("div",{staticClass:"user-right"},[t._v(t._s(t.user.phone))])]),t._v(" "),a("li",[t._v("Mail :"),a("div",{staticClass:"user-right"},[t._v(t._s(t.user.mail))])]),t._v(" "),a("li",[t._v("Address :"),a("div",{staticClass:"user-right",staticStyle:{float:"none","margin-top":"10px"}},[t._v(" "+t._s(t.user.address))])])])])],1)])},staticRenderFns:[]};var It=a("VU/8")(wt,xt,!1,function(t){a("7J0f")},"data-v-0db8a990",null).exports,Lt={name:"Product",components:{ProductListBox:St,Banner:bt,LeftMenu:It},created:function(){var t=this;window.addEventListener("setItem",function(){var e=sessionStorage.getItem("watchStorage");t.watchStorage=e}),this.getCategoryNameList(),this.productList.length<=0&&(this.productList=this.categoryProductData[this.categoryNameList[0]]["A-C"]),this.$nextTick(function(){t.changeDataByRouterKeyPath()})},watch:{watchStorage:function(t,e){"2"!==t&&"3"!==t?(this.productList=this.categoryProductData["USB-C CABLE"][t],this.activeIndex="3",this.productName="USB-C CABLE > "+t):"2"===t?(this.productList=this.categoryProductData["HDMI CABLE"],this.activeIndex="4",this.productName="HDMI CABLE"):"3"===t&&(this.productList=this.categoryProductData["DISPLAYPORT CABLE"],this.productName="DISPLAYPORT CABLE")}},activated:function(){this.$route.params.bannerIndex;var t=this.$route.params.keyPath;void 0!==t&&("1"===this.watchStorage?(this.productList=this.categoryProductData["USB-C CABLE"][t[1]],this.activeIndex="3",this.productName="USB-C CABLE  "+[t[1]]):"2"===this.watchStorage?(this.productList=this.categoryProductData["HDMI CABLE"],this.activeIndex="4",this.productName="HDMI CABLE"):"3"===this.watchStorage&&(this.productList=this.categoryProductData["DISPLAYPORT CABLE"],this.productName="DISPLAYPORT CABLE"))},data:function(){return{productName:"USB-C CABLE > A-C",productList:[],categoryProductData:{"USB-C CABLE":{"A-C":this.getProductArr("static/images/products/1/1",8,"png"),"C-C with E-marker":this.getProductArr("static/images/products/1/2",8,"png"),"C-usb3.0 AF":this.getProductArr("static/images/products/1/3",12,"png")},"HDMI CABLE":this.getProductArr("static/images/products/2",8,"png"),"DISPLAYPORT CABLE":this.getProductArr("static/images/products/3",8,"png")},categoryNameList:[],activeIndex:"",watchStorage:"1"}},methods:{changeDataByRouterKeyPath:function(){var t=this.$route.params.keyPath;void 0!==t&&("1"===(t=t[0])?(this.productList=this.categoryProductData["USB-C CABLE"]["A-C"],this.activeIndex="1",this.productName="USB-C CABLE  A-C"):"2"===t?(this.productList=this.categoryProductData["USB-C CABLE"]["C-C with E-marker"],this.activeIndex="2",this.productName="USB-C CABLE  C-C with E-marker"):"3"===t?(this.productList=this.categoryProductData["USB-C CABLE"]["C-usb3.0 AF"],this.activeIndex="3",this.productName="USB-C CABLE  C-usb3.0 AF"):"4"===t?(this.productList=this.categoryProductData["HDMI CABLE"],this.activeIndex="4",this.productName="HDMI CABLE"):"5"===t&&(this.productList=this.categoryProductData["DISPLAYPORT CABLE"],this.productName="DISPLAYPORT CABLE"))},getProductArr:function(t,e,a){for(var i=[],r=1;r<=e;r++){var s={},n=t+"/"+r+"."+a;s.img=n,s.name=n,i.push(s)}return i},getCategoryNameList:function(){var t=[],e=this.categoryProductData;for(var a in e)t.push(a);this.categoryNameList=t},change:function(t){}}},Bt={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"content"},[a("el-row",{attrs:{gutter:10}},[a("el-col",{attrs:{span:6}},[a("div",{staticClass:"grid-content bg-purple"},[a("LeftMenu",{attrs:{"active-index":t.activeIndex},on:{change:t.change}})],1)]),t._v(" "),a("el-col",{attrs:{span:18}},[a("div",{staticClass:"grid-content bg-purple-light"},[a("el-breadcrumb",{attrs:{"separator-class":"el-icon-arrow-right"}},[a("el-breadcrumb-item",{attrs:{to:{path:"/index"}}},[t._v("HOME")]),t._v(" "),a("el-breadcrumb-item",[t._v("PRODUCT LIST")]),t._v(" "),a("el-breadcrumb-item",[t._v(t._s(t.productName))])],1),t._v(" "),a("div",{staticStyle:{"background-color":"#fafafa","border-radius":"3%"}},[a("div",{staticClass:"about_content"},[a("ProductListBox",{attrs:{"product-list":t.productList}})],1)])],1)])],1)],1)])},staticRenderFns:[]};var Et=a("VU/8")(Lt,Bt,!1,function(t){a("Nk/D")},"data-v-4862dccd",null).exports,kt={name:"ProductCarousel",props:{categoryProductList:{type:Array,default:function(){return[{img:"static/images/products/1/1/1.png",name:"static/images/products/1/1/1.png"}]}}},methods:{clickImg:function(t){this.$emit("clickImg",t)}}},Tt={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("el-carousel",{staticClass:"carousel_img_div",attrs:{interval:2e3,loop:!1,"indicator-position":"none"}},t._l(t.categoryProductList,function(e){return a("el-carousel-item",{key:e.img},[a("el-image",{staticStyle:{height:"300px",width:"300px","text-align":"center"},attrs:{src:e.img},on:{click:function(a){return t.clickImg(e.img)}}})],1)}),1)],1)},staticRenderFns:[]};var Ut={name:"detail",components:{ProductCarousel:a("VU/8")(kt,Tt,!1,function(t){a("VXeF")},"data-v-1fed6a65",null).exports,Banner:bt,LeftMenu:It},data:function(){return{activeIndex:"1",dialogFormVisible:!1,form:{name:"",phone:"",mail:"",quantity:"",content:""},rules:{name:[{required:!0,message:"Please enter your name",trigger:"blur"}],phone:[{required:!0,message:"Please enter your phone",trigger:"blur"}],mail:[{required:!0,message:"Please enter your mail",trigger:"blur"}],quantity:[{required:!0,message:"Please enter product quantity"},{type:"number",message:"only number"}]},formLabelWidth:"100px",watchStorageImageInfo:null,url:"static/images/products/1/1/1.png",srcList:["static/images/products/1/1/1.png"],categoryPrice:"9.9",categoryProductList:[],pNameDesc:"USB Type C 3.0 Cable, CORECABE USB A to Type C Fast Charging Nylon Braided Cord Compatible with Galaxy S10 S9 S8 Plus Note 9 8，MacBook, iPad Pro 2018,LG V30,V20,G6 and More",pDetailDescArr:["【Fast Charging and Sync】:Transfer speed up to 480Mbps, Safe charging at up to 3A is ensured by high-standard components,Super fast charging and Super fast transmission (up to max 5Gbps).","【Superb Backup Charging】:Compatible with any charging adaptor, multiport charging station or power bank; the perfect substitute for your missing charging cable.","【Extreme Durability & Tangle-free Design】:With a tested 5000+ bend lifespan, Premium nylon braided type c cable adds additional durability and tangle-free.","【Extensive Compatibility】:When used with a charger or power bank that supports Samsung Adaptive Fast Charging or Qualcomm Quick Charge, these cables will Fast Charge your Samsung Galaxy S8/S9/S10 Plus/Note 8 Note 9 or other compatible model.","【What you get】: We provide the Nylon Braided USB Type-C Cable with worry-free 18-month warranty and 24/7 customer service."],pNameDesc_2:"USB C to USB C 5A Cable (Gen2), CORECABE [2 Pack] 100W USB Power Delivery (PD) USB 3.1 Type-C Fast Charging Braided with E-Marker Compatible for Thunderbolt 3, Pixel, MacBook, Galaxy S10/S9/S8",pDetailDescArr_2:["· USB-C Cable with E-Marker Chipset, USB 3.1 Gen 2 standard, supports 100W PD and 20V/5A fast charging","· With E-Marker smart chip automatically adjust current, fast charging all your USB type c devices","· This cable delivers up to 20Gbps super speed;Tested with Samsung Portable SSD X5 up to 1671MB/s","· Compatible with: Macbook (Pro), Google Chromebook Pixel,Thunderbolt 3 SSD,Galaxy S10 S9 S8 plus ,etc","· What You Get: 2x 1.5ft Braided UseBean 5A USB-C 3.1 Gen2 cable with 18-month warranty"],pNameDesc_3:"USB C to USB 3.0 Adapter, CORECABE [0.5ft 2 Pack] Type C Thunderbolt 3 OTG Cable USB-C Male to USB A Female Convertor Compatible with MacBook Air/Pro 2018, Galaxy S10 S9 S8 Note 8 9, Pixel 2 3 XL",pDetailDescArr_3:["· [USB On-the Go] Uses USB OTG Technology, converts USB-C Female into USB-A Female.","· [USB 3.0 Super Speed Transfer]: Full USB 3.0 super speed data transfer up to 5Gbps, 10x faster than 2.0.","· [Nylon Tangle-free Design] Premium nylon braided cable adds additional durability and tangle free.","· [Compatibility] Compatible with all USB C devices, Samsung Galaxy S9 S8 Plus, Apple New Macbook Pro.","· [What you get] You can get 2pack USB C to USB Adapter in black with 18-month warranty."],pNameDesc_4:"HDMI 2.0 Cable, CORECABE High-Speed HDMI Cable 4K@60Hz,30AWG Braided HDMI Cord, Audio Return(ARC) Compatible with a UHD TV, Blu-ray, Xbox, PS4, PS3, PC, Projectors Any Other Hdmi-Enable Device",pDetailDescArr_4:["· Support Ethernet, 3D, 4K video at 60 Hz, 2160p, 48 bit/px color depth and Audio Return Channel (ARC),backwards compatible with HDMI 1.4 & 1.3/1.2/1.1version ","· Supports 3D Model Formats and Content，Supports Quick Frame Transport(QFT) , Supports Transmission Rate Up to 18Gbps","· Extensive Compatible with Apple TV, LG TV, Samsung QLED TV, Gaming Consoles, Xbox, Playstation, PS3, PS4 Pro, Projectors Any Other Hdmi-Enable Device, etc.","· Ultra Durability Design: Built with premium slim aluminum shell and high-quality nylon braided jacket, this HDMI cord can withstand bend test of 10,000+ times","· What You Get: 1 Pack Braided CORECABE HDMI 2.0 Cable with an 18-month warranty."],pNameDesc_5:"DisplayPort to HDMI Cable, CORECABE [6.6ft] High Speed DP to HDMI 4K@60Hz Black Braided Compatible for Lenovo, Dell, HP, ASUS",pDetailDescArr_5:["· Supports 4K (1080P@60Hz, 4K@60Hz,) Ultra HD resolution and uncompressed digital 7.1, 5.1 or 2 audio channels","· The cable connects a DisplayPort/ DisplayPort++ (DP/DP++) enabled computer to an HDTV, monitor, and projector with HDMI input for Audio and video streaming.","· Gold-plated connectors resist corrosion, provide durability and improve the signal transmission","· Compatible with: With 4K DP to HDMI Cable under mirror mode, you could view your laptop or desktop's screen or video on display or TV, play games or movies on TV easily","· What You Get: 1 Pack CORECABE  DisplayPort to HDMI Cable with 18-month warranty"]}},created:function(){var t=this,e=this.$route.params.url;void 0!==e&&(this.url=e,this.srcList=[e],this.changeProductDescByImageUrl(e)),window.addEventListener("setItem",function(){var e=sessionStorage.getItem("watchStorageImageInfo");t.watchStorageImageInfo=e})},watch:{watchStorageImageInfo:function(t,e){this.url=t,this.srcList=[t],this.changeProductDescByImageUrl(t)}},methods:{clickImage:function(t){this.url=t,this.srcList=[t]},getTheSameCategoryProductList:function(t){return 1===t?this.getProductArr("static/images/products/1/1",8,"png"):2===t?this.getProductArr("static/images/products/1/2",8,"png"):3===t?this.getProductArr("static/images/products/1/3",12,"png"):4===t?this.getProductArr("static/images/products/2",8,"png"):5===t?this.getProductArr("static/images/products/3",8,"png"):void 0},getProductArr:function(t,e,a){for(var i=[],r=1;r<=e;r++){var s={},n=t+"/"+r+"."+a;s.img=n,s.name=n,i.push(s)}return i},changeProductDescByImageUrl:function(t){-1!==t.indexOf("/images/products/1/1/")?(this.pNameDesc=this.pNameDesc,this.pDetailDescArr=this.pDetailDescArr,this.activeIndex="1",this.categoryPrice="7.99",this.categoryProductList=this.getTheSameCategoryProductList(1)):-1!==t.indexOf("/images/products/1/2/")?(this.pNameDesc=this.pNameDesc_2,this.pDetailDescArr=this.pDetailDescArr_2,this.activeIndex="2",this.categoryPrice="17.99",this.categoryProductList=this.getTheSameCategoryProductList(2)):-1!==t.indexOf("/images/products/1/3/")?(this.pNameDesc=this.pNameDesc_3,this.pDetailDescArr=this.pDetailDescArr_3,this.activeIndex="3",this.categoryPrice="9.99",this.categoryProductList=this.getTheSameCategoryProductList(3)):-1!==t.indexOf("/images/products/2/")?(this.pNameDesc=this.pNameDesc_4,this.pDetailDescArr=this.pDetailDescArr_4,this.activeIndex="4",this.categoryPrice="9.99",this.categoryProductList=this.getTheSameCategoryProductList(4)):-1!==t.indexOf("/images/products/3/")&&(this.pNameDesc=this.pNameDesc_5,this.pDetailDescArr=this.pDetailDescArr_5,this.activeIndex="5",this.categoryPrice="10.99",this.categoryProductList=this.getTheSameCategoryProductList(5))},change:function(t){},cancelForm:function(){this.resetForm("form")},submitForm:function(t){var e=this;this.$refs[t].validate(function(t){if(!t)return console.log("error submit!!"),!1;e.$message({type:"success",message:"Submit Success, our business staff will contact you as soon as possible, thank you for your attention !"}),e.resetForm("form")})},resetForm:function(t){this.dialogFormVisible=!1,this.form={name:"",phone:"",mail:"",quantity:"",content:""},this.$refs[t].resetFields()}}},Mt={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"content"},[a("el-row",{attrs:{gutter:10}},[a("el-col",{attrs:{span:6}},[a("div",{staticClass:"grid-content bg-purple"},[a("LeftMenu",{attrs:{"active-index":t.activeIndex},on:{change:t.change}})],1)]),t._v(" "),a("el-col",{attrs:{span:18}},[a("div",{staticClass:"grid-content bg-purple-light"},[a("el-breadcrumb",{attrs:{"separator-class":"el-icon-arrow-right"}},[a("el-breadcrumb-item",{attrs:{to:{path:"/index"}}},[t._v("HOME")]),t._v(" "),a("el-breadcrumb-item",[t._v("PRODUCT DETAIL")])],1),t._v(" "),a("div",[a("div",{staticClass:"contact_content",staticStyle:{"margin-top":"30px"}},[a("div",{staticClass:"contact_profile"},[a("div",{staticClass:"detail_image",staticStyle:{float:"left","margin-right":"30px",height:"500px"}},[a("el-image",{staticStyle:{width:"300px",height:"300px",border:"#409eff63 solid 2px"},attrs:{src:t.url,"preview-src-list":t.srcList}}),t._v(" "),a("product-carousel",{directives:[{name:"show",rawName:"v-show",value:t.categoryProductList.length>0,expression:"categoryProductList.length > 0"}],staticStyle:{"margin-bottom":"20px"},attrs:{"category-product-list":t.categoryProductList},on:{clickImg:t.clickImage}})],1),t._v(" "),a("div",{staticClass:"detail_text",staticStyle:{"font-size":"17px","margin-right":"15px"}},[a("div",[t._v("\n                  Product name:\n                  "),a("div",[t._v(t._s(t.pNameDesc))]),t._v(" "),a("div",{staticClass:"br_class",staticStyle:{height:"10px"}}),t._v("\n                  Product details:\n                  "),t._l(t.pDetailDescArr,function(e){return a("div",{key:e,staticClass:"product_desc"},[t._v(t._s(e))])})],2),t._v(" "),a("div",{staticStyle:{"margin-top":"10px"}},[a("div",{staticStyle:{"font-family":"initial"}},[a("span",{staticClass:"product_price"},[t._v("$ "),a("span",{staticStyle:{"font-size":"25px"}},[t._v(t._s(t.categoryPrice.split(".")[0]))]),t._v("."+t._s(t.categoryPrice.split(".")[1]))])]),t._v(" "),a("el-button",{attrs:{type:"primary",plain:""},on:{click:function(e){t.dialogFormVisible=!0}}},[a("i",{staticClass:"el-icon-thumb"}),t._v(" Buy Now")])],1)])]),t._v(" "),a("div",[a("el-dialog",{attrs:{title:"welcome to corecabe, we will contact you after confirm order !",visible:t.dialogFormVisible,center:""},on:{"update:visible":function(e){t.dialogFormVisible=e}}},[a("el-form",{ref:"form",staticStyle:{"margin-right":"50px"},attrs:{model:t.form,rules:t.rules}},[a("el-form-item",{attrs:{label:"Name",prop:"name","label-width":t.formLabelWidth}},[a("el-input",{attrs:{autocomplete:"off"},model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"Phone",prop:"phone","label-width":t.formLabelWidth}},[a("el-input",{attrs:{autocomplete:"off"},model:{value:t.form.phone,callback:function(e){t.$set(t.form,"phone",e)},expression:"form.phone"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"Mail",prop:"mail","label-width":t.formLabelWidth}},[a("el-input",{attrs:{autocomplete:"off"},model:{value:t.form.mail,callback:function(e){t.$set(t.form,"mail",e)},expression:"form.mail"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"Quantity",prop:"quantity","label-width":t.formLabelWidth}},[a("el-input",{attrs:{autocomplete:"off"},model:{value:t.form.quantity,callback:function(e){t.$set(t.form,"quantity",t._n(e))},expression:"form.quantity"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"Content",prop:"content","label-width":t.formLabelWidth}},[a("el-input",{attrs:{autocomplete:"off"},model:{value:t.form.content,callback:function(e){t.$set(t.form,"content",e)},expression:"form.content"}})],1)],1),t._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(e){return t.cancelForm()}}},[t._v("Cancel")]),t._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:function(e){return t.submitForm("form")}}},[t._v("OK")])],1)],1)],1)])])],1)])],1)],1)])},staticRenderFns:[]};var Nt=a("VU/8")(Ut,Mt,!1,function(t){a("ZIq8")},"data-v-32ceda63",null).exports,Ft={name:"Contact",components:{Banner:bt,LeftMenu:It},data:function(){return{user:{mapSrc:"static/images/map.jpg",username:"May",phone:"18138219389",mail:"Support@corecabe.com",address:"No.6 Yinkeng Road, Shangyuan Village, Qingxi Town,Dongguan, Guangdong,China"}}},methods:{change:function(t){}}},Rt={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"content"},[a("el-row",{attrs:{gutter:10}},[a("el-col",{attrs:{span:6}},[a("div",{staticClass:"grid-content bg-purple"},[a("LeftMenu",{on:{change:t.change}})],1)]),t._v(" "),a("el-col",{attrs:{span:18}},[a("div",{staticClass:"grid-content bg-purple-light"},[a("el-breadcrumb",{attrs:{"separator-class":"el-icon-arrow-right"}},[a("el-breadcrumb-item",{attrs:{to:{path:"/index"}}},[t._v("HOME")]),t._v(" "),a("el-breadcrumb-item",[t._v("CONTACT")])],1),t._v(" "),a("div",[a("div",{staticClass:"contact_content"},[a("div",{staticClass:"contact_profile"},[a("div",[a("ul",{staticClass:"user-info"},[a("li",[t._v("Contact："),a("div",{staticClass:"user-right"},[t._v(t._s(t.user.username))])]),t._v(" "),a("li",[t._v("Phone："),a("div",{staticClass:"user-right"},[t._v(t._s(t.user.phone))])]),t._v(" "),a("li",[t._v("Mail :"),a("div",{staticClass:"user-right"},[t._v(t._s(t.user.mail))])]),t._v(" "),a("li",[t._v("Address："),a("div",{staticClass:"user-right"},[t._v(" "+t._s(t.user.address))])])])])])])])],1)])],1)],1)])},staticRenderFns:[]};var Ht=a("VU/8")(Ft,Rt,!1,function(t){a("lVr3")},"data-v-8d8c70dc",null).exports,Ot={name:"About",components:{LeftMenu:It,Banner:bt},data:function(){return{}},methods:{change:function(t){}}},Vt={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"content"},[a("el-row",{attrs:{gutter:10}},[a("el-col",{attrs:{span:6}},[a("div",{staticClass:"grid-content bg-purple"},[a("LeftMenu",{on:{change:t.change}})],1)]),t._v(" "),a("el-col",{attrs:{span:18}},[a("div",{staticClass:"grid-content bg-purple-light"},[a("el-breadcrumb",{attrs:{"separator-class":"el-icon-arrow-right"}},[a("el-breadcrumb-item",{attrs:{to:{path:"/index"}}},[t._v("HOME")]),t._v(" "),a("el-breadcrumb-item",[t._v("ABOUT US")])],1),t._v(" "),a("div",{staticStyle:{"background-color":"#fafafa","border-radius":"3%"}},[a("div",{staticClass:"about_content"},[t._v("\n                             CoreCabe is a comprehensive enterprise dedicated in Consumer Electronics and Computer Accessories & Peripheral; It combines R&D, production, marketing, and service together.\n            The Company's products include HDMI/DisplayPort /USB/DVI/VGA Cable, Adapters and Automobile Wire Harness. Its self-owned brand UCoreCabe is now popularly Welcome and Recognized by customers.\n            CoreCabe with his own technical strength, integrity services, in the high-tech enterprises maintained a healthy, stable and rapid sustainable development.\n            "),a("br"),t._v(" "),a("div",[t._v("\n              CoreCabe aims to Environment Protection and Seek Development from Innovation,It aims to continuously improve the User Experience and has a Fundamental Mission to give back to the community.\n            ")]),t._v(" "),a("div",[t._v('\n              -Business Policy: "Quality First and Customer First "\n            ')]),t._v(" "),a("div",[t._v('\n              -Talent Concept: " To teach one how to fish rather than just giving one a fish"\n            ')]),t._v(" "),a("div",[t._v("\n              Certification: HDMI Adopter (Adopter No.:11865)USB-IF Member (Vendor ID:11219 )ISO9001:2008(Certificate No.10115Q14834 ROM)\n            ")]),t._v(" "),a("div",{staticClass:"br_class"}),t._v(" "),a("div",[t._v("\n              If there is any flaw on our products,we will do free return and full refund to you.\n            ")]),t._v(" "),a("div",{staticClass:"br_class"}),t._v(" "),a("div",[t._v("\n              We provide online customer service within the business hours from 16:00-24:00 PST/PDT everyday.\n            ")]),t._v(" "),a("div",{staticClass:"br_class"}),t._v(" "),a("div",[t._v("\n              Any messages will be answered within 2 hour.and the messages will be answered within 12 hours if sent at the off hours.\n            ")])])])],1)])],1)],1)])},staticRenderFns:[]};var $t=a("VU/8")(Ot,Vt,!1,function(t){a("wy6G")},null,null).exports;dt.default.use(ft.a);var Gt=new ft.a({routes:[{path:"/",redirect:"/index"},{path:"/index",name:"Index",component:At},{path:"/productList",name:"ProductList",component:Et},{path:"/productDetail",name:"ProductDetail",component:Nt},{path:"/contact",name:"Contact",component:Ht},{path:"/about",name:"About",component:$t}]});a("tvR6");dt.default.component(ut.a.name,ut.a),dt.default.component(ct.a.name,ct.a),dt.default.use(nt.a),dt.default.use(rt.a),dt.default.use(at.a),dt.default.use(tt.a),dt.default.use(K.a),dt.default.use(Z.a),dt.default.use(Q.a),dt.default.use(Y.a),dt.default.use(W.a),dt.default.use($.a),dt.default.use(O.a),dt.default.use(R.a),dt.default.use(N.a),dt.default.use(U.a),dt.default.use(k.a),dt.default.use(B.a),dt.default.use(I.a),dt.default.use(w.a),dt.default.use(D.a),dt.default.use(S.a),dt.default.use(_.a),dt.default.use(C.a),dt.default.use(v.a),dt.default.use(h.a),dt.default.use(m.a),dt.default.use(u.a),dt.default.use(c.a),dt.default.use(n.a),dt.default.use(r.a),dt.default.config.productionTip=!1,dt.default.prototype.$message=ct.a,dt.default.prototype.$msgbox=ut.a,dt.default.prototype.$alert=ut.a.alert,dt.default.prototype.$confirm=ut.a.confirm,dt.default.prototype.$prompt=ut.a.prompt,new dt.default({el:"#app",router:Gt,components:{App:vt},template:"<App/>"}),dt.default.prototype.resetSetItem=function(t,e){if("watchStorage"===t){var a=document.createEvent("StorageEvent");return{setItem:function(t,e){sessionStorage.setItem(t,e),a.initStorageEvent("setItem",!1,!1,t,null,e,null,null),window.dispatchEvent(a)}}.setItem(t,e)}if("watchStorageImageInfo"===t){var i=document.createEvent("StorageEvent");return{setItem:function(t,e){sessionStorage.setItem(t,e),i.initStorageEvent("setItem",!1,!1,t,null,e,null,null),window.dispatchEvent(i)}}.setItem(t,e)}}},NOFV:function(t,e){},"Nk/D":function(t,e){},Q6SQ:function(t,e){},RWjY:function(t,e){},V5Fk:function(t,e){},V5v9:function(t,e){},VXeF:function(t,e){},"X+ky":function(t,e){},Yq4J:function(t,e){},ZIq8:function(t,e){},Zae5:function(t,e){},Zki6:function(t,e){},ZzA9:function(t,e){},bwiK:function(t,e){},cwe7:function(t,e){},d7TW:function(t,e){},hXTu:function(t,e){},hpcH:function(t,e){},jZDA:function(t,e){},lVr3:function(t,e){},mcSw:function(t,e){},oq7i:function(t,e){},qunJ:function(t,e){},tvR6:function(t,e){},ukeg:function(t,e){},uqmp:function(t,e){},vBcO:function(t,e){},wy6G:function(t,e){},xBlb:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.f51f08d386899611ff59.js.map
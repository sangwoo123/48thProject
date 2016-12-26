(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        this.on_create = function()
        {
            // Declare Reference
            var obj = null;
            
            if (Form == this.constructor) {
                this.set_name("menuFrame");
                this.set_classname("menuFrame");
                this.set_titletext("menuFrame");
                this.set_scrollbars("none");
                this._setFormPosition(0,0,1275,105);
            }
            this.style.set_background("#90a4aeff");

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsService", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"serviceID\" type=\"STRING\" size=\"256\"/><Column id=\"URL\" type=\"STRING\" size=\"256\"/><Column id=\"inData\" type=\"STRING\" size=\"256\"/><Column id=\"outData\" type=\"STRING\" size=\"256\"/><Column id=\"argument\" type=\"STRING\" size=\"256\"/><Column id=\"callbackFunc\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"serviceID\">findAuthList</Col><Col id=\"URL\">his::com/findAuthList.do</Col><Col id=\"inData\"/><Col id=\"argument\"/><Col id=\"callbackFunc\">authCallback</Col><Col id=\"outData\"/></Row><Row><Col id=\"serviceID\">findMenuList</Col><Col id=\"URL\">his::com/findMenuList.do</Col><Col id=\"outData\">dsMenu=dsMenu</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsData", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"id\" type=\"STRING\" size=\"256\"/><Column id=\"userdata\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsMenu", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"menuCode\" type=\"STRING\" size=\"256\"/><Column id=\"menuName\" type=\"STRING\" size=\"256\"/><Column id=\"menuLevel\" type=\"STRING\" size=\"256\"/><Column id=\"menuUrl\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("subCodeStc", "absolute", "10.96%", "-1429", null, "27", "87.28%", null, this);
            obj.set_taborder("1");
            obj.set_text("권한명");
            obj.style.set_background("#c4d2daff");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 10 돋움");
            obj.getSetter("class").set("AreaStc");
            this.addChild(obj.name, obj);

            obj = new Static("empNameStc", "absolute", "92.16%", "55", "94", "44", null, null, this);
            obj.set_taborder("2");
            obj.style.set_background("#cfd8dcff");
            obj.style.set_border("0 none #ffffffff");
            obj.style.set_color("#555555ff");
            obj.style.set_bordertype("normal 0 0");
            obj.style.set_align("center middle");
            obj.style.set_font("normal 9 맑은고딕");
            obj.getSetter("class").set("AreaStc");
            this.addChild(obj.name, obj);

            obj = new Static("empNameStc00", "absolute", "92.16%", "6", "94", "44", null, null, this);
            obj.set_taborder("3");
            obj.style.set_background("#cfd8dcff");
            obj.style.set_border("0 none #ffffffff");
            obj.style.set_color("#555555ff");
            obj.style.set_bordertype("normal 0 0");
            obj.style.set_align("center middle");
            obj.style.set_font("normal 9 맑은고딕");
            obj.getSetter("class").set("AreaStc");
            this.addChild(obj.name, obj);

            obj = new Static("empNameStc01", "absolute", "84.71%", "55", "94", "44", null, null, this);
            obj.set_taborder("5");
            obj.style.set_background("#cfd8dcff");
            obj.style.set_border("0 none #ffffffff");
            obj.style.set_color("#555555ff");
            obj.style.set_bordertype("normal 0 0");
            obj.style.set_align("center middle");
            obj.style.set_font("normal 9 맑은고딕");
            obj.getSetter("class").set("AreaStc");
            obj.set_text("사용자");
            this.addChild(obj.name, obj);

            obj = new Static("empNameStc02", "absolute", "84.71%", "6", "94", "44", null, null, this);
            obj.set_taborder("6");
            obj.style.set_background("#cfd8dcff");
            obj.style.set_border("0 none #ffffffff");
            obj.style.set_color("#555555ff");
            obj.style.set_bordertype("normal 0 0");
            obj.style.set_align("center middle");
            obj.style.set_font("normal 9 맑은고딕");
            obj.getSetter("class").set("AreaStc");
            obj.set_text("사원번호");
            this.addChild(obj.name, obj);

            obj = new Menu("menu", "absolute", "8.24%", "0", null, "105", "15.76%", null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("7");
            obj.set_innerdataset("@dsMenu");
            obj.set_idcolumn("menuCode");
            obj.set_captioncolumn("menuName");
            obj.set_levelcolumn("menuLevel");
            obj.set_userdatacolumn("menuUrl");
            obj.style.set_itempadding("0 20 10 20");
            obj.style.set_itembackground("right middle");
            obj.style.set_itemborder("0 none #ccccccff,1 solid #ccccccff,0 none #ccccccff,0 none #ccccccff");
            obj.style.set_itemalign("center bottom");
            obj.style.set_popupborder("1 solid #21367eff");
            obj.style.set_popupitemheight("25");
            obj.style.set_popupitempadding("1 3 1 24");
            obj.style.set_popupcolor("black");
            obj.style.set_popupfont("antialias 10 Verdana");
            obj.style.set_background("#eceff1ff URL('img::menu.png')");
            obj.style.set_border("1 solid #808080ff");
            obj.style.set_color("black");
            obj.style.set_font("antialias 10 맑은 고딕 Semilight");

            obj = new Static("Static00", "absolute", "0.63%", "7", "90", "90", null, null, this);
            obj.set_taborder("8");
            obj.style.set_background("transparent URL('https://cdn0.iconfinder.com/data/icons/medical-volume-2-4/256/52-128.png') stretch");
            obj.style.set_bordertype("round 5 5");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1275, 105, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("menuFrame");
            		p.set_titletext("menuFrame");
            		p.style.set_background("#90a4aeff");
            		p.set_scrollbars("none");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item0","empNameStc","text","gdsEmp","empNm");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item1","empNameStc00","text","gdsEmp","empNo");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("menuFrame.xfdl", "scripts::commonScripts.xjs");
        this.registerScript("menuFrame.xfdl", function() {
        /********************************************************************************                                                                            
        메뉴 프레임                                            						                                                                         
        @Path			시스템 레이아웃 프레임          				   				
        @Description 	메뉴프레임						
        @Author	  		임행섭( modification by 강현준)			    			                        								                                            
        @Create         2016. 11. 25.                             		                    				                                            
        ********************************************************************************/

        //include "scripts::commonScripts.xjs";

        //메뉴클릭
        this.menu_onmenuclick = function(obj,e)
        {
        	//alert("권한 : "+application.dsHmEmp.getColumn(0,"pms"));	
        	//this.dsService.setColumn(0, 4, "authCode=" + application.gdsEmp.getColumn(0,"pms") + " menuCode=" + e.id);
        	//this.dsData.addRow();
        	this.dsData.setColumn(0, 0, e.id);
        	this.dsData.setColumn(0, 1, e.userdata);
        	//alert(e.userdata);
        	//this.gfnService("findAuth");
        	
        	var menuName=this.dsMenu.lookup("menuCode",this.dsData.getColumn(0,"id"),"menuName"); //클릭한 메뉴id의 메뉴이름 가져옴.
        	this.gfnOpen(this.dsData.getColumn(0, "id"), this.dsData.getColumn(0, "userdata"), menuName);//클릭한 메뉴의 아이디, 메뉴url, 메뉴이름을 넘김.
        	
        }
        this.authCallback = function(svcID,errorCode,errorMsg)
        {
        	if(errorCode > 0) {    
        		//var menuName=this.dsMenu.lookup("menuCode",this.dsData.getColumn(0,"id"),"menuName"); //클릭한 메뉴id의 메뉴이름 가져옴.
        		//this.gfn_open(this.dsData.getColumn(0,"id"),this.dsData.getColumn(0,"userdata"),menuName);//클릭한 메뉴의 아이디, 메뉴url, 메뉴이름을 넘김.
        	}else if(errorCode < 0){	
        		alert(errorMsg);
        	}
        }

        this.menuFrame_onload = function(obj,e)
        {
        	//메뉴가져온다.
        	this.gfnService("findMenuList");
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.menuFrame_onload, this);
            this.subCodeStc.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.empNameStc.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.empNameStc00.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.empNameStc01.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.empNameStc02.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.menu.addEventHandler("onmenuclick", this.menu_onmenuclick, this);

        };

        this.loadIncludeScript("menuFrame.xfdl");

       
    };
}
)();

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
                this.set_name("BBP_highChart");
                this.set_classname("BBP_highChart");
                this.set_titletext("경영통계 그래프");
                this.set_scrollbars("none");
                this._setFormPosition(0,0,796,429);
            }
            this.style.set_border("0 none #000000ff,1px solid #000000ff,1px solid #000000ff,0 none #000000ff");

            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new WebBrowser("WebBrowser00", "absolute", "-1", "0", "829", "430", null, null, this);
            obj.set_taborder("1");
            obj.getSetter("titletext").set("E-Chart");
            obj.style.set_border("0 solid #808080ff");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 796, 429, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("BBP_highChart");
            		p.set_titletext("경영통계 그래프");
            		p.set_scrollbars("none");
            		p.style.set_border("0 none #000000ff,1px solid #000000ff,1px solid #000000ff,0 none #000000ff");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.registerScript("BBP_highChart.xfdl", function() {

        
        this.BBP_highChart_oninit = function(obj,e)
        {
        	this.opener.dsSelectDailyPatientCopy.copyData(this.opener.dsSelectDailyPatient);
        	this.opener.dsSelectDailyPatientCopy.filter("ibwon=='퇴원'");
        	
        	var d = new Date();
        	var year=d.getFullYear();
        	var mon=(d.getMonth() + 1);
        	var day=d.getDate();
        	var jsonText1="";
        	var jsonText2="";
        		
        	for(var y=2010;y<year+1;y++){	
        	for(var m=1;m<13;m++){	
        	for(var d=1;d<32;d++){		
        	if((m+"").length<2){m="0"+m;}
        	if((d+"").length<2){d="0"+d;}
            var prescDateNum=y+""+m+""+d;
            var things=this.opener.dsSelectDailyPatient.getCaseCount("prescDate=="+prescDateNum);
            if(things>0){
            
            jsonText1+="'"+prescDateNum+"',";
            jsonText2+=things+",";

            }
        	}
        	}
        	}
        	
        	var jsonText3=jsonText1.slice(0,-1);
        	var jsonText4=jsonText2.slice(0,-1);

        var strUrl ="http://localhost:8282/his/Area.html?"+jsonText3+"-"+jsonText4;
        this.WebBrowser00.set_url(strUrl);
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("oninit", this.BBP_highChart_oninit, this);
            this.WebBrowser00.addEventHandler("onloadcompleted", this.WebBrowser00_onloadcompleted, this);

        };

        this.loadIncludeScript("BBP_highChart.xfdl");

       
    };
}
)();

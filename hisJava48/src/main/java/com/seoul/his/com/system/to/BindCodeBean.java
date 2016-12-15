package com.seoul.his.com.system.to;

import com.seoul.his.common.annotation.Dataset;
import com.seoul.his.common.to.BaseBean;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

/**
 * 
 * @Package : com.seoul.his.com.system.to 
 * @Class : BindCodeBean.java
 * @Create : 2016. 12. 15. 오후 8:23:45 
 * @Author : 강 현준
 */
@Getter
@Setter
@ToString
@Dataset(name = "dsBindCode")
public class BindCodeBean extends BaseBean {

    private String code,            // 코드그룹코드
                   dsName;          // 데이터셋명

}
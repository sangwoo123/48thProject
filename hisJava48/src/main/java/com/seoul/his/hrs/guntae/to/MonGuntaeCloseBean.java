package com.seoul.his.hrs.guntae.to;

import com.seoul.his.common.annotation.Dataset;
import com.seoul.his.common.to.BaseBean;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

/**
 * @Package  com.seoul.his.hrs.guntae.to
 * @Class    MonGuntaeCloseBean.java
 * @Create   2016. 5. 26.
 * @Author   yi
 * @Description
 *
 * @LastUpdated
 *      2016.05.26
 */
@Dataset(name="dsMonGuntaeClose")
@Getter
@Setter
@ToString
public class MonGuntaeCloseBean extends BaseBean{

	private String
    		monGuntaeNo
    	  , belongYearMon
    	  , closeYn;
}

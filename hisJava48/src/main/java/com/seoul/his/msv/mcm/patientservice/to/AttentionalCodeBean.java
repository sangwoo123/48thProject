package com.seoul.his.msv.mcm.patientservice.to;

import com.seoul.his.common.annotation.Dataset;
import com.seoul.his.common.to.BaseBean;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

/**
 * @author  :   Minhyeog
 * @date     :   2016. 11. 30.
 */

@Getter
@Setter
@ToString

@Dataset(name = "dsAttentionalCode")
public class AttentionalCodeBean extends BaseBean {

	private String attentionalCode ,attentionalCodeName;

}

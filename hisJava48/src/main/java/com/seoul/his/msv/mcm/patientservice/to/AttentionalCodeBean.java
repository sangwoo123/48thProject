package com.seoul.his.msv.mcm.patientservice.to;

import com.seoul.his.common.annotation.Dataset;
import com.seoul.his.common.to.BaseBean;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;



@Getter
@Setter
@ToString

@Dataset(name = "dsAttentionalCode")
public class AttentionalCodeBean extends BaseBean {




	private String attentionalCode ,attentionalCodeName, attentionalField;

}

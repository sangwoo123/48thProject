package com.seoul.his.msv.mcm.patientservice.dao;

import java.util.List;
import java.util.Map;

import com.seoul.his.msv.mcm.patientservice.to.AttentionalCodeBean;

public interface AttentionalCodeDAO {

	List<AttentionalCodeBean> selectAttentionalCodeList(Map<String, String> argsMap);

}

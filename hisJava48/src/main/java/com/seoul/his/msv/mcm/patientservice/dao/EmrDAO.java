package com.seoul.his.msv.mcm.patientservice.dao;

import java.util.List;
import java.util.Map;

import com.seoul.his.msv.mcm.patientservice.to.EmrBean;

public interface EmrDAO {
	List<EmrBean> selectEmrList(Map<String, String> argsMap);
}

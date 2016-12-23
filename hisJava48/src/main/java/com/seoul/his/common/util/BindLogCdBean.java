package com.seoul.his.common.util;

import com.seoul.his.common.annotation.Dataset;
import com.seoul.his.common.to.BaseBean;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
@Dataset(name = "dsBindLogCd")
public class BindLogCdBean extends BaseBean {

    private String cdDiv,       // 코드구분
                   code,        // 코드
                   secCode,     // 검색조건 코드1
                   thrCode,     // 검색조건 코드2
                   cdNm,        // 코드명
                   dsLogName;   // 데이터셋명
    
}
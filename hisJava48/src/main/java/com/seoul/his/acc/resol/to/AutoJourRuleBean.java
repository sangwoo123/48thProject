package com.seoul.his.acc.resol.to;

import com.seoul.his.common.annotation.Dataset;
import com.seoul.his.common.to.BaseBean;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Setter
@Getter
@ToString
@Dataset(name = "dsAutoJourRule")
public class AutoJourRuleBean extends BaseBean{
    private String  accYear      , //ȸ��⵵
            busiDivCd    , //���������ڵ�
            jourDivNm    , //�а����и�
            creDebDiv    , //��������
            acntCd       , //���������ڵ�
            assiSubCd  , //���������ڵ�
            note         , //���
            jourCd       , //�а��ڵ�
            parentJourCd , //�����а��ڵ�
            acntCdNm     , //���������
            assiSubCdNm  , //���������
            bimokCd		 ; //������ �ڵ�
}

package com.seoul.his.acc.resol.to;

import com.seoul.his.common.annotation.Dataset;
import com.seoul.his.common.to.BaseBean;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Setter
@Getter
@ToString
@Dataset(name = "dsCardUseRec")
public class CardUseRecBean extends BaseBean{
    private String  cardNo          ,  //ī���ȣ
                    cardKnd         ,  //ī������
                    aprvNo          ,  //���ι�ȣ
                    anspAmt         ,  //û���ݾ�
                    signDate        ,  //��������
                    custCd          ,  //�ŷ�ó�ڵ�
                    custNm          ,  //�ŷ�ó��
                    operNo          ,  //����ڹ�ȣ
                    addr             ,  //�ּ�
                    signAccntNo    ,  //������¹�ȣ
                    signBank        ,  //��������
                    accountHolder   ,  //������
                    splyPrice       ,  //���ް���
                    taxAmt          ,  //����
                    danDiv          ,  //�ܱ���
                    cardDiv			, //ī�屸��
                    empNo			; //�����ȣ
}

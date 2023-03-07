use develop;

insert into _global(`key`,`value`,memo,created_at,updated_at,deleted_at) values 
    ('imageDomain','http://localhost:5001','이미지 도메인',now(),null,null);

insert into _global(`key`,`value`,memo,created_at,updated_at,deleted_at) values 
    ('role','{"U": "사용자", "A": "관리자", "SA": "시스템관리자"}','권한 (JSON)',now(),null,null);    

insert into _global(`key`,`value`,memo,created_at,updated_at,deleted_at) values 
    ('appLogo','http://localhost:5001/9415e64f-5328-4706-909f-abc34fba1427.png','앱 로고',now(),null,null);

insert into _global(`key`,`value`,memo,created_at,updated_at,deleted_at) values 
    ('appName','치히로 관리자','앱 이름',now(),null,null);

insert into _global(`key`,`value`,memo,created_at,updated_at,deleted_at) values 
    ('appDesc','프로그래밍 하기 싫어요','앱 설명',now(),null,null);
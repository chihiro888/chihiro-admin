use develop;

insert into _global(`key`,`value`,memo,created_at,updated_at,deleted_at) values 
    ('imageDomain','http://localhost:5001','이미지 도메인',now(),null,null);

insert into _global(`key`,`value`,memo,created_at,updated_at,deleted_at) values 
    ('role','{"U": "사용자", "A": "관리자", "SA": "시스템관리자"}','권한 (JSON)',now(),null,null);    
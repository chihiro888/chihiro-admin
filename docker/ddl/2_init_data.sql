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

insert into `_file` (`abs_path`, `created_at`, `enc_name`, `extension`, `h_size`, `note`, `raw_name`, `size`, `table_name`, `table_pk`, `type`) 
    values ('', now(), '9415e64f-5328-4706-909f-abc34fba1427.png', 'png', '17KB', 'logo', 'logo.png', 17454, NULL, NULL, NULL)

/*
insert into `_page` (`action_list`, `add_form`, `create_api`, `created_at`, `delete_api`, `deleted_at`, `detail_api`, `detail_form`, `id`, `list_api`, `search_form`, `sub_title`, `table_header`, `title`, `updated_at`, `url`, `use_create_api`, `use_delete_api`, `use_detail_api`, `use_list_api`) values ('[]', '[]', '', '2023-03-08 13:59:26', NULL, NULL, 'getLoginHistoryDetail', '[{\"label\":\"아이디\",\"key\":\"id\",\"value\":\"\"},{\"label\":\"사용자 아이디\",\"key\":\"userId\",\"value\":\"\"},{\"label\":\"타입\",\"key\":\"type\",\"value\":\"\"},{\"label\":\"생성일자\",\"key\":\"createdAt\",\"value\":\"\"},{\"label\":\"수정일자\",\"key\":\"updatedAt\",\"value\":\"\"},null,{\"label\":\"삭제일자\",\"key\":\"deletedAt\",\"value\":\"\"}]', 1, 'getLoginHistoryList', '[{\"type\":\"text\",\"label\":\"계정\",\"key\":\"account\",\"value\":\"\"},{\"type\":\"select\",\"label\":\"타입\",\"key\":\"type\",\"value\":\"\",\"list\":[{\"label\":\"로그인\",\"value\":1},{\"label\":\"로그아웃\",\"value\":0}]},{\"type\":\"date\",\"label\":\"생성일자\",\"key\":\"createdAt\",\"value\":\"\"}]', '로그인 이력을 확인할 수 있습니다.', '[\"아이디\",\"사용자아이디\",\"사용자계정\",\"사용자명\",\"타입\",\"생성일자\",\"수정일자\",\"액션\"]', '로그인 이력', NULL, 'userHistory', 0, 0, 1, 1);
insert into `_page` (`action_list`, `add_form`, `create_api`, `created_at`, `delete_api`, `deleted_at`, `detail_api`, `detail_form`, `id`, `list_api`, `search_form`, `sub_title`, `table_header`, `title`, `updated_at`, `url`, `use_create_api`, `use_delete_api`, `use_detail_api`, `use_list_api`) values ('[]', '[{\"type\":\"text\",\"label\":\"계정\",\"key\":\"account\",\"value\":\"\"},{\"type\":\"password\",\"label\":\"비밀번호\",\"key\":\"password\",\"value\":\"\"},{\"type\":\"password\",\"label\":\"비밀번호 확인\",\"key\":\"confirmPassword\",\"value\":\"\"},{\"type\":\"text\",\"label\":\"사용자명\",\"key\":\"username\",\"value\":\"\"},{\"type\":\"upload\",\"label\":\"이미지\",\"key\":\"profile\",\"value\":[],\"allowFileExt\":[\".png\",\".jpg\",\".jpeg\",\".gif\"],\"maxFileCount\":1,\"maxFileSizeBytes\":4194304},{\"type\":\"editor\",\"label\":\"에디터\",\"key\":\"intro\",\"value\":\"\"},{\"type\":\"select\",\"label\":\"권한\",\"key\":\"role\",\"value\":\"\",\"list\":[{\"label\":\"시스템 관리자\",\"value\":\"SA\"},{\"label\":\"관리자\",\"value\":\"A\"},{\"label\":\"사용자\",\"value\":\"U\"}]}]', 'createUser', '2023-03-08 14:06:26', 'deleteUser', NULL, 'getUserDetail', '[{\"label\":\"아이디\",\"key\":\"id\",\"value\":\"\"},{\"label\":\"계정\",\"key\":\"account\",\"value\":\"\"},{\"label\":\"비밀번호\",\"key\":\"password\",\"value\":\"\"},{\"label\":\"사용자명\",\"key\":\"username\",\"value\":\"\"},{\"label\":\"시스템관리자\",\"key\":\"isSystemAdmin\",\"value\":\"\"},{\"label\":\"관리자\",\"key\":\"isAdmin\",\"value\":\"\"},{\"label\":\"생성일자\",\"key\":\"createdAt\",\"value\":\"\"},{\"label\":\"수정일자\",\"key\":\"updatedAt\",\"value\":\"\"},{\"label\":\"삭제일자\",\"key\":\"deletedAt\",\"value\":\"\"}]', 2, 'getUserList', '[{\"type\":\"text\",\"label\":\"계정\",\"key\":\"account\",\"value\":\"\"},{\"type\":\"select\",\"label\":\"권한\",\"key\":\"role\",\"value\":\"\",\"list\":[{\"label\":\"시스템관리자\",\"value\":\"SA\"},{\"label\":\"관리자\",\"value\":\"A\"},{\"label\":\"사용자\",\"value\":\"U\"}]},{\"type\":\"date\",\"label\":\"생성일자\",\"key\":\"createdAt\",\"value\":\"\"}]', '사용자를 관리할 수 있습니다.', '[\"프로필\",\"아이디\",\"계정\",\"소개\",\"비밀번호\",\"사용자명\",\"권한\",\"생성일자\",\"수정일자\",\"액션\"]', '사용자 관리', NULL, 'userList', 1, 1, 1, 1);
*/

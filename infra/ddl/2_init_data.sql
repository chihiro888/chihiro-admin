use develop;

-- password is '12341234'
insert into _user(account, password, username, is_admin, is_developer)
values('chihiro888@github.com', '$2b$10$UDb8KzYXwwTSXLlpxr.NGef1PCq1cFS8DI7DVCbFQKuPw.02GbxNW', 'Chihiro', 1, 1);

-- sample data
insert into _query(id,type,exec_query,success_cnt,fail_cnt,user_id,ip_address,created_at,updated_at,deleted_at) values (2,'IST','insert into _user(id,account,password,username,is_admin,is_developer,sign_in_at,sign_out_at,created_at,updated_at,deleted_at) values (6,''test5@github.com'',''$2b$10$mJwRQE578PZoYHtLM.rz8OlqRglgzKjQa71rrvs8gAmm.CvzakuPi'',''test5'',0,0,null,null,''9/5/2022 9:25:34 PM'',null,null);',1,0,1,'127.0.0.1',null,null,null);
insert into _query(id,type,exec_query,success_cnt,fail_cnt,user_id,ip_address,created_at,updated_at,deleted_at) values (3,'SLT','select now()',1,0,1,'127.0.0.1',null,null,null);
insert into _query(id,type,exec_query,success_cnt,fail_cnt,user_id,ip_address,created_at,updated_at,deleted_at) values (1,'UPT','update _user set account = ''abc@naver.com'' where id = ''1''',1,0,1,'127.0.0.1',null,null,null);
